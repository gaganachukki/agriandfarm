
    // Particle Animation
    if(document.getElementById('hero-particles')) {
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
