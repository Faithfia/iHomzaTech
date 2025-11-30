const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.navbar ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});