import {data} from '../data/data.js';

let btn = document.getElementById('btn');
let result = document.getElementById('result');
let rango = document.getElementById('rango');
let condicion = document.getElementById('condicion');
let visible = document.querySelector('.paciente');
let peso = 0;
let saludable = 0;
let sobrePeso = 0;
let obeso = 0;
let obecidadExtrema = 0;
let i = 0;

document.addEventListener('DOMContentLoader', mostrarGrafica());

btn.addEventListener('click', capturarDatos);

function capturarDatos(){
    let sex = document.querySelector('input[name=sex]:checked').value;
    let age = Number(document.getElementById('age').value);
    let peso = Number(document.getElementById('peso').value);
    let alt = Number(document.getElementById('alt').value);

    calcular(sex, age, peso, alt)
}

function calcular(sexo, edad, peso, altura){
    let imc = Number((peso / Math.pow(altura / 100, 2)).toFixed(1));
    let estado = 0;

    if (imc < 18.5) {
        result.innerHTML = `<h3 style="color: #0083DE">Su Masa Corporal es ${imc}</h3>`;
        condicion.innerHTML = `<h4 style="color: #0083DE">Por debajo de peso</h4>`;
        rango.setAttribute('value', imc);
        visible.setAttribute('class', "paciente active")
        estado = 1;
    }else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = `<h3 style="color: #01FA48">Su Masa Corporal es ${imc}</h3>`;
        condicion.innerHTML = `<h4 style="color: #01FA48">Saludable</h4>`;
        rango.setAttribute('value', imc);
        visible.setAttribute('class', "paciente active")
        estado = 2;
    }else if (imc >= 25 && imc <= 29.9){
        result.innerHTML = `<h3 style="color: #FADA01">Su Masa Corporal es ${imc}</h3>`;
        condicion.innerHTML = `<h4 style="color: #FADA01">Sobre Peso</h4>`;
        rango.setAttribute('value', imc);
        visible.setAttribute('class', "paciente active")
        estado = 3;
    }else if (imc >= 30 && imc <= 39.9){
        result.innerHTML = `<h3 style="color: orange">Su Masa Corporal es ${imc}</h3>`;
        condicion.innerHTML = `<h4 style="color: orange">Obeso</h4>`;
        rango.setAttribute('value', imc);
        visible.setAttribute('class', "paciente active")
        estado = 4;
    }else {
        result.innerHTML = `<h3 style="color: #FF1107">Su Masa Corporal es ${imc}</h3>`;
        condicion.innerHTML = `<h4 style="color: #FF1107">Obesidad Extrema o de Alto Riesgo</h4>`;
        rango.setAttribute('value', imc);
        visible.setAttribute('class', "paciente active")
        estado = 5;
    }
    data.push({
        Genero: sexo,
        Edad: edad,
        Peso: peso,
        Estatura: altura,
        "Masa Corporal": imc,
        Estado: estado
    });

    localStorage.setItem('Personas',JSON.stringify(data));
    mostrarGrafica()
}



function mostrarGrafica(){
    for (let x = i; x < data.length; x++) {
        if (data[x].Estado == 1){
            peso++;
        }else if (data[x].Estado == 2){
            saludable++;
        }else if (data[x].Estado == 3){
            sobrePeso++;
        }else if (data[x].Estado == 4) {
            obeso++;
        }else {
            obecidadExtrema++;
        }
        
        i++;
    }
    
    let grafica = [
        {
          x: ['Bajo Peso', 'Saludable', 'Sobre Peso', 'Obeso', 'Obesidad Extrema'],
          y: [peso, saludable, sobrePeso, obeso, obecidadExtrema],
          type: 'bar'
        }
      ];
    
      Plotly.newPlot('plotlyChart', grafica);
}


