document.getElementById('mode-toggle').addEventListener('click', function() {
    var body = document.body;
    var modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeIcon.src = "../images/mode.png";
        localStorage.setItem('darkMode', 'light'); // Store theme in local storage
    } else {
        body.classList.add('dark-mode');
        modeIcon.src = "../images/mode1.png";
        localStorage.setItem('darkMode', 'dark'); // Store theme in local storage
    }
});

// Check for saved 'darkMode' in localStorage, else set it based on system preference
let darkMode = localStorage.getItem('darkMode') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (darkMode === "dark") {
    document.body.classList.add('dark-mode');
    document.getElementById('mode-icon').src = 'images/mode1.png';
} else {
    document.body.classList.remove('dark-mode');
    document.getElementById('mode-icon').src = 'images/mode.png';
}