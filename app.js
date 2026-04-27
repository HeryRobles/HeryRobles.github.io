/* ═══════════════════════════════════════════════════════════════
   i18n — Translation system
   ═══════════════════════════════════════════════════════════════ */

const translations = {
    en: {
        // Nav
        'nav.home':     'Home',
        'nav.services': 'Services',
        'nav.skills':   'Skills',
        'nav.contact':  'Contact',

        // Hero
        'hero.eyebrow':  'Systems Engineer',
        'hero.bio':      "Hi! I'm a Software Developer based in Hermosillo, México. I build robust web applications, APIs, and mobile experiences — and I keep the systems running behind the scenes.",
        'hero.download': 'Download CV',
        'hero.contact':  'Get in touch',

        // Services
        'services.title': 'Services',

        'services.backend.title': 'Backend Developer Jr.',
        'services.backend.desc':  'I specialize in building and optimizing the logic that powers web applications — from database design to server management. Committed to exceptional performance and seamless user experiences through clean, efficient systems.',

        'services.mobile.title': 'Mobile App Developer',
        'services.mobile.desc':  'I turn ideas into interactive mobile experiences using .NET MAUI. Focused on building intuitive interfaces and efficient solutions that work beautifully across devices.',

        'services.dba.title': 'Database Administrator Jr.',
        'services.dba.desc':  'I ensure efficiency and security in data management for both relational and non-relational databases. Focused on query optimization, reliable backups, and solid data administration practices.',

        // Cards
        'card.more': 'Read more...',
        'card.less': 'Read less...',

        // Skills
        'skills.title': 'Skills',

        // Contact
        'contact.title':   "Let's talk",
        'contact.sub':     'Open to opportunities, freelance projects, and collaborations.',
        'contact.name':    'Name...',
        'contact.email':   'Email...',
        'contact.message': 'Message...',
        'contact.send':    'Send message',

        // SweetAlert
        'alert.success.title': 'Message sent!',
        'alert.success.text':  "Thanks for reaching out — I'll get back to you soon.",
        'alert.error.title':   'Empty fields',
        'alert.error.text':    'Please fill in all fields before sending.',
        'alert.fail.title':    'Something went wrong',
        'alert.fail.text':     'Could not send your message. Please try again or email me directly.',
        'alert.ok':            'OK',
    },

    es: {
        // Nav
        'nav.home':     'Inicio',
        'nav.services': 'Servicios',
        'nav.skills':   'Habilidades',
        'nav.contact':  'Contacto',

        // Hero
        'hero.eyebrow':  'Ingeniero en Sistemas',
        'hero.bio':      '¡Hola! Soy desarrollador de software con base en Hermosillo, México. Construyo aplicaciones web, APIs y experiencias móviles robustas — y mantengo los sistemas funcionando detrás de escena.',
        'hero.download': 'Descargar CV',
        'hero.contact':  'Contáctame',

        // Services
        'services.title': 'Servicios',

        'services.backend.title': 'Desarrollador Backend Jr.',
        'services.backend.desc':  'Me especializo en la creación y optimización de la lógica detrás de las aplicaciones web. Desde el diseño de bases de datos hasta la gestión de servidores, comprometido con el rendimiento excepcional y una experiencia de usuario sin contratiempos.',

        'services.mobile.title': 'Desarrollador de Apps Móviles',
        'services.mobile.desc':  'Convierto ideas en experiencias móviles interactivas usando .NET MAUI. Enfocado en crear interfaces intuitivas y soluciones eficientes que funcionen perfectamente en cualquier dispositivo.',

        'services.dba.title': 'Administrador de BD Jr.',
        'services.dba.desc':  'Garantizo la eficiencia y seguridad en la gestión de datos relacionales y no relacionales. Enfocado en la optimización de consultas, respaldos confiables y buenas prácticas de administración de datos.',

        // Cards
        'card.more': 'Leer más...',
        'card.less': 'Leer menos...',

        // Skills
        'skills.title': 'Habilidades',

        // Contact
        'contact.title':   'Hablemos',
        'contact.sub':     'Disponible para oportunidades laborales, proyectos freelance y colaboraciones.',
        'contact.name':    'Nombre...',
        'contact.email':   'Correo...',
        'contact.message': 'Mensaje...',
        'contact.send':    'Enviar mensaje',

        // SweetAlert
        'alert.success.title': '¡Mensaje enviado!',
        'alert.success.text':  '¡Gracias por escribir — me pondré en contacto contigo muy pronto!',
        'alert.error.title':   'Campos vacíos',
        'alert.error.text':    'Por favor llena todos los campos antes de enviar.',
        'alert.fail.title':    'Algo salió mal',
        'alert.fail.text':     'No se pudo enviar tu mensaje. Intenta de nuevo o escríbeme directamente.',
        'alert.ok':            'Aceptar',
    }
};

// ── Active language (read from localStorage or default to 'en') ──────────────
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
        ? translations[currentLang][key]
        : (translations['en'][key] || key);
}

