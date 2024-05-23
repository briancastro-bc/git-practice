const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let counter = 0;

const renderCounter = () => {
  counterElement.textContent = `Contador: ${counter}`;
};

const increment = () => {
  counter++;
  renderCounter();
};

const decrement = () => {
  counter--;
  renderCounter();
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;