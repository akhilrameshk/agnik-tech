import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Work & Portfolio | Agnik Tech Solutions',
  description: 'Explore live web projects built by Agnik Tech Solutions including Alleppey Mermaid Houseboats, Daffodils Inn Homestay, Event Management systems, and custom web apps.',
  keywords: ['Agnik Tech Portfolio', 'Web Development Projects Kerala', 'Houseboat Booking Website', 'Next.js Developer Alappuzha'],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}