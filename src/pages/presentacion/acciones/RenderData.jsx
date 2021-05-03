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
				{ RenderDataImg( images, title, scale, zoomHandleOpen ) }

				<div className='single-cont-leyenda'>
					<div className="single-leyenda-left">
						<p>
							Leanne Graham
						</p>
					</div>
					<div className="single-leyenda-right">
						<p>
							2021/04/10
						</p>
					</div>
				</div> 
			</div>

			<div className='single-cont-titulo'>
				<h2>
					{ title }
				</h2>
			</div>

			<div className='single-cont-texto'>
				<p>
					{ body }
				</p>
			</div>
		</div>
	)
}

export default RenderData
