// Sistema de manejo de errores personalizado
class validacionErroresMangas extends Error {
    constructor(message) {
        super(message);
        this.name = 'validacionErroresMangas';
    }
}

// Función de validación de datos
function validarArticulo(data) {
    if (!data.id || !data.titulo || !data.precio) {
        throw new validacionErroresMangas('Faltan campos requeridos (id, titulo o precio)');
    }
    if (data.precio < 0) {
        throw new validacionErroresMangas('El precio no puede ser negativo');
    }
    if (data.stock < 0) {
        throw new validacionErroresMangas('El stock no puede ser negativo');
    }
}

// Constructor de artículos con validación
function Articulo(id, titulo, genero, precio, descripcion, stock, imagenURL, autor, editorial, yearPublished, destacado) {
    const mangaData = {
        id: id,
        titulo: titulo,
        genero: genero,
        precio: parseInt(precio),
        descripcion: descripcion,
        stock: parseInt(stock),
        imagenURL: imagenURL,
        autor: autor,
        editorial: editorial,
        yearPublished: parseInt(yearPublished),
        destacado: destacado
    };

    try {
        validarArticulo(mangaData);
    } catch (error) {
        console.error(`Error en manga ${titulo}:`, error.message);
        throw error;
    }

    // Asignación de propiedades validadas
    this.id = mangaData.id;
    this.titulo = mangaData.titulo;
    this.genero = mangaData.genero;
    this.precio = mangaData.precio;
    this.descripcion = mangaData.descripcion;
    this.stock = mangaData.stock;
    this.imagenURL = mangaData.imagenURL;
    this.autor = mangaData.autor;
    this.editorial = mangaData.editorial;
    this.yearPublished = mangaData.yearPublished;
    this.destacado = mangaData.destacado;

    this.actualizarStock = function(cantidad) {
        const nuevoStock = this.stock + cantidad;
        if (nuevoStock < 0) {
            throw new validacionErroresMangas('El stock no puede ser negativo');
        }
        this.stock = nuevoStock;
    };
}

