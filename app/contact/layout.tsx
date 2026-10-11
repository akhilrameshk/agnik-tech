import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us: Get a Free Quote',
  description:
    'Tell us about your website or app idea on WhatsApp or email and get a free quote from Agnik Tech Solutions in Alappuzha, Kerala.',
  path: '/contact',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}