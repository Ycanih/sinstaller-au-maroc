import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LegalGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: string[];
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Complexe';
  documents: string[];
}

interface LegalGuidesProps {
  className?: string;
}

const LegalGuides = ({ className = '' }: LegalGuidesProps) => {
  const legalGuides: LegalGuide[] = [
    {
      id: 'visa-residence',
      title: 'Visa & Carte de Résidence',
      description: 'Procédures complètes pour obtenir votre autorisation de séjour au Maroc',
      icon: 'IdentificationIcon',
      steps: [
        'Demande de visa long séjour au consulat',
        'Entrée au Maroc avec visa approprié',
        'Demande de carte de résidence dans les 15 jours',
        'Dépôt du dossier à la préfecture',
        'Retrait de la carte après validation'
      ],
      duration: '2-3 mois',
      difficulty: 'Moyen',
      documents: ['Passeport valide', 'Justificatifs financiers', 'Certificat médical', 'Casier judiciaire', 'Photos d\'identité']
    },
    {
      id: 'business-creation',
      title: 'Création d\'Entreprise',
      description: 'Guide complet pour créer votre société au Maroc (SARL, SA, Auto-entrepreneur)',
      icon: 'BuildingOfficeIcon',
      steps: [
        'Certificat négatif (nom de société)',
        'Rédaction des statuts',
        'Dépôt du capital social',
        'Enregistrement au registre de commerce',
        'Inscription à la CNSS et impôts'
      ],
      duration: '3-4 semaines',
      difficulty: 'Complexe',
      documents: ['Statuts de la société', 'Justificatif de siège social', 'Pièces d\'identité des associés', 'Attestation de dépôt de capital']
    },
    {
      id: 'property-purchase',
      title: 'Achat Immobilier',
      description: 'Procédures légales pour l\'acquisition de biens immobiliers par les étrangers',
      icon: 'HomeIcon',
      steps: [
        'Vérification des titres de propriété',
        'Signature du compromis de vente',
        'Obtention du certificat de propriété',
        'Signature de l\'acte authentique chez le notaire',
        'Enregistrement à la conservation foncière'
      ],
      duration: '1-2 mois',
      difficulty: 'Moyen',
      documents: ['Titre foncier', 'Certificat de propriété', 'Pièce d\'identité', 'Justificatifs de revenus']
    },
    {
      id: 'work-permit',
      title: 'Autorisation de Travail',
      description: 'Démarches pour obtenir l\'autorisation d\'exercer une activité salariée',
      icon: 'BriefcaseIcon',
      steps: [
        'Demande par l\'employeur marocain',
        'Dépôt du dossier au ministère du travail',
        'Examen de la demande',
        'Délivrance de l\'autorisation',
        'Renouvellement annuel'
      ],
      duration: '1-2 mois',
      difficulty: 'Moyen',
      documents: ['Contrat de travail', 'CV et diplômes', 'Certificat médical', 'Casier judiciaire']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'text-green-600 bg-green-100';
      case 'Moyen': return 'text-yellow-600 bg-yellow-100';
      case 'Complexe': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="legal" className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Guides Juridiques
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Toutes les procédures légales expliquées étape par étape pour faciliter votre installation au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {legalGuides.map((guide) => (
            <div key={guide.id} className="bg-white border border-border rounded-2xl p-6 hover:shadow-morocco transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={guide.icon as any} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-bold text-text-primary mb-2">{guide.title}</h3>
                  <p className="text-text-secondary">{guide.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="ClockIcon" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">Durée: {guide.duration}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="font-poppins font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="ListBulletIcon" size={16} className="mr-2 text-primary" />
                  Étapes principales
                </h4>
                <ol className="space-y-2">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-6">
                <h4 className="font-poppins font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="DocumentTextIcon" size={16} className="mr-2 text-primary" />
                  Documents requis
                </h4>
                <div className="flex flex-wrap gap-2">
                  {guide.documents.map((doc, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-lg"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full btn-primary py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco">
                <Icon name="ArrowDownTrayIcon" size={16} className="inline mr-2" />
                Télécharger le Guide PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalGuides;