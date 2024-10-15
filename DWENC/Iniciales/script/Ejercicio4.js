window.addEventListener('load', () => {

    let actual = new Date().getFullYear()

    let anyo = parseInt(prompt("Introduce año de nacimiento: "));

    if (anyo>=actual) {
        console.log("El número introducido no es válido")
    } else {
        console.log(`Su edad es: ${actual-anyo}`);
    }    

});