/* import './App.css' */
import PropTypes from 'prop-types'

function App({title, subtitle, name}) {

  return (
    <>
      <h1 data-testid='test-title'> { title } </h1>
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

App.defaultProps = {
  name: 'Agustin',
  subtitle: 'No hay subtitulo',
}

export default App
