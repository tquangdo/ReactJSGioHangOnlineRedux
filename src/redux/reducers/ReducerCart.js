import * as actionTypes from '../constants/ActionTypes'
import { timIndexOfArr } from '../../utils/CommonFuncs'

let reducerCart = (state = [], action) => {
    let stateTmp = [...state]
    let idx = -1
    let { cart_product_arg, cart_quantity_arg } = action
    switch (action.type) {
        case actionTypes.ADD_CART:
            idx = timIndexOfArr(stateTmp, cart_product_arg.id)
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
            idx = timIndexOfArr(stateTmp, cart_product_arg.id)
            if (idx !== -1) {
                stateTmp.splice(idx, 1)
            }
            return stateTmp
        case actionTypes.EDIT_QUANTITY:
            idx = timIndexOfArr(stateTmp, cart_product_arg.id)
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