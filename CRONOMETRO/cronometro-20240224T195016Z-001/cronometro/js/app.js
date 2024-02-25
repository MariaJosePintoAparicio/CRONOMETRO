
const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar'); 


let [horas , minutos , segundos] = [0, 0, 0];

let intervalodetiempo;
let estadocronometro = 'pausado';

function actualizarcronometro() {
    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;


       if (minutos / 60 === 1) {
           minutos = 0;
           horas++;

       }
    }

    const segundosconformato = asignarformato(segundos);
    const minutosconformato = asignarformato(minutos);
    const horasconformato = asignarformato(horas);
    
    cronometro.innerText = `${horasconformato} : ${minutosconformato} : ${segundosconformato}`;
    
}

function asignarformato(unidadDetiempo)  {
    return unidadDetiempo < 10 ? '0' + unidadDetiempo : unidadDetiempo ;
}
 
botonInicioPausa.addEventListener('click', function() {
    if (estadocronometro == 'pausado') {
        intervalodetiempo = window.setInterval(actualizarcronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadocronometro = 'andando';
    } else {
        window.clearInterval(intervalodetiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadocronometro = 'pausado';
    }
});

botonReiniciar.addEventListener('click', function() {
    window.clearInterval(intervalodetiempo);

    segundos = 0;
    minutos = 0;
    horas = 0;

    cronometro.innerText = '00:00:00';

    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');

    estadocronometro = 'pausado';
});
