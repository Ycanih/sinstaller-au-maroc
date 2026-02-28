import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'Checklist' | 'Template' | 'Video' | 'Audio';
  category: string;
  size: string;
  downloads: number;
  rating: number;
  icon: string;
  featured: boolean;
}

interface ResourceLibraryProps {
  className?: string;
}

const ResourceLibrary = ({ className = '' }: ResourceLibraryProps) => {
  const resources: Resource[] = [
    {
      id: 'visa-checklist',
      title: 'Checklist Visa & Résidence',
      description: 'Liste complète des documents et étapes pour votre demande de visa',
      type: 'Checklist',
      category: 'Juridique',
      size: '2 pages',
      downloads: 1247,
      rating: 4.8,
      icon: 'DocumentCheckIcon',
      featured: true
    },
    {
      id: 'business-guide',
      title: 'Guide Création d\'Entreprise',
      description: 'Manuel complet pour créer votre société au Maroc',
      type: 'PDF',
      category: 'Business',
      size: '24 pages',
      downloads: 892,
      rating: 4.9,
      icon: 'BuildingOfficeIcon',
      featured: true
    },
    {
      id: 'cost-calculator',
      title: 'Calculateur Budget Familial',
      description: 'Outil Excel pour estimer vos dépenses mensuelles',
      type: 'Template',
      category: 'Finances',
      size: '1.2 MB',
      downloads: 2156,
      rating: 4.7,
      icon: 'CalculatorIcon',
      featured: true
    },
    {
      id: 'housing-contract',
      title: 'Modèle Contrat de Location',
      description: 'Template de bail résidentiel conforme à la loi marocaine',
      type: 'Template',
      category: 'Immobilier',
      size: '4 pages',
      downloads: 743,
      rating: 4.6,
      icon: 'HomeIcon',
      featured: false
    },
    {
      id: 'cultural-video',
      title: 'Étiquette & Savoir-vivre',
      description: 'Vidéo explicative des codes culturels marocains',
      type: 'Video',
      category: 'Culture',
      size: '15 min',
      downloads: 1834,
      rating: 4.8,
      icon: 'PlayCircleIcon',
      featured: false
    },
    {
      id: 'language-audio',
      title: 'Phrases Essentielles Darija',
      description: 'Guide audio pour apprendre les expressions de base',
      type: 'Audio',
      category: 'Langue',
      size: '45 min',
      downloads: 1523,
      rating: 4.5,
      icon: 'SpeakerWaveIcon',
      featured: false
    },
    {
      id: 'tax-guide',
      title: 'Guide Fiscal Expatriés',
      description: 'Comprendre vos obligations fiscales au Maroc',
      type: 'PDF',
      category: 'Juridique',
      size: '18 pages',
      downloads: 567,
      rating: 4.7,
      icon: 'DocumentTextIcon',
      featured: false
    },
    {
      id: 'school-checklist',
      title: 'Checklist Inscription Scolaire',
      description: 'Étapes pour inscrire vos enfants dans les écoles marocaines',
      type: 'Checklist',
      category: 'Éducation',
      size: '3 pages',
      downloads: 934,
      rating: 4.6,
      icon: 'AcademicCapIcon',
      featured: false
    },
    {
      id: 'healthcare-guide',
      title: 'Guide Système de Santé',
      description: 'Comprendre l\'assurance maladie et les soins au Maroc',
      type: 'PDF',
      category: 'Santé',
      size: '12 pages',
      downloads: 678,
      rating: 4.4,
      icon: 'HeartIcon',
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return 'DocumentTextIcon';
      case 'Checklist': return 'DocumentCheckIcon';
      case 'Template': return 'DocumentDuplicateIcon';
      case 'Video': return 'PlayCircleIcon';
      case 'Audio': return 'SpeakerWaveIcon';
      default: return 'DocumentIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-700';
      case 'Checklist': return 'bg-green-100 text-green-700';
      case 'Template': return 'bg-blue-100 text-blue-700';
      case 'Video': return 'bg-purple-100 text-purple-700';
      case 'Audio': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const featuredResources = resources.filter(r => r.featured);
  const otherResources = resources.filter(r => !r.featured);

  return (
    <section id="tools" className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Bibliothèque de Ressources
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Téléchargez nos guides, checklists et outils pratiques pour faciliter votre installation au Maroc.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-poppins font-bold text-text-primary mb-6 flex items-center">
            <Icon name="StarIcon" size={24} className="text-yellow-500 mr-2" />
            Ressources Populaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-morocco transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={resource.icon as any} size={24} className="text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                </div>

                <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">{resource.title}</h4>
                <p className="text-text-secondary text-sm mb-4">{resource.description}</p>

                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <span>{resource.category}</span>
                  <span>{resource.size}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="StarIcon"
                        size={12}
                        className={i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-200'}
                      />
                    ))}
                    <span className="text-xs text-text-secondary ml-1">({resource.rating})</span>
                  </div>
                  <span className="text-xs text-text-secondary">{resource.downloads.toLocaleString()} téléchargements</span>
                </div>

                <button className="w-full btn-primary py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco">
                  <Icon name="ArrowDownTrayIcon" size={16} className="inline mr-2" />
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h3 className="text-2xl font-poppins font-bold text-text-primary mb-6 flex items-center">
            <Icon name="FolderIcon" size={24} className="text-primary mr-2" />
            Toutes les Ressources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherResources.map((resource) => (
              <div key={resource.id} className="bg-white border border-border rounded-xl p-6 hover:shadow-morocco transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name={getTypeIcon(resource.type) as any} size={20} className="text-text-secondary" />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                </div>

                <h4 className="font-poppins font-semibold text-text-primary mb-2">{resource.title}</h4>
                <p className="text-text-secondary text-sm mb-3">{resource.description}</p>

                <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                  <span>{resource.category}</span>
                  <span>{resource.size}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="StarIcon"
                        size={10}
                        className={i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-200'}
                      />
                    ))}
                    <span className="text-xs text-text-secondary ml-1">({resource.rating})</span>
                  </div>
                  <span className="text-xs text-text-secondary">{resource.downloads}</span>
                </div>

                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon name="ArrowDownTrayIcon" size={14} className="inline mr-2" />
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="EnvelopeIcon" size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-2xl font-poppins font-bold text-white mb-4">
              Recevez nos Nouvelles Ressources
            </h3>
            <p className="text-white/90 mb-6">
              Soyez informé en premier des nouveaux guides et outils ajoutés à notre bibliothèque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-colors duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;