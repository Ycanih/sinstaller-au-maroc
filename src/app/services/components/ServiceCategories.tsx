import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  popular: boolean;
  color: string;
}

interface ServiceCategoriesProps {
  categories: ServiceCategory[];
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string | null;
}

const ServiceCategories = ({ categories, onCategorySelect, selectedCategory }: ServiceCategoriesProps) => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Découvrez nos services spécialisés pour chaque étape de votre installation au Maroc
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-morocco hover:-translate-y-1 border-2 ${
                selectedCategory === category.id 
                  ? 'border-primary shadow-morocco' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {category.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Populaire
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                  <Icon name={category.icon as any} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {category.services.slice(0, 3).map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="CheckIcon" size={16} className="text-success flex-shrink-0" />
                    <span className="text-text-secondary">{service}</span>
                  </div>
                ))}
                {category.services.length > 3 && (
                  <div className="text-sm text-primary font-medium">
                    +{category.services.length - 3} autres services
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">À partir de</span>
                  <span className="text-lg font-poppins font-bold text-primary">Sur devis</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;