document.querySelectorAll('.faq__pregunta').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    const respuesta = pregunta.nextElementSibling;

    // Cerrar otros abiertos
    document.querySelectorAll('.faq__respuesta').forEach(r => {
      if (r !== respuesta) {
        r.style.maxHeight = null;
        r.style.paddingTop = 0;
        r.style.paddingBottom = 0;
      }
    });

    // Toggle actual
    if (respuesta.style.maxHeight) {
      respuesta.style.maxHeight = null;
      respuesta.style.paddingTop = 0;
      respuesta.style.paddingBottom = 0;
    } else {
      respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
      respuesta.style.paddingTop = '1rem';
      respuesta.style.paddingBottom = '1rem';
    }
  });
});

lottie.loadAnimation({
    container: document.getElementById('icono-data'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/data.json' // animación para apps
  });
  
  lottie.loadAnimation({
    container: document.getElementById('icono-learn'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/learn.json' // animación educativa
  });
  
  lottie.loadAnimation({
    container: document.getElementById('icono-web'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/web.json' // datos abiertos
  });
  
  lottie.loadAnimation({
    container: document.getElementById('icono-setup'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/setup.json' // prototipado
  });
  