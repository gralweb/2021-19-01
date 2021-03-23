import React from 'react'

// Componentes
import Zoom from './../../../components/Zoom'

import RenderDataImg from './RenderDataImg'

const RenderData = ({ title, body, images }, scaleAnimBoolean, zoomOpen, zoomHandleOpen) => {
	const scale = scaleAnimBoolean ? 'scale-max' : 'scale-min'
	document.title = title

	return (
		<div className={`single-cont main-cont`}>
			<Zoom status={zoomOpen} handle={zoomHandleOpen} scale={scale} />

			<div className='single-cont-imgs'>
			    {
			    	RenderDataImg( images, title, scale, zoomHandleOpen )
			    }
			</div>

			<div className='single-cont-titulo' onClick={ () => zoomHandleOpen() }>
			    <h2>
			        {
			        	title
			        }
			    </h2>
			</div>

			<div className='single-cont-texto'>
			    <p>
			        {
			        	body
			        }
			    </p>
			</div>
		</div>
	)
}

export default RenderData
