var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://usuario1:bQqgp1rlgeFpu3mW@cluster0-dddn9.mongodb.net/informacion?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function deleteAlumnoByNumCta(nc){
  Alumno.findOneAndDelete({numeroCuenta:nc},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  deleteAlumnoByNumCta("4444444");
}

main();    // ejecutamos main
