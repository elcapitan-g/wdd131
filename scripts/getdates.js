function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModifiedDate() {
    return new Date(document.lastModified).toDateString();
}

function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = getCurrentYear();
    }
}

function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${getLastModifiedDate()}`;
    }
}

window.onload = function() {
    updateCurrentYear();
    updateLastModifiedDate();
};
