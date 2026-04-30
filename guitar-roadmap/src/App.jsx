import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Homepage from './routes/Homepage'
import CreatePost from './routes/CreatePost'
import EditPost from './routes/EditPost'
import PostDetail from './routes/PostDetail'
import Roadmap from './routes/Roadmap'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/create" element={<CreatePost /> } />
        <Route path="/edit/:id" element={<EditPost /> } />
        <Route path="/post/:id" element={<PostDetail /> } />
        <Route path="/roadmap" element={<Roadmap /> } />
      </Routes>
    </div>
  )
}

export default App