import { Login } from './Components/Auth/Login'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Signup } from './Components/Auth/Signup'
import { Home } from './Page/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
