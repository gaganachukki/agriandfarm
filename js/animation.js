document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load animations
    const tl = gsap.timeline();
    
    // Hero Text Reveal
    if(document.querySelector('.hero-content')) {
        tl.from(".hero-content h1", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".hero-content p", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4")
        .from(".hero-content .hero-buttons", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3");
    }

    // Floating dashboard cards entrance
    if(document.querySelector('.hero-visual')) {
        tl.from(".floating-card", {
            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.8");
    }

    // Scroll-triggered animations for sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform, opacity"
        });
    });

    // Staggered Cards (e.g. features, crops)
    const cardGrids = document.querySelectorAll('.stagger-grid');
    cardGrids.forEach(grid => {
        const cards = grid.querySelectorAll('.card');
        gsap.from(cards, {
            scrollTrigger: {
                trigger: grid,
                start: "top 85%"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "transform, opacity"
        });
    });

    // Stats counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power1.inOut"
                });
            }
        });
    });

    // GSAP Hover for .hover-lift to avoid CSS transition conflicts
    const hoverCards = document.querySelectorAll('.hover-lift');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, {y: -5, duration: 0.3, ease: 'power1.out'}));
        card.addEventListener('mouseleave', () => gsap.to(card, {y: 0, duration: 0.3, ease: 'power1.out'}));
    });
    
    // Particle Animation
    if(document.getElementById('hero-particles')) {
        // Safe check if tsParticles is loaded
        if (typeof tsParticles !== 'undefined') {
            tsParticles.load('hero-particles', {
                fpsLimit: 60,
                particles: {
                    color: { value: '#A5D6A7' },
                    links: { enable: true, color: '#A5D6A7', distance: 150, opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, outModes: 'out' },
                    number: { density: { enable: true, area: 800 }, value: 60 },
                    opacity: { value: 0.5 },
                    shape: { type: 'circle' },
                    size: { value: { min: 1, max: 3 } }
                },
                detectRetina: true
            });
        }
    }

    // GSAP Parallax Layers
    if(document.querySelector('.parallax-container')) {
        gsap.to('.pl-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
        gsap.to('.pl-fg', {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
        gsap.from('.mask-reveal span', {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top 60%'
            }
        });
    }

    // 3D Flip Cards (Crops page etc.)
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        gsap.from(card, {
            rotationY: 90,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            }
        });
    });

    // Horizontal Marquee (Blog)
    const marquee = document.querySelector('.marquee-content');
    if(marquee) {
        gsap.to(marquee, {
            xPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.marquee-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

});
