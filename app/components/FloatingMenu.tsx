'use client';
import { useCallback, useEffect, useState } from 'react';
import { Box, Fab, Tooltip, Zoom, CircularProgress } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import Link from 'next/link';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CONTACT, COMPANY } from '../siteConfig';

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  `Hello ${COMPANY.name}! I would like to know more about your services.`,
)}`;

export default function FloatingMenu() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1: how far down the page we are
  const { mode, systemMode, setMode } = useColorScheme();

  useEffect(() => setMounted(true), []);

  // Track scroll position
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const resolved = mode === 'system' ? systemMode : mode;
  const isDark = resolved === 'dark';
  const atTop = progress < 0.02;
  const atBottom = progress > 0.98;

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
  const scrollToBottom = useCallback(
    () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }),
    [],
  );

  const percent = Math.round(progress * 100);

  // Items are listed from top to bottom
  const items = [
    {
      key: 'up',
      label: atTop ? 'You are at the top' : 'Scroll to top',
      icon: <KeyboardArrowUpIcon />,
      onClick: scrollToTop,
      disabled: atTop,
      sx: { bgcolor: 'background.paper', color: 'text.primary', border: '1px solid', borderColor: 'divider' },
    },
    {
      key: 'down',
      label: atBottom ? 'You are at the bottom' : 'Scroll to bottom',
      icon: <KeyboardArrowDownIcon />,
      onClick: scrollToBottom,
      disabled: atBottom,
      sx: { bgcolor: 'background.paper', color: 'text.primary', border: '1px solid', borderColor: 'divider' },
    },
    {
      key: 'contact',
      label: 'Contact us',
      icon: <SupportAgentOutlinedIcon />,
      href: '/contact',
      sx: { bgcolor: 'secondary.main', color: 'primary.main', '&:hover': { bgcolor: 'secondary.light' } },
    },
    {
      key: 'whatsapp',
      label: 'Chat on WhatsApp',
      icon: <WhatsAppIcon />,
      externalHref: WHATSAPP_URL,
      sx: { bgcolor: '#25D366', color: 'white', '&:hover': { bgcolor: '#1EBE5A' } },
    },
    {
      key: 'theme',
      label: mounted ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme',
      icon: mounted && isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />,
      onClick: () => setMode(isDark ? 'light' : 'dark'),
      sx: { bgcolor: 'warning.main', color: 'white', '&:hover': { bgcolor: 'warning.dark' } },
    },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 28 },
        bottom: { xs: 'calc(16px + env(safe-area-inset-bottom, 0px))', md: 28 },
        zIndex: 1050,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      {items.map((item) => {
        const common = {
          size: 'small' as const,
          'aria-label': item.label,
          disabled: item.disabled,
          sx: {
            width: 44,
            height: 44,
            boxShadow: '0 8px 20px rgba(10, 25, 47, 0.28)',
            '&.Mui-disabled': { opacity: 0.45, bgcolor: 'background.paper', color: 'text.secondary' },
            ...item.sx,
          },
        };

        let button;
        if (item.href) {
          button = (
            <Fab {...common} component={Link} href={item.href} onClick={item.onClick}>
              {item.icon}
            </Fab>
          );
        } else if (item.externalHref) {
          button = (
            <Fab
              {...common}
              component="a"
              href={item.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={item.onClick}
            >
              {item.icon}
            </Fab>
          );
        } else {
          button = (
            <Fab {...common} onClick={item.onClick}>
              {item.icon}
            </Fab>
          );
        }

        return (
          <Zoom key={item.key} in={true}>
            <Box>
              <Tooltip title={item.label} placement="left" arrow>
                <span>{button}</span>
              </Tooltip>
            </Box>
          </Zoom>
        );
      })}

      {/* Bottom scroll-progress indicator badge */}
      <Box sx={{ position: 'relative', width: 52, height: 52, mt: 0.5 }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={52}
          thickness={3}
          sx={{ position: 'absolute', inset: 0, color: 'divider' }}
        />
        <CircularProgress
          variant="determinate"
          value={percent}
          size={52}
          thickness={3}
          sx={{
            position: 'absolute',
            inset: 0,
            color: 'warning.main',
            '& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
          }}
        />
        <Tooltip title={`Scroll progress: ${percent}%`} placement="left" arrow>
          <Box
            sx={{
              position: 'absolute',
              inset: 4,
              borderRadius: '50%',
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {percent}%
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
}