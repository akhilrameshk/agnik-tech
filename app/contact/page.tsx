'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  TextField,
  MenuItem,
  Alert,
  Link as MuiLink,
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const CONTACT = {
  email: 'info@agniktech.com',
  phone: '+91 9633134324',
  whatsapp: '+919633134324',
  address: 'Opposite Alleppey Gym, Stadium Ward, Alappuzha, Kerala - 688001',
};

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/19xxsiRTTd/',
  instagram: 'https://www.instagram.com/invites/contact/?utm_content=4yaxrms&cplk=9a0lv258hs0n',
  google: 'https://share.google/4ZIqn79bD4hD1j3Mt',
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const serviceOptions = [
  'Web Application Development',
  'Full-Stack & Backend Engineering',
  'APIs & System Integrations',
  'Cloud & DevOps',
  'Performance & Caching',
  'Maintenance & Support',
  'Something else',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
const emptyForm: FormState = { name: '', email: '', phone: '', service: '', message: '' };

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    bgcolor: 'background.paper',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.main', borderWidth: 2 },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: 'secondary.main' },
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'opened'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email';
    if (form.message.trim().length < 10) next.message = 'Please tell us a little more (at least 10 characters)';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Hello Agnik Tech Solutions! 👋',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Email:* ${form.email.trim()}`,
      form.phone.trim() ? `*Phone:* ${form.phone.trim()}` : '',
      form.service ? `*Interested in:* ${form.service}` : '',
      '',
      '*Message:*',
      form.message.trim(),
    ].filter((line, i, arr) => !(line === '' && arr[i - 1] === ''));

    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('opened');
    setForm(emptyForm);
  };

  const socialIcons = [
    { title: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}`, icon: <WhatsAppIcon sx={{ fontSize: 32 }} />, color: '#25D366' },
    { title: 'Facebook', href: SOCIAL_LINKS.facebook, icon: <FacebookIcon sx={{ fontSize: 32 }} />, color: '#1877F2' },
    { title: 'Instagram', href: SOCIAL_LINKS.instagram, icon: <InstagramIcon sx={{ fontSize: 32 }} />, color: '#E4405F' },
    { title: 'Google Business', href: SOCIAL_LINKS.google, icon: <GoogleIcon sx={{ fontSize: 32 }} />, color: '#EA4335' },
    { title: 'Email Us', href: `mailto:${CONTACT.email}`, icon: <EmailOutlinedIcon sx={{ fontSize: 32 }} />, color: '#00B4D8' },
    { title: 'Call Us', href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, icon: <PhoneOutlinedIcon sx={{ fontSize: 32 }} />, color: '#F77F00' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* PAGE HERO */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 10, md: 15 },
          pb: { xs: 18, md: 22 },
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
            Contact Us
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
            Let&apos;s Build Something{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #00B4D8 0%, #48CAE4 45%, #F77F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Great Together
            </Box>
          </Typography>

          <Typography sx={{ color: 'grey.300', maxWidth: 620, mx: 'auto', fontSize: '1.15rem', lineHeight: 1.75 }}>
            Have a project in mind or want to connect with us? Get in touch and let&apos;s discuss how we can help.
          </Typography>
        </Container>
      </Box>

      {/* FORM + SOCIAL ICONS */}
      <Container maxWidth="lg" sx={{ mt: { xs: -10, md: -12 }, pb: { xs: 10, md: 14 }, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 3, md: 5 },
                borderRadius: '26px',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 28px 70px rgba(10, 25, 47, 0.16)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                Send Us a Message
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3.5 }}>
                Fill in the form and your message will open in WhatsApp, ready to send to us.
              </Typography>

              {status === 'opened' && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }} onClose={() => setStatus('idle')}>
                  WhatsApp should now be open with your message. Just press send to deliver it to us.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      label="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      name="email"
                      label="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone (optional)"
                      value={form.phone}
                      onChange={handleChange}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      name="service"
                      label="I am interested in"
                      value={form.service}
                      onChange={handleChange}
                      sx={fieldSx}
                    >
                      {serviceOptions.map((o) => (
                        <MenuItem key={o} value={o}>
                          {o}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      minRows={5}
                      name="message"
                      label="Tell us about your project"
                      value={form.message}
                      onChange={handleChange}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      sx={fieldSx}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<WhatsAppIcon />}
                      sx={{
                        px: 5,
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '999px',
                        textTransform: 'none',
                        color: 'white',
                        bgcolor: '#25D366',
                        boxShadow: '0 10px 30px rgba(37, 211, 102, 0.35)',
                        transition: 'all 0.3s ease',
                        '&:hover': { bgcolor: '#1EBE5A', transform: 'translateY(-3px)' },
                      }}
                    >
                      Send on WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>

          {/* Social Icons Grid */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: '26px',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 28px 70px rgba(10, 25, 47, 0.16)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, textAlign: 'center' }}>
                Connect With Us
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
                Reach out to us instantly through our social channels or direct communication links.
              </Typography>

              <Grid container spacing={2.5}>
                {socialIcons.map((s) => (
                  <Grid size={{ xs: 6 }} key={s.title}>
                    <MuiLink
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        borderRadius: '20px',
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: s.color,
                          bgcolor: `${s.color}0D`,
                          '& .icon-box': { bgcolor: s.color, color: 'white' },
                        },
                      }}
                    >
                      <Box
                        className="icon-box"
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: s.color,
                          bgcolor: `${s.color}1A`,
                          mb: 1.5,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {s.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.95rem', textAlign: 'center' }}>
                        {s.title}
                      </Typography>
                    </MuiLink>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}