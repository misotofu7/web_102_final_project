import { useState } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../client.js'
import './CreatePost.css'

function CreatePost() {
    const navigate = useNavigate()

    const [post, setPost] = useState({
        title: "",
        description: "",
        image: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleCreatePost = async (event) => {
        event.preventDefault()

        await supabase
            .from('post')
            .insert({
                title: post.title,
                description: post.description,
                image: post.image,
                comments: [],
                upvotes: 0
            })
            .select()
        
        alert('Post created! XD')
        navigate("/")
    }

    return (
        <div className="create-page">
            <div className="create-card">
                <h1 className="create-title">Create Post</h1>

                <form onSubmit={handleCreatePost} className="create-form">
                    <label htmlFor="title">
                        Post Title
                        <span> (**required**)</span>
                    </label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter post title..."
                        value={post.title}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>

                    <label htmlFor="description">
                        Description
                        <span> (optional)</span>
                    </label>
                    <br />
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Write your post content here"
                        value={post.description}
                        onChange={handleChange}
                    />
                    <br/>
                    <br/>

                    <label htmlFor="image">
                        Image URL
                        <span> (optional)</span>
                    </label>
                    <br />
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        value={post.image}
                        onChange={handleChange}>
                    </input>
                    <br/>
                    <br/>

                    <div className="create-btn-row">
                        <button type="submit" className="create-btn">
                            Submit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreatePost