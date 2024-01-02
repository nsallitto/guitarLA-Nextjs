import Link from "next/link"
import styles from "../src/app/footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/" className={styles.link}>
            inicio
          </Link>

          <Link href="/nosotros" className={styles.link}>
            nosotros
          </Link>

          <Link href="/tienda" className={styles.link}>
            tienda
          </Link>
          
          <Link href="/blog" className={styles.link}>
            blog
          </Link>


        </nav>

        <p className={styles.copyrigth}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer