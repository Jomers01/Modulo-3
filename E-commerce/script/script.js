const URL_API = "https://jomers01.github.io/Modulo-3/API/data.json"
const carrusel = document.querySelector('.carousel-inner');
const btnA = document.querySelector('#adulto');
const btnI= document.querySelector('#infantil');
let peli;
let objCart = [];
localStorage.setItem('Carrito', JSON.stringify(objCart));
//caprutamos API
document.addEventListener('DOMContentLoaded', ()=>{
    //Obetenemos la informacion de la API
    const pelicula = async(url) =>{
        const data = await fetch(url);
        peli = await data.json();
        carruse()
    };
    pelicula(URL_API);
});

//Carrusel Ramdom
function carruse(){
    let x = '';
    let z = 1;

    for (let i = Math.floor(Math.random() * 10); i < peli.peliculas.length; i++) {

        const {ImgFondo} = peli.peliculas[i];
       
        if(i != x && z <=20){
            carrusel.innerHTML +=
            `<div class="carousel-item">
                 <img src="${ImgFondo}" class="d-block w-100" alt="">
             </div>
            `;
            z++;
        }else{
            i = 300;
        }
    }
}

//Categorias
btnA.addEventListener('click',() =>{

    localStorage.setItem('Categoria', "Adulto");
})

btnI.addEventListener('click',() =>{

    localStorage.setItem('Categoria', "Infantil");
})