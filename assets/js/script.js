const button = document.querySelectorAll('.cross'),
  panel = document.querySelectorAll('.panel'),
  accordion = document.querySelectorAll('.accordion');

accordion.forEach((accord, index) => {

  button.forEach(btn => {
    btn.classList.add('active');
  })
  accord.addEventListener('click', () => {
    removeactivep()
    removeActiveAccordion();
    accord.classList.add('active-accordian');

    button[index].classList.toggle('active');
    panel[index].classList.toggle('activepanel')

    switch (index) {
      case 0:
        button[button.length - 1].classList.add('active');
        panel[button.length - 1].classList.remove('activepanel')
        button[index + 1].classList.add('active');
        panel[index + 1].classList.remove('activepanel')
        break;
      case 1:
        button[index - 1].classList.add('active');
        panel[index - 1].classList.remove('activepanel')
        button[index + 1].classList.add('active');
        panel[index + 1].classList.remove('activepanel')
        break;
      case 2:
        button[index - 1].classList.add('active');
        panel[index - 1].classList.remove('activepanel')
        button[index - 2].classList.add('active');
        panel[index - 2].classList.remove('activepanel')
        break;
    }
  })

})
function removeActiveAccordion() {
  accordion.forEach(accord => {

    accord.classList.remove('active-accordian')

  })
}

function removeactivep() {
  panel.forEach(p => {
    if (p.querySelector("activepanel")) {
      p.classList.remove('activepanel');
    }
  })
}




















