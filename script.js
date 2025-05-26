document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Designer Slider
    const designerSlider = document.querySelector('.designer-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % designerSlider.children.length;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + designerSlider.children.length) % designerSlider.children.length;
        updateSlider();
    });
    
    function updateSlider() {
        const slideWidth = designerSlider.children[0].offsetWidth + 30; // including margin
        designerSlider.scrollTo({
            left: currentSlide * slideWidth,
            behavior: 'smooth'
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'var(--white)';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
});