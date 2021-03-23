import React, { createContext, useState } from 'react'

const ContextApp = createContext(null)

const Provider = ({ children }) => {
    const [carts, setCarts] = useState([])
    const addCarts = cartsData => {
        setCarts(carts.concat(cartsData))
    }

    const [cart, setCart] = useState({})
    const addCart = cartData => {
        setCart({...cart, ...cartData})
    }

    const [cartImgs, setCartImgs] = useState({})
    const addCartImgs = cartDataImgs => {
        setCartImgs({...cartImgs, ...cartDataImgs})
    } 
    
    const global = {
        store: {
            carts,
            cart,
            cartImgs
        },
        actions: {
            addCarts,
            addCart,
            addCartImgs
        }
    }

    return ( 
        <ContextApp.Provider value={ global } > 
        {
            children
        } 
        </ContextApp.Provider>
    )
}

export { ContextApp, Provider }