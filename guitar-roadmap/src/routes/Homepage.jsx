// import PostCard from '../components/PostCard'
import './Homepage.css'

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage-content">
                <div className="header">
                    <h2 className="title">Posts</h2>

                    <div className="controls">
                        {/* place searchbar here */}
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search posts by title..."
                        />

                        {/* filters here */}
                        <select className="filters">
                            <option value="newest">Newest</option>
                            <option value="upvotes">Most Upvoted</option>
                        </select>
                    </div>
                </div>

                {/* list posts all here */}
                <div className="posts-list">
                    {/* <PostCard /> */}
                </div>
            </div>
        </div>
    )
}

export default Homepage