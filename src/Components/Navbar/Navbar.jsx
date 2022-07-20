import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="removeUnderline">
        <button className="btn">Home</button>
      </Link>
    </nav>
  )
}

export { Navbar }
