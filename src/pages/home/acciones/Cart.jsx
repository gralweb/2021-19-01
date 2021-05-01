import React from 'react'
import { Link } from 'react-router-dom'

// Componentes
import { ASSETS_URL } from '../../../components/constans'

const Cart = ({ scaleAnim, img, titulo }) => (
    <div className={ `cart ${ scaleAnim }` }>
        <figure className='cart-img'>
            <img 
                src={ `${ ASSETS_URL }/assets/${ img }.jpg` }
                title={ titulo }
                alt={ titulo }
            />
        </figure>

        <figcaption className='cart-text'>
            <div className='cart-text-left'>
                <p>
                    { titulo }
                </p>
            </div>
            <div className='cart-text-right'>
                <p>
                    <Link to={ `/blog/${ img }` }>
                        <i className='icofont-long-arrow-right'></i>
                    </Link>
                </p>
            </div>
        </figcaption>
    </div>
)

export default Cart
