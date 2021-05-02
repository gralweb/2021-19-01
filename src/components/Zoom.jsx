import React, { useState, useEffect } from 'react'
import { ASSETS_URL } from './constans'

const Zoom = ({ status, handle }) => {
	const [scaleAnim, setScaleAnim] = useState(false)
	const scale = scaleAnim ? 'scale-max' : 'scale-min'
	const pageBody = document.body

	useEffect(() => {
		if (status) {
			setScaleAnim(true)
			pageBody.classList.add('zoom')
		} else {
			setScaleAnim(false)
			pageBody.classList.remove('zoom')
		}
	}, [status, pageBody])

	return (
		<div className={ status ? 'zoom-cont zoom' : 'zoom-cont' }>
			<div className={ `zoom-cont-foto ${scale}` }>
				<img src={`${ ASSETS_URL }/assets/9jpg`} alt='zoom' />
			</div>

			<div className={ `zoom-cont-close-btn ${scale}` } onClick={ () => handle() }>
				<i className='icofont-close'></i>
			</div>
		</div>
	)
}

export default Zoom