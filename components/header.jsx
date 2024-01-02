"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/logo.svg"
import styles from "../src/app/header.module.css"
import { usePathname } from "next/navigation"
import logoCarrito from "../public/img/carrito.png"

function Header() {

    const pathname = usePathname(); //con este hook logramos el "active"

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Imagen del Logo"
                    />
                </Link>

                <nav className={styles.navegacion}>
                    <Link
                        href="/"
                        className={`${pathname === "/" ? styles.active : styles.link}`}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        className={`${pathname === "/nosotros" ? styles.active : styles.link}`}
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/tienda"
                        className={`${pathname === "/tienda" ? styles.active : styles.link}`}
                    >
                        tienda
                    </Link>
                    <Link
                        href="/blog"
                        className={`${pathname === "/blog" ? styles.active : styles.link}`}
                    >
                        blog
                    </Link>
                    <Link 
                        href="/carrito"
                        className={`${pathname === "/carrito" ? styles.active : styles.link}`}
                    >
                        <Image width={30} height={25} src={logoCarrito} alt="Imagen Carrito"/>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header