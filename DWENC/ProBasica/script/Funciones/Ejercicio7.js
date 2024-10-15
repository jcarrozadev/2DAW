window.addEventListener('load', () => {

    let suma = 0;

    for(let i = 1; i<=5;i++){
        let num = parseInt(prompt("Introduce numero "+i+":"));

        suma = suma + num;
    }

    alert("La suma es: "+suma);

});