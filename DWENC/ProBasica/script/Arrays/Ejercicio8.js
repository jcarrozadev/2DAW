window.addEventListener('load', () => {

    let numeros = [5,4,3,2,1];

    for(let i=0;i<numeros.length;i++) {
        if (numeros[i]%2==0) {
            alert(`El numero ${numeros[i]} es par`);
        } else {
            alert(`El numero ${numeros[i]} es impar`);
        }
    }

});