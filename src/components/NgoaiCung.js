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
import Login from './Login'

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

function AuthenButton() {
  let history = useHistory() // Hooks can only be called inside of the body of a function component
  const [is_authen, setIsAuthen] = useState(false)
  let onAuthen = () => {
    isAuthenGlobal = true
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
