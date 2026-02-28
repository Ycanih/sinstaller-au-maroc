import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceHeroProps {
  className?: string;
}

const ServiceHero = ({ className = '' }: ServiceHeroProps) => {
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
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="SparklesIcon" size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">Services Experts</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-text-primary leading-tight">
                Votre Installation au Maroc,
                <span className="text-gradient-morocco block">Simplifiée & Sécurisée</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                De l'obtention de votre visa à l'installation complète de votre famille ou entreprise, 
                nos experts vous accompagnent à chaque étape de votre projet marocain.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 rounded-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="CalendarDaysIcon" size={20} />
                <span>Consultation Gratuite</span>
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="PlayIcon" size={20} />
                <span>Voir nos Réussites</span>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-primary">500+</div>
                <div className="text-sm text-text-secondary">Familles Installées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-primary">98%</div>
                <div className="text-sm text-text-secondary">Taux de Réussite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-primary">15</div>
                <div className="text-sm text-text-secondary">Années d'Expérience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <AppImage
                src="https://images.unsplash.com/photo-1712952822864-401fc9f46f54"
                alt="Vue panoramique de Casablanca avec ses gratte-ciels modernes et l'océan Atlantique en arrière-plan"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-morocco" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-morocco border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircleIcon" size={24} className="text-success" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-text-primary">Installation Réussie</div>
                  <div className="text-sm text-text-secondary">Famille Martin - Novembre 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ServiceHero;