import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CulturalTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  tips: string[];
  importance: 'Essentiel' | 'Important' | 'Utile';
}

interface CulturalGuidesProps {
  className?: string;
}

const CulturalGuides = ({ className = '' }: CulturalGuidesProps) => {
  const culturalTopics: CulturalTopic[] = [
  {
    id: 'language',
    title: 'Langues & Communication',
    description: 'Maîtrisez les bases linguistiques pour une intégration réussie',
    icon: 'ChatBubbleLeftRightIcon',
    image: "https://images.unsplash.com/photo-1629141650344-db693cfd6d48",
    alt: 'Groupe de personnes diverses discutant en arabe et français dans un café marocain traditionnel',
    tips: [
    'L\'arabe dialectal marocain (darija) est la langue courante',
    'Le français est largement parlé dans les affaires',
    'L\'anglais gagne en popularité chez les jeunes',
    'Apprenez les salutations de base en arabe',
    'Respectez les formules de politesse traditionnelles'],

    importance: 'Essentiel'
  },
  {
    id: 'religion',
    title: 'Religion & Traditions',
    description: 'Comprenez les pratiques religieuses et les traditions locales',
    icon: 'BuildingLibraryIcon',
    image: "https://images.unsplash.com/photo-1697097088035-5301863baeeb",
    alt: 'Intérieur de mosquée marocaine avec architecture traditionnelle, tapis de prière et fidèles en méditation',
    tips: [
    'L\'Islam est la religion officielle du royaume',
    'Respectez les horaires de prière (5 fois par jour)',
    'Habillez-vous modestement près des lieux de culte',
    'Le vendredi est le jour de prière collective',
    'Ramadan implique des adaptations dans la vie quotidienne'],

    importance: 'Essentiel'
  },
  {
    id: 'business',
    title: 'Étiquette des Affaires',
    description: 'Adoptez les bonnes pratiques dans le monde professionnel marocain',
    icon: 'HandshakeIcon',
    image: "https://images.unsplash.com/photo-1714974528348-de4b304b5011",
    alt: 'Hommes d\'affaires marocains et européens se serrant la main dans un bureau moderne à Casablanca',
    tips: [
    'Les relations personnelles sont cruciales en affaires',
    'Prenez le temps des présentations et du thé',
    'La ponctualité est appréciée mais la flexibilité acceptée',
    'Négociez avec patience et respect',
    'Les cartes de visite se donnent avec les deux mains'],

    importance: 'Important'
  },
  {
    id: 'social',
    title: 'Vie Sociale & Hospitalité',
    description: 'Intégrez-vous dans la société marocaine avec aisance',
    icon: 'UserGroupIcon',
    image: "https://images.unsplash.com/photo-1544234674-d099c6efdb0d",
    alt: 'Famille marocaine accueillant des invités autour d\'un tajine traditionnel dans un salon décoré',
    tips: [
    'L\'hospitalité marocaine est légendaire',
    'Acceptez toujours le thé à la menthe offert',
    'Retirez vos chaussures en entrant chez quelqu\'un',
    'Les invitations à dîner sont fréquentes et importantes',
    'Apportez un petit cadeau lors des visites'],

    importance: 'Important'
  },
  {
    id: 'food',
    title: 'Gastronomie & Habitudes',
    description: 'Découvrez la richesse culinaire et les codes alimentaires',
    icon: 'CakeIcon',
    image: "https://images.unsplash.com/photo-1578771390628-7d1080b97348",
    alt: 'Table marocaine garnie de tajines colorés, couscous, pâtisseries et thé à la menthe dans des verres traditionnels',
    tips: [
    'Le couscous se mange traditionnellement le vendredi',
    'Mangez avec la main droite uniquement',
    'Le pain accompagne tous les repas',
    'Le thé à la menthe est un rituel social',
    'Respectez les règles alimentaires pendant le Ramadan'],

    importance: 'Utile'
  },
  {
    id: 'festivals',
    title: 'Fêtes & Célébrations',
    description: 'Participez aux événements culturels et festivités locales',
    icon: 'MusicalNoteIcon',
    image: "https://images.unsplash.com/photo-1730777502501-0c02dc8eaee9",
    alt: 'Festival de musique gnawa à Essaouira avec musiciens en tenues traditionnelles et public multiculturel',
    tips: [
    'L\'Aïd el-Fitr et l\'Aïd el-Adha sont les principales fêtes',
    'La Fête du Trône célèbre la monarchie (30 juillet)',
    'Nombreux festivals culturels toute l\'année',
    'Les mariages sont des événements communautaires',
    'Respectez les traditions lors des célébrations'],

    importance: 'Utile'
  }];


  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Essentiel':return 'text-red-600 bg-red-100';
      case 'Important':return 'text-yellow-600 bg-yellow-100';
      case 'Utile':return 'text-green-600 bg-green-100';
      default:return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="culture" className={`py-16 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Intégration Culturelle
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Découvrez les codes culturels marocains pour une intégration harmonieuse et respectueuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalTopics.map((topic) =>
          <div key={topic.id} className="bg-white rounded-2xl shadow-morocco hover:shadow-morocco-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={topic.image}
                alt={topic.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(topic.importance)}`}>
                    {topic.importance}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={topic.icon as any} size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-2">{topic.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">{topic.description}</p>

                <div className="space-y-2">
                  <h4 className="font-poppins font-semibold text-text-primary text-sm mb-3">
                    Points clés à retenir :
                  </h4>
                  <ul className="space-y-2">
                    {topic.tips.slice(0, 3).map((tip, index) =>
                  <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{tip}</span>
                      </li>
                  )}
                  </ul>
                  
                  {topic.tips.length > 3 &&
                <button className="text-primary text-sm font-medium hover:underline mt-2">
                      Voir tous les conseils ({topic.tips.length})
                    </button>
                }
                </div>

                <button className="w-full mt-6 btn-primary py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco">
                  <Icon name="BookOpenIcon" size={16} className="inline mr-2" />
                  Guide Détaillé
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-morocco">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="AcademicCapIcon" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Programme d'Intégration Culturelle
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Participez à notre programme d'accompagnement personnalisé pour une intégration réussie. 
              Cours de darija, ateliers culturels, et mentorat avec des expatriés expérimentés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco">
                <Icon name="UserPlusIcon" size={16} className="inline mr-2" />
                Rejoindre le Programme
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                <Icon name="CalendarIcon" size={16} className="inline mr-2" />
                Calendrier des Événements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CulturalGuides;