import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import Header from './components/Header'; // adjust the path if your Header lives elsewhere
import Footer from './components/Footer'; // adjust the path if your Footer lives elsewhere
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
    <html lang="en" className={poppins.variable}>
      <body>
        {/* Structured data so Google understands the business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
       </body>
    </html>
  );
}