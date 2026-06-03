/* =======================================================
   SHEKINAH NAGEZA — PORTFOLIO  |  main.js
   - JS-based i18n (EN / FR)
   - Navbar scroll effect & hamburger menu
   - Scroll-reveal observer
   - Contact form handler
   ======================================================= */

'use strict';

// --------------------------------------------------------
// 1.  TRANSLATIONS
// --------------------------------------------------------
const translations = {
  en: {
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'hero.greeting': "Hi, I'm",
    'hero.title':    'Software Engineer &amp; Web Developer',
    'hero.tagline':  'Building elegant digital experiences — one line of code at a time.',
    'hero.cta.projects': 'View My Work',
    'hero.cta.contact':  'Get in Touch',

    'about.tag':   'Who I am',
    'about.title': 'About Me',
    'about.p1':    'I am a passionate software engineer with a strong focus on web technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.',
    'about.p2':    'My journey in software development started with curiosity and has grown into a professional craft. I enjoy working across the full stack — from crafting pixel-perfect UIs to architecting robust backend systems.',
    'about.p3':    "When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or mentoring fellow developers.",
    'about.stat1': 'Years of Experience',
    'about.stat2': 'Projects Completed',
    'about.stat3': 'Technologies',

    'skills.tag':             'What I know',
    'skills.title':           'Skills &amp; Technologies',
    'skills.frontend.title':  'Frontend',
    'skills.backend.title':   'Backend',
    'skills.tools.title':     'Tools &amp; DevOps',

    'projects.tag':   "What I've built",
    'projects.title': 'Featured Projects',
    'projects.cta':   'View Project',

    'projects.p1.title': 'E-Commerce Platform',
    'projects.p1.desc':  'A full-stack e-commerce solution with product management, cart functionality, user authentication, and secure payment integration.',

    'projects.p2.title': 'Analytics Dashboard',
    'projects.p2.desc':  'An interactive data visualization dashboard featuring real-time charts, filterable reports, and an intuitive admin interface.',

    'projects.p3.title': 'Real-Time Chat App',
    'projects.p3.desc':  'A WebSocket-powered messaging application with rooms, notifications, file sharing, and end-to-end encrypted private conversations.',

    'projects.p4.title': 'AI Task Manager',
    'projects.p4.desc':  'A smart to-do application that uses AI to auto-categorise tasks, suggest priorities, and provide productivity insights.',

    'contact.tag':       'Say hello',
    'contact.title':     'Get In Touch',
    'contact.subtitle':  'Have a project in mind or just want to chat? Drop me a message!',
    'contact.available': 'Available for freelance &amp; full-time roles',

    'contact.form.name':                'Name',
    'contact.form.name.placeholder':    'Shekinah Nageza',
    'contact.form.email':               'Email',
    'contact.form.message':             'Message',
    'contact.form.message.placeholder': "Hi Shekinah, I'd love to work with you\u2026",
    'contact.form.send':                'Send Message',
    'contact.form.success':             "\u2705 Message sent! I'll get back to you soon.",

    'footer.rights': 'All rights reserved.',
  },

  fr: {
    'nav.about':    'À propos',
    'nav.skills':   'Compétences',
    'nav.projects': 'Projets',
    'nav.contact':  'Contact',

    'hero.greeting': 'Bonjour, je suis',
    'hero.title':    'Ingénieur Logiciel &amp; Développeur Web',
    'hero.tagline':  'Créer des expériences numériques élégantes — une ligne de code à la fois.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact':  'Me contacter',

    'about.tag':   'Qui je suis',
    'about.title': 'À propos de moi',
    'about.p1':    'Je suis un ingénieur logiciel passionné, spécialisé dans les technologies web. J\'aime transformer des problèmes complexes en solutions simples, belles et intuitives.',
    'about.p2':    'Mon parcours dans le développement logiciel a commencé par la curiosité et est devenu un véritable métier. J\'apprécie travailler sur l\'ensemble du stack — de la création d\'interfaces pixel-perfect à la conception de systèmes backend robustes.',
    'about.p3':    'Quand je ne code pas, vous me trouverez en train d\'explorer de nouveaux frameworks, de contribuer à des projets open-source ou de mentorer d\'autres développeurs.',
    'about.stat1': 'Années d\'expérience',
    'about.stat2': 'Projets réalisés',
    'about.stat3': 'Technologies',

    'skills.tag':             'Ce que je maîtrise',
    'skills.title':           'Compétences &amp; Technologies',
    'skills.frontend.title':  'Frontend',
    'skills.backend.title':   'Backend',
    'skills.tools.title':     'Outils &amp; DevOps',

    'projects.tag':   'Ce que j\'ai construit',
    'projects.title': 'Projets en vedette',
    'projects.cta':   'Voir le projet',

    'projects.p1.title': 'Plateforme e-Commerce',
    'projects.p1.desc':  'Une solution e-commerce full-stack avec gestion des produits, panier, authentification utilisateur et intégration de paiement sécurisé.',

    'projects.p2.title': 'Tableau de bord analytique',
    'projects.p2.desc':  'Un tableau de bord de visualisation de données interactif avec des graphiques en temps réel, des rapports filtrables et une interface d\'administration intuitive.',

    'projects.p3.title': 'Application de chat en temps réel',
    'projects.p3.desc':  'Une application de messagerie alimentée par WebSocket avec salles, notifications, partage de fichiers et conversations privées chiffrées de bout en bout.',

    'projects.p4.title': 'Gestionnaire de tâches IA',
    'projects.p4.desc':  'Une application de gestion de tâches intelligente utilisant l\'IA pour classer automatiquement les tâches, suggérer des priorités et fournir des insights de productivité.',

    'contact.tag':       'Dites bonjour',
    'contact.title':     'Me contacter',
    'contact.subtitle':  'Vous avez un projet en tête ou vous souhaitez simplement discuter ? Envoyez-moi un message !',
    'contact.available': 'Disponible pour des missions freelance &amp; postes en CDI',

    'contact.form.name':                'Nom',
    'contact.form.name.placeholder':    'Shekinah Nageza',
    'contact.form.email':               'E-mail',
    'contact.form.message':             'Message',
    'contact.form.message.placeholder': 'Bonjour Shekinah, je souhaiterais travailler avec vous\u2026',
    'contact.form.send':                'Envoyer le message',
    'contact.form.success':             '\u2705 Message envoyé ! Je vous répondrai bientôt.',

    'footer.rights': 'Tous droits réservés.',
  },
};

