export const getGuitarras = async () => {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data } = await response.json();
    return (data)
}

export const getGuitarrasURL = async (url) => {
    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data } = await response.json();
    return (data)
}

export const getPosts = async () => {
    const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const { data } = await response.json();
    return (data)
}

export const getPostsURL = async (url) => {
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data } = await response.json()
    return (data)
}

export const getCurso = async () => {
    const response = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const { data } = await response.json()
    return (data)
    
}