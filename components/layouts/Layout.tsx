import { ReactNode } from 'react';
import Header from '../ui/Header';
import { ContactSection } from '@/app/ContactSection';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ContactSection />
    </>
  );
}
