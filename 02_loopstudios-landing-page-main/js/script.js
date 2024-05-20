const menu = document.getElementById('mobile-menu');
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('disabled');
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('disabled');
})