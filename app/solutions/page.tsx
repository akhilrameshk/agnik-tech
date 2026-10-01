'use client';
import { Box, Container, Typography, Button, Grid, Card, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;

/* ---------- content ---------- */
const solutions = [
  {
    title: 'Custom Business Software',
    desc: 'Portals, internal tools and workflow systems built around how your team actually works.',
    points: ['Role-based access & approvals', 'Workflow automation', 'Integrations with your existing tools'],
    icon: <DashboardCustomizeOutlinedIcon />,
  },
  {
    title: 'Enterprise Analytics & Dashboards',
    desc: 'Turn scattered data into live dashboards and reports that leaders can act on quickly.',
    points: ['Interactive charts & KPIs', 'Data pipelines & aggregation', 'Exportable, scheduled reports'],
    icon: <QueryStatsOutlinedIcon />,
  },
  {
    title: 'E-commerce & Marketplaces',
    desc: 'Fast, secure storefronts and multi-vendor platforms that convert visitors into customers.',
    points: ['Catalogue, cart & checkout', 'Payment gateway integration', 'Admin & vendor dashboards'],
    icon: <StorefrontOutlinedIcon />,
  },
  {
    title: 'SaaS Product Development',
    desc: 'From MVP to multi-tenant platform, we help you launch quickly and scale without a rewrite.',
    points: ['Multi-tenant architecture', 'Subscription & billing flows', 'Scalable cloud infrastructure'],
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    title: 'Legacy Modernization',
    desc: 'Move ageing systems to a modern, maintainable stack without disrupting your operations.',
    points: ['Gradual, low-risk migration', 'Performance & security uplift', 'Cleaner, documented code'],
    icon: <AutorenewOutlinedIcon />,
  },
  {
    title: 'Security & Access Management',
    desc: 'Protect users and data with hardened authentication, authorization and secure deployments.',
    points: ['Secure auth & session handling', 'API protection & auditing', 'Safe CI/CD pipelines'],
    icon: <AdminPanelSettingsOutlinedIcon />,
  },
];

const industries = [
  { title: 'EdTech', desc: 'Learning platforms, assessments and student portals.', icon: <SchoolOutlinedIcon /> },
  { title: 'Fintech', desc: 'Secure payment, wallet and financial workflow applications.', icon: <AccountBalanceWalletOutlinedIcon /> },
  { title: 'Gaming & Events', desc: 'Real-time, high-traffic experiences for players and audiences.', icon: <SportsEsportsOutlinedIcon /> },
  { title: 'Enterprise', desc: 'Analytics, reporting and internal systems for large teams.', icon: <QueryStatsOutlinedIcon /> },
];

const models = [
  {
    title: 'Fixed-Scope Project',
    desc: 'A clearly defined product with agreed scope, timeline and milestones.',
    best: 'Best for well-defined builds',
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    title: 'Dedicated Team',
    desc: 'Engineers who work as an extension of your team, with flexible capacity.',
    best: 'Best for evolving roadmaps',
    icon: <GroupsOutlinedIcon />,
  },
  {
    title: 'Product Partnership',
    desc: 'We co-own the journey from idea and MVP to launch and long-term growth.',
    best: 'Best for startups & new products',
    icon: <HandshakeOutlinedIcon />,
  },
];

const stackFor = ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'];

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
          color: light ? 'white' : 'primary.main',
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

export default function SolutionsPage() {
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
            Our Solutions
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
            Solutions Engineered for{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Business Goals
            </Box>
          </Typography>

          <Typography sx={{ color: 'grey.300', maxWidth: 640, mx: 'auto', mb: 5, fontSize: '1.15rem', lineHeight: 1.75 }}>
            Whatever you are building or fixing, we combine modern engineering with a security-first mindset to
            deliver software that performs, scales and lasts.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
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
                borderRadius: '999px',
                textTransform: 'none',
                color: 'primary.main',
                boxShadow: '0 10px 30px rgba(0, 180, 216, 0.35)',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              Discuss Your Idea
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
                borderRadius: '999px',
                textTransform: 'none',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.35)',
                '&:hover': { borderColor: 'warning.main', bgcolor: 'rgba(247,127,0,0.08)' },
              }}
            >
              View Our Work
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ==========================================
          SOLUTIONS GRID
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="What We Build"
          title="End-to-End Solutions for Every Stage"
          subtitle="Pick the solution that fits, or combine several. Every project is tailored to your users and goals."
        />

        <Grid container spacing={3}>
          {solutions.map((s) => (
            <Grid key={s.title} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3.5,
                  borderRadius: '20px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  transition: 'all 0.35s ease',
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
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 24px 48px rgba(10, 25, 47, 0.12)' },
                  '&:hover::before': { transform: 'scaleX(1)' },
                  '&:hover .sol-icon': { bgcolor: 'primary.main', color: 'secondary.main' },
                }}
              >
                <Box
                  className="sol-icon"
                  sx={{
                    width: 62,
                    height: 62,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    color: 'secondary.main',
                    bgcolor: 'rgba(0, 180, 216, 0.1)',
                    transition: 'all 0.35s ease',
                    '& svg': { fontSize: 32 },
                  }}
                >
                  {s.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5 }}>
                  {s.desc}
                </Typography>

                <Stack spacing={1} sx={{ mb: 3 }}>
                  {s.points.map((p) => (
                    <Box key={p} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main', mt: '3px' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {p}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  component={Link}
                  href="/contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 'auto', alignSelf: 'flex-start', p: 0, fontWeight: 700, textTransform: 'none', color: 'primary.main' }}
                >
                  Discuss this solution
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ==========================================
          INDUSTRIES
          ========================================== */}
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
          <SectionHeading
            light
            eyebrow="Industries"
            title="Built for the Domains We Know Best"
            subtitle="Deep understanding of your industry means fewer surprises and faster delivery."
          />
          <Grid container spacing={3}>
            {industries.map((i) => (
              <Grid key={i.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3.5,
                    borderRadius: '18px',
                    bgcolor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(247,127,0,0.6)', transform: 'translateY(-6px)' },
                  }}
                >
                  <Box sx={{ color: 'warning.main', mb: 2, '& svg': { fontSize: 40 } }}>{i.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {i.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                    {i.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==========================================
          ENGAGEMENT MODELS
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Ways to Work Together"
          title="Flexible Engagement Models"
          subtitle="Choose the setup that matches your budget, timeline and how involved you want to be."
        />
        <Grid container spacing={3}>
          {models.map((m) => (
            <Grid key={m.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: '20px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 20px 50px rgba(10, 25, 47, 0.06)',
                  transition: 'all 0.35s ease',
                  '&:hover': { transform: 'translateY(-8px)', borderColor: 'warning.main' },
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    color: 'warning.main',
                    bgcolor: 'rgba(247, 127, 0, 0.1)',
                    '& svg': { fontSize: 30 },
                  }}
                >
                  {m.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                  {m.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>{m.desc}</Typography>
                <Chip
                  label={m.best}
                  size="small"
                  sx={{ fontWeight: 600, color: 'primary.main', bgcolor: 'rgba(0, 180, 216, 0.1)' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tech stack strip */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>
            Powered by modern technology
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25, justifyContent: 'center' }}>
            {stackFor.map((t) => (
              <Chip
                key={t}
                label={t}
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  bgcolor: 'rgba(0, 180, 216, 0.1)',
                  border: '1px solid rgba(0, 180, 216, 0.25)',
                }}
              />
            ))}
          </Box>
        </Box>
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
              Not Sure Which Solution Fits?
            </Typography>
            <Typography sx={{ color: 'grey.300', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Tell us what you are trying to achieve. We will recommend the right approach, with no obligation.
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