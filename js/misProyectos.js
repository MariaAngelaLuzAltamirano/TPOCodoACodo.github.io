//VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES//

//crear Gifos
let crear1 = document.getElementById('crear1');
let crear2 = document.getElementById('crear2');
let crear3 = document.getElementById('crear3');
let btnComenzar = document.getElementById('comenzar');
let botones = document.getElementById('botones-pag');
let btnGrabar= document.getElementById('seguir');
let btnFinalizar = document.getElementById('ultimo');


// modo nocturno

let html = document.querySelector('html');
let btnNocturno = document.getElementById('btnNocturno');
let elementoCam1 = document.getElementById('elemento1-cam');
let elementoCam2 = document.getElementById('elemento2-cam');
let elementoCam3 = document.getElementById('elemento3-cam');
let elementoCam5 = document.getElementById('elemento5-cam');


//ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS//

btnNocturno.addEventListener('click', () =>{

    if(!html.classList.contains('modo-nocturno')){
        html.classList.add('modo-nocturno');
        btnNocturno.textContent = 'Modo Diurno';
        elementoCam1.src = 'assets/element_cinta1-modo-noc.svg';
        elementoCam2.src = 'assets/element_cinta2-modo-noc.svg';
        elementoCam5.src = 'assets/pelicula-modo-noc.svg';
    }else{
        html.classList.remove('modo-nocturno');
        btnNocturno.textContent = 'Modo Nocturno';
        elementoCam1.src = 'assets/element_cinta1.svg';
        elementoCam2.src = 'assets/element_cinta2.svg';
        elementoCam5.src = 'assets/pelicula.svg';
    }

});

btnComenzar.addEventListener('click', () =>{
    botones.children[0].className +="btn-activos";
    botones.children[1].className -="btn-activos";
    botones.children[2].className -="btn-activos";
    crear2.style.display = 'none';
    crear3.style.display = 'none';
    crear1.style.display = 'block';
});


btnGrabar.addEventListener("click", () =>{
    botones.children[0].className -="btn-activos";
    botones.children[2].className -="btn-activos";
    botones.children[1].className +="btn-activos";
    crear1.style.display = 'none';
    crear3.style.display = 'none';
    crear2.style.display = 'block';

});

btnFinalizar.addEventListener("click", () =>{
    botones.children[0].className -="btn-activos";
    botones.children[1].className -="btn-activos";
    botones.children[2].className +="btn-activos";
    crear1.style.display = 'none';
    crear2.style.display = 'none';
    crear3.style.display = 'block';
});
