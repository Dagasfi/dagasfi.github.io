
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check the user's preference from local storage and apply dark mode if needed
const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
}
