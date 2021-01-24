import React from 'react'
import { Link } from 'react-router-dom'

import { ASSETS_URL } from './../constans'
import HeaderNavBtn from './HeaderNavBtn'
import HeaderNavSearch from './HeaderNavSearch'

const HeaderNav = ( { menuState, eventClick } ) => {
	return (
        <nav className={ menuState ? 'header-nav open' : 'header-nav' } >
            <div className='header-nav-logo'>
                <div className='header-logo-img'>
                    <Link to='/home'>                        
                        {/*<img 
                            src={ `${ASSETS_URL}/logo/pwa/${(tema) ? 'claro' : 'oscuro'}/512x512.png` }
                            title='GralWeb' alt='GralWeb'
                        />*/}

                        <img 
                            src={ `${ASSETS_URL}/logo/pwa/claro/512x512.png` }
                            alt='GralWeb' title='GralWeb - Desarrollo Web'
                        />
                    </Link>
                </div>
            </div>

            <div className='header-nav-links' >
                <ul className='header-nav-list'>
                    <li className='header-list-item' onClick={ () => eventClick() }>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='header-list-item' onClick={ () => eventClick() }>
                        <Link to='/seccion2'>Seccion 2</Link>
                    </li>
                    <li className='header-list-item' onClick={ () => eventClick() }>
                        <Link to='/seccion3'>Seccion 3</Link>
                    </li>
                    <li className='header-list-item' onClick={ () => eventClick() }>
                        <Link to='/seccion4'>Seccion 4</Link>
                    </li>
                </ul>
            </div>

            <HeaderNavSearch />

            <div className='header-nav-end' >
                <HeaderNavBtn eventClick={ eventClick } type='close' />
            </div>
        </nav>
	)
}

export default HeaderNav
