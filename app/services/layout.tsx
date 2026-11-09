import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Web Design, Development & SEO Services | Agnik Tech Solutions',
  description: 'Professional website design, custom web app development, cloud infrastructure, and SEO services by Agnik Tech Solutions in Alappuzha, Kerala. Get a free quote.',
  keywords: ['Web Design Alappuzha', 'Next.js Development Kerala', 'Full Stack Agency', 'SEO Services Agnik Tech'],
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}