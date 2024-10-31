document.getElementById('form-anotate').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
  
    // Muestra el modal personalizado
    document.getElementById('customPrompt').style.display = 'flex';
  });
  
  // Función para cerrar el modal y redirigir al index
  function closePrompt() {
    document.getElementById('customPrompt').style.display = 'none';
  }
  
  // Función para redirigir al index
  function redirectToIndex() {
    window.location.href = '../index.html';
  }
  