'use client';

import React, { useEffect, useState } from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ContactForm from './ContactForm';
import OfficeLocations from './OfficeLocations';
import FAQ from './FAQ';

const ContactInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="animate-pulse">
          <div className="bg-primary h-96"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)]?.map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <OfficeLocations />
      <FAQ />
    </main>
  );
};

export default ContactInteractive;