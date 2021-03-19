import React from 'react'

// Componentes
import Cart from './Cart'

const RenderData = ( data, scaleAnim ) => {
	return (
		data.map((cart) => {
			return (
				<Cart
					key={ cart.id }
					titulo={ cart.name }
					img={ cart.id }
					scaleAnim={ scaleAnim ? 'app-cont-item-scale' : null }
				/>
			)
		})
	)
}

export default RenderData
