// ============================================
// NUESTRO PEQUEÑO MUNDO - LÓGICA v2.0
// Para Alisson - Con todo mi amor
// ============================================

// ============================================
// CONFIGURACIÓN
// ============================================

const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    birthdayDate: new Date('2026-08-26T00:00:00'),
    musicUrl: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
    musicTitle: 'Colgando en tus manos',
    musicArtist: 'Carlos Baute & Marta Sánchez',
    
    galleryImages: [
        {
            url: 'https://i.imgur.com/SMMGWu9.jpg',
            title: 'Nuestro primer momento',
            date: 'Recuerdo especial',
            description: 'Uno de los momentos que guardo en mi corazón'
        },
        {
            url: 'https://i.imgur.com/EuSVvfJ.jpg',
            title: 'Juntos siempre',
            date: 'A tu lado',
            description: 'Cada momento contigo es único'
        },
        {
            url: 'https://i.imgur.com/7AH5MaT.jpg',
            title: 'Mi persona favorita',
            date: 'Para siempre',
            description: 'Contigo todo es mejor'
        },
        {
            url: 'https://i.imgur.com/thv7LGX.jpg',
            title: 'Nuestra historia',
            date: 'Cada día',
            description: 'Construyendo recuerdos juntos'
        },
        {
            url: 'https://i.imgur.com/LRY1iG6.jpg',
            title: 'Mi amor',
            date: 'Te amo',
            description: 'La mujer más hermosa del mundo'
        },
        {
            url: 'https://i.imgur.com/q8c7kFk.jpg',
            title: 'Sonrisas que enamoran',
            date: 'Tu sonrisa',
            description: 'Tu sonrisa ilumina mi vida'
        },
        {
            url: 'https://i.imgur.com/BHgx73N.jpg',
            title: 'Aventuras',
            date: 'A tu lado',
            description: 'No importa dónde, sino con quién'
        },
        {
            url: 'https://i.imgur.com/7yL8zXZ.jpg',
            title: 'Mi niña',
            date: 'Siempre',
            description: 'Mi lugar favorito es a tu lado'
        },
        {
            url: 'https://i.imgur.com/nAd02cU.jpg',
            title: 'Recuerdos hermosos',
            date: 'Para atesorar',
            description: 'Momentos que durarán para siempre'
        },
        {
            url: 'https://i.imgur.com/x0kP7iI.jpg',
            title: 'Mi vida',
            date: 'Mi elección',
            description: 'Te elegiría una y mil veces'
        },
        {
            url: 'https://i.imgur.com/lqQtIHe.jpg',
            title: 'Nuestro amor',
            date: 'Eterno',
            description: 'Un amor que crece cada día'
        }
    ],
    
    letterText: [
        'Mi niña,',
        'Hay personas que llegan a nuestra vida sin hacer ruido, y poco a poco terminan convirtiéndose en todo. Tú hiciste exactamente eso conmigo.',
        'A veces me pongo a pensar en todo lo que tuvo que pasar para que hoy estemos aquí. Pienso en aquel 2023, cuando hablamos por primera vez gracias a Masha. En ese momento jamás imaginé que algún día serías la mujer que más amo en el mundo.',
        'Después llegó aquel 15 años donde me invitaron a ser chambelán y tú eras mi compañera de baile. Todavía me da risa recordar que yo no sabía bailar casi nada, pero de alguna manera todo era más fácil cuando estaba contigo.',
        'Cuando te vi por primera vez pensé que eras una muchacha muy bonita. Te veías un poco introvertida, y sin darme cuenta lo único que quería era conocerte más. Lo que nunca imaginé era que, mientras pasaban los días, iba a enamorarme de la forma tan especial en la que me tratabas.',
        'Sin hacer grandes cosas, con cada conversación, con cada risa y con cada momento, fuiste ocupando un lugar en mi corazón que nadie más había ocupado.',
        'Hubo un momento en el que me descubrí diciéndome a mí mismo: "Quiero que ella sea mi primer y única novia". Nunca había sentido algo así por nadie. Y conforme seguíamos hablando, entendí que no era un simple gusto.',
        'Estaba enamorado de ti. Enamorado de tu personalidad, de tus metas, de tu forma de cuidar a las personas, de la manera en que eres capaz de hacerme sentir amado sin siquiera darte cuenta.',
        'El domingo 12 de abril de 2026 cambió mi vida para siempre. Ese día no solo conseguí una novia; encontré a la persona con la que quiero compartir cada uno de mis días.',
        'Desde entonces entendí que amar también significa elegir a alguien todos los días, incluso cuando la vida se pone difícil. Y si me preguntaran mil veces a quién volvería a elegir, mi respuesta siempre sería la misma: a ti.',
        'Gracias por quedarte.',
        'Gracias por cada "Amor", por cada "Ti amo", por cada "mi niño", por cada foto que me mandas solo para mí, por ponerme de fondo de pantalla, por escribir mi nombre con un corazón, por intentar responderme lo más rápido posible, por abrazarme, por cuidarme, por hacerme sentir importante.',
        'Tal vez para otras personas sean detalles pequeños, pero para mí significan el mundo entero.',
        'Hay algo que quiero que nunca olvides: gracias a ti soy una mejor versión de mí mismo.',
        'Tú me has enseñado a amar con paciencia, a pensar en alguien antes que en mí, a cuidar mis palabras, a valorar mucho más los momentos simples y a entender que la felicidad no siempre está en los lugares, sino en la persona con la que compartes esos lugares.',
        'Gracias a ti he aprendido que un día normal puede convertirse en el mejor de todos solo porque estás conmigo.',
        'Cuando no estamos juntos te extraño muchísimo. A veces voy caminando por cualquier lugar y automáticamente pienso en cómo sería recorrer ese mismo sitio de tu mano.',
        'Me imagino abrazándote, escuchándote hablar, viendo cómo sonríes mientras intentas esconder tu cara porque te da pena cuando yo comienzo a darte muchos besos. Me imagino escuchando cuando dices que algo "es muy mono" o cuando, aunque hayas dormido bien, me dices que tienes sueño.',
        'Son esas pequeñas cosas las que hacen que te ame todavía más.',
        'Me encanta cuando me gritas "Amoor", cuando jugamos a que tú mandas porque dices que tienes más fuerza que yo, cuando jugamos Crash Team Racing, cuando vemos películas, cuando caminamos juntos, cuando hacemos el payaso sacándonos la lengua, cuando nos juzgamos con la mirada o cuando simplemente nos quedamos abrazados sin necesidad de decir nada.',
        'Esos momentos son los que algún día quiero recordar siendo viejitos contigo.',
        'También quiero agradecerte por estar a mi lado incluso cuando hemos tenido diferencias. Nunca hemos dejado que un problema sea más grande que el amor que sentimos. Siempre terminamos hablando, escuchándonos y recordándonos que nos amamos de verdad.',
        'Eso me hace sentir que nuestro amor es fuerte y que vale la pena luchar por él todos los días.',
        'No voy a decirte que soy perfecto, porque no lo soy. De hecho, uno de mis mayores miedos es cometer un error que pueda hacerte daño.',
        'Pero sí puedo prometerte algo: jamás dejaré de esforzarme por ser un mejor novio para ti. Siempre voy a escuchar cuando necesites hablar, voy a celebrar tus logros como si fueran míos, voy a apoyarte cuando las cosas se pongan difíciles y voy a caminar a tu lado tanto en los días felices como en los complicados.',
        'Quiero construir un futuro contigo. Quiero verte cumplir tu sueño de convertirte en odontóloga mientras yo lucho por alcanzar el mío.',
        'Quiero viajar contigo, conocer playas, montañas y todos los lugares que podamos. Quiero que algún día tengamos nuestro hogar, reírnos de cualquier tontería, cocinar juntos, abrazarte al despertar y seguir eligiéndote todos los días.',
        'Y sí, también sueño con formar una familia contigo. Sueño con ver correr por la casa a nuestros hijos, con enseñarles lo que significa amar de verdad y con que siempre sepan que sus papás se eligieron cada día de su vida.',
        'Porque ese es el futuro que imagino cuando pienso en ti.',
        'Dicen que encontrar a la persona correcta cambia la vida. Yo no solo lo creo; lo vivo todos los días desde que llegaste a la mía.',
        'Eres mi mejor elección.',
        'No importa de dónde vengamos, ni los problemas que aparezcan, ni el tiempo que pase. Mientras sea contigo, siempre sentiré que estoy exactamente donde debo estar.',
        'Y si algún día dudas de cuánto te amo, recuerda esto:',
        'Te amo muchísimo con montones. ❣️',
        'Te amo de aquí a la Luna🌕 a pasito de tortuga🐢, de la Luna🌕 al Sol☀️ a pasito de caracol🐌 y del Sol☀️ al mar🌊 a pasito de calamar🐙. ❣️',
        'Y aunque ese viaje terminara, yo seguiría buscando una nueva forma de medir todo lo que siento por ti, porque no existe una distancia lo suficientemente grande para explicar cuánto te amo.',
        'Gracias por convertirte en mi hogar, en mi tranquilidad, en mi lugar favorito y en el amor más bonito que he conocido.',
        'Gracias por existir.',
        'Con todo mi corazón que te ama, hoy, mañana y siempre,',
        'Tu niño de silicona ❤️'
    ],
    
    reasons: [
        'Tu sonrisa que ilumina mis días',
        'La forma en que dices "Amoor"',
        'Tu amor por el queso',
        'Cómo te ves cuando duermes',
        'Tu risa contagiosa',
        'Lo hermosa que eres por dentro y por fuera',
        'Cómo me cuidas sin darte cuenta',
        'Tus mensajes de "buenos días"',
        'Que siempre intentas responderme rápido',
        'Lo bien que bailas',
        'Tu personalidad única',
        'Que me pusiste de fondo de pantalla',
        'Cómo escribes mi nombre con corazón',
        'Tu valentía para elegir odontología',
        'Lo detallista que eres conmigo',
        'Tus abrazos que curan todo',
        'La forma en que me dices "mi niño"',
        'Tu pasión por tus sueños',
        'Que eres tú, simplemente tú',
        'Lo mucho que te amo, mi niña',
        'Y 80 razones más que no caben aquí... ❤️'
    ],
    
    quizQuestions: [
        {
            question: '¿Cuál es mi apodo favorito para ti?',
            options: ['Chuky', 'Princesa', 'Bebé', 'Reina'],
            correct: 0,
            hint: 'Es el que más uso siempre 💕'
        },
        {
            question: '¿Qué fue lo primero que hablamos en 2023?',
            options: ['Por Facebook', 'Por Masha', 'En persona', 'Por WhatsApp'],
            correct: 1,
            hint: 'Una persona nos presentó 👀'
        },
        {
            question: '¿En qué evento especial bailamos juntos?',
            options: ['Mi graduación', 'Tus 15 años', 'Una fiesta', 'En la calle'],
            correct: 1,
            hint: 'Fue un momento muy especial 💃'
        },
        {
            question: '¿Cuándo empezamos a ser novios?',
            options: ['12 de Abril, 2026', '15 de Marzo, 2026', '26 de Agosto, 2025', '14 de Febrero, 2026'],
            correct: 0,
            hint: 'Un domingo muy especial ❤️'
        },
        {
            question: '¿Qué es lo que más me encanta de ti?',
            options: ['Tu físico', 'Tu forma de ser', 'Tu comida', 'Tu ropa'],
            correct: 1,
            hint: 'Lo que va más allá de lo superficial 💖'
        },
        {
            question: '¿Qué quieres ser en el futuro?',
            options: ['Doctora', 'Odontóloga', 'Ingeniera', 'Maestra'],
            correct: 1,
            hint: 'Vas a cuidar sonrisas 🦷✨'
        },
        {
            question: '¿Qué jugamos juntos?',
            options: ['Minecraft', 'Crash Team Racing', 'Fortnite', 'Mario Kart'],
            correct: 1,
            hint: 'Nos encanta competir 🏁'
        },
        {
            question: '¿Cuál es nuestra comida favorita?',
            options: ['Pizza', 'Todo con queso', 'Hamburguesas', 'Pasta'],
            correct: 1,
            hint: 'Mientras tenga queso, todo bien 🧀'
        }
    ],
    
    loaderMessages: [
        'Preparando algo especial para Alisson...',
        'Cargando recuerdos hermosos...',
        'Creando magia para ti, mi niña...',
        'El corazón está latiendo por ti...',
        'Casi listo para tu sorpresa...',
        'El amor se está manifestando...',
        'Toques finales de amor...',
        'Tu regalo está a punto de aparecer...'
    ]
};

