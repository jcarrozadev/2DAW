window.addEventListener('load', () => {

    let colores = ['verde','azul','amarillo','rojo','gris'];

    let agregar = prompt("Agrega un color: ");

    colores.push(agregar); // Agrega el color que me entregue el usuario

    console.log(colores); // Mostramos el array

});