'use client';
import { Box, Container, Grid, Typography, Link as MuiLink, Divider, Button, Stack } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';

// TODO: replace these with your real contact details
const CONTACT = {
  email: 'info@yourdomain.com',
  phone: '+91 00000 00000',
};

const companyLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Our Work', path: '/portfolio' },
  { title: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { title: 'Web Applications', path: '/services' },
  { title: 'Full-Stack Software', path: '/services' },
  { title: 'APIs & Microservices', path: '/services' },
  { title: 'Cloud & DevOps', path: '/services' },
  { title: 'Our Solutions', path: '/solutions' },
];

const legalLinks = [
  { title: 'Privacy Policy', path: '/privacy-policy' },
  { title: 'Terms & Conditions', path: '/terms-and-conditions' },
];

const linkSx = {
  color: 'grey.400',
  fontSize: '0.95rem',
  width: 'fit-content',
  transition: 'all 0.25s ease',
  '&:hover': { color: 'secondary.main', transform: 'translateX(4px)' },
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        color: 'white',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 2,
        mb: 2.5,
        position: 'relative',
        pb: 1.25,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 32,
          height: 2,
          bgcolor: 'warning.main',
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'grey.300',
        pt: { xs: 7, md: 9 },
        pb: 3,
        borderTop: (theme) => `2px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Column 1: Brand & mission */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'relative', width: 260, height: 49, mb: 2.5 }}>
              <Image
                src="/agnik-logo-horizontal.svg"
                alt="Agnik Tech Solutions - Innovate. Create. Secure."
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.8, mb: 3, maxWidth: 340 }}>
              We design and build world-class software, custom web applications and advanced tech
              solutions that are fast, scalable and secure.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3,
                fontWeight: 700,
                textTransform: 'none',
                borderRadius: '999px',
                color: 'primary.main',
                boxShadow: 'none',
              }}
            >
              Start a Project
            </Button>
          </Grid>

          {/* Column 2: Company */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterHeading>Company</FooterHeading>
            <Stack spacing={1.5}>
              {companyLinks.map((l) => (
                <MuiLink key={l.title} component={Link} href={l.path} underline="none" sx={linkSx}>
                  {l.title}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Services */}
          <Grid size={{ xs: 6, md: 3 }}>
            <FooterHeading>Services</FooterHeading>
            <Stack spacing={1.5}>
              {serviceLinks.map((l) => (
                <MuiLink key={l.title} component={Link} href={l.path} underline="none" sx={linkSx}>
                  {l.title}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <FooterHeading>Get in Touch</FooterHeading>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ color: 'secondary.main' }} />
                <MuiLink href={`mailto:${CONTACT.email}`} underline="none" sx={{ ...linkSx, '&:hover': { color: 'secondary.main' } }}>
                  {CONTACT.email}
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneOutlinedIcon sx={{ color: 'secondary.main' }} />
                <MuiLink
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  underline="none"
                  sx={{ ...linkSx, '&:hover': { color: 'secondary.main' } }}
                >
                  {CONTACT.phone}
                </MuiLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />

        {/* Bottom bar: copyright + legal */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © {new Date().getFullYear()} Agnik Tech Solutions. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {legalLinks.map((l) => (
              <MuiLink
                key={l.title}
                component={Link}
                href={l.path}
                underline="hover"
                sx={{ color: 'grey.500', fontSize: '0.875rem', '&:hover': { color: 'secondary.main' } }}
              >
                {l.title}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}