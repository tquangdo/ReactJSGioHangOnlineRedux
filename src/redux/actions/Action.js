import * as actionTypes from './../constants/ActionTypes'
import callAPI from '../../utils/APICaller'

// *** 1)reducerCart
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
// *** 2)reducerMsg
var actionChangeMsg = (msg_arg) => {
    return {
        type: actionTypes.CHANGE_MESSAGE,
        msg_arg
    }
}
// *** 3)reducerProducts
var actionEditInventory = (idx_arg, inventory_quantity_arg) => {
    return {
        type: actionTypes.EDIT_INVENTORY,
        idx_arg, inventory_quantity_arg
    }
}
// 3.1/INSERT
var actionThemSP = (sp_arg) => {
    return {
        type: actionTypes.C_SP,
        sp_arg
    }
}
var actionThemSPAPI = (sp_arg) => {
    return async (dispatch) => {
        const res = await callAPI('sanpham', 'POST', sp_arg)
        if (typeof res !== 'undefined') {
            if (res.status !== 201) {
                alert('Thêm sản phẩm NG!!! Lỗi status trả về: ' + res.status)
            } else {
                await dispatch(actionThemSP(res.data)) // thông thường res.data = sp_arg
                alert('Thêm sản phẩm OK!')
            }
        }
    }
}// 3.2/SELECT
var actionHienSP = (sp_arg) => {
    return {
        type: actionTypes.R_SP,
        sp_arg
    }
}
var actionHienSPAPI = () => {
    return async (dispatch) => {
        const res = await callAPI('sanpham', null)
        if (typeof res !== 'undefined') {
            dispatch(actionHienSP(res.data))
        }
        else {
            alert('Lấy data từ API bị lỗi!!!')
        }
    }
}
// 3.3/UPDATE
//   SELECT(UPDATE)
var actionLaySP = (sp_arg) => {
    return {
        type: actionTypes.UR_SP,
        sp_arg
    }
}
var actionLaySPAPI = (id_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${id_arg}`, null)
        if (typeof res !== 'undefined') {
            dispatch(actionLaySP(res.data))
        }
        else {
            alert('Lấy data từ API bị lỗi!!!')
        }
    }
}
//   PUT(UPDATE)
var actionSuaSP = (sp_arg) => {
    return {
        type: actionTypes.U_SP,
        sp_arg
    }
}
var actionSuaSPAPI = (sp_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${sp_arg.id}`, 'PUT', sp_arg)
        if (typeof res !== 'undefined') {
            if (res.status !== 200) {
                alert('Sửa sản phẩm NG!!! Lỗi status trả về: ' + res.status)
            } else {
                await dispatch(actionSuaSP(res.data)) // thông thường res.data = sp_arg
                alert('Sửa sản phẩm OK!')
            }
        }
    }
}
//   PATCH(UPDATE)
var actionSua1ColSPAPI = (id_arg, idx_arg, inventory_quantity_arg) => {
    return async (dispatch) => {
        let patchTmp = { inventory: inventory_quantity_arg }
        // const res = await callAPI(`sanpham/${id_arg}`, 'PATCH', patchTmp)
        const res = await callAPI(`sanpham/${id_arg}`, 'PUT', patchTmp)
        if (typeof res !== 'undefined') {
            if (res.status !== 200) {
                alert('Sửa sản phẩm NG!!! Lỗi status trả về: ' + res.status)
            } else {
                await dispatch(actionEditInventory(idx_arg, inventory_quantity_arg))
            }
        }
    }
}
// 3.4/DELETE
var actionXoaSP = (id_arg) => {
    return {
        type: actionTypes.D_SP,
        id_arg
    }
}
var actionXoaSPAPI = (id_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${id_arg}`, 'DELETE', null)
        if (typeof res !== 'undefined') {
            if (res.status === 200) { // OK
                await dispatch(actionXoaSP(id_arg))
                alert('Xóa data từ API OK!')
            } else {
                alert('Xóa data từ API bị lỗi!!!')
            }
        } else {
            alert('Xóa data từ API bị lỗi!!!')
        }
    }
}

export {
    actionThemCart, actionChangeMsg, actionXoaCart, actionEditQuantity, actionSua1ColSPAPI,
    actionResetCart, actionHienSPAPI, actionLaySPAPI, actionSuaSPAPI, actionXoaSPAPI,
    actionThemSPAPI
}
