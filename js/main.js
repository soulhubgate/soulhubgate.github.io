// Main Shared Logic for Header, Footer, and Language Toggling

// 1. Language State
let currentLang = localStorage.getItem('soulhub_lang') || 'en';

// 2. Apply Language on Load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    renderNavbar();
});

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('soulhub_lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    const isAr = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Handle specific localized elements like the toggle button text
    const langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.innerText = translations[lang].switch_lang;

    // Call page-specific handler if exists (e.g., in clinical.html for dynamic updates)
    if (typeof window.handleLanguageChange === 'function') {
        window.handleLanguageChange(lang);
    }
}

// 3. Dynamic Navbar Injection (to avoid repeating HTML)
function renderNavbar() {
    const navText = translations[currentLang];
    const path = window.location.pathname;
    const p = path.substring(path.lastIndexOf('/') + 1);

    // Helper to check if active
    const isActive = (name) => {
        if (name === 'home') return p === '' || p === 'index.html';
        if (name === 'tests') return p === 'tests.html' || p === 'clinical.html' || p === 'mbti.html' || p === 'love.html' || p === 'bigfive.html' || p === 'eq.html' || p === 'attachment.html' || p === 'darktriad.html' || p === 'career.html';
        if (name === 'library') return p === 'blog.html';
        if (name === 'about') return p === 'about.html';
        return false;
    };

    const getClasses = (name) => isActive(name)
        ? "nav-link text-white border-b-2 border-blue-500 font-bold pb-1"
        : "nav-link text-slate-300 hover:text-white transition-all pb-1 hover:border-b-2 hover:border-slate-600";

    // Mobile classes
    const getMobileClasses = (name) => isActive(name)
        ? "text-blue-400 font-bold py-2 border-b border-slate-700/50 block pl-4 border-l-4 border-l-blue-500"
        : "text-slate-300 hover:text-white py-2 border-b border-slate-700/50 block pl-4";

    const navbarHTML = `
        <nav class="p-6 border-b border-slate-700/50 flex flex-wrap justify-between items-center z-20 bg-slate-900/80 backdrop-blur-md sticky top-0">
            <a href="index.html" class="flex items-center gap-2">
                <span class="font-bold text-lg tracking-tight text-white">Soul-Hub</span>
            </a>

            <div class="hidden md:flex gap-8 text-sm font-medium items-center">
                <a href="index.html" class="${getClasses('home')}" data-i18n="nav_home">Home</a>
                <a href="tests.html" class="${getClasses('tests')}" data-i18n="nav_tests">Tests</a>
                <a href="blog.html" class="${getClasses('library')}" data-i18n="nav_library">Library</a>
                <a href="about.html" class="${getClasses('about')}" data-i18n="nav_about">About Me</a>
                
                <button onclick="toggleLanguage()"
                    class="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-xs text-white border border-slate-600 transition-colors flex items-center gap-1 ml-4">
                    <i class="fas fa-globe"></i> <span id="lang-text">${translations[currentLang].switch_lang}</span>
                </button>
                 <a href="https://buymeacoffee.com/aahmeddgalal" target="_blank" rel="noopener noreferrer">
  <button class="px-3 py-1 bg-pink-600 hover:bg-pink-500 rounded-full text-xs text-white border border-pink-500 transition-colors flex items-center gap-1 shadow-lg shadow-pink-500/20">
    <i class="fas fa-heart"></i>
    <span data-i18n="donate_text">${translations[currentLang].donate_text}</span>
  </button>
</a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-slate-300 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </nav>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-slate-800 border-b border-slate-700 p-4 absolute w-full z-30 flex flex-col gap-2 shadow-xl">
             <a href="index.html" class="${getMobileClasses('home')}" data-i18n="nav_home">Home</a>
             <a href="tests.html" class="${getMobileClasses('tests')}" data-i18n="nav_tests">Tests</a>
             <a href="blog.html" class="${getMobileClasses('library')}" data-i18n="nav_library">Library</a>
             <a href="about.html" class="${getMobileClasses('about')}" data-i18n="nav_about">About Me</a>
             <button onclick="toggleLanguage(); location.reload();" class="text-left text-indigo-300 py-2 font-bold flex items-center gap-2 pl-4">
                <i class="fas fa-globe"></i> Switch Language
            </button>
        </div>
    `;

    // Inject Navigation if a placeholder exists, otherwise prepend to body (simplistic approach for now)
    // Ideally, pages should have <div id="nav-placeholder"></div>
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        // Re-run applyLanguage to ensure the newly injected HTML gets translated
        applyLanguage(currentLang);
    }
}

