import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '../components/LegalPage';
import { pageMetadata } from '../seo';
import { COMPANY, CONTACT, LEGAL_UPDATED } from '../siteConfig';

export const metadata: Metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: `The terms that apply when you use the ${COMPANY.name} website and contact us about our services.`,
  path: '/terms-and-conditions',
});

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      `By accessing or using the ${COMPANY.name} website, you agree to these Terms & Conditions. If you do not agree, please do not use the website.`,
    ],
  },
  {
    id: 'our-services',
    title: 'About Our Services',
    content: [
      'This website provides information about our software and web engineering services. The details shown here are for general information and may change without notice.',
      'Any actual work we do for you is governed by a separate written proposal or agreement.',
    ],
  },
  {
    id: 'use-of-website',
    title: 'Use of the Website',
    content: [
      'You agree to use the website lawfully and responsibly. You must not:',
      [
        'Use the website for any unlawful, harmful or fraudulent purpose.',
        'Attempt to disrupt, damage or gain unauthorised access to the website or its systems.',
        'Copy, scrape or reuse our content at scale without our written permission.',
        'Pretend to be another person or organisation, or submit false information.',
      ],
    ],
  },
  {
    id: 'enquiries',
    title: 'Enquiries and Communications',
    content: [
      'Information you send us through the contact form or WhatsApp should be accurate and complete. Sending an enquiry does not create a contract or obligate either side to proceed.',
      'Messages sent through WhatsApp are also subject to WhatsApp\'s own terms and privacy policy.',
    ],
  },
  {
    id: 'project-engagements',
    title: 'Project Engagements',
    content: [
      'When we agree to work together, the scope, timeline, fees, ownership of deliverables, confidentiality and support terms will be set out in a written proposal or agreement. If that agreement conflicts with these Terms, the agreement takes priority for that project.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      `The content, design, logo and branding of this website belong to ${COMPANY.name} or its licensors and are protected by applicable intellectual property laws. You may not copy, modify or distribute them without our permission.`,
      'Ownership of work created for a client is governed by the agreement for that project.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links and Services',
    content: [
      'The website may link to or rely on third-party services such as WhatsApp. We do not control these services and are not responsible for their content, availability or practices.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: [
      'The website and its content are provided "as is" and "as available". We try to keep the information accurate and the site running smoothly, but we do not guarantee that it will always be error-free, secure or uninterrupted. Projects shown on the website are examples of our work and do not promise a particular result for your project.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: [
      `To the fullest extent permitted by law, ${COMPANY.name} will not be liable for any indirect, incidental or consequential loss arising from your use of the website or reliance on its content. Nothing in these Terms limits liability that cannot be limited by law.`,
    ],
  },
  {
    id: 'changes-and-access',
    title: 'Changes and Access',
    content: [
      'We may update these Terms or change, suspend or remove parts of the website at any time. The "Last updated" date shows the latest version. Continuing to use the website means you accept the updated Terms.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: [
      `These Terms are governed by the laws of ${COMPANY.jurisdiction}. Any dispute will be subject to the courts with jurisdiction in ${COMPANY.jurisdiction}, unless a project agreement says otherwise.`,
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have questions about these Terms, please contact us:',
      [`Email: ${CONTACT.email}`, `Phone / WhatsApp: ${CONTACT.phone}`],
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Simple, fair terms for using our website and getting in touch about our services."
      updated={LEGAL_UPDATED}
      sections={sections}
      otherPage={{ label: 'Read our Privacy Policy', href: '/privacy-policy' }}
    />
  );
}