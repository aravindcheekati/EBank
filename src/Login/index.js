import React, {Redirect} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends React.Component {
  state = {
    userID: '',
    pin: '',
    isError: false,
    errorMsg: '',
  }

  login = async e => {
    e.preventDefault()
    const {userID, pin} = this.state
    const userCredentials = {
      user_id: userID,
      pin,
    }
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({isError: true, errorMsg})
    }
  }

  render() {
    const {isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-logo"
            />
          </div>
          <div className="form-container">
            <h1>Welcome Back!</h1>
            <form className="form" onSubmit={this.login} autoComplete="off">
              <label htmlFor="userid" className="label">
                User ID
              </label>
              <input
                type="text"
                id="userid"
                placeholder="Enter User ID"
                onChange={e => this.setState({userID: e.target.value})}
              />
              <label htmlFor="pin" className="label">
                PIN
              </label>
              <input
                type="password"
                id="pin"
                placeholder="Enter PIN"
                onChange={e => this.setState({pin: e.target.value})}
              />
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <div className="error-container">
              {isError ? <p className="error-msg">{errorMsg}</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
