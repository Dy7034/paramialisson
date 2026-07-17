const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    wishes: ['Deseo que seas feliz siempre 💖', 'Deseo cumplir tus sueños ✨', 'Deseo verte sonreír 😊', 'Deseo ser tu compañero 💑', 'Deseo que este amor nunca termine 💕', 'Deseo ser tu primer paciente 🦷', 'Deseo que Kuromi te proteja 🎀', 'Deseo construir un hogar contigo 🏡', 'Deseo que seas la odontóloga más increíble 🦷✨'],
    gallery: [
        { url: 'https://i.imgur.com/SMMGWu9.jpg', title: 'Contigo, todo es mejor' },
        { url: 'https://i.imgur.com/EuSVvfJ.jpg', title: 'Mi persona favorita' },
        { url: 'https://i.imgur.com/7AH5MaT.jpg', title: 'Sonrisas que enamoran' },
        { url: 'https://i.imgur.com/thv7LGX.jpg', title: 'Juntos para siempre' },
        { url: 'https://i.imgur.com/LRY1iG6.jpg', title: 'Eres tú' },
        { url: 'https://i.imgur.com/q8c7kFk.jpg', title: 'Mi lugar favorito' },
        { url: 'https://i.imgur.com/BHgx73N.jpg', title: 'Recuerdos eternos' },
        { url: 'https://i.imgur.com/7yL8zXZ.jpg', title: 'Mi niña hermosa' },
        { url: 'https://i.imgur.com/nAd02cU.jpg', title: 'Aventuras' },
        { url: 'https://i.imgur.com/x0kP7iI.jpg', title: 'Mi amor' },
        { url: 'https://i.imgur.com/lqQtIHe.jpg', title: 'Por siempre' }
    ],
    letter: ['Mi niña,', 'Hay personas que llegan a nuestra vida sin hacer ruido, y poco a poco terminan convirtiéndose en todo. Tú hiciste exactamente eso conmigo.', 'Pienso en aquel 2023, cuando hablamos por primera vez gracias a Masha. Jamás imaginé que serías la mujer que más amo.', 'Después llegó el 15 de tu prima. Yo no sabía bailar, pero todo era más fácil contigo.', 'Cuando te vi pensé que eras muy bonita. Lo único que quería era conocerte más.', 'Con cada conversación, con cada risa, fuiste ocupando un lugar en mi corazón.', 'Me descubrí diciéndome: "Quiero que ella sea mi primer y única novia".', 'Estaba enamorado de tu personalidad, de tus metas, de cómo cuidas a las personas.', 'El domingo 12 de abril de 2026 cambió mi vida para siempre.', 'Si me preguntaran mil veces a quién elegiría, la respuesta siempre sería: a ti.', 'Gracias por quedarte.', 'Gracias por cada "Amor", cada "Ti amo", cada foto, cada abrazo.', 'Gracias a ti soy una mejor versión de mí mismo.', 'Tú me has enseñado a amar con paciencia.', 'Un día normal se convierte en el mejor solo porque estás conmigo.', 'Cuando no estamos juntos te extraño muchísimo.', 'Me imagino abrazándote, escuchándote, viendo cómo sonríes.', 'Me encanta cuando me gritas "Amoor", cuando jugamos Crash Team Racing.', 'Esos momentos los quiero recordar siendo viejitos contigo.', 'Gracias por estar a mi lado incluso cuando tenemos diferencias.', 'No soy perfecto, pero jamás dejaré de esforzarme por ti.', 'Quiero verte cumplir tu sueño de ser odontóloga.', 'Quiero viajar contigo, conocer playas y montañas.', 'Y sí, sueño con formar una familia contigo.', 'Eres mi mejor elección.', 'Si algún día dudas de cuánto te amo, recuerda:', 'Te amo muchísimo con montones. ❣️', 'Te amo de aquí a la Luna🌕 a pasito de tortuga🐢, del Sol☀️ al mar🌊 a pasito de calamar🐙. ❣️', 'Gracias por existir.', 'Con todo mi corazón que te ama, hoy, mañana y siempre,', 'Tu niño de silicona ❤️'],
    reasons: ['Tu sonrisa', 'Dices "Amoor"', 'Tu amor por el queso', 'Cómo duermes', 'Tu risa', 'Eres hermosa', 'Me cuidas', 'Buenos días', 'Respondes rápido', 'Bailas bien', 'Personalidad única', 'Fondo de pantalla mío', 'Escribes mi nombre con corazón', 'Valiente con odontología', 'Detallista conmigo', 'Tus abrazos', 'Dices "mi niño"', 'Pasión por tus sueños', 'Eres tú', 'Te amo mucho', 'Y 80 más... ❤️'],
    loadMsgs: ['Preparando algo para Alisson...', 'Cargando recuerdos...', 'Creando magia...', 'El corazón late por ti...', 'Casi listo...', 'El amor se manifiesta...']
};

