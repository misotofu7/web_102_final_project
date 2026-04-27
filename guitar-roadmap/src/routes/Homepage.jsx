import { useEffect, useState } from 'react'
import { supabase } from '../client'
import PostCard from '../components/PostCard'
import './Homepage.css'

function Homepage() {
    const [posts, setPosts] = useState([])
    // set default filter to newest
    const [sortBy, setSortBy] = useState('newest')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from('post')
                .select()
                .order('created_at', { ascending: false })
            
            setPosts(data)
        }

        fetchPosts()
    }, [])

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortBy === 'upvotes') {
            return b.upvotes - a.upvotes
        }

        return new Date(b.created_at) - new Date(a.created_at)
    })

    const filteredPosts = posts.filter((post) => {
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

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
                        <select
                            className="filters"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="upvotes">Most Upvoted</option>
                        </select>
                    </div>
                </div>

                {/* list posts all here */}
                <div className="posts-list">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                created_at={post.created_at}
                                upvotes={post.upvotes}
                            />
                        ))
                    ) : (
                        <p>No posts yet. :P </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Homepage