import { Link } from 'react-router-dom'

function PostCard({ post }) {
    return (
        <div className='card'>
            <h2>{post.title}</h2>

            <p>
                {post.body.substring(0, 100)}...
            </p>

            <Link to={`/post/${post.id}`}>
                Ler mais
            </Link>
        </div>
    )
}

export default PostCard