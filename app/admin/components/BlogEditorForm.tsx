'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import ImageIcon from '@mui/icons-material/Image';
import NotesIcon from '@mui/icons-material/Notes';
import TitleIcon from '@mui/icons-material/Title';

export type BlockType = 'paragraph' | 'heading' | 'code' | 'image';

export interface EditorBlock {
  type: BlockType;
  content: string;
  language: string;
  caption: string;
}

export interface BlogFormData {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string;
  coverImage: string;
  published: boolean;
  blocks: EditorBlock[];
}

const CATEGORIES = [
  'Next.js',
  'JavaScript',
  'Java',
  'AI & ML',
  'Cloud & DevOps',
  'Latest Tech',
];

const CODE_LANGUAGES = [
  'typescript',
  'javascript',
  'java',
  'bash',
  'json',
  'html',
  'css',
];

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#f8fafc',
    bgcolor: '#070d19',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
    '&:hover fieldset': { borderColor: '#f97316' },
  },
  '& .MuiInputLabel-root': { color: '#94a3b8' },
  '& .MuiSvgIcon-root': { color: '#94a3b8' },
};

interface BlogEditorFormProps {
  initialData?: Partial<BlogFormData>;
  mode: 'create' | 'edit';
}

export default function BlogEditorForm({ initialData, mode }: BlogEditorFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [category, setCategory] = useState(initialData?.category || 'Next.js');
  const [tags, setTags] = useState(initialData?.tags || '');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [published, setPublished] = useState(initialData?.published ?? true);
  const [blocks, setBlocks] = useState<EditorBlock[]>(
    initialData?.blocks && initialData.blocks.length > 0
      ? initialData.blocks
      : [
          {
            type: 'paragraph',
            content: '',
            language: 'typescript',
            caption: '',
          },
        ]
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const addBlock = (type: BlockType) => {
    setBlocks((prev) => [
      ...prev,
      {
        type,
        content: '',
        language: type === 'code' ? 'typescript' : 'typescript',
        caption: '',
      },
    ]);
  };

  const updateBlock = (index: number, patch: Partial<EditorBlock>) => {
    setBlocks((prev) =>
      prev.map((block, idx) => (idx === index ? { ...block, ...patch } : block))
    );
  };

  const removeBlock = (index: number) => {
    setBlocks((prev) => prev.filter((_, idx) => idx !== index));
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    setBlocks((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[target];
      next[target] = temp;
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const url =
        mode === 'edit' && initialData?._id
          ? `/api/admin/blogs/${initialData._id}`
          : '/api/admin/blogs';
      const method = mode === 'edit' ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          category,
          tags,
          coverImage,
          published,
          blocks,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Failed to save blog');
        setSaving(false);
        return;
      }

      router.push('/admin/blogs');
      router.refresh();
    } catch {
      setError('Network error while saving blog');
      setSaving(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
            {mode === 'create' ? 'Create New Tech Blog' : 'Edit Tech Blog'}
          </Typography>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Add rich tech articles with code snippets, images, and categories
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} >
          <FormControlLabel
            control={
              <Switch
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                color="warning"
              />
            }
            label={<Typography variant="body2">Published</Typography>}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={saving}
            sx={{
              bgcolor: '#f97316',
              color: '#070d19',
              fontWeight: 700,
              px: 3,
              '&:hover': { bgcolor: '#ea580c' },
            }}
          >
            {saving ? 'Saving...' : mode === 'create' ? 'Publish Blog' : 'Update Blog'}
          </Button>
        </Stack>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Basic Blog Metadata */}
      <Card
        sx={{
          bgcolor: '#0d1829',
          color: '#f8fafc',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 3,
          mb: 3,
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, p: 3 }}>
          <Typography variant="subtitle1"  sx={{ color: '#f97316' }}>
            Blog Details & SEO
          </Typography>

          <TextField
            label="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
            sx={fieldSx}
          />

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              label="Custom Slug (optional)"
              placeholder="e.g. nextjs-app-router-guide"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              fullWidth
              sx={fieldSx}
            />

            <FormControl fullWidth sx={fieldSx}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <TextField
            label="Short Excerpt / Summary"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            multiline
            rows={2}
            required
            fullWidth
            sx={fieldSx}
          />

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              label="Cover Image URL"
              placeholder="https://..."
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
              fullWidth
              sx={fieldSx}
            />

            <TextField
              label="Tags (comma separated)"
              placeholder="nextjs, react, typescript, performance"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              fullWidth
              sx={fieldSx}
            />
          </Stack>
        </CardContent>
      </Card>

      {/* Dynamic Content Blocks */}
      <Card
        sx={{
          bgcolor: '#0d1829',
          color: '#f8fafc',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
            }}
          >
            <Typography variant="subtitle1"  sx={{ color: '#f97316' }}>
              Content Blocks ({blocks.length})
            </Typography>

            <Stack direction="row" spacing={1} >
              <Button
                type="button"
                size="small"
                startIcon={<TitleIcon />}
                onClick={() => addBlock('heading')}
                sx={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
                variant="outlined"
              >
                Heading
              </Button>
              <Button
                type="button"
                size="small"
                startIcon={<NotesIcon />}
                onClick={() => addBlock('paragraph')}
                sx={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
                variant="outlined"
              >
                Paragraph
              </Button>
              <Button
                type="button"
                size="small"
                startIcon={<CodeIcon />}
                onClick={() => addBlock('code')}
                sx={{ color: '#f97316', borderColor: 'rgba(249,115,22,0.5)' }}
                variant="outlined"
              >
                Code Block
              </Button>
              <Button
                type="button"
                size="small"
                startIcon={<ImageIcon />}
                onClick={() => addBlock('image')}
                sx={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
                variant="outlined"
              >
                Image
              </Button>
            </Stack>
          </Box>

          <Stack spacing={2.5}>
            {blocks.map((block, index) => (
              <Box
                key={index}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  bgcolor: '#070d19',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Chip
                    label={`#${index + 1} • ${block.type.toUpperCase()}`}
                    size="small"
                    sx={{
                      bgcolor:
                        block.type === 'code'
                          ? 'rgba(249,115,22,0.2)'
                          : 'rgba(255,255,255,0.08)',
                      color: block.type === 'code' ? '#f97316' : '#e2e8f0',
                      fontWeight: 700,
                    }}
                  />

                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => moveBlock(index, -1)}
                      disabled={index === 0}
                      sx={{ color: '#94a3b8' }}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => moveBlock(index, 1)}
                      disabled={index === blocks.length - 1}
                      sx={{ color: '#94a3b8' }}
                    >
                      <ArrowDownwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => removeBlock(index)}
                      sx={{ color: '#ef4444' }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {block.type === 'code' && (
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                    <FormControl size="small" sx={{ minWidth: 180, ...fieldSx }}>
                      <InputLabel>Language</InputLabel>
                      <Select
                        label="Language"
                        value={block.language}
                        onChange={(e) => updateBlock(index, { language: e.target.value })}
                      >
                        {CODE_LANGUAGES.map((lang) => (
                          <MenuItem key={lang} value={lang}>
                            {lang}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      size="small"
                      label="File Name / Note (optional)"
                      placeholder="e.g. app/api/route.ts"
                      value={block.caption}
                      onChange={(e) => updateBlock(index, { caption: e.target.value })}
                      fullWidth
                      sx={fieldSx}
                    />
                  </Stack>
                )}

                {block.type === 'image' && (
                  <TextField
                    size="small"
                    label="Image Caption (optional)"
                    value={block.caption}
                    onChange={(e) => updateBlock(index, { caption: e.target.value })}
                    fullWidth
                    sx={{ mb: 2, ...fieldSx }}
                  />
                )}

                <TextField
                  label={
                    block.type === 'code'
                      ? 'Paste Code Snippet'
                      : block.type === 'image'
                      ? 'Image URL'
                      : block.type === 'heading'
                      ? 'Section Heading'
                      : 'Paragraph Text'
                  }
                  value={block.content}
                  onChange={(e) => updateBlock(index, { content: e.target.value })}
                  multiline
                  rows={block.type === 'code' ? 7 : block.type === 'paragraph' ? 4 : 1}
                  required
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      style:
                        block.type === 'code'
                          ? { fontFamily: 'monospace', fontSize: '0.88rem' }
                          : undefined,
                    },
                  }}
                  sx={fieldSx}
                />
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}