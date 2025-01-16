const projects = [];
const portfolio = document.querySelector('#portfolio');
const portfolioNav = document.querySelector("[href='#portfolio']");

if (projects.length === 0) {
    portfolio.style.display = 'none';
    portfolioNav.parentElement.style.display = 'none';
}

const navButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav ul');

navButton.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-menu-hidden');
})