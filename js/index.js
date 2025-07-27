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


const hamburgerBtn = document.getElementById('hamburger-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburgerBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });

  // Cerrar el panel al hacer clic en un link del menú
  document.querySelectorAll('.nav-links-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
    });
  });


  lottie.loadAnimation({
    container: document.getElementById('hero__flecha'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/arrow.json' // animación para apps
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
  
  lottie.loadAnimation({
    container: document.getElementById('icono-github'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/github.json' // prototipado
  });