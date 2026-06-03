document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.background = ''; // Clear inline styles if any
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            document.body.style.overflow = 'hidden';
        });
        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            document.body.style.overflow = '';
        });

        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992 && !link.classList.contains('dropdown-toggle')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // Theme Switcher Logic
    const themeToggle = document.getElementById('theme-toggle');
    const rtlToggle = document.getElementById('rtl-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i, svg');
        if (!icon) return;

        if (theme === 'dark') {
            icon.setAttribute('data-lucide', 'sun');
        } else {
            icon.setAttribute('data-lucide', 'moon');
        }
        if (window.lucide) lucide.createIcons();
    }

    // RTL Toggle Logic
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
        });
    }

    // Scroll Top Logic
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('d-none');
            } else {
                scrollTopBtn.classList.add('d-none');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Ember Particle Effect
    const emberContainer = document.querySelector('.ember-container');
    if (emberContainer) {
        for (let i = 0; i < 30; i++) {
            createEmber(emberContainer);
        }
    }

    function createEmber(container) {
        const ember = document.createElement('div');
        ember.classList.add('ember');

        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;

        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.left = `${left}%`;
        ember.style.bottom = `-10px`;
        ember.style.animationDuration = `${duration}s`;
        ember.style.animationDelay = `${delay}s`;

        container.appendChild(ember);

        // Remove and recreate after animation
        setTimeout(() => {
            ember.remove();
            createEmber(container);
        }, (duration + delay) * 1000);
    }

    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Counter Animation Logic
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function startCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const timer = setInterval(() => {
            current += Math.ceil(target / 50);
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = current.toLocaleString();
            }
        }, 30);
    }

    // Safety Video Player Placeholder Logic
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const videoId = placeholder.getAttribute('data-video-id');
            placeholder.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            `;
        });
    });

    // ─── Active Nav State Detection ──────────────────────────────────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Map of page filename → nav-link text to activate
    const pageNavMap = {
        'index.html': 'home',
        'home2.html': 'home',
        'about.html': 'about',
        'services.html': 'services',
        'pricing.html': 'pricing',
        'blog.html': 'blog',
        'blog-details.html': 'blog',
        'contact.html': 'contact',
        'service-details.html': 'services',
    };

    const activeKey = pageNavMap[currentPage] || '';

    // Activate matching top-level nav-links (non-dropdown)
    document.querySelectorAll('.navbar-nav > li > .nav-link:not(.dropdown-toggle)').forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        if (text === activeKey) {
            link.classList.add('active');
        }
    });

    // For "home" pages (index.html / home2.html): activate Home dropdown-toggle + correct sub-item
    if (activeKey === 'home') {
        const homeToggle = document.querySelector('.navbar-nav .dropdown-toggle');
        if (homeToggle) {
            homeToggle.classList.add('active');
        }

        // Mark the correct dropdown item as active
        document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
            const href = item.getAttribute('href') || '';
            if (href === currentPage || href.endsWith('/' + currentPage)) {
                item.classList.add('active-page');
            }
        });
    }
    // ─────────────────────────────────────────────────────────────────────────
});
