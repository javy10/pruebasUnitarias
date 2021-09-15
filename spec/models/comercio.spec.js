var mongoose = require('mongoose');

var Comercio = require('../../models/comercio.js')

describe('Test modelo Comercio',function(){

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, {useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado!!');
            done();
        });
    })

    // describe('Comprobar si coleccion inicia vacía', () => {
    //     it('comienza vacía', (done) => {
    //         Comercio.todos(function(err, cb){
    //             expect(cb.length).toBe(5);
    //             done()
    //         })
    //     })
    // })






    // describe('Comprobar si hay comercios con X nombre', () => {
    //     it('comienza vacía', (done) => {
    //         Comercio.buscarNombre('lolita',function(err, cb){
    //             expect(cb.length).toBe(5);
    //             done()
    //         })
    //     })
    // })

    describe('Comprobar save', () => {
        it('loading', (done) => {
            const comerciosave = Comercio.Constructor('juan','sivar')
            Comercio.guardar(comerciosave,function(err, cb){
                expect(err).toBe(null);
                done()
            })
        })
    })

    // describe('Comprobar update', () => {
    //     it('loading', (done) => {
    //         const comerciosave = {nombre: 'gio', direccion: 'sivar', _id: '614155d9d6287607548eb4ca'}
    //         Comercio.actualizar(comerciosave, '614155d9d6287607548eb4ca',function(err, cb){
    //             expect(err).toBe(null);
    //             done()
    //         })
    //     })
    // })

    // describe('Comprobar eliminar', () => {
    //     it('loading', (done) => {
    //         Comercio.eliminar('614155d9d6287607548eb4ca',function(err, cb){
    //             expect(err).toBe(null);
    //             done()
    //         })
    //     })
    // })
})