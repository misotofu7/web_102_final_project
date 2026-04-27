import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { supabase } from '../client'
import './PostDetail.css'

function PostDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState({
        id: null,
        created_at: "",
        title: "",
        description: "",
        image: "",
        upvotes: 0,
        comments: []
    })

    const [comment, setComment] = useState('')

    useEffect(() => {
        const fetchPost = async () => {
            const response = await supabase
                .from("post")
                .select()
                .eq('id', id)
                .single()
            
            if (response.data) {
                setPost(response.data)
            }
        }

        fetchPost()
    }, [id])

    const handleUpvote = async () => {
        const newUpvotes = (post.upvotes || 0) + 1

        await supabase
            .from('post')
            .update({ upvotes: newUpvotes })
            .eq('id', id)
        
        setPost({ ...post, upvotes: newUpvotes })
    }

    const handleAddComment = async (e) => {
        e.preventDefault()

        if (!comment.trim()) return

        const updatedComments = [...(post.comments || []), comment]
    
        await supabase
            .from('post')
            .update({ comments: updatedComments })
            .eq('id', id)

        setPost({ ...post, comments: updatedComments })
        setComment('')
    }

    // can also delete post in details page
    const handleDelete = async () => {
        await supabase
            .from('post')
            .delete()
            .eq('id', id)
        
        navigate('/')
    }

    return (
        <div className="post-detail">
            <div className="post-detail-card">
                <Link to="/" className="back-link">← Back to Home</Link>

                <h1>Post Details</h1>

                <h2>ID: {post.id}</h2>
                <h2>Created At: {new Date(post.created_at).toLocaleString()}</h2>
                <h2>Title: {post.title}</h2>
                <h2>Description: {post.description}</h2>
                <h2>Image: {post.image}</h2>

                <div className="buttons">
                    <button className="upvote-btn" onClick={handleUpvote}>
                        Upvote
                    </button>

                    {/* edit player button */}
                    <Link to={`/edit/${post.id}`} className="edit-post-btn">
                        Edit Post
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostDetail