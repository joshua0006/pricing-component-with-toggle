const input = document.querySelector('.input');
const planPrice = document.querySelectorAll('.value');
const monthPlan = [
  19.99 ,
  24.99 , 
  39.99
];
const yearPlan = [
  199.99 ,
  249.99 , 
  399.99
];
input.addEventListener('click', () => {
  planPrice.forEach((price, i) => {
    if (input.checked) {
      price.innerText = monthPlan[i];
    } else {
      price.innerText = yearPlan[i];
    }
  });
});
