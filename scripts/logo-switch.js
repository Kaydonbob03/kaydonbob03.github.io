// image-switch.js
document.addEventListener('DOMContentLoaded', function() {
    const projectImage = document.querySelector('.project-image');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function updateProjectImage(e) {
        if (e.matches) {
            projectImage.src = 'images/logo_dark_mode.png';
        } else {
            projectImage.src = 'images/logo_light_mode.png';
        }
    }

    darkModeMediaQuery.addEventListener('change', updateProjectImage);
    updateProjectImage(darkModeMediaQuery);

    // Also handle manual dark mode toggle if applicable
    document.getElementById('mode-toggle').addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            projectImage.src = 'images/logo_dark_mode.png';
        } else {
            projectImage.src = 'images/logo_light_mode.png';
        }
    });
});