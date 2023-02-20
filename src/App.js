import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <ProtectedRoutes exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
