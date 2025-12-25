// ========================================
// Blupaper-Style JavaScript Clone
// Modern + Playful + Interactive
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

            // Close mobile menu if open
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

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
}

// Counter animation for metrics
const animateCounter = (element, target, duration) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
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
                animateCounter(number, target, 2000);
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
    '.service-card, .case-card, .testimonial-card, .blog-card'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// Stagger animations for grids
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.08}s`;
});

const caseCards = document.querySelectorAll('.case-card');
caseCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
});

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
});

// Hero animation on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(40px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Parallax effect for hero ellipses
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const ellipse1 = document.querySelector('.ellipse-1');
    const ellipse2 = document.querySelector('.ellipse-2');

    if (ellipse1) {
        ellipse1.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.2}px)`;
    }

    if (ellipse2) {
        ellipse2.style.transform = `translate(-${scrolled * 0.15}px, -${scrolled * 0.1}px)`;
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#e5e7eb';
            }
        });

        if (isValid) {
            // Show success message
            alert('Thank you! We will contact you shortly.');

            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Remove error styling on input
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#e5e7eb';
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#0073FF';
        });
    });
}

// Chat widget functionality
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
        // In production, this would open a chat interface
        alert('Chat feature would open here! Connect via:\n\n• Facebook Messenger\n• Line\n• Phone: +1 (234) 567-8900');
    });

    // Pulse animation
    setInterval(() => {
        chatBubble.style.animation = 'pulse 1s ease';
        setTimeout(() => {
            chatBubble.style.animation = '';
        }, 1000);
    }, 5000);
}

// Service card click tracking
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h3').textContent;
        console.log('Service clicked:', serviceName);
    });
});

// Blog card click tracking
blogCards.forEach(card => {
    const link = card.querySelector('.blog-link');
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blogTitle = card.querySelector('h3').textContent;
            console.log('Blog clicked:', blogTitle);
            // In production, navigate to blog post
        });
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
    }

    lastScroll = currentScroll;
});

// Testimonial card hover effect
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Case study metrics animation
const caseMetrics = document.querySelectorAll('.case-metric');

const caseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValue = entry.target.querySelector('.metric-value');
            if (metricValue) {
                metricValue.style.opacity = '0';
                metricValue.style.transform = 'scale(0.5)';

                setTimeout(() => {
                    metricValue.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    metricValue.style.opacity = '1';
                    metricValue.style.transform = 'scale(1)';
                }, 200);
            }
            caseObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

caseMetrics.forEach(metric => {
    caseObserver.observe(metric);
});

// Button ripple effect
const buttons = document.querySelectorAll('.btn-primary');

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

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

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

// Section title gradient animation
const sectionTitles = document.querySelectorAll('.section-title.gradient-text');

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 200);

            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    titleObserver.observe(title);
});

// Progress bar on scroll
const createProgressBar = () => {
    const progress = document.createElement('div');
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #0073FF, #A886CD);
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
console.log('%c BluWave ', 'background: linear-gradient(107deg, #0073FF, #A886CD); color: white; padding: 12px 24px; font-size: 20px; font-weight: bold;');
console.log('💙 Blupaper-style clone loaded successfully');
console.log('🎨 Features: Gradient text, category colors, playful design');
console.log('📱 Responsive and interactive');

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

// Track CTA interactions
const ctaButtons = document.querySelectorAll('.btn-primary');

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA clicked:', button.textContent.trim());
    });
});

// Service icon animation on hover
serviceCards.forEach(card => {
    const icon = card.querySelector('.service-icon');

    card.addEventListener('mouseenter', () => {
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });

    card.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add animation class to elements when they're in viewport
const addAnimationClass = () => {
    const elements = document.querySelectorAll('.service-card, .case-card, .blog-card');

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

// Form field focus animation
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');

    if (input) {
        input.addEventListener('focus', () => {
            group.style.transform = 'translateY(-2px)';
            group.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', () => {
            group.style.transform = 'translateY(0)';
        });
    }
});
