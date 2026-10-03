'use client';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

/* ---------- SEO Metadata (Note: For Next.js App Router, metadata exports must be in a Server Component. If this file remains 'use client', you can split it or place metadata in a layout/parent server file. Below is the standard metadata configuration object) ---------- */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;

/* ---------- content ---------- */
const services = [
  {
    no: '01',
    title: 'Web Application Development',
    desc: 'Modern, responsive web apps that load fast, rank well and feel great on every device. We build with React, Next.js and Angular, using server-side rendering where it matters.',
    points: [
      'Next.js & React applications with SEO built in',
      'Responsive, accessible, pixel-perfect interfaces',
      'Admin panels, customer portals and dashboards',
    ],
    tags: ['Next.js', 'React', 'Angular', 'TypeScript'],
    icon: <WebIcon />,
  },
  {
    no: '02',
    title: 'Full-Stack & Backend Engineering',
    desc: 'Reliable server-side systems that power your product: clean architecture, well-designed databases and business logic you can trust as you grow.',
    points: [
      'Node.js, NestJS and Express back ends',
      'PostgreSQL and MongoDB data modelling',
      'Authentication, roles and permissions',
    ],
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    icon: <CodeIcon />,
  },
  {
    no: '03',
    title: 'APIs & System Integrations',
    desc: 'Secure, documented APIs and integrations that connect your software with payment gateways, third-party services and your existing tools.',
    points: [
      'REST API design and versioning',
      'Microservice and event-driven architecture',
      'Third-party and payment integrations',
    ],
    tags: ['REST', 'Microservices', 'Webhooks', 'OAuth'],
    icon: <HubOutlinedIcon />,
  },
  {
    no: '04',
    title: 'Cloud & DevOps',
    desc: 'Automated, repeatable deployments on the cloud so you can release confidently and scale when traffic grows, without late-night firefighting.',
    points: [
      'AWS setup and infrastructure management',
      'Docker containers and CI/CD pipelines',
      'Monitoring, logging and backups',
    ],
    tags: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
    icon: <CloudQueueIcon />,
  },
  {
    no: '05',
    title: 'Performance & Caching',
    desc: 'Speed is a feature. We audit and optimize your application so pages load quickly and servers stay calm under pressure.',
    points: [
      'Redis caching and query optimization',
      'CDN, ISR and image optimization strategies',
      'Core Web Vitals and load-time improvements',
    ],
    tags: ['Redis', 'CDN', 'ISR', 'Web Vitals'],
    icon: <SpeedIcon />,
  },
  {
    no: '06',
    title: 'Maintenance & Support',
    desc: 'Launch is just the beginning. We keep your software updated, secure and improving with ongoing support and new features.',
    points: [
      'Bug fixes, updates and dependency upgrades',
      'Security patches and regular health checks',
      'Feature enhancements as your needs evolve',
    ],
    tags: ['Support', 'Upgrades', 'Security', 'Enhancements'],
    icon: <SupportAgentOutlinedIcon />,
  },
];

const included = [
  { title: 'Clean, Reviewed Code', desc: 'Readable, consistent and maintainable by any developer.', icon: <TaskAltOutlinedIcon /> },
  { title: 'Testing & QA', desc: 'Bugs caught early, before your users find them.', icon: <BugReportOutlinedIcon /> },
  { title: 'Documentation', desc: 'Clear docs so your team can run and extend the project.', icon: <MenuBookOutlinedIcon /> },
  { title: 'Security by Default', desc: 'Safe authentication, validated inputs and hardened APIs.', icon: <ShieldOutlinedIcon /> },
];

const faqs = [
  {
    q: 'How do we get started?',
    a: 'Contact us with a short description of your idea or problem. We will set up a discovery call, ask the right questions, and follow with a clear proposal covering scope, approach and timeline.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Our main stack is React, Next.js, Angular, Node.js, NestJS and Express, with PostgreSQL, MongoDB and Redis for data, and AWS, Docker and CI/CD for infrastructure. We choose the tools that best fit your project, not the other way round.',
  },
  {
    q: 'Can you work on an existing project?',
    a: 'Yes. We can review your current codebase, fix issues, improve performance and security, add new features or gradually modernize the system without disrupting your business.',
  },
  {
    q: 'Will I own the code?',
    a: 'Yes. You receive the complete source code and documentation for your project, so you are never locked in.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer ongoing maintenance and support, including updates, monitoring, security patches and new features, based on what your product needs.',
  },
];

