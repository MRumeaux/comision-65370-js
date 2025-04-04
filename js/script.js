const contenidoTienda = document.getElementById("contenido-tienda");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");
let datosProductos = [];

const cargarDatos = async () => {
    const respuesta = await fetch("datos.json");
    datosProductos = await respuesta.json();
    
    const generos = [...new Set(datosProductos.map(manga => manga.genero))].sort();
    const seleccionGenero = document.getElementById("filtroGenero");
    
    const opcionTodos = seleccionGenero.firstElementChild;
    seleccionGenero.innerHTML = '';
    seleccionGenero.appendChild(opcionTodos);
    
    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        seleccionGenero.appendChild(option);
    });

    buscador.addEventListener("input", tipeoBuscador);
    seleccionGenero.addEventListener("change", tipeoBuscador);
    
    return datosProductos;
};

const llamarProductos = async (mangasAMostrar) => {
    contenidoTienda.classList.add('desaparecer');
    try {
        // Si no hay mangas para mostrar, intentar cargar datos
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
        Swal.fire({
            title: 'Hubo un error al cargar los mangas',
            text: 'No pudimos cargar los mangas, por favor recargá la página.',
            icon: 'error',
            confirmButtonText: 'Reintentar',
            confirmButtonColor: '#000000',
            background: '#ffffff'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
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
    const busqueda = buscador.value.toLowerCase().trim();
    const generoSeleccionado = document.getElementById("filtroGenero").value;
    
    const mangasFiltrados = datosProductos.filter((manga) => {
        const coincideTitulo = manga.titulo.toLowerCase().includes(busqueda);
        const coincideGenero = !generoSeleccionado || manga.genero === generoSeleccionado;
        return coincideTitulo && coincideGenero;
    });
    
    sinResultados.classList.toggle('mostrar', mangasFiltrados.length === 0);
    llamarProductos(mangasFiltrados);
};

cargarDatos().then(datos => llamarProductos(datos));