// --------------------------------------------------------
// 2.  I18N ENGINE
// --------------------------------------------------------
let currentLang = localStorage.getItem('lang') || 'en';

/**
 * Apply translations to the DOM.
 * Elements with data-i18n="key" get their innerHTML replaced.
 * Elements with data-i18n-placeholder="key" get their placeholder replaced.
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update lang button labels (show the OPPOSITE language so user knows what clicking does)
  const opposite = lang === 'en' ? 'FR' : 'EN';
  document.querySelectorAll('#lang-label, #lang-label-footer').forEach((el) => {
    el.textContent = opposite;
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

function toggleLanguage() {
  applyTranslations(currentLang === 'en' ? 'fr' : 'en');
}

// --------------------------------------------------------
// 3.  NAVBAR
// --------------------------------------------------------
const navbar      = document.querySelector('.navbar');
const hamburger   = document.getElementById('hamburger');
const navLinks    = document.getElementById('nav-links');

function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen.toString());
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

window.addEventListener('scroll', handleScroll, { passive: true });
hamburger.addEventListener('click', toggleMenu);

// Close menu on nav link click (mobile)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});

// --------------------------------------------------------
// 4.  SCROLL-REVEAL
// --------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll(
    '.skill-card, .project-card, .about-grid, .contact-grid, .section-header'
  );

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------
// 5.  CONTACT FORM
// --------------------------------------------------------
function initContactForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simulate async send
    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending…</span>';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
      successMsg.hidden = false;

      setTimeout(() => {
        successMsg.hidden = true;
      }, 5000);
    }, 1200);
  });
}

// --------------------------------------------------------
// 6.  FOOTER YEAR
// --------------------------------------------------------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --------------------------------------------------------
// 7.  WIRE UP LANGUAGE TOGGLES
// --------------------------------------------------------
document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
document.getElementById('lang-toggle-footer').addEventListener('click', toggleLanguage);

// --------------------------------------------------------
// 8.  INIT
// --------------------------------------------------------
applyTranslations(currentLang);
initReveal();
initContactForm();
