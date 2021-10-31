let openBtn = document.querySelector('#menu-open');
openBtn.addEventListener('click', () => {
  showNav();
});

let closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', () => {
  hideNav();
});

function showNav() {
  document.querySelector('.main-nav').style.transition = '0.75s';
  document.querySelector('.main-nav').style.width = '12rem';
}

function hideNav() {
  document.querySelector('.main-nav').style.width = '0';
}