// LOADER
let lp = 0, ci = 0;
function updMsg() {
    const m = document.getElementById('loaderMsg');
    if (m && ci < CONFIG.loadMsgs.length) { m.textContent = CONFIG.loadMsgs[ci]; ci++; }
}
function startLoader() {
    const bar = document.getElementById('loaderFill');
    const intv = setInterval(() => {
        lp += Math.random() * 8 + 3;
        if (lp >= 100) { lp = 100; clearInterval(intv); setTimeout(() => {
            const l = document.getElementById('loader');
            if (l) l.classList.add('fade-out');
            setTimeout(() => { if (l) l.style.display = 'none'; document.getElementById('welcome').classList.remove('hidden'); }, 1500);
        }, 500); }
        if (bar) bar.style.width = lp + '%';
        if (lp > (ci * (100 / CONFIG.loadMsgs.length))) updMsg();
    }, 200);
}

// CURSOR
const cur = document.getElementById('cursor'), fol = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
});
function animFol() {
    fx += (mx - fx) * 0.1; fy += (my - fy) * 0.1;
    if (fol) { fol.style.left = fx + 'px'; fol.style.top = fy + 'px'; }
    requestAnimationFrame(animFol);
}
animFol();
document.querySelectorAll('button, a, .gallery-item, .star, .p-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur && cur.classList.add('active'); fol && fol.classList.add('active'); });
    el.addEventListener('mouseleave', () => { cur && cur.classList.remove('active'); fol && fol.classList.remove('active'); });
});

// PARTICLES
const cv = document.getElementById('particlesCanvas');
if (cv) {
    const cx = cv.getContext('2d');
    let parts = [];
    function resize() { cv.width = innerWidth; cv.height = innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    class P { constructor() { this.x = Math.random() * cv.width; this.y = Math.random() * cv.height; this.s = Math.random() * 2 + 0.5; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; } 
    update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > cv.width) this.vx *= -1; if (this.y < 0 || this.y > cv.height) this.vy *= -1; }
    draw() { cx.beginPath(); cx.arc(this.x, this.y, this.s, 0, Math.PI * 2); cx.fillStyle = 'rgba(255, 179, 209, 0.5)'; cx.fill(); } }
    for (let i = 0; i < 40; i++) parts.push(new P());
    function animP() { cx.clearRect(0, 0, cv.width, cv.height); parts.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animP); }
    animP();
}

// COUNTER
function updCounter() {
    const n = new Date(), d = n - CONFIG.startDate;
    if (d < 0) { ['years','months','days','hours','minutes','seconds'].forEach(id => { const e = document.getElementById(id); if (e) e.textContent = '0'; }); return; }
    const y = Math.floor(d / (1000*60*60*24*365.25));
    const mo = Math.floor((d % (1000*60*60*24*365.25)) / (1000*60*60*24*30.44));
    const dy = Math.floor((d % (1000*60*60*24*30.44)) / (1000*60*60*24));
    const h = Math.floor((d % (1000*60*60*24)) / (1000*60*60));
    const mi = Math.floor((d % (1000*60*60)) / (1000*60));
    const s = Math.floor((d % (1000*60)) / 1000);
    const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    set('years', y); set('months', mo); set('days', dy); set('hours', h); set('minutes', mi); set('seconds', s);
}
setInterval(updCounter, 1000); updCounter();

// MUSIC
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const volBtn = document.getElementById('volBtn');
const viz = document.querySelector('.visualizer');

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
    audio.volume = 0.5;
    audio.play().then(() => { playBtn.textContent = '⏸'; viz.classList.add('playing'); }).catch(e => console.log(e));
    initAll();
});

if (playBtn) playBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playBtn.textContent = '⏸'; viz.classList.add('playing'); }
    else { audio.pause(); playBtn.textContent = '▶'; viz.classList.remove('playing'); }
});
if (volBtn) volBtn.addEventListener('click', () => {
    if (audio.volume > 0) { audio.volume = 0; volBtn.textContent = '🔇'; }
    else { audio.volume = 0.5; volBtn.textContent = '🔊'; }
});

// CORAZÓN
let hci = 0;
const hcols = [{c:'#ff6b9d'},{c:'#9b59b6'},{c:'#e74c3c'},{c:'#ffb3d1'},{c:'#d4af37'}];
function initHeart() {
    const heart = document.querySelector('.big-heart svg path');
    if (!heart) return;
    setInterval(() => {
        hci = (hci + 1) % hcols.length;
        heart.setAttribute('fill', hcols[hci].c);
        const ecg = document.querySelector('.ecg polyline');
        if (ecg) ecg.setAttribute('stroke', hcols[hci].c);
    }, 2000);
}

