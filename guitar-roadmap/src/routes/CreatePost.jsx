// import { useState } from 'react'
// import { useNavigate } from 'react-router'
// import { supabase } from '../client.js'
// import './CreatePost.css'

// function CreatePost() {
//     const navigate = useNavigate()

//     const [post, setPost] = useState({
//         title: "",
//         description: "",
//         image: ""
//     })

//     const handleChange = (event) => {
//         const {title, value} = event.target
//         setPost( (prev) => {
//             return {
//                 ...prev,
//                 [title]: value,
//             }
//         })
//     }

//     const createPost = async (event) => {
//         event.preventDefault()

//         await supabase
//             .from('post')
//             .insert({title: post.title, description: post.description, image: post.image})
//             .select()
        
//         navigate("/")
        
//         alert('Post created! XD')
//     }

//     return (
//         <div className="create">
//             <div>
//                 <form>
//                     <label htmlFor="title">Post Title</label> <br />
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         onChange={handleChange}
//                     />
//                     <br/>
//                     <br/>

//                     <label htmlFor="description">Description</label><br />
//                     <input
//                         type="text"
//                         id="description"
//                         name="description"
//                         onChange={handleChange}
//                     />
//                     <br/>
//                     <br/>

//                     <label htmlFor="image">Image</label><br />
//                     <input
//                         type="text"
//                         id="image"
//                         name="image"
//                         onChange={handleChange}>
//                     </input>
//                     <br/>
//                     <br/>

//                     <input
//                         type="submit"
//                         value="Submit"
//                         onClick={createPost}
//                     />
//                 </form>
//             </div>
//         </div>

//     )
// }

// export default CreatePost