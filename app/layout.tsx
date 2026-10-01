import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import { rootMetadata, rootViewport, organizationJsonLd } from './seo';

/* SEO: title, description, share previews, robots, canonical (see app/seo.ts) */
export const metadata = rootMetadata;
export const viewport = rootViewport;

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning is needed because the theme script sets the light/dark class before React loads
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        {/* Applies the saved light/dark choice before first paint (no flash) */}
        <InitColorSchemeScript attribute="class" defaultMode="light" />

        {/* Structured data so Google understands the business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

           <ThemeProvider theme={theme} defaultMode="light">
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>

            {/* Floating menu: theme toggle, WhatsApp, contact, scroll up/down */}
            <FloatingMenu />
          </ThemeProvider>
      </body>
    </html>
  );
}
