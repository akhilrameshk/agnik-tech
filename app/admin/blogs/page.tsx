// app/admin/blogs/page.tsx
import React from 'react';
import { redirect } from 'next/navigation';
import { getSessionAdmin } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import AdminShell from '@/app/admin/components/AdminShell';
import AdminBlogsClient, { AdminBlogItem } from '@/app/admin/components/AdminBlogsClient';

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
  const admin = await getSessionAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  await connectDB();
  const docs = await Blog.find().sort({ createdAt: -1 }).lean();

  const blogs: AdminBlogItem[] = docs.map((d) => ({
    _id: String(d._id),
    title: d.title,
    slug: d.slug,
    category: d.category,
    published: Boolean(d.published),
    createdAt: d.createdAt ? new Date(d.createdAt).toISOString() : '',
  }));

  return (
    <AdminShell>
      <AdminBlogsClient initialBlogs={blogs} />
    </AdminShell>
  );
}