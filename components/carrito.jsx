"use client"

import { useEffect, useState } from "react";
import { useCarritoContext } from "../context/carritoContext";
import Image from "next/image";

function Carrito({ styles }) {

  const { carrito, actualizarCantidad, eliminarProducto } = useCarritoContext();

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalAcumulado = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(totalAcumulado)
  }, [carrito])


  return (
    <div className={styles.contenido}>

      <div className={styles.carrito}>
        <h2>Articulos</h2>

        {carrito.length === 0 ? ("El carrito esta vacio") : (
          carrito.map(producto => (
            <div
              key={producto.id}
              className={styles.producto}
            >
              <div>
                <Image width={250} height={480} src={producto.imagen} alt={`Imagen producto ${producto.nombre}`} />
              </div>

              <div>
                <p className={styles.nombre}>{producto.nombre}</p>

                <div className={styles.cantidad}>
                  <p>Cantidad</p>
                  <select
                    value={producto.cantidad}
                    className={styles.select}
                    onChange={(e) => actualizarCantidad({
                      id: producto.id,
                      cantidad: e.target.value
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <p className={styles.precio}>Precio: $<span>{producto.precio}</span></p>
                <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
              </div>

              <button
                className={styles.eliminar}
                type="button"
                onClick={() => eliminarProducto(producto.id)}
              >
                X
              </button>
            </div>
          ))
        )}

      </div>

      <aside className={styles.resumen}>
        <h3>Resumen del pedido</h3>
        <p>Total a Pagar: ${total}</p>
      </aside>

    </div>
  )
}

export default Carrito