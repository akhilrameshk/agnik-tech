import React from 'react';
import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import BlogDetailClient, { PublicBlogPost } from './BlogDetailClient';

export const dynamic = 'force-dynamic';

interface SingleBlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params;
  await connectDB();

  const doc = await Blog.findOne({ slug, published: true }).lean();
  if (!doc) {
    notFound();
  }

  const serializedPost: PublicBlogPost = JSON.parse(
    JSON.stringify({
      _id: String(doc._id),
      title: String(doc.title || ''),
      slug: String(doc.slug || slug),
      excerpt: String(doc.excerpt || ''),
      category: String(doc.category || 'Latest Tech'),
      tags: Array.isArray(doc.tags) ? doc.tags.map((t:any) => String(t)) : [],
      coverImage: String(doc.coverImage || ''),
      blocks: Array.isArray(doc.blocks)
        ? doc.blocks.map((b:any) => ({
            type:
              b.type === 'heading' ||
              b.type === 'code' ||
              b.type === 'image' ||
              b.type === 'paragraph'
                ? b.type
                : 'paragraph',
            content: String(b.content || ''),
            language: String(b.language || 'typescript'),
            caption: String(b.caption || ''),
          }))
        : [],
      createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : '',
    })
  );

  return <BlogDetailClient post={serializedPost} />;
}