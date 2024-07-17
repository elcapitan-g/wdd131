

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

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  function populateProductOptions() {
    const selectProduct = document.getElementById('productName');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.textContent = product.name;
      option.value = product.id;
      selectProduct.appendChild(option);
    });
  }
  
  window.onload = populateProductOptions;
  
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', function() {
    if (localStorage.getItem('reviewCount')) {
      let count = parseInt(localStorage.getItem('reviewCount'));
      localStorage.setItem('reviewCount', count + 1);
    } else {
      localStorage.setItem('reviewCount', '0');
    }
  });
  