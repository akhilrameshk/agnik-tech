'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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

const SAMPLE_POST: PublicBlogPost = {
  _id: 'sample_id',
  title: 'Edge AI, Multimodal Models & Local-First Tools: The Tech Shifts Shaping 2026',
  slug: 'edge-ai-multimodal-models-local-first-tools-2026',
  excerpt:
    'From low-latency edge inference and multimodal AI assistants to instant local-first web tools, discover the biggest technology shifts changing how modern software is built and used right now.',
  category: 'Latest Tech',
  tags: ['Latest Tech', 'AI & ML', 'Edge Computing', 'Developer Tools', 'Web Trends'],
  coverImage:
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&h=400&auto=format&fit=crop',
  createdAt: '2026-11-28T11:00:00.000Z',
  blocks: [
    {
      type: 'paragraph',
      content:
        'Technology is moving beyond isolated cloud chatbots toward faster, context-aware systems that work seamlessly across devices. Multimodal AI workflows, edge inference, and local-first architectures are defining modern software engineering right now.',
    },
    {
      type: 'heading',
      content: 'Multimodal AI Is Replacing Single-Prompt Workflows',
    },
    {
      type: 'paragraph',
      content:
        "Modern AI systems no longer rely on plain text alone. Today's models understand screenshots, UI layouts, voice commands, code repositories, and structured documents together.",
    },
    {
      type: 'code',
      language: 'typescript',
      content: `export async function analyzeContext(input: { prompt: string; imageBase64?: string }) {
  const payload = {
    model: 'multimodal-fast',
    prompt: input.prompt,
    hasVisualContext: Boolean(input.imageBase64),
  };
  return payload;
}`,
      caption: 'lib/ai/context-helper.ts',
    },
    {
      type: 'heading',
      content: 'Edge & Hybrid Compute Cut Real-World Latency',
    },
    {
      type: 'paragraph',
      content:
        'Pairing regional edge execution, smart caching, and lightweight local checks keeps responses fast even when mobile connections fluctuate.',
    },
  ],
};

function ScrollRevealBox({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(22px)',
        transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Box>
  );
}