// GALERÍA
function initGallery() {
    const g = document.getElementById('gallery');
    if (!g) return;
    CONFIG.gallery.forEach((img, i) => {
        const d = document.createElement('div');
        d.className = 'gallery-item';
        d.innerHTML = `<img src="${img.url}" alt="${img.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson'"><div class="g-overlay"><h4>${img.title}</h4></div>`;
        d.addEventListener('click', () => openLb(i));
        g.appendChild(d);
    });
}
let lbI = 0;
function openLb(i) { lbI = i; const img = CONFIG.gallery[i]; document.getElementById('lbImg').src = img.url; document.getElementById('lightbox').classList.remove('hidden'); }
function closeLb() { document.getElementById('lightbox').classList.add('hidden'); }
document.getElementById('lbClose').addEventListener('click', closeLb);
document.getElementById('lbPrev').addEventListener('click', () => { lbI = (lbI - 1 + CONFIG.gallery.length) % CONFIG.gallery.length; openLb(lbI); });
document.getElementById('lbNext').addEventListener('click', () => { lbI = (lbI + 1) % CONFIG.gallery.length; openLb(lbI); });
document.getElementById('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLb(); });

// CARTA
function initLetter() {
    const c = document.getElementById('letterContent');
    if (!c) return;
    CONFIG.letter.forEach((t, i) => {
        const p = document.createElement('p');
        if (i === 0 || i === CONFIG.letter.length - 1) p.className = 'sign';
        p.textContent = t;
        c.appendChild(p);
    });
}

// RAZONES
function initReasons() {
    const c = document.getElementById('reasons');
    if (!c) return;
    CONFIG.reasons.forEach((r, i) => {
        const d = document.createElement('div');
        d.className = 'r-card';
        d.innerHTML = `<div class="r-num">${i + 1}</div><div class="r-text">${r}</div>`;
        c.appendChild(d);
    });
}

// ESTRELLAS
function initStars() {
    const w = document.getElementById('starsWrap');
    if (!w) return;
    const pos = [{x:20,y:20},{x:50,y:15},{x:80,y:25},{x:15,y:50},{x:45,y:55},{x:75,y:50},{x:25,y:80},{x:55,y:85},{x:85,y:80}];
    pos.forEach(p => {
        const s = document.createElement('div');
        s.className = 'star';
        s.textContent = '⭐';
        s.style.left = p.x + '%';
        s.style.top = p.y + '%';
        s.addEventListener('click', () => {
            const wish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)];
            document.getElementById('wishBox').innerHTML = `<p>${wish}</p>`;
        });
        w.appendChild(s);
    });
}

// PROMESAS
function initPromesas() {
    const c = document.getElementById('promesas');
    if (!c) return;
    const promesas = [
        'Te prometo escucharte siempre, incluso cuando el mundo esté en contra tuya.',
        'Te prometo ser tu refugio en los días difíciles y tu compañero en los felices.',
        'Te prometo que cuando seas odontóloga, seré tu primer paciente.',
        'Te prometo que en 50 años seguiré eligiéndote cada día como el primero.',
        'Te prometo que este amor será más fuerte mañana.'
    ];
    promesas.forEach((p, i) => {
        const d = document.createElement('div');
        d.className = 'p-card';
        d.innerHTML = `<div class="p-num">${i + 1}</div><div class="p-text">${p}</div>`;
        c.appendChild(d);
    });
}

// SORPRESA
document.getElementById('surpriseBtn').addEventListener('click', () => { document.getElementById('final').classList.remove('hidden'); });
document.getElementById('finalClose').addEventListener('click', () => { document.getElementById('final').classList.add('hidden'); });

// MENÚ COLAPSABLE
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(link.getAttribute('href'));
            if (t) {
                t.scrollIntoView({ behavior: 'smooth' });
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    });
}

// ACTIVE NAV
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.sec');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    document.querySelectorAll('#menu a').forEach(a => { a.classList.remove('active'); if (a.dataset.sec === current) a.classList.add('active'); });
});

// CLICK EFFECTS
document.addEventListener('click', e => {
    for (let i = 0; i < 3; i++) {
        const ef = document.createElement('div');
        ef.textContent = ['❤','✨','💖','⭐'][Math.floor(Math.random() * 4)];
        ef.style.cssText = `position:fixed;left:${e.clientX + (Math.random()-0.5)*30}px;top:${e.clientY + (Math.random()-0.5)*30}px;font-size:1.2rem;pointer-events:none;z-index:9999;animation:clickAnim 1s forwards;`;
        document.body.appendChild(ef);
        setTimeout(() => ef.remove(), 1000);
    }
});
const style = document.createElement('style');
style.textContent = '@keyframes clickAnim { 0% { transform: scale(0); opacity: 1; } 100% { transform: translateY(-100px) scale(1.5); opacity: 0; } }';
document.head.appendChild(style);

function initAll() {
    initHeart();
    initGallery();
    initLetter();
    initReasons();
    initStars();
    initPromesas();
}

window.addEventListener('load', () => { setTimeout(startLoader, 500); });
