document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  // Mostrar el banner si no hay cookies aceptadas
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex";
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  declineButton.addEventListener("click", function () {
    cookieBanner.style.display = "none";
  });
});