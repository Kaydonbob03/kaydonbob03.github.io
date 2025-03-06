// accordion.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const plusSign = header.querySelector('span');
            
            // Toggle active class on header
            header.classList.toggle('active');
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Update max-height for animation
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    });
});