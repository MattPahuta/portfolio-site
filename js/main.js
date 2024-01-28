console.log('Scripts connected');

const navBtn = document.querySelector('#mobile-nav-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');

})

window.addEventListener('DOMContentLoaded', () => {
  
})