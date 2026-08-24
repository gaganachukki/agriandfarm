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
            ease: "power2.out"
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
            ease: "power2.out"
        });
    });

    // Parallax effect on hero background
    if(document.querySelector('.hero-section')) {
        gsap.to(".hero-bg", {
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 100
        });
    }

    // Crop Growth Timeline Animation
    if(document.querySelector('.growth-timeline')) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        gsap.from(timelineItems, {
            scrollTrigger: {
                trigger: ".growth-timeline",
                start: "top 70%"
            },
            x: -30,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6
        });
    }

});
