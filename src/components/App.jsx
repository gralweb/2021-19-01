// Dependecias
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components Principales
import Header from './header/Header'
import Main from './main/Main'
import Routing from './Routing'
import Footer from './footer/Footer'
// Float BTN
// import FloatBtnContent from './floatBtn/FloatBtnContent'
// import FloatBtn from './floatBtn/FloatBtn'

// Styles
import './../dependencias/css/icofont.min.css'
import './../dependencias/css/app.css'
// Themes
// import './../dependencias/css/themeClaro.css'
// import './../dependencias/css/themeOscuro.css'

const App = () => {
	// const [headerLocation, setHeaderLocation] = useState('Portafolio')
	const [menuOpen, setMenuOpen] = useState(false)
	// const [themeClaro, setTheme] = useState((localStorage.getItem('theme') !== null) ? JSON.parse(localStorage.getItem('theme')) : true)
	
	// Funciones de Handle
	const handleClickHeader = () => {
		setMenuOpen(!menuOpen)
	}

	// const handleTheme = () => {
	// 	localStorage.setItem('theme', JSON.stringify(!themeClaro))
	// 	setTheme(!themeClaro)
	// }

	return (
		<section>
			<Router>

				<Header
					menuOpen={ menuOpen }
					onClick={ () => handleClickHeader() }
				>
				</Header>

				<Main>
					<Routing />
				</Main>

				{/*<FloatBtnContent>
					<FloatBtn type='theme' handleClick={ handleTheme } titulo='Cambiar Tema' />
				</FloatBtnContent>*/}

				<Footer />

			</Router>
		</section>
	)	
}

export default App
