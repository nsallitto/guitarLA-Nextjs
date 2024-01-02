import { getGuitarras } from "../../../data/page"
import Guitarra from "../../../components/guitarra";
import styles from "./tienda.module.css"

export const metadata = {
    title: 'GuitarLA - Tienda',
    description: 'Nuestra tienda',
}

async function Tienda() {

    const guitarras = await getGuitarras();

    return (
        <main className="contenedor">
            <h2 className="heading">Nuestra Coleccion</h2>
            <div className={styles.grid}>
                {
                    guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))
                }
            </div>

        </main>
    )
}
export default Tienda


