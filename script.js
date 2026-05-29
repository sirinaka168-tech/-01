// ===== Reveal on scroll =====
const revealTargets = [
  '.product-card',
  '.flavor',
  '.why-card',
  '.contact-card',
  '.section-head'
];

document.querySelectorAll(revealTargets.join(',')).forEach(el => {
  el.classList.add('reveal');
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Parallax on cosmos =====
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

const nebulae = document.querySelectorAll('.nebula');
const planets = document.querySelectorAll('.planet');

function parallax() {
  nebulae.forEach((n, i) => {
    const depth = (i + 1) * 8;
    n.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
  });
  planets.forEach((p, i) => {
    const depth = (i + 1) * 15;
    p.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
  });
  requestAnimationFrame(parallax);
}
parallax();

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Navbar bg on scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5,1,15,.85)';
    navbar.style.borderColor = 'rgba(176,38,255,.4)';
  } else {
    navbar.style.background = 'rgba(5,1,15,.6)';
    navbar.style.borderColor = 'rgba(176,38,255,.25)';
  }
});

// ===== Add extra random stars to cosmos =====
const cosmos = document.querySelector('.cosmos');
for (let i = 0; i < 40; i++) {
  const star = document.createElement('div');
  star.style.cssText = `
    position:absolute;
    top:${Math.random() * 100}%;
    left:${Math.random() * 100}%;
    width:${Math.random() * 3 + 1}px;
    height:${Math.random() * 3 + 1}px;
    background:#fff;
    border-radius:50%;
    box-shadow:0 0 ${Math.random() * 10 + 4}px #fff;
    animation:twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 5}s;
    opacity:${Math.random() * 0.8 + 0.2};
  `;
  cosmos.appendChild(star);
}
