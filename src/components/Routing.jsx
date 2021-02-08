import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Importar Componentes - Pages para hacer el Routing
import RenderHome from './../pages/home'
import RenderPresentacion from './../pages/presentacion'

const Routing = ({ handleLocationHeader }) => {
	return (
		<Switch>
			<Redirect 
				exact
				from='/'
				to='/home'
			/>
			<Route
				exact
				path='/home'
				render={ () => <RenderHome headerLocation={handleLocationHeader} pageTarget='1' /> }
			/>
			<Route
				exact
				path='/home/:name'
				render={ routeProps => <RenderPresentacion idCart={ routeProps.match.params.name } /> }
			/>
		</Switch>
	)
}

export default Routing
