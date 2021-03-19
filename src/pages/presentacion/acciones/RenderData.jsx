import React from 'react'

// Componentes
// import { ASSETS_URL } from './../../components/constans'
// import RenderDataImg from './RenderDataImg'

const RenderData = ({ title, body }, scaleAnimBoolean, zoomOpen, zoomHandleOpen) => {
	// const { titulo, descripcion } = datos
	// const scaleAnim = scaleAnimBoolean ? 'app-cont-item-scale' : null
	document.title = `${document.title.slice(0, 9)} ${title}`

	return (
		<div className='app-main-cont'>
			<div className={ (zoomOpen) ? `app-vista-cont-zoom zoom` : 'app-vista-cont-zoom' }>
				<div className={ (zoomOpen) ? `app-zoom-foto zoom` : 'app-zoom-foto' }>
	                <img src='' alt='zoom' />
	            </div>

	            <div className='app-zoom-cont-close-btn' onClick={ () => zoomHandleOpen() }>
            		<span className='app-btn-menu app-btn-menu-dark'>
	            		<i className='icofont-close'></i>
            		</span>
	            </div>
	        </div>

			{/* <div className='app-vista-cont-fotos'>
			    {
			    	RenderDataImg( fotos, titulo, scaleAnim, zoomHandleOpen )
			    }
			</div> */}

			<div className='app-vista-cont-titulo'>
			    <h2>
			        {
			        	title
			        }
			    </h2>
			</div>

			<div className='app-vista-cont-texto'>
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
