import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import './EditPost.css'
import { supabase } from '../client'

const EditPost = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [post, setPost] = useState({
        id: null,
        title: "",
        description: "",
        image: ""
    })

    useEffect(() => {
        const fetchPost = async () => {
            const response = await supabase
                .from('post')
                .select()
                .eq('id', id)
                .single()

            if (response.data) {
                setPost(response.data)
            }
        }

        fetchPost()
    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const handleUpdatePost = async (event) => {
        // prevent page from reloading whenever form is submitted
        event.preventDefault()
        await supabase
            .from('post')
            .update({ title: post.title, description: post.description, image: post.image })
            .eq('id', id)

        navigate("/")
    }

    const handleDeletePost = async (event) => {
        // prevent page from reloading whenever form is submitted
        event.preventDefault()

        await supabase
            .from('post')
            .delete()
            .eq('id', id)

        navigate("/")
    }
        
    return (
        <div className="edit-page">
            <div className="edit-card">
                <h1 className="edit-title">Edit Post</h1>

                <form onSubmit={handleUpdatePost} className="edit-form">
                    <label htmlFor="title">Post Title</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>

                    <label htmlFor="description">Description</label><br />
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>

                    <label htmlFor="image">Image URL</label><br />
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={post.image}
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>

                    <div className="edit-btn-row">
                        <button className="cancel-btn" onClick={() => navigate("/")}>
                            X Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Save Post
                        </button>

                        <button className="delete-btn" onClick={handleDeletePost}>
                            Delete Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPost