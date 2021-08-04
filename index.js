const menu = document.querySelector('.burger-menu');
const closeItem = document.querySelector('.close-item');
const aboutMenu = document.querySelector('.about-menu');
const programMenu = document.querySelector('.porgram-menu');
const speakersMenu = document.querySelector('.speak-menu');
const partnersMenu = document.querySelector('.partners-menu');
const contactMenu = document.querySelector('.contact-menu');
const conferenceMenu = document.querySelector('.conference-menu');

function hideMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
}
function showMenu(e) {
  e.preventDefault();
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'flex';
}

menu.addEventListener('click', showMenu);
closeItem.addEventListener('click', hideMenu);
aboutMenu.addEventListener('click', hideMenu);
programMenu.addEventListener('click', hideMenu);
speakersMenu.addEventListener('click', hideMenu);
partnersMenu.addEventListener('click', hideMenu);
contactMenu.addEventListener('click', hideMenu);
conferenceMenu.addEventListener('click', hideMenu);