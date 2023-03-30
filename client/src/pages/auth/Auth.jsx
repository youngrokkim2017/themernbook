import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Auth.css'
import Logo from '../../img/logo.png'
import { logIn, signUp } from '../../actions/authAction'

const Auth = () => {
  const dispatch = useDispatch();
  // retrieve loading state from redux
  const loading = useSelector((state => state.authReducer.loading))
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpass: '',
  });
  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // if (data.password !== data.confirmpass) {
      //   setConfirmPass(false)
      // } 
      if (data.password === data.confirmpass) {
        dispatch(signUp(data))
      } else {
        setConfirmPass(false)
      }
    } else {
      // form is login
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmpass: '',
    })
  }

  return (
    <div className="Auth">
      <div className="a-left">
        {/* <img src={Logo} alt="" /> */}
        <FontAwesomeIcon icon="fa-duotone fa-mug-tea-saucer" style={{"--fa-primary-color": "#ff5900", "--fa-secondary-color": "#ff5900",}} />
        <div className="Webname">
          <h1>What's the Tea?</h1>
        </div>
      </div>
      
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? 'Signup' : 'Login'}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && 
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            }
          </div>
          <span 
            style={{ 
              display: confirmPass ? 'none' : 'block', 
              color: 'red', 
              fontSize: '12px', 
              alignSelf: 'flex-end', 
              marginRight: '5px' 
            }}
          >
            * Confirm password is not the same
          </span>
          <div>
            <span 
              style={{ fontSize: '12px', cursor: 'pointer' }} 
              onClick={() => {
                setIsSignUp((prev) => !prev); 
                resetForm();
              }}
            >
              {/* {isSignUp ? "Already have an account. Log In" : "Don't have an account? Sign Up"} */}
              {isSignUp ? (
                <span>Already have an account? <span style={{ fontWeight: 'bold' }}>Log In</span></span>
              ) : (
                <span>Don't have an account? <span style={{ fontWeight: 'bold' }}>Sign Up</span></span>
              )}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  )
}

// const SignUp = () => (
//   <div className="a-right">
//     <form className="infoForm authForm">
//       <h3>Sign up</h3>
//       <div>
//         <input
//           type="text"
//           placeholder="First Name"
//           className="infoInput"
//           name="firstname"
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="infoInput"
//           name="lastname"
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           className="infoInput"
//           name="username"
//           placeholder="Usernames"
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           className="infoInput"
//           name="password"
//           placeholder="Password"
//         />
//         <input
//           type="text"
//           className="infoInput"
//           name="confirmpass"
//           placeholder="Confirm Password"
//         />
//       </div>
//       <div>
//           <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
//       </div>
//       <button className="button infoButton" type="submit">Signup</button>
//     </form>
//   </div>
// )

// const LogIn = () => (
//   <div className="a-right">
//     <form className="infoForm authForm">
//       <h3></h3>
//       <div>
//         <input
//           type="text"
//           placeholder="Username"
//           className="infoInput"
//           name="username"
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           className="infoInput"
//           placeholder="Password"
//           name="password"
//         />
//       </div>
//       <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//         <button className="button infoButton">Login</button>
//       </div>
//     </form>
//   </div>
// )

export default Auth