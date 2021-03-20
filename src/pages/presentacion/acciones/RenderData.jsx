import React from 'react'

// Componentes
import Zoom from './../../../components/Zoom'

// import RenderDataImg from './RenderDataImg'

const RenderData = ({ title, body }, scaleAnimBoolean, zoomOpen, zoomHandleOpen) => {
	const scale = scaleAnimBoolean ? 'scale-max' : 'scale-min'
	document.title = `${title} ${document.title.slice(0, 9)}`

	return (
		<div className={`single-cont main-cont`}>
			<Zoom status={zoomOpen} handle={zoomHandleOpen} scale={scale} />

			{/* <div className='single-cont-fotos'>
			    {
			    	RenderDataImg( fotos, titulo, scaleAnim, zoomHandleOpen )
			    }
			</div> */}

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
