import type { Metadata, Viewport } from 'next';
import { CONTACT, COMPANY } from './siteConfig';

/* ------------------------------------------------------------------
   Central SEO settings. Edit the values here and every page updates.
   ------------------------------------------------------------------ */

// Your live address. It can be overridden with NEXT_PUBLIC_SITE_URL in .env.local
// (see COMPANY.website in siteConfig.ts)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://${COMPANY.website}`).replace(/\/$/, '');
export const SITE_NAME = 'Agnik Tech Solutions';
export const TAGLINE = 'Innovate. Create. Secure.';

export const DEFAULT_DESCRIPTION =
  'Agnik Tech Solutions designs and builds high-performance web applications and scalable full-stack software that is fast, secure and ready to grow. Innovate. Create. Secure.';

export const OG_IMAGE = {
  url: '/og-image.png', // file lives in /public/og-image.png
  width: 1200,
  height: 630,
  alt: 'Agnik Tech Solutions - Innovate. Create. Secure.',
};

/* Used once, in the root layout */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Next-Gen Software & Web Engineering`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'software development company',
    'web development',
    'custom web applications',
    'full-stack development',
    'Next.js development',
    'React development',
    'Node.js development',
    'API development',
    'cloud and DevOps',
    'Agnik Tech Solutions',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Next-Gen Software & Web Engineering`,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    locale: 'en_US',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Next-Gen Software & Web Engineering`,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: false },
  // Paste your code from Google Search Console here when you have it:
  // verification: { google: 'your-verification-code' },
};

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A192F',
};

/* Used by every inner page layout */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string; // the " | Agnik Tech Solutions" part is added automatically
  description: string;
  path: string; // e.g. '/services'
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      locale: 'en_US',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/* Structured data (JSON-LD) so Google understands who you are */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      slogan: TAGLINE,
      description: DEFAULT_DESCRIPTION,
      // TODO: add your social profiles below (email comes from siteConfig.ts)
      contactPoint: {
        '@type': 'ContactPoint',
        email: CONTACT.email,
        contactType: 'customer support',
      },
      // sameAs: ['https://www.linkedin.com/company/your-company', 'https://github.com/your-org'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
};