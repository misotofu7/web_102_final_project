import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <nav className="nav-left">
                {/* Logo on the far left */}
                <Link to="/" className="home-btn">🎸 Guitar Roadmap</Link>
            </nav>

            <nav className="nav-right">
                {/* right side navigation buttons */}
                <Link to="/roadmap" className="roadmap-btn">Roadmap</Link>
                <Link to="/create" className="create-btn">+ Create Post</Link>

                {/* extra features to add if there's time */}
                {/* <Link to="/login" className="nav-links">Login</Link>
                <Link to="/tutorials" className="nav-links">Tutorials</Link> */}
            </nav>
        </nav>
    )
}

export default Navbar