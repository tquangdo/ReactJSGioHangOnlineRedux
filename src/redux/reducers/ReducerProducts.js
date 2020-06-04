import * as actionTypes from '../constants/ActionTypes'
import { mock_list_items } from '../../mocks/mockListItems'

let reducerProducts = (state = mock_list_items, action) => {
    let stateTmp = [...state]
    switch (action.type) {
        case actionTypes.EDIT_INVENTORY:
            let { product_arg, inventory_quantity_arg } = action
            stateTmp[product_arg].inventory = inventory_quantity_arg
            return stateTmp
        default:
            return stateTmp
    }
}

export default reducerProducts