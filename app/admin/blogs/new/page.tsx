import React from 'react';
import { redirect } from 'next/navigation';
import { getSessionAdmin } from '@/lib/auth';
import AdminShell from '@/app/admin/components/AdminShell';
import BlogEditorForm from '@/app/admin/components/BlogEditorForm';

export default async function NewBlogPage() {
  const admin = await getSessionAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  return (
    <AdminShell>
      <BlogEditorForm mode="create" />
    </AdminShell>
  );
}