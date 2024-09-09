// accordion.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.nextElementSibling;
            header.classList.toggle('active'); // Add this line
            accordionContent.classList.toggle('active');
            accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';
        });
    });
});