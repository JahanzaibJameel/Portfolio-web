const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');


const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formMessage.textContent = 'Sending your message...';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    
    emailjs.sendForm('service_hs30cnb', 'template_qk1544j', e.target)
        .then(() => {
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            contactForm.reset();
        }, (error) => {
            formMessage.textContent = 'Failed to send message. Please try again or email me directly.';
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
            console.error('EmailJS Error:', error);
        });
});
const testimonialSwiper = new Swiper('.testimonials-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-image', {
    duration: 1,
    x: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelectorAll('.section-subtitle, .section-title, .fade-in'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.skill-progress').forEach(bar => {
    ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
            const width = bar.style.width;
            gsap.from(bar, {
                width: 0,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
    });
});
