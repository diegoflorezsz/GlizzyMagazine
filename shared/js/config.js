// config.js

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form, index) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Creamos un FormData a partir del formulario
      const formData = new FormData(form);

      // Convertimos FormData en un objeto JSON
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error en la petición");

        const json = await response.json();

        // Guardamos en localStorage con clave única por formulario
        localStorage.setItem(`form_config_${index + 1}`, JSON.stringify(json));

        alert("Formulario enviado y guardado correctamente en localStorage.");
      } catch (error) {
        console.error("Error al enviar formulario:", error);
        alert("Ocurrió un error al enviar el formulario.");
      }
    });
  });
});