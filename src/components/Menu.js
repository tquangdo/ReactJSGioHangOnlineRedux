import React from 'react'
import { NavLink } from 'react-router-dom'
import { menu_list_items } from '../mocks/mockListItems'

class Menu extends React.Component {
  hienMenu = (menu_list_items_arg) => {
    let kqTraVe = null
    if (menu_list_items_arg.length > 0) {
      kqTraVe = menu_list_items_arg.map((item, chiso) => {
        return (
          <li key={chiso}>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red", backgroundColor: "yellow"
            }} to={item.to} exact={item.exact} >{item.label} </NavLink>
          </li>
        )
      })
    }
    return kqTraVe
  }
  render() {
    return (
      <nav>
        <ul className="nav navbar-nav">
          {this.hienMenu(menu_list_items)}
        </ul>
      </nav>
    )
  }
}

export default Menu
