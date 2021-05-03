import React, { useState, useEffect, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import Loader from '../../components/Loader'
import FetchData from './acciones/FetchData'
import RenderData from './acciones/RenderData'

const RenderHome = () => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const { store, actions } = useContext(ContextApp)

	useEffect(() => {
		setScaleAnim(true)

		document.title = 'Home'

		if (store.carts.length < 1) {
			FetchData()
			.then(data => actions.addCarts(data))
			.catch(err => console.log(err))
		}

	}, [ setScaleAnim, store, actions ])
	
	if (store.carts.length < 1) return Loader()

	return (
		<div className='main-cont'>
			{
				RenderData( store.carts, scaleAnim )
			}
		</div>
	)
}

export default RenderHome
