export default function animationImage() { 
  const imgArr = document.querySelectorAll('.gallery-img');
  for (let index = 0; index < imgArr.length; index++) {
    const imgItem = imgArr[index];
    const imgItemHeight = imgItem.offsetHeight;
    const imgItemOffset = offset(imgItem); 
    const animationStart = 10; 

    let animationItemPoint = window.innerHeight - (imgItemHeight / animationStart);
     if (imgItemHeight > window.innerHeight) {
      animationItemPoint = window.innerHeight - (window.innerHeight / animationStart);
    } 

    if (scrollY > (imgItemOffset - animationItemPoint)) {
      imgItem.classList.add('active');
    } else {
      imgItem.classList.remove('active');
    } 
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const top = rect.top + scrollTop;
  return top;
}

window.addEventListener('scroll', animationImage);