import './UpvoteBox.css'

function UpvoteBox({ upvotes, handleUpvote }) {
    return (
        <button type="button" className="upvote-box" onClick={handleUpvote}>
          <span className="upvote-arrow">↑</span>
          <span className="upvote-count">{upvotes ?? 0}</span>
          <span className="upvote-label">Upvote</span>
        </button> 
    )
}

export default UpvoteBox