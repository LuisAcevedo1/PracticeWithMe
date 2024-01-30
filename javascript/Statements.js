

function color(){
    let colorSelect = document.getElementById("colorPick").value;
    let borde = document.getElementById("miBorde");
    borde.style.backgroundColor = colorSelect;
    borde.innerHTML = "El color se a cambiado exitosamente";
}