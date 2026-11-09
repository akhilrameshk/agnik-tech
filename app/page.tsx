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

/* ---------- Animations ---------- */
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------- Data Constants ---------- */
const PILLARS = [
  {
    title: 'Innovate',
    desc: 'Transforming ideas into scalable web applications using Next.js, modern backend architectures, and modern UI stacks.',
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#F77F00',
  },
  {
    title: 'Create',
    desc: 'Pixel-perfect responsive design, high-converting web portals, and custom admin dashboards tailored for growth.',
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
  {
    title: 'Secure & Scale',
    desc: 'Production-ready cloud deployment on Vercel & AWS with built-in security, speed optimization, and SEO indexing.',
    icon: <ShieldOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
];

const SERVICES = [
  { title: 'Custom Web Applications', desc: 'High-speed Next.js & React apps with server-side rendering, top Core Web Vitals, and strong search visibility.', icon: <WebIcon /> },
  { title: 'Full-Stack Software', desc: 'End-to-end web products built on Node.js, Express, and MongoDB, engineered for real business workloads.', icon: <CodeIcon /> },
  { title: 'Business Portals & Admin Panels', desc: 'Secure custom dashboards and content management portals built to streamline operations and dynamic asset tracking.', icon: <HubOutlinedIcon /> },
  { title: 'SEO & Google Indexing', desc: 'Google Search Console setup, sitemap indexing, and local SEO structure to help your business rank on top.', icon: <InsightsOutlinedIcon /> },
  { title: 'Cloud Deployment & Vercel CDN', desc: 'Automated deployment pipelines, DNS mapping, and fast SSL setups for reliable global uptime.', icon: <CloudQueueIcon /> },
  { title: 'Performance Optimization', desc: 'Image compression, caching layer setups, and clean code refactoring that guarantee sub-second load times.', icon: <SpeedIcon /> },
];

const STEPS = [
  { no: '01', title: 'Consult & Scope', desc: 'We analyze your business needs and define a budget-friendly, high-impact project roadmap.' },
  { no: '02', title: 'Architecture & UI', desc: 'Modern Material-UI layout design and structured database planning tailored to your brand.' },
  { no: '03', title: 'Build & Test', desc: 'Clean, type-safe full-stack development with real-time feedback and mobile-first responsiveness.' },
  { no: '04', title: 'Deploy & Index', desc: 'Instant Vercel CDN launch, domain configuration, and Google Search Console submission.' },
];

const REASONS = [
  'Senior Full-Stack Developers working directly on your codebase',
  'Transparent, modular starter packages with no hidden monthly fees',
  'Lightning-fast page loads and zero-compromise SEO optimization',
  'Complete ownership of source code with 1-year basic technical support',
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
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 760, mx: 'auto' }}>
      <Typography
        variant="subtitle2"
        sx={{ color: 'warning.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, mb: 1.5 }}
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
          fontSize: { xs: '1.9rem', md: '2.6rem' },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 2, color: light ? 'grey.400' : 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
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
        p: { xs: 3, md: 3.5 },
        borderRadius: '18px',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(10, 25, 47, 0.08)',
        transition: 'all 0.35s ease',
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
            transition: 'transform 0.4s ease',
          },
          '&:hover::before': { transform: 'scaleX(1)' },
          '&:hover .svc-icon': { bgcolor: 'primary.main', color: 'secondary.main' },
        }),
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: color || 'divider',
          boxShadow: '0 24px 48px rgba(10, 25, 47, 0.12)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          className={isService ? 'svc-icon' : ''}
          sx={{
            width: 54,
            height: 54,
            flexShrink: 0,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color || 'secondary.main',
            bgcolor: color ? `${color}18` : 'rgba(0, 180, 216, 0.1)',
            transition: 'all 0.35s ease',
            '& svg': { fontSize: 28 },
          }}
        >
          {icon}
        </Box>
        <Typography variant={isService ? 'h6' : 'h5'} sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.3 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant={isService ? 'body2' : 'body1'} sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
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
        p: 3.5,
        borderRadius: '18px',
        bgcolor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(247,127,0,0.6)' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography
          sx={{
            fontSize: '2.2rem',
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
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3, color: 'white' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
        {desc}
      </Typography>
    </Box>
  );
}

