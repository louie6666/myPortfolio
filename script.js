const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const innerIcon = document.getElementById('inner-icon');

themeToggle.addEventListener('click', () => {
    const isLight = htmlElement.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        htmlElement.removeAttribute('data-theme');
        innerIcon.setAttribute('data-lucide', 'moon'); // Handle icon for dark
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        innerIcon.setAttribute('data-lucide', 'sun'); // Handle icon for light
    }
    
    // Crucial for swapping the icons visually
    lucide.createIcons();
});