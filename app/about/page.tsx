'use client';
import { Box, Container, Typography, Button, Grid, Card, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;
const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

/* ---------- content ---------- */
const values = [
  {
    title: 'Innovation',
    desc: 'We stay curious, adopt proven modern tools and look for smarter ways to solve real problems.',
    icon: <LightbulbOutlinedIcon />,
    color: '#F77F00',
  },
  {
    title: 'Craftsmanship',
    desc: 'Clean architecture, readable code and attention to detail in everything we ship.',
    icon: <WorkspacePremiumOutlinedIcon />,
    color: '#00B4D8',
  },
  {
    title: 'Security',
    desc: 'Protecting your users and data is a built-in part of every project, never an afterthought.',
    icon: <ShieldOutlinedIcon />,
    color: '#F77F00',
  },
  {
    title: 'Transparency',
    desc: 'Honest communication, clear timelines and no surprises from the first call to launch.',
    icon: <HandshakeOutlinedIcon />,
    color: '#00B4D8',
  },
];

const domains = ['EdTech', 'Gaming & Events', 'Enterprise Analytics', 'Fintech'];
const expertise = ['React', 'Next.js', 'Angular', 'Node.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker'];

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

export default function AboutPage() {
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
              bgcolor: 'rgba(0, 180, 216, 0.1)',
              border: '1px solid rgba(0, 180, 216, 0.35)',
              color: 'secondary.main',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            <WhatshotIcon fontSize="small" sx={{ color: 'warning.main' }} />
            About Us
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
            Engineering Driven by{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Passion and Purpose
            </Box>
          </Typography>

          <Typography sx={{ color: 'grey.300', maxWidth: 640, mx: 'auto', mb: 5, fontSize: '1.15rem', lineHeight: 1.75 }}>
            We are a software and web engineering company that turns ideas into fast, secure and scalable digital
            products.
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
              Work With Us
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
              See Our Work
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ==========================================
          OUR STORY
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} >
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: 'warning.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, mb: 1.5 }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-0.02em', mb: 3, fontSize: { xs: '1.9rem', md: '2.5rem' } }}
            >
              Lighting the Way for Better Software
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2.5, fontSize: '1.05rem' }}>
              Our name comes from <strong>Agni</strong>, the Sanskrit word for fire: the spark that creates, the
              energy that drives progress and the light that shows the way. That idea is at the heart of
              everything we do.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2.5, fontSize: '1.05rem' }}>
              Agnik Tech Solutions was built on a simple belief: good software should be fast, secure and a joy to
              use. We combine modern engineering with a clear understanding of business needs, so every product we
              build solves a real problem for real people.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, fontSize: '1.05rem' }}>
              From booking platforms and online shops to analytics dashboards and personal brands, we treat every
              project with the same care, from the first idea to long after launch.
            </Typography>
          </Grid>

          {/* Logo showcase card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ animation: `${floatY} 6s ease-in-out infinite` }}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  p: { xs: 4, md: 5 },
                  color: 'white',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #0A192F 0%, #0F3057 60%, #00B4D8 150%)',
                  boxShadow: '0 30px 70px rgba(10, 25, 47, 0.3)',
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
                    bottom: -90,
                    right: -70,
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(247,127,0,0.4), transparent 65%)',
                  }}
                />
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'relative', width: '100%', height: 84, mb: 4 }}>
                    <Image
                      src="/agnik-logo-horizontal.svg"
                      alt="Agnik Tech Solutions"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                    {['Innovate', 'Create', 'Secure'].map((w) => (
                      <Chip
                        key={w}
                        label={w}
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.22)',
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ==========================================
          MISSION & VISION
          ========================================== */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-30%',
            left: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.18), transparent 65%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <SectionHeading
            light
            eyebrow="Mission & Vision"
            title="Where We Are Going and Why"
            subtitle="Two simple ideas guide every decision we make."
          />
          <Grid container spacing={3}>
            {[
              {
                title: 'Our Mission',
                desc: 'To deliver high-performance, secure and scalable software that helps businesses and individuals grow, with honest communication and engineering we are proud of.',
                icon: <FlagOutlinedIcon />,
                accent: '#00B4D8',
              },
              {
                title: 'Our Vision',
                desc: 'To be a trusted technology partner known for turning bold ideas into reliable digital products, and for lighting the way for others to innovate with confidence.',
                icon: <VisibilityOutlinedIcon />,
                accent: '#F77F00',
              },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 5 },
                    borderRadius: '24px',
                    bgcolor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: item.accent, transform: 'translateY(-6px)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: item.accent,
                      bgcolor: `${item.accent}22`,
                      '& svg': { fontSize: 34 },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'grey.300', lineHeight: 1.8, fontSize: '1.05rem' }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==========================================
          VALUES
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Our Values"
          title="The Principles Behind Our Work"
          subtitle="These values shape how we build software and how we work with people."
        />
        <Grid container spacing={3}>
          {values.map((v) => (
            <Grid key={v.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  p: 3.5,
                  borderRadius: '20px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 16px 40px rgba(10, 25, 47, 0.06)',
                  transition: 'all 0.35s ease',
                  '&:hover': { transform: 'translateY(-8px)', borderColor: v.color },
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
                    color: v.color,
                    bgcolor: `${v.color}18`,
                    '& svg': { fontSize: 30 },
                  }}
                >
                  {v.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                  {v.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                  {v.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ==========================================
          EXPERTISE
          ========================================== */}
      <Box sx={{ bgcolor: 'rgba(0, 180, 216, 0.05)', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Modern Tools, Proven Practices"
            subtitle="The technologies and industries we know best, so your project starts on solid ground."
          />
          <Grid container spacing={3} >
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '24px',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 20px 50px rgba(10, 25, 47, 0.08)',
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
                    color: 'secondary.main',
                    bgcolor: 'rgba(0, 180, 216, 0.1)',
                    '& svg': { fontSize: 30 },
                  }}
                >
                  <CodeIcon />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                  Technologies We Use
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 3 }}>
                  A modern, battle-tested stack for web applications, back-end systems and cloud deployment.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                  {expertise.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        bgcolor: 'rgba(0, 180, 216, 0.1)',
                        border: '1px solid rgba(0, 180, 216, 0.25)',
                        transition: 'all 0.25s ease',
                        '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'translateY(-2px)' },
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '24px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0A192F 0%, #0F3057 60%, #00B4D8 150%)',
                  boxShadow: '0 20px 50px rgba(10, 25, 47, 0.25)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -90,
                    right: -70,
                    width: 260,
                    height: 260,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(247,127,0,0.4), transparent 65%)',
                  }}
                />
                <Box sx={{ position: 'relative' }}>
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
                      bgcolor: 'rgba(247, 127, 0, 0.15)',
                      '& svg': { fontSize: 30 },
                    }}
                  >
                    <BusinessCenterOutlinedIcon />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    Industries We Serve
                  </Typography>
                  <Typography sx={{ color: 'grey.300', lineHeight: 1.75, mb: 3 }}>
                    Domain knowledge that helps us understand your users from day one.
                  </Typography>
                  <Stack spacing={1.25}>
                    {domains.map((d) => (
                      <Box key={d} sx={{ display: 'flex', gap: 1.25, alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 22 }} />
                        <Typography sx={{ fontWeight: 600 }}>{d}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==========================================
          FINAL CTA
          ========================================== */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
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
              Let&apos;s Create Something Great Together
            </Typography>
            <Typography sx={{ color: 'grey.300', maxWidth: 560, mx: 'auto', mb: 4.5, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Whether you have a detailed plan or just a spark of an idea, we are ready to help you bring it to life.
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