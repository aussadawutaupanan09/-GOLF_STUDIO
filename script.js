document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle contact form submission (simulated for front-end only)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

  

    // Optional: Add a simple animation on scroll (e.g., fade-in elements)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in to sections and cards
    document.querySelectorAll('section, .code-card, .product-card').forEach(el => {
        el.classList.add('fade-in-on-scroll'); // Add a class for CSS transition
        observer.observe(el);
    });
});

//สภาพอากาศ//
