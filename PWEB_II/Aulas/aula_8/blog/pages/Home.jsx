import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.slice(0, 10))
                setLoading(false)
            })
    }, [])

    return (
        <div className='container'>
            <h1>Últimos Artigos</h1>

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className='grid'>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home