import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { requireProtectedAdminApi } from '@/lib/auth';
import Blog from '@/models/Blog';

function makeSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function GET(req: NextRequest) {
  const guard = await requireProtectedAdminApi(req);
  if (!guard.ok) return guard.response;

  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ blogs });
  } catch (err) {
    console.error('GET /api/admin/blogs error:', err);
    return NextResponse.json({ error: 'Failed to load blogs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const guard = await requireProtectedAdminApi(req);
  if (!guard.ok) return guard.response;

  try {
    await connectDB();
    const body = await req.json();

    const title = String(body?.title || '').trim();
    const excerpt = String(body?.excerpt || '').trim();
    const category = String(body?.category || 'Latest Tech').trim();
    const coverImage = String(body?.coverImage || '').trim();
    const published = Boolean(body?.published ?? true);

    const rawSlug = String(body?.slug || '').trim();
    const baseSlug = makeSlug(rawSlug || title) || `post-${Date.now()}`;

    let finalSlug = baseSlug;
    let counter = 1;
    while (await Blog.exists({ slug: finalSlug })) {
      finalSlug = `${baseSlug}-${counter++}`;
    }

    const tags = Array.isArray(body?.tags)
      ? body.tags.map((t: unknown) => String(t).trim()).filter(Boolean)
      : String(body?.tags || '')
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);

    const blocks = Array.isArray(body?.blocks)
      ? body.blocks
          .filter((b: unknown) => b && typeof b === 'object')
          .map((b: Record<string, unknown>) => ({
            type: ['paragraph', 'heading', 'code', 'image'].includes(String(b.type))
              ? String(b.type)
              : 'paragraph',
            content: String(b.content || ''),
            language: String(b.language || 'typescript'),
            caption: String(b.caption || ''),
          }))
      : [];

    if (!title || !excerpt || !coverImage) {
      return NextResponse.json(
        { error: 'Title, excerpt, and cover image are required' },
        { status: 400 }
      );
    }

    const blog = await Blog.create({
      title,
      slug: finalSlug,
      excerpt,
      category,
      tags,
      coverImage,
      blocks,
      published,
    });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (err) {
    console.error('POST /api/admin/blogs error:', err);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}