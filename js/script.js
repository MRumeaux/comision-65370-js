const contenidoTienda = document.getElementById("contenido-tienda");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");
let datosProductos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const cargarDatos = async () => {
    const respuesta = await fetch("datos.json");
    datosProductos = await respuesta.json();
    return datosProductos;
};

function obtenerGenerosUnicos() {
    const listaGeneros = [...new Set(datosProductos.map(manga => manga.genero))];
    return listaGeneros.sort();
}

function mostrarGenerosEnFiltro() {
    const seleccionGenero = document.getElementById("filtroGenero");
    const generos = obtenerGenerosUnicos();
    
    const opcionTodos = seleccionGenero.firstElementChild;
    seleccionGenero.innerHTML = '';
    seleccionGenero.appendChild(opcionTodos);
    
    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        seleccionGenero.appendChild(option);
    });
}

const llamarProductos = async (mangasAMostrar) => {
    contenidoTienda.classList.add('desaparecer');
    try {
        if (!mangasAMostrar) {
            mangasAMostrar = await cargarDatos();
        }

        contenidoTienda.innerHTML = '';
        mangasAMostrar.forEach((manga, indiceAnimacion) => {
            let contenedorArticulo = document.createElement("div");
            contenedorArticulo.className = "preview-articulo";
            contenedorArticulo.style.animationDelay = `${indiceAnimacion * 0.1}s`;
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
            title: 'Hubo un error al cargar los mangas',
            text: 'No pudimos cargar los mangas, por favor recargá la página.',
            icon: 'error',
            confirmButtonText: 'Reintentar',
            confirmButtonColor: '#000000',
            background: '#ffffff'
        }).then((result) => {
            if (result.isConfirmed) {
                inicializarTienda();
            }
        });
    } finally {
        setTimeout(() => {
            contenidoTienda.classList.remove('desaparecer');
            contenidoTienda.classList.add('aparecer');
        }, 300);
    }
};

const tipeoBuscador = async () => {
    const busqueda = buscador.value.toLowerCase().trim();
    const generoSeleccionado = document.getElementById("filtroGenero").value;
    
    const mangasFiltrados = datosProductos.filter((manga) => {
        const coincideTitulo = manga.titulo.toLowerCase().includes(busqueda);
        const coincideGenero = !generoSeleccionado || manga.genero === generoSeleccionado;
        return coincideTitulo && coincideGenero;
    });
    
    sinResultados.classList.toggle('mostrar', mangasFiltrados.length === 0);
    await llamarProductos(mangasFiltrados);
};

async function inicializarTienda() {
    await cargarDatos();
    mostrarGenerosEnFiltro();
    buscador.addEventListener("input", tipeoBuscador);
    document.getElementById("filtroGenero").addEventListener("change", tipeoBuscador);
    await llamarProductos(datosProductos);
}

inicializarTienda();