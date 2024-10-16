let texto = document.querySelector('gitPlantilla').textContent.replace(/\t/g, '').replace(/\n\s*/g, '');
const copiarContenido = async () => {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}