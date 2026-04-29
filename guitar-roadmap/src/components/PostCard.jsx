import { Link } from 'react-router'
import UpvoteBox from './UpvoteBox'
import './PostCard.css'

function PostCard(props) {
  return (
    <div className="post-card">
      <Link to={`/post/${props.id}`} className="post-card-link">
        <UpvoteBox
          upvotes={props.upvotes}
          handleUpvote={(e) => e.preventDefault()}
        />
        
        <div className="main-post">
          <h2 className="post-title">{props.title}</h2>

          <p className="post-time">
            {/* clean up time to not make it look ugly */}
            {new Date(props.created_at).toLocaleString()}
          </p>
        </div>
      </Link>

      <Link to={`/edit/${props.id}`} className="edit-btn">
        Edit Post
      </Link>
    </div>
  )
}

export default PostCard