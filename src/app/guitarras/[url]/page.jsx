import { Suspense } from "react"
import GuitarraSelectaURL from "../../../../components/guitarraSelectaURL"
import { getGuitarrasURL } from "../../../../data/page"
// import GuitarraSelectaURLSkeleton from "react-loading-skeleton"
// import "react-loading-skeleton"


async function GuitarraURL({ params:{url} }) {

    const guitarra = await getGuitarrasURL( url )
    
    return (
        <>
            {
                guitarra.length === 0 ? (
                    <>
                        <p>La Guitarra no Existe</p> 
                    </>
                ) : (
                    // <Suspense fallback={<GuitarraSelectaURLSkeleton/>}>
                        <GuitarraSelectaURL 
                            guitarra={guitarra}
                        />
                    // </Suspense>
                )
            }
        </>
    )
}

export default GuitarraURL