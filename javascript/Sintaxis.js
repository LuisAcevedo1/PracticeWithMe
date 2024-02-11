function variable1(){
    let texto = document.getElementById("texto").value;
    let resultado = document.getElementById("resultado1");
    resultado.innerHTML = `Este elemento fue creado en una variable:<br>let texto = '${texto}'`;
}

function variable2() {
    let esONoEs = document.getElementById("esONoEs").value;
    
    let resultado = document.getElementById("resultado2");
    
    // Utiliza la función parseFloat para convertir la cadena a un número de punto flotante
    let numero = parseFloat(esONoEs);
    
    // Verifica si es un número y no es NaN (Not a Number)
    if (!isNaN(numero)) {
        // Verifica si el número tiene decimales
        if (numero % 1 !== 0) {
            resultado.innerHTML = `${numero} Es un numero con decimal`;
        } else {
            resultado.innerHTML = `${numero} Es un numero`;
        }
    } else {
        resultado.innerHTML = `No es un numero valido`;  
    }
}
