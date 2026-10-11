import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'Web Design & Development Services',
  description:
    'Website design, web app development, APIs, cloud and support from Agnik Tech Solutions. Mobile-friendly, SEO-ready and secure. Get a free quote.',
  path: '/services',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}