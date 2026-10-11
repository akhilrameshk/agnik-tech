import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our Work: Websites & Web Apps',
  description:
    'See websites and web apps built by Agnik Tech Solutions: a houseboat booking site, a cricket news hub, online shops and more.',
  path: '/portfolio',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}