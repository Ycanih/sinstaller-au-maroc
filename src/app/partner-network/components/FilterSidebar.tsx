import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOptions {
  categories: string[];
  locations: string[];
  specializations: string[];
  ratings: number[];
}

interface ActiveFilters {
  category: string;
  location: string;
  specialization: string;
  minRating: number;
  verified: boolean;
}

interface FilterSidebarProps {
  filterOptions: FilterOptions;
  activeFilters: ActiveFilters;
  onFilterChange: (filterType: keyof ActiveFilters, value: any) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({
  filterOptions,
  activeFilters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose
}: FilterSidebarProps) => {
  const hasActiveFilters = Object.values(activeFilters).some(value => 
    value !== '' && value !== 0 && value !== false
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-white shadow-lg lg:shadow-none 
        border-r border-border z-50 lg:z-auto transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-poppins font-semibold text-text-primary">
              Filtres
            </h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={onClearFilters}
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Effacer tout
                </button>
              )}
              <button
                onClick={onClose}
                className="lg:hidden p-1 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-poppins font-medium text-text-primary mb-3">
              Catégorie
            </h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={activeFilters.category === ''}
                  onChange={(e) => onFilterChange('category', e.target.value)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">Toutes les catégories</span>
              </label>
              {filterOptions.categories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={activeFilters.category === category}
                    onChange={(e) => onFilterChange('category', e.target.value)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm text-text-secondary">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-poppins font-medium text-text-primary mb-3">
              Localisation
            </h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="location"
                  value=""
                  checked={activeFilters.location === ''}
                  onChange={(e) => onFilterChange('location', e.target.value)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">Toutes les villes</span>
              </label>
              {filterOptions.locations.map((location) => (
                <label key={location} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value={location}
                    checked={activeFilters.location === location}
                    onChange={(e) => onFilterChange('location', e.target.value)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm text-text-secondary">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Specialization Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-poppins font-medium text-text-primary mb-3">
              Spécialisation
            </h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="specialization"
                  value=""
                  checked={activeFilters.specialization === ''}
                  onChange={(e) => onFilterChange('specialization', e.target.value)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">Toutes les spécialisations</span>
              </label>
              {filterOptions.specializations.map((spec) => (
                <label key={spec} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="specialization"
                    value={spec}
                    checked={activeFilters.specialization === spec}
                    onChange={(e) => onFilterChange('specialization', e.target.value)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm text-text-secondary">{spec}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-poppins font-medium text-text-primary mb-3">
              Note minimale
            </h4>
            <div className="space-y-2">
              {filterOptions.ratings.map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={activeFilters.minRating === rating}
                    onChange={(e) => onFilterChange('minRating', Number(e.target.value))}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Icon
                        key={index}
                        name="StarIcon"
                        size={14}
                        variant={index < rating ? 'solid' : 'outline'}
                        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-text-secondary ml-1">& plus</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Verified Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.verified}
                onChange={(e) => onFilterChange('verified', e.target.checked)}
                className="w-4 h-4 text-primary border-border focus:ring-primary rounded"
              />
              <span className="text-sm text-text-secondary">Partenaires vérifiés uniquement</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;