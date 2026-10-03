'use client';
import { useEffect, useState, type ReactNode } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from '@mui/icons-material/Search';

const floatA = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`;
const floatB = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(9px)}`;
const floatC = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}`;
const spin = keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`;
const flow = keyframes`from{stroke-dashoffset:0}to{stroke-dashoffset:-80}`;
const pulse = keyframes`
  0%,100%{box-shadow:0 12px 30px rgba(247,127,0,0.5),0 0 0 0 rgba(247,127,0,0.45)}
  50%{box-shadow:0 12px 34px rgba(247,127,0,0.7),0 0 0 14px rgba(247,127,0,0)}
`;

const Bar = ({ w, h = 5, c = '#0A192F', o = 1 }: { w: number | string; h?: number; c?: string; o?: number }) => (
  <Box sx={{ width: w, height: h, borderRadius: 99, bgcolor: c, opacity: o }} />
);

const shadow = '0 26px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)';
const script = '"Brush Script MT","Segoe Script","Snell Roundhand",cursive';

/* ---------- project screens (rotate inside the big monitor) ---------- */
type Screen = {
  name: string;
  hero: string;
  accent: string;
  title: string;
  sub: string;
  cta: string;
  decor: 'sun' | 'bloom' | 'glasses' | 'avatar';
  tiles: [string, string][];
};

const screens: Screen[] = [
  {
    name: 'Kayal Vista',
    hero: 'linear-gradient(135deg, #0A4C6A 0%, #0B7A9E 55%, #00B4D8 130%)',
    accent: '#00B4D8',
    title: 'Book Your Backwater Stay',
    sub: 'Rooms & houseboats in Alappuzha',
    cta: 'Book now',
    decor: 'sun',
    tiles: [['#0B7A9E', '#48CAE4'], ['#F77F00', '#FFB347'], ['#0F3057', '#3B6EA5']],
  },
  {
    name: 'Daffodils-Inn',
    hero: 'linear-gradient(135deg, #03713e 0%, #067834 50%, #06b267 130%)',
    accent: '#054f2e',
    title: 'Fresh Styles for Her',
    sub: 'New arrivals every week',
    cta: 'Shop now',
    decor: 'bloom',
    tiles: [['#07a84f', '#05843c'], ['#C4B5FD', '#DDD6FE'], ['#FDBA74', '#FED7AA']],
  },
  {
    name: 'Optical Shop',
    hero: 'linear-gradient(135deg, #2B2370 0%, #4F46E5 55%, #818CF8 130%)',
    accent: '#4F46E5',
    title: 'Clear Vision, Great Style',
    sub: 'Frames, lenses & eye care',
    cta: 'View frames',
    decor: 'glasses',
    tiles: [['#6366F1', '#A5B4FC'], ['#0EA5E9', '#7DD3FC'], ['#0F3057', '#3B6EA5']],
  },
  {
    name: 'Personal Portfolio',
    hero: 'linear-gradient(135deg, #0A192F 0%, #0F3057 55%, #1B5E8C 130%)',
    accent: '#F77F00',
    title: 'Hi, I Build Great Things',
    sub: 'Developer & designer portfolio',
    cta: 'See my work',
    decor: 'avatar',
    tiles: [['#F77F00', '#FFB347'], ['#00B4D8', '#48CAE4'], ['#818CF8', '#C7D2FE']],
  },
];

