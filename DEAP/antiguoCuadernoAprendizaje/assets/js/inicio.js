window.addEventListener('load', () => {
    gsap.to("#bg",{
        scrollTrigger:{
            scrub:1
        },
        scale:1.5,
    });
    gsap.to("#text",{
        scrollTrigger:{
            scrub: 1
        },
        y:250,
    });

    document.getElementById("u1").addEventListener("click",() =>{
        window.location.href = './unidades.html#temario1'; //Pagina de los apuntes.
    });
    document.getElementById("u2").addEventListener("click",() =>{
        window.location.href = './unidades.html#temario2'; //Pagina de los apuntes.
    });
    document.getElementById("u3").addEventListener("click",() =>{
        window.location.href = './unidades.html#temario3'; //Pagina de los apuntes.
    });
    
});
