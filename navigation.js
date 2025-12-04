// QuantDim Shared Navigation Component - Cat Selector Edition
// This file creates a consistent cat-themed navigation menu across all pages

(function() {
    'use strict';

    // Navigation configuration
    const navConfig = {
        links: [
            { href: 'index.html', text: 'Home', title: 'Tao Te Ching Wisdom Pool' },
            { href: 'innovoid/cardgallery.html', text: 'Technical Reviews'},
            { href: 'hben.html', text: 'HBEN Analyzer'},
            { href: 'resumegallery.html', text: 'Resume Gallery', title: 'Modular Class-Based Resume Gallery' },
            { href: 'https://blossomstechservice.github.io/blossomstechservice/index.html', text: 'BlossomTechService', title: 'External: BlossomTech Service', external: true }
        ]
    };

    // Create navigation HTML with cat selector
    function createNavHTML() {
        const catSVG = `<svg width="45.952225mm" height="35.678726mm" viewBox="0 0 45.952225 35.678726" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs/><g style="display:inline" transform="translate(-121.80376,-101.90461)"><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 144.95859,104.74193 c 6.01466,-2.1201 14.02915,-0.85215 17.62787,2.77812 3.59872,3.63027 2.91927,7.6226 -0.0661,11.80703 -2.98542,4.18443 -9.54667,3.58363 -15.1474,3.43959 -5.60073,-0.14404 -10.30411,-0.0586 -11.67474,-3.9026 7.85671,-2.22341 3.24576,-12.00205 9.26042,-14.12214 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 156.30732,121.30486 c 0,0 -3.82398,2.52741 -4.14054,3.7997 -0.31656,1.2723 0.31438,2.18109 0.95701,2.55128 0.64264,0.3702 1.59106,-0.085 2.13559,-0.75306 0.54452,-0.6681 1.5629,-2.25488 2.47945,-3.20579 0.91654,-0.95091 2.96407,-2.74361 2.96407,-2.74361 l 0.73711,-3.60348 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 136.93356,123.08347 c 0,0 -3.20149,3.2804 -3.24123,4.59088 -0.0397,1.31049 0.60411,1.83341 1.3106,2.05901 0.7065,0.22559 1.60304,-0.55255 1.99363,-1.32084 0.39056,-0.76832 1.14875,-2.30337 2.04139,-3.29463 0.89264,-0.99126 3.37363,-3.37561 3.37363,-3.37561 l -1.30007,-3.61169 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 130.12859,121.60522 c -2.15849,1.92962 -3.38576,3.23532 -3.61836,4.5256 -0.23257,1.2903 0.0956,1.80324 0.76105,2.13059 0.66549,0.32733 1.66701,-0.31006 2.16665,-1.01233 0.49961,-0.70231 1.04598,-1.14963 2.83575,-3.05671 1.78977,-1.90708 5.91823,-3.27102 5.91823,-3.27102 l -0.75313,-3.99546 c 0,0 -5.15171,2.7497 -7.31019,4.67933 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.292536" d="m 147.59927,113.85404 c 0.68896,4.40837 -4.04042,7.93759 -10.51533,8.9455 -6.47491,1.00791 -12.24344,-0.88717 -12.9324,-5.29555 -0.68895,-4.40838 3.44199,-9.94186 9.9169,-10.94977 6.47491,-1.0079 12.84186,2.89144 13.53083,7.29982 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 126.36446,111.82609 c 0,0 -2.37067,-6.28072 -0.86724,-7.10855 1.50342,-0.82783 5.87139,3.72617 5.87139,3.72617 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 143.50182,108.85407 c 0,0 -0.0544,-6.71302 -1.75519,-6.94283 -1.70081,-0.22982 -4.13211,5.59314 -4.13211,5.59314 z"/><g style="display:inline"><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 125.27102,116.06007 -2.97783,-1.05373"/><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 124.91643,116.80991 -2.84808,0.0754"/><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 124.97798,118.00308 -2.53111,0.5156"/></g><g transform="rotate(-23.188815,49.755584,71.047761)" style="display:inline;fill:none;stroke:#000000"><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 121.77448,146.87682 3.00963,-0.95912"/><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 122.10521,147.63749 2.84427,0.16537"/><path style="fill:none;stroke:#000000;stroke-width:0.529167" d="m 122.00599,148.82812 2.51354,0.59531"/></g><ellipse style="display:inline;fill:#ffffff;stroke:none;stroke-width:0.56967" cx="142.61723" cy="108.6707" rx="3.0261719" ry="3.0757811" transform="rotate(1.8105864)"/><ellipse style="display:inline;fill:#000000;stroke:none;stroke-width:0.597086" cx="112.57543" cy="138.29808" rx="1.0380507" ry="1.3097118" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="display:inline;fill:#f9f9f9;stroke:none;stroke-width:0.184905" cx="112.70263" cy="137.817" rx="0.32146212" ry="0.40558979" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="display:inline;fill:#ffffff;stroke:none;stroke-width:0.56967" cx="135.40735" cy="110.12592" rx="3.0261719" ry="3.0757811" transform="rotate(1.8105864)"/><ellipse style="display:inline;fill:#000000;stroke:none;stroke-width:0.597086" cx="105.22613" cy="138.07497" rx="1.0380507" ry="1.3097118" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="display:inline;fill:#f9f9f9;stroke:none;stroke-width:0.184905" cx="105.35332" cy="137.59389" rx="0.32146212" ry="0.40558979" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><path id="tail" style="display:inline;fill:#000000;stroke:none;stroke-width:0.529167" d="m 163.77708,109.27292 c 4.36563,2.71198 4.26447,17.63497 3.70417,21.03437 -0.5603,3.3994 -1.86906,4.06275 -4.53099,4.49791 -5.87463,0.96037 -8.39724,-5.87134 -5.7547,-5.72161 2.64254,0.14973 3.15958,3.46446 5.95314,2.05052 2.79356,-1.41394 -1.42214,-13.46068 -1.42214,-13.46068 z"/><path style="display:inline;fill:#000000;stroke:none;stroke-width:0.264583" d="m 159.74981,121.34445 c 0,0 -2.98896,3.47517 -2.94624,4.78555 0.0427,1.31039 0.89775,2.01247 1.61702,2.1932 0.71928,0.18075 1.50745,-0.51603 1.84897,-1.30735 0.34149,-0.79135 0.88811,-2.59584 1.51032,-3.76081 0.62219,-1.16497 2.10268,-3.44845 2.10268,-3.44845 l -0.27441,-3.66785 z"/><g id="lefteyelid" style="display:inline"><ellipse style="fill:#000000;stroke:none;stroke-width:0.529167" cx="131.94429" cy="114.29948" rx="3.1571214" ry="3.2155864"/><path style="fill:#000000;stroke:#ffffff;stroke-width:0.529167" d="m 129.32504,114.80228 c 2.54908,-1.14592 4.60706,-0.65481 4.60706,-0.65481"/></g><g id="righteyelid" style="display:inline"><ellipse style="fill:#000000;stroke:none;stroke-width:0.529167" cx="139.07704" cy="113.0834" rx="3.1571214" ry="3.2155864"/><path style="fill:#000000;stroke:#ffffff;stroke-width:0.529167" d="m 136.48089,113.70683 c 2.48528,-1.2784 4.56624,-0.89621 4.56624,-0.89621"/></g><g id="eyesdown"><ellipse style="fill:#ffffff;stroke:none;stroke-width:0.529167" cx="139.12122" cy="113.61373" rx="1.8686198" ry="2.0422525"/><ellipse style="fill:#000000;stroke:none;stroke-width:0.597086" cx="112.24622" cy="139.77037" rx="1.0380507" ry="1.3097118" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="fill:#f9f9f9;stroke:none;stroke-width:0.184905" cx="112.37342" cy="139.28929" rx="0.32146212" ry="0.40558979" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="fill:#ffffff;stroke:none;stroke-width:0.529167" cx="131.994" cy="114.92011" rx="1.8686198" ry="2.0422525"/><ellipse style="fill:#000000;stroke:none;stroke-width:0.597086" cx="105.00267" cy="139.64998" rx="1.0380507" ry="1.3097118" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/><ellipse style="fill:#f9f9f9;stroke:none;stroke-width:0.184905" cx="105.12987" cy="139.1689" rx="0.32146212" ry="0.40558979" transform="matrix(0.98048242,-0.19660678,0.20800608,0.97812753,0,0)"/></g><path id="longtail" style="display:inline;fill:#000000;stroke:none;stroke-width:0.529167" d="m 164.24062,110.09354 -2.10788,6.5381 c 0,0 0.84017,12.88397 0.35269,20.95169 h 4.78291 c 0.83489,-8.63528 0.13334,-24.78453 -3.02772,-27.48979 z"/></g></svg>`;

        const tailSVG = `<svg width="49.987" height="48" viewBox="0 0 13.226 12.7"><g fill="#000" fill-opacity="1" stroke="none" display="inline" transform="translate(-114.596 -144.523)"><path id="endpiece" stroke-width=".529" d="M123.03 144.523c-.16 4.227-.609 7.58-1.632 7.915-2.976.975-2.985-2.38-5.574-2.928s-1.13 6.587 4.822 6.527c2.697-.027 4.356-.485 6.218-5.348.442-1.154.766-3.398.958-6.166z" display="inline"/><path id="tailpiece" stroke-width=".753" d="M123.041 144.523h4.781v12.7h-4.781z"/></g></svg>`;

        const navHTML = `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
            <nav class="qd-nav-container">
                <div class="mouse-detector">
                    <div class="cat">
                        <div class="sleep-symbol">
                            <span>Z</span>
                            <span>z</span>
                            <span>z</span>
                        </div>
                        <div class="thecat">
                            ${catSVG}
                        </div>
                        <select class="side-select" id="qdNavSelect">
                            ${navConfig.links.map(link => `
                                <option value="${link.href}" data-external="${link.external || false}">
                                    <span>${link.text}</span>
                                    ${tailSVG}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                </div>
            </nav>
        `;
        return navHTML;
    }

    // Create navigation styles with cat selector
    function createNavStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .qd-nav-container {
                position: fixed;
                top: 10px;
                left: 10px;
                z-index: 1000;
                font-family: "Sour Gummy", sans-serif;
                transform: scale(0.55);
                transform-origin: top left;
            }

            .cat select,
            .cat ::picker(select) {
                appearance: base-select;
                font-size: 18px;
            }

            .cat select {
                min-width: 180px;
                padding: 10px 12px;
                border-radius: 8px;
                min-height: 44px;
                background-color: rgba(255, 255, 255, 0.95);
                cursor: pointer;
                border: 2px solid rgba(56, 189, 248, 0.3);
                box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
                transition: all 0.3s ease;
            }

            .cat select:hover {
                background-color: #ffff00;
                box-shadow: 0 6px 20px rgba(0, 191, 255, 0.5);
            }

            .cat ::picker(select) {
                border-radius: 0px 0px 8px 8px;
                border-top: none;
                background: rgba(255, 255, 255, 0.98);
            }

            .cat ::picker-icon,
            .cat ::checkmark {
                display: none;
            }

            .cat [hidden] {
                display: none;
            }

            .cat option {
                padding: 8px;
                padding-left: 15px;
                padding-right: 8px;
                display: flex;
                justify-content: space-between;
                min-height: 40px;
                align-items: center;
            }

            .cat option:hover {
                background: #ffff00;
            }

            .sleep-symbol {
                margin-left: 115px;
                font-weight: 600;
                margin-bottom: -22px;
                font-size: 14px;
            }

            .sleep-symbol span {
                position: relative;
                display: inline-block;
                opacity: 1;
                transform: scale(1);
                animation: sleep 4s ease-in-out infinite;
            }

            .sleep-symbol span:nth-child(1) {
                animation-delay: 0s;
            }

            .sleep-symbol span:nth-child(2) {
                animation-delay: 1s;
                margin-left: -6px;
            }

            .sleep-symbol span:nth-child(3) {
                animation-delay: 2s;
                margin-left: -6px;
            }

            .thecat {
                z-index: 2;
                margin-left: 95px;
                margin-bottom: -35px;
                position: relative;
                pointer-events: none;
            }

            .thecat svg {
                width: 110px;
                height: auto;
            }

            #tail {
                visibility: visible;
            }

            #longtail {
                visibility: hidden;
            }

            .cat option svg {
                margin-right: -3px;
                width: 24px;
                height: auto;
            }

            .mouse-detector {
                padding: 8px 12px 12px 12px;
            }

            .mouse-detector:hover #lefteyelid {
                visibility: hidden;
            }

            .mouse-detector:hover .sleep-symbol {
                visibility: hidden;
            }

            .cat {
                padding: 12px;
            }

            .cat:hover #righteyelid {
                visibility: hidden;
            }

            .thecat #eyesdown {
                visibility: hidden;
            }

            .cat:has(.side-select:hover) #eyesdown {
                visibility: visible;
            }

            .cat select:open {
                border-radius: 8px 8px 0px 0px;
            }

            .cat:has(option:hover) #righteyelid,
            .cat:has(option:hover) #lefteyelid,
            .cat:has(option:hover) .sleep-symbol {
                visibility: hidden;
            }

            .cat:has(option:hover) #eyesdown {
                visibility: visible;
            }

            .cat:has(option:hover) #tail {
                visibility: hidden;
            }

            .cat:has(option:hover) #longtail {
                visibility: visible;
            }

            .cat option:has(~ option:hover) #tailpiece {
                visibility: visible;
            }

            .cat option #tailpiece {
                visibility: hidden;
            }

            .cat option #endpiece {
                visibility: hidden;
            }

            .cat option:hover #endpiece {
                visibility: visible;
            }

            @keyframes sleep {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                50% {
                    opacity: 0.5;
                    transform: translate(-3px, -20px) scale(1.2);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-35px) scale(1.5);
                }
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

        // Get select element
        const navSelect = document.getElementById('qdNavSelect');

        if (!navSelect) {
            console.error('QuantDim Navigation: Select element not found');
            return;
        }

        // Handle navigation on selection change
        navSelect.addEventListener('change', function(e) {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const href = selectedOption.value;
            const isExternal = selectedOption.getAttribute('data-external') === 'true';

            if (href) {
                if (isExternal) {
                    window.open(href, '_blank', 'noopener,noreferrer');
                } else {
                    window.location.href = href;
                }
            }
            // Reset to "Home" after navigation is triggered
            e.target.selectedIndex = 0;
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
