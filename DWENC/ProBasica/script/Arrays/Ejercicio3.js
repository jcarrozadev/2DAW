window.addEventListener('load', () => {
    
    let alturas = [];
    let suma = 0;

    for (let i = 0 ; i < 5 ; i++) {
        let intAltura = parseInt(prompt("Introduce altura persona "+(i+1)+":"));

        alturas.push(intAltura);
        suma = suma + alturas[i];
    }

    alert("La altura promedio es: "+suma/5);

});