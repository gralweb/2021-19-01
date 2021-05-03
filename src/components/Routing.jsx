import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Importar Componentes - Pages para hacer el Routing
import RenderHome from './../pages/home'
import RenderPresentacion from './../pages/presentacion'

const Routing = ({ handleLocationHeader }) => (
	<Switch>
		<Redirect 
			exact
			from='/'
			to='/gralweb'
		/>
		<Route
			exact
			path='/gralweb'
			render={ () => <RenderHome headerLocation={handleLocationHeader} pageTarget='1' /> }
		/>
		<Route
			exact
			path='/gralweb/blog/:name'
			render={ routeProps => <RenderPresentacion idCart={ routeProps.match.params.name } /> }
		/>
	</Switch>
)

export default Routing
