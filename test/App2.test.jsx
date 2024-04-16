import { render, screen } from "@testing-library/react"
import App  from '../src/App.jsx'

describe('Pruebas en <App/>', () => { 

    const title = 'Hola'
    const subtitle = 'No hay subtitulo'

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <App title={ title }/> )
        expect(container).toMatchSnapshot();
    })

    //utilizamos screen para que sea mas limpio, el screen nos trae lo que imprime el render
    test('debe mostrar el mensaje "Hola"', () => { 
        render( <App title={ title }/> )
        expect( screen.getByText(title)).toBeTruthy()
        //screen.debug()
    })

    test('debe mostrar el titulo en un h1', () => { 
        render( <App title={ title }/> )
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })

    test('debe mostrar el subtitulo enviado por props', () => { 
        render( <App title={ title } subtitle={subtitle}/> )
        expect( screen.getAllByText(subtitle).length).toBe(2)
    })


})