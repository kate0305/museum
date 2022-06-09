const buttonsOperations = document.querySelector('.tickets__choice-amount');
const amountBasic = document.querySelector('.number-basic');
const amountSenior = document.querySelector('.number-amount');

const basic = localStorage.getItem('amountBasic');
amountBasic.value = basic ? basic : amountBasic.value;
const senior = localStorage.getItem('amountSenior');
amountSenior.value = senior ? senior : amountSenior.value;

const decrementValue = (el) => {
  let value = +el.value;
  value > 0 ? value-- : 0;
  el.value = value;
};
const incrementValue = (el) => {
  let value = +el.value;
  value > 19 ? 20 : value++;
  el.value = value;
};

const changeAmountValue = () => {
  buttonsOperations.addEventListener('click', (e) => {
  if (e.target.closest('.tickets__buy_decrement-basic')) {
    decrementValue(amountBasic);
  }
 
  if (e.target.closest('.tickets__buy_increment-basic')) {
    incrementValue(amountBasic);
  }

  if (e.target.closest('.tickets__buy_decrement-amount')) {
    decrementValue(amountSenior);
  }
 
  if (e.target.closest('.tickets__buy_increment-amount')) {
    incrementValue(amountSenior);
  }
  localStorage.setItem('amountBasic', amountBasic.value)
  localStorage.setItem('amountSenior', amountSenior.value)
});
}

export default changeAmountValue;