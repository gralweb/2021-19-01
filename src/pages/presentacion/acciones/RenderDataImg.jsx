import React from 'react'

const ImgZoom = (img, handleZoom) => {
	handleZoom()

	const zoomElement = document.querySelectorAll('.zoom')
	const { src } = document.querySelector('.zoom-cont-foto img').attributes
	const { value } = img.children[0].children[0].attributes.src

	if (zoomElement) {
		zoomElement.forEach(elem => {
			elem.classList.remove('zoom')
		})
	}

	src.value = value
}

const Img = ({ scaleAnim, imgWeb, titulo, handleZoom }) => (
	<div
		className={ `single-img ${ scaleAnim } ` }
		onClick={ e => ImgZoom(e.currentTarget, handleZoom) }
	>

		<figure className='single-img-cont'>
			<img src={ imgWeb } alt={ titulo } title={ titulo } />
		</figure>
		
		<figcaption className='single-img-icon'>
			<i className='icofont-optic'></i>
		</figcaption>
	</div>
)

const RenderDataImg = ( images, titulo, scale, handleOpenZoom ) => (
	images.map((img, index) => (
		<Img 
			key={ index }
			scale={ scale }
			imgWeb={ img.web }
			imgLarge={ img.large }
			titulo={ titulo }
			handleZoom={ handleOpenZoom }
		/>
	))
)

export default RenderDataImg
