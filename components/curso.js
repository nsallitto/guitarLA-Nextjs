"use client"

import styles from "../src/app/curso.module.css"

function Curso({ curso }) {

    const {
        contenido,
        titulo,
        imagen: {
            data : {
                attributes : {
                    formats : {
                        large : {
                            url : imagenUrl
                        }
                    }
                }
            }
        },
    } = curso;

    return (
        <section className={`${styles.curso} curso`}>
            <style>{`
                .curso {
                    background-image: linear-gradient( to right, rgb( 0 0 0 / .65), rgb( 0 0 0 / .7) ),
                    url( ${imagenUrl} )
                }
            `}

            </style>
            <div className={`contenedor`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{titulo}</h2>
                    <p className={styles.descripcion}>{contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso