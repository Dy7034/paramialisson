// ============================================
// NUESTRO PEQUEÑO MUNDO - LÓGICA v2.1
// Para Alisson - Con todo mi amor
// ============================================

// ============================================
// CONFIGURACIÓN
// ============================================

const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    birthdayDate: new Date('2026-08-26T00:00:00'),
    musicUrl: 'https://drive.google.com/uc?export=download&id=1y5QXLSzqNH92hNQa6oi6BxwYV5xjJNX4',
    musicTitle: 'Colgando en tus manos',
    musicArtist: 'Carlos Baute & Marta Sánchez',
    
    // 🎨 GALERÍA CON DESCRIPCIONES ROMÁNTICAS GENÉRICAS
    // (Apliquen a cualquier foto, no importa cuál sea)
    galleryImages: [
        {
            url: 'https://i.imgur.com/SMMGWu9.jpg',
            title: 'Contigo, todo es mejor',
            description: 'Cada momento a tu lado se convierte en mi recuerdo favorito'
        },
        {
            url: 'https://i.imgur.com/EuSVvfJ.jpg',
            title: 'Mi persona favorita',
            description: 'No importa dónde ni cuándo, mientras sea contigo'
        },
        {
            url: 'https://i.imgur.com/7AH5MaT.jpg',
            title: 'Sonrisas que enamoran',
            description: 'Tu sonrisa es lo más bonito que mis ojos han visto'
        },
        {
            url: 'https://i.imgur.com/thv7LGX.jpg',
            title: 'Juntos para siempre',
            description: 'Así me imagino el resto de mi vida, siempre a tu lado'
        },
        {
            url: 'https://i.imgur.com/LRY1iG6.jpg',
            title: 'Eres tú, simplemente tú',
            description: 'Lo que me enamora no son las fotos, sino la mujer que sale en ellas'
        },
        {
            url: 'https://i.imgur.com/q8c7kFk.jpg',
            title: 'Mi lugar favorito',
            description: 'No es un sitio, eres tú. Contigo en cualquier lugar estoy bien'
        },
        {
            url: 'https://i.imgur.com/BHgx73N.jpg',
            title: 'Recuerdos eternos',
            description: 'Momentos como estos son los que guardaré por siempre'
        },
        {
            url: 'https://i.imgur.com/7yL8zXZ.jpg',
            title: 'Mi niña hermosa',
            description: 'Cada día te veo más bonita, ¿cómo es posible?'
        },
        {
            url: 'https://i.imgur.com/nAd02cU.jpg',
            title: 'Aventuras de nosotros',
            description: 'Las mejores aventuras son las que vivo contigo'
        },
        {
            url: 'https://i.imgur.com/x0kP7iI.jpg',
            title: 'Mi amor, mi vida',
            description: 'Te amo más de lo que estas fotos pueden expresar'
        },
        {
            url: 'https://i.imgur.com/lqQtIHe.jpg',
            title: 'Por muchos más momentos',
            description: 'Esto apenas comienza, mi niña. Lo mejor está por venir'
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
    
    // 🎮 QUIZ MEJORADO - Más personal y desafiante
    quizQuestions: [
        {
            question: '¿Qué animalito es tu favorito y siempre me lo recuerdas?',
            options: ['Perros', 'Gatos', 'Conejos', 'Hamsters'],
            correct: 1,
            hint: 'Es independiente pero cariñoso, como tú 🐱'
        },
        {
            question: '¿Cuál de estas frases digo más seguido?',
            options: ['Hola preciosa', 'Amoor', 'Qué linda', 'Mi vida'],
            correct: 1,
            hint: 'Lo grito cada vez que te veo o te extraño 📢'
        },
        {
            question: '¿Qué es lo primero que hago cuando hablamos?',
            options: ['Te pregunto cómo estás', 'Te mando un beso', 'Te digo que te amo', 'Te cuento mi día'],
            correct: 2,
            hint: 'Lo más importante siempre va primero ❤️'
        },
        {
            question: 'Si pudiera viajar contigo a cualquier lugar, ¿a dónde iríamos primero?',
            options: ['La playa', 'La montaña', 'Un parque Disney', 'Otro país'],
            correct: 2,
            hint: 'Te encanta la magia, las princesas y Kuromi 🏰'
        },
        {
            question: '¿Qué es lo que más me gusta hacer contigo?',
            options: ['Ver películas', 'Jugar Crash', 'Abrazarnos', 'Todas las anteriores'],
            correct: 3,
            hint: 'Todo contigo es perfecto 💕'
        },
        {
            question: '¿Cuál es mi mayor miedo respecto a ti?',
            options: ['Perderte', 'Que seas infeliz', 'Cometer errores que te lastimen', 'No estar a tu altura'],
            correct: 2,
            hint: 'Me preocupa hacerte daño sin querer 💔'
        },
        {
            question: '¿Qué canción me hace pensar inmediatamente en ti?',
            options: ['Una cualquiera', 'Colgando en tus manos', 'Perfect', 'Todas las de amor'],
            correct: 1,
            hint: 'Es NUESTRA canción, la que suena aquí 🎵'
        },
        {
            question: '¿Qué sueñas con ser en el futuro?',
            options: ['Médica', 'Odontóloga', 'Ingeniera', 'Abogada'],
            correct: 1,
            hint: 'Vas a cuidar sonrisas y la mía será la primera 🦷✨'
        },
        {
            question: '¿Por qué te amo?',
            options: ['Por bonita', 'Por inteligente', 'Por cómo me tratas', 'Por todo, eres perfecta'],
            correct: 3,
            hint: 'No hay una sola razón, son millones 💖'
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
// ❤️ SECCIÓN DEL CORAZÓN ANIMADO
// ============================================

let currentColorIndex = 0;
const heartColors = [
    { name: 'Rosa-Romántico', color1: '#ff6b9d', color2: '#e74c3c', color3: '#ff6b9d', wave: '#ff6b9d' },
    { name: 'Morado-Kuromi', color1: '#9b59b6', color2: '#c8a8e9', color3: '#9b59b6', wave: '#9b59b6' },
    { name: 'Rojo-Intenso', color1: '#e74c3c', color2: '#c0392b', color3: '#e74c3c', wave: '#e74c3c' },
    { name: 'Rosa-Pastel', color1: '#ffb3d1', color2: '#ff6b9d', color3: '#ffb3d1', wave: '#ffb3d1' },
    { name: 'Dorado-Bella', color1: '#d4af37', color2: '#ff6b9d', color3: '#d4af37', wave: '#d4af37' }
];

function initHeartSection() {
    const heart = document.getElementById('mainHeart');
    if (!heart) return;
    
    // Cambio de color cada 3 segundos
    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % heartColors.length;
        const colors = heartColors[currentColorIndex];
        
        // Cambiar gradiente del corazón
        const grad1 = document.getElementById('grad1');
        const grad2 = document.getElementById('grad2');
        const grad3 = document.getElementById('grad3');
        
        if (grad1) grad1.setAttribute('stop-color', colors.color1);
        if (grad2) grad2.setAttribute('stop-color', colors.color2);
        if (grad3) grad3.setAttribute('stop-color', colors.color3);
        
        // Cambiar color del filtro glow
        const svg = document.getElementById('heartSvg');
        if (svg) {
            svg.style.filter = `drop-shadow(0 0 40px ${colors.wave})`;
        }
    }, 3000);
    
    // Sincronizar ondas con el latido
    const heartContainer = document.getElementById('heartContainer');
    
    function triggerWave() {
        const waves = document.querySelectorAll('.heart-wave');
        waves.forEach((wave, i) => {
            setTimeout(() => {
                wave.classList.remove('active');
                // Forzar reflow
                void wave.offsetWidth;
                wave.style.borderColor = heartColors[currentColorIndex].wave;
                wave.classList.add('active');
                setTimeout(() => wave.classList.remove('active'), 1200);
            }, i * 200);
        });
    }
    
    // Onda cada vez que late (cada 1.2s)
    setInterval(triggerWave, 1200);
    
    // Reacción al mouse
    heartContainer.addEventListener('mousemove', (e) => {
        const rect = heart.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width/2) / rect.width;
        const y = (e.clientY - rect.top - rect.height/2) / rect.height;
        heart.style.transform = `scale(1.15) translate(${x*15}px, ${y*15}px)`;
    });
    
    heartContainer.addEventListener('mouseleave', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Toques móviles
    heartContainer.addEventListener('touchstart', (e) => {
        heart.style.transform = 'scale(1.25)';
        createHeartParticle(e.touches[0].clientX, e.touches[0].clientY);
    });
    
    heartContainer.addEventListener('touchend', () => {
        heart.style.transform = 'scale(1)';
    });
    
    // Partículas continuas
    setInterval(() => {
        if (!heartContainer) return;
        const rect = heartContainer.getBoundingClientRect();
        createHeartParticle(
            rect.left + rect.width/2 + (Math.random()-0.5)*100,
            rect.top + rect.height/2 + (Math.random()-0.5)*100
        );
    }, 500);
}

function createHeartParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.innerHTML = '❤';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--tx', (Math.random()-0.5)*150 + 'px');
    particle.style.setProperty('--ty', -100 - Math.random()*80 + 'px');
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
            <img src="${img.url}" alt="${img.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson+%F0%9F%92%96'">
            <div class="gallery-item-overlay">
                <h3>${img.title}</h3>
                <p>${img.description}</p>
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
    document.getElementById('lightboxDate').textContent = '';
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
        message = '¡Nada mal! 😊 Pero tenemos que seguir creando recuerdos juntos 💕';
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
