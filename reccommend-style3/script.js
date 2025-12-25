// ========================================
// ForeToday-Style JavaScript Clone
// Corporate + Professional + Interactive
// ========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Client Logo Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const clientLogos = document.querySelectorAll('.client-logo');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active to clicked button
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');

        // Filter logos
        clientLogos.forEach(logo => {
            const category = logo.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                logo.classList.remove('hidden');
                // Fade in animation
                logo.style.opacity = '0';
                setTimeout(() => {
                    logo.style.transition = 'opacity 0.4s ease';
                    logo.style.opacity = '1';
                }, 50);
            } else {
                logo.classList.add('hidden');
            }
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show success message (in real app, this would send to server)
        alert('Thank you! We will contact you shortly to schedule your free audit.');

        // Reset form
        contactForm.reset();
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
            // Set initial state
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(40px)';

            // Animate in
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animateElements = document.querySelectorAll(
    '.service-card, .benefit-card, .process-step, .faq-item, .definition-text, .definition-image'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// Stagger animation for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Stagger animation for benefit cards
const benefitCards = document.querySelectorAll('.benefit-card');
benefitCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Process step animation with line drawing effect
const processSteps = document.querySelectorAll('.process-step');
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stepNumber = entry.target.querySelector('.step-number');
            const stepContent = entry.target.querySelector('.step-content');

            // Animate step number
            stepNumber.style.opacity = '0';
            stepNumber.style.transform = 'scale(0.5)';

            setTimeout(() => {
                stepNumber.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                stepNumber.style.opacity = '1';
                stepNumber.style.transform = 'scale(1)';
            }, 100);

            // Animate content
            setTimeout(() => {
                stepContent.style.opacity = '0';
                stepContent.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    stepContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    stepContent.style.opacity = '1';
                    stepContent.style.transform = 'translateX(0)';
                }, 100);
            }, 300);

            stepObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

processSteps.forEach(step => {
    stepObserver.observe(step);
});

// Client logo hover effect enhancement
clientLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transition = 'transform 0.3s ease';
        logo.style.transform = 'translateY(-4px)';
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'translateY(0)';
    });
});

// Hero animation on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Parallax effect for hero overlay
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroOverlay = document.querySelector('.hero-overlay');

    if (heroOverlay) {
        heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form input focus effects
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Service card hover enhancement
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-orange)';
    });

    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.borderColor = 'var(--border-gray)';
        }
    });
});

// Add scroll progress indicator for long pages
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-orange), var(--orange-dark));
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// Scroll to top button
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        width: 56px;
        height: 56px;
        background: var(--primary-orange);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 16px rgba(255, 88, 45, 0.3);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px)';
        button.style.boxShadow = '0 8px 24px rgba(255, 88, 45, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 16px rgba(255, 88, 45, 0.3)';
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
};

createScrollTopButton();

// Add loading animation for images
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

            // If image is already loaded
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

// Console branding
console.log('%c GrowthLab ', 'background: linear-gradient(135deg, #FF582D, #F57405); color: white; padding: 12px 24px; font-size: 18px; font-weight: bold;');
console.log('🚀 ForeToday-style clone loaded successfully');
console.log('📊 Features: Corporate design, professional interactions, conversion-focused');
console.log('💼 Built for B2B marketing excellence');

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // ESC key closes active FAQ
    if (e.key === 'Escape') {
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Track CTA button clicks (analytics placeholder)
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-submit');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // In production, send to analytics
        console.log('CTA clicked:', button.textContent.trim());

        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
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

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
