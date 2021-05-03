import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNavLinks = ({ eventClick }) => (
	<div className='header-nav-links' >
		<ul className='header-nav-list'>
			<li className='header-list-item' onClick={ () => eventClick() }>
				<Link to='/gralweb'>Home</Link>
			</li>
			<li className='header-list-item' onClick={ () => eventClick() }>
				<Link to='/gralweb/seccion2'>Seccion 2</Link>
			</li>
			<li className='header-list-item' onClick={ () => eventClick() }>
				<Link to='/gralweb/seccion3'>Seccion 3</Link>
			</li>
			<li className='header-list-item' onClick={ () => eventClick() }>
				<Link to='/gralweb/seccion4'>Seccion 4</Link>
			</li>
		</ul>
	</div>
)

export default HeaderNavLinks
