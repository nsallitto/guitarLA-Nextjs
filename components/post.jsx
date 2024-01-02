import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"

function Post({ post, styles }) {

    const {
        titulo,
        contenido,
        url,
        publishedAt,
        imagen: { data: { attributes: {url : imagenUrl} } }
    } = post

    return (
        <article>
            <Image src={imagenUrl} alt={`Imagen del post ${titulo}`} width={600} height={400}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.link} href={`/blog/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post