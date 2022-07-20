import './Auth.css'
import { GrFacebook } from 'react-icons/gr'
import { ImGoogle2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

const Login = () => {
  return (
    <>
      <Navbar />
      <main className="mainLogin displayFlex">
        <form className="form">
          <div className="formDiv displayFlex">
            <h1>Login</h1>
            <label className="label displayFlex" htmlFor="email">
              Email
              <input
                required
                type="text"
                id="email"
                className="input"
                placeholder="Enter your email"
              />
            </label>
            <label className="label displayFlex" htmlFor="password">
              Password
              <input
                required
                type="password"
                id="password"
                className="input"
                placeholder="Enter your password"
              />
            </label>
            <div className="btnDiv displayFlex">
              <button className="btn">Login</button>
              <p className="centerText">or login using social media account</p>

              <button className="btn goggleBtn displayFlex">
                <ImGoogle2 />
                Login With Google
              </button>
              <button className="btn facebookBtn displayFlex">
                <GrFacebook />
                Login With Facebook
              </button>
              <hr className="horizontal" />
            </div>
            <p>
              Don't have an account?
              <strong className="highlightText">
                <em> Signup Now!</em>
              </strong>
            </p>
            <Link to="/register" className="removeUnderline">
              <button className="btn">Signup</button>
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}

export { Login }
