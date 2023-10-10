const button = document.querySelectorAll('.cross'), 
panel = document.querySelectorAll('.panel'),
accordion = document.querySelectorAll('.accordion');

accordion.forEach((accord, index) => {
   
    button.forEach(btn => {
        btn.classList.add('active');
    })
    accord.addEventListener('click', () => {
            removeactivep()
          
        button[index].classList.toggle('active');
        panel[index].classList.toggle('activep')

        // if(index>0){
        //     button[index-1].classList.add('active');
        //     panel[index-1].classList.remove('activep')
            
        // }
        
        // else if(index == 0) {
        //     // button.forEach(btn => {
        //     //     button[button.length-1].classList.remove('active');
        //     // })
        //     button[button.length-1].classList.add('active');
        //     panel[button.length-1].classList.remove('activep')
        // };
        
        switch(index) {
            case 0:
                button[button.length-1].classList.add('active');
            panel[button.length-1].classList.remove('activep')
              break;
            case 1:
                button[index-1].classList.add('active');
                panel[index-1].classList.remove('activep')
                button[index+1].classList.add('active');
                panel[index+1].classList.remove('activep')
              break;
              case 2:
                button[index-1].classList.add('active');
                panel[index-1].classList.remove('activep')
                button[index-2].classList.add('active');
                panel[index-2].classList.remove('activep')
              break;
            default:
              // code block
          }
    })
    
})


function removeactivep() {
    panel.forEach(p => {
        if(p.querySelector("activep")) {
            p.classList.remove('activep');
        }
    })
}




















