// scripts.js

function toggleChildren(personElement) {
    const children = personElement.nextElementSibling;

    // If children exists, toggle visibility
    if (children && children.classList.contains('children')) {
        if (children.style.display === 'none' || children.style.display === '') {
            children.style.display = 'block';
        } else {
            children.style.display = 'none';
        }
    }
}
