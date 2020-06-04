import * as actionTypes from './../constants/ActionTypes'

// reducerCart
var actionThemCart = (cart_product_arg, cart_quantity_arg) => {
    return {
        type: actionTypes.ADD_CART,
        cart_product_arg, cart_quantity_arg
    }
}
var actionXoaCart = (cart_product_arg) => {
    return {
        type: actionTypes.DELETE_CART,
        cart_product_arg
    }
}
var actionResetCart = () => {
    return {
        type: actionTypes.RESET_CART
    }
}
var actionEditQuantity = (cart_product_arg, cart_quantity_arg) => {
    return {
        type: actionTypes.EDIT_QUANTITY,
        cart_product_arg, cart_quantity_arg
    }
}
// reducerMsg
var actionChangeMsg = (msg_arg) => {
    return {
        type: actionTypes.CHANGE_MESSAGE,
        msg_arg
    }
}
// reducerProducts
var actionEditInventory = (product_arg, inventory_quantity_arg) => {
    return {
        type: actionTypes.EDIT_INVENTORY,
        product_arg, inventory_quantity_arg
    }
}

export {
    actionThemCart, actionChangeMsg, actionXoaCart, actionEditQuantity,
    actionEditInventory, actionResetCart
}
