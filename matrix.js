const canvas = document.getElementById('matrixCanvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const characters = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

// Add this at the end of your matrix.js file
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    
    let currentIndex = 0;
    
    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Projects carousel functionality
    const projectsTrack = document.querySelector('.projects-track');
    const projectSlides = document.querySelectorAll('.project-slide');
    const nextProjectBtn = document.querySelector('.next-btn-projects');
    const prevProjectBtn = document.querySelector('.prev-btn-projects');
    
    let currentProjectIndex = 0;
    
    function updateProjectPosition() {
        projectsTrack.style.transform = `translateX(-${currentProjectIndex * 100}%)`;
    }
    
    nextProjectBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projectSlides.length;
        updateProjectPosition();
    });
    
    prevProjectBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length;
        updateProjectPosition();
    });
});
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Replace 'your-pdf-file.pdf' with your actual PDF file path
    const pdfPath = 'PDF/4090-2014.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'documento.pdf'; // Name that will appear when downloading
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});