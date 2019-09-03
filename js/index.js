const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll("a");

navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

let getStartedButton = document.querySelector("button");
getStartedButton.innerText = 'Get Started';

let snippetImage = document.getElementById("cta-img");
snippetImage.setAttribute('src', siteContent["cta"]["img-src"])

let domIsAwesome = document.querySelector(".cta-text h1");

domIsAwesome.innerText = "DOM\nIS\nAWESOME";


let textHeader = document.querySelectorAll('.main-content .text-content h4');
textHeader[0].textContent = siteContent['main-content']['features-h4'];
textHeader[1].textContent = siteContent['main-content']['about-h4'];
textHeader[2].textContent = siteContent['main-content']['services-h4'];
textHeader[3].textContent = siteContent['main-content']['product-h4'];
textHeader[4].textContent = siteContent['main-content']['vision-h4'];


let mainText = document.querySelectorAll('.main-content .text-content p');
mainText[0].innerText = siteContent['main-content']['features-content'];
mainText[1].innerText = siteContent['main-content']['about-content'];
mainText[2].innerText = siteContent['main-content']['services-content'];
mainText[3].innerText = siteContent['main-content']['product-content'];
mainText[4].innerText = siteContent['main-content']['vision-content'];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

let contactChild = document.querySelectorAll('.contact p');

contactChild[0].innerText = siteContent['contact']['address'];
contactChild[1].innerText = siteContent['contact']['phone'];
contactChild[2].innerText = siteContent['contact']['email'];

let footerText = document.querySelector('footer');
footerText.innerText = siteContent['footer']['copyright'];

let navText = document.querySelectorAll('a');

navText.forEach(a =>
  a.style.color = 'green');

  let newNav = document.createElement('a');
  newNav.textContent = ('Apps');
  newNav.style.color = ('green');


  let newNavi = document.createElement('a');
  newNavi.textContent = ('Blog');
  newNavi.style.color =  ('green');

  let nav = document.querySelector('nav');

  nav.appendChild(newNav);
  nav.prepend(newNavi);

  let buttonEffect = document.querySelector('button').addEventListener('click', onClick)
  
  function onClick(e){
   return alert(`\n'Welcome Home, let's get Started'`); 
  };
  let hoverEffect = document.querySelector('button');
  
  hoverEffect.addEventListener('mouseover',function(event){
   event.target.style.backgroundColor = 'green'});
  
  

