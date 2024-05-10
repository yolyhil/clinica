//https://github.com/yolyhil/clinica
//https://github.com/yolyhil/clinica/blob/main/tp1/segunda_entrega/main.js

/* esto permite que la nav sea responsi */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/// Aca estoy probando Modo Dark ///

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})

// aca comienza el codigo de la pagina

let Npaciente= {}; // en esta variable guardo el nombre del nuevo paciente
let paciente= {};// en esta variable guardo el nombre del que ya es paciente

// el siguiente es un arreglo de profesionales que hay en el consultorio
const especialidades =["CLINICA", "OFTALMOLOGIA", "PEDIATRIA", "TRAUMATOLOGIA", "CIRUGIA GENERAL"];
// arreglo de  prestaciones de obras sociales 
const obra_social=[
   {os:"OSPE", consultaporc:15, consultaSO:10000},
   {os:"IOSFA", consultaporc:10, consultaSO:10000},
   {os:"OSDE", consultaporc:0, consultaSO:10000},
   {os:"IOMA", consultaporc:20, consultaSO:10000},
   {os:"OSECAC", consultaporc:30, consultaSO:10000},
   {os:"MEDIFE", consultaporc:5, consultaSO:10000},
   {os:"AVALIAN", consultaporc:35, consultaSO:10000},
];


const profesionales =[//este arreglo guarda las especialidad que brinda la clinica
   {nombProf:"Jose Bons", profesion:"Clinica"},
   {nombProf:"Lucia Lobos", profesion:"Pediatria"},
   {nombProf:"Daniel Ortiz", profesion:"Clinica"},
   {nombProf:"Luis Petrys", profesion:"Pediatria"},
   {nombProf:"Jose Perez", profesion:"Cirugia Gral"},
   {nombProf:"Sofia Buons", profesion:"Traumatologia"},
   {nombProf:"Juan Bons", profesion:"Oftalmologia"},
   {nombProf:"Jhonn Baez", profesion:"Traumatologia"},
   {nombProf:"Jose Bons", profesion:"Oftalmologia"}
]; 

const dia= new Date();// se guarda la fecha en el que el paciente saco el turno
let costoconsulta= 10000;
let profesion;//aca guardo la especialidad que necesita el paciente
// variables para el uso de datos de paciente
let prestadora;
let osocial;
let nomApell;
let dni;
let edad;
let genero; 
let telefono;
let especiali;
let his_clinica=[];// un arreglo para cargar las enfermedades previas a su consulta
// creo la funcion my turnos para asignar los turnos, tambien declaro la variables que se requieren

function verProf(profesion) { //esta funcion sirve para realizar el listado de los medicos en esa especialida
   
   alert("Usted solicito la profesion"+" "+ profesion);
  // console.log(profesion);// esta linea no se ejecuta no se pq no reconoce console.log
  const elegida = especialidades.some((especialidad) => especialidad === profesion);
  
  return(elegida);
};   
 
function verifObraS(prestadora) { //se verifica si la obra social ingresada tiene convenio
   const obrasAdmitida = obra_social.some((obrasocial) => obrasocial.os === prestadora);
   alert("pasee obra social");
   return(obrasAdmitida);
      
}
function calcConsulta(prestadora) {
   let monto
}


