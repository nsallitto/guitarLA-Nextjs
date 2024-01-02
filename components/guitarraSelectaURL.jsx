"use client"

import Image from "next/image"
import styles from "../src/app/tienda/guitarra.module.css"
import {  useState } from "react"

import { useCarritoContext } from "../context/carritoContext"

function GuitarraSelectaURL({ guitarra }) {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState("");

    const { agregarAlCarrito } = useCarritoContext();
    

    const {
        nombre,
        descripcion,
        precio,
        url,
        imagen
    } = guitarra[0]?.attributes

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!cantidad)  {
            setError("Debe elegir una cantidad") 
            return;
        }
        setError("")

        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.formats.medium.url,
            nombre,
            precio,
            cantidad
        }
        agregarAlCarrito(guitarraSeleccionada);

    }

    return (
        <>
            <div className={styles.guitarra}>

                <Image src={imagen.data.attributes.formats.medium.url} width={300} height={200} alt={`Imagen de Guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.texto}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={handleSubmit}>
                        <label className={styles.label} htmlFor="cantidad">Cantidad</label>

                        <select 
                        className={styles.select} 
                        id="cantidad"
                        onChange={(e) => setCantidad(e.target.value)}
                        value={cantidad}>
                            <option value="">-- Selecciona Cantidad --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        {
                            error && <p>{error}</p>
                        }
                        <input
                            type="submit"
                            value='Agregar al carrito'
                            className={styles.submit}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default GuitarraSelectaURL