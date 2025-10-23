// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const header = document.getElementById('header');

// Toggle mobile menu
function toggleMenu() {
    try {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
        // Accessibility
        const isExpanded = navbar.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    } catch (error) {
        console.error('Error toggling menu:', error);
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navbar.classList.contains('active')) {
        toggleMenu();
    }
});

// Setup event listeners
function initializeNavigation() {
    try {
        // Menu toggle
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu after clicking
                    if (navbar.classList.contains('active')) {
                        toggleMenu();
                    }
                }
            });
        });

        // Add active state to nav links on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

    } catch (error) {
        console.error('Error initializing navigation:', error);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);