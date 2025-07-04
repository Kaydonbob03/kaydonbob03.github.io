function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
    const hash = window.location.hash;
    if (hash) {
        const tabId = hash.substring(1);
        const tabButton = document.querySelector(`.tablinks[onclick*='${tabId}']`);
        const tabContent = document.getElementById(tabId);
        if (tabButton && tabContent) {
            tabButton.click();
            tabContent.scrollIntoView({ behavior: "smooth" });
        }
    }
});