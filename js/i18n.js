// Language translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'Crafting Intelligent <span class="gradient-text">Systems</span>',
        'hero.description': 'Full-stack developer specializing in .NET, financial data systems, and phase-aware market analysis. Building tools that transform complex data into actionable insights.',
        'hero.btn.projects': 'View Projects',
        'hero.btn.contact': 'Get in Touch',
        'hero.stat.experience': 'Years Experience',
        'hero.stat.projects': 'Active Projects',
        'hero.stat.passion': 'Passion Driven',
        
        // Projects section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Building the future of analysis',
        'projects.latest': 'Latest',
        
        // PhaseForge Scout
        'project.scout.title': 'PhaseForge Scout',
        'project.scout.desc': 'Phase-aware stock discovery with intelligent scoring, live data integration, and comprehensive tooltips. Features dynamic universe expansion, REST API, and calculation explanations.',
        'project.scout.link': 'View Code',
        
        // CashFlowCompass
        'project.cashflow.title': 'CashFlowCompass',
        'project.cashflow.desc': 'DCF and Reverse DCF valuation calculator with real financial data. 7-tier recommendation engine with WACC calculations and Gordon Growth terminal values.',
        
        // EarningsScreener
        'project.screener.title': 'Earnings Beat Screener',
        'project.screener.desc': 'Stock screener calculating earnings beat-streaks for market timing signals. Parses SEC 10-Q XBRL filings for full earnings history, beat-streak analysis, and strength scoring.',
        'project.screener.link': 'Visit Site',
        
        // SophiasTrendChoice
        'project.sophia.title': 'SophiasTrendChoice',
        'project.sophia.desc': 'Fashion outfit builder with Virtual Try-On AI. MARGELLE editorial design with social features, dual AI provider support (Claude Sonnet + OpenAI GPT-4 Vision).',
        
        // PhaseForge MarketState
        'project.marketstate.title': 'PhaseForge MarketState',
        'project.marketstate.desc': 'Market intelligence dashboard: real-time phase detection (Early Warning, Mid-cycle Reset) with actionable investor guidance and market stress indicators.',
        
        // PhaseForge Platform
        'project.phaseforge.title': 'PhaseForge Platform',
        'project.phaseforge.desc': 'Comprehensive indicator dashboard with 38+ financial indicators. Real market data validation, Cyclus Compass, Pillar Signaler, and interactive heatmap visualization.',
        
        // About section
        'about.title': 'About Me',
        'about.lead': 'Passionate software developer with 15+ years of experience building enterprise-grade financial systems and data-driven applications.',
        'about.p1': 'I specialize in .NET (C#), clean architecture, and financial data integration. My current focus is on phase-aware market analysis, DCF valuation tools, and AI-powered fashion technology.',
        'about.p2': 'Based in Denmark, working with cutting-edge technologies like Alpha Vantage, FRED APIs, Claude Sonnet, and OpenAI GPT-4 Vision.',
        'about.skill.backend': 'Backend',
        'about.skill.data': 'Data & APIs',
        'about.skill.ai': 'AI & ML',
        
        // Contact section
        'contact.title': 'Get in Touch',
        'contact.subtitle': "Let's discuss your next project",
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.location': 'Location',
        'contact.denmark': 'Denmark',
        
        // Footer
        'footer.rights': 'All rights reserved',
        'footer.built': 'Built with passion • Powered by .NET & AI',
        
        // Popup
        'popup.badge': '🎉 Latest Work',
        'popup.title': 'PhaseForge Scout is Live!',
        'popup.offline': 'Sorry, not online yet',
        'popup.offline.message': 'This project is currently under development and not publicly available yet.',
        'popup.offline.close': 'Close',
        'popup.desc': 'Phase-aware stock discovery with intelligent scoring, live data integration, and comprehensive tooltips. Features dynamic universe expansion, REST API, and calculation explanations.',
        'popup.feature1': '✨ Auto-expanding universe',
        'popup.feature2': '🎯 Intelligent caching',
        'popup.feature3': '📊 REST API + Swagger',
        'popup.feature4': '💡 Calculation modals',
        'popup.btn.view': 'View Project',
        'popup.btn.later': 'Maybe Later'
    },
    da: {
        // Navigation
        'nav.home': 'Hjem',
        'nav.projects': 'Projekter',
        'nav.about': 'Om mig',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.title': 'Udvikler Intelligente <span class="gradient-text">Systemer</span>',
        'hero.description': 'Full-stack udvikler med speciale i .NET, finansielle datasystemer og faseopmærksomme markedsanalyser. Bygger værktøjer der transformerer komplekse data til handlingsrettede indsigter.',
        'hero.btn.projects': 'Se Projekter',
        'hero.btn.contact': 'Kontakt mig',
        'hero.stat.experience': 'Års Erfaring',
        'hero.stat.projects': 'Aktive Projekter',
        'hero.stat.passion': 'Passionsdrevet',
        
        // Projects section
        'projects.title': 'Udvalgte Projekter',
        'projects.subtitle': 'Bygger fremtidens analyse',
        'projects.latest': 'Nyeste',
        
        // PhaseForge Scout
        'project.scout.title': 'PhaseForge Scout',
        'project.scout.desc': 'Faseopmærksom aktie-opdagelse med intelligent scoring, live data-integration og omfattende tooltips. Funktioner inkluderer dynamisk univers-udvidelse, REST API og beregningsforklaringer.',
        'project.scout.link': 'Se Kode',
        
        // CashFlowCompass
        'project.cashflow.title': 'CashFlowCompass',
        'project.cashflow.desc': 'DCF og Reverse DCF værdiansættelsesberegner med reelle finansielle data. 7-trins anbefalingsmotor med WACC-beregninger og Gordon Growth terminalværdier.',
        
        // EarningsScreener
        'project.screener.title': 'Earnings Beat Screener',
        'project.screener.desc': 'Aktie-screener der beregner earnings beat-streaks til markeds-timing-signaler. Parser SEC 10-Q XBRL-arkiveringer for fuld indtjeningshistorik, beat-streak-analyse og styrkescoring.',
        'project.screener.link': 'Besøg Side',
        
        // SophiasTrendChoice
        'project.sophia.title': 'SophiasTrendChoice',
        'project.sophia.desc': 'Mode outfit-builder med Virtual Try-On AI. MARGELLE redaktionel design med sociale funktioner, dual AI-provider support (Claude Sonnet + OpenAI GPT-4 Vision).',
        
        // PhaseForge MarketState
        'project.marketstate.title': 'PhaseForge MarketState',
        'project.marketstate.desc': 'Markedsintelligens-dashboard: realtids fasedetektering (Early Warning, Mid-cycle Reset) med handlingsrettet investorvejledning og markedsstress-indikatorer.',
        
        // PhaseForge Platform
        'project.phaseforge.title': 'PhaseForge Platform',
        'project.phaseforge.desc': 'Omfattende indikator-dashboard med 38+ finansielle indikatorer. Validering af reelle markedsdata, Cyclus Compass, Pillar Signaler og interaktiv heatmap-visualisering.',
        
        // About section
        'about.title': 'Om Mig',
        'about.lead': 'Passioneret softwareudvikler med 15+ års erfaring i at bygge finansielle enterprise-systemer og datadrevne applikationer.',
        'about.p1': 'Jeg specialiserer mig i .NET (C#), clean architecture og finansiel data-integration. Mit aktuelle fokus er faseopmærksomme markedsanalyser, DCF værdiansættelsesværktøjer og AI-drevet modeteknologi.',
        'about.p2': 'Baseret i Danmark, arbejder med cutting-edge teknologier som Alpha Vantage, FRED APIs, Claude Sonnet og OpenAI GPT-4 Vision.',
        'about.skill.backend': 'Backend',
        'about.skill.data': 'Data & APIs',
        'about.skill.ai': 'AI & ML',
        
        // Contact section
        'contact.title': 'Kontakt',
        'contact.subtitle': 'Lad os diskutere dit næste projekt',
        'contact.email': 'E-mail',
        'contact.github': 'GitHub',
        'contact.location': 'Placering',
        'contact.denmark': 'Danmark',
        
        // Footer
        'footer.rights': 'Alle rettigheder forbeholdes',
        'footer.built': 'Bygget med passion • Drevet af .NET & AI',
        
        // Popup
        'popup.badge': '🎉 Nyeste Arbejde',
        'popup.title': 'PhaseForge Scout er Live!',
        'popup.offline': 'Desværre ikke online lige nu',
        'popup.offline.message': 'Dette projekt er under udvikling og ikke offentligt tilgængeligt endnu.',
        'popup.offline.close': 'Luk',
        'popup.desc': 'Faseopmærksom aktie-opdagelse med intelligent scoring, live data-integration og omfattende tooltips. Funktioner inkluderer dynamisk univers-udvidelse, REST API og beregningsforklaringer.',
        'popup.feature1': '✨ Auto-udvide univers',
        'popup.feature2': '🎯 Intelligent caching',
        'popup.feature3': '📊 REST API + Swagger',
        'popup.feature4': '💡 Beregnings-modaler',
        'popup.btn.view': 'Se Projekt',
        'popup.btn.later': 'Måske Senere'
    }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Translate page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active flag
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage(currentLang);
    
    // Add click listeners to flags
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});
