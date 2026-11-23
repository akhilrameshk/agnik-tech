'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoutIcon from '@mui/icons-material/Logout';

const DRAWER_WIDTH = 240;

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const navItems = [
    { label: 'All Blogs', href: '/admin/blogs', icon: <ArticleOutlinedIcon /> },
    { label: 'New Tech Blog', href: '/admin/blogs/new', icon: <AddIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#070d19', color: '#f8fafc' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: '#0d1829',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" sx={{ color: '#f8fafc', fontWeight: 700 }}>
            Agnik Tech CMS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              component={Link}
              href="/blog"
              target="_blank"
              size="small"
              endIcon={<OpenInNewIcon fontSize="small" />}
              sx={{ color: '#cbd5e1', textTransform: 'none' }}
            >
              View Public Blog
            </Button>
            <Button
              onClick={handleLogout}
              size="small"
              startIcon={<LogoutIcon fontSize="small" />}
              sx={{ color: '#f97316', textTransform: 'none' }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            bgcolor: '#0a1220',
            color: '#f8fafc',
            borderRight: '1px solid rgba(255,255,255,0.08)',
          },
        }}
        open
      >
        <Toolbar sx={{ px: 2.5 }}>
          <Typography variant="h6" sx={{ color: '#f97316', fontWeight: 800 }}>
            AGNIK TECH
          </Typography>
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <List sx={{ px: 1.5, pt: 2 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  borderRadius: 2,
                  mb: 0.75,
                  bgcolor: active ? 'rgba(249, 115, 22, 0.16)' : 'transparent',
                  color: active ? '#f97316' : '#cbd5e1',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                <ListItemIcon sx={{ color: active ? '#f97316' : '#94a3b8', minWidth: 38 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '0.92rem',
                        fontWeight: active ? 700 : 500,
                      },
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3.5 },
          mt: 8,
          maxWidth: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}