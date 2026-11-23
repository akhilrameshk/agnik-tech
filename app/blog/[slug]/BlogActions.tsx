// app/blog/[slug]/BlogActions.tsx
'use client';

import React, { useState } from 'react';
import { Button, Snackbar, Alert, Box, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export function SharePostButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (typeof window !== 'undefined' ? window.location.origin : '');
    const url = `${baseUrl.replace(/\/$/, '')}/blog/${slug}`;

    try {
      if (navigator.share) {
        await navigator.share({ url });
        return;
      }
    } catch {
      // Fallback to clipboard copy
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(true);
    }
  };

  return (
    <>
      <Button
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

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
      >
        <Alert severity="success" variant="filled">
          Blog link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export function CodeSnippetBlock({
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
        <Typography variant="caption" sx={{ color: '#f97316', fontWeight: 700, fontFamily: 'monospace' }}>
          {(language || 'code').toUpperCase()}
          {caption ? ` • ${caption}` : ''}
        </Typography>

        <Button
          size="small"
          onClick={handleCopy}
          startIcon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          sx={{ color: copied ? '#4ade80' : '#cbd5e1', textTransform: 'none', fontSize: '0.78rem' }}
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