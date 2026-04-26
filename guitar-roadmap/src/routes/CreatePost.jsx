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

    const createPost = async (event) => {
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
        <div className="create">
            <div>
                {/* <h2>Create Post</h2> */}
                <form onSubmit={createPost}>
                    <label htmlFor="title">Post Title</label> <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
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
                        onChange={handleChange}>
                    </input>
                    <br/>
                    <br/>

                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>

    )
}

export default CreatePost