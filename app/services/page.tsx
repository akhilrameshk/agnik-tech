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
    title: 'Custom Web Application Development',
    desc: 'Modern, high-speed web apps that load instantly, rank high on Google search, and feel smooth on every device. Built with robust front-end and server-side optimization.',
    points: [
      'Next.js & React applications with built-in SEO architecture',
      'Fully responsive, mobile-friendly pixel-perfect interfaces',
      'Custom admin panels, business portals, and live dashboards',
    ],
    tags: ['Next.js', 'React', 'Mobile Responsive', 'SEO Ready'],
    icon: <WebIcon />,
  },
  {
    no: '02',
    title: 'Full-Stack & Backend Engineering',
    desc: 'Reliable server-side systems that power your product: clean architecture, secure database management, and robust business logic designed to scale.',
    points: [
      'Node.js, Express, and modern backend architectures',
      'PostgreSQL and MongoDB secure data modeling',
      'User authentication, roles, and granular permissions',
    ],
    tags: ['Node.js', 'Databases', 'Security', 'APIs'],
    icon: <CodeIcon />,
  },
  {
    no: '03',
    title: 'APIs & System Integrations',
    desc: 'Secure, well-documented APIs and system integrations that connect your software smoothly with payment gateways and third-party tools.',
    points: [
      'RESTful API design and reliable versioning',
      'Scalable microservice and event-driven architecture',
      'Payment gateway and third-party tool integrations',
    ],
    tags: ['REST APIs', 'Integrations', 'Webhooks', 'OAuth'],
    icon: <HubOutlinedIcon />,
  },
  {
    no: '04',
    title: 'Cloud & DevOps Deployment',
    desc: 'Automated deployments on Vercel CDN and AWS so you can release updates with confidence and scale effortlessly when traffic grows.',
    points: [
      'Vercel & AWS cloud setup and domain configuration',
      'Docker containerization and automated CI/CD pipelines',
      'Real-time monitoring, uptime tracking, and automated backups',
    ],
    tags: ['Vercel CDN', 'AWS', 'Docker', 'CI/CD'],
    icon: <CloudQueueIcon />,
  },
  {
    no: '05',
    title: 'Performance & Speed Optimization',
    desc: 'Speed is critical for sales. We audit and optimize your application so pages load in milliseconds and servers remain stable under traffic spikes.',
    points: [
      'Caching layers and query optimization',
      'CDN, Image compression, and asset delivery strategies',
      'Core Web Vitals and lightning-fast load-time improvements',
    ],
    tags: ['Fast Loading', 'Caching', 'Core Web Vitals', 'Performance'],
    icon: <SpeedIcon />,
  },
  {
    no: '06',
    title: 'Ongoing Maintenance & Support',
    desc: 'Launch is just the beginning. We keep your software updated, secure, and continuously improving with dedicated technical support.',
    points: [
      'Regular bug fixes, software updates, and dependency upgrades',
      'Proactive security patches and routine health checks',
      'Continuous feature enhancements as your business evolves',
    ],
    tags: ['Support', 'Security Updates', 'Maintenance', 'Enhancements'],
    icon: <SupportAgentOutlinedIcon />,
  },
];

const included = [
  { title: 'Clean, Reviewed Code', desc: 'Readable, scalable, and maintainable architecture.', icon: <TaskAltOutlinedIcon /> },
  { title: 'Testing & QA', desc: 'Thorough testing to catch issues before users do.', icon: <BugReportOutlinedIcon /> },
  { title: 'Full Documentation', desc: 'Clear guidelines so your team can manage the system.', icon: <MenuBookOutlinedIcon /> },
  { title: 'Security by Default', desc: 'Hardened inputs, secure auth, and safe API endpoints.', icon: <ShieldOutlinedIcon /> },
];

const faqs = [
  {
    q: 'How do we get started with a project?',
    a: 'Contact us with your project idea or requirements. We will set up a brief consultation, understand your business goals, and provide a transparent proposal covering scope, timeline, and estimates.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We specialize in Next.js, React, Node.js, TypeScript, and Material-UI for front-end/back-end development, paired with Vercel and AWS for cloud infrastructure. We choose the right tools to guarantee high speed and SEO visibility.',
  },
  {
    q: 'Can you improve or update an existing website?',
    a: 'Yes! We can audit your current codebase, fix performance bottlenecks, upgrade security, improve Google SEO rankings, or add brand-new features.',
  },
  {
    q: 'Will I have full ownership of the source code?',
    a: 'Yes, absolutely. You retain 100% ownership of your source code and documentation upon project completion.',
  },
  {
    q: 'Do you offer support after the website goes live?',
    a: 'Yes, we provide ongoing maintenance, security updates, and technical support plans tailored to your business requirements.',
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
      
      {/* --- HERO SECTION --- */}
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
            Our Web Development Services
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
            High-performance web applications, robust backend systems, cloud deployment, and ongoing support, all managed under one expert team.
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
          </Stack>
        </Container>
      </Box>

      {/* --- SERVICES LIST --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Built to Scale Your Business"
          subtitle="Designed for speed, security, and high search visibility."
        />

        <Stack spacing={{ xs: 8, md: 12 }}>
          {services.map((s) => (
            <Grid
              key={s.title}
              container
              spacing={{ xs: 4, md: 8 }}
              sx={{ alignItems: 'center' }}
            >
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

      {/* --- WHAT'S INCLUDED --- */}
      <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', py: { xs: 10, md: 14 }, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Included in Every Project"
            title="Quality Standards Built In"
            subtitle="Guaranteed engineering standards delivered with every solution."
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

      {/* --- FAQ --- */}
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
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

      {/* --- FINAL CTA --- */}
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
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, mb: 2, letterSpacing: '-0.02em', fontSize: { xs: '1.9rem', md: '2.6rem' }, color: 'common.white' }}
            >
              Ready to Start Your Next Project?
            </Typography>
            <Typography sx={{ color: 'grey.200', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Share your business requirements and we will provide a clear plan, timeline, and accurate estimate.
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