function PremiumParagraphCard({
  text,
  onCopy,
}: {
  text: string;
  onCopy: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyParagraph = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy();
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        mb: 2.75,
        px: { xs: 2.25, sm: 3 },
        py: { xs: 2, sm: 2.4 },
        borderRadius: 2.75,
        bgcolor: 'rgba(13, 23, 42, 0.52)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        borderLeft: '3px solid rgba(45, 212, 191, 0.45)',
        backdropFilter: 'blur(6px)',
        transition:
          'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateX(4px)',
          bgcolor: 'rgba(15, 28, 51, 0.85)',
          borderColor: 'rgba(45, 212, 191, 0.32)',
          borderLeftColor: '#f97316',
          boxShadow: '0 14px 32px rgba(0, 0, 0, 0.35), 0 0 24px rgba(249, 115, 22, 0.1)',
          '& .para-copy-btn': {
            opacity: 1,
          },
        },
      }}
    >
      <IconButton
        className="para-copy-btn"
        size="small"
        onClick={handleCopyParagraph}
        aria-label="Copy paragraph"
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          opacity: { xs: 0.45, sm: 0 },
          transition: 'opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease',
          color: copied ? '#4ade80' : '#94a3b8',
          bgcolor: 'rgba(7, 13, 25, 0.7)',
          '&:hover': {
            opacity: 1,
            color: '#5eead4',
            bgcolor: 'rgba(45, 212, 191, 0.14)',
          },
        }}
      >
        {copied ? <CheckIcon sx={{ fontSize: 15 }} /> : <ContentCopyIcon sx={{ fontSize: 15 }} />}
      </IconButton>

      <Typography
        variant="body1"
        sx={{
          pr: { xs: 3, sm: 3.5 },
          color: '#e2e8f0',
          lineHeight: 1.88,
          fontSize: '1.03rem',
          letterSpacing: '0.005em',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function AdSlotBanner({
  adSlot,
  label = 'Advertisement',
  showSample = false,
}: {
  adSlot?: string;
  label?: string;
  showSample?: boolean;
}) {
  const pushedRef = useRef(false);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    pushedRef.current = false;
  }, [adSlot]);

  useEffect(() => {
    if (!clientId || !adSlot || pushedRef.current) return;

    try {
      const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
      (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle = adsbygoogle;
      pushedRef.current = true;
    } catch {
      // AdSense not ready or blocked
    }
  }, [clientId, adSlot]);

  if (clientId && adSlot) {
    return (
      <Box sx={{ my: 3, textAlign: 'center', overflow: 'hidden' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Box>
    );
  }

  if (!showSample || process.env.NODE_ENV === 'production') {
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
      <Typography variant="body2" sx={{ color: '#f97316', fontWeight: 600, fontSize: '0.85rem' }}>
        Sponsored Banner Preview
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
        my: 3.5,
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        bgcolor: '#050b16',
        boxShadow: '0 18px 40px rgba(0, 0, 0, 0.52)',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: 'rgba(56, 189, 248, 0.55)',
          boxShadow: '0 22px 48px rgba(56, 189, 248, 0.12)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1.2,
          bgcolor: '#0c1829',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.65 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f59e0b' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
          </Box>
          <Typography
            variant="caption"
            sx={{ color: '#94a3b8', fontWeight: 700, fontFamily: 'monospace' }}
          >
            {(language || 'code').toUpperCase()}
            {caption ? ` • ${caption}` : ''}
          </Typography>
        </Box>

        <Button
          type="button"
          size="small"
          onClick={handleCopy}
          startIcon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          sx={{
            color: copied ? '#4ade80' : '#cbd5e1',
            bgcolor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 1.5,
            px: 1.2,
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.09)' },
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
          lineHeight: 1.65,
          color: '#e2e8f0',
        }}
      >
        <code>{code}</code>
      </Box>
    </Box>
  );
}

export default function BlogDetailClient({
  post: propPost,
  adSlots,
}: {
  post?: PublicBlogPost | null;
  adSlots?: BlogAdSlots;
}) {
  const router = useRouter();
  const [copiedText, setCopiedText] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = propPost || SAMPLE_POST;
  const blocks = useMemo(() => (Array.isArray(post?.blocks) ? post.blocks : []), [post?.blocks]);

  const readTimeMinutes = useMemo(() => {
    const words = blocks
      .map((b) => (b.content || '').trim())
      .join(' ')
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [blocks]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return null;
  }

  const midIndex = blocks.length > 1 ? Math.floor(blocks.length / 2) - 1 : -1;
  let headingCounter = 0;

  const scrollByStep = (direction: 'up' | 'down') => {
    const delta = direction === 'down' ? 420 : -420;
    window.scrollBy({ top: delta, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: '#050913',
        color: '#f8fafc',
        py: { xs: 3, md: 5 },
        backgroundImage: `
          radial-gradient(circle at 15% 12%, rgba(249, 115, 22, 0.13), transparent 36%),
          radial-gradient(circle at 85% 20%, rgba(20, 184, 166, 0.12), transparent 38%),
          linear-gradient(to right, rgba(148, 163, 184, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 36px 36px, 36px 36px',
      }}
    >
      {/* Top Sticky Progress Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          mb: 3,
        }}
      >
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            height: 4,
            bgcolor: 'rgba(255, 255, 255, 0.06)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(90deg, #14b8a6 0%, #38bdf8 55%, #f97316 100%)',
              boxShadow: '0 0 14px rgba(45, 212, 191, 0.55)',
              transition: 'transform 0.1s linear',
            },
          }}
        />
      </Box>

      <Container maxWidth="md">
        {/* Header Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
            pb: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.01em',
                background: 'linear-gradient(90deg, #ffffff 0%, #5eead4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AGNIK TECH
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: '#2dd4bf',
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: '0.62rem',
              }}
            >
              INNOVATE. CREATE. SECURE.
            </Typography>
          </Box>

          <Button
            type="button"
            onClick={() => router.push('/blog')}
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#cbd5e1',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { color: '#f8fafc', bgcolor: 'rgba(255,255,255,0.05)' },
            }}
          >
            All Blogs
          </Button>
        </Box>

        {/* Category + Meta */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{
              bgcolor: 'rgba(249, 115, 22, 0.16)',
              color: '#fb923c',
              border: '1px solid rgba(249, 115, 22, 0.35)',
              fontWeight: 700,
            }}
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
          <Box
            component="span"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: '#94a3b8' }}
          >
            <AccessTimeIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>
              {readTimeMinutes} min read
            </Typography>
          </Box>
        </Box>

        {/* Title & Excerpt */}
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            lineHeight: 1.18,
            fontWeight: 800,
            fontSize: { xs: '1.9rem', sm: '2.55rem', md: '2.9rem' },
            letterSpacing: '-0.025em',
          }}
        >
          {post.title}
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.7 }}>
          {post.excerpt}
        </Typography>

        {/* Reader Hook Strip */}
        <Box
          sx={{
            mb: 4,
            px: 2.25,
            py: 1.5,
            borderRadius: 2.5,
            bgcolor: 'rgba(20, 184, 166, 0.09)',
            border: '1px solid rgba(45, 212, 191, 0.28)',
            boxShadow: '0 0 24px rgba(20, 184, 166, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <AutoAwesomeIcon sx={{ color: '#2dd4bf', fontSize: 20, flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: '#e2e8f0', lineHeight: 1.6 }}>
            <Box component="span" sx={{ fontWeight: 700, color: '#5eead4' }}>
              Quick Hook:{' '}
            </Box>
            Scroll through the timeline to see how modern architectures cut latency, boost speed,
            and keep users hooked.
          </Typography>
        </Box>

        {/* Cover Image */}
        {post.coverImage && (
          <Box
            component="img"
            src={post.coverImage}
            alt={post.title}
            sx={{
              width: '100%',
              maxHeight: 450,
              objectFit: 'cover',
              borderRadius: 3,
              mb: 4,
              border: '1px solid rgba(45, 212, 191, 0.22)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.55), 0 0 28px rgba(20, 184, 166, 0.12)',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 24px 54px rgba(0, 0, 0, 0.6), 0 0 36px rgba(45, 212, 191, 0.2)',
              },
            }}
          />
        )}

        {/* Ad 1: Top */}
        <AdSlotBanner adSlot={adSlots?.top} label="Top Banner" />

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 4 }} />

        {/* Timeline Content */}
        <Box
          sx={{
            position: 'relative',
            pl: { xs: 3.5, sm: 4.5 },
            '&::before': {
              content: '""',
              position: 'absolute',
              left: { xs: 10, sm: 13 },
              top: 10,
              bottom: 10,
              width: 2,
              background:
                'linear-gradient(180deg, rgba(45, 212, 191, 0.75) 0%, rgba(56, 189, 248, 0.45) 55%, rgba(249, 115, 22, 0.5) 100%)',
            },
          }}
        >
          {blocks.map((block, idx) => {
            let blockElement: React.ReactNode;

            if (block.type === 'heading') {
              headingCounter += 1;
              const badgeNumber = String(headingCounter).padStart(2, '0');
              const isPassed = scrollProgress >= Math.min(95, (idx / Math.max(1, blocks.length)) * 100);

              blockElement = (
                <ScrollRevealBox delay={0.05}>
                  <Box sx={{ position: 'relative', mt: 5, mb: 2 }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: -32, sm: -41 },
                        top: 4,
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        bgcolor: isPassed ? '#14b8a6' : '#0f172a',
                        color: isPassed ? '#050913' : '#94a3b8',
                        border: '2px solid #2dd4bf',
                        boxShadow: isPassed ? '0 0 14px rgba(45, 212, 191, 0.7)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        fontFamily: 'monospace',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {badgeNumber}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: '#f8fafc',
                        fontWeight: 800,
                        letterSpacing: '-0.015em',
                        lineHeight: 1.35,
                      }}
                    >
                      {block.content}
                    </Typography>
                  </Box>
                </ScrollRevealBox>
              );
            } else if (block.type === 'code') {
              blockElement = (
                <ScrollRevealBox delay={0.06}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: -27, sm: -36 },
                        top: 28,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: '#38bdf8',
                        boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                      }}
                    />
                    <CodeSnippetBlock
                      code={block.content}
                      language={block.language}
                      caption={block.caption}
                    />
                  </Box>
                </ScrollRevealBox>
              );
            } else if (block.type === 'image') {
              blockElement = (
                <ScrollRevealBox delay={0.06}>
                  <Box
                    sx={{
                      my: 3.5,
                      p: 1.5,
                      borderRadius: 3,
                      bgcolor: 'rgba(13, 24, 41, 0.65)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={block.content}
                      alt={block.caption || post.title}
                      sx={{
                        maxWidth: '100%',
                        borderRadius: 2,
                      }}
                    />
                    {block.caption && (
                      <Typography variant="caption" sx={{ color: '#94a3b8', mt: 1.25, display: 'block' }}>
                        {block.caption}
                      </Typography>
                    )}
                  </Box>
                </ScrollRevealBox>
              );
            } else {
              blockElement = (
                <ScrollRevealBox delay={0.04}>
                  <PremiumParagraphCard
                    text={block.content}
                    onCopy={() => setCopiedText(true)}
                  />
                </ScrollRevealBox>
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

        {/* Floating Quick Scroll / Read % Widget (Shifted up & left so FloatingMenu never overlaps) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            position: 'fixed',
            right: { md: 76, lg: 98 },
            top: '22%',
            zIndex: 40,
          }}
        >
          <IconButton
            size="small"
            onClick={() => scrollByStep('up')}
            aria-label="Scroll up"
            sx={{
              bgcolor: 'rgba(15, 23, 42, 0.92)',
              color: '#cbd5e1',
              border: '1px solid rgba(255,255,255,0.12)',
              '&:hover': { bgcolor: 'rgba(45, 212, 191, 0.16)', color: '#5eead4' },
            }}
          >
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              p: '4px',
              background: `conic-gradient(#2dd4bf ${Math.round(scrollProgress)}%, rgba(148, 163, 184, 0.18) 0%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 28px rgba(0, 0, 0, 0.45)',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                bgcolor: '#070d19',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: '#f8fafc', fontWeight: 800, fontSize: '0.78rem', lineHeight: 1 }}
              >
                {Math.round(scrollProgress)}%
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: '#94a3b8', fontSize: '0.52rem', letterSpacing: 0.6, mt: 0.25 }}
              >
                READ
              </Typography>
            </Box>
          </Box>

          <IconButton
            size="small"
            onClick={() => scrollByStep('down')}
            aria-label="Scroll down"
            sx={{
              bgcolor: 'rgba(15, 23, 42, 0.92)',
              color: '#cbd5e1',
              border: '1px solid rgba(255,255,255,0.12)',
              '&:hover': { bgcolor: 'rgba(45, 212, 191, 0.16)', color: '#5eead4' },
            }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Tags */}
        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              flexWrap: 'wrap',
              mt: 5,
              pt: 3,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                size="small"
                sx={{
                  bgcolor: '#0d1829',
                  color: '#94a3b8',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              />
            ))}
          </Stack>
        )}

        {/* Ad 3: After tags & before final CTA */}
        <AdSlotBanner adSlot={adSlots?.bottom} label="Bottom Ad" />

        {/* Final CTA at bottom */}
        <Box
          sx={{
            mt: 4,
            p: { xs: 3, sm: 4 },
            borderRadius: 3.5,
            background:
              'linear-gradient(135deg, rgba(249, 115, 22, 0.16) 0%, rgba(13, 24, 41, 0.96) 55%, rgba(20, 184, 166, 0.15) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.35)',
            boxShadow: '0 18px 42px rgba(0, 0, 0, 0.45)',
            textAlign: 'center',
          }}
        >
          <Chip
            label="Agnik Tech"
            size="small"
            sx={{
              mb: 1.5,
              bgcolor: 'rgba(249, 115, 22, 0.2)',
              color: '#fb923c',
              fontWeight: 700,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f8fafc', mb: 1.5 }}>
            Need a fast, scalable web application or performance tuning?
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#cbd5e1', lineHeight: 1.75, mb: 3, maxWidth: 600, mx: 'auto' }}
          >
            Partner with Agnik Tech for dependable full-stack engineering, React/Next.js performance,
            and scalable architecture.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={() => router.push('/contact')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{
                bgcolor: '#f97316',
                color: '#070d19',
                fontWeight: 800,
                textTransform: 'none',
                px: 3,
                py: 1.2,
                borderRadius: 2,
                '&:hover': { bgcolor: '#ea580c' },
              }}
            >
              Contact Engineering
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => router.push('/about')}
              startIcon={<InfoOutlinedIcon />}
              sx={{
                color: '#f8fafc',
                borderColor: 'rgba(248, 250, 252, 0.28)',
                fontWeight: 700,
                textTransform: 'none',
                px: 3,
                py: 1.2,
                borderRadius: 2,
                '&:hover': { borderColor: '#f97316', bgcolor: 'rgba(249, 115, 22, 0.08)' },
              }}
            >
              About Us
            </Button>
          </Box>
        </Box>

        {/* Ad 4: Footer Ad */}
        <AdSlotBanner adSlot={adSlots?.footerAd} label="Footer Ad" />

        <Snackbar open={copiedText} autoHideDuration={2000} onClose={() => setCopiedText(false)}>
          <Alert severity="success" variant="filled">
            Section copied to clipboard!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}