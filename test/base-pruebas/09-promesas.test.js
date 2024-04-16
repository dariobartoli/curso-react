import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => { 

    test('getHeroesByIdAsync debe retornar un heroe', (done) => {
        //el done se usa para avisarle a jest de que ya termino de ejectuar el test.
        //porque sino nos iba dar que pasaba el test porque todavia no se habia ejecutado lo asincrono, tambien podemos usar async/await 

        const id = 1
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

                done();
            });
    })

    test('getHeroesByIdAsync debe obtener un error si heroe no existe', (done) => {

        const id = 100
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`)

                done();
            });
    })
})