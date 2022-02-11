const boton = document.getElementById('colorfav');
boton.setAttribute('value', 'Azul')
const imagen = document.getElementById('img');

function clickButton (){
    const contenedor = document.getElementById('h');
    contenedor.style.backgroundColor = "rgba(0, 140, 186, 0.5)";
    document.body.style.backgroundColor ="rgb(28, 28, 29)";
    boton.innerText = "Azul";
}
