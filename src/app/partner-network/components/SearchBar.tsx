import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onFilterToggle: () => void;
  resultsCount: number;
}

const SearchBar = ({ searchTerm, onSearchChange, onFilterToggle, resultsCount }: SearchBarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-morocco border border-border p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="MagnifyingGlassIcon" size={20} className="text-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un partenaire, service ou spécialisation..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <Icon name="XMarkIcon" size={16} className="text-text-secondary hover:text-text-primary transition-colors duration-200" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={onFilterToggle}
          className="lg:hidden flex items-center justify-center space-x-2 px-4 py-3 bg-muted text-text-primary rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          <Icon name="FunnelIcon" size={20} />
          <span className="font-medium">Filtres</span>
        </button>
      </div>

      {/* Results Count */}
      <div className="mt-3 pt-3 border-t border-border">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">{resultsCount}</span> partenaire{resultsCount !== 1 ? 's' : ''} trouvé{resultsCount !== 1 ? 's' : ''}
          {searchTerm && (
            <span> pour "{searchTerm}"</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;