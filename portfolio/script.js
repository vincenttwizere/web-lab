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

// Form Validation and Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');
    
    if (!contactForm) return;

    // Form validation
    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Clear previous errors
        clearErrors();
        
        // Validate name
        if (!name.value.trim()) {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(fieldId + 'Error');
        
        if (field && errorElement) {
            field.classList.add('error');
            errorElement.textContent = message;
        }
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        const errorFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
        
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
    
    function showSuccessMessage() {
        contactForm.style.display = 'none';
        contactSuccess.style.display = 'block';
    }
    
    function resetForm() {
        contactForm.reset();
        clearErrors();
        contactForm.style.display = 'flex';
        contactSuccess.style.display = 'none';
    }
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            setTimeout(() => {
                showSuccessMessage();
            }, 500);
        }
    });
    
    // Send another message button
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', resetForm);
    }
    
    // Real-time validation
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                const errorElement = document.getElementById(this.id + 'Error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            }
        });
    });
}

// Skill Bar Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.setProperty('--target-width', width);
                skillBar.style.width = width;
                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeContactForm();
    initializeSkillBars();
});