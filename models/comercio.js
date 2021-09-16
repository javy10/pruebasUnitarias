var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre: String,
    direccion: String
})

ComercioSchema.statics.Constructor = function (nombre, direccion) {
    return new this({
        nombre: nombre,
        direccion: direccion
    })
}
ComercioSchema.statics.todos = function (callback) {
    return this.find({}, callback)
}
ComercioSchema.statics.buscar = function (prop, value, callback) {
    return this.find({ [prop]: value }, callback)
}
ComercioSchema.statics.actualizar = function (id, comercio, callback) {
    return this.findByIdAndUpdate(id, { "$set": comercio }, { returnOriginal: false }, callback);
}
ComercioSchema.statics.eliminar = function (id, callback) {
    return this.findByIdAndDelete(id, {}, callback);
}
module.exports = mongoose.model('Comercio', ComercioSchema)