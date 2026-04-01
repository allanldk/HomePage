// Show popup after 2 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        showPopup();
    }, 2000);
});

// Show popup function
function showPopup() {
    const popup = document.getElementById('latest-work-popup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('latest-work-popup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close popup when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('latest-work-popup');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
    }
});

// Close popup with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            closePopup(); // Close popup if open
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.bg-gradient');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Cursor trail effect (optional - cool effect)
const createCursorTrail = () => {
    let dots = [];
    const maxDots = 8;
    
    document.addEventListener('mousemove', function(e) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        document.body.appendChild(dot);
        
        dots.push(dot);
        
        if (dots.length > maxDots) {
            const removed = dots.shift();
            removed.remove();
        }
        
        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
        }, 10);
        
        setTimeout(() => {
            dot.remove();
        }, 600);
    });
};

// Add cursor trail CSS
const style = document.createElement('style');
style.textContent = `
    .cursor-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--primary), var(--secondary));
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        transform: scale(1);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;
document.head.appendChild(style);

// Initialize cursor trail (comment out if too much)
// createCursorTrail();

// Add typing effect to hero title
function typeEffect() {
    const element = document.querySelector('.hero-title');
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// Uncomment to enable typing effect
// window.addEventListener('load', typeEffect);

console.log('🚀 Allan Larsen Portfolio - Built with passion');
console.log('💻 Powered by .NET & AI');
