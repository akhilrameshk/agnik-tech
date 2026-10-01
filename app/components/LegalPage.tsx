'use client';
import { Box, Container, Typography, Grid, Button, Stack, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatshotIcon from '@mui/icons-material/Whatshot';

// A section's content is a list of blocks:
//   a string  -> one paragraph
//   a string[] -> a bullet list
export type LegalSection = {
  id: string;
  title: string;
  content: (string | string[])[];
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  otherPage: { label: string; href: string };
};

export default function LegalPage({ eyebrow, title, intro, updated, sections, otherPage }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 9, md: 13 },
          pb: { xs: 9, md: 12 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -150,
            right: -100,
            width: 440,
            height: 440,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.3), transparent 65%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              mb: 3,
              borderRadius: '50px',
              bgcolor: 'rgba(0, 180, 216, 0.1)',
              border: '1px solid rgba(0, 180, 216, 0.35)',
              color: 'secondary.main',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            <WhatshotIcon fontSize="small" sx={{ color: 'warning.main' }} />
            {eyebrow}
          </Box>
          <Typography
            component="h1"
            sx={{ fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, mb: 2, fontSize: { xs: '2.2rem', md: '3.2rem' } }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: 'grey.300', maxWidth: 620, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.75, mb: 2 }}>
            {intro}
          </Typography>
          <Typography variant="body2" sx={{ color: 'warning.main', fontWeight: 600, letterSpacing: 1 }}>
            Last updated: {updated}
          </Typography>
        </Container>
      </Box>

      {/* Body */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 } }}>
        <Grid container spacing={{ xs: 4, md: 7 }}>
          {/* Table of contents (desktop) */}
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'sticky',
                top: 104,
                p: 3,
                borderRadius: '18px',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'warning.main', mb: 2 }}
              >
                On this page
              </Typography>
              <Stack spacing={1.25}>
                {sections.map((s, i) => (
                  <MuiLink
                    key={s.id}
                    href={`#${s.id}`}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      lineHeight: 1.45,
                      transition: 'all 0.2s ease',
                      '&:hover': { color: 'secondary.main', transform: 'translateX(4px)' },
                    }}
                  >
                    {i + 1}. {s.title}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Box
              component="article"
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: '24px',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 20px 50px rgba(10, 25, 47, 0.06)',
              }}
            >
              {sections.map((s, i) => (
                <Box
                  key={s.id}
                  id={s.id}
                  sx={{ scrollMarginTop: '100px', mb: i === sections.length - 1 ? 0 : { xs: 4.5, md: 6 } }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 800, color: 'text.primary', mb: 2, letterSpacing: '-0.01em' }}
                  >
                    <Box component="span" sx={{ color: 'secondary.main', mr: 1.25 }}>
                      {String(i + 1).padStart(2, '0')}
                    </Box>
                    {s.title}
                  </Typography>

                  {s.content.map((block, bi) =>
                    Array.isArray(block) ? (
                      <Box key={bi} component="ul" sx={{ pl: 3, mt: 0, mb: 2, color: 'text.secondary' }}>
                        {block.map((item) => (
                          <Box
                            component="li"
                            key={item}
                            sx={{ mb: 1, lineHeight: 1.8, '&::marker': { color: '#F77F00' } }}
                          >
                            {item}
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Typography key={bi} sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2 }}>
                        {block}
                      </Typography>
                    ),
                  )}
                </Box>
              ))}
            </Box>

            {/* Footer links */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'space-between' }}>
              <Button
                component={Link}
                href={otherPage.href}
                endIcon={<ArrowForwardIcon />}
                sx={{ fontWeight: 700, textTransform: 'none', color: 'text.primary', justifyContent: 'flex-start' }}
              >
                {otherPage.label}
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                sx={{ px: 3.5, fontWeight: 700, borderRadius: '999px', textTransform: 'none', color: 'primary.main' }}
              >
                Questions? Contact us
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
