import { Link } from 'react-router'
import more from '../assets/more.png'
import './PostCard.css'

function PostCard(props) {
  return (
    <div className="post-card">
      <Link to={`/post/${props.id}`} className="post-card-link">
        <div className="post-container">
          <p className="post-time">
            {/* clean up time to not make it look ugly */}
            {new Date(props.created_at).toLocaleString()}
        </p>
          <h2 className="post-title">{props.title}</h2>
          <p className="post-upvotes">{props.upvotes} upvotes</p>
        </div>
      </Link>

      <Link to={`/edit/${props.id}`} className="edit-link">
        <img className="more-button" alt="edit button" src={more} />
      </Link>
    </div>
  )
}

export default PostCard