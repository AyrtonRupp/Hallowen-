document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    // Aquí podrías añadir código para guardar la preferencia en localStorage o cookies
  });
  
  document.getElementById("decline-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    // También podrías añadir código para manejar el rechazo de cookies
  });
  