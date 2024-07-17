// Selecciona todos los botones que actúan como teclas de la batería
const buttons = document.querySelectorAll('.drum');

// Añade un event listener para cada botón
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let keyboardpress = button.innerHTML;
    drum(keyboardpress);
    drumAnimation(keyboardpress);
  });
});

// Añade un event listener para las teclas del teclado
document.addEventListener('keydown', (event) => {
  drum(event.key);
  drumAnimation(event.key);
});

// Define la función drum
function drum(keyboardpress) {
  switch (keyboardpress) {
    case 'w':
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log('Tecla no asignada a ningún sonido.');
      break;
  }
}

function drumAnimation(keyboardpress) {
  document.querySelector(`.${keyboardpress}`).classList.add('pressed');
  setTimeout(() => {
    document.querySelector(`.${keyboardpress}`).classList.remove('pressed');
  }, 100);
}
