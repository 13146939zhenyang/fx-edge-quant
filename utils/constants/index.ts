export const navItem = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    {
        name: 'Services', path: '/services', subItems: [
            { name: 'M.D.A Services', path: '/services/mda-services' },
            { name: 'Financial Advice', path: '/services/financial-advice' },
            { name: 'Sustainable Investment', path: '/services/sustainable-investment' },
        ]
    },
    { name: 'Contact Us', path: '/contact-us' },
]