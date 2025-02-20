/* Se crean los principales objetos */

function Articulo(id, titulo, genero, precio, descripcion, stock, imagenURL, autor, editorial, yearPublished, destacado){
    this.id = id;
    this.titulo = titulo;
    this.genero = genero;
    this.precio = parseInt(precio);
    this.descripcion = descripcion;
    this.stock = parseInt(stock);
    this.imagenURL = imagenURL;
    this.autor = autor;
    this.editorial = editorial;
    this.yearPublished = parseInt(yearPublished);
    this.destacado = destacado;
};

/* Lista articulos */

let inventario = [

    new Articulo("1", "Chainsaw Man 1", "Shonen", 13900, "Denji es un joven cazador de demonios que, tras una traición, se fusiona con su perro motosierra Pochita.", 20, "", "Tatsuki Fujimoto", "Ivrea", 2018, "No"),
    new Articulo("2", "Chainsaw Man 2", "Shonen", 13900, "Denji sigue su trabajo como Devil Hunter mientras enfrenta nuevos enemigos y aliados.", 20, "", "Tatsuki Fujimoto", "Ivrea", 2018, "No"),
    new Articulo("3", "Jujutsu Kaisen 1", "Shonen", 14500, "Yuji Itadori se une a la escuela de hechicería para aprender a controlar la maldición de Sukuna.", 20, "", "Gege Akutami", "Panini", 2018, "Si"),
    new Articulo("4", "Jujutsu Kaisen 2", "Shonen", 14500, "Yuji sigue entrenando mientras enfrenta nuevas amenazas sobrenaturales.", 20, "", "Gege Akutami", "Panini", 2018, "Si"),
    new Articulo("5", "Tokyo Revengers 1", "Shonen", 13500, "Takemichi Hanagaki viaja en el tiempo para salvar a su novia del futuro.", 20, "", "Ken Wakui", "Norma Editorial", 2017, "No"),
    new Articulo("6", "Tokyo Revengers 2", "Shonen", 13500, "Takemichi se involucra más en la pandilla Toman para cambiar el futuro.", 20, "", "Ken Wakui", "Norma Editorial", 2017, "No"),
    new Articulo("7", "My Hero Academia 1", "Shonen", 14000, "Izuku Midoriya sueña con convertirse en héroe a pesar de no tener un don.", 20, "", "Kohei Horikoshi", "Ivrea", 2014, "No"),
    new Articulo("8", "My Hero Academia 2", "Shonen", 14000, "Izuku entra en la U.A. y enfrenta sus primeras pruebas.", 20, "", "Kohei Horikoshi", "Ivrea", 2014, "No"),
    new Articulo("9", "One Piece 1", "Shonen", 15000, "Luffy inicia su viaje para convertirse en el Rey de los Piratas.", 20, "", "Eiichiro Oda", "Ivrea", 1997, "Si"),
    new Articulo("10", "One Piece 2", "Shonen", 15000, "Luffy forma su tripulación y zarpa en busca del One Piece.", 20, "", "Eiichiro Oda", "Ivrea", 1997, "Si"),
    new Articulo("11", "Attack on Titan 1", "Shonen", 16000, "Eren Jagger y sus amigos luchan contra los titanes que amenazan la humanidad.", 20, "", "Hajime Isayama", "Ovni Press", 2009, "Si"),
    new Articulo("12", "Attack on Titan 2", "Shonen", 16000, "Eren descubre la verdad sobre los titanes mientras la batalla se intensifica.", 20, "", "Hajime Isayama", "Ovni Press", 2009, "Si"),
    new Articulo("13", "Demon Slayer 1", "Shonen", 13500, "Tanjiro Kamado busca venganza contra los demonios que masacraron a su familia.", 20, "", "Koyoharu Gotouge", "Ivrea", 2016, "Si"),
    new Articulo("14", "Demon Slayer 2", "Shonen", 13500, "Tanjiro entrena para convertirse en un asesino de demonios.", 20, "", "Koyoharu Gotouge", "Ivrea", 2016, "Si"),
    new Articulo("15", "Death Note 1", "Seinen", 14500, "Light Yagami encuentra un cuaderno con el poder de matar a cualquiera cuyo nombre sea escrito en él.", 20, "", "Tsugumi Ohba", "Ivrea", 2003, "No"),
    new Articulo("16", "Death Note 2", "Seinen", 14500, "L y Light comienzan su batalla de ingenio y estrategia.", 20, "", "Tsugumi Ohba", "Ivrea", 2003, "No"),
    new Articulo("17", "Spy x Family 1", "Shonen", 14000, "Twilight, un espía de elite, debe formar una familia falsa para completar su misión.", 20, "", "Tatsuya Endo", "Ivrea", 2019, "No"),
    new Articulo("18", "Spy x Family 2", "Shonen", 14000, "La misión de Twilight se complica cuando su hija adoptiva es telépata y su esposa una asesina.", 20, "", "Tatsuya Endo", "Ivrea", 2019, "No"),
    new Articulo("19", "Blue Lock 1", "Shonen", 13500, "Un riguroso programa de entrenamiento busca crear al mejor delantero del mundo.", 20, "", "Muneyuki Kaneshiro", "Ivrea", 2018, "Si"),
    new Articulo("20", "Blue Lock 2", "Shonen", 13500, "Los participantes del Blue Lock se enfrentan en intensas pruebas para demostrar su valía.", 20, "", "Muneyuki Kaneshiro", "Ivrea", 2018, "Si"),
    new Articulo("21", "Hunter x Hunter 1", "Shonen", 15500, "Gon Freecss inicia su viaje para convertirse en cazador y encontrar a su padre.", 20, "", "Yoshihiro Togashi", "Ivrea", 1998, "Si"),
    new Articulo("22", "Hunter x Hunter 2", "Shonen", 15500, "Gon y Killua comienzan su entrenamiento en la Torre Celestial.", 20, "", "Yoshihiro Togashi", "Ivrea", 1998, "Si"),

];


function Usuario(usuario, pass, nombre_completo, edad, email, direccion, telefono, historial_compras){
    this.usuario = usuario;
    this.pass = pass;
    this.nombre_completo = nombre_completo;
    this.edad = edad;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.historial_compras = historial_compras;
};




const carrito = [];

function copiarCarritoAlLocalStorage() {
    let backUpCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", backUpCarrito);
}

const sumarArticulosACarrito = () => {
    let seleccionArticulo = "";
    const articuloSeleccionado = inventario.find (articulo => articulo.id === seleccionArticulo);
    const articuloEnCarrito = carrito.some(articulo => articulo.id === seleccionArticulo);

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
    else{
        alert("no encontré producto") /* modificar */
    }

    carrito.push(articuloSeleccionado);
    copiarCarritoAlLocalStorage();
}



if(carrito.length > 0){
    const calculoPrecioCarrito = () => {
        const totalCarrito = carrito.reduce((acumulaPrecioCarrito, artCarrito) => acumulaPrecioCarrito += (artCarrito.cantidad * artCarrito.precio), 0);
    };
    const visualizarCarrito = () => {
        const listadoCarrito = carrito.reduce((acumulaCarrito, artCarrito) => acumulaCarrito += `Titulo: ${artCarrito.titulo} - Cantidad: ${artCarrito.cantidad} - Subtotal: ${calculoPrecioCarrito()}\n`);
    };
}
else{
    alert("Carrito vacío");
}


function recuperarCarritoDelLocal(){
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
};

function generarCompra(){
    
    localStorage.removeItem("carrito")
}





    

