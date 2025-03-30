let content = null;

// Function to get nested object value using dot notation
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Function to load content from JSON file
async function loadContent() {
    try {
        const response = await fetch('content.json');
        content = await response.json();
        updateContent();
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Function to update all content on the page
function updateContent() {
    // Update all elements with data-gujarati attribute
    document.querySelectorAll('[data-gujarati]').forEach(element => {
        const guPath = element.getAttribute('data-gujarati');
        const enPath = element.getAttribute('data-english');
        const urlPath = element.getAttribute('data-url');
        
        if (element.tagName === 'A' && urlPath) {
            element.href = getNestedValue(content, urlPath);
        }
        
        const guText = getNestedValue(content, guPath);
        const enText = getNestedValue(content, enPath);
        
        if (element.tagName === 'SPAN') {
            element.textContent = guText;
            element.setAttribute('data-english', enText);
        } else {
            element.textContent = guText;
            element.setAttribute('data-english', enText);
        }
    });
}

// Function to handle hover translation
function handleHoverTranslation(element) {
    const guText = element.textContent;
    const enText = element.getAttribute('data-english');
    
    element.addEventListener('mouseenter', () => {
        element.textContent = enText;
    });
    
    element.addEventListener('mouseleave', () => {
        element.textContent = guText;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    
    // Add hover translation to all text elements
    document.querySelectorAll('.name, .intro').forEach(element => {
        handleHoverTranslation(element);
    });
    
    // Add hover translation to social links
    document.querySelectorAll('.social-link span').forEach(span => {
        handleHoverTranslation(span);
    });
}); 