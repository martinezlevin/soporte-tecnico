// Espera 1 segundo y luego oculta el loader
setTimeout(() => {
    document.getElementById('loader').classList.add('loader2');
  }, 1000); // 1000 milisegundos = 1 segundo
  
// USO DE SCROLLREVEAL
  ScrollReveal().reveal('.headline');