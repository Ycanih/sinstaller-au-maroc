'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorData {
  city: string;
  familySize: number;
  lifestyle: 'economique' | 'moyen' | 'confortable';
  housing: 'studio' | 'appartement' | 'villa';
}

interface CostBreakdown {
  housing: number;
  food: number;
  transport: number;
  utilities: number;
  healthcare: number;
  education: number;
  entertainment: number;
  total: number;
}

const CostCalculator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    city: 'casablanca',
    familySize: 2,
    lifestyle: 'moyen',
    housing: 'appartement'
  });
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-morocco">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  const cities = [
    { value: 'casablanca', label: 'Casablanca' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'rabat', label: 'Rabat' },
    { value: 'tangier', label: 'Tanger' },
    { value: 'agadir', label: 'Agadir' },
    { value: 'fes', label: 'Fès' }
  ];

  const calculateCosts = (): CostBreakdown => {
    const baseMultipliers = {
      casablanca: 1.0,
      marrakech: 0.8,
      rabat: 0.85,
      tangier: 0.75,
      agadir: 0.7,
      fes: 0.6
    };

    const lifestyleMultipliers = {
      economique: 0.7,
      moyen: 1.0,
      confortable: 1.5
    };

    const housingCosts = {
      studio: 4000,
      appartement: 7000,
      villa: 12000
    };

    const cityMultiplier = baseMultipliers[calculatorData.city as keyof typeof baseMultipliers];
    const lifestyleMultiplier = lifestyleMultipliers[calculatorData.lifestyle];
    const familyMultiplier = Math.max(1, calculatorData.familySize * 0.6);

    const housing = housingCosts[calculatorData.housing] * cityMultiplier;
    const food = 2500 * familyMultiplier * lifestyleMultiplier * cityMultiplier;
    const transport = 800 * familyMultiplier * cityMultiplier;
    const utilities = 600 * lifestyleMultiplier * cityMultiplier;
    const healthcare = 400 * familyMultiplier * cityMultiplier;
    const education = calculatorData.familySize > 2 ? 1500 * (calculatorData.familySize - 2) * cityMultiplier : 0;
    const entertainment = 1000 * lifestyleMultiplier * cityMultiplier;

    const total = housing + food + transport + utilities + healthcare + education + entertainment;

    return {
      housing: Math.round(housing),
      food: Math.round(food),
      transport: Math.round(transport),
      utilities: Math.round(utilities),
      healthcare: Math.round(healthcare),
      education: Math.round(education),
      entertainment: Math.round(entertainment),
      total: Math.round(total)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const costs = showResults ? calculateCosts() : null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-morocco">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={20} className="text-primary" />
        </div>
        <h3 className="text-xl font-poppins font-bold text-text-primary">
          Calculateur de Coût de Vie
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Ville de résidence
          </label>
          <select
            value={calculatorData.city}
            onChange={(e) => setCalculatorData({ ...calculatorData, city: e.target.value })}
            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Taille de la famille
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={calculatorData.familySize}
            onChange={(e) => setCalculatorData({ ...calculatorData, familySize: parseInt(e.target.value) || 1 })}
            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Style de vie
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'economique', label: 'Économique' },
              { value: 'moyen', label: 'Moyen' },
              { value: 'confortable', label: 'Confortable' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCalculatorData({ ...calculatorData, lifestyle: option.value as any })}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                  calculatorData.lifestyle === option.value
                    ? 'border-primary bg-primary text-white' :'border-border hover:border-primary/30'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Type de logement
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'studio', label: 'Studio' },
              { value: 'appartement', label: 'Appartement' },
              { value: 'villa', label: 'Villa' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCalculatorData({ ...calculatorData, housing: option.value as any })}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                  calculatorData.housing === option.value
                    ? 'border-primary bg-primary text-white' :'border-border hover:border-primary/30'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full btn-primary py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco"
        >
          <Icon name="CalculatorIcon" size={16} className="inline mr-2" />
          Calculer le Coût
        </button>

        {showResults && costs && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-poppins font-semibold text-text-primary mb-4">
              Estimation mensuelle pour {cities.find(c => c.value === calculatorData.city)?.label}
            </h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Logement</span>
                <span className="font-medium">{costs.housing.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Alimentation</span>
                <span className="font-medium">{costs.food.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Transport</span>
                <span className="font-medium">{costs.transport.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Services publics</span>
                <span className="font-medium">{costs.utilities.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Santé</span>
                <span className="font-medium">{costs.healthcare.toLocaleString()} MAD</span>
              </div>
              {costs.education > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Éducation</span>
                  <span className="font-medium">{costs.education.toLocaleString()} MAD</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Loisirs</span>
                <span className="font-medium">{costs.entertainment.toLocaleString()} MAD</span>
              </div>
              
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-poppins font-semibold text-text-primary">Total mensuel</span>
                  <span className="font-poppins font-bold text-primary text-lg">
                    {costs.total.toLocaleString()} MAD
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">
                  ≈ {Math.round(costs.total / 10.5).toLocaleString()} EUR
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculator;