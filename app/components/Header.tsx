'use client';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Main navigation. Each path needs a matching page: app/<path>/page.tsx
const navLinks = [
  // { title: 'Home', path: '/' },
   { title: 'Services', path: '/services' },
  { title: 'Solutions', path: '/solutions' },
  { title: 'Our Work', path: '/portfolio' },
  { title: 'About Us', path: '/about' },
];

// Highlighted call-to-action button (replaces the plain "Contact Us" link)
const ctaLink = { title: "Let's Talk", path: '/contact' };

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  // 'lg' so the wider logo + 6 links + button never feel crowded on tablets
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <>
      <AppBar position="sticky" sx={{ boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          {/* Left Side: Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
              height: { xs: '44px', lg: '56px' },
              width: { xs: '235px', lg: '297px' },
            }}
          >
            <Image
              src="/agnik-logo-horizontal.svg"
              alt="Agnik Tech Solutions - Innovate. Create. Secure."
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </Box>

          {/* Right Side: Desktop navigation */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Button
                    key={link.title}
                    component={Link}
                    href={link.path}
                    sx={{
                      color: active ? 'secondary.main' : 'white',
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.95rem',
                      px: 1.75,
                      borderRadius: 0,
                      borderBottom: '2px solid',
                      borderColor: active ? 'secondary.main' : 'transparent',
                      '&:hover': {
                        color: 'secondary.main',
                        bgcolor: 'transparent',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    {link.title}
                  </Button>
                );
              })}

              <Button
                component={Link}
                href={ctaLink.path}
                variant="contained"
                color="secondary"
                sx={{
                  ml: 2,
                  px: 3,
                  fontWeight: 700,
                  borderRadius: '999px',
                  textTransform: 'none',
                  boxShadow: 'none',
                }}
              >
                {ctaLink.title}
              </Button>
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 280, bgcolor: 'primary.main', color: 'white' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton color="inherit" aria-label="close menu" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: 3, pb: 2, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', width: '230px', height: '43px' }}>
            <Image
              src="/agnik-logo-horizontal.svg"
              alt="Agnik Tech Solutions Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <ListItem key={link.title} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    py: 1.5,
                    px: 3,
                    borderLeft: '3px solid',
                    borderColor: active ? 'secondary.main' : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={link.title}
                    sx={{
                      fontWeight: active ? 700 : 500,
                      color: active ? 'secondary.main' : 'white',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ p: 3, mt: 'auto' }}>
          <Button
            component={Link}
            href={ctaLink.path}
            onClick={handleDrawerToggle}
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ py: 1.25, fontWeight: 700, borderRadius: '999px', textTransform: 'none' }}
          >
            {ctaLink.title}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}