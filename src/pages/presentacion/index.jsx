import { useState, useEffect, useContext, useCallback } from 'react'
import { ContextApp } from './../../store'

// Componentes
import Loader from './../../components/Loader'
import RenderData from './acciones/RenderData'
import FetchData from './acciones/FetchData'

const RenderPresentacion = ({ idCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ zoomOpen, setZoomOpen ] = useState(false)
	const { store, actions } = useContext(ContextApp)

	const pageBody = document.querySelector('body')
	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

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

	useEffect(() => {
		setScaleAnim(true)
		const { cart } = store

		if (typeof cart[idCart] !== 'object') {
			fetchData()
		}
		
		if (zoomOpen) {
			pageBody.classList.add('zoom')
		} else {
			if (zoomImgList) {
				zoomImgList.forEach(img => {
					img.classList.remove('zoom')
				})
			}
			pageBody.classList.remove('zoom')
		}

	}, [ zoomOpen, zoomImgList, pageBody, store, idCart, fetchData ])

	return (
		(typeof store.cart[idCart] !== 'object') ?
		Loader()
		:
		RenderData(store.cart[idCart], scaleAnim, zoomOpen, zoomHandleOpen)
	)
}

export default RenderPresentacion
