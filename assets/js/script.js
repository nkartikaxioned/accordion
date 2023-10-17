const button = document.querySelectorAll('.cross'),
  panel = document.querySelectorAll('.panel'),
  container = document.querySelectorAll('.contain');

container.forEach((element, index) => {

  const prevIndex = (index - 1 + container.length) % container.length;
  const nextIndex = (index + 1) % container.length;

  element.addEventListener('click', () => {
    removeActive();
    element.classList.toggle('active-container');
    button[index].classList.toggle('cross-active');
    panel[index].classList.toggle('active-panel');

    container[prevIndex].classList.remove('active-container')
    container[nextIndex].classList.remove('active-container')
    button[prevIndex].classList.remove('cross-active')
    button[nextIndex].classList.remove('cross-active')
    panel[prevIndex].classList.remove('active-panel')
    panel[nextIndex].classList.remove('active-panel')
  })
})

function removeActive() {
  container.forEach(contain => {
    if(contain.querySelector('active-container')) {
      contain.classList.remove('active-container');
    }
  })
  button.forEach(elem => {
    if(elem.querySelector('cross-active')) {
      elem.classList.remove('cross-active');
    }
  })
  panel.forEach(pan => {
    if(pan.querySelector('active-panel')) {
      pan.classList.remove('active-panel');
    }
  })
}
















