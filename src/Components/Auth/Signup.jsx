import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

const Signup = () => {
  return (
    <>
      <Navbar />
      <main className="mainLogin displayFlex">
        <form className="form">
          <div className="formDiv displayFlex">
            <h1>Signup</h1>
            <label className="label displayFlex" htmlFor="firstname">
              First Name
              <input
                required
                type="text"
                id="firstname"
                className="input"
                placeholder="Enter your First Name"
              />
            </label>
            <label className="label displayFlex" htmlFor="lastname">
              Last Name
              <input
                required
                type="text"
                id="lastname"
                className="input"
                placeholder="Enter your Last Name"
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
              <button className="btn">Signup</button>
              <hr className="horizontal" />
            </div>
            <p>
              Already have an account?
              <strong className="highlightText">
                <em> Login Now!</em>
              </strong>
            </p>
            <Link to="/login" className="removeUnderline">
              <button className="btn"> Login</button>
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}

export { Signup }
