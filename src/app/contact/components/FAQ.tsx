'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  className?: string;
}

const FAQ = ({ className = '' }: FAQProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Combien coûte une consultation ?',
      answer: 'La première consultation est entièrement gratuite et sans engagement. Elle dure 30 à 45 minutes et nous permet d\'évaluer votre projet et de vous proposer un accompagnement personnalisé. Les consultations suivantes sont facturées selon le type de service demandé.',
      category: 'consultation'
    },
    {
      id: '2',
      question: 'Combien de temps faut-il pour obtenir un rendez-vous ?',
      answer: 'Nous nous engageons à vous proposer un créneau dans les 48 heures suivant votre demande. Pour les consultations urgentes, nous pouvons organiser un rendez-vous le jour même selon la disponibilité de nos conseillers.',
      category: 'consultation'
    },
    {
      id: '3',
      question: 'Proposez-vous des consultations en ligne ?',
      answer: 'Oui, nous proposons des consultations par visioconférence (Zoom, Google Meet, Teams) pour les clients qui ne peuvent pas se déplacer. Ces consultations sont aussi efficaces que les rendez-vous en présentiel et incluent le partage d\'écran pour examiner vos documents.',
      category: 'consultation'
    },
    {
      id: '4',
      question: 'Dans quelles langues proposez-vous vos services ?',
      answer: 'Nos services sont disponibles en français, arabe et anglais. Tous nos conseillers sont parfaitement bilingues français-arabe, et plusieurs membres de l\'équipe parlent couramment anglais pour accompagner notre clientèle internationale.',
      category: 'services'
    },
    {
      id: '5',
      question: 'Accompagnez-vous les projets dans toutes les villes du Maroc ?',
      answer: 'Oui, nous accompagnons les projets d\'installation dans tout le Maroc. Nous avons des bureaux à Casablanca, Rabat et Marrakech, et nos conseillers se déplacent régulièrement dans les autres villes (Tanger, Agadir, Fès, Oujda, etc.).',
      category: 'services'
    },
    {
      id: '6',
      question: 'Quels documents dois-je préparer pour la consultation ?',
      answer: 'Pour optimiser votre consultation, préparez : passeport, justificatifs de revenus des 3 derniers mois, relevés bancaires, CV, diplômes, et tout document lié à votre projet (business plan, promesse de vente, etc.). Une liste détaillée vous sera envoyée lors de la prise de rendez-vous.',
      category: 'preparation'
    },
    {
      id: '7',
      question: 'Proposez-vous un suivi après l\'installation ?',
      answer: 'Absolument ! Nous proposons un suivi post-installation pendant 12 mois inclus dans nos forfaits. Ce suivi comprend l\'aide aux démarches administratives complémentaires, la mise en relation avec nos partenaires locaux, et un support pour toute question pratique.',
      category: 'services'
    },
    {
      id: '8',
      question: 'Comment puis-je être sûr de la confidentialité de mes informations ?',
      answer: 'Nous respectons strictement la confidentialité de vos données. Tous nos conseillers sont tenus au secret professionnel, nos systèmes sont sécurisés (certification ISO 27001), et nous ne partageons jamais vos informations avec des tiers sans votre accord explicite.',
      category: 'confidentialite'
    }
  ];

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const categories = [
    { id: 'consultation', label: 'Consultation', icon: 'ChatBubbleLeftRightIcon' },
    { id: 'services', label: 'Services', icon: 'BriefcaseIcon' },
    { id: 'preparation', label: 'Préparation', icon: 'DocumentTextIcon' },
    { id: 'confidentialite', label: 'Confidentialité', icon: 'ShieldCheckIcon' }
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes sur nos services et processus.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-full border border-border"
            >
              <Icon name={category.icon as any} size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">{category.label}</span>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-text-primary pr-4">
                  {item.question}
                </h3>
                <Icon
                  name={openItems.includes(item.id) ? "ChevronUpIcon" : "ChevronDownIcon"}
                  size={20}
                  className="text-primary flex-shrink-0"
                />
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-border pt-4">
                    <p className="text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-surface rounded-xl p-8 border border-border">
            <Icon name="QuestionMarkCircleIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-text-secondary mb-6">
              Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-lg font-medium">
                Poser une question
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200">
                Demander un rappel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;