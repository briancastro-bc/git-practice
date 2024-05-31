/**
 * 
 * Guarda valores en el local storage;
 * 
 */
const set = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * 
 * Obtener valores almacenados en el local storage;
 * 
 */
const get = (key) => {
  if (!key) {
    throw new Error("No hay una llave para consultar");
  }

  const value = localStorage.getItem(key);
  return value;
};

const themeBtn = document.getElementById('theme');
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let counter = 0;

const renderCounter = () => {
  counterElement.textContent = `Contador: ${counter}`;
};

const increment = () => {
  counter++;
  set('counter', counter);
  renderCounter();
};

const decrement = () => {
  counter--;
  set('counter', counter);
  renderCounter();
};

const changeTheme = () => {
  let theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    set('theme', 'light');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    set('theme', 'dark');
  }
};

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
themeBtn.onclick = changeTheme;

const load = () => {
  const storedCounter = +localStorage.getItem('counter') ?? 0;

  counter = storedCounter;

  const userThemePreference = window
    .matchMedia('(prefers-color-scheme: dark)')
    .matches

  if (userThemePreference) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    set('theme', 'dark');
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    set('theme', 'light');
  }

  renderCounter();
};

window.onload = load;
