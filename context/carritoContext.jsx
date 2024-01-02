"use client"

import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => {
    const values = useContext( CarritoContext )
    if(!values) throw new Error('valores no encontrados')
    return values
}

export const CarritoProvider = ({ children }) => {

    const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : []
    const [carrito, setCarrito] = useState(carritoLS);
    const [paginaLista, setPaginaLista] = useState(false)

    useEffect(() => {
        setPaginaLista(true)
    }, [])

    useEffect( () => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    const agregarAlCarrito = ( guitarra ) => {
        if (carrito.some( guitrraState => guitrraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map( guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito([...carritoActualizado]);
        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const eliminarProducto = (id) => {
        const carritoActualizado =  carrito.filter( producto => producto.id !== id)
        setCarrito(carritoActualizado)
    }

    const actualizarCantidad = ( guitarra ) => {
        const carritoActualizado = carrito.map( guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = parseInt(guitarra.cantidad)
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    return (
        <>
            {
                paginaLista ? (
                    <CarritoContext.Provider
                        value={{
                            agregarAlCarrito,
                            carrito,
                            eliminarProducto,
                            actualizarCantidad

                        }}
                    >
                        {children}
                    </CarritoContext.Provider> ) : 
                null
            }
        </>
    )
}

