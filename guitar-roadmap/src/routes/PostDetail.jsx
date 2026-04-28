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
    const handleDeletePost = async () => {
        await supabase
            .from('post')
            .delete()
            .eq('id', id)
        
        navigate('/')
    }

    return (
        <div className="post-detail">
            <div className="post-detail-card">

                <div className="top-btns">
                    <Link to="/" className="back-link">
                        ← Back to Home
                    </Link>

                    <div className="action-btns">
                        <Link to={`/edit/${post.id}`} className="edit-post-btn">
                            ✏️ Edit Post
                        </Link>
                        <button
                            className="delete-btn"
                            onClick={handleDeletePost}
                        >
                            🗑️ Delete Post
                        </button>
                    </div>
                </div>

                <div className="post-content">
                    <div className="upvote-box">
                        <p className="upvote-arrow">↑</p>
                        <p className="upvote-count">{post.upvotes ?? 0}</p>
                        <button className="upvote-btn" onClick={handleUpvote}>
                            Upvote
                        </button>
                    </div>

                    <div className="post-main">
                        <h1 className="post-title">{post.title}</h1>
                        <p className="post-time">⏱️ {new Date(post.created_at).toLocaleString()}</p>
                        
                        {/* description and image might be blank --> optional */}
                        {post.description && (
                            <p className="post-description">{post.description}</p>
                        )}

                        {post.image && (
                            <img src={post.image} alt="post-image" className="post-image" />
                        )}
                    </div>
                </div>

                <div className="comments-section">
                    <h2 className="comments-title">
                        Commments ({post.comments ? post.comments.length : 0})
                    </h2>

                    {post.comments && post.comments.length > 0 ? (
                        // if there are comments, display all of them
                        <div className="comments-list">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="comment-item">
                                    {comment}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-comments">No comments yet.</p>
                    )}
                </div>

                {/* allow user to write comments here */}
                <form className="comment=form" onSubmit={handleAddComment}>
                    <textarea
                        className="comment-input"
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button type="submit" className="comment-btn">
                        Post Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PostDetail