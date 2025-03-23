// Funciones de búsqueda y filtrado
function buscarPorGenero(genero) {
    return inventario.filter(manga => manga.genero === genero);
}

function buscarPorTitulo(query) {
    const queryLower = query.toLowerCase();
    return inventario.filter(manga => 
        manga.titulo.toLowerCase().includes(queryLower));
}

function obtenerDestacados() {
    return inventario.filter(manga => manga.destacado === "Si");
}

// Renderizado de productos
const contenidoTienda = document.getElementById("contenidoTienda");

function renderizarProductos(productos = inventario) {
    contenidoTienda.innerHTML = '';
    productos.forEach(manga => {
        let contenedorArticulo = document.createElement("div");
        contenedorArticulo.className = "preview-articulo";
        contenedorArticulo.innerHTML = `
            <img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}">
            <h2>${manga.titulo}</h2>
            <p class="precio-producto">Precio: ${manga.precio}</p>
            <button class="sumarAlCarrito" data-id="${manga.id}">Sumar al carrito</button>`;
        contenidoTienda.appendChild(contenedorArticulo);
    });
}

// Inicialización del carrito
const carrito = [];

// Event listeners para botones de carrito
document.querySelectorAll(".sumarAlCarrito").forEach(botonCarrito => {
    botonCarrito.addEventListener("click", (eventoMapeoID) => {
        let idSeleccionArticulo = eventoMapeoID.target.getAttribute("data-id");
        sumarArticulosACarrito(idSeleccionArticulo);
    });
});

// Funciones del carrito
function sumarArticulosACarrito(idSeleccionArticulo) {
    const articuloSeleccionado = inventario.find(articulo => articulo.id === idSeleccionArticulo);
    const articuloEnCarrito = carrito.some(articulo => articulo.id === idSeleccionArticulo);

    if (articuloSeleccionado && !articuloEnCarrito) {
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
    } else if (articuloSeleccionado && articuloEnCarrito) {
        const posicionEnCarrito = carrito.findIndex(articulo => articulo.id === articuloSeleccionado.id);
        carrito[posicionEnCarrito].cantidad++;
    }
    actualizarLocalStorage();
    actualizarVistaCarrito();
}

// Funciones de persistencia
function actualizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function recuperarCarritoDelLocal() {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoRecuperado) {
        carrito.push(...carritoRecuperado);
        actualizarVistaCarrito();
    }
}

// Funciones de UI
function actualizarVistaCarrito() {
    const contenedorCarrito = document.querySelector("#contenedorCarrito") || document.createElement("div");
    contenedorCarrito.id = "contenedorCarrito";
    contenedorCarrito.innerHTML = "";
    
    carrito.forEach(articulo => {
        const subtotal = articulo.cantidad * articulo.precio;
        contenedorCarrito.innerHTML += `
            <p>Titulo: ${articulo.titulo} - Precio unitario: ${articulo.precio} 
               - Cantidad: ${articulo.cantidad} - Subtotal: ${subtotal}</p>`;
    });
    
    document.body.appendChild(contenedorCarrito);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    recuperarCarritoDelLocal();
});

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