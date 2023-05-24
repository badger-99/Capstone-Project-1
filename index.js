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

// ************************* Dynamically Loading Features Speakers ************************* //
// Speaker object array
const speakers = [
  {
    name: 'Yochai Benkler',
    qualifications: 'Harvard Law School Professor',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006.',
    mobileImg: './assets/YochaiMobile.png',
    desktopImg: './assets/Yochai.png',
  },
  {
    name: 'SohYeong Noh',
    qualifications: 'Director of Art Center Nabi, CC Korea Director',
    bio: '>Nabi is the main venue for media art production in Korea and promotes cross-disciplinary collaboration.',
    mobileImg: './assets/SohYeongMobile.png',
    desktopImg: './assets/SohYeong.png',
  },
  {
    name: 'Lila Tretiov',
    qualifications: 'Exscutive Director at the Wikimedia Foundation',
    bio: 'Lola Trettkov is the Executive Director of the Wikimedia Foundation, the non-profit organization that operates Wikipedia.',
    mobileImg: './assets/LilaMobile.png',
    desktopImg: './assets/Lila.png',
  },
  {
    name: 'Kilnam Chon',
    qualifications: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    bio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons.',
    mobileImg: './assets/KilnamMobile.png',
    desktopImg: './assets/Kilnam.png',
  },
  {
    name: 'Julia Leda',
    qualifications: 'President of Young Pirates of Europe',
    bio: 'European integration, political democracy and participation of youth through online as her major condem.',
    mobileImg: './assets/JuliaMobile.png',
    desktopImg: './assets/Julia.png',
  },
  {
    name: 'Ryan Merkley',
    qualifications: 'CEO of Creative Commons, ex COO of the mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    mobileImg: './assets/RyanMobile.png',
    desktopImg: './assets/Ryan.png',
  },
];

// Speaker card template
const card = (speaker) => `
  <div class="speaker-card">
            <div class="speaker-img">
              <img class="mobile" src="${speaker.mobileImg}" alt="Yochai-img">
              <img class="desktop" src="${speaker.desktopImg}" alt="Yochai-img">
            </div>
            <div class="speaker-details">
              <h5 class="name">${speaker.name}</h5>
              <p class="qualifications">${speaker.qualifications}</p>
              <p class="bio">${speaker.bio}</p>
            </div>
          </div>
  `;

const speakerDiv = document.getElementById('speakers');
const speakerGrid = speakers.map((speaker) => card(speaker)).join('');
speakerDiv.innerHTML = speakerGrid;