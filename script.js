// ============================================
// NUESTRO PEQUEÑO MUNDO - LÓGICA PRINCIPAL
// ============================================

// CONFIGURACIÓN
const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    musicUrl: 'https://cdn.pixabay.com/audio/2022/03/15/audio_4d3c1e4c5c.mp3',
    musicTitle: 'Nuestra Canción',
    galleryImages: [
        // ⚠️ REEMPLAZA ESTAS URLs CON TUS FOTOS
        // Sube tus fotos a https://imgur.com y pega los links aquí
        {
            url: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600',
            title: 'Nuestro primer encuentro',
            date: '12 de Abril, 2026',
            description: 'El día que todo comenzó'
        },
        {
            url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600',
            title: 'Aventura juntos',
            date: 'Un día especial',
            description: 'Cada momento a tu lado es único'
        },
        {
            url: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600',
            title: 'Miradas que hablan',
            date: 'Para siempre',
            description: 'Tus ojos son mi lugar favorito'
        },
        {
            url: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600',
            title: 'Atardecer romántico',
            date: 'Un momento mágico',
            description: 'Contigo el tiempo se detiene'
        },
        {
            url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600',
            title: 'Risas compartidas',
            date: 'Cada día juntos',
            description: 'Tu sonrisa ilumina mi vida'
        },
        {
            url: 'https://images.unsplash.com/photo-1522098635833-216c03d80129?w=600',
            title: 'Caminos recorridos',
            date: 'Siempre a tu lado',
            description: 'No importa el destino, sino la compañía'
        }
    ],
    letterText: [
        'Mi amor,',
        'No sé cómo empezar a expresar todo lo que siento por ti. Cada día a tu lado es un regalo que atesoro en lo más profundo de mi corazón.',
        'Desde aquel 12 de abril, mi vida cambió por completo. Tú me has enseñado lo que significa amar de verdad, y cada momento juntos se ha convertido en un recuerdo invaluable.',
        'Gracias por ser mi luz en los días oscuros, por tu paciencia infinita, por tu sonrisa que ilumina mi mundo, y por amarme como nadie más lo ha hecho.',
        'Eres mi mejor amiga, mi confidente, mi amor, mi todo. Contigo he descubierto que el amor verdadero existe, y quiero pasar el resto de mis días demostrándotelo.',
        'Esta página es solo una pequeña muestra de todo lo que siento. Espero que cada vez que la veas, recuerdes lo especial que eres para mí y lo mucho que te amo.',
        'Te amaré hoy, mañana y siempre.',
        'Con todo mi corazón,',
        'Tu amor eterno ❤️'
    ],
    loaderMessages: [
        'Preparando algo especial para ti...',
        'Cargando recuerdos hermosos...',
        'Ajustando los detalles del amor...',
        'Iluminando nuestro mundo...',
        'Casi listo para ti...',
        'El amor se está manifestando...'
    ]
};

// ============================================
// LOADER
// ============================================

let loaderProgress = 0;
const loaderMessages = CONFIG.loaderMessages;
let currentMessageIndex = 0;

function updateLoaderMessage() {
    const messageEl = document.getElementById('loaderMessage');
    if (currentMessageIndex < loaderMessages.length) {
        messageEl.textContent = loaderMessages[currentMessageIndex];
        currentMessageIndex++;
    }
}

function simulateLoader() {
    const bar = document.getElementById('loaderBar');
    const percent = document.getElementById('loaderPercent');
    const interval = setInterval(() => {
        loaderProgress += Math.random() * 8 + 2;
        if (loaderProgress >= 100) {
            loaderProgress = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    showWelcomeScreen();
                }, 1000);
            }, 500);
        }
        bar.style.width = loaderProgress + '%';
        percent.textContent = Math.floor(loaderProgress) + '%';
        
        if (loaderProgress > (currentMessageIndex * (100 / loaderMessages.length))) {
            updateLoaderMessage();
        }
    }, 200);
}

// ============================================
// WELCOME SCREEN
// ============================================

function showWelcomeScreen() {
    document.getElementById('welcomeScreen').classList.remove('hidden');
}

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('button, a, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// ============================================
// PARTICLES BACKGROUND
// ============================================

const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 179, 209, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    // Conectar partículas cercanas
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 179, 209, ${0.1 * (1 - dist/100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ============================================
// PARALLAX EFFECT
// ============================================

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.light').forEach((light, i) => {
        const factor = (i + 1) * 0.5;
        light.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ============================================
// COUNTER
// ============================================

function updateCounter() {
    const now = new Date();
    const diff = now - CONFIG.startDate;
    
    if (diff < 0) {
        document.getElementById('years').textContent = '0';
        document.getElementById('months').textContent = '0';
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

// ============================================
// START BUTTON
// ============================================

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('navigation').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
    
    // Iniciar música
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
    audio.play().then(() => {
        document.getElementById('playBtn').textContent = '⏸';
        document.getElementById('musicVisualizer').classList.add('playing');
    }).catch(err => console.log('Autoplay bloqueado:', err));
    
    // Iniciar animaciones
    initHeartAnimations();
    initGallery();
    initLetter();
});

// ============================================
// MUSIC PLAYER
// ============================================

const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeBtn = document.getElementById('volumeBtn');
const musicVisualizer = document.getElementById('musicVisualizer');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
        musicVisualizer.classList.add('playing');
    } else {
        audio.pause();
        playBtn.textContent = '▶';
        musicVisualizer.classList.remove('playing');
    }
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    volumeBtn.textContent = audio.volume === 0 ? '🔇' : audio.volume < 0.5 ? '🔉' : '🔊';
});

volumeBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeSlider.value = 0;
        volumeBtn.textContent = '🔇';
    } else {
        audio.volume = 0.5;
        volumeSlider.value = 50;
        volumeBtn.textContent = '🔊';
    }
});

// ============================================
// HEART ANIMATION
// ============================================

function initHeartAnimations() {
    const heart = document.getElementById('mainHeart');
    const colors = ['#ff6b9d', '#c8a8e9', '#ffb3d1', '#d4af37', '#ff4081'];
    let colorIndex = 0;
    
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        heart.querySelector('path').style.fill = colors[colorIndex];
    }, 2000);
    
    // Reacción al mouse
    document.getElementById('heartContainer').addEventListener('mousemove', (e) => {
        const rect = heart.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width/2) / rect.width;
        const y = (e.clientY - rect.top - rect.height/2) / rect.height;
        heart.style.transform = `scale(1.1) translate(${x*10}px, ${y*10}px)`;
    });
    
    document.getElementById('heartContainer').addEventListener('mouseleave', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Toques móviles
    document.getElementById('heartContainer').addEventListener('touchstart', (e) => {
        heart.style.transform = 'scale(1.2)';
        createHeartParticle(e.touches[0].clientX, e.touches[0].clientY);
    });
    
    document.getElementById('heartContainer').addEventListener('touchend', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Generar partículas del corazón
    setInterval(() => {
        const heartContainer = document.getElementById('heartContainer');
        if (!heartContainer) return;
        const rect = heartContainer.getBoundingClientRect();
        createHeartParticle(
            rect.left + rect.width/2 + (Math.random()-0.5)*60,
            rect.top + rect.height/2 + (Math.random()-0.5)*60
        );
    }, 800);
}

function createHeartParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.innerHTML = '❤';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--tx', (Math.random()-0.5)*100 + 'px');
    particle.style.setProperty('--ty', -50 - Math.random()*50 + 'px');
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
}

// ============================================
// GALLERY
// ============================================

function initGallery() {
    const grid = document.getElementById('galleryGrid');
    CONFIG.galleryImages.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3>${img.title}</h3>
                <p>${img.date}</p>
            </div>
        `;
        item.addEventListener('click', () => openLightbox(i));
        grid.appendChild(item);
    });
}

let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function updateLightbox() {
    const img = CONFIG.galleryImages[currentLightboxIndex];
    document.getElementById('lightboxImg').src = img.url;
    document.getElementById('lightboxTitle').textContent = img.title;
    document.getElementById('lightboxDate').textContent = img.date;
    document.getElementById('lightboxDescription').textContent = img.description;
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length;
    updateLightbox();
});
document.getElementById('lightboxNext').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.galleryImages.length;
    updateLightbox();
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// ============================================
// LETTER ANIMATION
// ============================================

function initLetter() {
    const content = document.getElementById('letterContent');
    CONFIG.letterText.forEach((text, i) => {
        const p = document.createElement('p');
        if (i === 0 || i === CONFIG.letterText.length - 1) p.className = 'signature';
        p.textContent = text;
        p.style.animationDelay = (i * 0.5) + 's';
        content.appendChild(p);
    });
}

// ============================================
// NAVIGATION
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const navIndicator = document.getElementById('navIndicator');

function updateNavIndicator(link) {
    const rect = link.getBoundingClientRect();
    const navRect = link.parentElement.parentElement.getBoundingClientRect();
    navIndicator.style.width = rect.width + 'px';
    navIndicator.style.transform = `translateX(${rect.left - navRect.left - 8}px)`;
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Actualizar nav al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) {
            link.classList.add('active');
            updateNavIndicator(link);
        }
    });
});

// ============================================
// CLICK EFFECTS
// ============================================

document.addEventListener('click', (e) => {
    const effects = ['❤', '✨', '💖', '💕', '⭐'];
    for (let i = 0; i < 3; i++) {
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.textContent = effects[Math.floor(Math.random() * effects.length)];
        effect.style.left = (e.clientX + (Math.random()-0.5)*30) + 'px';
        effect.style.top = (e.clientY + (Math.random()-0.5)*30) + 'px';
        effect.style.color = `hsl(${Math.random()*60 + 320}, 100%, 70%)`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1000);
    }
});

// ============================================
// SCROLL REVEAL
// ============================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-title, .section-subtitle, .counter-container, .heart-container, .gallery-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ============================================
// INICIALIZAR
// ============================================

window.addEventListener('load', () => {
    setTimeout(simulateLoader, 500);
});
