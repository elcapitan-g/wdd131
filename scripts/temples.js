

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
        mainNav.style.display = expanded ? 'none' : 'block';
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
});
