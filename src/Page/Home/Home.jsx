import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="homePage displayFlex">
      <h1 className="homeHeading whiteText"> Welcome </h1>
      <Link to="/login" className="removeUnderline">
        <button className="btn"> Login as guest </button>
      </Link>
    </div>
  )
}

export { Home }
