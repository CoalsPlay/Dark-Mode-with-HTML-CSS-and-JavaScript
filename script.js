// Cuando la página se haya cargado completamente...
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggleTheme = document.querySelector('#toggleTheme');
  const toggleThemeIcon = document.querySelector('#btnToggleIcon');

  // Aseguramos que si está en modo 'dark' el input estará checked.
  if (root.getAttribute('data-theme' === 'dark')) {
    toggleTheme.checked = true;
  }
  
  // Cuando se le haga click al botón de cambiar modo...
  toggleTheme.addEventListener('click', () => {
    
    const setTheme = toggleTheme.checked ? 'dark' : 'light';

    // Cambiar el icono dependiendo del modo en que se esté
    if (setTheme === 'dark') {
      toggleThemeIcon.classList.add('bxs-sun');
      toggleThemeIcon.classList.remove('bxs-moon');
    } else {
      toggleThemeIcon.classList.add('bxs-moon');
      toggleThemeIcon.classList.remove('bxs-sun');
    }

    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
  })
})

// Obtener el modo guardado en el localStorage.
const storageTheme = localStorage.getItem('theme');

// Obtener el modo por defecto en el navegador.
const systemColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Verificar que es el mismo modo y establecerlo.
const getTheme = storageTheme ?? systemColor;
document.documentElement.setAttribute('data-theme', getTheme);