function myTurnos(nombre) {

   alert("Gracias por elegirnos"+" "+ nombre);
   paciente.nomApell=prompt(" ingrese su nombre completo");
   profesion= prompt("Especialidad que necesita");
   profesion= profesion.toUpperCase();
   alert(profesion);
   const elegida=verProf(profesion); 
   alert(elegida); 
      if(elegida) {
         paciente.especiali=profesion;
         prestadora= prompt("Si tiene obra social ingrese cual en caso de no tener ingrese no ");
         prestadora= prestadora.toUpperCase();
         if(prestadora !== "NO"){
            const osexiste= verifObraS(prestadora);
            if(osexiste ==="true"){
               paciente.dni= parseInt(prompt(" ingrese su DNI sin puntos ni comas "));
               paciente.edad= parseInt(prompt(" ingrese su edad por favor"));
               /*paciente.genero=prompt("ingrese su genero M si es hombre o F si es mujer"); */
               paciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));
               let costoconsultacos= calcConsulta(prestadora);//obtengo el costo de la consulta con obra social ingresada
            } else{
               alert("Lo siento no trabajamos con la obra social ingresada");
               alert(" el costo por consulta al profesional es de :"+ costoconsulta);
            }
         } else{
            alert("El costo por su consulta es de :"+ costoconsulta);
         }
         paciente.dni= parseInt(prompt(" ingrese su DNI sin puntos ni comas "));
         paciente.edad= parseInt(prompt(" ingrese su edad por favor"));
         /*paciente.genero=prompt("ingrese su genero M si es hombre o F si es mujer"); */
         paciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));
      }
   alert( paciente.nomApell+ " fue registrado su turno para " + paciente.especiali);
   
   document.getElementById("demo").innerHTML = dia;
   alert("En la fecha"+ dia);
   // paciente = {};
   console.log(paciente); 
   return(paciente); 
}



// esta es una funcion para registrar un nuevo paciente
 function nuePaciente(nombre) {
   Swal.fire({
      title: "BIENVENIDO A NUESTRO CONSULTORIO, SU SALUD NUESTRA PRIORIDAD !",
      text: "You clicked the button!",
      icon: "success"
    });
         alert("BIENVENIDO A NUESTRO CONSULTORIO, SU SALUD NUESTRA PRIORIDAD ");
         alert(especialidades);

         prof_req= (prompt("ingrese la especialidad que requiere"));
         prof_req = prof_req.toUpperCase();
         alert(prof_req);

         /*const especialidad = especialidades.some((especialidad) => especialidad === prof_req);
         console.log(prof_req);
         console.log(especialidad);  esta no corre funcion*/
         let especialidad = especialidades.indexOf(prof_req);
         console.log(especialidad);

         while (especialidad != -1) {//con este ciclo verifico que la especialidad requerida esta y recien cargo los datos del paciente
            Npaciente.especiali= prof_req;
            Npaciente.nomApell= prompt(" ingrese su nombre completo");
            Npaciente.dni=parseInt( prompt("ingrese su DNI sin puntos ni comas"));
            Npaciente.edad= parseInt( prompt(" ingrese su EDAD"));
            Npaciente.genero= (prompt("ingrese su genero M si es hombre o F si es mujer")); 
            Npaciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));  
            alert("crearemos su historia clinica, si tiene o tuvo patologias le pedimos que ingrese una por una");
            alert("por ejemplo la forma de ingreso seria -- gripe A hace 5 años");
            let resp_enfer=prompt("padece alguna enfermedad o tuvo alguna enfermedad ? Si o No");
            do {
                  /*let resp_enfer= prompt("ingrese la enfermedad o patologia por favor");*/
                  if(resp_enfer==="si") {
                     his_clinica= his_clinica.unshift(prompt("ingrese la enfermedad o patologia por favor "));
                     resp_enfer= prompt("ingresa otra enfermedad o patologia si o no");
                     if(resp_enfer=="si") {
                        respuesta="true";
                     }
                  } else {
                     respuesta="false";
                  }   
               } while (respuesta === true);

            alert("usted "+ Npaciente.nomApell+ " fue registrado ");
      }
   }
 
 let date;
 alert("Bienvenido")
 alert("La especialidades que brindamos son ");
 alert(especialidades);
 let nombre = prompt("ingrese su nombre ");
 let respuesta= prompt("usted es paciente nuestro");

 if (respuesta == "si") {
    alert("Nuevo Turno");
    myTurnos(nombre);
    alert("su turno fue registrado");
    console.log(paciente);
 } else {
   
    nuePaciente(nombre);
 }

 
 
 


 
