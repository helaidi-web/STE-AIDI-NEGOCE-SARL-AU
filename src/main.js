import './style.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const companyInfo = {
  phone: '0673119112',
  email: 'aidinegocesarlau@gmail.com',
  city: 'Fès, Maroc',
  whatsapp: 'https://wa.me/212673119112',
  phoneHref: 'tel:+212673119112',
  location: 'https://maps.app.goo.gl/7Wg41p5Xe9QCySXL6?g_st=iw'
};

const translations = {
  fr: {
    quote: 'Demander un devis →', home: 'Accueil', about: 'À propos', activities: 'Nos activités', depot: 'Notre dépôt', partners: 'Nos partenaires', contact: 'Contact', city: 'Fès, Maroc', language: 'Langue',
    experience: "PLUS DE 20 ANS D'EXPÉRIENCE", heroText: "Votre partenaire de confiance dans le négoce, l'importation et l'exportation, les travaux divers, les solutions solaires et la commercialisation de farines, fécules, semoules et son.", discover: 'Découvrir nos activités →', reach: 'Nous contacter',
    years: "Années d'expérience", companies: 'Sociétés partenaires', area: 'Surface de dépôt', fields: "Domaines d'activité", activitiesKicker: 'NOS ACTIVITÉS', activitiesTitle: 'Des solutions complètes au service de vos besoins', activitiesText: "AIDI NEGOCE SARL AU intervient dans plusieurs secteurs d'activité afin d'accompagner ses clients et partenaires avec des solutions fiables, adaptées et durables. Notre expérience et notre savoir-faire nous permettent de répondre efficacement aux besoins du marché.",
    learn: 'En savoir plus →', navigation: 'Navigation', whatsapp: 'WhatsApp', email: 'Email', phone: 'Téléphone', legal: 'Mentions légales', privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.', approach: 'Notre approche', quoteNeed: "Besoin d'un devis ?", quoteText: 'Notre équipe est à votre écoute pour vous proposer une réponse adaptée à votre projet.', contactWhatsApp: 'Nous contacter sur WhatsApp', sendEmail: 'Envoyer un email', back: 'Retour aux activités', useful: 'Informations utiles', usefulText: 'Une solution claire, professionnelle et adaptée aux besoins de nos partenaires.', google: 'Rechercher sur Google →', serviceKicker: 'Nos activités',
    footerText: "Votre partenaire de confiance dans le négoce, l'importation, l'exportation et plusieurs secteurs d'activité.",
    services: {
      negoce: { title: 'Négoce', intro: "Le négoce constitue l’axe central de notre expertise : achat, vente et mise à disposition de marchandises adaptées aux besoins de nos partenaires professionnels.", description: 'Notre société accompagne les acteurs économiques dans la recherche de produits fiables, le suivi de la logistique et la mise en relation avec des solutions adaptées à chaque besoin.', bullets: ['Approvisionnement adapté aux exigences du marché.', 'Suivi commercial et logistique rigoureux.', 'Développement de relations de confiance à long terme.'] },
      farines: { title: 'Farines, fécules, semoules & son', intro: 'Nous commercialisons en gros et demi-gros des produits agroalimentaires destinés aux professionnels, avec un souci constant de qualité et de fiabilité.', description: 'Notre offre couvre les besoins liés aux farines, fécules, semoules et son, avec des solutions axées sur l’approvisionnement régulier et la performance logistique.', bullets: ['Produits agroalimentaires pour professionnels.', 'Disponibilités adaptées aux volumes demandés.', 'Service proactif et relationnel.'] },
      'panneaux-solaires': { title: 'Panneaux solaires', intro: 'Nous proposons des solutions photovoltaïques performantes afin de répondre aux besoins énergétiques de projets modernes, durables et responsables.', description: 'Nos offres solaires intègrent des équipements de qualité et une approche orientée vers les performances, la durabilité et la valeur ajoutée pour nos clients.', bullets: ['Solutions photovoltaïques adaptées au contexte.', 'Énergie plus propre et plus performante.', 'Approche durable pour les professionnels.'] },
      'import-export': { title: 'Importation & Exportation', intro: 'Notre activité d’importation et d’exportation facilite les échanges commerciaux et ouvre l’accès à de nouveaux marchés à l’international.', description: 'Nous accompagnons les échanges internationaux avec une logique de fiabilité, de suivi et de mise en relation entre partenaires, fournisseurs et marchés.', bullets: ['Développement commercial international.', 'Organisation des flux et des échanges.', 'Accès à de nouveaux marchés.'] },
      'travaux-divers': { title: 'Travaux divers', intro: 'Nous intervenons dans différents travaux et prestations selon les besoins de nos clients et partenaires, avec une logique pratique et orientée résultats.', description: 'Notre équipe accompagne les chantiers et les interventions variées avec une approche concrète, collaborative et soucieuse de la qualité d’exécution.', bullets: ['Interventions variées et adaptées au besoin.', 'Approche orientée résultat et organisation.', 'Accompagnement sur mesure.'] }
    }
  }
};

translations.en = {
  ...translations.fr,
  quote: 'Request a quote →', home: 'Home', about: 'About us', activities: 'Our activities', depot: 'Our warehouse', partners: 'Our partners', contact: 'Contact', city: 'Fez, Morocco', language: 'Language',
  experience: 'OVER 20 YEARS OF EXPERIENCE', heroText: 'Your trusted partner in trading, importing and exporting, diverse works, solar solutions, and the marketing of flours, starches, semolina and bran.', discover: 'Discover our activities →', reach: 'Contact us',
  years: 'Years of experience', companies: 'Partner companies', area: 'Depot area', fields: 'Business areas', activitiesKicker: 'OUR ACTIVITIES', activitiesTitle: 'Complete solutions for your needs', activitiesText: 'AIDI NEGOCE SARL AU operates in several sectors to support its clients and partners with reliable, tailored and sustainable solutions. Our experience and expertise enable us to respond effectively to market needs.',
  learn: 'Learn more →', navigation: 'Navigation', email: 'Email', phone: 'Phone', legal: 'Legal notice', privacy: 'Privacy policy', rights: 'All rights reserved.', approach: 'Our approach', quoteNeed: 'Need a quote?', quoteText: 'Our team is ready to offer a response tailored to your project.', contactWhatsApp: 'Contact us on WhatsApp', sendEmail: 'Send an email', back: 'Back to activities', useful: 'Useful information', usefulText: 'A clear, professional solution tailored to our partners’ needs.', google: 'Search on Google →', serviceKicker: 'Our activities',
  footerText: 'Your trusted partner in trading, importing, exporting and several business sectors.',
  services: Object.fromEntries(Object.entries(translations.fr.services).map(([key, value]) => [key, {
    title: { negoce: 'Trading', farines: 'Flours, starches, semolina & bran', 'panneaux-solaires': 'Solar panels', 'import-export': 'Import & Export', 'travaux-divers': 'General works' }[key],
    intro: { negoce: 'Trading is the core of our expertise: purchasing, selling and supplying goods tailored to the needs of our professional partners.', farines: 'We wholesale and semi-wholesale food products for professionals, with a constant focus on quality and reliability.', 'panneaux-solaires': 'We offer high-performance photovoltaic solutions for modern, sustainable and responsible projects.', 'import-export': 'Our import and export activity facilitates trade and opens access to new international markets.', 'travaux-divers': 'We carry out various works and services according to the needs of our clients and partners, with a practical, results-oriented approach.' }[key],
    description: { negoce: 'Our company supports economic operators in finding reliable products, tracking logistics and connecting them with solutions suited to each need.', farines: 'Our offer covers flours, starches, semolina and bran, with solutions focused on regular supply and logistics performance.', 'panneaux-solaires': 'Our solar offers include quality equipment and an approach focused on performance, sustainability and value for our clients.', 'import-export': 'We support international trade with reliability, tracking and connections between partners, suppliers and markets.', 'travaux-divers': 'Our team supports diverse sites and interventions with a practical, collaborative approach focused on quality execution.' }[key],
    bullets: { negoce: ['Supply adapted to market requirements.', 'Rigorous commercial and logistics monitoring.', 'Building long-term relationships of trust.'], farines: ['Food products for professionals.', 'Availability adapted to requested volumes.', 'Proactive, relationship-based service.'], 'panneaux-solaires': ['Photovoltaic solutions adapted to context.', 'Cleaner, more efficient energy.', 'A sustainable approach for professionals.'], 'import-export': ['International business development.', 'Organization of flows and exchanges.', 'Access to new markets.'], 'travaux-divers': ['Various interventions adapted to needs.', 'Results-oriented organization.', 'Tailored support.'] }[key]
  }]))
};

