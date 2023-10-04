let navbar = document.querySelector('.navbar');
let toggler = document.querySelector('.toggler');

toggler.addEventListener('click', () => {
  navbar.classList.toggle('nav-active')
})