document.addEventListener("DOMContentLoaded", function() {
    function actualizarReloj() {
      var relojElement = document.getElementById("reloj");
      var horaActual = new Date();
      var horas = horaActual.getHours();
      var minutos = horaActual.getMinutes();
      var segundos = horaActual.getSeconds();
  
      var ampm = horas >= 12 ? 'PM' : 'AM';
      horas = horas % 12 || 12;

      var horaFormateada = `${horas}:${minutos}:${segundos} ${ampm}`;
  
      relojElement.textContent = horaFormateada;
    }
  
    setInterval(actualizarReloj, 1000);
    actualizarReloj();
  });
  