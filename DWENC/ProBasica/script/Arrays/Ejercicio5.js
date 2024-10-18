window.addEventListener('load', () => {

    let intr = [];
    let mayores = 0;
    let suma = 0;

    for (let i = 0; i < 8; i++) {
        intr.push(Number(prompt("Introduce en el vector "+(i+1)+":")));

        suma+=intr[i];

        if (intr[i] > 36) {
            mayores += intr[i];
        }

    }

    alert("La suma total es: "+suma);
    alert("La suma de mayores a 36 es: "+mayores);

});