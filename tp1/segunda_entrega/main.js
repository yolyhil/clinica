proceso de modificacion de funciones

//https://github.com/yolyhil/clinica
let Npaciente= {}; 
let paciente= {};
const especialidades =["CLINICA", "OFTALMOLOGIA", "PEDIATRIA", "TRAUMATOLOGIA", "CIRUGIA GENERAL"];
const dia= new Date();

const profesionales =[
   {nombProf:"Jose Bons", profesion:"Clinica"},
   {nombProf:"Lucia Lobos", profesion:"Pediatria"},
   {nombProf:"Daniel Ortiz", profesion:"Clinica"},
   {nombProf:"Luis Petrys", profesion:"Pediatria"},
   {nombProf:"Jose Perez", profesion:"Cirugia Gral"},
   {nombProf:"Sofia Buons", profesion:"Traumatologia"},
   {nombProf:"Juan Bons", profesion:"Oftalmologia"},
   {nombProf:"Jhonn Baez", profesion:"Traumatologia"},
   {nombProf:"Jose Bons", profesion:"Oftalmologia"}
]; //aca guardo la especialida que necesita el paciente
let prof_req;
// variables para el uso de datos de paciente
let nomApell;
let dni;
let edad;
let genero; 
let telefono;
let especiali;
let his_clinica=[];// un arreglo para cargar las enfermedades previas a su consulta
// creo la funcion my turnos para asignar los turnos, tambien declaro la variables que se requieren

function verProf(profesion) { //esta funcion sirve para realizar el listado de los medicos en esa especialida
   
   const profesional = profesional.some((profesion) => profesion === profesional);
   console.log(profesion);
   console.log(profesional);
}   

function myTurnos(nombre) {
  console.log("Gracias por su eleccion"+" "+ nombre);

  paciente.nomApell=prompt(" ingrese su nombre completo");
  paciente.dni= parseInt(prompt(" ingrese su DNI sin puntos ni comas "));
  paciente.edad= parseInt(prompt(" ingrese su edad por favor"));
  /*paciente.genero=prompt("ingrese su genero M si es hombre o F si es mujer"); */
  paciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));
  paciente.especiali= prompt("Especialidad que necesita"); 
  alert( paciente.nomApell+ " fue registrado su turno para " + paciente.especiali);
 
  document.getElementById("demo").innerHTML = dia;
  alert("En la fecha"+ dia);
  // paciente = {};
  console.log(paciente); 
  return(paciente); 
} 


// esta es una funcion para registrar un nuevo paciente
 function nuePaciente(nombre) {
         alert("BIENVENIDO A NUESTRO CONSULTORIO, SU SALUD NUESTRA PRIORIDAD ");
         alert(especialidades);

         prof_req= (prompt("ingrese la especialidad que requiere"));
         prof_req = prof_req.toUpperCase();
         alert(prof_req);

         /*const especialidad = especialidades.some((especialidad) => especialidad === prof_req);
         console.log(prof_req);
         console.log(especialidad);*/
         let especialidad = especialidades.indexOf(prof_req);
         console.log(especialidad);

         while (especialidad != -1) {
            Npaciente.especiali= prof_req;
            Npaciente.nomApell= prompt(" ingrese su nombre completo");
            Npaciente.dni=parseInt( prompt("ingrese su DNI sin puntos ni comas"));
            Npaciente.edad= parseInt( prompt(" ingrese su EDAD"));
            Npaciente.genero= (prompt("ingrese su genero M si es hombre o F si es mujer")); 
            Npaciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));  
            alert("creamos su historia clinica, si tiene o tuvo patologias le pedimos que ingrese una por una");
            do {
                  let resp_enfer= prompt("padece alguna enfermedad o tuvo alguna enfermedad ? Si o No");
                  if(resp_enfer=="si") {
                     his_clinica= prompt("cual enfermedad tiene o tuvo ");
                     respuesta="true";
                  } else {
                     respuesta="false";
                  }   
               } while (respuesta==true);

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

 
 
 


 
