var lado_derecho = document.getElementsByClassName("lado_derecho");
var lado_izquierdo = document.getElementsByClassName("lado_izquierdo");
var lado_triple = document.getElementsByClassName("lado_triple");

var equipo_local = document.getElementById("equipo_local");
var equipo_visitante = document.getElementById("equipo_visitante");
var equipo_puntuando = 0;

var tiro_libre = document.getElementById("tiro_libre");
var tiro_libre_disponible = false;

var puntuacion_local = 0;
var puntuacion_visitante = 0;
var puntuacion_total;
var marcador = document.getElementById("marcador");

function ActualizarTablero(){
    puntuacion_total = puntuacion_local + " - " + puntuacion_visitante;  
    marcador.innerHTML = puntuacion_total;
}
ActualizarTablero();


tiro_libre.addEventListener("click", function () {
    tiro_libre_disponible = true;
})

equipo_local.addEventListener("click", function () {
    if (tiro_libre_disponible == true){
        puntuacion_local += 1;
        ActualizarTablero();
        tiro_libre_disponible = false;
    } else {
        equipo_puntuando = 1;
    }
})

equipo_visitante.addEventListener("click", function () {
    if (tiro_libre_disponible == true){
        puntuacion_visitante += 1;
        ActualizarTablero();
        tiro_libre_disponible = false;
    } else {
        equipo_puntuando = 2;
    }
})

for(let i = 0; i < lado_derecho.length; i++) {
    lado_derecho[i].addEventListener("click", function() {
            if (equipo_puntuando == 1){
                console.log("Equipo local +2 puntos");
                puntuacion_local += 2;
                ActualizarTablero();
            } else if (equipo_puntuando == 2){
                console.log("Equipo visitante +3 puntos");
                puntuacion_visitante += 3;
                ActualizarTablero();
            } else {
                console.log("Selecciona el equipo que ha marcado");
            }
            equipo_puntuando = 0;
    })
}

for(let i = 0; i < lado_izquierdo.length; i++) {
    lado_izquierdo[i].addEventListener("click", function() {
        if (equipo_puntuando == 1){
            console.log("Equipo local +3 puntos");
            puntuacion_local += 3;
            ActualizarTablero();
        } else if (equipo_puntuando == 2){
            console.log("Equipo visitante +2 puntos");
            puntuacion_visitante += 2;
            ActualizarTablero();
        } else {
            console.log("Selecciona el equipo que ha marcado");
        }
        equipo_puntuando = 0;
    })
}

for(let i = 0; i < lado_triple.length; i++) {
    lado_triple[i].addEventListener("click", function() {
        if (equipo_puntuando == 1){
            console.log("Equipo local +3 puntos");
            puntuacion_local += 3;
            ActualizarTablero();
        } else if (equipo_puntuando == 2){
            console.log("Equipo visitante +3 puntos");
            puntuacion_visitante += 3;
            ActualizarTablero();
        } else {
            console.log("Selecciona el equipo que ha marcado");
        }
        equipo_puntuando = 0;
    })
}

