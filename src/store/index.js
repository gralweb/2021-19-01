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
    
    const global = {
        store: {
            carts,
            cart
        },
        actions: {
            addCarts,
            addCart
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