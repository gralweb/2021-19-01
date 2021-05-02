import React from 'react'

const HeaderNavBtn = ({ type, eventClick }) => (
    <div 
        className={`header-nav-btn ${(type === 'open') ? 'header-nav-btn-open' : 'header-nav-btn-close'}`}
        onClick={ () => eventClick() }
    >
        <div className='header-btn-line header-btn-line-start'></div>
        <div className='header-btn-line header-btn-line-hidden'></div>
        <div className='header-btn-line header-btn-line-end'></div>
    </div>
)

export default HeaderNavBtn
