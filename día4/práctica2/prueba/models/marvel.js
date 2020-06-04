var mongoose = require("mongoose");
var Schema =mongoose.Schema;
var marveSchema = Schema({
	nombre.String;
	poder.String;
	alias.String;
	conCapa.Boolean;
	imagen.String;
	villano.Boolean;
});
module.export=mongoose.model("Marvel", marvelSchema);

module.exports=router;