/* -----------------------------------------------------------
   MAIN.JS - Portfolio Leonardo Antuña
   Funciones: Lightbox, Navbar, Scroll, Carousel, Backgrounds
   ----------------------------------------------------------- */

/* --- 1. LIGHTBOX LOGIC (Ámbito Global) --- */
/* Necesario que esté fuera de DOMContentLoaded para ser accesible vía onclick en HTML */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

function openModal(element) {
    if (modal) {
        modal.style.display = "block";
        modalImg.src = element.src;
        // Usa data-caption si existe, sino usa el atributo alt
        captionText.innerHTML = element.getAttribute("data-caption") || element.alt;
        document.body.style.overflow = "hidden"; // Bloquea el scroll
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reactiva el scroll
    }
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


/* --- INICIO LÓGICA DOM --- */
document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 2. NAVBAR TOGGLE (Móvil) --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const icon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Alternar icono hamburguesa / cruz
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });


    /* --- 3. SCROLL ANIMATIONS (Fade In Up) --- */
    const scrollElements = document.querySelectorAll(".scroll-element");

    // Detecta si el elemento entró en pantalla (con offset pequeño para sensación "snappy")
    const elementInView = (el, offset = 50) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 50)) { 
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Ejecutar al inicio para mostrar elementos visibles
    handleScrollAnimation();


    /* --- 4. CAROUSEL LOGIC (Solo en Home) --- */
    const track = document.querySelector('.carousel-track');
    
    if (track) { 
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const carouselContainer = document.querySelector('.carousel-container');

        // Posicionar slides uno al lado del otro
        const slideWidth = slides[0].getBoundingClientRect().width;
        const setSlidePosition = (slide, index) => {
            slide.style.left = `${slideWidth * index}px`;
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = `translateX(-${targetSlide.style.left})`;
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        const advanceSlide = () => {
            const currentSlide = track.querySelector('.current-slide');
            // Bucle infinito: si no hay siguiente, vuelve al primero
            const nextSlide = currentSlide.nextElementSibling || slides[0]; 
            moveToSlide(track, currentSlide, nextSlide);
        };

        // --- Controles Manuales ---
        if (nextButton) {
            nextButton.addEventListener('click', e => {
                advanceSlide();
                resetTimer(); 
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', e => {
                const currentSlide = track.querySelector('.current-slide');
                const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; 
                moveToSlide(track, currentSlide, prevSlide);
                resetTimer();
            });
        }
        
        // --- Auto Play ---
        let slideInterval;
        const autoPlaySpeed = 4000; 

        const startAutoPlay = () => {
            if (!slideInterval) {
                slideInterval = setInterval(advanceSlide, autoPlaySpeed);
            }
        };

        const stopAutoPlay = () => {
            clearInterval(slideInterval);
            slideInterval = null;
        };

        const resetTimer = () => {
            stopAutoPlay();
            startAutoPlay();
        };

        startAutoPlay();

        // Pausar al interactuar
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
            carouselContainer.addEventListener('touchstart', stopAutoPlay);
            carouselContainer.addEventListener('touchend', () => {
                setTimeout(startAutoPlay, 2000);
            });
        }

        // Recalcular posiciones al redimensionar ventana
        window.addEventListener('resize', () => {
            const newSlideWidth = slides[0].getBoundingClientRect().width;
            slides.forEach((slide, index) => {
                slide.style.left = `${newSlideWidth * index}px`;
            });
            const currentSlide = track.querySelector('.current-slide');
            track.style.transform = `translateX(-${currentSlide.style.left})`;
        });
    }


    /* --- 5. BACKGROUND ANIMATIONS MANAGER --- */
    (function() {
        const body = document.body;
        let animationType = 'none';

        // Determinar animación según la clase del body
        if (body.classList.contains('bg-home') || body.classList.contains('bg-acustica')) {
            animationType = 'sine'; // Ondas
        } else if (body.classList.contains('bg-elec')) {
            animationType = 'lissajous'; // Osciloscopio
        } else if (body.classList.contains('bg-dev') || body.classList.contains('bg-cv')) {
            animationType = 'constellation'; // Redes
        } else if (body.classList.contains('bg-tesis')) {
            animationType = 'particles'; // Partículas/Bokeh
        }

        if (animationType === 'none') return;

        // Configuración Canvas
        const canvas = document.createElement('canvas');
        canvas.id = 'particles-canvas';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // --- Animation 1: Sine Waves ---
        function initSineWave() {
            const waves = [
                { y: 0, length: 0.01, amplitude: 50, speed: 0.01, color: 'rgba(56, 189, 248, 0.1)' },
                { y: 0, length: 0.02, amplitude: 30, speed: 0.02, color: 'rgba(16, 185, 129, 0.1)' },
                { y: 0, length: 0.03, amplitude: 20, speed: 0.04, color: 'rgba(251, 191, 36, 0.1)' }
            ];
            let increment = 0;

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, width, height);
                const centerY = height / 2;

                waves.forEach(wave => {
                    ctx.beginPath();
                    for (let i = 0; i < width; i++) {
                        const y = centerY + Math.sin(i * wave.length + increment * wave.speed) * wave.amplitude;
                        ctx.lineTo(i, y);
                    }
                    ctx.strokeStyle = wave.color;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                });
                increment += 1;
            }
            animate();
        }

        // --- Animation 2: Lissajous (Oscilloscope) ---
        function initLissajous() {
            let angleX = 0, angleY = 0;
            const speedX = 0.015, speedY = 0.019;
            
            function animate() {
                requestAnimationFrame(animate);
                ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Efecto estela
                ctx.fillRect(0, 0, width, height);

                const x = (width / 2) + Math.cos(angleX) * (Math.min(width, height) / 3);
                const y = (height / 2) + Math.sin(angleY) * (Math.min(width, height) / 3);

                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(251, 191, 36, 0.8)';
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 0;

                angleX += speedX;
                angleY += speedY;
            }
            animate();
        }

        // --- Animation 3: Constellation (Network) ---
        function initConstellation() {
            let particles = [];
            const particleCount = (width * height) / 15000;

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.size = Math.random() * 2;
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0 || this.x > width) this.vx *= -1;
                    if (this.y < 0 || this.y > height) this.vy *= -1;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(52, 211, 153, 0.3)';
                    ctx.fill();
                }
            }

            for (let i = 0; i < particleCount; i++) particles.push(new Particle());

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, width, height);
                
                particles.forEach((p, index) => {
                    p.update();
                    p.draw();
                    // Dibujar líneas si están cerca
                    for (let j = index; j < particles.length; j++) {
                        const dx = p.x - particles[j].x;
                        const dy = p.y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(52, 211, 153, ${0.1 - distance/1000})`;
                            ctx.lineWidth = 1;
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                });
            }
            animate();
        }

        // --- Animation 4: Particles (Bokeh) ---
        function initParticles() {
            let particles = [];
            const particleCount = 40;

            class Bubble {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = height + Math.random() * 100;
                    this.speed = 0.5 + Math.random();
                    this.radius = Math.random() * 4 + 1;
                    this.opacity = Math.random() * 0.3 + 0.1;
                }
                update() {
                    this.y -= this.speed;
                    if (this.y < -10) {
                        this.y = height + 10;
                        this.x = Math.random() * width;
                    }
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(200, 200, 255, ${this.opacity})`;
                    ctx.fill();
                }
            }

            for (let i = 0; i < particleCount; i++) particles.push(new Bubble());

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
            animate();
        }

        // Selector de animación
        switch (animationType) {
            case 'sine': initSineWave(); break;
            case 'lissajous': initLissajous(); break;
            case 'constellation': initConstellation(); break;
            case 'particles': initParticles(); break;
        }

    })(); // Fin IIFE

}); // Fin DOMContentLoaded