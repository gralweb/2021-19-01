import { useState, useEffect, useContext, useCallback } from 'react'
import { ContextApp } from './../../store'

// Componentes
import Loader from './../../components/Loader'
import RenderData from './acciones/RenderData'
import { FetchData, FetchImg } from './acciones/FetchData'

const RenderPresentacion = ({ idCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ zoomOpen, setZoomOpen ] = useState(false)
	const { store, actions } = useContext(ContextApp)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const fetchData = useCallback(() => {
		FetchData(idCart).then(data => {
			const { id } = data
			const trans = {}

			const transSetData = () => {
				trans[id] = data
				
				actions.addCart(trans)
			}

			transSetData()
		}).catch(err => console.log(err))
	}, [idCart, actions])

	const fetchImg = useCallback(() => {
		FetchImg(idCart).then(data => {
			const trans = {}

			const transSetData = () => {
				trans[idCart] = data.hits.map(hit => {
					return { web: hit.webformatURL }
				})
				
				actions.addCartImgs(trans)
			}

			transSetData()
		}).catch(err => console.log(err))
	}, [idCart, actions])

	useEffect(() => {
		setScaleAnim(true)
		const { cart, cartImgs } = store

		if (typeof cart[idCart] !== 'object') {
			fetchData()
		}

		if (typeof cartImgs[idCart] !== 'object') {
			fetchImg()
		}

	}, [ store, idCart, fetchData, fetchImg ])

	return (
		(
			typeof store.cart[idCart] !== 'object'
			|| 
			typeof store.cartImgs[idCart] !== 'object'
		) ?
		Loader()
		:
		RenderData(
			{...store.cart[idCart],
			images: store.cartImgs[idCart] },
			scaleAnim,
			zoomOpen,
			zoomHandleOpen
		)
	)
}

export default RenderPresentacion
