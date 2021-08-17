const URL_API = "https://jomers01.github.io/Modulo-3/API/data.json";
const ctg = localStorage.getItem("Categoria");
let peli;
const div = document.querySelector("#productos");
const ctgA = document.querySelector("#adulto2");
const ctgI = document.querySelector("#infantil2");
let cant = 0;
let title;
let objCart = JSON.parse(localStorage.getItem("Carrito"));

//Capturamos la API
document.addEventListener("DOMContentLoaded", () => {
  const pelicula = async(url) => {
    const data = await fetch(url);
    peli = await data.json();
    peliculas();
  };

  pelicula(URL_API);
  actContador();
});

//Mostramos las peliculas
function peliculas() {
  peli.peliculas.forEach((movies) => {
    const { ImgPortada, Titulo } = movies;
    const portada = document.createElement("div");
    portada.setAttribute("class", "peliculas");

    if (ctg === "Infantil" && movies.Genero === "Infantil") {
      portada.innerHTML = `<div class="card" style="width: 13rem; height: 19.6rem; background-color: transparent; border: none;">
                <a href="#" class="img" id="${Titulo}" onclick="descripcion(id)"><img src="${ImgPortada}" class="card-img-top" alt=""></a>
                <div class="card-body">
                    <a href="./carrito.html" class="btn btn-primary" id="${Titulo}" onclick="agregarCarrito(id)">Alquilar</a><input id="cant" type="number" class="cant" min="0" value="0">
                </div>
                </div>`;
      div.appendChild(portada);
    } else if (ctg === "Adulto" && movies.Genero === "Adulto") {
      portada.innerHTML = `<div class="card" style="width: 13rem; height: 19.6rem; background-color: transparent; border: none;">
                <a href="./detalleProducto.html" class="img" id="${Titulo}" onclick="descripcion(id)"><img src="${ImgPortada}" class="card-img-top" alt=""></a>
                <div class="card-body">
                <a href="#" class="btn btn-primary" id="${Titulo}" onclick="agregarPeli(id)">Alquilar</a><input onblur="agregarCant(value)" id="cant" type="number" class="cant" min="0" value="0">
                </div>
                </div>`;
      div.appendChild(portada);
    }
  });
}

//Carrrito
function agregarCant(value) {
  cant = value;
}

function agregarPeli(id) {
  title = id;
  agregarCarrito();
}

function agregarCarrito() {
  peli.peliculas.forEach((objeto) => {
    const { Titulo, ImgPortada } = objeto;

    if (title === Titulo && cant != 0) {
      objCart.push({
        Titulo: Titulo,
        Portada: ImgPortada,
        Cantidad: Number(cant),
      });

      localStorage.setItem("Carrito", JSON.stringify(objCart));
    }
  });
}

function actContador() {
  let count = document.querySelector("#count");
  let cartCant = JSON.parse(localStorage.getItem("Carrito"));
  let countN = 0;
  cartCant.forEach((cant) => {
    count.innerHTML = "";
    countN = JSON.stringify(cartCant.length);
    count.innerHTML = `${countN}`;
  });
}

//Categorias
ctgA.addEventListener("click", () => {
  localStorage.setItem("Categoria", "Adulto");
});

ctgI.addEventListener("click", () => {
  localStorage.setItem("Categoria", "Infantil");
});

//Descripcion
function descripcion(id) {
  peli.peliculas.forEach((objeto) => {
    const { Titulo, Año, Descripcion, Puntuacion, ImgPortada } = objeto;

    if (id === Titulo) {
      const obj = {
        Titulo: Titulo,
        Descripcion: Descripcion,
        Puntuacion: Puntuacion,
        Portada: ImgPortada,
        Año: Año,
      };

      localStorage.setItem("Pelicula", JSON.stringify(obj));
    }
  });
}