function applyLanguage() {
    // Update <html lang=""> attribute
    document.documentElement.lang = currentLang;

    // Text nodes: data-i18n="key"
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    // Placeholders: data-i18n-placeholder="key"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Toggle buttons (more/less) — respect current expanded state
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.textContent = isExpanded ? t(btn.dataset.i18nLess) : t(btn.dataset.i18nMore);
    });

    // Highlight active lang in toggle button
    document.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });

    // Persist choice
    localStorage.setItem('lang', currentLang);
}

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLanguage();
}


/* ═══════════════════════════════════════════════════════════════
   EmailJS — config
   ═══════════════════════════════════════════════════════════════ */
const EMAILJS_PUBLIC_KEY  = '4rLwnmmF8NASRiV80';
const EMAILJS_SERVICE_ID  = 'service_rmcxhpc';
const EMAILJS_TEMPLATE_ID = 'template_y0y7c2c';


/* ═══════════════════════════════════════════════════════════════
   DOM ready
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {

    // ── Init EmailJS ─────────────────────────────────────────────
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // ── Apply saved / default language ──────────────────────────
    applyLanguage();

    // ── Language toggle button ───────────────────────────────────
    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.addEventListener('click', switchLanguage);

    // ── Card expand / collapse ───────────────────────────────────
    document.querySelectorAll('.card').forEach(function (card) {
        const text = card.querySelector('.card-text');
        const btn  = card.querySelector('.toggle-btn');
        if (!text || !btn) return;

        function checkOverflow() {
            if (!text.classList.contains('expanded')) {
                btn.style.display = text.scrollHeight > text.clientHeight + 2 ? 'inline-block' : 'none';
            }
        }
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        btn.addEventListener('click', function () {
            const expanded = text.classList.toggle('expanded');
            btn.setAttribute('aria-expanded', expanded);
            btn.textContent = expanded ? t(btn.dataset.i18nLess) : t(btn.dataset.i18nMore);
        });
    });

    // ── Contact form con EmailJS ──────────────────────────────────
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameEl    = form.querySelector('input[type="text"]');
            const emailEl   = form.querySelector('input[type="email"]');
            const messageEl = form.querySelector('textarea');
            const submitBtn = form.querySelector('button[type="submit"]');

            // Validación de campos vacíos
            if (!nameEl.value.trim() || !emailEl.value.trim() || !messageEl.value.trim()) {
                Swal.fire({
                    title:             t('alert.error.title'),
                    text:              t('alert.error.text'),
                    icon:              'error',
                    confirmButtonText: t('alert.ok'),
                    background:        '#1a1a1a',
                    color:             '#e8e6e1',
                    confirmButtonColor:'#c8f04c',
                });
                return;
            }

            // Estado de carga en el botón
            const originalText    = submitBtn.textContent;
            submitBtn.textContent = '...';
            submitBtn.disabled    = true;

            // Parámetros que deben coincidir con las variables de tu template en EmailJS
            const templateParams = {
                from_name:  nameEl.value.trim(),
                from_email: emailEl.value.trim(),
                message:    messageEl.value.trim(),
                to_email:   'heryrobles30@gmail.com',
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function () {
                    // Éxito
                    nameEl.value = emailEl.value = messageEl.value = '';
                    Swal.fire({
                        title:             t('alert.success.title'),
                        text:              t('alert.success.text'),
                        icon:              'success',
                        confirmButtonText: t('alert.ok'),
                        background:        '#1a1a1a',
                        color:             '#e8e6e1',
                        confirmButtonColor:'#c8f04c',
                    });
                })
                .catch(function (error) {
                    // Error de red o de EmailJS
                    console.error('EmailJS error:', error);
                    Swal.fire({
                        title:             t('alert.fail.title'),
                        text:              t('alert.fail.text'),
                        icon:              'error',
                        confirmButtonText: t('alert.ok'),
                        background:        '#1a1a1a',
                        color:             '#e8e6e1',
                        confirmButtonColor:'#c8f04c',
                    });
                })
                .finally(function () {
                    // Restaurar botón siempre
                    submitBtn.textContent = originalText;
                    submitBtn.disabled    = false;
                });
        });
    }

    // ── Download CV ──────────────────────────────────────────────
    const cvBtn = document.getElementById('descargarCV');
    if (cvBtn) {
        cvBtn.addEventListener('click', function () {
            window.location.href = 'docs/cv.pdf';
        });
    }

    // ── Footer year ──────────────────────────────────────────────
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

});


/* ═══════════════════════════════════════════════════════════════
   Responsive menu
   ═══════════════════════════════════════════════════════════════ */
function responsiveMenu() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    if (nav.className === '') {
        nav.className = 'responsive';

        // Close button inside overlay
        const closeBtn = document.createElement('button');
        closeBtn.className   = 'close-btn';
        closeBtn.innerHTML   = '&times;';
        closeBtn.setAttribute('aria-label', 'Close menu');
        nav.appendChild(closeBtn);

        closeBtn.addEventListener('click', closeMenu);
    } else {
        closeMenu();
    }
}

function closeMenu() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    nav.className = '';
    const btn = nav.querySelector('.close-btn');
    if (btn) btn.remove();
}

// Close when any nav link is clicked
document.querySelectorAll('#nav a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
});
