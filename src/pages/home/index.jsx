import React, { useState, useEffect, useCallback } from 'react'

// Componentes
import Loader from '../../components/Loader'
// import FetchData from './FetchData'
import RenderData from './acciones/RenderData'

const RenderHome = () => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ data, setData ] = useState(null)

	const fetchData = useCallback(() => {
		setData([
			{
				id: 1,
				img: '1.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			},
			{
				id: 2,
				img: '2.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			},
			{
				id: 3,
				img: '3.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			},
			{
				id: 4,
				img: '4.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			},
			{
				id: 5,
				img: '5.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			},
			{
				id: 6,
				img: '6.jpg',
				titulo: 'lorem',
				descripcion: 'lorem'
			}
		])
	}, [setData])

	useEffect(() => {
		setScaleAnim(true)

		document.title = `${document.title.slice(0, 6)} Home`

		if ( data === null) {
			fetchData()
		}

	}, [ setScaleAnim, fetchData, data, setData ])

	return (
		data ?
		<div className='main-cont'>
			{
				RenderData( data, scaleAnim )
			}

		</div> :
		Loader()
	)
}

export default RenderHome
