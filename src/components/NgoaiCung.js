import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Menu from './Menu'
import ContaSanphamList from '../containers/ContaSanphamList'
import ContaSanphamAction from '../containers/ContaSanphamAction'
import ContaTrangChu from '../containers/ContaTrangChu'
import ContaNotFound from '../containers/ContaNotFound'
import {
  ROOT_PATH, SPL_PATH, SPL_ADD_PATH, SPL_EDIT_PATH, LOGIN_PATH
} from '../mocks/mockListItems'

let isAuthenGlobal = false
function RouteCaNhan({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenGlobal ? ( // nếu authen rồi thì move to "/sanpham-list", unless redirect to "/login" with nguồn là "/sanpham-list"
          children
        ) : (
            <Redirect
              to={{
                pathname: LOGIN_PATH,
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txtUsername: '',
      txtPW: '',
      is_redir: false
    }
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    let { txtUsername, txtPW } = this.state
    if (txtUsername === 'admin' && txtPW === 'admin') {
      this.setState({ is_redir: true })
      isAuthenGlobal = true
      this.props.propsOnAuthen()
    } else {
      alert('Sai thông tin đăng nhập!!!')
    }
  }
  onChangeInput = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    let { txtUsername, txtPW } = this.state
    return (

      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control"
                name="txtUsername"
                value={txtUsername}
                onChange={this.onChangeInput}
                placeholder="Nhập username..." />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control"
                name="txtPW"
                value={txtPW}
                onChange={this.onChangeInput}
                placeholder="Nhập password..." />
            </div>

            <button type="submit" className="btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
    )
  }
}

function AuthenButton() {
  let history = useHistory() // Hooks can only be called inside of the body of a function component
  const [is_authen, setIsAuthen] = useState(false)
  let onAuthen = () => {
    setIsAuthen(true)
    history.push(SPL_PATH)
  }
  let signOut = () => {
    setIsAuthen(false)
    history.push(ROOT_PATH)
  }
  return (
    is_authen ? (
      <p>
        Chào mừng [admin] đã log in!{" "}
        <button
          onClick={() => {
            isAuthenGlobal = false
            signOut()
          }}
        >Sign out
      </button>
      </p>
    ) : (
        <Login propsOnAuthen={onAuthen} />
      )
  )
}

class NgoaiCung extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <AuthenButton />
          <Menu></Menu>
          <Switch>
            <Route exact path={ROOT_PATH}>
              <ContaTrangChu />
            </Route>
            <Route path={SPL_ADD_PATH} component={({ history }) => <ContaSanphamAction historyObj={history} />} />
            <Route path={SPL_EDIT_PATH} component={({ match, history }) => <ContaSanphamAction matchObj={match} historyObj={history} />} />
            <Route path={LOGIN_PATH}>
              <div>
                <h1>Bạn phải login trước!!!</h1>
              </div>
            </Route>
            <RouteCaNhan path={SPL_PATH}>
              <ContaSanphamList />
            </RouteCaNhan>
            <Route path="">
              <ContaNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default NgoaiCung
