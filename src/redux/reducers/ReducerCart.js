import * as actionTypes from '../constants/ActionTypes'
import { timProductTrongCart } from '../constants/CommonFuncs'

let reducerCart = (state = [], action) => {
    let stateTmp = [...state]
    let idx = -1
    let { cart_product_arg, cart_quantity_arg } = action
    switch (action.type) {
        case actionTypes.ADD_CART:
            idx = timProductTrongCart(cart_product_arg, stateTmp)
            if (idx !== -1) {
                stateTmp[idx].cart_quantity_arg += cart_quantity_arg
            } else {
                stateTmp.push({
                    cart_product_arg,
                    cart_quantity_arg
                })
            }
            return stateTmp
        case actionTypes.DELETE_CART:
            idx = timProductTrongCart(cart_product_arg, stateTmp)
            if (idx !== -1) {
                stateTmp.splice(idx, 1)
            }
            return stateTmp
        case actionTypes.EDIT_QUANTITY:
            idx = timProductTrongCart(cart_product_arg, stateTmp)
            if (idx !== -1) {
                stateTmp[idx].cart_quantity_arg = cart_quantity_arg
            }
            return stateTmp
        case actionTypes.RESET_CART:
            return []
        default:
            return stateTmp
    }
}

export default reducerCart