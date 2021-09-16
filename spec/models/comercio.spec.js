var mongoose = require('mongoose');

var Comercio = require('../../models/comercio.js')
const cantList = async () => {
    try {
        const list = await Comercio.todos()
        return list.length;
    } catch (error) {
        return 0;
    }
}
const testFindById = async (id, done) => {
    const comercioDB = await Comercio.findById(id);
    expect(comercioDB).not.withContext('ID no encontrado').toBeNull();
    if (!comercioDB) { done() }
    return comercioDB;
}
describe('Test modelo Comercio', () => {
    beforeEach((done) => {
        var mongoDB = 'mongodb+srv://javi:1234@comercios.yd3gh.mongodb.net/emprendeapp?retryWrites=true&w=majority';
        mongoose.connect(mongoDB, { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function () {
            console.log('Conectado!!');
            done();
        });
    });
    // it('Comprobar lista por nombre', (done) => {
    //     Comercio.buscar('direccion', 'sivar', (error, lista) => {
    //         console.log(lista);
    //         expect(error).withContext('error en la consulta').toBeNull();
    //         expect(lista.length).withContext('no hay elementos en el documento que coincidan con la busqueda')
    //             .toBeGreaterThanOrEqual(1)
    //         done()
    //     })
    // })
    // it('Comprobar agregar', async (done) => {
    //     const cantA = await cantList();
    //     const comercio = Comercio.Constructor('sara', 'sv')
    //     comercio.save(async (error, comercio) => {
    //         const cantN = await cantList();
    //         const { _id } = comercio;
    //         expect(error).withContext('error en la consulta').toBeNull();
    //         expect(_id).not.withContext('no se generó ID').toBeNull();
    //         expect(cantN).toBe(cantA + 1);
    //         done()
    //     })
    // })
    // it('Comprobar actualizar', async (done) => {
    //     const id = '61429f76906c30c24ab786af';
    //     const comercioDB = await testFindById(id, done)
    //     Comercio.actualizar(id, { nombre: 'rosa', direccion: 'salvador' }, (error, comercio) => {
    //         expect(error).withContext('error en la consulta').toBeNull();
    //         expect(comercioDB).not.withContext('no realizó cambios').toEqual(comercio);
    //         done()
    //     })
    // })
    // it('Comprobar eliminar', async (done) => {
    //     const id = '6142a01e9ba0a4dd8124f5d9';
    //     await testFindById(id, done);
    //     const cantA = await cantList();
    //     Comercio.eliminar(id, async (error) => {
    //         const cantN = await cantList();
    //         expect(error).withContext('error en la consulta').toBeNull();
    //         expect(cantN).withContext('no se elimino ningun registro').toBe(cantA - 1);
    //         done()
    //     })
    // })
})