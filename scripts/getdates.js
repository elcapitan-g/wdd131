// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to get the last modified date of the document
function getLastModifiedDate() {
    return new Date(document.lastModified).toDateString();
}

// Function to update the current year in the HTML
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = getCurrentYear();
    }
}

// Function to update the last modified date in the HTML
function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${getLastModifiedDate()}`;
    }
}

// Call functions to update elements on page load
window.onload = function() {
    updateCurrentYear();
    updateLastModifiedDate();
};
