const URL_API = "http://api.exchangeratesapi.io/v1/latest?access_key=0f4ee41ca8f09321caa774f0569b2083"

const cant = document.querySelector('#cant');
const divA = document.querySelector('option[name=divisaA]:checked').value;
console.log(divA);

/* 10 Dolar australiano a COP

1 EUR ----> 1.5AUD
6,6EUR   <----  10AUD

1EUR -----> 4.600COP
6,6EUR ---> x  */