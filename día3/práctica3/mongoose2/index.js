var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://usuario1:bQqgp1rlgeFpu3mW@cluster0-dddn9.mongodb.net/informacion?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function findAlumnoPorNumCta(nc){
  Alumno.find({numeroCuenta:nc},function(err,documentos){
    console.log(documentos);
  });
}

function findBySemestre(sem){

}


function findByNombre(nom){
  Alumno.find({'nombre.primer':nom},function(err,documentos){
    console.log(documentos);
  });
}

function cambiarNombre(numcta, nuevoNombre){
  Alumno.findOneAndUpdate({numeroCuenta:numcta},
    {'nombre.primer':nuevoNombre},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}


function main() {

  findAlumnoPorNumCta("1111111");
  findByNombre("Alicia");
  cambiarNombre("4444444","RENÉ dfsdfdfdsfsd");

}

main();    // ejecutamos main
