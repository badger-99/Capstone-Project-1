// ************************* Pop-up Mobile Menu ************************* //
const btn = document.querySelector('#mobile-menu');
const img = document.querySelector('#mobile-menu img');
const mobileMenu = document.createElement('div');
const menuList = document.createElement('div');
const mobileHeader = document.querySelector('.no-pop');
const home = document.createElement('a');
home.href = './home.html';
home.innerHTML = 'Home';
home.classList.add('nav-style');
// home.style.color = '#d3d3d3';
const about = document.getElementById('nav-link-1').cloneNode(true);
about.classList.add('nav-style');
const program = document.getElementById('nav-link-2').cloneNode(true);
program.classList.add('nav-style');
const join = document.getElementById('nav-link-3').cloneNode(true);
join.classList.add('nav-style');
const sponsor = document.getElementById('nav-link-4').cloneNode(true);
sponsor.classList.add('nav-style');
const news = document.getElementById('nav-link-5').cloneNode(true);
news.classList.add('nav-style');
const campaign = document.getElementById('special-link').cloneNode(true);
campaign.classList.add('special-nav-style');
menuList.appendChild(home);
menuList.appendChild(about);
menuList.appendChild(program);
menuList.appendChild(join);
menuList.appendChild(sponsor);
menuList.appendChild(news);
menuList.appendChild(campaign);
mobileMenu.id = 'popup-mobile-menu';
menuList.id = 'mobile-menu-list';

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!mobileMenu.classList.contains('visible')) {
    img.src = './assets/close_mobile_menu.png';
    mobileHeader.classList.replace('no-pop', 'pop');
    mobileMenu.style.display = 'block';
    mobileMenu.appendChild(menuList);
    const siblngContainer = document.querySelector('header');
    siblngContainer.insertAdjacentElement('afterend', mobileMenu);
    mobileMenu.classList.add('visible');
    document.body.style.overflow = 'hidden';
  } else {
    img.src = './assets/mobile_menu.png';
    mobileHeader.classList.replace('pop', 'no-pop');
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('visible');
    document.body.style.overflow = 'auto';
  }

  menuList.addEventListener('click', () => {
    img.src = './assets/mobile_menu.png';
    mobileHeader.classList.replace('pop', 'no-pop');
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('visible');
  });
});
