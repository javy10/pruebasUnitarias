var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre:String,
    direccion:String
})

ComercioSchema.statics.Constructor=function(nombre,direccion){
    return new this({
        nombre:nombre,
        direccion:direccion
    })
}

ComercioSchema.statics.todos = function(cb){
    return this.find({},cb);
}

ComercioSchema.statics.buscarNombre = function(nombre,cb){
    return this.find({nombre: nombre},cb);
}

ComercioSchema.statics.guardar = function(entidad,cb) {
    return entidad.save(cb);
}

ComercioSchema.statics.eliminar = function(id,cb) {
    return this.findOneAndDelete({_id: id},cb);
}

ComercioSchema.statics.actualizar = function(comercio, id, cb) {
    return this.findOneAndUpdate({_id: id } , { '$set': comercio},cb);
}

module.exports= mongoose.model('Comercio',ComercioSchema)