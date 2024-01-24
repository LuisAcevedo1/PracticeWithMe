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


function alerta() {
    window.alert("SUMA DE DOS NUMEROS");
    input1 = Number(window.prompt("Introduce el primer numero:"));
    input2 = Number(window.prompt("Introduce el segundo numero:"));
    window.alert("El resultado de la suma entre " + input1 + " y "+ input2 + " es: " + (input1+input2));
}

function consolas() {
    let info = document.getElementById("consola").value;
    document.getElementById("consolaVacia").innerText = "Mensaje envido, para verlo abre la consola";
    console.log(info);   
}