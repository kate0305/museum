//Burger-menu
const iconMenu = document.querySelector('.header__menu-icon');
const navigation = document.querySelector('.header-navigation');
const menuLinks = document.querySelectorAll('.navigation__link');
const welcomeContent = document.querySelector('.welcome__content');
const welcomeSlider = document.querySelector('.welcome__slider');

const openMenu = () => {
  document.addEventListener('click', e => {
    if (iconMenu.contains(e.target)) {
    iconMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    welcomeContent.classList.toggle('hidden');
    welcomeSlider.classList.toggle('visible');
  } else {
    iconMenu.classList.remove('active');
    navigation.classList.remove('active');
    welcomeContent.classList.remove('hidden');
    welcomeSlider.classList.remove('visible');
  }})
}

export default openMenu;
