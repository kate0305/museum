//Gallery random
const galleryInnerContainer = document.querySelector('.gallery__container-inner');

const imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const shuffle = ()  => {
  for (let i = imgArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
  }
  return imgArray;
}

const renderImg = () => {
  const newArr = shuffle(imgArray).map(i => {
  const img = `<img class="gallery-img" src="assets/img/galery/galery${i}.jpg" alt="galery${i}">`;
  return img;
});
  galleryInnerContainer.innerHTML = newArr.join('');
  galleryInnerContainer.style.display = 'block';
  animationImage()
}
import animationImage from './animation-image.js';
export default renderImg;