translations.ar = {
  ...translations.en, quote: 'اطلب عرضاً →', home: 'الرئيسية', about: 'من نحن', activities: 'أنشطتنا', depot: 'مستودعنا', partners: 'شركاؤنا', contact: 'اتصل بنا', city: 'فاس، المغرب', language: 'اللغة',
  experience: 'أكثر من 20 عاماً من الخبرة', heroText: 'شريككم الموثوق في التجارة والاستيراد والتصدير والأعمال المتنوعة والحلول الشمسية وتسويق الدقيق والنشا والسميد والنخالة.', discover: 'اكتشف أنشطتنا →', reach: 'تواصل معنا',
  years: 'سنوات الخبرة', companies: 'الشركات الشريكة', area: 'مساحة المستودع', fields: 'مجالات النشاط', activitiesKicker: 'أنشطتنا', activitiesTitle: 'حلول متكاملة لتلبية احتياجاتكم', activitiesText: 'تعمل شركة AIDI NEGOCE SARL AU في قطاعات متعددة لمساندة عملائها وشركائها بحلول موثوقة ومناسبة ومستدامة. تتيح لنا خبرتنا الاستجابة بفعالية لاحتياجات السوق.',
  learn: 'اعرف المزيد ←', navigation: 'التنقل', email: 'البريد الإلكتروني', phone: 'الهاتف', legal: 'إشعار قانوني', privacy: 'سياسة الخصوصية', rights: 'جميع الحقوق محفوظة.', approach: 'نهجنا', quoteNeed: 'هل تحتاجون إلى عرض؟', quoteText: 'فريقنا رهن إشارتكم لتقديم إجابة مناسبة لمشروعكم.', contactWhatsApp: 'تواصل معنا عبر واتساب', sendEmail: 'إرسال بريد إلكتروني', back: 'العودة إلى الأنشطة', useful: 'معلومات مفيدة', usefulText: 'حل واضح واحترافي ومناسب لاحتياجات شركائنا.', google: 'البحث على Google ←', serviceKicker: 'أنشطتنا', footerText: 'شريككم الموثوق في التجارة والاستيراد والتصدير ومجالات متعددة.',
  services: {
    negoce: { title: 'التجارة', intro: 'التجارة هي محور خبرتنا: شراء وبيع وتوفير البضائع بما يلائم احتياجات شركائنا المهنيين.', description: 'نرافق الفاعلين الاقتصاديين في البحث عن منتجات موثوقة وتتبع الخدمات اللوجستية وتوفير الحلول المناسبة لكل حاجة.', bullets: ['تموين ملائم لمتطلبات السوق.', 'تتبع تجاري ولوجستي دقيق.', 'بناء علاقات ثقة طويلة الأمد.'] },
    farines: { title: 'الدقيق والنشا والسميد والنخالة', intro: 'نسوق بالجملة ونصف الجملة منتجات غذائية للمهنيين، مع حرص دائم على الجودة والموثوقية.', description: 'يغطي عرضنا احتياجات الدقيق والنشا والسميد والنخالة، مع حلول تركز على التموين المنتظم والأداء اللوجستي.', bullets: ['منتجات غذائية للمهنيين.', 'توافر يلائم الكميات المطلوبة.', 'خدمة استباقية وعلاقة مهنية.'] },
    'panneaux-solaires': { title: 'الألواح الشمسية', intro: 'نقدم حلولاً كهروضوئية عالية الأداء لتلبية احتياجات المشاريع الحديثة والمستدامة والمسؤولة.', description: 'تجمع عروضنا الشمسية بين معدات عالية الجودة ونهج يركز على الأداء والاستدامة والقيمة المضافة لعملائنا.', bullets: ['حلول كهروضوئية ملائمة للسياق.', 'طاقة أنظف وأكثر كفاءة.', 'نهج مستدام للمهنيين.'] },
    'import-export': { title: 'الاستيراد والتصدير', intro: 'يسهل نشاطنا في الاستيراد والتصدير المبادلات التجارية ويفتح الوصول إلى أسواق دولية جديدة.', description: 'نرافق المبادلات الدولية بمنهج موثوق مع التتبع والربط بين الشركاء والموردين والأسواق.', bullets: ['تطوير تجاري دولي.', 'تنظيم التدفقات والمبادلات.', 'الوصول إلى أسواق جديدة.'] },
    'travaux-divers': { title: 'أعمال متنوعة', intro: 'نتدخل في مختلف الأعمال والخدمات وفق احتياجات عملائنا وشركائنا، بمنهج عملي يركز على النتائج.', description: 'يرافق فريقنا الأوراش والتدخلات المتنوعة بنهج عملي وتعاوني يحرص على جودة التنفيذ.', bullets: ['تدخلات متنوعة حسب الحاجة.', 'تنظيم يركز على النتائج.', 'مواكبة حسب الطلب.'] }
  }
};

