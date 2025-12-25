// ========================================
// Anga-Style JavaScript Clone
// Modern Interactions & Animations
// ========================================

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navigation scroll effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Portfolio filter
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
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

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
    '.service-card, .number-card, .process-step, .testimonial-card, .portfolio-item'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// Service cards state animation
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.setAttribute('data-state', 'open');
    });

    card.addEventListener('mouseleave', () => {
        card.setAttribute('data-state', 'closed');
    });
});

// Number counter animation
const numberElements = document.querySelectorAll('.stat-number');

const animateNumber = (element, target, duration) => {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    const isMillion = element.textContent.includes('M');

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            if (isPercentage) {
                element.textContent = Math.floor(target) + '%';
            } else if (isMillion) {
                element.textContent = target.toFixed(1) + 'M+';
            } else {
                element.textContent = Math.floor(target) + '+';
            }
            clearInterval(timer);
        } else {
            if (isPercentage) {
                element.textContent = Math.floor(current) + '%';
            } else if (isMillion) {
                element.textContent = current.toFixed(1) + 'M+';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }
    }, 16);
};

// Trigger number animation on scroll
const numbersObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent;
            let target = parseFloat(text);

            if (text.includes('M')) {
                target = parseFloat(text); // Already in millions
            } else if (text.includes('+')) {
                target = parseInt(text);
            } else if (text.includes('%')) {
                target = parseInt(text);
            }

            animateNumber(entry.target, target, 2000);
            numbersObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

numberElements.forEach(element => {
    numbersObserver.observe(element);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-bg-image');

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
    }
});

// Button ripple effect
const buttons = document.querySelectorAll('.btn-gradient, .btn-outline');

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

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top button
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 56px;
        height: 56px;
        background: linear-gradient(266deg, #F21436, #FF5300);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 28px;
        font-weight: 700;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 8px 24px rgba(255, 83, 0, 0.4);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
        button.style.boxShadow = '0 12px 32px rgba(255, 83, 0, 0.5)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
        button.style.boxShadow = '0 8px 24px rgba(255, 83, 0, 0.4)';
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

// Image lazy loading effect
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

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Cursor gradient effect (optional, Anga-style)
let cursorGradient = null;

document.addEventListener('mousemove', (e) => {
    if (!cursorGradient) {
        cursorGradient = document.createElement('div');
        cursorGradient.style.cssText = `
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,83,0,0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(cursorGradient);
    }

    cursorGradient.style.left = (e.clientX - 200) + 'px';
    cursorGradient.style.top = (e.clientY - 200) + 'px';
});

// Console log
console.log('%c DigiFlow Agency ', 'background: linear-gradient(266deg, #F21436, #FF5300); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold;');
console.log('🎨 Anga-style clone loaded successfully');
console.log('✨ Features: Gradient design, smooth animations, modern interactions');
console.log('📱 Fully responsive design');
