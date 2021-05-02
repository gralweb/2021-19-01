import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavEnd = () => (
    <nav className='footer-nav'>
        <ul className='footer-nav-links' >
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion1'>Seccion 1</Link>
            </li>
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion2'>Seccion 2</Link>
            </li>
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion3'>Seccion 3</Link>
            </li>
        </ul>

        <ul className='footer-nav-links' >
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion4'>Seccion 4</Link>
            </li>
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion5'>Seccion 5</Link>
            </li>
            <li className='footer-list-item'>
                <Link to='/gralweb/seccion6'>Seccion 6</Link>
            </li>
        </ul>
    </nav>
)

export default FooterNavEnd
