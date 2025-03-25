const verCarrito = document.getElementById("contenedor-carrito");
const modalContenedor = document.getElementById("modal-contenedor");
const cuentoCarrito = document.getElementById("contador-carrito");

function copiarCarritoAlLocalStorage() {
    let backUpCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", backUpCarrito);
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function sumarArticulosACarrito(idSeleccionArticulo) {
    idSeleccionArticulo = String(idSeleccionArticulo);
    
    const articuloSeleccionado = datosProductos.find(articulo => articulo.id === idSeleccionArticulo);
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
        const posicionEnCarrito = carrito.findIndex(articulo => articulo.id === idSeleccionArticulo);
        carrito[posicionEnCarrito].cantidad++;
    }
    contarCarrito();
    copiarCarritoAlLocalStorage();
}

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

    if (carrito.length === 0) {
        const carritoVacio = document.createElement("p");
        carritoVacio.className = "carrito-vacio";
        carritoVacio.textContent = "Tu carrito está vacío";
        modalContenedor.appendChild(carritoVacio);
        return;
    }

    carrito.forEach((manga) => {
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "modal-contenido";
        contenidoCarrito.innerHTML = `
            <img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}">
            <h3>${manga.titulo}</h3>
            <p>Precio unitario: ${manga.precio}</p>
            <span class="restar-cantidad">➖</span>
            <p>Cantidad: ${manga.cantidad}</p>
            <span class="sumar-cantidad">➕</span>
            <p>Subtotal: ${manga.cantidad * manga.precio}</p>
            <span class="eliminar-articulo">❌</span>
            `
        modalContenedor.appendChild(contenidoCarrito);
        
        let restarCantidad = contenidoCarrito.querySelector(".restar-cantidad");
        restarCantidad.addEventListener("click", () => {
            if (manga.cantidad > 1) {
                manga.cantidad--;
                armadoCarrito();
                contarCarrito();
                copiarCarritoAlLocalStorage();
            }
        });

        let sumarCantidad = contenidoCarrito.querySelector(".sumar-cantidad");
        sumarCantidad.addEventListener("click", () => {
            manga.cantidad++;
            armadoCarrito();
            contarCarrito();
            copiarCarritoAlLocalStorage();
        });

        let eliminarArticulo = contenidoCarrito.querySelector(".eliminar-articulo");
        eliminarArticulo.addEventListener("click", () => {
            eliminarProducto(manga.id); 
        });
    });

    const total = carrito.reduce((acc, manga) => acc + (manga.precio * manga.cantidad), 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "contenido-total";
    totalCompra.innerHTML = `
        <h3>Total de la compra: ${total}</h3>
        <button id="comprar-ahora" class="boton-comprar">Comprar ahora</button>
    `;
    modalContenedor.appendChild(totalCompra);
    
    document.getElementById("comprar-ahora").addEventListener("click", procesarCompra);
    
    contarCarrito();
};

const procesarCompra = () => {
    Swal.fire({
        title: 'Completá tus datos',
        html: `
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
            <input type="tel" id="telefono" class="swal2-input" placeholder="Teléfono">
            <input type="text" id="direccion" class="swal2-input" placeholder="Dirección de envío">
        `,
        confirmButtonText: 'Confirmar compra',
        confirmButtonColor: '#000000',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = Swal.getPopup().querySelector('#nombre').value;
            const telefono = Swal.getPopup().querySelector('#telefono').value;
            const direccion = Swal.getPopup().querySelector('#direccion').value;
            
            if (!nombre || !telefono || !direccion) {
                Swal.showValidationMessage('Por favor completá todos los campos');
            }
            
            return { nombre, telefono, direccion };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.setItem("carrito", JSON.stringify(carrito));
            modalContenedor.style.display = "none";
            contarCarrito();
            
            Swal.fire({
                title: '¡Gracias por tu compra!',
                text: `${result.value.nombre}, te estaremos informando novedades sobre tu pedido en breve.`,
                icon: 'success',
                confirmButtonColor: '#000000'
            });
        }
    });
};

verCarrito.addEventListener("click", armadoCarrito);

const eliminarProducto = (id) => {
    const posicionEnCarrito = carrito.find((manga) => manga.id === id);
    carrito = carrito.filter((mangaID) => {
        return mangaID !== posicionEnCarrito;
    });
    armadoCarrito();
    contarCarrito();
    copiarCarritoAlLocalStorage();
}

const contarCarrito = () => {
    cuentoCarrito.style.display = "block";
    const lengthCarrito = carrito.length;
    localStorage.setItem("lengthCarrito", JSON.stringify(lengthCarrito));
    cuentoCarrito.innerText = JSON.parse(localStorage.getItem("lengthCarrito"));
};

contarCarrito();