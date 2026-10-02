'use client';
import { Box, Typography, Chip } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';

/* ---------- Modern Floating Keyframes ---------- */
const floatMain = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.2deg); }
`;
const floatCard = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.75; transform: scale(1.06); }
`;

const globalShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)';

export default function HeroShowcase() {
  return (
    <Box sx={{ position: 'relative', height: 460, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,180,216,0.3) 0%, rgba(247,127,0,0.15) 60%, transparent 80%)',
          filter: 'blur(40px)',
          animation: `${pulseGlow} 6s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* ================= MAIN PREVIEW CARD (User-Centric Dashboard) ================= */}
      <Box
        sx={{
          position: 'absolute',
          top: 15,
          left: '2%',
          width: '88%',
          borderRadius: '20px',
          bgcolor: '#0B192F',
          boxShadow: globalShadow,
          overflow: 'hidden',
          animation: `${floatMain} 7s ease-in-out infinite`,
          zIndex: 2,
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {/* Top Header Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 1.5, bgcolor: '#07101F' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 2, py: 0.4, borderRadius: '20px', bgcolor: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.25)' }}>
            <AutoAwesomeRoundedIcon sx={{ fontSize: 13, color: '#00B4D8' }} />
            <Typography sx={{ fontSize: '11px', color: '#E2E8F0', fontWeight: 600, letterSpacing: '0.02em' }}>
              Live Business Platform
            </Typography>
          </Box>
          <Box sx={{ width: 40 }} />
        </Box>

        {/* Dashboard Content */}
        <Box sx={{ p: 3, bgcolor: '#0B192F', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
            <div>
              <Typography sx={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500, mb: 0.5 }}>Overview &amp; Impact</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                Your Brand, Scaled for Success
              </Typography>
            </div>
            <Box sx={{ px: 1.5, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(39,201,63,0.15)', color: '#27C93F', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <TrendingUpRoundedIcon sx={{ fontSize: 14 }} /> +145% Growth
            </Box>
          </Box>

          {/* Feature Highlight Rows */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
            {[
              { title: 'Lightning Fast Experience', desc: 'Engages customers instantly with zero lag.', color: '#00B4D8' },
              { title: 'Designed for All Devices', desc: 'Looks stunning on phones, tablets, and desktops.', color: '#F77F00' },
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.25, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: `${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
                <div>
                  <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#F8FAFC' }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '10.5px', color: '#94A3B8' }}>{item.desc}</Typography>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= OVERLAPPING SUCCESS CARD ================= */}
      <Box
        sx={{
          position: 'absolute',
          right: '-2%',
          bottom: 28,
          width: 210,
          p: 2,
          borderRadius: '16px',
          bgcolor: 'rgba(11, 25, 47, 0.92)',
          backdropFilter: 'blur(12px)',
          boxShadow: globalShadow,
          border: '1px solid rgba(255, 255, 255, 0.15)',
          animation: `${floatCard} 6s ease-in-out infinite`,
          zIndex: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: 'rgba(247,127,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F77F00' }}>
            <SpeedRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: '12px', color: 'white', lineHeight: 1.1 }}>Top Performance</Typography>
            <Typography sx={{ fontSize: '9.5px', color: '#27C93F', fontWeight: 600 }}>100% User Satisfaction</Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: '10.5px', color: '#94A3B8', lineHeight: 1.4 }}>
          Engineered for maximum customer engagement &amp; conversions.
        </Typography>
      </Box>

      {/* ================= FLOATING BADGES ================= */}
      <Chip
        icon={<VerifiedRoundedIcon sx={{ color: '#00B4D8 !important' }} />}
        label="Tailored for Your Audience"
        sx={{
          position: 'absolute',
          top: 0,
          left: 10,
          bgcolor: 'rgba(11, 25, 47, 0.95)',
          color: 'white',
          fontWeight: 700,
          fontSize: '11px',
          border: '1px solid rgba(0, 180, 216, 0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          zIndex: 4,
        }}
      />

      <Chip
        icon={<AutoAwesomeRoundedIcon sx={{ color: '#F77F00 !important' }} />}
        label="Modern &amp; Eye-Catching"
        sx={{
          position: 'absolute',
          bottom: 12,
          left: -10,
          bgcolor: 'rgba(11, 25, 47, 0.95)',
          color: 'white',
          fontWeight: 700,
          fontSize: '11px',
          border: '1px solid rgba(247, 127, 0, 0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          zIndex: 4,
        }}
      />

      <Chip
        icon={<TrendingUpRoundedIcon sx={{ color: '#27C93F !important' }} />}
        label="Built to Grow Your Business"
        sx={{
          position: 'absolute',
          top: 155,
          right: -24,
          bgcolor: 'rgba(11, 25, 47, 0.95)',
          color: 'white',
          fontWeight: 700,
          fontSize: '11px',
          border: '1px solid rgba(39, 201, 63, 0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          zIndex: 4,
        }}
      />
    </Box>
  );
}