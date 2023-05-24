const toggleMenuBtn = () => {
  const span = document.querySelector('#header-btn span');
  span.classList.toggle('addX');
};

window.onload = () => {
  // change image at menuButton
  document.querySelector('#header-btn').addEventListener('click', toggleMenuBtn);
};

toggleMenuBtn();