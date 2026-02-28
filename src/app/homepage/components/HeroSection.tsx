import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 hero-parallax">
        <AppImage
          src="https://images.unsplash.com/photo-1558255703-f068cda9e21d"
          alt="Panoramic view of Marrakech medina with traditional red buildings and Atlas Mountains in background at golden hour"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
            Votre rêve marocain,{' '}
            <span className="text-gradient-morocco bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              notre expertise locale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-inter leading-relaxed">
            L'installation au Maroc, simplifiée et sécurisée. Votre partenaire de confiance pour une nouvelle vie au Maroc.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">

              <Icon name="PhoneIcon" size={20} />
              <span>Consultation Gratuite</span>
            </Link>
            <Link
              href="/morocco-guide"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-poppins font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">

              <Icon name="DocumentTextIcon" size={20} />
              <span>Guide Gratuit</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-green-400" />
              <span className="text-sm font-inter">+500 familles accompagnées</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="StarIcon" size={20} className="text-yellow-400" />
              <span className="text-sm font-inter">98% de satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="text-blue-400" />
              <span className="text-sm font-inter">Depuis 2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/60" />
      </div>
    </section>);

};

export default HeroSection;