document.addEventListener('DOMContentLoaded', function() {

    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;

    var lastModifiedDate = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();


    var navToggle = document.getElementById('nav-toggle');
    var mainNav = document.getElementById('main-nav');

    navToggle.addEventListener('click', function() {
        var expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        mainNav.style.display = expanded ? 'none' : 'flex'; // Adjust to 'flex' for proper display
    });


    function handleResize() {
        if (window.innerWidth > 767) {
            mainNav.style.display = 'flex';
            navToggle.style.display = 'none';
        } else {
            mainNav.style.display = 'none';
            navToggle.style.display = 'block';
        }
    }


    handleResize();


    window.addEventListener('resize', handleResize);

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Laie Hawaii Temple",
            location: "Laie, Hawaii, United States",
            dedicated: "1919, November, 27",
            area: 57224,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
        },
        {
            templeName: "Las Vegas Nevada Temple",
            location: "Las Vegas, Nevada, United States",
            dedicated: "1989, November, 16",
            area: 80350,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-lds-758798-wallpaper.jpg"
        },
        {
            templeName: "Kona Hawaii Temple",
            location: "Kona, Hawaii, United States",
            dedicated: "2000, January, 23",
            area: 9500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kona-hawaii/400x250/kona-hawaii-temple-lds-912837-wallpaper.jpg"
        }
    ];

    const gallery = document.getElementById('gallery');

    function generateTempleCard(temple) {
        const card = document.createElement('figure');
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} square feet</p>
        `;
        return card;
    }

    temples.forEach(temple => {
        const templeCard = generateTempleCard(temple);
        gallery.appendChild(templeCard);
    });

    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault();
        displayAllTemples();
    });

    document.getElementById('old-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Old');
    });

    document.getElementById('new-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('New');
    });

    document.getElementById('large-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Large');
    });

    document.getElementById('small-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Small');
    });

    function displayAllTemples() {
        gallery.innerHTML = '';
        temples.forEach(temple => {
            const templeCard = generateTempleCard(temple);
            gallery.appendChild(templeCard);
        });
    }

    function filterAndDisplay(category) {
        gallery.innerHTML = '';
        const filteredTemples = temples.filter(temple => {
            if (category === 'Old') {
                return parseInt(temple.dedicated.split(',')[0]) < 1900;
            } else if (category === 'New') {
                return parseInt(temple.dedicated.split(',')[0]) >= 2000;
            } else if (category === 'Large') {
                return temple.area > 90000;
            } else if (category === 'Small') {
                return temple.area < 10000;
            } else {
                return true; 
            }
        });

        filteredTemples.forEach(temple => {
            const templeCard = generateTempleCard(temple);
            gallery.appendChild(templeCard);
        });
    }

});
