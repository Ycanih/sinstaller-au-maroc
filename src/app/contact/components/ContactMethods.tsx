import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
  action: string;
  available: string;
  color: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      title: 'Appelez-nous',
      description: 'Parlez directement avec nos conseillers experts',
      icon: 'PhoneIcon',
      value: '+212 661 542 192',
      action: 'Appeler maintenant',
      available: 'Lun-Ven 9h-18h',
      color: 'bg-primary'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Chat instantané avec réponse immédiate',
      icon: 'ChatBubbleLeftRightIcon',
      value: '+212 661 542 192',
      action: 'Ouvrir WhatsApp',
      available: '24h/7j',
      color: 'bg-green-600'
    },
    {
      id: 'email',
      title: 'Email',
      description: 'Envoyez-nous vos questions détaillées',
      icon: 'EnvelopeIcon',
      value: 'hello@sinstalleraumaroc.ma',
      action: 'Envoyer un email',
      available: 'Réponse sous 24h',
      color: 'bg-secondary'
    },
    {
      id: 'video',
      title: 'Consultation Vidéo',
      description: 'Rendez-vous personnalisé en visioconférence',
      icon: 'VideoCameraIcon',
      value: 'Zoom / Google Meet',
      action: 'Réserver un créneau',
      available: 'Sur rendez-vous',
      color: 'bg-trust'
    }
  ];

  return (
    <section className={`py-16 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Contactez-nous Facilement
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez le moyen de communication qui vous convient le mieux. 
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-xl p-6 shadow-morocco hover:shadow-morocco-lg transition-all duration-300 transform hover:-translate-y-1 border border-border"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={method.icon as any} size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-poppins font-semibold text-text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {method.description}
              </p>

              {/* Contact Info */}
              <div className="mb-4">
                <p className="text-sm font-medium text-text-primary mb-1">
                  {method.value}
                </p>
                <p className="text-xs text-text-secondary">
                  {method.available}
                </p>
              </div>

              {/* Action Button */}
              <button className={`w-full ${method.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-morocco border border-border">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Icon name="ExclamationTriangleIcon" size={24} className="text-warning" />
            <div>
              <h3 className="text-lg font-poppins font-semibold text-text-primary">
                Urgence ou situation critique ?
              </h3>
              <p className="text-sm text-text-secondary">
                Contactez notre ligne d'urgence 24h/24 : 
                <span className="font-medium text-primary ml-1">+212 600 000 000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;