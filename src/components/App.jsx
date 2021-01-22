// Dependecias
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components Principales
import Header from './header/Header'
import Main from './main/Main'
import Routing from './Routing'
import Footer from './footer/Footer'
// Float BTN
import FloatBtnContent from './floatBtn/FloatBtnContent'
import FloatBtn from './floatBtn/FloatBtn'

// Styles
import './../dependencias/icofont.min.css'
import './../dependencias/app.css'
// Themes
import './../dependencias/themeClaro.css'
import './../dependencias/themeOscuro.css'

const App = () => {
	const [headerLocation, setHeaderLocation] = useState('Portafolio')
	const [menuOpen, setMenuOpen] = useState(false)
	const [themeClaro, setTheme] = useState((localStorage.getItem('theme') !== null) ? JSON.parse(localStorage.getItem('theme')) : true)

	// Funciones de Handle
	const handleUpdateHeaderLocation = {
		portafolio: () => setHeaderLocation('Portafolio'),
		servicios: () => setHeaderLocation('DevWeb'),
		contactos: () => setHeaderLocation('Contactos'),
		bio: () => setHeaderLocation('Bío')
	}

	const handleClickHeader = () => {
		setMenuOpen(!menuOpen)
	}

	const handleTheme = () => {
		localStorage.setItem('theme', JSON.stringify(!themeClaro))
		setTheme(!themeClaro)
	}

	return (
		<section>
			<Router>

				<Header
					location={ headerLocation }
					menuOpen={ menuOpen }
					tema={ themeClaro }
					onClick={ () => handleClickHeader() }
				>
				</Header>

				<Main>
					<Routing handleLocationHeader={ handleUpdateHeaderLocation } />
				</Main>

				<FloatBtnContent>
					<FloatBtn type='theme' handleClick={ handleTheme } titulo='Cambiar Tema' />
				</FloatBtnContent>

				<Footer tema={ themeClaro } />

			</Router>
		</section>
	)	
}

export default App
