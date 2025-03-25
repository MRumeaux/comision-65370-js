const contenidoTienda = document.getElementById("contenido-tienda");
const buscador = document.getElementById("buscador");

const llamarProductos = async (mangasListados) => {
    // Iniciar animación de salida
    contenidoTienda.classList.add('desaparecer');
    
    try {
        const respuesta = await fetch("datos.json");
        const datos = await respuesta.json();
        contenidoTienda.innerHTML = '';
        
        mangasListados.forEach((manga, index) => {
            let contenedorArticulo = document.createElement("div");
            contenedorArticulo.className = "preview-articulo";
            contenedorArticulo.style.animationDelay = `${index * 0.1}s`; // Efecto cascada
            contenedorArticulo.innerHTML = `
                <img src="${manga.imagenURL}" alt="Imagen de la portada ${manga.titulo}">
                <h2>${manga.titulo}</h2>
                <p class="precio-producto">Precio: ${manga.precio}</p>
                <button class="sumarAlCarrito" data-id="${manga.id}">Sumar al carrito</button>`;
            contenidoTienda.appendChild(contenedorArticulo);
        });

        document.querySelectorAll(".sumarAlCarrito").forEach(botonCarrito => {
            botonCarrito.addEventListener("click", async (eventoMapeoID) => {
                let idSeleccionArticulo = eventoMapeoID.target.getAttribute("data-id");
                await sumarArticulosACarrito(idSeleccionArticulo);
                contarCarrito();
            });
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
        
        Swal.fire({
            title: 'Error de carga',
            text: 'No pudimos cargar los productos... Por favor intentá de nuevo más tarde.',
            icon: 'error',
            confirmButtonText: 'Reintentar',
            confirmButtonColor: '#000000',
            background: '#ffffff',
            customClass: {
                popup: 'swal-custom-popup',
                title: 'swal-custom-title',
                confirmButton: 'swal-custom-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                llamarProductos(); 
            }
        });
    } finally {
        setTimeout(() => {
            contenidoTienda.classList.remove('desaparecer');
            contenidoTienda.classList.add('aparecer');
        }, 300);
    }
};


const tipeoBuscador = () => {
    const busqueda = buscador.value.toLowerCase();
    const mangasFiltrados = datos.filter((manga) => manga.titulo.toLowerCase().startsWith(busqueda));
    llamarProductos(mangasFiltrados);
};

llamarProductos(datos);

buscador.addEventListener("input", tipeoBuscador);

async function buscarPorGenero(genero) {
    const respuesta = await fetch("datos.json");
    const datos = await respuesta.json();
    return datos.filter(manga => manga.genero === genero);
}

async function buscarPorTitulo(busqueda) {
    const respuesta = await fetch("datos.json");
    const datos = await respuesta.json();
    const ajustoBusqueda = busqueda.toLowerCase();
    return datos.filter(manga => 
        manga.titulo.toLowerCase().includes(ajustoBusqueda));
}

async function obtenerDestacados() {
    const respuesta = await fetch("datos.json");
    const datos = await respuesta.json();
    return datos.filter(manga => manga.destacado === "Si");
}

