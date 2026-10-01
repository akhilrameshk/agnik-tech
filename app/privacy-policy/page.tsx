import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '../components/LegalPage';
import { pageMetadata } from '../seo';
import { COMPANY, CONTACT, LEGAL_UPDATED } from '../siteConfig';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${COMPANY.name} collects, uses and protects your personal information when you visit our website or contact us.`,
  path: '/privacy-policy',
});

const sections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      `${COMPANY.name} ("we", "us" or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit our website or contact us, how we use it, and the choices you have.`,
      'By using this website, you agree to the practices described in this policy.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      'We collect only the information needed to run our website and respond to you:',
      [
        'Information you provide: when you use our contact form, you may give us your name, email address, phone number, the service you are interested in and your message.',
        'WhatsApp details: when you message us on WhatsApp, we receive the content of your message together with your WhatsApp number and profile name, as shared by WhatsApp.',
        'Technical information: such as your browser type, device type, pages visited and approximate location based on your IP address. This may be collected by our hosting provider or by analytics tools, if we use them.',
        'Preferences: your light or dark theme choice, which is saved on your own device.',
      ],
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      'We use your information to:',
      [
        'Respond to your enquiries and prepare proposals or quotes.',
        'Provide, maintain and improve our website and services.',
        'Keep our website secure and prevent misuse.',
        'Meet legal and regulatory obligations.',
      ],
      'We do not sell your personal information.',
    ],
  },
  {
    id: 'whatsapp-and-third-parties',
    title: 'WhatsApp and Third-Party Services',
    content: [
      'Our contact form prepares a message that opens in WhatsApp, where you choose whether to send it. Once sent, your message is handled by WhatsApp (Meta) under its own terms and privacy policy, which we do not control.',
      'We may also use trusted service providers such as website hosting and analytics. They process information only to provide their services to us. Our website may link to other websites, and we are not responsible for their privacy practices.',
    ],
  },
  {
    id: 'cookies-and-storage',
    title: 'Cookies and Local Storage',
    content: [
      'We keep tracking to a minimum. Our website uses your browser\'s local storage to remember your theme preference. If we add analytics or other non-essential cookies in the future, we will update this policy and, where required, ask for your consent.',
      'You can clear stored data or block cookies at any time through your browser settings.',
    ],
  },
  {
    id: 'data-retention',
    title: 'How Long We Keep Your Information',
    content: [
      'We keep your information only for as long as needed for the purposes described above, for example while we discuss or deliver a project, or as required by law. After that, we delete or anonymise it.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      'We take reasonable technical and organisational steps to protect your information, such as secure connections (HTTPS) and limited access. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights and Choices',
    content: [
      'Depending on the laws that apply to you, you may have the right to:',
      [
        'Ask what personal information we hold about you.',
        'Ask us to correct or update inaccurate information.',
        'Ask us to delete your information.',
        'Withdraw consent you have given, or object to certain uses.',
      ],
      `To make a request, contact us at ${CONTACT.email}. We will respond as required by applicable law.`,
    ],
  },
  {
    id: 'childrens-privacy',
    title: 'Children\'s Privacy',
    content: [
      'Our website is not directed at children, and we do not knowingly collect personal information from them. If you believe a child has given us information, please contact us and we will delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top shows when it last changed. Continued use of the website after an update means you accept the revised policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or how we handle your information, please contact us:',
      [`Email: ${CONTACT.email}`, `Phone / WhatsApp: ${CONTACT.phone}`],
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your trust matters to us. Here is a clear explanation of what information we collect and how we look after it."
      updated={LEGAL_UPDATED}
      sections={sections}
      otherPage={{ label: 'Read our Terms & Conditions', href: '/terms-and-conditions' }}
    />
  );
}