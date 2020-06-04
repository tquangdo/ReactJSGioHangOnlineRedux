import React from 'react'
import * as msgs from '../redux/constants/ViewMessage'

class CartItem extends React.Component {
  onClickXoa(cart_item_arg) {
    this.props.xoaCart(cart_item_arg)
    this.props.changeMsg(msgs.MSG_DELETE_OK)
  }
  onClickEditQuant(cart_item_arg, cart_quantity_arg) {
    if (cart_quantity_arg > 0) {
      this.props.editQuantity(cart_item_arg, cart_quantity_arg)
      this.props.changeMsg(msgs.MSG_UPDATE_OK)
    }
  }
  tinhSubTotal(price_arg, quantity_arg) {
    return price_arg * quantity_arg
  }
  render() {
    let { cartItem } = this.props
    return (
      <tr>
        <th scope="row">
          <img src={cartItem.cart_product_arg.image} alt={cartItem.cart_product_arg.name} />
        </th>
        <td>
          <h5>
            <strong>{cartItem.cart_product_arg.name} </strong>
          </h5>
        </td>
        <td>{cartItem.cart_product_arg.price} $</td>
        <td className="center-on-small-only">
          <span className="qty">{cartItem.cart_quantity_arg} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={
              () => this.onClickEditQuant(cartItem.cart_product_arg, cartItem.cart_quantity_arg - 1)
            } className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a href="/">—</a>
            </label>
            <label onClick={
              () => this.onClickEditQuant(cartItem.cart_product_arg, cartItem.cart_quantity_arg + 1)
            } className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a href="/">+</a>
            </label>
          </div>
        </td>
        <td>{this.tinhSubTotal(cartItem.cart_product_arg.price, cartItem.cart_quantity_arg)} $</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip" data-placement="top" title="true"
            data-original-title="Remove item" onClick={() => this.onClickXoa(cartItem.cart_product_arg)} >
            X
          </button>
        </td>
      </tr>
    )
  }
}

export default CartItem
