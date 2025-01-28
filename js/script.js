/* Cosas que voy a necesitar para primer entrega:

Prompt, Alert, Confirm, Variables
Bucles,
funciones,
condicionales,
arrays

*/


/* Idea de e-commerce - venta de comics */

/* 

--esto en varias funciones i guess--

array/objeto -> lista prod (20, 5 atributos)
bucle i++ para recorrer array
ingreso por promt de titulo
valida stock, si no posee mensaje error
consulta para agregar a carrito
subtotal compra monto
si valida compra, resta de cantidad
informa reserva de

*/


/* Creación de objetos y listas */

/*

const articulo1 = {
    titulo : "Shaman King",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 1500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo2 = {
    titulo : "Konosuba",
    clasificacion : "Manga",
    genero : "Isekai",
    precioUnitario : 500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo3 = {
    titulo : "Slam Dunk",
    clasificacion : "Manga",
    genero : "Deportes",
    precioUnitario : 1500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo4 = {
    titulo : "Hellsing",
    clasificacion : "Manga",
    genero : "Seinen",
    precioUnitario : 1000,
    flagDescuento : false,
    tiene_stock : true
}

const articulo5 = {
    titulo : "Digimon",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo6 = {
    titulo : "Doraemon",
    clasificacion : "Manga",
    genero : "Kodomo",
    precioUnitario : 200,
    flagDescuento : false,
    tiene_stock : true
}

const articulo7 = {
    titulo : "Dr Stone",
    clasificacion : "Manga",
    genero : "Ciencia ficción",
    precioUnitario : 1000,
    flagDescuento : false,
    tiene_stock : true
}

const articulo8 = {
    titulo : "Fullmetal Alchemist",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo9 = {
    titulo : "Tensei shitara Slime",
    clasificacion : "Manga",
    genero : "Isekai",
    precioUnitario : 1000,
    flagDescuento : false,
    tiene_stock : true
}

const articulo10 = {
    titulo : "Blue Lock",
    clasificacion : "Manga",
    genero : "Deportes",
    precioUnitario : 500,
    flagDescuento : false,
    tiene_stock : true
}

const articulo11 = {
    titulo : "Berserk",
    clasificacion : "Manga",
    genero : "Seinen",
    precioUnitario : 2000,
    flagDescuento : true,
    tiene_stock : true
}

const articulo12 = {
    titulo : "Rurouni Kenshin",
    clasificacion : "Manga",
    genero : "Seinen",
    precioUnitario : 1500,
    flagDescuento : true,
    tiene_stock : true
}

const articulo13 = {
    titulo : "Dragon Ball",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 500,
    flagDescuento : true,
    tiene_stock : true
}

const articulo14 = {
    titulo : "Jujutsu Kaisen",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 1250,
    flagDescuento : true,
    tiene_stock : true
}

const articulo15 = {
    titulo : "Dragon Ball Z",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 1750,
    flagDescuento : true,
    tiene_stock : true
}

const articulo16 = {
    titulo : "ReZero",
    clasificacion : "Manga",
    genero : "Isekai",
    precioUnitario : 1000,
    flagDescuento : true,
    tiene_stock : true
}

const articulo17 = {
    titulo : "Haikyuu",
    clasificacion : "Manga",
    genero : "Deportes",
    precioUnitario : 500,
    flagDescuento : true,
    tiene_stock : true
}

const articulo18 = {
    titulo : "Evangelion",
    clasificacion : "Manga",
    genero : "Seinen",
    precioUnitario : 3000,
    flagDescuento : true,
    tiene_stock : true
}

const articulo19 = {
    titulo : "Kimetsu no Yaiba",
    clasificacion : "Manga",
    genero : "Shonen",
    precioUnitario : 1000,
    flagDescuento : true,
    tiene_stock : true
}

const articulo20 = {
    titulo : "Sword Art Online",
    clasificacion : "Manga",
    genero : "Ciencia ficción",
    precioUnitario : 1500,
    flagDescuento : true,
    tiene_stock : true
}

const catalogo = [articulo1, articulo2, articulo3, articulo4, articulo5, 
                articulo6, articulo7, articulo8, articulo9, articulo10, 
                articulo11, articulo12, articulo13, articulo14, articulo15, 
                articulo16, articulo17, articulo18, articulo19, articulo20];


let saludoInicial = prompt("Quisieras ver nuestro catalogo? (SI/NO)").toLowerCase();

    if (saludoInicial = "si"){
        confirm("A continuación les mostramos nuestro catálogo")

    }else{
        "Gracias por su visita, esperamos que vuelva pronto."
    }



    */


/* Para entregar 1era entrega porque no me salió lo anterior, pero voy a ir por ahí */

let listaPrestamos = [];


