'use client';
import { Box, Container, Typography, Button, Grid, Card, Stack } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import HeroShowcase from './components/HeroShowcase';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    desc: 'We turn ideas into forward-thinking products using modern architecture and the right technology for the job.',
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#F77F00',
  },
  {
    title: 'Create',
    desc: 'Clean, scalable, beautifully engineered software - from first prototype to production-ready platform.',
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
  {
    title: 'Secure',
    desc: 'Security is built in from day one: hardened APIs, safe deployments and reliable infrastructure.',
    icon: <ShieldOutlinedIcon sx={{ fontSize: 32 }} />,
    color: '#00B4D8',
  },
];

const SERVICES = [
  { title: 'Web Applications', desc: 'Lightning-fast Next.js and React apps with server-side rendering, strong SEO and pixel-perfect responsive design.', icon: <WebIcon /> },
  { title: 'Full-Stack Software', desc: 'End-to-end products built on Node.js, NestJS and modern databases, engineered for real business workloads.', icon: <CodeIcon /> },
  { title: 'APIs & Microservices', desc: 'Secure, well-documented APIs and service architectures that scale with your users and integrate with anything.', icon: <HubOutlinedIcon /> },
  { title: 'Dashboards & Analytics', desc: 'Interactive data dashboards and reporting tools that turn raw numbers into decisions your team can act on.', icon: <InsightsOutlinedIcon /> },
  { title: 'Cloud & DevOps', desc: 'AWS, Docker and automated CI/CD pipelines for smooth releases, easy scaling and dependable uptime.', icon: <CloudQueueIcon /> },
  { title: 'Performance & Caching', desc: 'Redis, CDN and ISR strategies that keep pages fast and servers calm, even when traffic spikes.', icon: <SpeedIcon /> },
];

const STEPS = [
  { no: '01', title: 'Discover', desc: 'We learn your goals, users and constraints, then define a clear scope.' },
  { no: '02', title: 'Design', desc: 'Architecture and interface planned together, so nothing is guesswork.' },
  { no: '03', title: 'Build', desc: 'Agile sprints with regular demos, clean code and automated testing.' },
  { no: '04', title: 'Launch & Grow', desc: 'Smooth deployment, monitoring and continuous improvement after go-live.' },
];

const REASONS = [
  'Senior engineers on every project, not just on the sales call',
  'Transparent communication and predictable delivery',
  'Performance and security treated as features, not afterthoughts',
  'Code you own, documented and ready to grow with your business',
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
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 720, mx: 'auto' }}>
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
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <WhatshotIcon fontSize="small" sx={{ color: 'warning.main' }} />
                  Fast. Reliable. Results-Driven.
                </Box>

                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    mb: 2.5,
                    fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem' },
                  }}
                >
                  Web Solutions That{' '}
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
                    fontWeight: 600,
                    mb: 2.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                  }}
                >
                  Custom Websites &amp; Digital Experiences
                </Typography>

                <Typography
                  sx={{
                    mb: 5,
                    color: 'grey.300',
                    maxWidth: 560,
                    mx: { xs: 'auto', md: 0 },
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.75,
                  }}
                >
                  We craft modern, high-performing websites and online platforms designed to engage your customers, elevate your brand, and drive real results.
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
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/portfolio"
                    sx={{
                      px: 4,
                      py: 1.6,
                      fontWeight: 600,
                      fontSize: '1rem',
                      borderRadius: '999px',
                      textTransform: 'none',
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.35)',
                      transition: 'all 0.3s ease',
                      '&:hover': { borderColor: 'warning.main', bgcolor: 'rgba(247,127,0,0.08)' },
                    }}
                  >
                    View Our Work
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
          eyebrow="What We Do"
          title="Services Built to Scale Your Business"
          subtitle="From a sharp marketing site to a complex enterprise platform, we cover the full journey."
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
            Explore all services
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
            title="A Simple Process, Exceptional Results"
            subtitle="No surprises. Just a clear path from your idea to a product that performs."
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

      {/* --- WHY CHOOSE US SECTION --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Engineering You Can Trust"
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
              Ready to Build Something Extraordinary?
            </Typography>
            <Typography sx={{ color: 'grey.300', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Tell us about your idea. We will help you shape it into fast, secure software that people love to use.
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
                fontSize: '1rem',
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