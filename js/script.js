//VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES//

// modo nocturno

let html = document.querySelector('html');
let btnNocturno = document.getElementById('btnNocturno');

//ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS//
//modo nocturno
btnNocturno.addEventListener('click', () =>{

    if(!html.classList.contains('modo-nocturno')){
        html.classList.add('modo-nocturno');
        btnNocturno.textContent = 'Modo Diurno';
    }else{
        html.classList.remove('modo-nocturno');
        btnNocturno.textContent = 'Modo Nocturno';
    }

});
