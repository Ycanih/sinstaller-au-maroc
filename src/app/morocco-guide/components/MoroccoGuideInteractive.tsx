'use client';

import React, { useState, useEffect } from 'react';
import QuickNavigation from './QuickNavigation';
import CityGuides from './CityGuides';
import LegalGuides from './LegalGuides';
import CostCalculator from './CostCalculator';
import CulturalGuides from './CulturalGuides';
import ResourceLibrary from './ResourceLibrary';

const MoroccoGuideInteractive = () => {
  const [activeSection, setActiveSection] = useState('cities');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-muted">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 mb-8"></div>
          <div className="max-w-7xl mx-auto px-4 space-y-8">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <QuickNavigation 
        onSectionClick={handleSectionClick}
        activeSection={activeSection}
      />
      
      <div className="space-y-0">
        <CityGuides />
        
        <LegalGuides />
        
        <section id="lifestyle" className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
                Vie Pratique & Coût de la Vie
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Planifiez votre budget et découvrez le coût de la vie dans les principales villes du Maroc.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CostCalculator />
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-morocco">
                  <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">
                    Conseils Budget
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-text-secondary">Négociez toujours les prix dans les souks et marchés</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-text-secondary">Les transports en commun sont très économiques</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-text-secondary">Privilégiez les produits locaux pour l'alimentation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-text-secondary">Négociez les contrats de location sur le long terme</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-morocco">
                  <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">
                    Comparaison Européenne
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">vs. Paris</span>
                      <span className="font-semibold text-green-600">-60% moins cher</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">vs. Bruxelles</span>
                      <span className="font-semibold text-green-600">-55% moins cher</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">vs. Genève</span>
                      <span className="font-semibold text-green-600">-70% moins cher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="business" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
                Business & Investissement
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Découvrez les opportunités d'affaires et d'investissement au Maroc.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">
                  Secteurs Porteurs
                </h3>
                <ul className="space-y-2">
                  <li className="text-text-secondary">• Tourisme & Hôtellerie</li>
                  <li className="text-text-secondary">• Automobile & Aéronautique</li>
                  <li className="text-text-secondary">• Énergies Renouvelables</li>
                  <li className="text-text-secondary">• Technologies & Digital</li>
                  <li className="text-text-secondary">• Agriculture & Agroalimentaire</li>
                </ul>
              </div>
              
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">
                  Avantages Fiscaux
                </h3>
                <ul className="space-y-2">
                  <li className="text-text-secondary">• Zones franches disponibles</li>
                  <li className="text-text-secondary">• Exonérations pour nouveaux investisseurs</li>
                  <li className="text-text-secondary">• Conventions fiscales internationales</li>
                  <li className="text-text-secondary">• Régime auto-entrepreneur simplifié</li>
                </ul>
              </div>
              
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">
                  Financement
                </h3>
                <ul className="space-y-2">
                  <li className="text-text-secondary">• Banques locales et internationales</li>
                  <li className="text-text-secondary">• Fonds d'investissement</li>
                  <li className="text-text-secondary">• Aides gouvernementales</li>
                  <li className="text-text-secondary">• Partenariats public-privé</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <CulturalGuides />
        
        <ResourceLibrary />
      </div>
    </div>
  );
};

export default MoroccoGuideInteractive;