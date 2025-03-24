// Funciones de búsqueda y filtrado
function buscarPorGenero(genero) {
    return inventario.filter(manga => manga.genero === genero);
}

function buscarPorTitulo(busqueda) {
    const ajustoBusqueda = busqueda.toLowerCase();
    return inventario.filter(manga => 
        manga.titulo.toLowerCase().includes(ajustoBusqueda));
}

function obtenerDestacados() {
    return inventario.filter(manga => manga.destacado === "Si");
}

// Renderizado de productos
const contenidoTienda = document.getElementById("contenido-tienda");

function creacionTarjetasProductos(productos = inventario) {
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

    // Configurar event listeners después de crear los botones
    document.querySelectorAll(".sumarAlCarrito").forEach(botonCarrito => {
        botonCarrito.addEventListener("click", (eventoMapeoID) => {
            let idSeleccionArticulo = eventoMapeoID.target.getAttribute("data-id");
            sumarArticulosACarrito(idSeleccionArticulo);
            contarCarrito();
        });
    });
}

creacionTarjetasProductos();  // Llamada inicial para mostrar todos los productos


function copiarCarritoAlLocalStorage() {
    let backUpCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", backUpCarrito);
}

