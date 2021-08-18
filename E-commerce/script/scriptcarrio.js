let carritoLocal = JSON.parse(localStorage.getItem("Carrito"));
const tablaCarrito = document.querySelector("#carrito");
let precio = 1000;
let cantidad = 0;

document.addEventListener("DOMContentLoaded", () => {

    actContador()

  carritoLocal.forEach((items) => {
    const { Titulo, Cantidad, Portada } = items;

    tablaCarrito.innerHTML += `<div class="detalles">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Vista Previa</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a href="./detalleProducto.html"><img src="${Portada}" alt="" width="100px"></a></th>
                <td>${Titulo}</td>
                <td><input type="number" id="cant" min="0" class="cant" value="${Cantidad}"></td>
                <td>$${precio} COP</td>
                <td>$${precio * Cantidad} COP</td>
              </tr>
          </table>
        </div>
    </div>`;
    cantidad += Cantidad;
  });

  tablaCarrito.innerHTML += `<div class="compra">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Total $${precio * cantidad} COP</th>
        </tr>
      </thead>
    </table>
    <a href="./pago.html"><button id="btn-carrito-alquilar" class="btn-carrito-alquilar">Alquilar</button></a>
    </div>`;
});

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