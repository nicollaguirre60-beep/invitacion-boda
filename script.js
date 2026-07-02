// ============================
// BOTÓN PORTADA
// ============================

const boton = document.getElementById("btnComenzar");
const musica = document.getElementById("musica");

if (boton) {

  boton.addEventListener("click", () => {

    if(musica){

        musica.play().then(() => {
            btnMusica.textContent="🔊";
        }).catch(()=>{});

    }

    const destino=document.getElementById("historia").offsetTop;

    window.scroll({
        top: destino,
        left:0,
        behavior:"smooth"
    });

});

}

// ============================
// ANIMACIÓN HISTORIA
// ============================

const historia = document.querySelector(".historia");

if (historia) {

 const observer = new IntersectionObserver((entries) => {

 entries.forEach(entry => {

 if (entry.isIntersecting) {

 historia.classList.add("mostrar");

 }

 });

 }, {

 threshold:0.3

 });

 observer.observe(historia);

}

// ============================
// CUENTA REGRESIVA
// ============================

const fechaBoda = new Date("2026-07-03T15:00:00").getTime();

setInterval(() => {

 const ahora = new Date().getTime();

 const diferencia = fechaBoda - ahora;

 document.getElementById("dias").textContent =
 Math.floor(diferencia / (1000*60*60*24));

 document.getElementById("horas").textContent =
 Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

 document.getElementById("minutos").textContent =
 Math.floor((diferencia%(1000*60*60))/(1000*60));

 document.getElementById("segundos").textContent =
 Math.floor((diferencia%(1000*60))/1000);

},1000);

//============================
// CARRUSEL INFINITO
//============================

const slider = document.getElementById("slider");

if(slider){

slider.innerHTML += slider.innerHTML;

} // ============================
// BOTÓN MÚSICA
// ============================

const btnMusica = document.getElementById("btnMusica");

if (btnMusica) {

    btnMusica.addEventListener("click", () => {

        if (musica.paused) {

            musica.play();

            btnMusica.textContent = "🔊";

        } else {

            musica.pause();

            btnMusica.textContent = "🔇";

        }

    });

}