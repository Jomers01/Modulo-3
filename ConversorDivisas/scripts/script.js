const URL_API = "http://api.exchangeratesapi.io/v1/latest?access_key=0f4ee41ca8f09321caa774f0569b2083"

const boton = document.querySelector('#btn');
const form = document.querySelector('#form');
let div;
let monedaA;
let monedaD;

const divisas = async(url) =>{
        const data = await fetch(url);
        div = await data.json();
};

divisas(URL_API);


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const cant = document.querySelector('#cant').value;
    const divA = document.querySelector('option[name=divisaA]:checked').value;
    const divisaC = document.querySelector('option[name=divisaC]:checked').value;
    convertidor(cant, divA, divisaC, div);
});



function convertidor(cant, divA, divisaC){

    Object.getOwnPropertyNames(div.rates).forEach(function(val) {

        for (let i = 0; i < val.length; i++) {
            if (divA == val) {
                monedaA = div.rates[val];
                i = 200;
            }
        }

        for (let x = 0; x < val.length; x++) {
            if (divisaC == val) {
                monedaD = div.rates[val];
                i = 200;
            }
        }

    });

    const result = document.querySelector('#result');
    let resultado = (cant / monedaA) * monedaD;
    result.setAttribute('value', Math.floor(resultado.toFixed(1)));
    
    
}