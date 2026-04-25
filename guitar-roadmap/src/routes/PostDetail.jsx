// import { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router'
// import { supabase } from '../client'
// import './PostDetail.css'

// function PostDetail() {
//     const { id } = useParams()

//     // display id and created_at for more details
//     const [post, setPost] = useState({
//         id: null,
//         title: "",
//         description: "",
//         image: "",
//         created_at: ""
//     })

//     useEffect(() => {
//         const fetchPost = async () => {
//             const response = await supabase
//                 .from("post")
//                 .select()
//                 .eq('id', id)
//                 .single()
            
//             if (response.data) {
//                 setPost(response.data)
//             }
//         }

//         fetchPost()
//     }, [id])

//     return (
//         <div className="post-detail">
//             <div className="post-detail-card">
//                 <h1>Post Details</h1>

//                 <h2>ID: {post.id}</h2>
//                 <h2>Created At: {post.created_at}</h2>
//                 <h2>Title: {post.title}</h2>
//                 <h2>Description: {post.description}</h2>
//                 <h2>Image: {post.image}</h2>

//                 <div className="buttons">
//                     {/* edit player button */}
//                     <Link to={`/edit/${post.id}`} className="edit-post-btn">
//                         Edit Post
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PostDetail