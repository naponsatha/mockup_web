// ========================================
// Primal-Style JavaScript Clone
// Modern B2B + Teal Theme + Interactive
// ========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Form submission handling
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        const inputs = quoteForm.querySelectorAll('input[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#f26d84';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (isValid) {
            // Show success message
            alert('Thank you! We will contact you shortly to discuss your Google Ads strategy.');

            // Reset form
            quoteForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Remove error styling on input
    const formInputs = quoteForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        });
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(40px)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animateElements = document.querySelectorAll(
    '.feature-card, .service-item, .process-step, .result-card, .stat-item'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// Stagger animations for grids
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

const resultCards = document.querySelectorAll('.result-card');
resultCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
});

// Hero animation on load
window.addEventListener('load', () => {
    const heroContainer = document.querySelector('.hero-container');

    if (heroContainer) {
        heroContainer.style.opacity = '0';
        heroContainer.style.transform = 'translateY(40px)';

        setTimeout(() => {
            heroContainer.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContainer.style.opacity = '1';
            heroContainer.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Parallax effect for hero background
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroBg = document.querySelector('.hero-bg');

            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }

            ticking = false;
        });

        ticking = true;
    }
});

// Number counter animation for stats
const statItems = document.querySelectorAll('.stat-item h3');

const animateCounter = (element, target, duration, suffix = '') => {
    let current = 0;
    const isPercentage = target.toString().includes('%');
    const isDollar = target.toString().includes('$');
    const targetNum = parseFloat(target.toString().replace(/[^0-9.]/g, ''));
    const increment = targetNum / (duration / 16);

    const timer = setInterval(() => {
        current += increment;

        if (current >= targetNum) {
            if (isPercentage) {
                element.textContent = Math.floor(targetNum) + '%';
            } else if (isDollar) {
                element.textContent = '$' + targetNum.toFixed(0) + 'M+';
            } else {
                element.textContent = Math.floor(targetNum) + suffix;
            }
            clearInterval(timer);
        } else {
            if (isPercentage) {
                element.textContent = Math.floor(current) + '%';
            } else if (isDollar) {
                element.textContent = '$' + current.toFixed(0) + 'M+';
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }
    }, 16);
};

// Trigger counter animation on scroll
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent.trim();
            const target = text;

            if (text.includes('%')) {
                const num = parseInt(text);
                animateCounter(entry.target, num, 2000, '%');
            } else if (text.includes('$')) {
                const num = parseFloat(text.replace(/[^0-9.]/g, ''));
                animateCounter(entry.target, num, 2000, '$M+');
            } else {
                const num = parseInt(text.replace(/[^0-9]/g, ''));
                animateCounter(entry.target, num, 2000, '+');
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(stat => {
    statsObserver.observe(stat);
});

// Result metrics counter animation
const resultMetrics = document.querySelectorAll('.result-metric');

const resultObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent.trim();

            // Animate based on content
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'scale(0.5)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, 200);

            resultObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

resultMetrics.forEach(metric => {
    resultObserver.observe(metric);
});

// Button hover effects enhancement
const buttons = document.querySelectorAll('.btn-coral, .btn-teal-outline');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });

    // Ripple effect
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Process step animation with pulse effect
const processSteps = document.querySelectorAll('.process-step');

const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stepIcon = entry.target.querySelector('.step-icon');

            setTimeout(() => {
                stepIcon.style.animation = 'pulse 2s ease-in-out infinite';
            }, 500);

            processObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

processSteps.forEach(step => {
    processObserver.observe(step);
});

// Service number hover effect
const serviceNumbers = document.querySelectorAll('.service-number');

serviceNumbers.forEach(number => {
    number.parentElement.addEventListener('mouseenter', () => {
        number.style.transition = 'transform 0.3s ease';
        number.style.transform = 'rotate(360deg) scale(1.1)';
    });

    number.parentElement.addEventListener('mouseleave', () => {
        number.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Form input focus effects
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');

    if (input) {
        input.addEventListener('focus', () => {
            group.querySelector('label').style.color = 'var(--primary-teal)';
        });

        input.addEventListener('blur', () => {
            group.querySelector('label').style.color = 'var(--text-dark)';
        });
    }
});

// Lazy loading images with fade-in effect
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';

            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });

            if (img.complete) {
                img.style.opacity = '1';
            }

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Progress bar on scroll
const createProgressBar = () => {
    const progress = document.createElement('div');
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-teal), var(--accent-coral));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progress.style.width = scrolled + '%';
    });
};

createProgressBar();

// Console branding
console.log('%c AdBoost ', 'background: linear-gradient(135deg, #2dbdb6, #21a7a0); color: white; padding: 12px 24px; font-size: 20px; font-weight: bold;');
console.log('🎯 Primal-style clone loaded successfully');
console.log('💎 Features: Modern B2B design, teal theme, professional interactions');
console.log('📈 Google Ads excellence');

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // ESC closes mobile menu
    if (e.key === 'Escape') {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Track CTA interactions (analytics placeholder)
const ctaButtons = document.querySelectorAll('.btn-coral, .btn-teal-outline');

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA clicked:', button.textContent.trim());
    });
});

// Add animation class to elements when they're in viewport
const addAnimationClass = () => {
    const elements = document.querySelectorAll('.feature-card, .service-item, .result-card');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            element.classList.add('animate-in');
        }
    });
};

window.addEventListener('scroll', addAnimationClass);
window.addEventListener('load', addAnimationClass);

// Service item click tracking
const servicesItems = document.querySelectorAll('.service-item');

servicesItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(`Service clicked: ${item.querySelector('h3').textContent}`);
    });
});
