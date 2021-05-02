import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavStart = () => (
	<ul className='footer-nav-links' >
		<li className='footer-list-item'>
			<Link to='/seccion1'>Seccion 1</Link>
		</li>
		<li className='footer-list-item'>
			<Link to='/seccion2'>Seccion 2</Link>
		</li>
		<li className='footer-list-item'>
			<Link to='/seccion3'>Seccion 3</Link>
		</li>
		<li className='footer-list-item'>
			<Link to='/seccion4'>Seccion 4</Link>
		</li>
	</ul>
)

export default FooterNavStart