// Base de datos de mangas
let listaArticulos = [
    ["1", "Chainsaw Man 1", "Shonen", 13900, "Denji es un joven cazador de demonios que, tras una traición, se fusiona con su perro motosierra Pochita.", 20, "https://static.wikia.nocookie.net/chainsaw-man/images/3/3a/Volumen_1.png/revision/latest?cb=20220922005416&path-prefix=es", "Tatsuki Fujimoto", "Ivrea", 2018, "No"],
    ["2", "Chainsaw Man 2", "Shonen", 13900, "Denji sigue su trabajo como Devil Hunter mientras enfrenta nuevos enemigos y aliados.", 20, "https://static.wikia.nocookie.net/chainsaw-man/images/9/9a/Volumen_2.png/revision/latest?cb=20220922005631&path-prefix=es", "Tatsuki Fujimoto", "Ivrea", 2018, "No"],
    ["3", "Jujutsu Kaisen 1", "Shonen", 14500, "Yuji Itadori se une a la escuela de hechicería para aprender a controlar la maldición de Sukuna.", 20, "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0e/Volume_1.png/revision/latest?cb=20200905220554&path-prefix=es", "Gege Akutami", "Panini", 2018, "Si"],
    ["4", "Jujutsu Kaisen 2", "Shonen", 14500, "Yuji sigue entrenando mientras enfrenta nuevas amenazas sobrenaturales.", 20, "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/2f/Volume_2.png/revision/latest?cb=20200907045958&path-prefix=es", "Gege Akutami", "Panini", 2018, "Si"],
    ["5", "Tokyo Revengers 1", "Shonen", 13500, "Takemichi Hanagaki viaja en el tiempo para salvar a su novia del futuro.", 20, "https://static.wikia.nocookie.net/tokyorevengers/images/4/49/Volume_01.webp/revision/latest?cb=20210826193205&path-prefix=es", "Ken Wakui", "Norma Editorial", 2017, "No"],
    ["6", "Tokyo Revengers 2", "Shonen", 13500, "Takemichi se involucra más en la pandilla Toman para cambiar el futuro.", 20, "https://static.wikia.nocookie.net/tokyorevengers/images/9/94/Volumen_02.webp/revision/latest?cb=20210926001425&path-prefix=es", "Ken Wakui", "Norma Editorial", 2017, "No"],
    ["7", "My Hero Academia 1", "Shonen", 14000, "Izuku Midoriya sueña con convertirse en héroe a pesar de no tener un don.", 20, "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Volumen_1.png/revision/latest?cb=20151024153923&path-prefix=es", "Kohei Horikoshi", "Ivrea", 2014, "No"],
    ["8", "My Hero Academia 2", "Shonen", 14000, "Izuku entra en la U.A. y enfrenta sus primeras pruebas.", 20, "https://static.wikia.nocookie.net/bokunoheroacademia/images/9/9a/Volumen_2.png/revision/latest?cb=20150315185108&path-prefix=es", "Kohei Horikoshi", "Ivrea", 2014, "No"],
    ["9", "One Piece 1", "Shonen", 15000, "Luffy inicia su viaje para convertirse en el Rey de los Piratas.", 20, "https://static.wikia.nocookie.net/onepiece/images/3/3a/Volumen_1.png/revision/latest?cb=20211112115214&path-prefix=es", "Eiichiro Oda", "Ivrea", 1997, "Si"],
    ["10", "One Piece 2", "Shonen", 15000, "Luffy forma su tripulación y zarpa en busca del One Piece.", 20, "https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest/scale-to-width-down/1000?cb=20130123231527&path-prefix=es", "Eiichiro Oda", "Ivrea", 1997, "Si"],
    ["11", "Attack on Titan 1", "Shonen", 16000, "Eren Jagger y sus amigos luchan contra los titanes que amenazan la humanidad.", 20, "https://static.wikia.nocookie.net/shingeki-no-kyojin/images/3/36/Volumen_1_%28Japones%29.png/revision/latest?cb=20180720023530&path-prefix=es", "Hajime Isayama", "Ovni Press", 2009, "Si"],
    ["12", "Attack on Titan 2", "Shonen", 16000, "Eren descubre la verdad sobre los titanes mientras la batalla se intensifica.", 20, "https://static.wikia.nocookie.net/shingeki-no-kyojin/images/f/f0/Volumen_2_%28Japones%29.png/revision/latest?cb=20180720023531&path-prefix=es", "Hajime Isayama", "Ovni Press", 2009, "Si"],
    ["13", "Demon Slayer 1", "Shonen", 13500, "Tanjiro Kamado busca venganza contra los demonios que masacraron a su familia.", 20, "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/9/92/Kimetsu_no_Yaiba_V1jap.png/revision/latest?cb=20190925044832&path-prefix=es", "Koyoharu Gotouge", "Ivrea", 2016, "Si"],
    ["14", "Demon Slayer 2", "Shonen", 13500, "Tanjiro entrena para convertirse en un asesino de demonios.", 20, "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/a3/Kimetsu_no_Yaiba_V2.png/revision/latest?cb=20181206190746", "Koyoharu Gotouge", "Ivrea", 2016, "Si"],
    ["15", "Death Note 1", "Seinen", 14500, "Light Yagami encuentra un cuaderno con el poder de matar a cualquiera cuyo nombre sea escrito en él.", 20, "https://static.wikia.nocookie.net/deathnote/images/b/b3/DEATHN01-1-.jpg/revision/latest?cb=20120407140356&path-prefix=es", "Tsugumi Ohba", "Ivrea", 2003, "No"],
    ["16", "Death Note 2", "Seinen", 14500, "L y Light comienzan su batalla de ingenio y estrategia.", 20, "https://static.wikia.nocookie.net/deathnote/images/3/37/Tomo_2_death_note.jpg/revision/latest?cb=20120407143605&path-prefix=es", "Tsugumi Ohba", "Ivrea", 2003, "No"],
    ["17", "Spy x Family 1", "Shonen", 14000, "Twilight, un espía de elite, debe formar una familia falsa para completar su misión.", 20, "https://static.wikia.nocookie.net/spy-x-family/images/a/a2/Vol_1_JP.png/revision/latest/scale-to-width-down/1000?cb=20210518162251&path-prefix=es", "Tatsuya Endo", "Ivrea", 2019, "No"],
    ["18", "Spy x Family 2", "Shonen", 14000, "La misión de Twilight se complica cuando su hija adoptiva es telépata y su esposa una asesina.", 20, "https://static.wikia.nocookie.net/spy-x-family/images/8/85/Vol_2_JP.png/revision/latest/scale-to-width-down/1000?cb=20210518161415&path-prefix=es", "Tatsuya Endo", "Ivrea", 2019, "No"],
    ["19", "Blue Lock 1", "Shonen", 13500, "Un riguroso programa de entrenamiento busca crear al mejor delantero del mundo.", 20, "https://static.wikia.nocookie.net/bluelock/images/7/77/JP_Volume_1.png/revision/latest/scale-to-width-down/1000?cb=20191026192410", "Muneyuki Kaneshiro", "Ivrea", 2018, "Si"],
    ["20", "Blue Lock 2", "Shonen", 13500, "Los participantes del Blue Lock se enfrentan en intensas pruebas para demostrar su valía.", 20, "https://static.wikia.nocookie.net/bluelock/images/7/75/JP_Volume_2.png/revision/latest/scale-to-width-down/1000?cb=20191026192428", "Muneyuki Kaneshiro", "Ivrea", 2018, "Si"],
    ["21", "Hunter x Hunter 1", "Shonen", 15500, "Gon Freecss inicia su viaje para convertirse en cazador y encontrar a su padre.", 20, "https://static.wikia.nocookie.net/hunterxhunter/images/1/1e/Volumen_01.jpg/revision/latest?cb=20180919031459&path-prefix=es", "Yoshihiro Togashi", "Ivrea", 1998, "Si"],
    ["22", "Hunter x Hunter 2", "Shonen", 15500, "Gon y Killua comienzan su entrenamiento en la Torre Celestial.", 20, "https://static.wikia.nocookie.net/hunterxhunter/images/8/89/Volumen_02.jpg/revision/latest?cb=20180919031500&path-prefix=es", "Yoshihiro Togashi", "Ivrea", 1998, "Si"]
];

// Creación del inventario con manejo de errores
let inventario = [];
try {
    inventario = listaArticulos.map(articulo => new Articulo(...articulo));
    console.log('Inventario cargado exitosamente');
} catch (error) {
    console.error('Error al cargar el inventario:', error.message);
}

