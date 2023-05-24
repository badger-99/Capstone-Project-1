// ************************* Pop-up Mobile Menu ************************* //
const btn = document.querySelector('#mobile-menu');
const img = document.querySelector('#hamburger-menu');
// container for the menu
const menuContainer = document.createElement('div');
// container for bacground styling
const mobileMenu = document.createElement('div');
// container to hold the links
const menuList = document.createElement('div');
const about = document.getElementById('nav-link-1').cloneNode(true);
const program = document.getElementById('nav-link-2').cloneNode(true);
const join = document.getElementById('nav-link-3').cloneNode(true);
const sponsor = document.getElementById('nav-link-4').cloneNode(true);
const news = document.getElementById('nav-link-5').cloneNode(true);
const campaign = document.getElementById('special-link').cloneNode(true);
menuList.appendChild(about);
menuList.appendChild(program);
menuList.appendChild(join);
menuList.appendChild(sponsor);
menuList.appendChild(news);
menuList.appendChild(campaign);
mobileMenu.appendChild(menuList);
menuContainer.id = 'mobile-menu-container';
mobileMenu.id = 'popup-mobile-menu';
menuList.id = 'mobile-menu-list';
