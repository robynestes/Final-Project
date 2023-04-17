
const liElements = document.querySelectorAll('li');


liElements.forEach(li => {
  li.addEventListener('click', () => {

    const page = document.querySelector('html');
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.1;
        page.style.opacity = opacity;
      } else {
        clearInterval(fadeOut);
      }
    }, 50); 
  });
});
