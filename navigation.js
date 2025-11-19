// QuantDim Shared Navigation Component
// This file creates a consistent navigation menu across all pages

(function() {
    'use strict';

    // Navigation configuration
    const navConfig = {
        links: [
            { href: 'index.html', text: 'Home', title: 'Tao Te Ching Wisdom Pool' },
            { href: 'embodiedcognition.html', text: 'Embodied Cognition', title: 'The Neurobiological Violence of Everyday Life' },
            { href: 'mpt.html', text: 'Microplastics Analysis', title: 'Pharmacokinetic & Toxicological Analysis' },
            { href: 'ecoblock.html', text: 'Novel Economic Lows', title: 'Economic Analysis' },
            { href: 'hben.html', text: 'HBEN Analyzer', title: 'MODALITY TESTING [HBEN]' },
            { href: 'resumegallery.html', text: 'Resume Gallery', title: 'Modular Class-Based Resume Gallery' },
            { href: 'https://blossomstechservice.github.io/blossomstechservice/index.html', text: 'BlossomTechService', title: 'External: BlossomTech Service', external: true }
        ]
    };

    // Create navigation HTML
    function createNavHTML() {
        const navHTML = `
            <nav class="qd-nav-container">
                <div class="qd-nav-toggle" id="qdNavToggle">
                    <div class="qd-nav-icon" id="qdNavIcon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="qd-nav-menu" id="qdNavMenu">
                    ${navConfig.links.map(link => `
                        <a href="${link.href}"
                           title="${link.title}"
                           ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                            ${link.text}${link.external ? ' <i class="external-icon">↗</i>' : ''}
                        </a>
                    `).join('')}
                </div>
            </nav>
        `;
        return navHTML;
    }

    // Create navigation styles
    function createNavStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .qd-nav-container {
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1000;
            }

            .qd-nav-toggle {
                width: 50px;
                height: 50px;
                background: rgba(14, 165, 233, 0.15);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
                transition: all 0.3s ease;
                border: 2px solid rgba(56, 189, 248, 0.3);
            }

            .qd-nav-toggle:hover {
                background: rgba(14, 165, 233, 0.25);
                transform: scale(1.05);
                box-shadow: 0 6px 20px rgba(0, 191, 255, 0.5);
            }

            .qd-nav-icon {
                width: 24px;
                height: 24px;
                position: relative;
                transition: all 0.3s ease;
            }

            .qd-nav-icon span {
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: #38bdf8;
                border-radius: 3px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: all 0.3s ease;
            }

            .qd-nav-icon span:nth-child(1) {
                top: 3px;
            }

            .qd-nav-icon span:nth-child(2) {
                top: 10px;
            }

            .qd-nav-icon span:nth-child(3) {
                top: 17px;
            }

            .qd-nav-menu {
                position: absolute;
                top: 60px;
                left: 0;
                background: rgba(2, 0, 36, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 15px;
                min-width: 220px;
                max-width: 280px;
                box-shadow: 0 8px 30px rgba(0, 191, 255, 0.3);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                border: 2px solid rgba(56, 189, 248, 0.3);
            }

            .qd-nav-menu.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .qd-nav-menu a {
                display: flex;
                align-items: center;
                padding: 12px 15px;
                color: #bae6fd;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.2s ease;
                font-weight: 500;
                font-size: 0.95rem;
                position: relative;
            }

            .qd-nav-menu a:hover {
                background: rgba(56, 189, 248, 0.2);
                color: #38bdf8;
                transform: translateX(5px);
                box-shadow: 0 2px 10px rgba(0, 191, 255, 0.2);
            }

            .qd-nav-menu a:not(:last-child) {
                margin-bottom: 5px;
            }

            .qd-nav-menu a::before {
                content: '▸';
                margin-right: 10px;
                transition: all 0.2s ease;
                color: #38bdf8;
            }

            .qd-nav-menu a:hover::before {
                margin-right: 15px;
            }

            .qd-nav-icon.active span:nth-child(1) {
                top: 10px;
                transform: rotate(135deg);
            }

            .qd-nav-icon.active span:nth-child(2) {
                opacity: 0;
                left: -60px;
            }

            .qd-nav-icon.active span:nth-child(3) {
                top: 10px;
                transform: rotate(-135deg);
            }

            .external-icon {
                font-size: 0.75em;
                margin-left: 4px;
                opacity: 0.7;
                font-style: normal;
            }
        `;
        return style;
    }

    // Initialize navigation
    function initNavigation() {
        // Add styles
        document.head.appendChild(createNavStyles());

        // Add navigation HTML
        document.body.insertAdjacentHTML('afterbegin', createNavHTML());

        // Get elements
        const navToggle = document.getElementById('qdNavToggle');
        const navMenu = document.getElementById('qdNavMenu');
        const navIcon = document.getElementById('qdNavIcon');

        if (!navToggle || !navMenu || !navIcon) {
            console.error('QuantDim Navigation: Required elements not found');
            return;
        }

        // Toggle functionality
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navIcon.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navIcon.classList.remove('active');
            }
        });

        // Prevent menu close when clicking inside menu
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
