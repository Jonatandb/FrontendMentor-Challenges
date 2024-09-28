const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const closeMenuBtn = document.querySelector('#close-btn');
const navbar = document.querySelector('#navbar');
const featuresBtn = document.querySelector('#features-btn');
const featuresUl = document.querySelector('#features-ul');
const companyBtn = document.querySelector('#company-btn');
const companyUl = document.querySelector('#company-ul');
const featuresBtnArrow = document.querySelector('#features-btn-arrow');
const companyBtnArrow = document.querySelector('#company-btn-arrow');

hamburgerMenuBtn.addEventListener('click', () => {
  navbar.style.display = "block";
})

closeMenuBtn.addEventListener('click', () => {
  const screenSize = window.innerWidth
  if (screenSize >= 768) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
})

featuresBtn.addEventListener('click', () => {
  featuresBtnArrow.style.transition = "transform .3s ease";
  featuresUl.style.display = (featuresUl.style.display == 'block') ? 'none' : 'block';
  featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === "rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)"
})

companyBtn.addEventListener('click', () => {
  companyBtnArrow.style.transition = "transform .3s ease";
  companyUl.style.display = (companyUl.style.display == 'block') ? 'none' : 'block';
  companyBtnArrow.style.transform = (companyBtnArrow.style.transform === "rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)"
})