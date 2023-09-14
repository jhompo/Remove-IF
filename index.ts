// Import stylesheets
import './style.css';

const dict = new Map<string, Object>([
  ['green_large', true],
  ['green_small', false],
  ['yellow_small', true],
]);

let value = false;

let obj = {
  green_large: setValue,
  green_small: mostrar,
  green_xs: mostrar2,
};

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

exec('green', 'large');

function mostrar() {
  const appDiv: HTMLElement = document.getElementById('app');
  appDiv.innerHTML = `<h1>Cambiando valores</h1>`;
}

function mostrar2() {
  const appDiv: HTMLElement = document.getElementById('app');
  appDiv.innerHTML = `<h1>Prueba 2</h1>`;
}

function setValue() {
  value = true;
}

function exec(color, size) {
  let conditional = obj[color + '_' + size];
  //console.log("VAL: " + conditional());
  conditional();
}
