import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 lg:py-32 ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="UserGroupIcon" size={24} className="text-white" />
                </div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Notre Expertise
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-text-primary leading-tight">
                Le Pont Entre Vos{' '}
                <span className="text-gradient-morocco">Rêves</span>{' '}
                et la{' '}
                <span className="text-gradient-morocco">Réalité</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Nous incarnons la synthèse parfaite entre la sophistication française et la chaleur marocaine, 
                servant de pont culturel et administratif de confiance pour les expatriés francophones.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-text-secondary">Clients Accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-secondary">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-text-secondary">Taux de Réussite</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-morocco">
              <AppImage
                src="https://images.unsplash.com/photo-1635071247661-ede154087b09"
                alt="Modern office building in Casablanca with Moroccan architectural elements and glass facade"
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-morocco border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} className="text-success" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Certifié & Agréé</div>
                  <div className="text-sm text-text-secondary">Autorités Marocaines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;