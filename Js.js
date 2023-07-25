function incrementPizza(elementId) {
  const sumatoria = document.getElementById(elementId);
  let sumatoria1 = parseInt(sumatoria.innerText);
  sumatoria1++;
  sumatoria.innerText = sumatoria1;
}

function decrementPizza(elementId) {
  const resta = document.getElementById(elementId);
  let resta1 = parseInt(resta.innerText);
  resta1--;
  resta.innerText = resta1;
}