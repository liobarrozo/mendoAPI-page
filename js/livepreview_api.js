const endpoint = "https://api.mendoapi.com/api/departamentos/01";
const outputEl = document.getElementById("json-output");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    // Extraemos las atracciones para mostrarlas aparte
    const { atracciones, ...rest } = data;

    // Construimos un string del JSON "rest" para tipeo
    const restJsonStr = JSON.stringify(rest, null, 2);

    let i = 0;

    // Limpiamos el contenedor para usar innerHTML luego
    outputEl.textContent = "";

    function typeWriter() {
      if (i < restJsonStr.length) {
        outputEl.textContent += restJsonStr.charAt(i);
        i++;
        setTimeout(typeWriter, 12);
      } else {
        // Cuando termina el tipeo del JSON normal, agregamos el details para atracciones
        const detailsHTML = `
          <details style="margin-top: 1rem; background:#111; color:#0f0; padding:1rem; border-radius:6px;">
            <summary style="cursor:pointer; font-weight:bold;">Atracciones (${
              atracciones.length
            }) (clic para ver)</summary>
            <pre style="white-space: pre-wrap;">${JSON.stringify(
              atracciones,
              null,
              2
            )}</pre>
          </details>
        `;
        outputEl.insertAdjacentHTML("beforeend", detailsHTML);
      }
    }

    typeWriter();
  })
  .catch((err) => {
    outputEl.textContent = "Error al cargar los datos.";
  });
