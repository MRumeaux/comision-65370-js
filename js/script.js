
/* Para entregar 1era entrega porque no me salió lo anterior, pero voy a ir por ahí */



function prestamoBancario(dineroSolicitado, cantidadMesesPrestamo){
    if (dineroSolicitado <= 0){
        confirm("Ha ingresado un valor menor a 0, no se efectuó la adjudicación del préstamo.")
    }else{
        let interesMensual = 1.5;
        let prestamoSinInteres = parseInt(dineroSolicitado);
        let plazoCuotasMeses = parseInt(cantidadMesesPrestamo) 
            if (plazoCuotasMeses > 12){
                let interesMensual = 2.5;
                let calcularInteres = plazoCuotasMeses * interesMensual;
                let costoInteres = (prestamoSinInteres * calcularInteres / 100);
                let valorTotalADevolver = prestamoSinInteres + costoInteres;
                let valorCuotaADevolver = valorTotalADevolver / plazoCuotasMeses;
                alert("Usted solicitó $" + prestamoSinInteres + ", a ser devuelto en un plazo de " + plazoCuotasMeses + " meses. Esto nos arroja una tasa de interés de %" + calcularInteres + ", generando un total a reintegrar de $" + valorTotalADevolver + ". Las cuotas mensuales a devolver son de $" + valorCuotaADevolver);
                }
            else{
                let calcularInteres = plazoCuotasMeses * interesMensual;
                let costoInteres = (prestamoSinInteres * calcularInteres / 100);
                let valorTotalADevolver = prestamoSinInteres + costoInteres;
                let valorCuotaADevolver = valorTotalADevolver / plazoCuotasMeses;
                alert("Usted solicitó $" + prestamoSinInteres + ", a ser devuelto en un plazo de " + plazoCuotasMeses + " meses. Esto nos arroja una tasa nominal de %" + calcularInteres + ", generando un total a reintegrar de $" + valorTotalADevolver + ". Las cuotas mensuales a devolver son de $" + valorCuotaADevolver);
                }
        }
}


confirm("Bienvenido a nuestra banca! Se encuentra en la sección de préstamos.");
let listaPrestamos = [];
let consultaCliente =  prompt("¿Desea realizar un prestamo con nosotros? (SI/NO)").toLowerCase();
if (consultaCliente == "si"){
    let confirmaPrestamo = true;
    let nombreCliente = prompt("Primero te vamos a solicitar que a continuación nos digas tu nombre y apellido").toLowerCase();
    let numeroIdentificacion = prompt("Segundo, te pediremos tu número de identificación nacional, sin puntos ni espacios").toLowerCase();
    let passPrestamo = prompt("Y por último te vamos a pedir que generes una contraseña para guardar tu información").toLowerCase();
    let dineroSolicitado = prompt("Ingrese el dinero a solicitar");
    let cantidadMesesPrestamo = prompt("Ingrese la cantidad de meses en la que desea devolver el dinero (en numeros)");
        
    prestamoBancario(dineroSolicitado, cantidadMesesPrestamo);

    const cliente = {
        nombreClienteBancario : nombreCliente,
        nroDocumento : numeroIdentificacion,
        passUser : passPrestamo
        }
    listaPrestamos.push(cliente)
}
else if (consultaCliente == "no"){
    let consultaClientePrestamo = prompt("¿Desea validar si ya cuenta con un prestamo en nuestra banca? (SI/NO)").toLowerCase();
    if (consultaClientePrestamo == "si"){
        validoDocumento = prompt("Ingrese su número de documento:").toLowerCase();
        validoPass = prompt("Ingrese su contraseña:").toLowerCase();
        for (let i = 0; i > listaPrestamos.length; i++){
            if (validoDocumento == listaPrestamos[i].nroDocumento && validoPass == listaPrestamos[i].passUser){
                confirm(`Bienvenido ${listaPrestamos[i].nombreClienteBancario}, asociamos en cuenta que el número de documento ${listaPrestamos[i].nroDocumento} cuenta con un préstamo solicitado.`);
                }
            else{
                alert("No encontramos un registro en nuestra base, es probable que aún no tenga un préstamo con nosotros. Que tenga un buen día.")
            }
        }
    }
    else if (consultaClientePrestamo == "no"){
        confirm("Lo esperamos en alguna otra oportunidad");
        }
    else{
        alert("Estás escribiendo cualquier verdura, probá más tarde")
    }
    }
else{
        alert("Estás escribiendo cualquier verdura, probá más tarde")
}

console.log(listaPrestamos)