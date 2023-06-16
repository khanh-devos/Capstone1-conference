const programs = [
  {
    id: 0,
    title: 'Lecture',
    icon: './imgs/icons/program_icon_01.svg',
    detail: 'Explore the latest products and solutions at the largest EV technology expo in Europe.',
  },
  {
    id: 1,
    title: 'CC Exhibition',
    icon: './imgs/icons/program_icon_02.svg',
    detail: 'Explore the latest products and solutions at the largest EV technology expo in Europe.',
  },
  {
    id: 2,
    title: 'Forum',
    icon: './imgs/icons/program_icon_03.svg',
    detail: 'Explore the latest products and solutions at the largest EV technology expo in Europe.',
  },
  {
    id: 3,
    title: 'Workshop',
    icon: './imgs/icons/program_icon_04.svg',
    detail: 'Explore the latest products and solutions at the largest EV technology expo in Europe.',
  },
  {
    id: 4,
    title: 'CC Ignite',
    icon: './imgs/icons/program_icon_05.svg',
    detail: 'Explore the latest products and solutions at the largest EV technology expo in Europe.',
  },
];

const speakers = [
  {
    id: 0,
    name: 'ANDY LEACH',
    img: './imgs/features/feature1.png',
    background: 'Energy Storage Team, BloombergNEF',
    detail: 'He studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 1,
    name: 'ILKA VON DALWIGK',
    img: './imgs/features/feature2.png',
    background: 'Policy Manager, InnoEnergy',
    detail: 'She studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    name: 'JOSEF SCHOEN',
    img: './imgs/features/feature3.png',
    background: 'Corporate Strategy, Audi',
    detail: 'He studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    name: 'DR. JAN-MARC LUCHIES',
    img: './imgs/features/feature4.png',
    background: 'COO, OneD Battery Sciences',
    detail: 'He studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    name: 'DR. JEFF CHAMBERLAIN',
    img: './imgs/features/feature5.png',
    background: 'CEO, CustomCells',
    detail: 'He studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    name: 'DR. DIRK ABENDROTH',
    img: './imgs/features/feature6.png',
    background: 'Energy Storage Team, BloombergNEF',
    detail: 'He studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const showProgram = () => {
  const container = document.querySelector('#main-container');
  const cards = programs.map((item) => `<div id="main-window" 
    class="col text-white d-flex flex-md-column
    align-items-center justify-content-between">
      <div id="main-img-container flex-1">
        <img width="50" height="50" src="${item.icon}" alt="main program icon">
      </div>
      <h3 id="main-h3">${item.title}</h3>
      <p class="mt-3">Explore the latest products and solutions at the largest EV technology expo in Europe.</p>
    </div>`);
  container.innerHTML = cards.join('');
};

const showMoreBtn = () => {
  const container = document.querySelector('#featured-speakers');

  container.childNodes.forEach((item, i) => {
    if (i > 1 && item.tagName === 'SECTION') {
      if (item.classList) {
        item.classList.toggle('d-none');
      }
    }

    if (item.tagName === 'BUTTON') {
      if (item.innerHTML.includes('Less')) {
        item.innerHTML = `More <img width="10" 
        src="./imgs/arrow_down.svg" alt="arrow">`;
      } else {
        item.innerHTML = `Less <img width="10"
        style="rotate: 180deg" 
        src="./imgs/arrow_down.svg" alt="arrow">`;
      }
    }
  });
};

const showFeature = () => {
  const container = document.querySelector('#featured-speakers');

  const cards = speakers.map((item, i) => `
    <section class="${i > 1 ? 'd-none' : ''} d-md-block">
      <div class="rol text-white 
      d-flex flex-row feature-window">
      <div class='feature-bg'>
        <img width="100px" src="${item.img}" alt="main program icon">
      </div>
      <div class="ms-1 mt-2 text-start">
        <h3 id="fea-h3" class="m-0 p-0">${item.name}</h3>
        <p id="fea-p1" class="text-danger m-0 p-0 mb-1">${item.background}</p>
        <p id="fea-p2">${item.detail}</p>
        </div>
      </div>
    </section>`);

  const button = `<button 
  class="d-md-none shadow pt-1 pb-1 rounded border border-0"
  onclick="showMoreBtn()" id="More-btn" >More 
  <img width="10" src="./imgs/arrow_down.svg" alt="arrow">
  </button>`;

  container.innerHTML = cards.join('') + button;
};

const toggleMenuBtn = () => {
  const span = document.querySelector('#header-btn span');
  span.classList.toggle('addX');
};

window.onload = () => {
  showProgram();
  showFeature();

  // change image at menuButton
  document.querySelector('#header-btn').addEventListener('click', toggleMenuBtn);
};

showMoreBtn();