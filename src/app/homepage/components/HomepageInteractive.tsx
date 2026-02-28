'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ProfileCards from './ProfileCards';
import TestimonialCarousel from './TestimonialCarousel';
import ServicesOverview from './ServicesOverview';
import TrustBadges from './TrustBadges';
import NewsletterSignup from './NewsletterSignup';
import WhatsAppFloat from './WhatsAppFloat';

const HomepageInteractive = () => {
  return (
    <>
      <HeroSection />
      <ProfileCards />
      <ServicesOverview />
      <TestimonialCarousel />
      <TrustBadges />
      <NewsletterSignup />
      <WhatsAppFloat />
    </>
  );
};

export default HomepageInteractive;