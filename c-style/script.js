// ========================================
// Notion-Style JavaScript
// Subtle, Clean Interactions
// ========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect - Notion style
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.style.boxShadow = 'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animations
const elementsToAnimate = [
    '.stat-card',
    '.service-block',
    '.result-block'
];

elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.background = 'var(--bg-secondary)';
            link.style.color = 'var(--text-primary)';
        }
    });
});

// Counter animation for result metrics (Notion-style)
const animateValue = (element, start, end, duration, suffix = '') => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = end + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

// Trigger counter animation when result section is visible
const resultObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValues = entry.target.querySelectorAll('.metric-value');
            metricValues.forEach(metric => {
                const text = metric.textContent;
                if (text.includes('+') && text.includes('%')) {
                    metric.textContent = '0%';
                    animateValue(metric, 0, 100, 2000, '%');
                }
            });
            resultObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const resultsSection = document.querySelector('.results');
if (resultsSection) {
    resultObserver.observe(resultsSection);
}

// Button click handlers
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add subtle scale animation on click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);

        console.log('Button clicked:', this.textContent);
    });
});

// Service card interactions - Notion style
document.querySelectorAll('.service-block').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Result card interactions - Notion style
document.querySelectorAll('.result-block').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Stat card interactions
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support (Notion-style)
document.addEventListener('keydown', (e) => {
    // ESC key to blur focused elements
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Add transition styles to buttons
document.querySelectorAll('button').forEach(button => {
    button.style.transition = 'all 0.15s ease';
});

// Log successful load
console.log('✨ Notion-style website loaded successfully');
console.log('🎨 Blue-Black theme activated');