function Decor({ kind, small = false }: { kind: Screen['decor']; small?: boolean }): ReactNode {
  const k = small ? 0.55 : 1;
  if (kind === 'sun')
    return (
      <>
        <Box sx={{ position: 'absolute', right: 16 * k, top: 12 * k, width: 54 * k, height: 54 * k, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #FFB347, #F77F00)', opacity: 0.95 }} />
        <Box sx={{ position: 'absolute', right: 0, bottom: 0, width: '55%', height: 20 * k, background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 14px, transparent 14px 28px)', opacity: 0.6 }} />
      </>
    );
  if (kind === 'bloom')
    return (
      <>
        <Box sx={{ position: 'absolute', right: 36 * k, top: 10 * k, width: 42 * k, height: 42 * k, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.35)' }} />
        <Box sx={{ position: 'absolute', right: 12 * k, top: 30 * k, width: 36 * k, height: 36 * k, borderRadius: '50%', bgcolor: 'rgba(253,186,116,0.8)' }} />
        <Box sx={{ position: 'absolute', right: 56 * k, top: 44 * k, width: 28 * k, height: 28 * k, borderRadius: '50%', bgcolor: 'rgba(196,181,253,0.85)' }} />
      </>
    );
  if (kind === 'glasses')
    return (
      <Box sx={{ position: 'absolute', right: 12 * k, top: 22 * k, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: 32 * k, height: 32 * k, borderRadius: '50%', border: `${4 * k}px solid white`, bgcolor: 'rgba(255,255,255,0.18)' }} />
        <Box sx={{ width: 9 * k, height: 4 * k, bgcolor: 'white' }} />
        <Box sx={{ width: 32 * k, height: 32 * k, borderRadius: '50%', border: `${4 * k}px solid white`, bgcolor: 'rgba(255,255,255,0.18)' }} />
      </Box>
    );
  return (
    <Box sx={{ position: 'absolute', right: 20 * k, top: 14 * k, width: 50 * k, height: 50 * k, borderRadius: '50%', background: 'linear-gradient(135deg, #F77F00, #00B4D8)', overflow: 'hidden', border: `${3 * k}px solid rgba(255,255,255,0.8)` }}>
      <Box sx={{ position: 'absolute', top: 8 * k, left: '50%', ml: `${-8 * k}px`, width: 16 * k, height: 16 * k, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.9)' }} />
      <Box sx={{ position: 'absolute', bottom: 0, left: '50%', ml: `${-15 * k}px`, width: 30 * k, height: 19 * k, borderRadius: '15px 15px 0 0', bgcolor: 'rgba(255,255,255,0.9)' }} />
    </Box>
  );
}

/* full-size screen for the monitor (fits a 384 x 223 area) */
function BigScreen({ s }: { s: Screen }) {
  return (
    <Box sx={{ height: '100%', p: '12px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, height: 20, flexShrink: 0 }}>
        <Box sx={{ width: 13, height: 13, borderRadius: '50%', bgcolor: s.accent }} />
        <Typography sx={{ fontWeight: 800, fontSize: 12, color: '#0A192F' }}>{s.name}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {[0, 1, 2, 3].map((n) => (
          <Bar key={n} w={24} h={4} c="#A9B8CC" />
        ))}
      </Box>

      <Box sx={{ position: 'relative', flex: '0 0 92px', borderRadius: '10px', p: '12px 14px', color: 'white', overflow: 'hidden', background: s.hero }}>
        <Decor kind={s.decor} />
        <Typography sx={{ position: 'relative', fontWeight: 800, fontSize: 15, lineHeight: 1.2, mb: 0.3, maxWidth: '70%' }}>{s.title}</Typography>
        <Typography sx={{ position: 'relative', fontSize: 9.5, opacity: 0.9, mb: 1 }}>{s.sub}</Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', px: 1.4, height: 20, borderRadius: 99, bgcolor: '#F77F00', fontSize: 9, fontWeight: 700 }}>
          {s.cta}
        </Box>
      </Box>

      <Box sx={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {s.tiles.map(([a, b], i) => (
          <Box key={i} sx={{ borderRadius: '8px', bgcolor: 'white', border: '1px solid #DEE6F0', p: '5px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Box sx={{ flex: 1, borderRadius: '5px', background: `linear-gradient(135deg, ${a}, ${b})` }} />
            <Bar w="70%" h={4} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* tiny screen for the small phone / tablet */
function MiniScreen({ s, title }: { s: Screen; title?: string }) {
  return (
    <Box sx={{ height: '100%', p: '6px', display: 'flex', flexDirection: 'column', gap: '5px', bgcolor: '#FAFCFE' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', height: 9, flexShrink: 0 }}>
        <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: s.accent }} />
        <Bar w={26} h={3} />
        <Box sx={{ flexGrow: 1 }} />
        <Bar w={10} h={3} c="#A9B8CC" />
        <Bar w={10} h={3} c="#A9B8CC" />
      </Box>
      <Box sx={{ position: 'relative', flex: 1.25, borderRadius: '6px', p: '6px', color: 'white', overflow: 'hidden', background: s.hero, minHeight: 0 }}>
        <Decor kind={s.decor} small />
        {title && <Typography sx={{ position: 'relative', fontWeight: 800, fontSize: 8, lineHeight: 1.15, maxWidth: '75%' }}>{title}</Typography>}
        <Box sx={{ position: 'relative', mt: '4px', width: 26, height: 7, borderRadius: 99, bgcolor: '#F77F00' }} />
      </Box>
      <Box sx={{ flex: 0.9, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
        {s.tiles.map(([a, b], i) => (
          <Box key={i} sx={{ borderRadius: '4px', background: `linear-gradient(135deg, ${a}, ${b})` }} />
        ))}
      </Box>
    </Box>
  );
}

export default function HeroShowcase() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % screens.length), 3600);
    return () => clearInterval(id);
  }, [paused]);

  const device = { position: 'absolute' as const, bgcolor: '#0C1A30', boxShadow: shadow };

  return (
    // Everything is laid out on a 540 x 430 stage and scaled to fit the column
    <Box
      sx={{
        position: 'relative',
        mx: 'auto',
        width: { xs: 302, sm: 500, md: 410, lg: 540 },
        height: { xs: 241, sm: 398, md: 327, lg: 430 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 540,
          height: 430,
          transformOrigin: 'top left',
          transform: { xs: 'scale(0.56)', sm: 'scale(0.926)', md: 'scale(0.76)', lg: 'scale(1)' },
        }}
      >
        {/* glow + ground shadow */}
        <Box sx={{ position: 'absolute', left: -30, top: 10, width: 600, height: 410, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,216,0.28), rgba(247,127,0,0.12) 55%, transparent 72%)', filter: 'blur(12px)' }} />
        <Box sx={{ position: 'absolute', left: 40, top: 404, width: 460, height: 22, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%)', filter: 'blur(6px)' }} />

        {/* circuit lines behind the devices (like the poster) */}
        <Box
          component="svg"
          width={540}
          height={430}
          viewBox="0 0 540 430"
          sx={{ position: 'absolute', inset: 0, overflow: 'visible', zIndex: 0, '& .flow': { animation: `${flow} 3.5s linear infinite` } }}
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M-60 70 H20 L50 40 H150" stroke="rgba(255,255,255,0.16)" />
            <path d="M600 36 H500 L470 8 H400" stroke="rgba(255,255,255,0.16)" />
            <path d="M-60 250 H10 L40 280 H80" stroke="rgba(255,255,255,0.14)" />
            <path d="M600 390 H520 L492 418 H440" stroke="rgba(255,255,255,0.14)" />
            <path d="M610 180 H548 L520 150 H470" stroke="#00B4D8" strokeDasharray="6 14" className="flow" opacity="0.8" />
            <path d="M-60 340 H20 L46 316 H70" stroke="#48CAE4" strokeDasharray="6 14" className="flow" opacity="0.8" />
            <path d="M610 300 H560 L535 325" stroke="#F77F00" strokeDasharray="6 14" className="flow" opacity="0.7" />
          </g>
          <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
            <circle cx="150" cy="40" r="4" />
            <circle cx="400" cy="8" r="4" />
            <circle cx="80" cy="280" r="4" />
            <circle cx="440" cy="418" r="4" />
          </g>
        </Box>

        {/* ---------- big monitor: rotating project screens ---------- */}
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{ ...device, zIndex: 2, left: 30, top: 18, width: 400, height: 245, borderRadius: '14px', p: '8px 8px 14px', bgcolor: '#1C2C48', animation: `${floatA} 6s ease-in-out infinite` }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: '7px', bgcolor: '#F4F8FC', overflow: 'hidden' }}>
            {screens.map((s, n) => (
              <Box
                key={s.name}
                aria-hidden={n !== idx}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: n === idx ? 1 : 0,
                  transform: n === idx ? 'translateX(0)' : 'translateX(16px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
              >
                <BigScreen s={s} />
              </Box>
            ))}
          </Box>
          {/* slide dots in the monitor chin */}
          <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 3, display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {screens.map((s, n) => (
              <Box
                key={s.name}
                onClick={() => setIdx(n)}
                sx={{ width: n === idx ? 14 : 6, height: 6, borderRadius: 99, cursor: 'pointer', bgcolor: n === idx ? '#F77F00' : 'rgba(255,255,255,0.4)', transition: 'all 0.35s ease' }}
              />
            ))}
          </Box>
        </Box>
        {/* stand */}
        <Box sx={{ position: 'absolute', zIndex: 1, left: 212, top: 262, width: 44, height: 40, background: 'linear-gradient(90deg, #AEBBCF, #D6DFEB, #AEBBCF)' }} />
        <Box sx={{ position: 'absolute', zIndex: 1, left: 165, top: 298, width: 138, height: 12, borderRadius: 99, background: 'linear-gradient(180deg, #DCE4EE, #A3B1C6)', boxShadow: '0 6px 12px rgba(0,0,0,0.3)' }} />

        {/* ---------- tablet (right, behind laptop): sports site ---------- */}
        <Box sx={{ ...device, zIndex: 1, left: 352, top: 92, width: 172, height: 130, p: '6px', borderRadius: '14px', animation: `${floatB} 7s ease-in-out infinite` }}>
          <Box sx={{ height: '100%', borderRadius: '9px', bgcolor: '#F4F8FC', overflow: 'hidden' }}>
            <Box sx={{ px: 1, py: '6px', background: 'linear-gradient(135deg, #14532D, #22A559)', color: 'white' }}>
              <Typography sx={{ fontWeight: 800, fontSize: 10.5, lineHeight: 1.1 }}>Cricksy</Typography>
              <Typography sx={{ fontSize: 7.5, opacity: 0.85 }}>Matches &amp; news</Typography>
            </Box>
            <Box sx={{ p: '6px', display: 'grid', gap: '4px' }}>
              {[0, 1, 2].map((i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '6px', bgcolor: 'white', border: '1px solid #DEE6F0', borderRadius: '6px', p: '4px' }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: ['#22A559', '#F77F00', '#00B4D8'][i] }} />
                  <Box sx={{ flex: 1 }}>
                    <Bar w="80%" h={3.5} />
                    <Box sx={{ mt: '3px' }}>
                      <Bar w="50%" h={3} c="#A9B8CC" />
                    </Box>
                  </Box>
                  <Bar w={14} h={6} c="#22A559" />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ---------- laptop (front right): wedding invitation site ---------- */}
        <Box sx={{ ...device, zIndex: 3, left: 300, top: 224, width: 212, height: 126, p: '6px', borderRadius: '12px 12px 4px 4px', animation: `${floatC} 5.5s ease-in-out infinite` }}>
          <Box sx={{ height: '100%', borderRadius: '7px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #FFFDF8 0%, #FBEBDD 100%)', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: -14, left: -14, width: 44, height: 44, borderRadius: '50%', bgcolor: '#F9C9D8', opacity: 0.7 }} />
            <Box sx={{ position: 'absolute', bottom: -14, right: -14, width: 44, height: 44, borderRadius: '50%', bgcolor: '#F9C9D8', opacity: 0.7 }} />
            <Box sx={{ position: 'relative', width: '66%', py: '7px', textAlign: 'center', borderRadius: '8px', border: '1px solid #D9B86C', bgcolor: 'rgba(255,255,255,0.7)' }}>
              <Typography sx={{ fontSize: 5.5, letterSpacing: 1.6, color: '#B08A3C', fontWeight: 700 }}>SAVE THE DATE</Typography>
              <Typography sx={{ fontFamily: script, fontSize: 19, lineHeight: 1.05, color: '#7A2E4D' }}>Anu &amp; Arjun</Typography>
              <Typography sx={{ fontSize: 5.5, color: '#6B5B4B' }}>are getting married</Typography>
              <Box sx={{ display: 'inline-block', mt: '4px', px: '7px', py: '1.5px', borderRadius: 99, bgcolor: '#7A2E4D', color: 'white', fontSize: 6, fontWeight: 700, letterSpacing: 0.8 }}>
                12 DEC 2026
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 3, left: 276, top: 350, width: 260, height: 12, borderRadius: '0 0 16px 16px', background: 'linear-gradient(180deg, #E2E9F2, #A9B8CD)', boxShadow: '0 8px 14px rgba(0,0,0,0.3)' }}>
          <Box sx={{ mx: 'auto', width: 50, height: 4, borderRadius: '0 0 6px 6px', bgcolor: 'rgba(0,0,0,0.18)' }} />
        </Box>

        {/* ---------- small phone (front left): shop ---------- */}
        <Box sx={{ ...device, zIndex: 4, left: 14, top: 296, width: 76, height: 126, p: '5px', borderRadius: '16px', animation: `${floatB} 6s ease-in-out infinite` }}>
          <Box sx={{ height: '100%', borderRadius: '11px', overflow: 'hidden' }}>
            <MiniScreen s={screens[1]} title="Daffodils-Inn" />
          </Box>
        </Box>

        {/* ---------- small tablet (front): booking ---------- */}
        <Box sx={{ ...device, zIndex: 4, left: 100, top: 306, width: 110, height: 118, p: '5px', borderRadius: '12px', animation: `${floatA} 6.5s ease-in-out infinite` }}>
          <Box sx={{ height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
            <MiniScreen s={screens[0]} title="Kayal Vista" />
          </Box>
        </Box>

        {/* ---------- price badge with spinning dashed ring ---------- */}
        <Box sx={{ position: 'absolute', top: -8, left: -14, width: 92, height: 92, zIndex: 6 }}>
          <Box sx={{ position: 'absolute', inset: -7, borderRadius: '50%', border: '2px dashed rgba(255,159,46,0.9)', animation: `${spin} 14s linear infinite` }} />
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFB347 0%, #F77F00 60%, #E06A00 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              animation: `${pulse} 2.4s ease-in-out infinite`,
            }}
          >
          <Typography sx={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.6, lineHeight: 1 }}>Get Online</Typography>
          <Typography sx={{ fontSize: 17, fontWeight: 800, lineHeight: 1.15 }}>Your Website now</Typography>  </Box>
        </Box>

        {/* ---------- floating chips ---------- */}
        <Chip
          icon={<SmartphoneOutlinedIcon sx={{ color: '#00B4D8 !important' }} />}
          label="Mobile Friendly"
          sx={{ position: 'absolute', zIndex: 6, top: 0, left: 330, bgcolor: 'white', color: '#0A192F', fontWeight: 700, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
        />
        <Chip
          icon={<SearchIcon sx={{ color: '#27C93F !important' }} />}
          label="SEO Ready"
          sx={{ position: 'absolute', zIndex: 6, top: 168, left: -8, bgcolor: 'white', color: '#0A192F', fontWeight: 700, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
        />
        <Chip
          icon={<SpeedIcon sx={{ color: '#F77F00 !important' }} />}
          label="Fast Loading"
          sx={{ position: 'absolute', zIndex: 6, top: 372, left: 214, bgcolor: 'white', color: '#0A192F', fontWeight: 700, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
        />
      </Box>
    </Box>
  );
}