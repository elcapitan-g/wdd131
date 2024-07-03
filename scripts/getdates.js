document.addEventListener('DOMContentLoaded', function() {
    
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent += lastModified;

    
    var currentYear = new Date().getFullYear();
    var copyrightYearElement = document.getElementById('copyright-year');
    copyrightYearElement.textContent = currentYear;
});