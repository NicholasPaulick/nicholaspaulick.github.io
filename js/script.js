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
    'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    'linear-gradient(125deg, hsl(202deg 66% 39%) 0%, hsl(133deg 52% 55%) 41%, hsl(63deg 69% 74%) 55%, hsl(56deg 83% 72%) 57%, hsl(49deg 94% 68%) 58%, hsl(46deg 85% 61%) 63%, hsl(42deg 79% 54%) 71%, hsl(18deg 52% 42%) 84%, hsl(355deg 39% 28%) 100%)',
    'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)' // White
];

let currentColorIndex = 0;

document.getElementById('color-change-btn').addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundImage = colors[currentColorIndex];
});


// Easter Egg for JavaScript skill
document.addEventListener('DOMContentLoaded', () => {
    const jsSkill = document.getElementById('javascript-skill');
    const msgElement = document.getElementById('easter-egg-msg');

    jsSkill.addEventListener('click', () => {
        msgElement.innerHTML = '🎉 Surprise! Click the button below to play Tic-Tac-Toe! 🎮';
        msgElement.innerHTML += '<button id="play-game-btn">Play Game</button>';

        document.getElementById('play-game-btn').addEventListener('click', () => {
            window.location.href = "tic-tac-toe.html"; // Redirect to a tic-tac-toe game
        });
    });
});
