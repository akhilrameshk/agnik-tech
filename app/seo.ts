import type { Metadata, Viewport } from 'next';
import { CONTACT, COMPANY } from './siteConfig';

/* ------------------------------------------------------------------
   Central SEO settings. Edit the values here and every page updates.
   ------------------------------------------------------------------ */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://${COMPANY.website}`).replace(/\/$/, '');
export const SITE_NAME = 'Agnik Tech Solutions';
export const TAGLINE = 'Innovate. Create. Secure.';

export const HOME_TITLE = `${SITE_NAME} | Website Design & Development`;
export const DEFAULT_DESCRIPTION =
  'Agnik Tech Solutions builds fast, mobile-friendly websites and web apps for shops, hotels, clinics and startups in Kerala and worldwide. Free quote.';

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Agnik Tech Solutions - Innovate. Create. Secure.',
};

/* Used once, in the root layout */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Agnik Tech Solutions',
    'Agnik Tech',
    'Agnik',
    'website design company',
    'website development company',
    'web design Alappuzha',
    'website developer Kerala',
    'business website Kerala',
    'ecommerce website developer',
    'hotel and resort website design',
    'clinic website design',
    'software company in Alappuzha',
    'software development company Kerala',
    'custom web application development',
    'full-stack development agency',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_IN',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
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
  title: string;
  description: string;
  path: string;
}): Metadata {
  const pageUrl = `${SITE_URL}${path}`;
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
      url: pageUrl,
      locale: 'en_IN',
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

/* Structured data (JSON-LD) for Local SEO and brand authority */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ['Agnik', 'Agnik Tech', 'Agnik Tech Solutions Alappuzha'],
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/og-image.png`,
      slogan: TAGLINE,
      description: DEFAULT_DESCRIPTION,
      priceRange: '₹3,999+',
      areaServed: ['India', 'United Arab Emirates', 'Europe', 'United States'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Stadium Ward, Opposite Alleppey Gym',
        addressLocality: 'Alappuzha',
        addressRegion: 'Kerala',
        postalCode: '688001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '9.4981',
        longitude: '76.3388',
      },
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT.phone,
        email: CONTACT.email,
        contactType: 'customer support',
        areaServed: ['IN', 'AE', 'US', 'GB'],
        availableLanguage: ['English', 'Malayalam'],
      },
      sameAs: [
        'https://github.com/akhilrameshk',
        'https://portfolio.akhilrameshk.vercel.app/',
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