import React from 'react';
import Link from 'next/link';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

const CATEGORIES = [
  'All',
  'Next.js',
  'JavaScript',
  'Java',
  'AI & ML',
  'Cloud & DevOps',
  'Latest Tech',
];

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function PublicBlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const selectedCategory =
    category && CATEGORIES.includes(category) ? category : 'All';

  await connectDB();

  const filter: Record<string, unknown> = { published: true };
  if (selectedCategory !== 'All') {
    filter.category = selectedCategory;
  }

  const posts = await Blog.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#070d19', color: '#f8fafc', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: '#f97316', fontWeight: 700, letterSpacing: 1.5 }}
          >
            AGNIK TECH JOURNAL
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 0.5, mb: 1.5, fontWeight: 800 }}
          >
            Latest Tech &amp; Engineering Blogs
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: 680 }}>
            Practical articles, code snippets, and insights on Next.js, JavaScript, Java, and modern software development.
          </Typography>
        </Box>

        {/* Category Filter Chips */}
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 5 }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const href = cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`;
            return (
              <Link key={cat} href={href} style={{ textDecoration: 'none' }}>
                <Chip
                  label={cat}
                  clickable
                  sx={{
                    px: 1,
                    py: 2,
                    fontWeight: 700,
                    bgcolor: active ? '#f97316' : '#0d1829',
                    color: active ? '#070d19' : '#cbd5e1',
                    border: '1px solid',
                    borderColor: active ? '#f97316' : 'rgba(255,255,255,0.12)',
                    '&:hover': {
                      bgcolor: active ? '#ea580c' : 'rgba(255,255,255,0.06)',
                    },
                  }}
                />
              </Link>
            );
          })}
        </Stack>

        {/* Blog Cards */}
        {posts.length === 0 ? (
          <Card
            sx={{
              bgcolor: '#0d1829',
              color: '#94a3b8',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 3,
              p: 5,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6">No published blogs in this category yet.</Typography>
          </Card>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {posts.map((post) => (
              <Link
                key={String(post._id)}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'flex' }}
              >
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#0d1829',
                    color: '#f8fafc',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#f97316',
                    },
                  }}
                >
                  {post.coverImage && (
                    <CardMedia
                      component="img"
                      height="190"
                      image={post.coverImage}
                      alt={post.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 2.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(249,115,22,0.15)',
                          color: '#f97316',
                          fontWeight: 700,
                        }}
                      />
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })
                          : ''}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ lineHeight: 1.35, fontWeight: 700 }}
                    >
                      {post.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#94a3b8', flexGrow: 1 }}>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}