function SectionHeading({
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
          color: light ? 'common.white' : 'text.primary',
          fontSize: { xs: '1.9rem', md: '2.6rem' },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 2, color: light ? 'grey.300' : 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default function ServicesPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary' }}>
      {/* ==========================================
          PAGE HERO
          ========================================== */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'common.white',
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
            right: -100,
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
            left: -90,
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
              bgcolor: 'rgba(0, 180, 216, 0.15)',
              border: '1px solid rgba(0, 180, 216, 0.4)',
              color: 'secondary.light',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            <WhatshotIcon fontSize="small" sx={{ color: 'warning.main' }} />
            Our Services
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              mb: 2.5,
              fontSize: { xs: '2.3rem', sm: '3rem', md: '3.6rem' },
              color: 'common.white',
            }}
          >
            Full-Cycle Engineering,{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Idea to Launch
            </Box>
          </Typography>

          <Typography sx={{ color: 'grey.200', maxWidth: 640, mx: 'auto', mb: 5, fontSize: '1.15rem', lineHeight: 1.75 }}>
            Web development, backend systems, cloud and ongoing support, all under one roof, so you work with one
            team from the first sketch to long-term growth.
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
                px: 4,
                py: 1.6,
                fontWeight: 700,
                borderRadius: '999px',
                textTransform: 'none',
                color: 'common.white',
                boxShadow: '0 10px 30px rgba(247, 127, 0, 0.35)',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/solutions"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: '999px',
                textTransform: 'none',
                color: 'common.white',
                borderColor: 'rgba(255,255,255,0.4)',
                '&:hover': { borderColor: 'warning.main', bgcolor: 'rgba(247,127,0,0.12)' },
              }}
            >
              Explore Solutions
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ==========================================
          SERVICE DETAILS (alternating rows)
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="What We Offer"
          title="Services That Cover the Whole Journey"
          subtitle="Use one service or combine them. Each is delivered with the same focus on quality, speed and security."
        />

        <Stack spacing={{ xs: 8, md: 12 }}>
          {services.map((s) => (
            <Grid
              key={s.title}
              container
              spacing={{ xs: 4, md: 8 }}
              sx={{ alignItems: 'center' }}
            >
              {/* Visual panel */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 220, md: 300 },
                    borderRadius: '28px',
                    overflow: 'hidden',
                    color: 'common.white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0A192F 0%, #172a45 60%, #00B4D8 150%)',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -80,
                      right: -60,
                      width: 260,
                      height: 260,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(247,127,0,0.35), transparent 65%)',
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 24,
                      fontSize: '4rem',
                      fontWeight: 800,
                      lineHeight: 1,
                      color: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    {s.no}
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 110,
                      height: 110,
                      borderRadius: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      color: 'secondary.light',
                      '& svg': { fontSize: 56 },
                    }}
                  >
                    {s.icon}
                  </Box>
                </Box>
              </Grid>

              {/* Text */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: '-0.01em', mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}
                >
                  {s.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, fontSize: '1.05rem' }}>
                  {s.desc}
                </Typography>
                <Stack spacing={1.25} sx={{ mb: 3 }}>
                  {s.points.map((p) => (
                    <Box key={p} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 22, mt: '2px' }} />
                      <Typography sx={{ color: 'text.primary' }}>{p}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {s.tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        color: 'secondary.light',
                        bgcolor: 'rgba(0, 180, 216, 0.12)',
                        border: '1px solid rgba(0, 180, 216, 0.3)',
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>

      {/* ==========================================
          WHAT'S INCLUDED
          ========================================== */}
      <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <SectionHeading
            eyebrow="Included in Every Project"
            title="Quality You Do Not Have to Ask For"
            subtitle="These standards come with every service we deliver."
          />
          <Grid container spacing={3}>
            {included.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3.5,
                    borderRadius: '18px',
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: 'warning.main', transform: 'translateY(-6px)' },
                  }}
                >
                  <Box sx={{ color: 'warning.main', mb: 2, '& svg': { fontSize: 40 } }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==========================================
          FAQ
          ========================================== */}
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading eyebrow="FAQ" title="Questions We Often Hear" />
        <Stack spacing={2}>
          {faqs.map((f) => (
            <Accordion
              key={f.q}
              disableGutters
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '16px !important',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                '&::before': { display: 'none' },
                '&.Mui-expanded': { borderColor: 'secondary.main', boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />} sx={{ px: 3, py: 0.5 }}>
                <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{f.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
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
            color: 'common.white',
            px: { xs: 3, md: 8 },
            py: { xs: 7, md: 10 },
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #0A192F 0%, #172a45 55%, #00B4D8 130%)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
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
              background: 'radial-gradient(circle, rgba(247,127,0,0.35), transparent 65%)',
            }}
          />
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, mb: 2, letterSpacing: '-0.02em', fontSize: { xs: '1.9rem', md: '2.6rem' }, color: 'common.white' }}
            >
              Let&apos;s Build Your Next Product
            </Typography>
            <Typography sx={{ color: 'grey.200', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Share your requirements and we will get back with a clear plan, timeline and estimate.
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
                color: 'common.white',
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