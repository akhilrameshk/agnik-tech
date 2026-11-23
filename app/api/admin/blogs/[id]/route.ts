import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/mongodb';
import { requireProtectedAdminApi } from '@/lib/auth';
import Blog from '@/models/Blog';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const guard = await requireProtectedAdminApi(req);
  if (!guard.ok) return guard.response;

  const { id } = await context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }

  await connectDB();
  const blog = await Blog.findById(id).lean();
  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({ blog });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const guard = await requireProtectedAdminApi(req);
  if (!guard.ok) return guard.response;

  const { id } = await context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }

  try {
    await connectDB();
    const body = await req.json();

    const updateData: Record<string, unknown> = {};
    if (body.title !== undefined) updateData.title = String(body.title).trim();
    if (body.slug !== undefined) updateData.slug = String(body.slug).trim().toLowerCase();
    if (body.excerpt !== undefined) updateData.excerpt = String(body.excerpt).trim();
    if (body.category !== undefined) updateData.category = String(body.category).trim();
    if (body.coverImage !== undefined) updateData.coverImage = String(body.coverImage).trim();
    if (body.published !== undefined) updateData.published = Boolean(body.published);

    if (body.tags !== undefined) {
      updateData.tags = Array.isArray(body.tags)
        ? body.tags.map((t: unknown) => String(t).trim()).filter(Boolean)
        : String(body.tags)
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean);
    }

    if (body.blocks !== undefined && Array.isArray(body.blocks)) {
      updateData.blocks = body.blocks.map((b: Record<string, unknown>) => ({
        type: ['paragraph', 'heading', 'code', 'image'].includes(String(b.type))
          ? String(b.type)
          : 'paragraph',
        content: String(b.content || ''),
        language: String(b.language || 'typescript'),
        caption: String(b.caption || ''),
      }));
    }

    const updated = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).lean();

    if (!updated) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ blog: updated });
  } catch (err) {
    console.error('PUT /api/admin/blogs/[id] error:', err);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const guard = await requireProtectedAdminApi(req);
  if (!guard.ok) return guard.response;

  const { id } = await context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }

  await connectDB();
  const deleted = await Blog.findByIdAndDelete(id).lean();
  if (!deleted) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}