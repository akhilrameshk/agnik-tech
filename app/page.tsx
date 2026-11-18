'use client';
import { Box, Container, Typography, Button, Grid, Card, Stack, Chip } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import HeroShowcase from './components/HeroShowcase';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

/* ---------- Animations ---------- */
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.06); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------- Data Constants ---------- */
const PILLARS = [
  {
    title: 'Innovate',
    desc: 'Transforming business ideas into scalable web applications using Next.js, modern backend architectures, and AI-ready stacks.',
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#F77F00',
  },
  {
    title: 'Create',
    desc: 'Pixel-perfect, mobile-first responsive designs, high-converting websites, and custom admin dashboards tailored for growth.',
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
  {
    title: 'Secure & Scale',
    desc: 'Production-ready cloud deployment on Vercel & AWS with enterprise security, SSL encryption, and top Google SEO indexing.',
    icon: <ShieldOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
];

const SERVICES = [
  {
    title: 'Custom Web Applications',
    desc: 'High-speed Next.js & React websites with server-side rendering, 99+ Core Web Vitals, and strong search visibility.',
    icon: <WebIcon />,
  },
  {
    title: 'Full-Stack Business Software',
    desc: 'End-to-end billing, POS, and inventory web products built on Node.js & MongoDB, engineered for real commercial workloads.',
    icon: <CodeIcon />,
  },
  {
    title: 'Booking Portals & Admin Panels',
    desc: 'Secure reservation engines for houseboats, resorts, and clinics with automated WhatsApp notifications and Razorpay integration.',
    icon: <HubOutlinedIcon />,
  },
  {
    title: 'Local SEO & Google Ranking',
    desc: 'Google Business Profile optimization, Search Console setup, and localized SEO to rank your business on top in Kerala.',
    icon: <InsightsOutlinedIcon />,
  },
  {
    title: 'Cloud Deployment & Vercel CDN',
    desc: 'Automated deployment pipelines, custom GoDaddy DNS mapping, and fast SSL setups for 99.9% global uptime.',
    icon: <CloudQueueIcon />,
  },
  {
    title: 'Speed & Performance Tuning',
    desc: 'Next-gen image optimization, edge caching, and clean code refactoring that guarantee sub-second mobile load times.',
    icon: <SpeedIcon />,
  },
];

const INDUSTRIES = [
  {
    title: 'Tourism & Houseboats',
    desc: 'Direct booking portals & dynamic tariff calendars for Alappuzha houseboats, shikaras, and resorts.',
    icon: <DirectionsBoatIcon sx={{ fontSize: 28, color: '#00B4D8' }} />,
  },
  {
    title: 'Shops & Commercial',
    desc: 'E-commerce storefronts, supermarket billing web apps, and inventory systems for retail businesses.',
    icon: <StorefrontIcon sx={{ fontSize: 28, color: '#F77F00' }} />,
  },
  {
    title: 'Clinics & Institutions',
    desc: 'Appointment booking websites, school/alumni portals, and secure member management dashboards.',
    icon: <LocalHospitalIcon sx={{ fontSize: 28, color: '#00B4D8' }} />,
  },
  {
    title: 'Startups & Agencies',
    desc: 'Rapid MVP development, SaaS architectures, and high-converting landing pages built to scale globally.',
    icon: <RocketLaunchIcon sx={{ fontSize: 28, color: '#F77F00' }} />,
  },
];

const STEPS = [
  { no: '01', title: 'Consult & Scope', desc: 'We analyze your business goals and define a transparent, budget-friendly project roadmap.' },
  { no: '02', title: 'Architecture & UI', desc: 'Clean, mobile-responsive Material-UI design and structured database planning tailored to your brand.' },
  { no: '03', title: 'Build & Test', desc: 'Type-safe full-stack engineering with real-time progress previews and cross-device testing.' },
  { no: '04', title: 'Deploy & Index', desc: 'Instant global CDN launch, domain setup, and Google Search Console indexing for immediate reach.' },
];

const REASONS = [
  '10+ years of Senior Full-Stack Engineering experience directly on your codebase',
  'Transparent, modular pricing packages starting from ₹3,999+ with zero hidden fees',
  'Lightning-fast mobile load speeds and localized Kerala & global SEO structure',
  '100% ownership of your source code, domain, and cloud accounts with 1-year support',
];

/* ---------- Reusable Components ---------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, maxWidth: 760, mx: 'auto', px: 1 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: 'warning.main',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: { xs: 2, md: 3 },
          mb: 1.5,
          fontSize: { xs: '0.75rem', md: '0.85rem' },
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: light ? 'white' : 'text.primary',
          fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.6rem' },
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            mt: 2,
            color: light ? 'grey.400' : 'text.secondary',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  color,
  isService = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color?: string;
  isService?: boolean;
}) {
  return (
    <Card
      sx={{
        position: 'relative',
        height: '100%',
        p: { xs: 2.8, md: 3.5 },
        borderRadius: '20px',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(10, 25, 47, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        ...(isService && {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            background: 'linear-gradient(90deg, #00B4D8, #F77F00)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.35s ease',
          },
          '&:hover::before': { transform: 'scaleX(1)' },
          '&:hover .svc-icon': { bgcolor: 'primary.main', color: 'secondary.main', transform: 'scale(1.05)' },
        }),
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: color || 'secondary.main',
          boxShadow: '0 20px 44px rgba(10, 25, 47, 0.12)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          className={isService ? 'svc-icon' : ''}
          sx={{
            width: { xs: 48, md: 54 },
            height: { xs: 48, md: 54 },
            flexShrink: 0,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color || 'secondary.main',
            bgcolor: color ? `${color}18` : 'rgba(0, 180, 216, 0.1)',
            transition: 'all 0.3s ease',
            '& svg': { fontSize: { xs: 24, md: 28 } },
          }}
        >
          {icon}
        </Box>
        <Typography
          variant={isService ? 'h6' : 'h5'}
          sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.3, fontSize: { xs: '1.1rem', md: '1.25rem' } }}
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.95rem' }}>
        {desc}
      </Typography>
    </Card>
  );
}

function StepCard({ no, title, desc }: { no: string; title: string; desc: string }) {
  return (
    <Box
      sx={{
        height: '100%',
        p: { xs: 3, md: 3.5 },
        borderRadius: '20px',
        bgcolor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.08)',
          borderColor: 'rgba(247,127,0,0.65)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: '1.9rem', md: '2.2rem' },
            fontWeight: 800,
            lineHeight: 1,
            flexShrink: 0,
            background: 'linear-gradient(90deg, #00B4D8, #F77F00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {no}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3, color: 'white', fontSize: '1.1rem' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.7, fontSize: '0.95rem' }}>
        {desc}
      </Typography>
    </Box>
  );
}

/* ---------- Main Component ---------- */

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default', overflowX: 'hidden' }}>
      
      {/* --- HERO SECTION --- */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 8, sm: 10, md: 15 },
          pb: { xs: 16, sm: 18, md: 24 },
          overflow: 'hidden',
        }}
      >
        {/* Subtle Grid Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
          }}
        />
        {/* Ambient Glows */}
        <Box
          sx={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: { xs: 320, md: 480 },
            height: { xs: 320, md: 480 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.32), transparent 65%)',
            animation: `${pulseGlow} 7s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -160,
            right: -100,
            width: { xs: 360, md: 520 },
            height: { xs: 360, md: 520 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(247,127,0,0.25), transparent 65%)',
            animation: `${pulseGlow} 9s ease-in-out infinite`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={{ xs: 5, md: 4 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ animation: `${fadeUp} 0.7s ease both`, textAlign: { xs: 'center', md: 'left' } }}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2.5 }}>
                  <Chip
                    icon={<WhatshotIcon style={{ color: '#F77F00' }} />}
                    label="Top Web & Software Agency in Alappuzha, Kerala"
                    sx={{
                      bgcolor: 'rgba(0, 180, 216, 0.12)',
                      border: '1px solid rgba(0, 180, 216, 0.35)',
                      color: 'secondary.main',
                      fontWeight: 600,
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      height: 'auto',
                      py: 0.6,
                      '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'center' },
                      backdropFilter: 'blur(6px)',
                    }}
                  />
                </Stack>

                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    mb: 2.5,
                    fontSize: { xs: '2.1rem', sm: '2.9rem', md: '3.6rem' },
                  }}
                >
                  High-Performing Websites &amp; Software That{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Grow Your Business
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: 'warning.main',
                    fontWeight: 700,
                    mb: 2.5,
                    letterSpacing: { xs: '0.06em', md: '0.1em' },
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' },
                  }}
                >
                  Lightning Fast • Mobile Friendly • Google Search Ready
                </Typography>

                <Typography
                  sx={{
                    mb: 4,
                    color: 'grey.300',
                    maxWidth: 580,
                    mx: { xs: 'auto', md: 0 },
                    fontSize: { xs: '1rem', md: '1.12rem' },
                    lineHeight: 1.75,
                  }}
                >
                  <strong>Agnik Tech Solutions</strong> builds fast, modern web applications, commercial billing software, and booking portals for hotels, houseboats, shops, and startups in Kerala and worldwide.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: '999px',
                      textTransform: 'none',
                      color: 'primary.main',
                      boxShadow: '0 10px 30px rgba(0, 180, 216, 0.35)',
                      transition: 'all 0.3s ease',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 36px rgba(0, 180, 216, 0.5)' },
                    }}
                  >
                    Get a Free Quote
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    component="a"
                    href="https://wa.me/919633134324?text=Hi%20Agnik%20Tech%20Solutions,%20I%20would%20like%20to%20discuss%20a%20website%20or%20software%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      px: 3.5,
                      py: 1.6,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: '999px',
                      textTransform: 'none',
                      bgcolor: '#25D366',
                      color: 'white',
                      boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': { bgcolor: '#1DA851', transform: 'translateY(-3px)' },
                    }}
                  >
                    WhatsApp Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Visual Showcase (Visible on Desktop) */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeroShowcase />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- PILLARS SECTION --- */}
      <Container maxWidth="lg" sx={{ mt: { xs: -9, md: -12 }, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {PILLARS.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 4 }}>
              <FeatureCard icon={p.icon} title={p.title} desc={p.desc} color={p.color} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- SERVICES SECTION --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 13 } }}>
        <SectionHeader
          eyebrow="Our Web & Software Services"
          title="Full-Stack Digital Solutions for Business Growth"
          subtitle="From affordable starter business websites to custom enterprise billing apps and tourism booking portals."
        />
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {SERVICES.map((s) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard icon={s.icon} title={s.title} desc={s.desc} isService />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            href="/services"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '1.05rem',
              color: 'primary.main',
              px: 3,
              py: 1,
              borderRadius: '999px',
              '&:hover': { bgcolor: 'rgba(0, 180, 216, 0.08)' },
            }}
          >
            Explore all services &amp; starter packages
          </Button>
        </Box>
      </Container>

      {/* --- INDUSTRIES WE SERVE (Boosts Local & Sector SEO) --- */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 11 }, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Industries We Empower"
            title="Tailored Software for Every Sector in Kerala"
            subtitle="Specialized web platforms designed around the exact workflow of your business."
          />
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {INDUSTRIES.map((ind) => (
              <Grid key={ind.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: '18px',
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 28px rgba(10, 25, 47, 0.07)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {ind.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem' }}>
                    {ind.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    {ind.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- PROCESS SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 9, md: 13 }, position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.18), transparent 65%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <SectionHeader
            light
            eyebrow="How We Work"
            title="A Streamlined 4-Step Development Process"
            subtitle="Transparent communication, predictable timelines, and clean execution from idea to live launch."
          />
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {STEPS.map((step) => (
              <Grid key={step.no} size={{ xs: 12, sm: 6, md: 3 }}>
                <StepCard no={step.no} title={step.title} desc={step.desc} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- ABOUT / TECH EXPERTISE SECTION --- */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: 'warning.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.5, mb: 1.5 }}
              >
                Full-Stack Expertise in Alappuzha &amp; Worldwide
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 800, mb: 2.5, letterSpacing: '-0.02em', fontSize: { xs: '1.75rem', md: '2.3rem' }, lineHeight: 1.25 }}
              >
                Engineering Modern Digital Experiences for Local &amp; Global Brands
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1rem' }}>
                Based in Alappuzha, Kerala, <strong>Agnik Tech Solutions</strong> specializes in building fast, secure, and SEO-friendly websites and software applications for commercial businesses, tourism operators, clinics, and international clients.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1rem' }}>
                Whether you need a custom houseboat booking system, a retail billing &amp; inventory portal, or a high-ranking corporate website, our senior engineering team guarantees clean code, responsive Material-UI design, and blazing Vercel CDN speed.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '24px',
                  bgcolor: 'primary.main',
                  color: 'white',
                  boxShadow: '0 20px 40px rgba(10, 25, 47, 0.15)',
                  border: '1px solid rgba(0, 180, 216, 0.25)',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5, color: 'secondary.main', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  Our Modern Technology Stack
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.8,
                    color: 'grey.300',
                    fontSize: { xs: '0.95rem', md: '1.02rem' },
                  }}
                >
                  <li>
                    <strong>Frontend Architecture:</strong> Next.js App Router, React, TypeScript, Material-UI (MUI)
                  </li>
                  <li>
                    <strong>Backend &amp; Database:</strong> Node.js, Express, MongoDB, Secure REST &amp; Server APIs
                  </li>
                  <li>
                    <strong>Payments &amp; Messaging:</strong> Razorpay Payment Gateway, WhatsApp Business API Integration
                  </li>
                  <li>
                    <strong>SEO &amp; Cloud Hosting:</strong> Google Search Console, Schema JSON-LD, Vercel CDN &amp; Custom DNS
                  </li>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- WHY CHOOSE US SECTION --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 13 } }}>
        <SectionHeader
          eyebrow="Why Choose Agnik Tech Solutions"
          title="Direct Senior Engineering Without Agency Markup"
        />
        <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ maxWidth: 940, mx: 'auto' }}>
          {REASONS.map((r) => (
            <Grid key={r} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 2.8, md: 3.5 },
                  borderRadius: '18px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
                  '&:hover': { borderColor: 'secondary.main', boxShadow: '0 10px 25px rgba(10, 25, 47, 0.06)' },
                }}
              >
                <CheckCircleIcon sx={{ color: 'secondary.main', mt: '2px', fontSize: 26, flexShrink: 0 }} />
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '1rem' }}>{r}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- FINAL CTA SECTION --- */}
      <Container maxWidth="lg" sx={{ pb: { xs: 9, md: 13 } }}>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            color: 'white',
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 6, md: 9 },
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #0A192F 0%, #0F3057 55%, #00B4D8 130%)',
            boxShadow: '0 24px 60px rgba(10, 25, 47, 0.3)',
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
              sx={{
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
                fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.6rem' },
              }}
            >
              Ready to Launch Your Website or Software?
            </Typography>
            <Typography
              sx={{
                color: 'grey.300',
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Contact Agnik Tech Solutions in Alappuzha today for a free consultation, live demo, or instant quote for your business.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Button
                variant="contained"
                color="warning"
                size="large"
                component={Link}
                href="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  px: 4.5,
                  py: 1.6,
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '999px',
                  textTransform: 'none',
                  color: 'white',
                  boxShadow: '0 12px 30px rgba(247, 127, 0, 0.45)',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: '#d96c00', transform: 'translateY(-3px)' },
                }}
              >
                Request Free Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href="https://wa.me/919633134324?text=Hi%20Agnik%20Tech%20Solutions,%20I%20need%20a%20quote%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '999px',
                  textTransform: 'none',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37, 211, 102, 0.12)' },
                }}
              >
                Chat on WhatsApp
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

    </Box>
  );
}