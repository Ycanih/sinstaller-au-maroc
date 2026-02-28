'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorOption {
  id: string;
  label: string;
  basePrice: number;
}

interface CostCalculatorProps {
  className?: string;
}

const CostCalculator = ({ className = '' }: CostCalculatorProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [familySize, setFamilySize] = useState<number>(2);
  const [urgency, setUrgency] = useState<string>('standard');
  const [showResults, setShowResults] = useState<boolean>(false);

  const services: CalculatorOption[] = [
    { id: 'visa', label: 'Obtention de visa', basePrice: 1500 },
    { id: 'housing', label: 'Recherche de logement', basePrice: 800 },
    { id: 'banking', label: 'Ouverture compte bancaire', basePrice: 300 },
    { id: 'education', label: 'Inscription scolaire', basePrice: 600 },
    { id: 'business', label: 'Création d\'entreprise', basePrice: 2500 },
    { id: 'legal', label: 'Assistance juridique', basePrice: 1200 },
    { id: 'relocation', label: 'Déménagement international', basePrice: 3000 },
    { id: 'integration', label: 'Programme d\'intégration', basePrice: 900 }
  ];

  const urgencyMultipliers = {
    standard: { label: 'Standard (3-6 mois)', multiplier: 1 },
    express: { label: 'Express (1-3 mois)', multiplier: 1.3 },
    urgent: { label: 'Urgent (< 1 mois)', multiplier: 1.6 }
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    const familyMultiplier = Math.max(1, familySize / 2);
    const urgencyMultiplier = urgencyMultipliers[urgency as keyof typeof urgencyMultipliers].multiplier;
    
    return Math.round(baseTotal * familyMultiplier * urgencyMultiplier);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section className={`py-16 bg-surface ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Calculateur de Coûts
          </h2>
          <p className="text-lg text-text-secondary">
            Estimez le coût de votre installation au Maroc en quelques clics
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-morocco border border-border p-8">
          <div className="space-y-8">
            {/* Services Selection */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-text-primary mb-4">
                Sélectionnez vos services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedServices.includes(service.id)
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedServices.includes(service.id)
                        ? 'border-primary bg-primary' :'border-border'
                    }`}>
                      {selectedServices.includes(service.id) && (
                        <Icon name="CheckIcon" size={12} className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-text-primary">{service.label}</div>
                      <div className="text-sm text-text-secondary">À partir de {service.basePrice}€</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Family Size */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-text-primary mb-4">
                Taille de la famille
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setFamilySize(Math.max(1, familySize - 1))}
                  className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon name="MinusIcon" size={16} />
                </button>
                <div className="text-2xl font-poppins font-bold text-text-primary min-w-[3rem] text-center">
                  {familySize}
                </div>
                <button
                  onClick={() => setFamilySize(familySize + 1)}
                  className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon name="PlusIcon" size={16} />
                </button>
                <span className="text-text-secondary ml-4">
                  {familySize === 1 ? 'personne' : 'personnes'}
                </span>
              </div>
            </div>
            
            {/* Urgency */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-text-primary mb-4">
                Délai souhaité
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(urgencyMultipliers).map(([key, option]) => (
                  <label
                    key={key}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                      urgency === key
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={key}
                      checked={urgency === key}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="sr-only"
                    />
                    <div className="font-medium text-text-primary">{option.label}</div>
                    <div className="text-sm text-text-secondary mt-1">
                      {option.multiplier > 1 && `+${Math.round((option.multiplier - 1) * 100)}%`}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Calculate Button */}
            <div className="text-center">
              <button
                onClick={handleCalculate}
                disabled={selectedServices.length === 0}
                className="btn-primary px-8 py-4 rounded-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Calculer le Coût Total
              </button>
            </div>
            
            {/* Results */}
            {showResults && selectedServices.length > 0 && (
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-center">
                  <h4 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                    Estimation Totale
                  </h4>
                  <div className="text-4xl font-poppins font-bold text-primary mb-4">
                    {calculateTotal().toLocaleString('fr-FR')}€
                  </div>
                  <p className="text-text-secondary mb-6">
                    Cette estimation inclut {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} 
                    pour {familySize} personne{familySize > 1 ? 's' : ''} 
                    avec un délai {urgencyMultipliers[urgency as keyof typeof urgencyMultipliers].label.toLowerCase()}
                  </p>
                  <button className="btn-secondary px-6 py-3 rounded-lg font-poppins font-semibold">
                    Demander un Devis Détaillé
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;