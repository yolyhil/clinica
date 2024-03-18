let Npaciente= new Object(); 
let paciente= new Object();
const dia= new Date();
let nomApell;
let dni;
let genero; 
let telefono;
let especiali;
function myTurnos(nombre) {
  console.log("Gracias por su eleccion"+" "+ nombre);

  paciente.nomApell= prompt(" ingrese su nombre completo");
  paciente.dni=parseInt( prompt("ingrese su DNI sin puntos ni comas"));
  paciente.genero=( prompt("ingrese su genero M si es hombre o F si es mujer")); 
  paciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));
  paciente.especiali= prompt("Especialidad que necesita"); 
  alert("usted " + paciente.nomApell+ " fue registrado su turno para "+paciente.especiali);
 
  document.getElementById("demo").innerHTML = dia;

  
  console.log(paciente); 
  return(paciente); 
 } 

 function nuePaciente(nombre) {
  Npaciente.nomApell= prompt(" ingrese su nombre completo");
  Npaciente.dni=parseInt( prompt("ingrese su DNI sin puntos ni comas"));
  Npaciente.genero= (prompt("ingrese su genero M si es hombre o F si es mujer")); 
  Npaciente.telefono= parseInt( prompt("ingrese por favor su numero de telefono"));
  Npaciente.especiali= prompt("Especialidad que necesita"); 
  alert("usted "+ Npaciente.nomApell+ " fue registrado ");
  
  }
 let especialidad =[" Clinica ", " Oftalmologia ", " Pediatria ", " Traumatologia "]

 let date;
 alert("Bienvenido")
 alert("La especialidades que brindamos son ");
 alert(especialidad);
 let nombre = prompt("ingrese su nombre ");
 let respuesta= prompt("usted es paciente nuestro");

 if (respuesta == "si") {
    alert("Nuevo Turno");
    myTurnos(nombre);
    alert("su turno fue registrado");
    console.log(paciente);
 } else {
    alert("Bienvenido, a nuestro consultorio");
    alert("ingresaremos sus datos");
    nuePaciente(nombre);
 }

 
 
 


 
