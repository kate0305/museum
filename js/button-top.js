export default () => {
  const buttonTop = document.querySelector('.button__top');

  window.onscroll = () => window.pageYOffset > 80 ? buttonTop.hidden = false : buttonTop.hidden = true;

  buttonTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  });
}