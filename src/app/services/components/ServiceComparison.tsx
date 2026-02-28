import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
  color: string;
}

interface ServiceComparisonProps {
  packages: ServicePackage[];
  onPackageSelect: (packageId: string) => void;
}

const ServiceComparison = ({ packages, onPackageSelect }: ServiceComparisonProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Choisissez Votre Formule
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Des solutions adaptées à chaque profil et budget pour votre installation au Maroc
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-morocco hover:-translate-y-1 ${
                pkg.popular 
                  ? 'border-primary shadow-morocco scale-105' 
                  : 'border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-morocco">
                    Le Plus Populaire
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${pkg.color}`}>
                    <Icon name="StarIcon" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {pkg.description}
                  </p>
                  <div className="space-y-1">
                    <div className="text-4xl font-poppins font-bold text-primary">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Durée: {pkg.duration}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => onPackageSelect(pkg.id)}
                  className={`w-full py-4 rounded-lg font-poppins font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'btn-primary shadow-morocco hover:shadow-morocco-lg transform hover:scale-105'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Choisir cette formule
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Besoin d'une solution sur mesure ?
          </p>
          <button className="btn-secondary px-8 py-3 rounded-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300">
            Demander un Devis Personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;