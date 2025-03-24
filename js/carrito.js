// Inicialización del carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
    contarCarrito();
    copiarCarritoAlLocalStorage();
}

// Vista simple del carrito
const verCarrito = document.getElementById("contenedor-carrito");
const modalContenedor = document.getElementById("modal-contenedor");
const cuentoCarrito = document.getElementById("contador-carrito");

const armadoCarrito = () => {
    modalContenedor.innerHTML = '';
    modalContenedor.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-titulo">Carrito de compras</h1>`
    modalContenedor.appendChild(modalHeader);   

    const modalBoton = document.createElement("p");
    modalBoton.innerText = "X";
    modalBoton.className = "modal-header-boton";
    modalBoton.addEventListener("click", () => {
        modalContenedor.style.display = "none";
    });
    modalHeader.appendChild(modalBoton);

    carrito.forEach((manga) => {
    let contenidoCarrito = document.createElement("div");
    contenidoCarrito.className = "modal-contenido";
    contenidoCarrito.innerHTML = `
        <img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}">
        <h3>${manga.titulo}</h3>
        <p>Precio unitario: ${manga.precio}</p>
        <p>Cantidad: ${manga.cantidad}</p>
        <p>Subtotal: ${manga.cantidad * manga.precio}</p>
        `
    modalContenedor.appendChild(contenidoCarrito);

    let eliminarArticulo = document.createElement("span");
    eliminarArticulo.className = "eliminar-articulo";
    eliminarArticulo.innerText = "❌";
    contenidoCarrito.appendChild(eliminarArticulo);
    eliminarArticulo.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, manga) => acc + (manga.precio * manga.cantidad), 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "contenido-total";
    totalCompra.innerHTML = `
                            <h3>Total de la compra: ${total}</h3>
                            `
    modalContenedor.appendChild(totalCompra);
    
    contarCarrito();
};

verCarrito.addEventListener("click", armadoCarrito);

const eliminarProducto = () => {
    const posicionEnCarrito = carrito.find((manga) => manga.id);
    carrito = carrito.filter((mangaID) => {
        return mangaID !== posicionEnCarrito;
    });
    armadoCarrito();
}

const contarCarrito = () => {
    cuentoCarrito.style.display = "block";
    cuentoCarrito.innerText = carrito.length;
};

