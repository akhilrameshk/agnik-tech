'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export interface PublicBlogBlock {
  type: 'paragraph' | 'heading' | 'code' | 'image';
  content: string;
  language?: string;
  caption?: string;
}

export interface PublicBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  blocks: PublicBlogBlock[];
  createdAt: string;
}

export interface BlogAdSlots {
  top?: string;
  mid?: string;
  bottom?: string;
  footerAd?: string;
}

function AdSlotBanner({
  adSlot,
  label = 'Advertisement',
  showSample = true,
}: {
  adSlot?: string;
  label?: string;
  showSample?: boolean;
}) {
  const pushedRef = useRef(false);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId || !adSlot || pushedRef.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      // AdSense not ready or blocked
    }
  }, [clientId, adSlot]);

  if (clientId && adSlot) {
    return (
      <Box
        sx={{
          my: 2.5,
          textAlign: 'center',
          overflow: 'hidden',
          maxHeight: 110,
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', maxHeight: '100px' }}
          data-ad-client={clientId}
          data-ad-slot={adSlot}
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </Box>
    );
  }

  if (!showSample) {
    return null;
  }

  return (
    <Box
      sx={{
        my: 2.5,
        px: 2,
        py: 1.25,
        borderRadius: 2,
        border: '1px dashed rgba(249, 115, 22, 0.45)',
        bgcolor: 'rgba(13, 24, 41, 0.75)',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: '#94a3b8',
          letterSpacing: 0.8,
          textTransform: 'uppercase',
          fontSize: '0.68rem',
          fontWeight: 600,
        }}
      >
        {label} • Ad Space
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: '#f97316',
          fontWeight: 600,
          fontSize: '0.85rem',
        }}
      >
        Sponsored Banner Preview (Compact Horizontal)
      </Typography>
    </Box>
  );
}

function CodeSnippetBlock({
  code,
  language,
  caption,
}: {
  code: string;
  language?: string;
  caption?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box
      sx={{
        my: 3,
        borderRadius: 2.5,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.12)',
        bgcolor: '#050913',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          bgcolor: '#0d1829',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: '#f97316', fontWeight: 700, fontFamily: 'monospace' }}
        >
          {(language || 'code').toUpperCase()}
          {caption ? ` • ${caption}` : ''}
        </Typography>

        <Button
          type="button"
          size="small"
          onClick={handleCopy}
          startIcon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          sx={{
            color: copied ? '#4ade80' : '#cbd5e1',
            textTransform: 'none',
            fontSize: '0.78rem',
          }}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </Box>

      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.5,
          overflowX: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: '#e2e8f0',
        }}
      >
        <code>{code}</code>
      </Box>
    </Box>
  );
}

export default function BlogDetailClient({
  post,
  adSlots,
}: {
  post?: PublicBlogPost | null;
  adSlots?: BlogAdSlots;
}) {
  const router = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);

  if (!post) {
    return null;
  }

  const blocks = Array.isArray(post.blocks) ? post.blocks : [];
  const midIndex = blocks.length > 1 ? Math.floor(blocks.length / 2) - 1 : -1;

  const handleShare = async () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (typeof window !== 'undefined' ? window.location.origin : '');
    const shareUrl = `${baseUrl.replace(/\/$/, '')}/blog/${post.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url: shareUrl });
        return;
      }
    } catch {
      // Fallback to clipboard copy
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
    } catch {
      setCopiedLink(true);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#070d19', color: '#f8fafc', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Button
            type="button"
            onClick={() => router.push('/blog')}
            startIcon={<ArrowBackIcon />}
            sx={{ color: '#cbd5e1', textTransform: 'none' }}
          >
            All Blogs
          </Button>

          <Button
            type="button"
            variant="outlined"
            size="small"
            startIcon={<ShareIcon fontSize="small" />}
            onClick={handleShare}
            sx={{
              color: '#f97316',
              borderColor: 'rgba(249,115,22,0.5)',
              textTransform: 'none',
              fontWeight: 700,
            }}
          >
            Share Post
          </Button>
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ mb: 2 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{ bgcolor: 'rgba(249,115,22,0.15)', color: '#f97316', fontWeight: 700 }}
          />
          {post.createdAt && (
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>
              {new Date(post.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Typography>
          )}
        </Stack>

        <Typography variant="h3" sx={{ mb: 2, lineHeight: 1.25, fontWeight: 800 }}>
          {post.title}
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.65 }}>
          {post.excerpt}
        </Typography>

        {post.coverImage && (
          <Box
            component="img"
            src={post.coverImage}
            alt={post.title}
            sx={{
              width: '100%',
              maxHeight: 440,
              objectFit: 'cover',
              borderRadius: 3,
              mb: 4,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />
        )}

        {/* Ad 1: Top */}
        <AdSlotBanner adSlot={adSlots?.top} label="Top Banner" />

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 4 }} />

        <Box>
          {blocks.map((block, idx) => {
            let blockElement: React.ReactNode;

            if (block.type === 'heading') {
              blockElement = (
                <Typography
                  variant="h5"
                  sx={{ mt: 4, mb: 1.5, color: '#f8fafc', fontWeight: 700 }}
                >
                  {block.content}
                </Typography>
              );
            } else if (block.type === 'code') {
              blockElement = (
                <CodeSnippetBlock
                  code={block.content}
                  language={block.language}
                  caption={block.caption}
                />
              );
            } else if (block.type === 'image') {
              blockElement = (
                <Box sx={{ my: 3, textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={block.content}
                    alt={block.caption || post.title}
                    sx={{
                      maxWidth: '100%',
                      borderRadius: 2.5,
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                  {block.caption && (
                    <Typography variant="caption" sx={{ color: '#94a3b8', mt: 1, display: 'block' }}>
                      {block.caption}
                    </Typography>
                  )}
                </Box>
              );
            } else {
              blockElement = (
                <Typography
                  variant="body1"
                  sx={{ color: '#e2e8f0', lineHeight: 1.8, mb: 2.5 }}
                >
                  {block.content}
                </Typography>
              );
            }

            return (
              <React.Fragment key={idx}>
                {blockElement}
                {/* Ad 2: Mid-article */}
                {idx === midIndex && <AdSlotBanner adSlot={adSlots?.mid} label="Mid-Article Ad" />}
              </React.Fragment>
            );
          })}
        </Box>

        {/* Ad 3: Bottom of blocks */}
        <AdSlotBanner adSlot={adSlots?.bottom} label="Bottom Ad" />

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: 'wrap', mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                size="small"
                sx={{ bgcolor: '#0d1829', color: '#94a3b8' }}
              />
            ))}
          </Stack>
        )}

        {/* Ad 4: After tags */}
        <AdSlotBanner adSlot={adSlots?.footerAd} label="Footer Ad" />

        <Snackbar
          open={copiedLink}
          autoHideDuration={2500}
          onClose={() => setCopiedLink(false)}
        >
          <Alert severity="success" variant="filled">
            Blog link copied to clipboard!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}