function prestamoBancario(dineroSolicitado, cantidadMesesPrestamo){
    let numeroCliente = 0;
    if (dineroSolicitado <= 0){
        confirm("Ha ingresado un valor menor a 0, no se efectuó la adjudicación del préstamo.")
    }else{
        numeroCliente = i++;
        let interesMensual = 1.5;
        let prestamoSinInteres = parseInt(dineroSolicitado);
        let plazoCuotasMeses = parseInt(cantidadMesesPrestamo)
            if (plazoCuotasMeses > 12){
                let interesMensual = 2.5;
                let calcularInteres = plazoCuotasMeses * interesMensual;
                let costoInteres = prestamoSinInteres + (prestamoSinInteres * calcularInteres / 100);
                let valorTotalADevolver = dineroSolicitado + costoInteres;
                let valorCuotaADevolver = valorTotalADevolver / plazoCuotasMeses;
                alert("Usted solicitó $" + prestamoSinInteres + ", a ser devuelto en un plazo de " + plazoCuotasMeses + "meses. Esto nos arroja una tasa de interés de %" + calcularInteres + ", generando un total a reintegrar de $" + valorTotalADevolver + ". Las cuotas mensuales a devolver son de $" + valorCuotaADevolver);
                const cliente = {
                    nroCliente : numeroCliente,
                    nroDocumento : numeroIdentificacion,
                    passUser : passPrestamo,
                    prestamoTotal : valorTotalADevolver,
                    cantidadMesesADevolver: cantidadMesesPrestamo
                    }
                listaPrestamos.push(cliente)
                confirmaPrestamo = false;
                }
            else{
                let calcularInteres = plazoCuotasMeses * interesMensual;
                let costoInteres = prestamoSinInteres + (prestamoSinInteres * calcularInteres / 100);
                let valorTotalADevolver = dineroSolicitado + costoInteres;
                let valorCuotaADevolver = valorTotalADevolver / plazoCuotasMeses;
                alert("Usted solicitó $" + prestamoSinInteres + ", a ser devuelto en un plazo de " + plazoCuotasMeses + "meses. Esto nos arroja una tasa nominal de %" + calcularInteres + ", generando un total a reintegrar de $" + valorTotalADevolver + ". Las cuotas mensuales a devolver son de $" + valorCuotaADevolver);
                const cliente = {
                    nroCliente : numeroCliente,
                    nroDocumento : numeroIdentificacion,
                    passUser : passPrestamo,
                    prestamoTotal : valorTotalADevolver,
                    cantidadMesesADevolver: cantidadMesesPrestamo
                    }
                listaPrestamos.push(cliente)
                confirmaPrestamo = false;
                }
        }
}

confirm("Bienvenido a nuestra banca! Se encuentra en la sección de préstamos.");
let consultaCliente =  prompt("¿Desea realizar un prestamo con nosotros? (SI/NO)").toLowerCase();
    if (consultaCliente === "si"){
        let confirmaPrestamo = true;
        let nombreCliente = prompt("Primero te vamos a solicitar que a continuación nos digas tu nombre y apellido").toLowerCase();
        let numeroIdentificacion = prompt("Segundo, te pediremos tu número de identificación nacional, sin puntos ni espacios").toLowerCase();
        let passPrestamo = prompt("Y por último te vamos a pedir que generes una contraseña para guardar tu información").toLowerCase();
        let dineroSolicitado = prompt("Ingrese el dinero a solicitar");
        let cantidadMesesPrestamo = prompt("Ingrese la cantidad de meses en la que desea devolver el dinero (en numeros)");
        /*do{
            return prestamoBancario();
            break;
        }while(confirmaPrestamo)*/ 
    }
    else{
        let consultaClientePrestamo = prompt("¿Desea validar si ya cuenta con un prestamo en nuestra banca? (SI/NO)").toLowerCase();
        if (consultaClientePrestamo === "si"){
            validoDocumento = prompt("Ingrese su número de documento:").toLowerCase();
            validoPass = prompt("Ingrese su contraseña:").toLowerCase();
            for (let i = 0; i > listaPrestamos.length; i++){
                if (validoDocumento === listaPrestamos[i].nroDocumento && validoPass === listaPrestamos[i].passUser){
                    confirm(`Su número de cliente es ${listaPrestamos[i].nroCliente}. Solicitó un préstamo por $${listaPrestamos[i].prestamoTotal} a ser devuelto en ${listaPrestamos[i].cantidadMesesADevolver}.`);
                    break;
                }
                else{
                    alert("Usted no cuenta con una cuenta, es probable que aún no tenga un préstamo con nosotros")
                }
            }
        }
        else{
            confirm("Lo esperamos en alguna otra oportunidad");
        }
    }