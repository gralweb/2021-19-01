import { useState, useEffect, useCallback } from 'react'

// Componentes
import Loader from './../../components/Loader'
import RenderData from './acciones/RenderData'
import FetchData from './acciones/FetchData'

const RenderPresentacion = ({ idCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ cartsData, setCartsData ] = useState(null)
	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	const fetchData = useCallback(() => {
		FetchData( idCart ).then(datos => {
			setCartsData(datos)
		}).catch(err => {
			console.log(err)
		})
	}, [ idCart ])

	useEffect(() => {
		setScaleAnim(true)

		if (cartsData === null) {
			fetchData()
		}

		if (zoomOpen) {
			document.querySelector('body').classList.add('zoom')
		} else {
			if (zoomImgList) {
				for (let i = 0; i < zoomImgList.length; i++) {
					zoomImgList[i].classList.remove('zoom')
				}
			}
			document.querySelector('body').classList.remove('zoom')
		}

	}, [ cartsData, fetchData, zoomOpen, zoomImgList ])

	return (
		cartsData ?
		RenderData(cartsData, scaleAnim, zoomOpen, zoomHandleOpen)
		:
		Loader()
	)
}

export default RenderPresentacion
