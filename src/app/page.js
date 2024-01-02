import { getGuitarras, getPosts, getCurso } from "../../data/page"
import Guitarra from "../../components/guitarra";
import Post from "../../components/post"
import Curso from "../../components/curso";

//STYLES
import styles from "../app/tienda/tienda.module.css"
import blogStyles from "../app/blog/blog.module.css"


export default async function Home() {

  const guitarras = await getGuitarras();
  const posts = await getPosts();
  const curso = await getCurso();

  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

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

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.grid}>
          {
            posts.map(post => (
              <Post
                styles={blogStyles}
                key={post.id}
                post={post.attributes}
              />
            ))
          }
        </div>

      </section>
    </>
  )
}
