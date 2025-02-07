import './App.css'
import TodoApp from './components/TodoApp'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/getcode" element={<GetCode />} /> */}
        </Routes>
      </Router>
    
    </>
  )
}

export default App
