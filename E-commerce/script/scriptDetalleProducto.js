objCart = JSON.parse(localStorage.getItem("Carrito"));

document.addEventListener('DOMContentLoaded', ()=>{
    const objDetalle = JSON.parse(localStorage.getItem('Pelicula'));
    const det = document.querySelector('#detalle');
    
    actContador()
    mostrarDetalle(objDetalle, det);
})


function mostrarDetalle(objDetalle, det){

    det.innerHTML = 
    `<div class="img">
        <img src="${objDetalle.Portada}" alt="">
        </div>
    <div class="descripcion">
        <h1 class="title">${objDetalle.Titulo}</h1>
        <span>$ 1.000 COP</span>
        <p>${objDetalle.Descripcion}</p>
        <p>Año: ${objDetalle.Año} - Puntuacion:  ${objDetalle.Puntuacion}</p>
        <input type="number" min="0" placeholder="0" onblur="agregarCant(value)" value="0">
        <button>ALQUILAR</button>
    </div>`
}

//Agregar al carrito
function agregarCant(cant) {
    const art = JSON.parse(localStorage.getItem('Pelicula'));
    objCart.push({"Titulo": art.Titulo, "Portada": art.Portada, "Cantidad": Number(cant)});
    localStorage.setItem("Carrito", JSON.stringify(objCart))
    actContador()
}

function actContador() {
    let count = document.querySelector('#count');
    let cartCant = JSON.parse(localStorage.getItem("Carrito"));
    let countN = 0;
    cartCant.forEach(cant =>{
        count.innerHTML = "";
        countN = JSON.stringify(cartCant.length);
        count.innerHTML = `${countN}`;
    })

}