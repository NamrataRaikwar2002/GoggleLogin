import './Login.css'
import {GrFacebook} from 'react-icons/gr';
import {ImGoogle2} from 'react-icons/im';

const Login = () => {
  return (
    <main className="mainLogin dislayFlex">
      <form className="form">
        <div className="loginDiv dislayFlex">
          <h1>Login</h1>
          <label className='label' htmlFor="email">
            Email: 
            <input
            required
              type="text"
              id="email"
              className="input"
              placeholder="Enter your email"
            />
          </label>
          <label className='label' htmlFor="password">
            Password: 
            <input
            required
              type="text"
              id="password"
              className="input"
              placeholder="Enter your password"
            />
          </label>
          <div className="btnDiv dislayFlex">
            <button className="btn goggleBtn displayFlex"><ImGoogle2/>Login With Google</button>
            <button className="btn facebookBtn displayFlex"><GrFacebook/>Login With Facebook</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export { Login }
