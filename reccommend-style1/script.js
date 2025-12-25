// ========================================
// Apple Fusion - Ultimate JavaScript
// Combining Best Interactions from All 5 Clones
// ========================================

// Apple: Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 44;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Apple: Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.72)';
    }

    lastScroll = currentScroll;
});

// Anga: Counter animation for metrics
const animateCounter = (element, target, duration, suffix = '') => {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target) + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

// Trigger counter animation when metrics section is visible
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricNumbers = entry.target.querySelectorAll('.metric-number');
            metricNumbers.forEach(number => {
                const target = parseInt(number.getAttribute('data-target'));
                const suffix = target === 98 ? '%' : '+';
                animateCounter(number, target, 2000, suffix);
            });
            metricsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const metricsSection = document.querySelector('.metrics');
if (metricsSection) {
    metricsObserver.observe(metricsSection);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const elementsToAnimate = document.querySelectorAll(
    '.service-card, .portfolio-item, .testimonial-card, .stat-large'
);

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Anga: Portfolio filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active to clicked
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');

        // Filter items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.classList.remove('hidden');
                // Fade in animation
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.transition = 'opacity 0.4s ease';
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ForeToday: FAQ Accordion
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

// Anga: Scroll to top button
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

// Apple: Parallax effect for images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }

    const performanceImage = document.querySelector('.performance-image');
    if (performanceImage && isInViewport(performanceImage)) {
        const elementTop = performanceImage.getBoundingClientRect().top;
        const parallaxSpeed = 0.05;
        performanceImage.style.transform = `translateY(${elementTop * parallaxSpeed}px)`;
    }
});

// Helper function
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Primal: Service number rotation on hover
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    const number = card.querySelector('.service-number');

    card.addEventListener('mouseenter', () => {
        if (number) {
            number.style.transition = 'transform 0.5s ease';
            number.style.transform = 'rotate(360deg) scale(1.1)';
        }
    });

    card.addEventListener('mouseleave', () => {
        if (number) {
            number.style.transform = 'rotate(0deg) scale(1)';
        }
    });
});

// Blupaper: Chat widget functionality
const chatWidget = document.getElementById('chatWidget');
const chatBubble = chatWidget?.querySelector('.chat-bubble');

if (chatBubble) {
    // Show chat widget after delay
    setTimeout(() => {
        chatWidget.style.opacity = '0';
        chatWidget.style.visibility = 'visible';
        chatWidget.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            chatWidget.style.opacity = '1';
        }, 100);
    }, 10000); // Show after 10 seconds

    chatBubble.addEventListener('click', () => {
        alert('Chat feature would open here!\n\nConnect via:\n• Live Chat\n• Email: hello@novatech.com\n• Phone: +1 (234) 567-8900');
    });

    // Pulse animation
    setInterval(() => {
        chatBubble.style.animation = 'pulse 1s ease';
        setTimeout(() => {
            chatBubble.style.animation = '';
        }, 1000);
    }, 5000);
}

// Apple: Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth hover effects for cards
document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Button hover effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Process step animation with pulse effect
const processSteps = document.querySelectorAll('.process-step');

const processObserver = new IntersectionObserver((entries) => {
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

            processObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

processSteps.forEach(step => {
    processObserver.observe(step);
});

// Stagger animation for service cards
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger animation for portfolio items
portfolioItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.08}s`;
});

// Testimonial card hover enhancement
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Portfolio metrics animation
const portfolioMetrics = document.querySelectorAll('.portfolio-metrics');

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValues = entry.target.querySelectorAll('.metric-value');
            metricValues.forEach((value, index) => {
                value.style.opacity = '0';
                value.style.transform = 'scale(0.5)';

                setTimeout(() => {
                    value.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    value.style.opacity = '1';
                    value.style.transform = 'scale(1)';
                }, index * 150);
            });
            portfolioObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

portfolioMetrics.forEach(metric => {
    portfolioObserver.observe(metric);
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // ESC key closes active FAQ
    if (e.key === 'Escape') {
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
        document.activeElement.blur();
    }
});

// Button ripple effect
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(button => {
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
`;
document.head.appendChild(style);

// Lazy loading images
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
        height: 3px;
        background: linear-gradient(90deg, #0073FF, #A886CD);
        z-index: 10000;
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

// Gradient text color shift on scroll
const gradientTexts = document.querySelectorAll('.gradient-text');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxScroll) * 100;

    gradientTexts.forEach(text => {
        // Subtle gradient shift based on scroll
        const hue = 200 + (scrollPercent * 0.5);
        text.style.background = `linear-gradient(107deg, hsl(${hue}, 100%, 50%), hsl(${hue + 40}, 60%, 70%))`;
        text.style.webkitBackgroundClip = 'text';
        text.style.backgroundClip = 'text';
    });
});

// Console branding
console.log('%c NovaTech Fusion ', 'background: linear-gradient(107deg, #0073FF, #A886CD); color: white; padding: 12px 24px; font-size: 20px; font-weight: bold;');
console.log('🍎 Apple design foundation');
console.log('🎨 Blupaper gradient magic');
console.log('🚀 Anga creative animations');
console.log('💎 Primal modern elements');
console.log('📊 ForeToday professional features');
console.log('✨ The ultimate fusion of excellence');

// Track interactions (analytics placeholder)
const trackInteraction = (type, detail) => {
    console.log(`Interaction: ${type}`, detail);
};

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackInteraction('CTA Click', btn.textContent.trim());
    });
});

// Track portfolio filters
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        trackInteraction('Portfolio Filter', btn.getAttribute('data-filter'));
    });
});

// Track FAQ interactions
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question h3');
    item.addEventListener('click', () => {
        trackInteraction('FAQ Toggle', question.textContent);
    });
});

// Add animation class to elements when they're in viewport
const addAnimationClass = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');

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

// Hamburger menu (mobile)
const hamburger = document.getElementById('hamburger');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        // Mobile menu logic would go here
    });
}
