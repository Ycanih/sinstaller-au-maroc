import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1558255703-f068cda9e21d"
          alt="Panoramic view of Marrakech medina with traditional red buildings and Atlas Mountains in background at sunset"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
            Guide Complet du
            <span className="block text-gradient-morocco bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Maroc
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
            Découvrez tout ce que vous devez savoir pour réussir votre installation au Maroc
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white">
              <Icon name="MapPinIcon" size={20} className="text-yellow-400" />
              <span className="font-medium">12 Villes Couvertes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2 text-white">
              <Icon name="DocumentTextIcon" size={20} className="text-yellow-400" />
              <span className="font-medium">50+ Guides Pratiques</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2 text-white">
              <Icon name="UserGroupIcon" size={20} className="text-yellow-400" />
              <span className="font-medium">Communauté Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white opacity-70" />
      </div>
    </section>);

};

export default HeroSection;