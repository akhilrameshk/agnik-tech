import React from 'react';
import { notFound, redirect } from 'next/navigation';
import mongoose from 'mongoose';
import { getSessionAdmin } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import AdminShell from '@/app/admin/components/AdminShell';
import BlogEditorForm, { EditorBlock } from '@/app/admin/components/BlogEditorForm';

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const admin = await getSessionAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  await connectDB();
  const blog = await Blog.findById(id).lean();
  if (!blog) {
    notFound();
  }

  const formattedBlocks: EditorBlock[] = Array.isArray(blog.blocks)
    ? blog.blocks.map((b:any) => ({
        type: b.type,
        content: b.content || '',
        language: b.language || 'typescript',
        caption: b.caption || '',
      }))
    : [];

  return (
    <AdminShell>
      <BlogEditorForm
        mode="edit"
        initialData={{
          _id: String(blog._id),
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          category: blog.category,
          tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
          coverImage: blog.coverImage,
          published: Boolean(blog.published),
          blocks: formattedBlocks,
        }}
      />
    </AdminShell>
  );
}