let currentLanguage = localStorage.getItem('aidi-language') || 'fr';
const tr = (key) => key.split('.').reduce((value, part) => value && value[part], translations[currentLanguage]) || key;
const aboutCopy = {
  fr: {
    eyebrow: 'À PROPOS DE NOUS', title: 'Une expérience construite', titleAccent: 'sur plus de 20 ans',
    intro: 'AIDI NÉGOCE SARL AU s’appuie sur une solide expérience dans plusieurs secteurs d’activité et développe depuis plus de 20 ans des relations professionnelles durables.',
    historyLabel: 'NOTRE HISTOIRE', historyTitle: 'Plus de 20 ans d’expérience au service de nos partenaires',
    historyOne: 'AIDI NÉGOCE SARL AU s’appuie sur plus de 20 années d’expérience dans différents secteurs d’activité, notamment le négoce, les travaux divers, les solutions solaires, l’importation et l’exportation ainsi que la commercialisation de produits agroalimentaires.',
    historyTwo: 'Au fil des années, notre société a développé une connaissance approfondie de son environnement professionnel et a construit des relations durables avec ses partenaires.',
    knowLabel: 'NOTRE SAVOIR-FAIRE', knowTitle: 'Des compétences diversifiées au service de nos activités',
    depotLabel: 'NOTRE DÉPÔT', depotTitle: 'Un espace dédié au stockage et à l’organisation',
    depotText: 'Notre dépôt de 100 m² constitue un espace dédié au stockage et à l’organisation de nos marchandises. Il accompagne notre activité commerciale et nous permet de mieux répondre aux besoins de nos partenaires.',
    valuesLabel: 'NOS VALEURS', valuesTitle: 'Les principes qui accompagnent notre activité', ctaLabel: 'CONTACTEZ-NOUS',
    ctaTitle: 'Construisons ensemble de nouvelles opportunités', ctaText: 'Vous souhaitez en savoir plus sur notre société, nos activités ou nos services ? Notre équipe reste à votre disposition.',
    activities: [['Négoce','Achat, vente et approvisionnement de différentes marchandises pour les professionnels.'],['Agroalimentaire','Farines, fécules, semoules et son en gros et demi-gros de qualité.'],['Énergie solaire','Solutions et équipements liés au photovoltaïque pour un avenir plus durable.'],['Commerce international','Importation et exportation de différentes marchandises à l’international.']],
    values: [['Confiance','Des relations professionnelles construites dans la durée.'],['Qualité','Une attention portée aux produits et aux services proposés.'],['Engagement','Une volonté constante de répondre aux besoins de nos partenaires.'],['Durabilité','Une vision orientée vers des relations et activités durables.']],
    features: ['Stockage organisé','Gestion des marchandises','Disponibilité et réactivité']
  },
  en: {
    eyebrow: 'ABOUT US', title: 'An experience built', titleAccent: 'over 20 years',
    intro: 'AIDI NÉGOCE SARL AU draws on solid experience across several sectors and has built lasting professional relationships for more than 20 years.',
    historyLabel: 'OUR HISTORY', historyTitle: 'Over 20 years of experience serving our partners',
    historyOne: 'AIDI NÉGOCE SARL AU has more than 20 years of experience in trading, diverse works, solar solutions, import and export, and the marketing of food products.',
    historyTwo: 'Over the years, our company has developed deep knowledge of its professional environment and built lasting relationships with its partners.',
    knowLabel: 'OUR EXPERTISE', knowTitle: 'Diverse skills supporting our activities', depotLabel: 'OUR WAREHOUSE', depotTitle: 'A space dedicated to storage and organisation',
    depotText: 'Our 100 m² warehouse is dedicated to storing and organising our goods. It supports our commercial activity and helps us respond more effectively to our partners’ needs.',
    valuesLabel: 'OUR VALUES', valuesTitle: 'The principles behind our activity', ctaLabel: 'CONTACT US', ctaTitle: 'Let’s build new opportunities together', ctaText: 'Would you like to learn more about our company, activities or services? Our team is at your disposal.',
    activities: [['Trading','Purchasing, selling and supplying goods for professionals.'],['Food products','Quality flours, starches, semolina and bran, wholesale and semi-wholesale.'],['Solar energy','Photovoltaic solutions and equipment for a more sustainable future.'],['International trade','Import and export of various goods internationally.']],
    values: [['Trust','Professional relationships built to last.'],['Quality','Careful attention to our products and services.'],['Commitment','A constant drive to meet our partners’ needs.'],['Sustainability','A vision focused on lasting relationships and activities.']], features: ['Organised storage','Goods management','Availability and responsiveness']
  }
};
const aboutText = (key) => (aboutCopy[currentLanguage] || aboutCopy.fr)[key];
function setLanguage(language) {
  if (!translations[language] || language === currentLanguage) return;
  currentLanguage = language;
  localStorage.setItem('aidi-language', language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.add('language-transition');
  renderApp();
  window.setTimeout(() => document.body.classList.remove('language-transition'), 350);
}

const serviceMeta = {
  negoce: {
    title: 'Négoce',
    hero: '/negoce.jpg',
    intro: 'Le négoce constitue l’axe central de notre expertise : achat, vente et mise à disposition de marchandises adaptées aux besoins de nos partenaires professionnels.',
    description: 'Notre société accompagne les acteurs économiques dans la recherche de produits fiables, le suivi de la logistique et la mise en relation avec des solutions adaptées à chaque besoin.',
    bullets: ['Approvisionnement adapté aux exigences du marché.', 'Suivi commercial et logistique rigoureux.', 'Développement de relations de confiance à long terme.'],
    imageAlt: 'Négoce',
    google: 'https://www.google.com/search?q=' + encodeURIComponent('négoce définition activité commerciale')
  },
  farines: {
    title: 'Farines, fécules, semoules & son',
    hero: '/farines.jpg',
    intro: 'Nous commercialisons en gros et demi-gros des produits agroalimentaires destinés aux professionnels, avec un souci constant de qualité et de fiabilité.',
    description: 'Notre offre couvre les besoins liés aux farines, fécules, semoules et son, avec des solutions axées sur l’approvisionnement régulier et la performance logistique.',
    bullets: ['Produits agroalimentaires pour professionnels.', 'Disponibilités adaptées aux volumes demandés.', 'Service proactif et relationnel.'],
    imageAlt: 'Farines',
    google: 'https://www.google.com/search?q=' + encodeURIComponent('farine fécule semoule son définition')
  },
  'panneaux-solaires': {
    title: 'Panneaux solaires',
    hero: '/solaire.jpg',
    intro: 'Nous proposons des solutions photovoltaïques performantes afin de répondre aux besoins énergétiques de projets modernes, durables et responsables.',
    description: 'Nos offres solaires intègrent des équipements de qualité et une approche orientée vers les performances, la durabilité et la valeur ajoutée pour nos clients.',
    bullets: ['Solutions photovoltaïques adaptées au contexte.', 'Énergie plus propre et plus performante.', 'Approche durable pour les professionnels.'],
    imageAlt: 'Panneaux solaires',
    google: 'https://www.google.com/search?q=' + encodeURIComponent('panneaux solaires photovoltaïques fonctionnement')
  },
  'import-export': {
    title: 'Importation & Exportation',
    hero: '/import-export.jpg',
    intro: 'Notre activité d’importation et d’exportation facilite les échanges commerciaux et ouvre l’accès à de nouveaux marchés à l’international.',
    description: 'Nous accompagnons les échanges internationaux avec une logique de fiabilité, de suivi et de mise en relation entre partenaires, fournisseurs et marchés.',
    bullets: ['Développement commercial international.', 'Organisation des flux et des échanges.', 'Accès à de nouveaux marchés.'],
    imageAlt: 'Importation et exportation',
    google: 'https://www.google.com/search?q=' + encodeURIComponent('importation exportation définition commerce international')
  },
  'travaux-divers': {
    title: 'Travaux divers',
    hero: '/travaux.jpg',
    intro: 'Nous intervenons dans différents travaux et prestations selon les besoins de nos clients et partenaires, avec une logique pratique et orientée résultats.',
    description: 'Notre équipe accompagne les chantiers et les interventions variées avec une approche concrète, collaborative et soucieuse de la qualité d’exécution.',
    bullets: ['Interventions variées et adaptées au besoin.', 'Approche orientée résultat et organisation.', 'Accompagnement sur mesure.'],
    imageAlt: 'Travaux divers',
    google: 'https://www.google.com/search?q=' + encodeURIComponent('travaux divers bâtiment définition')
  }
};

const activityCards = [
  { slug: 'farines', title: 'Farines, fécules,<br>semoules & son', image: '/farines.jpg', label: 'Farines', icon: '<path d="M12 3v18M8 7c2-1 4 0 4 2M16 7c-2-1-4 0-4 2M8 12c2-1 4 0 4 2M16 12c-2-1-4 0-4 2M8 17c2-1 4 0 4 2M16 17c-2-1-4 0-4 2"/>' , text: 'Commercialisation en gros et demi-gros de produits agroalimentaires de qualité.' },
  { slug: 'negoce', title: 'Négoce', image: '/negoce.jpg', label: 'Négoce', icon: '<path d="M4 12h5l2-2h3l2 2h4M4 12v5h16v-5M8 12l-2-2 2-3 4 2 4-2 2 3-2 2M9 17v2M15 17v2"/>' , text: 'Achat, vente et mise à disposition de marchandises pour les professionnels.' },
  { slug: 'panneaux-solaires', title: 'Panneaux solaires', image: '/solaire.jpg', label: 'Panneaux solaires', icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>' , text: 'Solutions et équipements photovoltaïques pour un avenir plus durable.' },
  { slug: 'import-export', title: 'Importation<br>& Exportation', image: '/import-export.jpg', label: 'Importation & Exportation', icon: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2 2 3 5 3 8s-1 6-3 8M12 4c-2 2-3 5-3 8s1 6 3 8"/>' , text: 'Facilitation des échanges commerciaux et accès à de nouveaux marchés.' },
  { slug: 'travaux-divers', title: 'Travaux divers', image: '/travaux.jpg', label: 'Travaux divers', icon: '<path d="m14 6 4 4M5 19l7-7M13 5l2-2 6 6-2 2M4 20l3-1 1-3M14 14l-4-4"/>' , text: 'Intervention dans différents travaux et prestations selon les besoins.' }
];

const statIcons = [
  '<path d="M12 3v18M8 7c2-1 4 0 4 2M16 7c-2-1-4 0-4 2M8 12c2-1 4 0 4 2M16 12c-2-1-4 0-4 2"/>',
  '<circle cx="9" cy="10" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 19c0-3 2-5 6-5s6 2 6 5M14 14c4-.5 6 1.5 6 5"/>',
  '<path d="M4 5h16v14H4zM7 8h10M7 12h10M7 16h5"/>',
  '<path d="M4 12h16M12 4v16M5 5l14 14M19 5 5 19"/>'
];

function commonHeader(activeRoute = 'home') {
  return `
    <div class="top-contact-bar">
      <div class="container contact-inner">
        <div class="contact-quick-links">
          <span><span class="icon">☎</span> ${companyInfo.phone}</span>
          <span><span class="icon">✉</span> ${companyInfo.email}</span>
          <span><span class="icon">📍</span> ${tr('city')}</span>
        </div>
        <div class="top-actions">
          <a class="social-link" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.1 11.1 0 0 0 3.2 17.7L2 22l4.5-1.2A11.1 11.1 0 1 0 20.5 3.5Zm-6 4.1c.3 0 .7.1 1 .4.2.2 1.1 1 1.1 2.6 0 1.6-.9 2.2-1.5 2.5-.3.1-.8.2-1.3.1-.4-.1-1.5-.5-2.7-1.8-1-1-1.7-2.4-1.9-2.8-.2-.4-.2-1 .1-1.3l.3-.3c.1-.1.2-.2.4-.2h.3c.1 0 .2 0 .3.2l.4.9c.1.2.2.3.1.4l-.2.4c-.1.1-.1.2-.1.3l.3.4c.2.3.5.7.8 1l.1.1c.1.1.2.1.3 0l.4-.5c.1-.1.2-.1.3-.1h.5c.1 0 .2 0 .3.1.1.1.2.2.3.3.1.2.3.7.2.9-.2.2-.3.3-.4.4-.3.3-.7.6-1.1.9-.1.1-.2.2-.1.4.1.2.5.8.7 1.1.2.3.4.5.8.6.3.1.8.1 1.2.1.4-.1.8-.3 1.3-.6.4-.3 1-.9 1.2-1.5.1-.3.2-.5.1-.7l-.3-.4c-.2-.1-.2-.2-.4-.2h-.9c-.1 0-.2 0-.3.1l-.1.2c-.1.2-.4.4-.6.4h-.2c-.2 0-.4-.1-.6-.2l-.5-.4c-.4-.3-.8-.7-1-1.1-.2-.2-.4-.5-.5-.8-.1-.2-.1-.4 0-.6l.2-.3c.1-.1.2-.2.4-.2z"/></svg>
          </a>
          <a class="quote-link" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">${tr('quote')}</a>
          <div class="language-picker">
            <button class="language-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${tr('language')}">${currentLanguage.toUpperCase()} <span aria-hidden="true">▾</span></button>
            <div class="language-menu" role="menu">
              <button type="button" role="menuitem" data-language="fr">🇫🇷 Français</button>
              <button type="button" role="menuitem" data-language="en">🇬🇧 English</button>
              <button type="button" role="menuitem" data-language="ar">🇲🇦 العربية</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header class="site-header">
      <div class="container nav-shell">
        <a class="brand" href="/" aria-label="Accueil AIDI NÉGOCE SARL AU">
          <img src="/logo2.png" alt="AIDI NÉGOCE SARL AU logo" />
          <div class="brand-text">
            <span>AIDI NÉGOCE</span>
            <small>SARL AU</small>
          </div>
        </a>

        <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <nav class="main-nav" aria-label="Menu principal">
          <a href="/#accueil" class="nav-link ${activeRoute === 'home' ? 'active' : ''}">${tr('home')}</a>
          <a href="/a-propos" class="nav-link ${activeRoute === 'about' ? 'active' : ''}">${tr('about')}</a>
          <a href="/#activites" class="nav-link">${tr('activities')}</a>
          <a href="/notre-depot" class="nav-link ${activeRoute === 'depot' ? 'active' : ''}">${tr('depot')}</a>
          <a href="/contact" class="nav-link ${activeRoute === 'contact' ? 'active' : ''}">${tr('contact')}</a>
          <div class="mobile-menu-actions">
            <a class="mobile-menu-action whatsapp" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="mobile-menu-action quote" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">${tr('quote')}</a>
            <div class="language-picker mobile-language-picker">
              <button class="language-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${tr('language')}">${currentLanguage.toUpperCase()} <span aria-hidden="true">▾</span></button>
              <div class="language-menu" role="menu">
                <button type="button" role="menuitem" data-language="fr">🇫🇷 Français</button>
                <button type="button" role="menuitem" data-language="en">🇬🇧 English</button>
                <button type="button" role="menuitem" data-language="ar">🇲🇦 العربية</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `;
}

function renderHome() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${commonHeader()}
    <main>
      <section class="hero-home" id="accueil">
        <div class="hero-backdrop"></div>
        <div class="container hero-content">
          <div class="hero-copy">
            <span class="eyebrow">${tr('experience')}</span>
            <h1>AIDI NÉGOCE <span>SARL AU</span></h1>
            <p>${tr('heroText')}</p>
            <div class="hero-actions">
              <a href="#activites" class="button primary">${tr('discover')}</a>
              <a href="${companyInfo.whatsapp}" class="button secondary" target="_blank" rel="noreferrer">
                <span class="wa-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.1 11.1 0 0 0 3.2 17.7L2 22l4.5-1.2A11.1 11.1 0 1 0 20.5 3.5Zm-6 4.1c.3 0 .7.1 1 .4.2.2 1.1 1 1.1 2.6 0 1.6-.9 2.2-1.5 2.5-.3.1-.8.2-1.3.1-.4-.1-1.5-.5-2.7-1.8-1-1-1.7-2.4-1.9-2.8-.2-.4-.2-1 .1-1.3l.3-.3c.1-.1.2-.2.4-.2h.3c.1 0 .2 0 .3.2l.4.9c.1.2.2.3.1.4l-.2.4c-.1.1-.1.2-.1.3l.3.4c.2.3.5.7.8 1l.1.1c.1.1.2.1.3 0l.4-.5c.1-.1.2-.1.3-.1h.5c.1 0 .2 0 .3.1.1.1.2.2.3.3.1.2.3.7.2.9-.2.2-.3.3-.4.4-.3.3-.7.6-1.1.9-.1.1-.2.2-.1.4.1.2.5.8.7 1.1.2.3.4.5.8.6.3.1.8.1 1.2.1.4-.1.8-.3 1.3-.6.4-.3 1-.9 1.2-1.5.1-.3.2-.5.1-.7l-.3-.4c-.2-.1-.2-.2-.4-.2h-.9c-.1 0-.2 0-.3.1l-.1.2c-.1.2-.4.4-.6.4h-.2c-.2 0-.4-.1-.6-.2l-.5-.4c-.4-.3-.8-.7-1-1.1-.2-.2-.4-.5-.5-.8-.1-.2-.1-.4 0-.6l.2-.3c.1-.1.2-.2.4-.2z"/></svg></span>
                ${tr('reach')}
              </a>
            </div>
          </div>

          <div class="hero-visual" aria-label="Activités AIDI NÉGOCE">
            <div class="image-panel panel-main"><img src="/negoce.jpg" alt="Négoce" /></div>
            <div class="image-panel panel-flour"><img src="/farines.jpg" alt="Farines" /></div>
            <div class="image-panel panel-solar"><img src="/solaire.jpg" alt="Panneaux solaires" /></div>
            <div class="image-panel panel-import"><img src="/import-export.jpg" alt="Importation & Exportation" /></div>
            <div class="image-panel panel-work"><img src="/travaux.jpg" alt="Travaux divers" /></div>
          </div>
        </div>
      </section>

      <div class="stats-strip container">
        <div class="stat-item"><div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${statIcons[0]}</svg></div><div class="stat-copy"><strong>20+</strong><span>${tr('years')}</span></div></div>
        <div class="stat-item"><div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${statIcons[1]}</svg></div><div class="stat-copy"><strong>15+</strong><span>${tr('companies')}</span></div></div>
        <div class="stat-item"><div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${statIcons[2]}</svg></div><div class="stat-copy"><strong>100 m²</strong><span>${tr('area')}</span></div></div>
        <div class="stat-item"><div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${statIcons[3]}</svg></div><div class="stat-copy"><strong>5</strong><span>${tr('fields')}</span></div></div>
      </div>

      <section class="activities-home" id="activites">
        <div class="container activities-inner">
          <div class="section-kicker">${tr('activitiesKicker')}</div>
          <h2>${tr('activitiesTitle')}</h2>
          <p>${tr('activitiesText')}</p>

          <div class="activity-grid">
            ${activityCards.map((card, index) => `
              <article class="service-card card-${index + 1}">
                <div class="service-photo"><img src="${card.image}" alt="${card.label}" /></div>
                <div class="service-meta">
                  <div class="service-tag"><span class="service-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${card.icon}</svg></span></div>
                  <h3>${tr(`services.${card.slug}.title`)}</h3>
                  <p>${tr(`services.${card.slug}.description`)}</p>
                  <div class="service-actions">
                    <a href="/activites/${card.slug}" class="mini-button">${tr('learn')}</a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand-block">
          <img src="/logo2.png" alt="AIDI NÉGOCE SARL AU" />
          <h3>AIDI NÉGOCE<br/>SARL AU</h3>
          <p>${tr('footerText')}</p>
        </div>
        <div class="footer-links">
          <h4>${tr('navigation')}</h4>
          <a href="/#accueil">${tr('home')}</a>
          <a href="/#apropos">${tr('about')}</a>
          <a href="/#activites">${tr('activities')}</a>
          <a href="/#depot">${tr('depot')}</a>
          <a href="/#partenaires">${tr('partners')}</a>
          <a href="/contact">${tr('contact')}</a>
        </div>
        <div class="footer-links">
          <h4>${tr('contact')}</h4>
          <a href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">${tr('whatsapp')}</a>
          <a href="mailto:${companyInfo.email}">${tr('email')}</a>
          <a href="${companyInfo.phoneHref}">${tr('phone')}</a>
          <span>${companyInfo.city}</span>
        </div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© 2026 AIDI NÉGOCE SARL AU — ${tr('rights')}</span><span><a href="#">${tr('legal')}</a><a href="#">${tr('privacy')}</a></span></div></div>
    </footer>
  `;

  setupInteractions();
}

function renderAbout() {
  const app = document.querySelector('#app');
  const expertise = [
    ['▣', 'Négoce', 'Achat, vente et approvisionnement de différentes marchandises pour les professionnels.'],
    ['✣', 'Agroalimentaire', 'Farines, fécules, semoules et son en gros et demi-gros de qualité.'],
    ['☀', 'Énergie solaire', 'Solutions et équipements liés au photovoltaïque pour un avenir plus durable.'],
    ['◎', 'Commerce international', 'Importation et exportation de différentes marchandises à l’international.']
  ];
  const values = [
    ['◇', 'Confiance', 'Des relations professionnelles construites dans la durée.'],
    ['◆', 'Qualité', 'Une attention portée aux produits et aux services proposés.'],
    ['◎', 'Engagement', 'Une volonté constante de répondre aux besoins de nos partenaires.'],
    ['❧', 'Durabilité', 'Une vision orientée vers des relations et activités durables.']
  ];
  app.innerHTML = `
    ${commonHeader('about')}
    <main class="about-page">
      <section class="about-hero">
        <img src="/background.jpg" alt="AIDI NÉGOCE" />
        <div class="about-hero-overlay"></div>
        <div class="container about-hero-content">
          <div class="about-breadcrumb"><a href="/">Accueil</a><span>/</span><span>À propos</span></div>
          <span class="section-kicker">À PROPOS DE NOUS</span>
          <h1>Une expérience construite<br><em>sur plus de 20 ans</em></h1>
          <p>AIDI NÉGOCE SARL AU s’appuie sur une solide expérience dans plusieurs secteurs d’activité et développe depuis plus de 20 ans des relations professionnelles durables.</p>
          <div class="about-actions"><a class="button primary" href="/#activites">Découvrir nos activités →</a><a class="button secondary" href="/contact">Nous contacter</a></div>
        </div>
      </section>

      <section class="about-story container">
        <div class="about-story-copy">
          <span class="section-kicker">NOTRE HISTOIRE</span>
          <h2>Plus de 20 ans d’expérience<br>au service de nos partenaires</h2>
          <p>AIDI NÉGOCE SARL AU s’appuie sur plus de 20 années d’expérience dans différents secteurs d’activité, notamment le négoce, les travaux divers, les solutions solaires, l’importation et l’exportation ainsi que la commercialisation de produits agroalimentaires.</p>
          <p>Au fil des années, notre société a développé une connaissance approfondie de son environnement professionnel et a construit des relations durables avec ses partenaires.</p>
          <a class="button primary" href="/#activites">Découvrir nos activités →</a>
        </div>
        <div class="about-story-image"><img src="/negoce.jpg" alt="Entrepôt AIDI NÉGOCE" /><div class="about-experience-badge"><strong>20+</strong><span>ANS<br>D’EXPÉRIENCE</span></div></div>
      </section>

      <section class="about-expertise">
        <div class="container">
          <div class="about-heading"><span class="section-kicker">NOTRE SAVOIR-FAIRE</span><h2>Des compétences diversifiées au service de nos activités</h2></div>
          <div class="about-card-grid">${expertise.map(([icon,title,text]) => `<article class="about-card"><div class="about-card-icon">${icon}</div><h3>${title}</h3><p>${text}</p><a href="/#activites">En savoir plus →</a></article>`).join('')}</div>
        </div>
      </section>

      <section class="about-stats"><div class="container about-stats-grid"><div><strong>20+</strong><span>Années d’expérience</span></div><div><strong>15+</strong><span>Sociétés partenaires</span></div><div><strong>100 m²</strong><span>Surface de dépôt</span></div><div><strong>5</strong><span>Domaines d’activité</span></div></div></section>

      <section class="about-depot container">
        <div class="about-depot-image"><img src="/negoce.jpg" alt="Notre dépôt" /></div>
        <div class="about-depot-copy"><span class="section-kicker">NOTRE DÉPÔT</span><h2>Un espace dédié au stockage<br>et à l’organisation</h2><p>Notre dépôt de 100 m² constitue un espace dédié au stockage et à l’organisation de nos marchandises. Il accompagne notre activité commerciale et nous permet de mieux répondre aux besoins de nos partenaires.</p><div class="about-features"><div><b>▣</b><span>Stockage organisé</span></div><div><b>☷</b><span>Gestion des marchandises</span></div><div><b>▱</b><span>Disponibilité et réactivité</span></div></div><a class="button primary" href="/notre-depot">Découvrir notre dépôt →</a></div>
      </section>

      <section class="about-values"><div class="container"><div class="about-heading"><span class="section-kicker">NOS VALEURS</span><h2>Les principes qui accompagnent notre activité</h2></div><div class="about-card-grid">${values.map(([icon,title,text]) => `<article class="about-card"><div class="about-card-icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>

      <section class="about-cta"><div class="container"><span class="section-kicker">CONTACTEZ-NOUS</span><h2>Construisons ensemble de nouvelles opportunités</h2><p>Vous souhaitez en savoir plus sur notre société, nos activités ou nos services ? Notre équipe reste à votre disposition.</p><div class="about-actions"><a class="button primary" href="/contact">Nous contacter →</a><a class="button secondary" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a></div></div></section>
    </main>
    ${footerMarkup()}
  `;
  setupInteractions();
}

function renderContact() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${commonHeader('contact')}
    <main class="contact-page">
      <section class="contact-hero">
        <img src="/contact-hero.jpg.png" alt="AIDI NÉGOCE - Contact" />
        <div class="contact-hero-overlay"></div>
        <div class="container contact-hero-layout">
          <div class="contact-hero-content">
            <div class="contact-breadcrumb"><a href="/">Accueil</a><span>/</span><span>Contact</span></div>
            <span class="section-kicker">PARLONS DE VOS BESOINS</span>
            <h1>Parlons de <em>votre besoin</em></h1>
            <p>Notre équipe est à votre écoute pour toute demande d’information, de partenariat ou de renseignement concernant nos produits et services.</p>
            <div class="about-actions"><a class="button primary" href="#contact-form">Demander un devis →</a><a class="button secondary" href="#contact-form">Nous contacter</a></div>
          </div>
          <div class="contact-hero-services">
            ${[['◇','Partenariat'],['▣','Commande'],['☷','Renseignement'],['▱','Logistique']].map(([icon,title]) => `<div><b>${icon}</b><span>${title}</span></div>`).join('')}
          </div>
        </div>
      </section>

      <section class="contact-main container">
        <div class="contact-info">
          <span class="section-kicker">NOS COORDONNÉES</span>
          <h2>Plusieurs moyens<br>pour nous contacter</h2>
          <p>Nous restons à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets.</p>
          <div class="contact-methods">
            <a href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer" class="contact-method"><b>◉</b><span><strong>WhatsApp</strong><small>0673119112<br>Contactez-nous directement</small></span></a>
            <a href="${companyInfo.phoneHref}" class="contact-method"><b>☎</b><span><strong>Téléphone</strong><small>0673119112<br>Appelez-nous directement</small></span></a>
            <a href="mailto:${companyInfo.email}" class="contact-method"><b>✉</b><span><strong>Email</strong><small>${companyInfo.email}<br>Écrivez-nous directement</small></span></a>
          </div>
        </div>
        <div class="contact-form-card" id="contact-form">
          <span class="section-kicker">ENVOYEZ-NOUS UN MESSAGE</span>
          <h2>Demander un devis ou<br><em>une information</em></h2>
          <p>Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.</p>
          <form class="contact-form" novalidate>
            <div class="contact-form-row"><label>Nom complet *<input name="name" required autocomplete="name"></label><label>Téléphone *<input name="phone" required type="tel" autocomplete="tel"></label></div>
            <div class="contact-form-row"><label>Email *<input name="email" required type="email" autocomplete="email"></label><label>Sujet *<input name="subject" required></label></div>
            <label>Votre message *<textarea name="message" required rows="5" placeholder="Décrivez votre demande..."></textarea></label>
            <label class="contact-form-honeypot" aria-hidden="true">Site web<input name="website" tabindex="-1" autocomplete="off"></label>
            <div class="contact-form-status" role="status" aria-live="polite"></div>
            <button class="button primary" type="submit">Envoyer le message →</button>
          </form>
        </div>
      </section>

      <section class="contact-location container">
        <div class="contact-location-copy"><span class="section-kicker">NOTRE LOCALISATION</span><h2>Retrouvez-nous à Fès</h2><p>Notre société est située à Fès. Retrouvez facilement notre localisation sur Google Maps.</p><a class="button primary" href="${companyInfo.location}" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></div>
        <div class="contact-map" id="contact-map" role="application" aria-label="Carte interactive de la localisation AIDI NÉGOCE"></div>
      </section>

      <section class="contact-cta"><div class="container"><span class="section-kicker">UN PROJET ?</span><h2>Construisons ensemble de <em>nouvelles opportunités</em></h2><p>Vous avez un projet, une demande spécifique ou souhaitez devenir partenaire ? Notre équipe reste à votre disposition.</p><div class="about-actions"><a class="button primary" href="#contact-form">Nous contacter →</a><a class="button secondary" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a></div></div></section>
    </main>
    ${footerMarkup()}
  `;
  setupInteractions();
}

function renderServicePage(slug) {
  const app = document.querySelector('#app');
  const service = { ...serviceMeta[slug], ...tr(`services.${slug}`) };
  if (!service) {
    renderHome();
    return;
  }

  app.innerHTML = `
    ${commonHeader()}
    <main class="service-page">
      <section class="service-hero">
        <div class="service-hero-image"><img src="${service.hero}" alt="${service.imageAlt}" /></div>
        <div class="container service-hero-copy">
          <span class="eyebrow">${tr('serviceKicker')}</span>
          <h1>${service.title}</h1>
          <p>${service.intro}</p>
        </div>
      </section>

      <section class="service-detail container">
        <div class="service-article">
          <div class="service-intro-box"><p>${service.description}</p></div>
          <div class="info-grid">
            <div class="info-card">
              <h3>${tr('approach')}</h3>
              <ul>${service.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div class="info-card accent-card">
              <h3>${tr('quoteNeed')}</h3>
              <p>${tr('quoteText')}</p>
              <div class="panel-actions stacked">
                <a href="${companyInfo.whatsapp}" class="mini-button" target="_blank" rel="noreferrer">WhatsApp</a>
                <a href="mailto:${companyInfo.email}" class="mini-button ghost">Email</a>
              </div>
            </div>
          </div>
          <div class="service-actions">
            <a href="${companyInfo.whatsapp}" class="button primary" target="_blank" rel="noreferrer">${tr('contactWhatsApp')}</a>
            <a href="mailto:${companyInfo.email}" class="button secondary">${tr('sendEmail')}</a>
            <a href="/" class="button tertiary">${tr('back')}</a>
          </div>
        </div>

        <aside class="service-sidebar">
          <img src="${service.hero}" alt="${service.imageAlt}" />
          <div class="sidebar-card">
            <h3>${tr('useful')}</h3>
            <p>${tr('usefulText')}</p>
            <a href="${service.google}" class="mini-button ghost" target="_blank" rel="noreferrer">${tr('google')}</a>
          </div>
        </aside>
      </section>
    </main>

    <footer class="site-footer service-footer">
      <div class="container footer-grid">
        <div class="footer-brand-block"><img src="/logo2.png" alt="AIDI NÉGOCE SARL AU" /><h3>AIDI NÉGOCE<br/>SARL AU</h3></div>
        <div class="footer-links">
          <h4>${tr('navigation')}</h4>
          <a href="/#accueil">${tr('home')}</a>
          <a href="/#apropos">${tr('about')}</a>
          <a href="/#activites">${tr('activities')}</a>
          <a href="/#depot">${tr('depot')}</a>
          <a href="/#partenaires">${tr('partners')}</a>
          <a href="/contact">${tr('contact')}</a>
        </div>
        <div class="footer-links">
          <h4>${tr('contact')}</h4>
          <a href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:${companyInfo.email}">${tr('email')}</a>
          <a href="${companyInfo.phoneHref}">${tr('phone')}</a>
          <span>${companyInfo.city}</span>
        </div>
      </div>
      <div class="footer-bottom"><div class="container">© AIDI NÉGOCE SARL AU — ${tr('rights')}</div></div>
    </footer>
  `;

  setupInteractions();
}

function renderDepot() {
  const app = document.querySelector('#app');
  const galleryImages = [
    { src: '/02_depot_principal.jpg', alt: 'Dépôt principal AIDI NÉGOCE' },
    { src: '/03_gallery_entrepot_1.jpg', alt: 'Espace de stockage' },
    { src: '/04_gallery_sacs.jpg', alt: 'Marchandises conditionnées' },
    { src: '/05_gallery_entrepot_2.jpg', alt: 'Organisation du dépôt' },
    { src: '/06_gallery_marchandises.jpg', alt: 'Marchandises du dépôt' },
    { src: '/07_gallery_entrepot_3.jpg', alt: 'Vue du dépôt' }
  ];
  app.innerHTML = `
      ${commonHeader('depot')}
      <main class="depot-page">
        <section class="depot-hero">
          <img src="/01_hero_entrepot - Copie.jpg" alt="Dépôt AIDI NÉGOCE" />
          <div class="depot-hero-overlay"></div>
          <div class="container depot-hero-content">
            <div class="depot-breadcrumb"><a href="/">Accueil</a><span>/</span><span>Notre dépôt</span></div>
            <span class="section-kicker">NOTRE DÉPÔT</span>
            <h1>Un espace dédié au<br><em>stockage et à l’organisation</em></h1>
            <p>Une infrastructure de 100 m² pensée pour assurer un stockage organisé de nos marchandises et mieux répondre aux besoins de nos clients et partenaires.</p>
            <div class="depot-actions">
              <a class="button primary" href="/contact">Nous contacter →</a>
              <a class="button secondary" href="/#activites">Découvrir nos activités</a>
            </div>
          </div>
        </section>

        <section class="depot-intro container">
          <div class="depot-copy">
            <span class="section-kicker">NOTRE INFRASTRUCTURE</span>
            <h2>Un dépôt fonctionnel<br>et bien organisé</h2>
            <p>Notre société dispose d’un dépôt de 100 m² permettant d’assurer le stockage et l’organisation des marchandises. Cet espace nous permet de gérer efficacement nos produits, de garantir leur disponibilité et de mieux répondre aux demandes de nos clients et partenaires.</p>
            <p>Notre dépôt est destiné à recevoir, stocker et préparer différentes catégories de marchandises dans des conditions adaptées à notre activité.</p>
            <a class="button primary" href="/contact">Nous contacter →</a>
          </div>
          <div class="depot-feature-image">
            <img src="/negoce.jpg" alt="Entrepôt et activité de négoce" />
            <div class="depot-area-badge"><strong>100 m²</strong><span>Surface de dépôt</span></div>
          </div>
        </section>

        <section class="depot-stats">
          <div class="container depot-stats-grid">
            <div><strong>20+</strong><span>Années d’expérience</span></div>
            <div><strong>15+</strong><span>Sociétés partenaires</span></div>
            <div><strong>100 m²</strong><span>Surface de dépôt</span></div>
            <div><strong>5</strong><span>Domaines d’activité</span></div>
          </div>
        </section>

        <section class="depot-advantages container">
          <div class="depot-heading"><span class="section-kicker">NOS AVANTAGES</span><h2>Un espace adapté à nos activités</h2></div>
          <div class="depot-advantage-grid">
            ${[
              ['▣', 'Stockage organisé', 'Un espace bien structuré pour un stockage efficace.'],
              ['☷', 'Gestion des marchandises', 'Suivi rigoureux des entrées et sorties de produits.'],
              ['▱', 'Disponibilité', 'Une meilleure réactivité pour répondre aux demandes.'],
              ['◇', 'Sécurité', 'Des conditions adaptées à la conservation des marchandises.']
            ].map(([icon, title, text]) => `<article class="depot-advantage"><div>${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
          </div>
        </section>

        <section class="depot-gallery-section">
          <div class="container">
            <div class="depot-heading"><span class="section-kicker">NOTRE DÉPÔT EN IMAGES</span><h2>Un aperçu de notre espace de stockage</h2></div>
            <div class="depot-gallery" data-gallery>
              <button class="depot-gallery-arrow prev" type="button" aria-label="Image précédente">←</button>
                <div class="depot-gallery-viewport">
                  <div class="depot-gallery-track">
                    ${galleryImages.map((image, index) => `<button class="depot-gallery-item${index === 0 ? ' active' : ''}" type="button" data-gallery-index="${index}"><img src="${image.src}" alt="${image.alt}" /><span>Voir en plein écran</span></button>`).join('')}
                  </div>
                </div>
              <button class="depot-gallery-arrow next" type="button" aria-label="Image suivante">→</button>
            </div>
            <div class="depot-gallery-dots">${galleryImages.map((_, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-gallery-dot="${index}" aria-label="Afficher l’image ${index + 1}"></button>`).join('')}</div>
          </div>
        </section>

        <section class="depot-cta">
          <div class="container"><span class="section-kicker">CONTACTEZ-NOUS</span><h2>Besoin d’informations sur notre dépôt ?</h2><p>Notre équipe reste à votre disposition pour répondre à toutes vos questions concernant notre espace de stockage et nos activités.</p><div class="depot-actions">          <a class="button primary" href="/contact">Nous contacter →</a><a class="button secondary" href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a></div></div>
        </section>
      </main>
      <div class="depot-lightbox" aria-hidden="true"><button class="depot-lightbox-close" type="button" aria-label="Fermer">×</button><button class="depot-lightbox-arrow prev" type="button" aria-label="Image précédente">←</button><img src="" alt="" /><button class="depot-lightbox-arrow next" type="button" aria-label="Image suivante">→</button></div>
      ${footerMarkup()}
    `;
  setupInteractions();
}

function footerMarkup() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand-block"><img src="/logo2.png" alt="AIDI NÉGOCE SARL AU" /><h3>AIDI NÉGOCE<br/>SARL AU</h3><p>${tr('footerText')}</p></div>
        <div class="footer-links"><h4>${tr('navigation')}</h4><a href="/#accueil">${tr('home')}</a><a href="/a-propos">${tr('about')}</a><a href="/#activites">${tr('activities')}</a><a href="/notre-depot">${tr('depot')}</a><a href="/#partenaires">${tr('partners')}</a><a href="/contact">${tr('contact')}</a></div>
        <div class="footer-links"><h4>${tr('contact')}</h4><a href="${companyInfo.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:${companyInfo.email}">${tr('email')}</a><a href="${companyInfo.phoneHref}">${tr('phone')}</a><span>${companyInfo.city}</span></div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© 2026 AIDI NÉGOCE SARL AU — ${tr('rights')}</span><span><a href="#">${tr('legal')}</a><a href="#">${tr('privacy')}</a></span></div></div>
    </footer>
  `;
}

function setupInteractions() {
  const contactMap = document.querySelector('#contact-map');
  if (contactMap) {
    const coordinates = [33.9426777, -5.0031496];
    const map = L.map(contactMap, { scrollWheelZoom: true, zoomControl: true }).setView(coordinates, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);
    const marker = L.marker(coordinates).addTo(map);
    marker.bindPopup('<strong>AIDI NÉGOCE SARL AU</strong><br>Fès, Maroc').openPopup();
    window.requestAnimationFrame(() => map.invalidateSize());
  }

  document.querySelectorAll('.language-picker').forEach((languagePicker) => {
    const languageTrigger = languagePicker.querySelector('.language-trigger');
    if (!languageTrigger) return;
    languageTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = languagePicker.classList.toggle('open');
      languageTrigger.setAttribute('aria-expanded', String(open));
    });
    languagePicker.querySelectorAll('[data-language]').forEach((option) => {
      option.addEventListener('click', () => {
        setLanguage(option.dataset.language);
        languagePicker.classList.remove('open');
      });
    });
    document.addEventListener('click', (event) => {
      if (!languagePicker.contains(event.target)) {
        languagePicker.classList.remove('open');
        languageTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const selector = anchor.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('a[href^="/activites/"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const href = anchor.getAttribute('href');
      if (!href) return;
      history.pushState({}, '', href);
      renderServicePage(href.replace('/activites/', ''));
    });
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = contactForm.querySelector('.contact-form-status');
      const data = new FormData(contactForm);
      const required = ['name', 'phone', 'email', 'subject', 'message'];
      const missing = required.some((field) => !String(data.get(field) || '').trim());
      const email = String(data.get('email') || '').trim();
      if (missing || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Veuillez remplir correctement tous les champs obligatoires.';
        status.className = 'contact-form-status error';
        return;
      }
      const submit = contactForm.querySelector('button[type="submit"]');
      submit.disabled = true;
      submit.textContent = 'Envoi en cours...';
      status.textContent = '';
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
          website: data.get('website')
        })
      })
        .then(async (response) => {
          const result = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(result.error || 'Request failed');
          status.textContent = 'Votre message a bien été envoyé. Notre équipe vous répondra dans les plus brefs délais.';
          status.className = 'contact-form-status success';
          contactForm.reset();
        })
        .catch(() => {
          status.textContent = 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par WhatsApp.';
          status.className = 'contact-form-status error';
        })
        .finally(() => {
          submit.disabled = false;
          submit.textContent = 'Envoyer le message →';
        });
    });
  }

  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const items = [...gallery.querySelectorAll('.depot-gallery-item')];
    const dots = [...document.querySelectorAll('[data-gallery-dot]')];
    const track = gallery.querySelector('.depot-gallery-track');
    const lightbox = document.querySelector('.depot-lightbox');
    const lightboxImage = lightbox?.querySelector('img');
    let viewStart = 0;
    let selected = 0;
    const visibleCount = () => window.innerWidth <= 560 ? 1 : window.innerWidth <= 820 ? 2 : window.innerWidth <= 1100 ? 3 : 4;
    const updateCarousel = (index) => {
      const maxStart = Math.max(0, items.length - visibleCount());
      viewStart = Math.max(0, Math.min(index, maxStart));
      const step = (items[0]?.getBoundingClientRect().width || 0) + 16;
      if (track) track.style.transform = `translate3d(${-viewStart * step}px, 0, 0)`;
      items.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex >= viewStart && itemIndex < viewStart + visibleCount()));
      dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === viewStart));
    };
    const openLightbox = (index = selected) => {
      if (!lightbox || !lightboxImage) return;
      selected = (index + items.length) % items.length;
      const image = items[selected]?.querySelector('img');
      if (!image?.src) return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    };
    gallery.querySelector('.prev')?.addEventListener('click', () => updateCarousel(viewStart - 1));
    gallery.querySelector('.next')?.addEventListener('click', () => updateCarousel(viewStart + 1));
    items.forEach((item, index) => item.addEventListener('click', () => {
      selected = index;
      updateCarousel(index);
      openLightbox(index);
    }));
    dots.forEach((dot, index) => dot.addEventListener('click', () => updateCarousel(index)));
    const closeLightbox = () => {
      lightbox?.classList.remove('open');
      lightbox?.setAttribute('aria-hidden', 'true');
    };
    lightbox?.querySelector('.depot-lightbox-close')?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
    lightbox?.querySelector('.prev')?.addEventListener('click', () => openLightbox(selected - 1));
    lightbox?.querySelector('.next')?.addEventListener('click', () => openLightbox(selected + 1));
    document.addEventListener('keydown', (event) => {
      if (!lightbox?.classList.contains('open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') openLightbox(selected - 1);
      if (event.key === 'ArrowRight') openLightbox(selected + 1);
    });
    updateCarousel(0);
    window.addEventListener('resize', () => updateCarousel(viewStart), { passive: true });
    let touchStartX = 0;
    gallery.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    gallery.addEventListener('touchend', (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) < 40) return;
      updateCarousel(viewStart + (distance < 0 ? 1 : -1));
    }, { passive: true });
  }
}

function renderApp() {
  const path = window.location.pathname;
  if (path === '/a-propos') {
    renderAbout();
    return;
  }
  if (path === '/contact') {
    renderContact();
    return;
  }
  if (path === '/notre-depot') {
    renderDepot();
    return;
  }
  if (path.startsWith('/activites/')) {
    renderServicePage(path.replace('/activites/', ''));
    return;
  }
  renderHome();
}

window.addEventListener('popstate', renderApp);
window.addEventListener('DOMContentLoaded', renderApp);
document.documentElement.lang = currentLanguage;
document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
renderApp();
