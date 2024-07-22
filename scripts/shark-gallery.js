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

    const sharks = [
        {
            SharkName: "White Tip Reef Shark",
            location: "Inshore",
            length: 7,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/triaenodon-obesus.jpg"
        },
        {
            SharkName: "Gray Reef Shark",
            location: "Inshore",
            length: 8,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-amblyrhynchos-06.jpg"
        },
        {
            SharkName: "Sandbar Shark",
            location: "Inshore",
            length: 6.4,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-plumbeus-6.jpg"
        },
        {
            SharkName: "Tiger Shark",
            location: "Inshore",
            length: 25,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/galeocerdo-cuvier-4.jpg"
        },
        {
            SharkName: "Silky Shark",
            location: "Offshore",
            length: 10.8,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-falciformis-04.jpg"
        },
        {
            SharkName: "Oceanic White Tip Shark",
            location: "Offshore",
            length: 13,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-longimanus.jpg"
        },
        {
            SharkName: "Scalloped Hammerhead Shark",
            location: "Offshore",
            length: 14,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/sphyrna-lewini.jpg"
        },
        {
            SharkName: "Blacktip Reef Shark",
            location: "Inshore",
            length: 6.8,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-melanopterus-2.jpg"
        },
        {
            SharkName: "Whale Shark",
            location: "Offshore",
            length: 61.7,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/rhincodon-typus-11.jpg"
        },
        {
            SharkName: "Galapagos Shark",
            location: "Offshore",
            length: 7.5,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-galapagensis-8.jpg"
        },
        {
            SharkName: "Blacktip Shark",
            location: "Inshore",
            length: 5.9,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/carcharhinus-limbatus-1.jpg"
        },
        {
            SharkName: "Cookie Cutter Shark",
            location: "Offshore",
            length: 1.7,
            imageUrl: "https://www.marinelifephotography.com/fishes/sharks/cookie-cutter-shark.jpg"
        }
    ];

    const gallery = document.getElementById('gallery');

    function generateSharkCard(shark) {
        const card = document.createElement('figure');
        card.innerHTML = `
            <img src="${shark.imageUrl}" alt="${shark.SharkName}" loading="lazy">
            <figcaption>${shark.SharkName}</figcaption>
            <p>Location: ${shark.location}</p>
            <p>Length: ${shark.length} ft</p>
        `;
        return card;
    }

    sharks.forEach(shark => {
        const sharkCard = generateSharkCard(shark);
        gallery.appendChild(sharkCard);
    });

    document.getElementById('inshore-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Inshore');
    });

    document.getElementById('offshore-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Offshore');
    });

    document.getElementById('large-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Large');
    });

    document.getElementById('small-link').addEventListener('click', function(event) {
        event.preventDefault();
        filterAndDisplay('Small');
    });

    function filterAndDisplay(category) {
        gallery.innerHTML = '';
        const filteredSharks = sharks.filter(shark => {
            if (category === 'Large') {
                return shark.length >= 12; 
            } else if (category === 'Small') {
                return shark.length < 12; 
            } else if (category === 'Inshore') {
                return shark.location === 'Inshore'; 
            } else if (category === 'Offshore') {
                return shark.location === 'Offshore'; 
            } else {
                return true; 
            }
        });

        filteredSharks.forEach(shark => {
            const sharkCard = generateSharkCard(shark);
            gallery.appendChild(sharkCard);
        });
    }

});
