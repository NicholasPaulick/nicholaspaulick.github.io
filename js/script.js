// Interactive Canvas at Footer
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 300;

let particlesArray = [];
let numberOfParticles = 150;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Color Changing Section
const colors = [
    'linear-gradient(135deg, #ff7e5f, #feb47b)',
    'linear-gradient(135deg, #6a11cb, #2575fc)',
    'linear-gradient(135deg, #ff758c, #ff7eb3)',
    'linear-gradient(135deg, #f12711, #f5af19)',
    'linear-gradient(135deg, #00c6ff, #0072ff)',
    'linear-gradient(#e66465, #9198e5)'
];

let currentColorIndex = 0;

document.getElementById('color-change-btn').addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundImage = colors[currentColorIndex];
});
