import { useState, useEffect, useCallback } from 'react'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import RenderPresentacionData from './acciones/RenderPresentacionData'
import FetchPresentacionCartsData from './acciones/FetchPresentacionCartsData'

const RenderPresentacion = ({ nameCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ presentacionCartsData, setPresentacionCartsData ] = useState(null)
	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	const fetchData = useCallback(() => {
		FetchPresentacionCartsData( nameCart ).then(datos => {
			setPresentacionCartsData(datos)
		}).catch(err => {
			console.log(err)
		})
	}, [ nameCart ])

	useEffect(() => {
		setScaleAnim(true)

		if (presentacionCartsData === null) {
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

	}, [ setScaleAnim, presentacionCartsData, nameCart, fetchData, setPresentacionCartsData, zoomOpen, zoomImgList ])

	return (
		presentacionCartsData ?
		RenderPresentacionData(presentacionCartsData, scaleAnim, zoomOpen, zoomHandleOpen)
		:
		LoaderApp()
	)
}

export default RenderPresentacion