/* ---------- Main Component ---------- */

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      
      {/* --- HERO SECTION --- */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 10, md: 16 },
          pb: { xs: 18, md: 24 },
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
            top: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.35), transparent 65%)',
            animation: `${pulseGlow} 7s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -160,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(247,127,0,0.28), transparent 65%)',
            animation: `${pulseGlow} 9s ease-in-out infinite`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ animation: `${fadeUp} 0.8s ease both`, textAlign: { xs: 'center', md: 'left' } }}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}>
                  <Chip
                    icon={<WhatshotIcon style={{ color: '#F77F00' }} />}
                    label="Fast & Reliable Web Development Agency"
                    sx={{
                      bgcolor: 'rgba(0, 180, 216, 0.1)',
                      border: '1px solid rgba(0, 180, 216, 0.35)',
                      color: 'secondary.main',
                      fontWeight: 600,
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
                    fontSize: { xs: '2.4rem', sm: '3.1rem', md: '3.7rem' },
                  }}
                >
                  High-Performing Websites &amp; Apps That{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Scale Your Business
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: 'warning.main',
                    fontWeight: 700,
                    mb: 2.5,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
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
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.75,
                  }}
                >
                  We engineer modern web applications, high-converting business websites, and tailored digital portals designed to elevate your brand and drive actual search visibility.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
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
                    Start Your Project
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    component="a"
                    href="https://wa.me/919633134324?text=Hi%20Agnik%20Tech%20Solutions,%20I%20would%20like%20to%20discuss%20a%20website%20project."
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
                      transition: 'all 0.3s ease',
                      '&:hover': { bgcolor: '#1DA851', transform: 'translateY(-3px)' },
                    }}
                  >
                    WhatsApp Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeroShowcase />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- PILLARS SECTION --- */}
      <Container maxWidth="lg" sx={{ mt: { xs: -10, md: -12 }, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3}>
          {PILLARS.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 4 }}>
              <FeatureCard icon={p.icon} title={p.title} desc={p.desc} color={p.color} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- SERVICES SECTION --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeader
          eyebrow="Our Web Development Services"
          title="Full-Stack Solutions Tailored for Business Growth"
          subtitle="From responsive business landing pages to full-scale enterprise software and custom web portals."
        />
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard icon={s.icon} title={s.title} desc={s.desc} isService />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/services"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700, textTransform: 'none', fontSize: '1rem', color: 'text.primary' }}
          >
            Explore all services &amp; pricing
          </Button>
        </Box>
      </Container>

      {/* --- PROCESS SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}>
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
            title="A Streamlined Development Process"
            subtitle="Transparent communication, predictable timelines, and clean execution from prototype to deployment."
          />
          <Grid container spacing={3}>
            {STEPS.map((step) => (
              <Grid key={step.no} size={{ xs: 12, sm: 6, md: 3 }}>
                <StepCard no={step.no} title={step.title} desc={step.desc} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- ABOUT / TECH EXPERTISE SECTION (SEO Keyword Optimization) --- */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle2" sx={{ color: 'warning.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, mb: 1.5 }}>
                Full-Stack Expertise in Kerala &amp; Beyond
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, letterSpacing: '-0.02em', fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                Engineering Modern Digital Experiences for Global &amp; Local Clients
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}>
                At <strong>Agnik Tech Solutions</strong>, based out of Alappuzha, Kerala, we specialize in building fast, secure, and SEO-friendly web applications for startups, tourism providers, alumni networks, and international enterprises.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Whether you need a custom houseboat booking platform, an administrative portal, or an international business landing page, our senior engineering team guarantees bulletproof code, responsive Material UI design, and Vercel CDN speed.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  p: 4, 
                  borderRadius: '24px', 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  boxShadow: '0 20px 40px rgba(10, 25, 47, 0.15)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}>
                  Our Modern Tech Stack
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2, display: 'flex', flexDirection: 'column', gap: 1.5, color: 'grey.300', fontSize: '1.05rem' }}>
                  <li><strong>Frontend Architecture:</strong> Next.js App Router, React, TypeScript, Material-UI (MUI)</li>
                  <li><strong>Backend &amp; Database:</strong> Node.js, Express, MongoDB, Server Actions</li>
                  <li><strong>SEO &amp; Indexing:</strong> Google Search Console, Schema Markup, Meta Tag Optimization</li>
                  <li><strong>Cloud Infrastructure:</strong> Vercel CDN, Docker, Automated CI/CD Pipelines, Custom DNS</li>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- WHY CHOOSE US SECTION --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeader
          eyebrow="Why Work With Us"
          title="Direct Engineering Without Agency Markup"
        />
        <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
          {REASONS.map((r) => (
            <Grid key={r} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  p: 3.5,
                  borderRadius: '18px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <CheckCircleIcon sx={{ color: 'secondary.main', mt: '2px', fontSize: 28 }} />
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '1.05rem' }}>{r}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- FINAL CTA SECTION --- */}
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
              Ready to Build Your Website or App?
            </Typography>
            <Typography sx={{ color: 'grey.300', maxWidth: 580, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Get in touch today for a free consultation or quick quote for your business website, web application, or SEO audit.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
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
                  fontSize: '1rem',
                  borderRadius: '999px',
                  textTransform: 'none',
                  color: 'white',
                  boxShadow: '0 12px 30px rgba(247, 127, 0, 0.45)',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: '#d96c00', transform: 'translateY(-3px)' },
                }}
              >
                Get a Free Quote
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

    </Box>
  );
}