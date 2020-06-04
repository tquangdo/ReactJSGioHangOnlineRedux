import React from 'react'
import * as msgs from '../redux/constants/ViewMessage'
// import { clone } from 'lodash' // https://lodash.com/

class CartResult extends React.Component {
  onClickThanhToan(cart_result_arg, product_inventory_arg) {
    if (cart_result_arg.length > 0) {
      cart_result_arg.forEach((item_cart, index_cart) => {
        product_inventory_arg.every((item_product, index_product) => {
          if (item_product.id === item_cart.cart_product_arg.id) {
            // update inventory
            // let cart_item_tmp = clone(cart_item_arg) // lodash
            this.props.editInventory(index_product, item_product.inventory - item_cart.cart_quantity_arg)
            return false
          } else return true
        })
      })
      this.props.resetCart()
      this.props.changeMsg(msgs.MSG_PAYMENT_OK)
    }
  }
  hienTongTien(cart_result_arg) {
    var kqTrave = 0
    if (cart_result_arg.length > 0) {
      for (let index = 0; index < cart_result_arg.length; index++) {
        kqTrave += cart_result_arg[index].cart_product_arg.price * cart_result_arg[index].cart_quantity_arg
      }
    }
    return kqTrave
  }
  render() {
    let { cartResult, productInventory } = this.props
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.hienTongTien(cartResult)} $</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button type="button" onClick={() => {
            alert(msgs.MSG_PAYMENT_OK)
            this.onClickThanhToan(cartResult, productInventory)
          }} className="btn btn-primary waves-effect waves-light">Thanh toán
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    )
  }
}
export default CartResult
