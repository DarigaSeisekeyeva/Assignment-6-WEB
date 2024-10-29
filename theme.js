function applyTheme() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
        savedTheme = 'light'; 
    }
    document.body.className = savedTheme;
}

function toggleTheme() {
    let currentTheme = document.body.className;
    let newTheme;
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }
    
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme); 
}

document.addEventListener("DOMContentLoaded", function() {
    let toggleButton = document.getElementById('theme-toggle-btn');
    if (toggleButton) {
        toggleButton.onclick = toggleTheme;
    }
    applyTheme();
});
