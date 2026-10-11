import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us: Web Company building fast, secure websites for clients',
  description:
    'Agnik Tech Solutions is a web and software company in Alappuzha, Kerala, building fast, secure websites for clients in India and worldwide.',
  path: '/about',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}