// ============================================
// LOADER
// ============================================

let loaderProgress = 0;
let currentMessageIndex = 0;
const loaderMessages = CONFIG.loaderMessages;

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
        loaderProgress += Math.random() * 5 + 2;
        if (loaderProgress >= 100) {
            loaderProgress = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    showWelcomeScreen();
                }, 1500);
            }, 500);
        }
        bar.style.width = loaderProgress + '%';
        percent.textContent = Math.floor(loaderProgress) + '%';
        
        if (loaderProgress > (currentMessageIndex * (100 / loaderMessages.length))) {
            updateLoaderMessage();
        }
    }, 200);
}

function showWelcomeScreen() {
    document.getElementById('welcomeScreen').classList.remove('hidden');
    createPetals();
    createButterflies();
}

// ============================================
// PETALS & BUTTERFLIES
// ============================================

function createPetals() {
    const container = document.getElementById('petalsContainer');
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 12000);
    }, 800);
}

function createButterflies() {
    const container = document.getElementById('butterfliesContainer');
    const butterflies = ['🦋', '🌸', '✨'];
    setInterval(() => {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.textContent = butterflies[Math.floor(Math.random() * butterflies.length)];
        butterfly.style.left = '-50px';
        butterfly.style.top = Math.random() * 100 + 'vh';
        butterfly.style.animationDuration = (Math.random() * 5 + 12) + 's';
        container.appendChild(butterfly);
        setTimeout(() => butterfly.remove(), 18000);
    }, 3000);
}

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Parallax effect
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    document.querySelectorAll('.light').forEach((light, i) => {
        const factor = (i + 1) * 0.4;
        light.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('button, a, .gallery-item, .quiz-option').forEach(el => {
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
// PARTICLES CANVAS
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

for (let i = 0; i < 50; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 179, 209, ${0.08 * (1 - dist/100)})`;
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
// COUNTERS
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

function updateBirthdayCountdown() {
    const now = new Date();
    let birthday = new Date(CONFIG.birthdayDate);
    
    // Si ya pasó este año, calcular para el próximo
    if (now > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }
    
    const diff = birthday - now;
    
    if (diff < 0) {
        document.getElementById('cd-days').textContent = '0';
        document.getElementById('cd-hours').textContent = '0';
        document.getElementById('cd-minutes').textContent = '0';
        document.getElementById('cd-seconds').textContent = '0';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = hours;
    document.getElementById('cd-minutes').textContent = minutes;
    document.getElementById('cd-seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);
setInterval(updateBirthdayCountdown, 1000);
updateCounter();
updateBirthdayCountdown();

// ============================================
// START BUTTON
// ============================================

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('navigation').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
    
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
    audio.play().then(() => {
        document.getElementById('playBtn').textContent = '⏸';
        document.getElementById('musicVisualizer').classList.add('playing');
    }).catch(err => console.log('Audio error:', err));
    
    initAllSections();
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
// STORY TIMELINE ANIMATION
// ============================================

function initStoryTimeline() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.story-item').forEach(item => {
        observer.observe(item);
    });
}

// ============================================
// HEART SECTION
// ============================================

function initHeartSection() {
    const heart = document.querySelector('.enchanted-rose-main');
    if (!heart) return;
    
    // Cambio de color
    const colors = ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#9b59b6'];
    let colorIndex = 0;
    
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        document.querySelectorAll('.rose-petal-main').forEach(petal => {
            petal.style.background = `linear-gradient(180deg, ${colors[colorIndex]} 0%, #8e3b5c 100%)`;
        });
    }, 2500);
    
    // Reacción al mouse
    const container = document.getElementById('heartContainer');
    container.addEventListener('mousemove', (e) => {
        const rect = heart.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width/2) / rect.width;
        const y = (e.clientY - rect.top - rect.height/2) / rect.height;
        heart.style.transform = `scale(1.1) translate(${x*15}px, ${y*15}px)`;
    });
    
    container.addEventListener('mouseleave', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Toques móviles
    container.addEventListener('touchstart', (e) => {
        heart.style.transform = 'scale(1.2)';
        createHeartParticle(e.touches[0].clientX, e.touches[0].clientY);
    });
    
    container.addEventListener('touchend', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Partículas continuas
    setInterval(() => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        createHeartParticle(
            rect.left + rect.width/2 + (Math.random()-0.5)*80,
            rect.top + rect.height/2 + (Math.random()-0.5)*80
        );
    }, 600);
}

function createHeartParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.innerHTML = '❤';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--tx', (Math.random()-0.5)*120 + 'px');
    particle.style.setProperty('--ty', -80 - Math.random()*60 + 'px');
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
            <img src="${img.url}" alt="${img.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Foto+'+(${i+1})">
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
// LETTER
// ============================================

function initLetter() {
    const content = document.getElementById('letterContent');
    CONFIG.letterText.forEach((text, i) => {
        const p = document.createElement('p');
        if (i === 0 || i === CONFIG.letterText.length - 1) p.className = 'signature';
        p.textContent = text;
        p.style.animationDelay = (i * 0.4) + 's';
        content.appendChild(p);
    });
}

// ============================================
// REASONS
// ============================================

function initReasons() {
    const container = document.getElementById('reasonsContainer');
    CONFIG.reasons.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-number">${i + 1}</div>
            <div class="reason-text">${reason}</div>
        `;
        container.appendChild(card);
    });
}

// ============================================
// QUIZ
// ============================================

let currentQuestion = 0;
let score = 0;

function initQuiz() {
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= CONFIG.quizQuestions.length) {
        showResult();
        return;
    }
    
    const q = CONFIG.quizQuestions[currentQuestion];
    const progress = ((currentQuestion) / CONFIG.quizQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    document.getElementById('quizQuestion').textContent = q.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(i, btn));
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quizResult').classList.remove('show');
}

function checkAnswer(selected, btn) {
    const q = CONFIG.quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.quiz-option');
    
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    if (selected === q.correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('incorrect');
        buttons[q.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1500);
}

function showResult() {
    document.getElementById('quizProgress').style.width = '100%';
    document.getElementById('quizQuestion').style.display = 'none';
    document.getElementById('quizOptions').style.display = 'none';
    
    const result = document.getElementById('quizResult');
    const percentage = Math.round((score / CONFIG.quizQuestions.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = '¡PERFECTO! 🎉 Me conoces muchísimo, mi niña. Eres increíble ❤️';
    } else if (percentage >= 75) {
        message = '¡Casi perfecto! 💖 Me conoces muy bien, Alisson. Te amo';
    } else if (percentage >= 50) {
        message = '¡Nada mal! 😊 Pero tenemos que seguir conociéndonos más 💕';
    } else {
        message = '¡Ups! 😅 Tendremos que crear más recuerdos juntos 💖';
    }
    
    result.innerHTML = `
        <div class="quiz-score">${score}/${CONFIG.quizQuestions.length}</div>
        <p class="quiz-message">${message}</p>
        <button class="quiz-restart" onclick="restartQuiz()">Intentar de nuevo 💕</button>
    `;
    result.classList.add('show');
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quizQuestion').style.display = 'block';
    document.getElementById('quizOptions').style.display = 'grid';
    showQuestion();
}

// ============================================
// SURPRISE & FIREWORKS
// ============================================

document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.getElementById('finalOverlay').classList.remove('hidden');
    createFireworks();
});

document.getElementById('finalClose').addEventListener('click', () => {
    document.getElementById('finalOverlay').classList.add('hidden');
});

function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#d4af37', '#9b59b6'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const fw = document.createElement('div');
            fw.className = 'firework';
            fw.style.left = Math.random() * 100 + 'vw';
            fw.style.top = Math.random() * 100 + 'vh';
            fw.style.background = colors[Math.floor(Math.random() * colors.length)];
            fw.style.boxShadow = `0 0 30px ${fw.style.background}`;
            container.appendChild(fw);
            setTimeout(() => fw.remove(), 1500);
        }, i * 200);
    }
    
    setTimeout(() => createFireworks(), 3000);
}

// ============================================
// NAVIGATION
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const navIndicator = document.getElementById('navIndicator');

function updateNavIndicator(link) {
    if (!link || !navIndicator) return;
    const rect = link.getBoundingClientRect();
    const navRect = link.parentElement.parentElement.getBoundingClientRect();
    navIndicator.style.width = rect.width + 'px';
    navIndicator.style.transform = `translateX(${rect.left - navRect.left - 8}px)`;
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
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
    const effects = ['❤', '✨', '💖', '💕', '⭐', '🌸', '🦋'];
    for (let i = 0; i < 4; i++) {
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.textContent = effects[Math.floor(Math.random() * effects.length)];
        effect.style.left = (e.clientX + (Math.random()-0.5)*40) + 'px';
        effect.style.top = (e.clientY + (Math.random()-0.5)*40) + 'px';
        effect.style.color = `hsl(${Math.random()*60 + 320}, 100%, 70%)`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1000);
    }
});

// ============================================
// SCROLL REVEAL
// ============================================

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

function initAllSections() {
    initStoryTimeline();
    initHeartSection();
    initGallery();
    initLetter();
    initReasons();
    initQuiz();
    
    document.querySelectorAll('.section-title, .section-subtitle, .counter-container, .birthday-countdown, .heart-container, .gallery-item, .dream-item, .reason-card').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
    
    // Inicializar nav indicator
    setTimeout(() => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) updateNavIndicator(activeLink);
    }, 100);
}

// ============================================
// INICIALIZAR
// ============================================

window.addEventListener('load', () => {
    setTimeout(simulateLoader, 500);
});
