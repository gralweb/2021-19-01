import React from 'react'

// Componentes
import { ASSETS_URL } from '../../../components/constans'

const ImgZoom = (img, handleZoom) => {
	handleZoom()

	const zoomClase = 'zoom'
	const zoomElement = document.querySelectorAll(`.${zoomClase}`)
	const zoomContent = document.querySelector('.app-zoom-foto img').attributes.src
	const imgSrcValue = img.children[0].children[0].attributes.src.value

	if (zoomElement) {
		for (let i = 0; i < zoomElement.length; i++) {
			zoomElement[i].classList.remove(zoomClase)
		}
	}
	zoomContent.value = imgSrcValue
}

const Img = ({ scaleAnim, img, titulo, handleZoom }) => {
	return (
		<div
			className={ `app-cont-item app-vista ${ scaleAnim } ` }
			onClick={ e => ImgZoom(e.currentTarget, handleZoom) }
		>

	        <figure className='app-item-img app-vista-foto'>
	            <img src={ `${ ASSETS_URL }/assets/${ img.foto }` } alt={ titulo } title={ titulo } />
	        </figure>
	        <figcaption className='app-vista-zoom'>
	            <div className='app-zoom'>
	                <i className='icofont-optic'></i>
	            </div>
	        </figcaption>
	    </div>
	)
}

const RenderDataImg = ( fotos, titulo, scaleAnim, handleOpenZoom ) => {
	return (
		fotos.map((img, index) => {
			return (
				<Img 
					key={ index }
					scaleAnim={ scaleAnim }
					img={ img }
					titulo={ titulo }
					handleZoom={ handleOpenZoom }
				/>
			)
		})
	)
}

export default RenderDataImg