import { getPosts } from "../../../data/page";
import Post from "../../../components/post";
import styles from "./blog.module.css"

export const metadata = {
    title: 'GuitarLA - Blog',
    description: 'Blog de Guitarras, Tienda, Cursos y mas',
}

async function Blog() {

    const posts = await getPosts();

    return (
        <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
                {
                    posts.map(post => (
                        <Post
                            styles={styles}
                            key={post.id}
                            post={post.attributes}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Blog