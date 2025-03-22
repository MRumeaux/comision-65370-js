const contenidoTienda = document.getElementById("contenidoTienda");


for(const manga of inventario){

    let contenedorArticulo = document.createElement("div");
    contenedorArticulo.innerHTML = `<img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}"
                            <h1>Titulo: ${manga.titulo}</h1>
                            <p>Precio: ${manga.precio}</p>
                            <button class="sumarAlCarrito" data-id="${manga.id}">Sumar al carrito</button>`;
    contenedorArticulo.className = "preview-articulo";
    contenidoTienda.appendChild(contenedorArticulo);

}

const carrito = [];

document.querySelectorAll(".sumarAlCarrito").forEach(botonCarrito => {
    botonCarrito.addEventListener("click", (eventoMapeoID) => {
        let idSeleccionArticulo = eventoMapeoID.target.getAttribute("data-id");
        sumarArticulosACarrito(idSeleccionArticulo);
    });
});

function copiarCarritoAlLocalStorage() {
    let backUpCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", backUpCarrito);
}

const sumarArticulosACarrito = (idSeleccionArticulo) => {
    const articuloSeleccionado = inventario.find (articulo => articulo.id === idSeleccionArticulo);
    const articuloEnCarrito = carrito.some(articulo => articulo.id === idSeleccionArticulo);

    if(articuloSeleccionado && !articuloEnCarrito){
        const articuloCarrito = {
            id: articuloSeleccionado.id,
            titulo: articuloSeleccionado.titulo,
            genero: articuloSeleccionado.genero,
            precio: articuloSeleccionado.precio,
            descripcion: articuloSeleccionado.descripcion,
            cantidad: 1,
            imagenURL: articuloSeleccionado.imagenURL,
            autor: articuloSeleccionado.autor,
            editorial: articuloSeleccionado.editorial,
            yearPublished: articuloSeleccionado.yearPublished,
            destacado: articuloSeleccionado.destacado,
        }
        carrito.push(articuloCarrito);
    }
    else if(articuloSeleccionado && articuloEnCarrito){
        const posicionEnCarrito = carrito.findIndex(articulo => articulo.id === articuloSeleccionado.id);
        carrito[posicionEnCarrito].cantidad++;
    }
    copiarCarritoAlLocalStorage();
}


function recuperarCarritoDelLocal(){
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
};


let bienvenidaCarrito = document.createElement("p");
bienvenidaCarrito.innerHTML = `A continuación podrá ver lo seleccionado al momento \n`;
document.body.appendChild(bienvenidaCarrito);

let contenedorCarrito = document.createElement("p");
    document.body.appendChild(contenedorCarrito);

contenedorCarrito.innerHTML = "";
for(articuloEnCarrito of carrito){
    let sumarCarritoDom = `Titulo: ${articuloEnCarrito.titulo} - Precio unitario: ${articuloEnCarrito.precio} - Cantidad seleccionada: ${articuloEnCarrito.cantidad} - Subtotal: ${articuloEnCarrito.cantidad * articuloEnCarrito.precio} \n`;
    contenedorCarrito.innerHTML += sumarCarritoDom;
}

console.log(carrito);



    
















/*
function verMas(){

}

for(const manga of inventario){

    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h1>Titulo: ${manga.titulo}</h1>
                            <img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}"
                            <h2>Género: ${manga.genero}</h2>
                            <p>Autor: ${manga.autor}</p>
                            <p>Año de publicación: ${manga.yearPublished}</p>
                            <h3>Editorial: ${manga.editorial}</h3>
                            <p>Precio: ${manga.precio}</p>`;
    document.body.appendChild(contenedor)

}

function generarCompra(){

    localStorage.removeItem("carrito")
}

*/