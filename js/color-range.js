//Color range
const progress = document.querySelector('.controls');
  
const changeColor = () => {
  progress.addEventListener('input', (e) => {
  const target = e.target.closest('input[type="range"]');
  const value = target.value;

  if (!target) return;
  target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%`;
});
}

export default changeColor;