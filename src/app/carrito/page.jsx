import Carrito from "../../../components/carrito";
import styles from "./carrito.module.css"

function Page() {

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>

      <Carrito
        styles={styles}
      />
    </main>
  )
}

export default Page