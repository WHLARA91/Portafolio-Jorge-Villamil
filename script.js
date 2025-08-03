// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const error = document.getElementById("mensaje-error");

  // Validación del correo con expresión regular
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre === "" || correo === "" || mensaje === "") {
    e.preventDefault();
    error.textContent = "Por favor completa todos los campos.";
    error.style.display = "block";
    return;
  }

  if (!regexCorreo.test(correo)) {
    e.preventDefault();
    error.textContent = "Por favor introduce un correo válido.";
    error.style.display = "block";
    return;
  }

  // Si todo está correcto
  error.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "Por favor completa correctamente todos los campos.";
    } else {
      e.preventDefault(); // Evitamos que se recargue la página

      // Mostrar SweetAlert2 de confirmación automática
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé pronto.',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000, // 3 segundos
        timerProgressBar: true
      });

      form.reset(); // Limpia el formulario
      message.style.display = "none"; // Oculta cualquier mensaje adicional
    }
  });
});

// Efecto al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Loader al cargar
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

