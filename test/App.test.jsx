import { render } from "@testing-library/react"
import App  from '../src/App.jsx'

describe('Pruebas en <App/>', () => { 

/*     test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola'

        const { container } = render( <App title={ title }/> )
        //crea un snapshot del componente en la carpeta snapshots, para despues comparar si llega a cambiar el componente, que fue lo que cambió
        expect(container).toMatchSnapshot();

    }) */

    test('debe mostrar el titulo en un h1', () => { 

        const title = 'Hola'

        const { container, getByText, getByTestId } = render( <App title={ title }/> )
        //crea un snapshot del componente en la carpeta snapshots, para despues comparar si llega a cambiar el componente, que fue lo que cambió
        expect(getByText(title)).toBeTruthy; //que debe existir

/*         const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain( title ) //podria usarse tobe tambien, pero si hay espacios en el title de h1 de app, daria error por los espacios */
        expect(getByTestId('test-title').innerHTML).toContain(title)

    })

    test('debe mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola'
        const subtitle = 'No hay subtitulo'

        const { getAllByText } = render( <App title={ title } subtitle={subtitle}/> )

        expect(getAllByText(subtitle).length).toBe(2)

    })


})