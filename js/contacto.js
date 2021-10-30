//VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES////VARIABLES//

// modo nocturno

let html = document.querySelector('html');
let btnNocturno = document.getElementById('btnNocturno');

//mostrar fav
let proyectos = document.getElementById('proyectos');
let favSinCont = document.getElementById('proyectos-sincontenido');

//ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS////ADDEVELISTENERS//

btnNocturno.addEventListener('click', () =>{

    if(!html.classList.contains('modo-nocturno')){
        html.classList.add('modo-nocturno');
        btnNocturno.textContent = 'Modo Diurno';
    }else{
        html.classList.remove('modo-nocturno');
        btnNocturno.textContent = 'Modo Nocturno';
    }

});

//FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES////FUNCIONES//
function enviar() {
    event.preventDefault();
    favSinCont.style.display = 'block';
    proyectos.style.display = 'none';
  
}

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()