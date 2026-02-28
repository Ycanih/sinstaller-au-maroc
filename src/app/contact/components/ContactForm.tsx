'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consultationType: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
  newsletter: boolean;
  privacy: boolean;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consultationType: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const consultationTypes = [
    { value: 'phone', label: 'Consultation téléphonique (30 min)' },
    { value: 'video', label: 'Visioconférence (45 min)' },
    { value: 'office', label: 'Rendez-vous en bureau' },
    { value: 'home', label: 'Visite à domicile (Maroc uniquement)' }
  ];

  const projectTypes = [
    { value: 'business', label: 'Création d\'entreprise' },
    { value: 'investment', label: 'Investissement immobilier' },
    { value: 'retirement', label: 'Retraite au Maroc' },
    { value: 'family', label: 'Installation familiale' },
    { value: 'student', label: 'Études au Maroc' },
    { value: 'other', label: 'Autre projet' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immédiat (0-3 mois)' },
    { value: 'short', label: 'Court terme (3-6 mois)' },
    { value: 'medium', label: 'Moyen terme (6-12 mois)' },
    { value: 'long', label: 'Long terme (12+ mois)' },
    { value: 'exploring', label: 'En phase d\'exploration' }
  ];

  const budgets = [
    { value: 'under-50k', label: 'Moins de 50 000 €' },
    { value: '50k-100k', label: '50 000 - 100 000 €' },
    { value: '100k-250k', label: '100 000 - 250 000 €' },
    { value: '250k-500k', label: '250 000 - 500 000 €' },
    { value: 'over-500k', label: 'Plus de 500 000 €' },
    { value: 'not-specified', label: 'À définir' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        consultationType: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: '',
        newsletter: false,
        privacy: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Demandez Votre Consultation Gratuite
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Remplissez ce formulaire pour recevoir une consultation personnalisée adaptée à votre projet d'installation au Maroc.
          </p>
        </div>

        <div className="bg-surface rounded-2xl p-8 shadow-morocco">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label htmlFor="consultationType" className="block text-sm font-medium text-text-primary mb-2">
                Type de consultation souhaité *
              </label>
              <select
                id="consultationType"
                name="consultationType"
                value={formData.consultationType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              >
                <option value="">Sélectionnez un type de consultation</option>
                {consultationTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
                  Type de projet *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Sélectionnez votre projet</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-text-primary mb-2">
                  Échéancier *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Sélectionnez un délai</option>
                  {timelines.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                Budget estimé
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              >
                <option value="">Sélectionnez une fourchette</option>
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Décrivez votre projet
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                placeholder="Parlez-nous de votre projet, vos objectifs, vos préoccupations..."
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-text-secondary">
                  Je souhaite recevoir la newsletter avec les dernières actualités sur l'installation au Maroc
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
                <label htmlFor="privacy" className="text-sm text-text-secondary">
                  J'accepte la politique de confidentialité et le traitement de mes données personnelles *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 px-8 rounded-lg text-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="PaperAirplaneIcon" size={20} />
                    <span>Demander ma consultation gratuite</span>
                  </div>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-center space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success" />
                <div>
                  <h4 className="font-medium text-success">Demande envoyée avec succès !</h4>
                  <p className="text-sm text-success/80">Nous vous contacterons dans les 24 heures.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-error/10 border border-error/20 rounded-lg p-4 flex items-center space-x-3">
                <Icon name="ExclamationTriangleIcon" size={24} className="text-error" />
                <div>
                  <h4 className="font-medium text-error">Erreur lors de l'envoi</h4>
                  <p className="text-sm text-error/80">Veuillez réessayer ou nous contacter directement.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;