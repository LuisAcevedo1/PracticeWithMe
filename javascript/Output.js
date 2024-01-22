//Esta funcion se usa de ejemplo para ver como se manipulan los elementos con innerHTML
function Saludo(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let mensaje = "Hola, tu nombre es " + nombre + " , y tu apellido es " + apellido + " un gusto."
    document.getElementById("resultado").innerHTML = mensaje;
}

function usarDocumentWrite() {
    document.write("<p>¡Hola, este texto fue escrito con document.write()!</p>");
}
