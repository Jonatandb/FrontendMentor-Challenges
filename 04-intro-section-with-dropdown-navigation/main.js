const hamburgerMenuBtn = document.querySelector('.hamburger-menu');
const closeMenuBtn = document.querySelector('#close-btn');
const navbar = document.querySelector('#navbar');

hamburgerMenuBtn.addEventListener('click', () => {
  navbar.style.display = "block";
})

closeMenuBtn.addEventListener('click', () => {
  navbar.style.display = "none";
})