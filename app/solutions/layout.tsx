import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'Business Website Solutions',
  description:
    'Custom websites and software for shops, hotels, clinics, schools and startups. See how Agnik Tech Solutions can bring your business online.',
  path: '/solutions',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}