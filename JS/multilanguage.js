function changeLanguage(language) {
    const languageElements = {
        'en': {
            'navbar-name': 'Your Name',
            'header-role': 'Web Developer',
            'about-heading': 'About Me',
            'about-content': 'Write a brief introduction about yourself here.',
            'skills-heading': 'Skills',
            'projects-heading': 'Projects',
            'employments-heading': 'Previous Employments',
            'contact-heading': 'Contact',
            'footer-text': '&copy; 2023 Your Name. All rights reserved.'
        },
        'nl': {
            'navbar-name': 'Jouw Naam',
            'header-role': 'Webontwikkelaar',
            'about-heading': 'Over Mij',
            'about-content': 'Schrijf hier een korte introductie over jezelf.',
            'skills-heading': 'Vaardigheden',
            'projects-heading': 'Projecten',
            'employments-heading': 'Vorige Werkgevers',
            'contact-heading': 'Contact',
            'footer-text': '&copy; 2023 Jouw Naam. Alle rechten voorbehouden.'
        }
    };

    Object.keys(languageElements[language]).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = languageElements[language][elementId];
        }
    });
}