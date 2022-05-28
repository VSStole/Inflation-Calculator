'use strict';
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');

  inflationRate = parseInt(inflationRate.value);
  money = parseInt(money.value);
  let years = document.querySelector('#years').value;
  years = parseFloat(years);

  let worth = money + (money * (inflationRate / 100));
  //console.log(worth);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }

  //worth= worth.toFixed(2);

  let newElement = document.createElement('div');
  newElement.className = 'new-value';
  newElement.style.background = "yellow";
  newElement.innerText = `Today ${money}$ worth same ${worth}$ for ${years} yearrs`;
  document.querySelector('.container').appendChild(newElement);

}
   //console.log(years);

   //console.log(typeof(inflationRate,money));
  //console.log(typeof(money));
  //let calc=inflationRate+money;



   //let calc= inflationRate.value + money.value;
  //  console.log(typeof(inflationRate.value));
  //  console.log(typeof(money.value));
   //console.log(calc);

