import type { Metadata, Viewport } from 'next';
import { CONTACT, COMPANY } from './siteConfig';

/* ------------------------------------------------------------------
   Central SEO settings. Edit the values here and every page updates.
   ------------------------------------------------------------------ */

// Your live address. It can be overridden with NEXT_PUBLIC_SITE_URL in .env.local
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://${COMPANY.website}`).replace(/\/$/, '');
export const SITE_NAME = 'Agnik Tech Solutions';
export const TAGLINE = 'Innovate. Create. Secure.';

export const DEFAULT_DESCRIPTION =
  'Agnik Tech Solutions (Agnik) is a premier software development company in Alappuzha, Kerala, specializing in custom full-stack web apps, Next.js engineering, and scalable digital solutions.';
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
    default: `Agnik | ${SITE_NAME} - Next-Gen Software & Web Engineering`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    // Short Brand Keywords (Critical for ranking when searching 'Agnik')
    'Agnik',
    'Agnik Tech',
    'Agnik Software',
    'Agnik Tech Solutions',
    
    // Local Software Company Keywords
    'software company in Alappuzha',
    'software development company Kerala',
    'web development agency Kerala',
    
    // Primary High-Volume Commercial Keywords
    'software development company',
    'custom software development services',
    'full-stack development agency',
    
    // Tech Stack & Engineering Keywords
    'Next.js development company',
    'React JS development agency',
    'Node.js backend development',
    'full stack web application development',
    
    // Solution-Oriented Keywords
    'enterprise web application development',
    'modern UI UX web engineering'
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `Agnik | ${SITE_NAME} - Next-Gen Software & Web Engineering`,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    locale: 'en_US',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Agnik | ${SITE_NAME} - Next-Gen Software & Web Engineering`,
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
  // Google Search Console Verification Token Activated
  verification: {
    google: 'mqB979sv_k8_-NXfTwPx5qHCzzeNiY8s0xGJqNnngjM',
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: 'black-translucent',
  },
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

/* Structured data (JSON-LD) updated for Local SEO & Brand Authority */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareCompany',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ['Agnik', 'Agnik Tech'],
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      slogan: TAGLINE,
      description: DEFAULT_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Alappuzha',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: CONTACT.email,
        contactType: 'customer support',
      },
      sameAs: [
        'https://github.com/akhilrameshk',
        'https://portfolio.akhilrameshk.vercel.app/'
      ],
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