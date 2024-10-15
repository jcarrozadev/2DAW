window.addEventListener('load', () => {

    let cuatri = parseInt(prompt("Introduce número de mes:"));

    switch (cuatri) {
        case 1: case 2: case 3: case 4:
            alert("Estás en el primer cuatrimestre");
        case 5: case 6: case 7: case 8:
            alert("Estás en el segundo cuatrimestre");
        case 9: case 10: case 11: case 12:
            alert("Estás en el cuarto cuatrimestre");

    }

});