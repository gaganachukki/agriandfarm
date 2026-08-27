// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelectorAll('.nav-actions .btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navActions.forEach(btn => btn.classList.toggle('active-mobile'));
            
            // Prevent background scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            
            // Toggle hamburger to closing tag (X)
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('fa-bars');
                mobileMenuBtn.classList.add('fa-times');
            } else {
                mobileMenuBtn.classList.remove('fa-times');
                mobileMenuBtn.classList.add('fa-bars');
            }
        });
        
        // Also close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('fa-times');
                mobileMenuBtn.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    // Active Navigation Highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const answer = faq.querySelector('.faq-answer');
                    if(answer) answer.style.maxHeight = null;
                });
                
                // Open clicked
                if (!isActive) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    if(answer) answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        }
    });

    // Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for counters
    const observerOptions = { threshold: 0.5 };
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const counterSection = document.querySelector('.statistics-section');
    if (counterSection) counterObserver.observe(counterSection);

});

    // Scroll to top
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
