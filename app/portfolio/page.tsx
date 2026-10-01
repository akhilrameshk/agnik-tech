'use client';
import { useState, type ReactNode } from 'react';
import { Box, Container, Typography, Button, Grid, Card, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;

/* ---------- projects ---------- */
type Project = {
  title: string;
  category: string;
  desc: string;
  points: string[];
  tags: string[];
  icon: ReactNode;
  gradient: string;
  liveUrl?: string; // TODO: add the live website link for each project
};

const projects: Project[] = [
  {
    title: 'Kayal Vista',
    category: 'Travel & Booking',
    desc: 'A booking website for rooms and houseboats in Alappuzha, helping travellers find and reserve the perfect backwater stay.',
    points: [
      'Rooms and houseboats in one place',
      'Booking-focused experience for travellers',
      'Mobile-friendly for on-the-go planning',
    ],
    tags: ['Booking', 'Tourism', 'Web App'],
    icon: <DirectionsBoatOutlinedIcon />,
    gradient: 'linear-gradient(135deg, #0A192F 0%, #0B4F6C 60%, #00B4D8 150%)',
    liveUrl: '',
  },
  {
    title: 'Cricksy',
    category: 'Sports & News',
    desc: 'A cricket hub that lists local and international matches alongside the latest cricket news, all in one fast, easy-to-read place.',
    points: [
      'Local and international match listings',
      'Latest cricket news and updates',
      'Quick, clean browsing on any device',
    ],
    tags: ['Sports', 'News', 'Web App'],
    icon: <SportsCricketOutlinedIcon />,
    gradient: 'linear-gradient(135deg, #0A192F 0%, #14532D 60%, #22C55E 160%)',
    liveUrl: '',
  },
  {
    title: 'Fluffy Bloom',
    category: 'Shopping',
    desc: 'An online shop for ladies, designed with a soft, welcoming look that makes browsing and choosing products a pleasure.',
    points: [
      'Attractive product showcase',
      'Simple, friendly shopping experience',
      'Responsive design for phone shoppers',
    ],
    tags: ['E-commerce', 'Retail', 'Web App'],
    icon: <ShoppingBagOutlinedIcon />,
    gradient: 'linear-gradient(135deg, #0A192F 0%, #7A1F4B 60%, #F472B6 160%)',
    liveUrl: '',
  },
  {
    title: 'Optical Shop',
    category: 'Shopping',
    desc: 'A website for an optical shop, presenting eyewear and services clearly so customers can explore options and get in touch easily.',
    points: [
      'Clear showcase of eyewear and services',
      'Easy contact and shop information',
      'Clean, trustworthy, mobile-first design',
    ],
    tags: ['Business Website', 'Retail', 'Web App'],
    icon: <VisibilityOutlinedIcon />,
    gradient: 'linear-gradient(135deg, #0A192F 0%, #3B2A80 60%, #818CF8 160%)',
    liveUrl: '',
  },
  {
    title: 'Personal Portfolio',
    category: 'Portfolio',
    desc: 'A personal portfolio website that presents skills, experience and projects in a polished, fast-loading and professional way.',
    points: [
      'Personal brand and project showcase',
      'Fast-loading, responsive layout',
      'Clean design that puts the work first',
    ],
    tags: ['Portfolio', 'Personal Brand', 'Web App'],
    icon: <PersonOutlinedIcon />,
    gradient: 'linear-gradient(135deg, #0A192F 0%, #0F3057 55%, #F77F00 170%)',
    liveUrl: '',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 }, maxWidth: 720, mx: 'auto' }}>
      <Typography
        variant="subtitle2"
        sx={{ color: 'warning.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, mb: 1.5 }}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: 'primary.main', fontSize: { xs: '1.9rem', md: '2.6rem' } }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>{subtitle}</Typography>
      )}
    </Box>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* ==========================================
          PAGE HERO
          ========================================== */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 10, md: 15 },
          pb: { xs: 12, md: 16 },
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
            top: -140,
            left: -100,
            width: 460,
            height: 460,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.35), transparent 65%)',
            animation: `${pulseGlow} 7s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -170,
            right: -90,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(247,127,0,0.28), transparent 65%)',
            animation: `${pulseGlow} 9s ease-in-out infinite`,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeUp} 0.8s ease both` }}>
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
            Our Work
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              mb: 2.5,
              fontSize: { xs: '2.3rem', sm: '3rem', md: '3.6rem' },
            }}
          >
            Products We Have{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Brought to Life
            </Box>
          </Typography>

          <Typography sx={{ color: 'grey.300', maxWidth: 640, mx: 'auto', fontSize: '1.15rem', lineHeight: 1.75 }}>
            From travel bookings and sports news to online shops and personal brands, here is a look at what we
            have built.
          </Typography>
        </Container>
      </Box>

      {/* ==========================================
          PROJECTS
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real Products, Real Purpose"
          subtitle="Each project started with a simple idea and a clear goal for the people who would use it."
        />

        {/* Filter chips */}
        <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
          {categories.map((c) => {
            const selected = c === active;
            return (
              <Chip
                key={c}
                label={c}
                clickable
                onClick={() => setActive(c)}
                sx={{
                  px: 1,
                  py: 2.25,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: selected ? 'white' : 'primary.main',
                  bgcolor: selected ? 'primary.main' : 'rgba(0, 180, 216, 0.1)',
                  border: '1px solid',
                  borderColor: selected ? 'primary.main' : 'rgba(0, 180, 216, 0.3)',
                  '&:hover': { bgcolor: selected ? 'primary.main' : 'rgba(0, 180, 216, 0.2)' },
                }}
              />
            );
          })}
        </Stack>

        <Grid container spacing={3}>
          {visible.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '22px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  transition: 'all 0.35s ease',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 26px 54px rgba(10, 25, 47, 0.16)' },
                  '&:hover .proj-icon': { transform: 'scale(1.1) rotate(-4deg)' },
                }}
              >
                {/* Cover */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 190,
                    background: p.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <Chip
                    label={p.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      fontWeight: 700,
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.16)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255,255,255,0.25)',
                    }}
                  />
                  <Box
                    className="proj-icon"
                    sx={{
                      position: 'relative',
                      width: 88,
                      height: 88,
                      borderRadius: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      backdropFilter: 'blur(8px)',
                      transition: 'transform 0.4s ease',
                      '& svg': { fontSize: 46 },
                    }}
                  >
                    {p.icon}
                  </Box>
                </Box>

                {/* Body */}
                <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5 }}>
                    {p.desc}
                  </Typography>

                  <Stack spacing={1} sx={{ mb: 2.5 }}>
                    {p.points.map((pt) => (
                      <Box key={pt} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main', mt: '3px' }} />
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                    {p.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          bgcolor: 'rgba(0, 180, 216, 0.1)',
                          border: '1px solid rgba(0, 180, 216, 0.25)',
                        }}
                      />
                    ))}
                  </Box>

                  {p.liveUrl ? (
                    <Button
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      sx={{ mt: 'auto', alignSelf: 'flex-start', p: 0, fontWeight: 700, textTransform: 'none', color: 'primary.main' }}
                    >
                      View live site
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href="/contact"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mt: 'auto', alignSelf: 'flex-start', p: 0, fontWeight: 700, textTransform: 'none', color: 'primary.main' }}
                    >
                      Build something similar
                    </Button>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}

          {/* "Your project next" card */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              sx={{
                height: '100%',
                minHeight: 380,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
                borderRadius: '22px',
                bgcolor: 'transparent',
                border: '2px dashed',
                borderColor: 'secondary.main',
                boxShadow: 'none',
                transition: 'all 0.35s ease',
                '&:hover': { transform: 'translateY(-8px)', borderColor: 'warning.main', bgcolor: 'rgba(0,180,216,0.04)' },
              }}
            >
              <AddCircleOutlinedIcon sx={{ fontSize: 56, color: 'warning.main', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                Your Project Next?
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3, maxWidth: 260 }}>
                Have an idea for a website or app? Let us turn it into your next success story.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3.5, py: 1.2, fontWeight: 700, borderRadius: '999px', textTransform: 'none', color: 'primary.main', boxShadow: 'none' }}
              >
                Start a Project
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ==========================================
          FINAL CTA
          ========================================== */}
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            color: 'white',
            px: { xs: 3, md: 8 },
            py: { xs: 7, md: 10 },
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #0A192F 0%, #0F3057 55%, #00B4D8 130%)',
            boxShadow: '0 30px 70px rgba(10, 25, 47, 0.35)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: -140,
              right: -80,
              width: 420,
              height: 420,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(247,127,0,0.4), transparent 65%)',
            }}
          />
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, mb: 2, letterSpacing: '-0.02em', fontSize: { xs: '1.9rem', md: '2.6rem' } }}
            >
              Like What You See?
            </Typography>
            <Typography sx={{ color: 'grey.300', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Tell us about your idea and we will help you build something just as great, or even better.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              size="large"
              component={Link}
              href="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.6,
                fontWeight: 700,
                borderRadius: '999px',
                textTransform: 'none',
                color: 'white',
                boxShadow: '0 12px 30px rgba(247, 127, 0, 0.45)',
                transition: 'all 0.3s ease',
                '&:hover': { bgcolor: '#d96c00', transform: 'translateY(-3px)' },
              }}
            >
              Let&apos;s Talk
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}