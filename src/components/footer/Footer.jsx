import React from 'react'

import FooterNavStart from './FooterNavStart'
import FooterNavEnd from './FooterNavEnd'

const Footer = () => {
  	return (
        <footer className='footer'>
            <div className='footer-cont-start'>
                {/* Navegacion */}
                <div className="footer-nav-start">
                    <FooterNavStart />
                </div>
            </div>

            <div className='footer-cont-end' >
                {/* navegacion */}
                <div className="footer-nav-end">
                    <FooterNavEnd />
                </div>

                <div className='footer-copyrigth'>
                    <p>2021 &copy;</p>
                </div>
            </div>
        </footer>
	)
}

export default Footer
