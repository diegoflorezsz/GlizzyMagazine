// contactForm.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (!form) {
    console.warn("Formulario no encontrado. Asegúrate de que el ID sea correcto.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita el envío tradicional que da error 405

    const formData = {
      nombre: form.nombre.value,
      email: form.email.value,
      tema: form.tema.value,
      mensaje: form.mensaje.value,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status} - ${response.statusText}`);

      const data = await response.json();

      // Guardar en localStorage
      localStorage.setItem("ultimoMensajeGlizzy", JSON.stringify(data));

      alert("¡Mensaje enviado y guardado correctamente!");
      form.reset();
    } catch (error) {
      alert("Hubo un error al enviar el mensaje. Intenta más tarde.");
      console.error("Error al enviar formulario:", error);
    }
  });
});