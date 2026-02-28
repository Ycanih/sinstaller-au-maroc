import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact - S\'installer au Maroc',
  description: 'Contactez nos experts pour votre projet d\'installation au Maroc. Consultation gratuite, bureaux à Casablanca, Rabat et Marrakech. Réponse sous 24h garantie.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <ContactInteractive />
      </div>
    </>
  );
}