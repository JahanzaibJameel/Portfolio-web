


(function () {
    "use strict";

    // Theme handling with system preference & View Transition (2026)
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const getPreferredTheme = () => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (theme) => {
        // Use View Transition API if available
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                if (theme === 'dark') {
                    body.setAttribute('data-theme', 'dark');
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    body.removeAttribute('data-theme');
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                }
            });
        } else {
            if (theme === 'dark') {
                body.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                body.removeAttribute('data-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }
        localStorage.setItem('theme', theme);
    };

    applyTheme(getPreferredTheme());

    themeToggle.addEventListener('click', () => {
        const current = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? false : true;
        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', expanded);
        hamburger.innerHTML = expanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Scroll top
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('active', window.pageYOffset > 300);
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Form submission (enhanced with validation)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    showFormMessage('Message sent successfully! I\'ll reply within 24h.', 'success');
                    form.reset();
                } else throw new Error('Server error');
            } catch (err) {
                showFormMessage('Network error. Please email me directly.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    function showFormMessage(msg, type) {
        const existing = document.querySelector('.form-message');
        if (existing) existing.remove();
        const div = document.createElement('div');
        div.className = `form-message ${type}`;
        div.textContent = msg;
        form.appendChild(div);
        setTimeout(() => div.remove(), 5000);
    }

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
        gsap.from('.hero-text', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
        gsap.from('.hero-image', { duration: 1, x: 50, opacity: 0, delay: 0.3, ease: 'power3.out' });
        gsap.utils.toArray('.fade-in, .section-title, .mindset-card, .experience-card, .project-card').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
                y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
            });
        });
    });

    // Swiper
    new Swiper('.testimonials-slider', {
        loop: true, autoplay: { delay: 5000 }, pagination: { el: '.swiper-pagination', clickable: true },
    });

    window.addEventListener('beforeunload', () => ctx.revert());
})();
