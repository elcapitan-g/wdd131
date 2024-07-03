 var lastModifiedDate = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();


function calculateWindChill(temperature, windSpeed, unit) {
    if (unit === 'metric') {
        
        if (temperature <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return 'N/A';
        }
    } else if (unit === 'imperial') {
        
        if (temperature <= 50 && windSpeed > 3) {
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return 'N/A';
        }
    }
}


let temperature = 5; 
let windSpeed = 6; 
let unit = 'metric'; 


window.onload = function() {
    let windchillFactor = calculateWindChill(temperature, windSpeed, unit);
    document.getElementById('windchill-factor').textContent = windchillFactor;
    

    let currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    let lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
}
