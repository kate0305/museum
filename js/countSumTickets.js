const typesValue = document.querySelectorAll('.checkbox');
const amountBasic = document.querySelector('.number-basic');
const amountSenior = document.querySelector('.number-amount');
const buttonsOperations = document.querySelector('.tickets__choice-amount');
const totalSum = document.querySelector('.total');

const setValueTicket = () => {
  typesValue.forEach((type) => {
    type.addEventListener('click', () => {
      localStorage.setItem('valueTicket', type.value);
      getTotalAmount();
    });
  });
};

const getCheckedTicket = () => {
  const price = localStorage.getItem('valueTicket');
  const values = [...typesValue];
  price
    ? (values.find((type) => type.value === price).checked = true)
    : (typesValue[0].checked = true);
};

const getTotalAmount = () => {
  const price = localStorage.getItem('valueTicket');
  const priceTicket = price ? price : typesValue[0].value;
  const totalAmountBasic = priceTicket * amountBasic.value;
  const totalAmountSenior = (priceTicket / 2) * amountSenior.value;
  const totalAmount = totalAmountBasic + totalAmountSenior;
  totalSum.innerText = totalAmount;
};

const ticketSum = () => {
  setValueTicket();
  getCheckedTicket();
  getTotalAmount();
  buttonsOperations.addEventListener('click', getTotalAmount);
};

export default ticketSum;
