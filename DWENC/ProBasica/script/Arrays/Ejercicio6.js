window.addEventListener('load', () => {

    let empleados = [100,300,500,450,150];
    let entre = 0;
    let mas = 0;

    for(let i = 0; i < empleados.length+1; i++) {

        if (empleados[i] >= 100 && empleados[i] <= 300) 
            entre++;
        
        if (empleados[i] > 300)
            mas++;

    }

    alert("Entre 100 y 300: "+entre);
    alert("Más de 300: "+mas);

});