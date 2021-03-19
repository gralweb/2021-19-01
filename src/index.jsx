import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from './store'
// import sW from './sW'

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
)

// Iniciando el service Worker
// sW()
