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

var boton_pausar = document.getElementById("pausar_juego");
var boton_temporizador = document.getElementById("iniciar_tiempo")
var tiempo_actual = document.getElementById("tiempo_actual");
var fase = 0;

function ActualizarTablero() {
  document.getElementById("score-a").innerHTML = puntuacion_local;
  document.getElementById("score-b").innerHTML = puntuacion_visitante;
}
ActualizarTablero();

tiro_libre.addEventListener("click", function () {
  tiro_libre_disponible = true;
});

equipo_local.addEventListener("click", function () {
  if (tiro_libre_disponible == true) {
    puntuacion_local += 1;
    ActualizarTablero();
    tiro_libre_disponible = false;
  } else {
    equipo_puntuando = 1;
  }
});

equipo_visitante.addEventListener("click", function () {
  if (tiro_libre_disponible == true) {
    puntuacion_visitante += 1;
    ActualizarTablero();
    tiro_libre_disponible = false;
  } else {
    equipo_puntuando = 2;
  }
});

for (let i = 0; i < lado_derecho.length; i++) {
  lado_derecho[i].addEventListener("click", function () {
    if (equipo_puntuando == 1) {
      console.log("Equipo local +2 puntos");
      puntuacion_local += 2;
      ActualizarTablero();
    } else if (equipo_puntuando == 2) {
      console.log("Equipo visitante +3 puntos");
      puntuacion_visitante += 3;
      ActualizarTablero();
    } else {
      console.log("Selecciona el equipo que ha marcado");
    }
    equipo_puntuando = 0;
  });
}

for (let i = 0; i < lado_izquierdo.length; i++) {
  lado_izquierdo[i].addEventListener("click", function () {
    if (equipo_puntuando == 1) {
      console.log("Equipo local +3 puntos");
      puntuacion_local += 3;
      ActualizarTablero();
    } else if (equipo_puntuando == 2) {
      console.log("Equipo visitante +2 puntos");
      puntuacion_visitante += 2;
      ActualizarTablero();
    } else {
      console.log("Selecciona el equipo que ha marcado");
    }
    equipo_puntuando = 0;
  });
}

for (let i = 0; i < lado_triple.length; i++) {
  lado_triple[i].addEventListener("click", function () {
    if (equipo_puntuando == 1) {
      console.log("Equipo local +3 puntos");
      puntuacion_local += 3;
      ActualizarTablero();
    } else if (equipo_puntuando == 2) {
      console.log("Equipo visitante +3 puntos");
      puntuacion_visitante += 3;
      ActualizarTablero();
    } else {
      console.log("Selecciona el equipo que ha marcado");
    }
    equipo_puntuando = 0;
  });
}


boton_temporizador.addEventListener("click", function () {
  iniciar_tiempo();
  tiempo_actual.innerHTML = "Primer Tiempo";    
});

function iniciar_descanso_largo(){
  if (fase == 3){
      // Establece la fecha de finalización del temporizador
      const countDownDate = new Date().getTime() + 20 * 60 * 1000;
      // Actualiza el temporizador cada segundo
      const x = setInterval(function() {
      // Obtiene la fecha y hora actual
      const now = new Date().getTime();

      // Calcula la diferencia entre la fecha de finalización y la fecha actual
      const distance = countDownDate - now;

      // Calcula los minutos y segundos restantes
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Muestra el temporizador en la página web
      document.getElementById("temporizador").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Si el temporizador llega a cero, muestra un mensaje de finalización
      if (distance < 0) {
          clearInterval(x);
          
          fase++;
          if (fase == 2){
              tiempo_actual.innerHTML = "Segundo tiempo";
          } else if (fase == 4){
              tiempo_actual.innerHTML = "Tercer tiempo";
          } else if (fase == 6){
              tiempo_actual.innerHTML = "Cuarto tiempo";
          }
          iniciar_tiempo();
          document.getElementById("temporizador").innerHTML = "2:00";
          console.log(fase);
      }
      }, 1000);
  }
}


function iniciar_descanso(){
  if (fase == 1 || fase == 3 || fase == 5){
      // Establece la fecha de finalización del temporizador
      const countDownDate = new Date().getTime() + 2 * 60 * 1000;
      // Actualiza el temporizador cada segundo
      const x = setInterval(function() {
      // Obtiene la fecha y hora actual
      const now = new Date().getTime();

      // Calcula la diferencia entre la fecha de finalización y la fecha actual
      const distance = countDownDate - now;

      // Calcula los minutos y segundos restantes
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Muestra el temporizador en la página web
      document.getElementById("temporizador").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Si el temporizador llega a cero, muestra un mensaje de finalización
      if (distance < 0) {
          clearInterval(x);
          
          fase++;
          if (fase == 2){
              tiempo_actual.innerHTML = "Segundo tiempo";
          } else if (fase == 4){
              tiempo_actual.innerHTML = "Tercer tiempo";
          } else if (fase == 6){
              tiempo_actual.innerHTML = "Cuarto tiempo";
          }
          iniciar_tiempo();
          document.getElementById("temporizador").innerHTML = "2:00";
          console.log(fase);
      }
      }, 1000);
  }
}

function iniciar_tiempo(){
  if (fase == 0 || fase == 2 || fase == 4 || fase == 6){
      // Establece la fecha de finalización del temporizador
      const countDownDate = new Date().getTime() + 12 * 60 * 1000;

      // Actualiza el temporizador cada segundo
      const x = setInterval(function() {
      // Obtiene la fecha y hora actual
      const now = new Date().getTime();

      // Calcula la diferencia entre la fecha de finalización y la fecha actual
      const distance = countDownDate - now;

      // Calcula los minutos y segundos restantes
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Muestra el temporizador en la página web
      document.getElementById("temporizador").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Si el temporizador llega a cero, muestra un mensaje de finalización
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("temporizador").innerHTML = "2:00";
          fase++;
          if (fase == 1){
              tiempo_actual.innerHTML = "Descanso 2min";
          } else if (fase == 3){
              tiempo_actual.innerHTML = "Descanso 15min";
              document.getElementById("temporizador").innerHTML = "15:00";
          } else if (fase == 5){
              tiempo_actual.innerHTML = "Descanso 2min";
          }
          if (fase == 3){
              iniciar_descanso_largo();
          } else {
              iniciar_descanso();
          }

      }
      }, 1000);
  }
}