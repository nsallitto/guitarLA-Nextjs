import Image from "next/image"
import imagen from "../../../public/img/nosotros.jpg"
import styles from "./nosotros.module.css"

export const metadata = {
    title: 'GuitarLA - Nosotros',
    description: 'Blog de Guitarras, Tienda, Cursos y mas',
}

function Nosotros() {
    return (
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
                <Image src={imagen} alt="Imagen sobre Nosotros" />

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis congue sapien, eget cursus risus lobortis eget.
                        Aliquam leo diam, ultrices ac metus vel, tempor dignissim tellus.
                        Cras in volutpat ex, quis aliquet augue. Aenean nibh erat, iaculis a iaculis nec, rhoncus eget quam. Sed posuere felis at pretium blandit.
                        Duis lobortis varius aliquet. Donec in leo in orci imperdiet blandit in ac mauris.
                    </p>

                    <p>
                        Vivamus eleifend eros justo, id interdum massa vehicula eu. Sed vitae tempor ipsum. Aliquam fermentum justo et risus tristique sodales.
                        Nulla sagittis justo eget convallis tempus. Nam aliquet, turpis ut placerat faucibus, nulla est ultricies est, ultrices molestie enim sem vehicula nunc.
                    </p>
                </div>

            </div>
        </main>
    )
}

export default Nosotros