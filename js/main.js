
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function changeFontSize(action) {
    const root = document.documentElement; // Access the root element

    // Define an object with CSS variable names and their corresponding limits
    const variableLimits = {
        '--base-font-size': { min: 10, max: 30 },
        '--base-font-size-p': { min: 8, max: 24 },
        '--base-font-size-h2': { min: 16, max: 36 },
        '--base-font-size-h3': { min: 14, max: 32 },
        '--base-font-size-h4': { min: 12, max: 28 },        
        '--base-font-size-nav-a': { min: 8, max: 24 }, 
    };

    // Iterate over the variable names and adjust font size based on the action
    for (const [variableName, limits] of Object.entries(variableLimits)) {
        const currentSize = parseInt(window.getComputedStyle(root, null).getPropertyValue(variableName));

        // Adjust font size based on the action, with variable-specific limits
        let newSize;
        if (action === 'increase') {
            newSize = Math.min(currentSize + 2, limits.max);
        } else if (action === 'decrease') {
            newSize = Math.max(currentSize - 2, limits.min);
        }

        root.style.setProperty(variableName, newSize + 'px');
    }
}
// Add this script after your existing scripts
function toggleAccessibilityIcons() {
    const iconsContainer = document.querySelector('.icons-container');
    const accessibilitySection = document.querySelector('.accessibility-section');

    // Toggle the visibility of the icons container
    iconsContainer.classList.toggle('show');
    accessibilitySection.classList.toggle('show');
}





// Check the user's preference from local storage and apply dark mode if needed
const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
}
