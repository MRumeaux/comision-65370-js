
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
        
        return prestamoBancario();
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