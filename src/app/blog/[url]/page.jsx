import Image from "next/image";
import { getPostsURL } from "../../../../data/page"
import { formatearFecha } from "../../../../utils/helpers";
import styles from "../blog.module.css"

async function PostURL({ params: { url } }) {

    const postURL = await getPostsURL(url)

    const { titulo, contenido, publishedAt, imagen } = postURL[0].attributes;

    return (
        <div className="contenedor">
            <article className={styles.article}>
                <Image className=" w-max" src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} width={1000} height={700} />

                <div className={styles.contenido}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.fechaCentrada}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </div>
    )
}

export default PostURL