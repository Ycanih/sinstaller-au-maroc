import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="HandRaisedIcon" size={40} className="text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
              Prêt à Commencer Votre Nouvelle Vie au Maroc ?
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Notre équipe d'experts vous attend pour transformer votre rêve marocain en réalité. 
              Bénéficiez d'une consultation gratuite et personnalisée pour évaluer votre projet.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-poppins font-semibold text-lg shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Icon name="CalendarDaysIcon" size={24} />
              <span>Consultation Gratuite</span>
            </Link>
            
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-300 flex items-center space-x-3"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Découvrir Nos Services</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                Réponse Rapide
              </h3>
              <p className="text-white/80 text-sm">
                Première réponse sous 24h pour toute demande de consultation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                Équipe Dédiée
              </h3>
              <p className="text-white/80 text-sm">
                Un conseiller attitré pour vous accompagner tout au long du processus
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                Garantie Qualité
              </h3>
              <p className="text-white/80 text-sm">
                Satisfaction garantie avec nos certifications et agréments officiels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;