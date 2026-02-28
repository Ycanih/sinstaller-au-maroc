import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-white/80 text-sm mb-6">
            <span>Accueil</span>
            <Icon name="ChevronRightIcon" size={16} />
            <span className="text-white font-medium">Contact</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
            Parlons de Votre
            <span className="block text-accent">Projet Marocain</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Notre équipe d'experts vous accompagne à chaque étape de votre installation au Maroc. 
            Consultation gratuite et personnalisée.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium">Consultation gratuite</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium">Réponse sous 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="UserGroupIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium">Experts locaux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;