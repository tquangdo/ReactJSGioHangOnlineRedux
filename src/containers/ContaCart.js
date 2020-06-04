import React from 'react'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import * as msgs from '../redux/constants/ViewMessage'
import PropTypes from 'prop-types'
//Redux
import { connect } from 'react-redux'
import {
  actionXoaCart, actionChangeMsg, actionEditQuantity, actionEditInventory, actionResetCart
} from '../redux/actions/Action'

class ContaCart extends React.Component {
  hienCartResult(cart_arg, product_arg) {
    let kqTraVe = null
    if (cart_arg.length > 0) {
      kqTraVe = <CartResult
        // phải truyền cho <CartResult> chứ KO được truyền <CartItem>
        cartResult={cart_arg}
        productInventory={product_arg}
        editInventory={this.props.editInventory}
        resetCart={this.props.resetCart}
        // phải truyền cho <CartResult> chứ KO được truyền <CartItem>
        changeMsg={this.props.changeMsg}
      ></CartResult>
    }
    return kqTraVe
  }
  hienCart(cart_arg) {
    let kqTraVe = (
      <tr><td><h2>{msgs.MSG_CART_EMPTY}</h2></td></tr>
    )
    if (cart_arg.length > 0) {
      kqTraVe = cart_arg.map((item, chiso) => {
        return <CartItem
          // phải truyền props thống nhất từ ContaCart->CartItem chứ KO được props thì truyền còn dispatch lại KO
          // (sẽ bị tình trạng F5 mới auto reload props)
          key={chiso} cartItem={item}
          xoaCart={this.props.xoaCart} // phải code kiểu connect(mapState2Props, mapDispatch2Props) chứ KO thể truyền dispatch(actionName()) vô đây!
          editQuantity={this.props.editQuantity}
          changeMsg={this.props.changeMsg}
        ></CartItem>
      })
    }
    return kqTraVe
  }
  render() {
    const { reduxprop_cart, reduxprop_products } = this.props
    return ( // dùng props.children vì vừa truyền cho <Cart> vừa làm hàm return cho <CartItem>
      <Cart>
        {this.hienCart(reduxprop_cart)}
        {this.hienCartResult(reduxprop_cart, reduxprop_products)}
      </Cart>
    )
  }
}
ContaCart.propTypes = {
  reduxprop_cart: PropTypes.arrayOf(
    PropTypes.shape({
      cart_product_arg: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        desc: PropTypes.string,
        price: PropTypes.number,
        inventory: PropTypes.number,
        rating: PropTypes.number
      }),
      cart_quantity_arg: PropTypes.number
    })
  ),
  xoaCart: PropTypes.func,
  resetCart: PropTypes.func,
  editQuantity: PropTypes.func,
  editInventory: PropTypes.func,
  changeMsg: PropTypes.func
}

const mapState2Props = state => {
  return {
    reduxprop_cart: state.reducerCart,
    reduxprop_products: state.reducerProducts
  }
}
const mapDispatch2Props = (dispatch) => {
  return {
    xoaCart: (xoa_cart_arg) => {
      dispatch(actionXoaCart(xoa_cart_arg))
    },
    resetCart: () => {
      dispatch(actionResetCart())
    },
    editQuantity: (cart_item_arg, cart_quantity_arg) => {
      dispatch(actionEditQuantity(cart_item_arg, cart_quantity_arg))
    },
    editInventory: (product_arg, inventory_quantity_arg) => {
      dispatch(actionEditInventory(product_arg, inventory_quantity_arg))
    },
    changeMsg: (change_msg_arg) => {
      dispatch(actionChangeMsg(change_msg_arg))
    }
  }
}
export default connect(mapState2Props, mapDispatch2Props)(ContaCart)
