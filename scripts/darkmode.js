document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const mobileModeToggle = document.getElementById('mobile-mode-toggle');
    
    // Check for saved user preference, if any
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial mode
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);
    }
    
    // Add click event to both toggle buttons
    modeToggle.addEventListener('click', toggleDarkMode);
    mobileModeToggle.addEventListener('click', toggleDarkMode);
});