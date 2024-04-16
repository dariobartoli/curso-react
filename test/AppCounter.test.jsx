import { fireEvent, render,screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"

describe('Pruebas en <AppCounter/>', () => { 
    const value = 100
    test('debe hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={value}/>)
        expect(container).toMatchSnapshot()
    })
    test('debe mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={value}/>)
        expect(screen.getByText(value).innerHTML).toBe('100')
    })

    //simular eventos
    test('debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={value}/>)
        fireEvent.click( screen.getByText('sumar +1') )
        expect( screen.getByText(value+1)).toBeTruthy();
    })
    test('debe de decrementar con el boton -1', () => { 
        render( <CounterApp value={value}/>)
        fireEvent.click( screen.getByText('restar -1') )
        expect( screen.getByText(value-1)).toBeTruthy();
    })
    test('debe de funcionar el reset', () => { 
        render( <CounterApp value={value}/>)
        fireEvent.click( screen.getByText('sumar +1') )
        fireEvent.click( screen.getByText('sumar +1') )
        fireEvent.click( screen.getByText('sumar +1') )
        fireEvent.click( screen.getByText('sumar +1') )
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'})) //otra forma de apuntar a un elemento es con el aria-label, que cambia el valor del name

        expect( screen.getByText(value)).toBeTruthy()
    })
})