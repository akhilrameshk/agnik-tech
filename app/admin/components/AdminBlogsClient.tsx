// app/admin/components/AdminBlogsClient.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

export interface AdminBlogItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export default function AdminBlogsClient({ initialBlogs }: { initialBlogs: AdminBlogItem[] }) {
  const [blogs, setBlogs] = useState<AdminBlogItem[]>(initialBlogs);
  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this blog post?');
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        setToast({ open: true, message: 'Failed to delete blog', severity: 'error' });
        return;
      }

      setBlogs((prev) => prev.filter((item) => item._id !== id));
      setToast({ open: true, message: 'Blog deleted', severity: 'success' });
    } catch {
      setToast({ open: true, message: 'Network error while deleting', severity: 'error' });
    }
  };

  const handleCopyShareLink = async (slug: string) => {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (typeof window !== 'undefined' ? window.location.origin : '');
    const shareUrl = `${baseUrl.replace(/\/$/, '')}/blog/${slug}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setToast({ open: true, message: `Share link copied: ${shareUrl}`, severity: 'success' });
    } catch {
      setToast({ open: true, message: shareUrl, severity: 'success' });
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h5" >
            Manage Tech Blogs
          </Typography>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Create, edit, share, or remove technical articles
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/admin/blogs/new"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#f97316',
            color: '#070d19',
            fontWeight: 700,
            '&:hover': { bgcolor: '#ea580c' },
          }}
        >
          New Blog
        </Button>
      </Box>

      <Card
        sx={{
          bgcolor: '#0d1829',
          color: '#f8fafc',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 3,
        }}
      >
        <TableContainer component={Paper} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ '& th': { color: '#94a3b8', borderColor: 'rgba(255,255,255,0.08)', fontWeight: 700 } }}>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 5, color: '#94a3b8', borderColor: 'rgba(255,255,255,0.08)' }}>
                    No blogs added yet. Click &ldquo;New Blog&rdquo; to publish your first tech post.
                  </TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow
                    key={blog._id}
                    sx={{
                      '& td': { color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.06)' },
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' },
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" >
                        {blog.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        /blog/{blog.slug}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={blog.category}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(249,115,22,0.14)',
                          color: '#f97316',
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={blog.published ? 'Published' : 'Draft'}
                        size="small"
                        sx={{
                          bgcolor: blog.published
                            ? 'rgba(34, 197, 94, 0.15)'
                            : 'rgba(148, 163, 184, 0.15)',
                          color: blog.published ? '#4ade80' : '#94a3b8',
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Copy Share Link">
                        <IconButton
                          size="small"
                          onClick={() => handleCopyShareLink(blog.slug)}
                          sx={{ color: '#38bdf8' }}
                        >
                          <ShareIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Blog">
                        <IconButton
                          size="small"
                          component={Link}
                          href={`/admin/blogs/edit/${blog._id}`}
                          sx={{ color: '#f97316' }}
                        >
                          <EditOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Blog">
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(blog._id)}
                          sx={{ color: '#ef4444' }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Snackbar
        open={toast.open}
        autoHideDuration={3500}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
      >
        <Alert severity={toast.severity} variant="filled">
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}