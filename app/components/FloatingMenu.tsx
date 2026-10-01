'use client';
import { useCallback, useEffect, useState } from 'react';
import { Box, Fab, Tooltip, Zoom, CircularProgress, ClickAwayListener } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import Link from 'next/link';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
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
  const [open, setOpen] = useState(false);
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

  // Close with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

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

  // Items are listed from the top of the stack down to the main button
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
      onClick: () => setOpen(false),
      sx: { bgcolor: 'secondary.main', color: 'primary.main', '&:hover': { bgcolor: 'secondary.light' } },
    },
    {
      key: 'whatsapp',
      label: 'Chat on WhatsApp',
      icon: <WhatsAppIcon />,
      externalHref: WHATSAPP_URL,
      onClick: () => setOpen(false),
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
    <ClickAwayListener onClickAway={() => open && setOpen(false)}>
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
        {items.map((item, i) => {
          const delay = open ? `${(items.length - i) * 35}ms` : '0ms';
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
            <Zoom key={item.key} in={open} style={{ transitionDelay: delay }}>
              <Box>
                <Tooltip title={item.label} placement="left" arrow>
                  {/* span lets the tooltip work even when the button is disabled */}
                  <span>{button}</span>
                </Tooltip>
              </Box>
            </Zoom>
          );
        })}

        {/* Main toggle button with a ring that shows scroll position */}
        <Box sx={{ position: 'relative', width: 64, height: 64 }}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={64}
            thickness={2.5}
            sx={{ position: 'absolute', inset: 0, color: 'divider' }}
          />
          <CircularProgress
            variant="determinate"
            value={percent}
            size={64}
            thickness={2.5}
            sx={{
              position: 'absolute',
              inset: 0,
              color: 'warning.main',
              '& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
            }}
          />
          <Tooltip title={open ? 'Close menu' : `Quick menu (${percent}% scrolled)`} placement="left" arrow>
            <Fab
              aria-label={open ? 'Close quick menu' : 'Open quick menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              sx={{
                position: 'absolute',
                top: 6,
                left: 6,
                width: 52,
                height: 52,
                bgcolor: 'secondary.main',
                color: 'primary.main',
                boxShadow: '0 10px 26px rgba(0, 180, 216, 0.45)',
                '&:hover': { bgcolor: 'secondary.light' },
              }}
            >
              {open ? <CloseIcon /> : <AppsIcon />}
            </Fab>
          </Tooltip>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}
