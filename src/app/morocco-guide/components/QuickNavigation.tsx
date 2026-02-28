import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface QuickNavigationProps {
  onSectionClick: (sectionId: string) => void;
  activeSection: string;
}

const QuickNavigation = ({ onSectionClick, activeSection }: QuickNavigationProps) => {
  const navigationItems: NavigationItem[] = [
    {
      id: 'cities',
      name: 'Villes',
      icon: 'BuildingOffice2Icon',
      description: 'Guides des principales villes'
    },
    {
      id: 'legal',
      name: 'Juridique',
      icon: 'ScaleIcon',
      description: 'Procédures légales'
    },
    {
      id: 'lifestyle',
      name: 'Vie Pratique',
      icon: 'HomeIcon',
      description: 'Coût de la vie & logement'
    },
    {
      id: 'business',
      name: 'Business',
      icon: 'BriefcaseIcon',
      description: 'Investir & entreprendre'
    },
    {
      id: 'culture',
      name: 'Culture',
      icon: 'AcademicCapIcon',
      description: 'Intégration culturelle'
    },
    {
      id: 'tools',
      name: 'Outils',
      icon: 'CalculatorIcon',
      description: 'Calculateurs & ressources'
    }
  ];

  return (
    <section className="bg-white py-12 sticky top-16 z-40 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-morocco ${
                activeSection === item.id
                  ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-primary hover:text-primary'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-white' :'bg-muted group-hover:bg-primary/10'
                }`}>
                  <Icon 
                    name={item.icon as any} 
                    size={24} 
                    className={activeSection === item.id ? 'text-white' : 'group-hover:text-primary'}
                  />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-text-secondary mt-1">{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;