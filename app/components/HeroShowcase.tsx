'use client';
import { Box, Typography, Chip } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from '@mui/icons-material/Search';

const floatA = keyframes`0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(-0.5deg)}`;
const floatB = keyframes`0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(10px) rotate(0.6deg)}`;
const floatC = keyframes`0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(-0.5deg)}`;
const pulseGlow = keyframes`0%,100%{opacity:0.35; transform:scale(1)}50%{opacity:0.65; transform:scale(1.04)}`;

const Bar = ({ w, h = 6, c = '#0A192F', o = 1 }: { w: number | string; h?: number; c?: string; o?: number }) => (
  <Box sx={{ width: w, height: h, borderRadius: 99, bgcolor: c, opacity: o }} />
);

const modernShadow = '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)';

export default function HeroShowcase() {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        height: { xs: 480, md: 460 }, 
        width: '100%', 
        maxWidth: 620,
        mx: 'auto',
        overflow: 'visible' 
      }}
    >
      {/* Immersive background ambient neon glow filling blank spaces */}
      <Box
        sx={{
          position: 'absolute',
          inset: '5% 5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,180,216,0.3) 0%, rgba(247,127,0,0.15) 55%, transparent 80%)',
          filter: 'blur(35px)',
          animation: `${pulseGlow} 6s ease-in-out infinite`,
          pointerEvents: 'none',
        }}
      />

      {/* ---------- Decorative Blurred Background Typography (Atmospheric & Non-Readable) ---------- */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          right: '5%',
          textAlign: 'center',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.08)',
            filter: 'blur(8px)',
            lineHeight: 1.1,
          }}
        >
          Agnik Tech Solutions
        </Typography>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1rem', md: '1.3rem' },
            letterSpacing: '0.2em',
            color: 'rgba(0, 180, 216, 0.12)',
            filter: 'blur(6px)',
            mt: 1,
          }}
        >
          Innovate • Create • Secure
        </Typography>
      </Box>

      {/* ---------- Desktop browser: booking website ---------- */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: 0,
          width: { xs: '82%', md: '84%' },
          borderRadius: '16px',
          bgcolor: '#F4F8FC',
          boxShadow: modernShadow,
          overflow: 'hidden',
          animation: `${floatA} 6s ease-in-out infinite`,
          border: '1px solid rgba(255,255,255,0.2)',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 1.75, py: 1, bgcolor: '#E3EBF4' }}>
          {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
            <Box key={c} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: c }} />
          ))}
          <Box sx={{ ml: 1.5, flexGrow: 1, height: 16, borderRadius: 99, bgcolor: 'white', display: 'flex', alignItems: 'center', px: 1.5 }}>
            <Typography sx={{ fontSize: 8.5, color: '#64748B', fontWeight: 600 }}>https://agniktech.com</Typography>
          </Box>
        </Box>

        <Box sx={{ p: 1.75 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#00B4D8' }} />
            <Typography sx={{ fontWeight: 800, fontSize: 13, color: '#0A192F' }}>Kayal Vista</Typography>
            <Box sx={{ flexGrow: 1 }} />
            {[28, 28, 28, 28].map((w, i) => (
              <Bar key={i} w={w} h={4} c="#A9B8CC" />
            ))}
          </Box>

          <Box
            sx={{
              position: 'relative',
              borderRadius: '12px',
              p: 2,
              color: 'white',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0A4C6A 0%, #0B7A9E 55%, #00B4D8 130%)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                right: 18,
                top: 14,
                width: 62,
                height: 62,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #FFB347, #F77F00)',
                opacity: 0.9,
              }}
            />
            <Typography sx={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2, mb: 0.5 }}>
              Book Your Backwater Stay
            </Typography>
            <Typography sx={{ fontSize: 10, opacity: 0.85, mb: 1.5 }}>Rooms &amp; houseboats in Alappuzha</Typography>
            <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center', maxWidth: 260 }}>
              <Box sx={{ flex: 1, height: 22, borderRadius: 99, bgcolor: 'white', display: 'flex', alignItems: 'center', px: 1, gap: 0.5 }}>
                <SearchIcon sx={{ fontSize: 12, color: '#7B8DA5' }} />
                <Bar w="60%" h={4} c="#C3CEDC" />
              </Box>
              <Box sx={{ px: 1.25, height: 22, borderRadius: 99, bgcolor: '#F77F00', display: 'flex', alignItems: 'center', fontSize: 9, fontWeight: 700 }}>
                Book now
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, mt: 1.5 }}>
            {[
              ['#0B7A9E', '#48CAE4'],
              ['#F77F00', '#FFB347'],
              ['#0F3057', '#3B6EA5'],
            ].map(([a, b], i) => (
              <Box key={i} sx={{ borderRadius: '10px', bgcolor: 'white', border: '1px solid #DEE6F0', p: 0.75 }}>
                <Box sx={{ height: 40, borderRadius: '7px', mb: 0.75, background: `linear-gradient(135deg, ${a}, ${b})` }} />
                <Bar w="75%" h={5} />
                <Box sx={{ mt: 0.5 }}>
                  <Bar w="45%" h={4} c="#A9B8CC" />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ---------- Tablet: sports website ---------- */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: -8, md: -16 },
          bottom: 10,
          width: 175,
          p: '6px',
          borderRadius: '16px',
          bgcolor: 'rgba(12, 26, 48, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: modernShadow,
          animation: `${floatB} 7s ease-in-out infinite`,
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 2,
        }}
      >
        <Box sx={{ borderRadius: '11px', bgcolor: '#F4F8FC', overflow: 'hidden' }}>
          <Box sx={{ px: 1, py: 0.75, background: 'linear-gradient(135deg, #14532D, #22A559)', color: 'white' }}>
            <Typography sx={{ fontWeight: 800, fontSize: 11 }}>Cricksy</Typography>
            <Typography sx={{ fontSize: 8, opacity: 0.85 }}>Live Match Stats</Typography>
          </Box>
          <Box sx={{ p: 0.75, display: 'grid', gap: 0.5 }}>
            {[0, 1].map((i) => (
              <Box
                key={i}
                sx={{ display: 'flex', alignItems: 'center', gap: 0.75, bgcolor: 'white', border: '1px solid #DEE6F0', borderRadius: '7px', p: 0.5 }}
              >
                <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: ['#22A559', '#F77F00'][i] }} />
                <Box sx={{ flex: 1 }}>
                  <Bar w="80%" h={4} />
                  <Box sx={{ mt: 0.4 }}>
                    <Bar w="50%" h={3} c="#A9B8CC" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ---------- Phone: wedding invitation ---------- */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: -4, md: -8 },
          bottom: -4,
          width: 120,
          p: '6px',
          borderRadius: '24px',
          bgcolor: 'rgba(12, 26, 48, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: modernShadow,
          animation: `${floatC} 5s ease-in-out infinite`,
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 2,
        }}
      >
        <Box sx={{ borderRadius: '19px', bgcolor: '#FFF9F0', overflow: 'hidden', pb: 1.25 }}>
          <Box sx={{ mx: 'auto', mt: 0.75, width: 28, height: 4, borderRadius: 99, bgcolor: '#0C1A30' }} />

          <Box
            sx={{
              position: 'relative',
              mx: 1,
              mt: 1,
              px: 0.75,
              py: 1,
              borderRadius: '12px',
              border: '1px solid #D9B86C',
              textAlign: 'center',
              background: 'linear-gradient(180deg, #FFFDF8 0%, #FDF1E7 100%)',
            }}
          >
            <Typography sx={{ fontSize: 6, letterSpacing: 1.5, color: '#B08A3C', fontWeight: 700, mt: 0.5 }}>
              SAVE THE DATE
            </Typography>
            
            <Box
              sx={{
                display: 'inline-block',
                mt: 0.5,
                px: 1,
                py: 0.25,
                borderRadius: 99,
                bgcolor: '#7A2E4D',
                color: 'white',
                fontSize: 6.5,
                fontWeight: 700,
              }}
            >
              12 DEC 2026
            </Box>
          </Box>

          <Box
            sx={{
              mx: 'auto',
              mt: 1,
              width: 56,
              py: 0.35,
              textAlign: 'center',
              borderRadius: 99,
              background: 'linear-gradient(90deg, #D9B86C, #B08A3C)',
              color: 'white',
              fontSize: 7,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            RSVP
          </Box>
        </Box>
      </Box>

      {/* ---------- floating glass chips filling blank corners ---------- */}
      <Chip
        icon={<SmartphoneOutlinedIcon sx={{ color: '#00B4D8 !important' }} />}
        label="Mobile First"
        sx={{
          position: 'absolute',
          top: 0,
          right: { xs: 0, md: 8 },
          bgcolor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          fontWeight: 700,
          border: '1px solid rgba(0,180,216,0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          zIndex: 3,
        }}
      />
      <Chip
        icon={<SearchIcon sx={{ color: '#27C93F !important' }} />}
        label="SEO Optimized"
        sx={{
          position: 'absolute',
          top: 155,
          left: { xs: -12, md: -24 },
          bgcolor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          fontWeight: 700,
          border: '1px solid rgba(39,201,63,0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          zIndex: 3,
        }}
      />
      <Chip
        icon={<SpeedIcon sx={{ color: '#F77F00 !important' }} />}
        label="Lightning Fast"
        sx={{
          position: 'absolute',
          bottom: 130,
          right: { xs: -4, md: -12 },
          bgcolor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          fontWeight: 700,
          border: '1px solid rgba(247,127,0,0.3)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          zIndex: 3,
        }}
      />
    </Box>
  );
}