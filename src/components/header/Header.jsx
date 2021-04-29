// Dependecias
import React from 'react' /*, { useEffect, useCallback }*/
import { Link } from 'react-router-dom'

// Componentes
import HeaderNav from './HeaderNav'
import HeaderNavBtn from './HeaderNavBtn'

import { ASSETS_URL } from './../constans'

const Header = ({ menuOpen, onClick }) => {
    // const tagbody = document.querySelector('body')

    // const handleTemaBody = useCallback(
    //     () => {
    //         if (tagbody) {
    //             if (tema) {
    //                 tagbody.classList.add('claro')
    //                 tagbody.classList.remove('oscuro')
    //             } else {
    //                 tagbody.classList.add('oscuro')
    //                 tagbody.classList.remove('claro')
    //             }
    //         }     
    //     },
    //     [tagbody, tema]
    // )

    // useEffect(() => {
    //    handleTemaBody()
    // }, [handleTemaBody])


    return (
        <header className='header'>
        	<div className='header-cont-start'>
                <div className='header-cont-logo'>
                    <Link to='/home'>
                        {/*<img 
                            src={ `${ASSETS_URL}/logo/gral_${(tema) ? 'claro' : 'oscuro'}.png` }
                            id='header-location-logo' alt='Gral'
                        />*/}

                        <img 
                            src={ `${ASSETS_URL}/logo/gral_oscuro.png` }
                            alt='Gral' title='GralWeb - Desarrollo Web'
                        />
                    </Link>
                </div>
            </div>

            <div className='header-cont-end' >
                <HeaderNavBtn eventClick={ onClick } type='open' />
            </div>

            <HeaderNav menuState={ menuOpen } eventClick={ onClick } />
        </header>
    )
}

export default Header
