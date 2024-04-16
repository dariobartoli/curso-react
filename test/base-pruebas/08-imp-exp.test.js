import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retortar un heroe por id', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })

    test('getHeroeById debe retortar undefined si no existe id', () => { 

    const id = 110;
    const hero = getHeroeById(id);

    //evaluar si es null, undefined o false
    expect( hero ).toBeFalsy

    })

    test('getHeroesByOwner debe retornar heroes DC', () => { 

    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    expect(heroes).toEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
    ])
    expect(heroes.length).toBe(3)

    })

    test('getHeroesByOwner debe retornar heroes Marvel', () => { 

    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)
    
    console.log(heroes);
    expect(heroes).toEqual([
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ])
    expect(heroes.length).toBe(2)

    })
})