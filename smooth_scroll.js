const productsLink = document.getElementById('products-link');

productsLink.addEventListener('click', function(event) {
event.preventDefault(); 

const targetElement = document.getElementById('products');

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const footerLink = document.getElementById('footer-link');

footerLink.addEventListener('click', function(event) {
event.preventDefault(); 

const targetElement2 = document.getElementById('footer_sec');

  targetElement2.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const aboutLink = document.getElementById('about-link');

aboutLink.addEventListener('click', function(event) {
event.preventDefault(); 

const targetElement3 = document.getElementById('about_sec');

  targetElement3.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const exploreLink = document.getElementById('explore-link');

exploreLink.addEventListener('click', function(event) {
event.preventDefault(); 

const targetElement4 = document.getElementById('products');

  targetElement4.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const homeLink = document.getElementById('home-link');

homeLink.addEventListener('click', function(event) {
event.preventDefault(); 

const targetElement5 = document.getElementById('home');

  targetElement5.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});


