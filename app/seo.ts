import type { Metadata, Viewport } from 'next';
import { CONTACT, COMPANY } from './siteConfig';

/* ------------------------------------------------------------------
   Central SEO settings. Edit the values here and every page updates.
   ------------------------------------------------------------------ */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://${COMPANY.website}`).replace(/\/$/, '');
export const SITE_NAME = 'Agnik Tech Solutions';
export const TAGLINE = 'Innovate. Create. Secure.';

export const HOME_TITLE = `${SITE_NAME} | Website Design & Software Development Company in Alappuzha`;
export const DEFAULT_DESCRIPTION =
  'Agnik Tech Solutions (അഗ്നി ടെക് സൊല്യൂഷൻസ്) builds fast, mobile-friendly websites, custom web apps, and software solutions for shops, hotels, clinics, and startups in Alappuzha, Kerala, and worldwide. Best software company near me.';

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
    // --- 1. Brand & Core Names (ആഗ്നി & വേരിയേഷൻസ്) ---
    'Agnik Tech Solutions',
    'Agnik Tech',
    'Agnik',
    'Agnik Solutions',
    'Agnik Tech Alappuzha',
    'Agnik Software',
    'അഗ്നി ടെക് സൊല്യൂഷൻസ്',
    'അഗ്നി ടെക്',

    // --- 2. Tech, Software & "Near Me" Searches (ടെക് & സോഫ്റ്റ്‌വെയർ) ---
    'Tech Solutions',
    'Tech Solutions Alappuzha',
    'Software Company',
    'Software Company Alappuzha',
    'Software Company Near Me',
    'IT Company Alappuzha',
    'IT Solutions Kerala',
    'Tech Company Kerala',
    'Custom Software Development',
    'Software Development Agency Alappuzha',
    'Best Software Firm Kerala',
    'Full Stack Development Agency',
    'Web Application Development Company',
    'Mobile Friendly Web Developer',
    'Next.js Developer Kerala',
    'React JS Developer Alappuzha',

    // --- 3. Web Design & Development (വെബ്സൈറ്റ് ഡെവലപ്മെന്റ്) ---
    'website design company',
    'website development company',
    'web design Alappuzha',
    'website developer Kerala',
    'website developer near me',
    'web design near me',
    'best web developer in Alappuzha',
    'business website Kerala',
    'ecommerce website developer',
    'hotel and resort website design',
    'clinic website design',
    'school website development Kerala',
    'affordable web design Alappuzha',
    'cheap website builder Alappuzha',
    'professional web designer Kerala',
    'startup website development',
    'landing page designer Alappuzha',
    'portfolio website developer',
    'dynamic website development Next.js',
    'CMS website development Alappuzha',

    // --- 4. Tourism & Houseboat Sector (ആലപ്പുഴ ടൂറിസം & ഹൗസ്‌ബോട്ട്) ---
    'houseboat booking website developer Alappuzha',
    'houseboat portal development Kerala',
    'backwater tourism web development',
    'resort website design Alappuzha',
    'shikara booking website Alappuzha',
    'tourism app development Kerala',
    'hotel booking system website',
    'travel agency website developer Alappuzha',
    'kerala tourism website designer',
    'kayal vista developer',

    // --- 5. Commercial, Shops & Business Apps (കൊമേഴ്‌സ്യൽ & ബിസിനസ്സ്) ---
    'billing software development Alappuzha',
    'pos software for shops Kerala',
    'inventory management software Alappuzha',
    'restaurant management system web app',
    'supermarket billing web application',
    'textile shop website design Alappuzha',
    'gold jewelry shop billing software',
    'bakery management website Kerala',
    'local business digital solutions Alappuzha',
    'online store developer Alappuzha',
    'shopify expert Kerala',
    'payment gateway integration service',
    'whatsapp api integration developer',

    // --- 6. Local SEO & Malayalam Search Intent (പ്രാദേശിക സെർച്ചുകൾ) ---
    'വെബ്സൈറ്റ് നിർമ്മാണം ആലപ്പുഴ',
    'സോഫ്റ്റ്‌വെയർ കമ്പനി ആലപ്പുഴ',
    'ആലപ്പുഴ വെബ് ഡെവലപ്പർ',
    'കേരളം സോഫ്റ്റ്‌വെയർ കമ്പനി',
    'ബിസിനസ്സ് വെബ്‌സൈറ്റ് ഉണ്ടാക്കാൻ',
    'ഓൺലൈൻ ഷോപ്പ് നിർമ്മിക്കാൻ ആലപ്പുഴ',
    'റസ്റ്റോറന്റ് വെബ്‌സൈറ്റ് കേരള',
    'ഹൗസ്‌ബോട്ട് ബുക്കിംഗ് സൈറ്റ് ഡെവലപ്പർ',
    'കമ്പ്യൂട്ടർ സോഫ്റ്റ്‌വെയർ കമ്പനി ആലപ്പുഴ',
    'വെബ് ഡിസൈനിങ് കോഴ്സ് / സർവ്വീസ് ആലപ്പുഴ',

    // --- 7. Nearby Locations & Regional Reach (ചുറ്റുമുള്ള സ്ഥലങ്ങൾ) ---
    'web developer Ambalapuzha',
    'website design Haripad',
    'software company Cherthala',
    'web developer Kuttanad',
    'website designer Chengannur',
    'software solutions Mavelikara',
    'IT company Thiruvalla',
    'web development Kochi Kerala',
    'software company Technopark Trivandrum',
    'freelance web developer Kerala',

    // --- 8. Specific Services & Maintenance (മെയിന്റനൻസ് & എസ്.ഇ.ഒ) ---
    'website redesign services Alappuzha',
    'SEO optimization agency Kerala',
    'Google Business Profile setup Alappuzha',
    'local SEO expert Kerala',
    'website speed optimization service',
    'secure hosting and domain setup',
    'SSL certificate configuration Kerala',
    'database management MongoDB developer',
    'API integration services India',
    'bug fixing and web maintenance Alappuzha'
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
      alternateName: ['Agnik', 'Agnik Tech', 'Agnik Tech Solutions Alappuzha', 'Tech Solutions Alappuzha'],
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