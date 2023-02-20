import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const logoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="home-container">
      <div className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" className="logout-logo" onClick={logoutBtn}>
          Logout
        </button>
      </div>
      <div className="container">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
        />
      </div>
    </div>
  )
}

export default Home
