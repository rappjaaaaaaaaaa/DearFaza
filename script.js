const envelope = document.querySelector('.envelope-wrapper');
const audio = document.getElementById('myAudio');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    if (envelope.classList.contains('flap')) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Partikel Bercahaya
const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);
}

function startParticles() {
    setInterval(createParticle, 100);
}

startParticles();