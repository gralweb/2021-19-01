import React, { useState, useEffect, useCallback } from 'react'

// Componentes
import LoaderApp from './../../components/LoaderApp'
// import FetchPortafolioCarts from './FetchPortafolioCarts'
import RenderPortafolioData from './acciones/RenderPortafolioData'

const RenderPortafolio = ({ headerLocation }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ portafolioData, setPortafolioData ] = useState(null)

	const fetchData = useCallback(() => {
		setPortafolioData([
			{
				id: 1,
				img: '3.png',
				titulo: 'lorem',
				descripcion: 'lorem'
			}
		])
	}, [setPortafolioData])

	useEffect(() => {
		setScaleAnim(true)

		document.title = `${document.title.slice(0, 9)} Portafolio`
		headerLocation.portafolio()

		if ( portafolioData === null) {
			fetchData()
		}

	}, [ setScaleAnim, headerLocation, fetchData, portafolioData, setPortafolioData ])

	return (
		portafolioData ?
		<div className='app-main-cont'>
			{
				RenderPortafolioData( portafolioData, scaleAnim )
			}

		</div> :
		LoaderApp()
	)
}

export default RenderPortafolio
