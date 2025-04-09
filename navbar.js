let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let isScrolling;

// Handle scroll behavior
window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll;
});

// Handle navigation clicks
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (e.target.getAttribute('href') !== '#inicio') {
            navbar.style.transform = 'translateY(-100%)';
        }
    });
});