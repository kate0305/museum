export default function compare() {
  const overlay = document.querySelector('.overlay');

  const compareImages = (img) => {
    const sliderControl = document.querySelector('.explore__slider_control');
    const width = img.offsetWidth;
    let clicked = 0;

    img.style.width = `${(width / 2) + 80}px`;

    const slideReady = (e) => {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    const slideFinish = () => {
      clicked = 0;
    }

    const slideMove =(e) => {
      if (clicked === 0) return;
     
      let position = getCursorPos(e)
    
      if (position < 0) position = 0;
      if (position > width) position = width;
      
      slide(position);
    }

    const getCursorPos = (e) => {
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      const imgXOffset = img.getBoundingClientRect();
      let cursorCoordinate = e.pageX - imgXOffset.left;
      
      cursorCoordinate = cursorCoordinate - window.pageXOffset;
      return cursorCoordinate;
    }

    const slide = (cursorCoordinate) => {
      img.style.width = `${cursorCoordinate}px`;
      sliderControl.style.left = `${img.offsetWidth - (sliderControl.offsetWidth / 2)}px`;
    }

    sliderControl.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    sliderControl.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);
  }
  compareImages(overlay);
}