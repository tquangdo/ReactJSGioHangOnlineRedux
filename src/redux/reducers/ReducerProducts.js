import * as actionTypes from '../constants/ActionTypes'
import { timIndexOfArr } from '../../utils/CommonFuncs'

let reducerProducts = (state = [], action) => {
    let stateTmp = [...state]
    let chiso = -1
    let { sp_arg, id_arg } = action
    switch (action.type) {
        case actionTypes.EDIT_INVENTORY:
            let { idx_arg, inventory_quantity_arg } = action
            stateTmp[idx_arg].inventory = inventory_quantity_arg
            return stateTmp
        case actionTypes.R_SP:
            return sp_arg
        case actionTypes.C_SP:
            stateTmp.push(sp_arg) // nếu KO dùng reducer mà connect direct json-server thì KO cần xử lí này
            return stateTmp
        case actionTypes.D_SP:
            chiso = timIndexOfArr(stateTmp, id_arg, false)
            if (chiso !== -1) {
                stateTmp.splice(chiso, 1) // thay vì SELECT lại server sẽ tốn performance thì xử lí FE
            }
            return stateTmp
        case actionTypes.U_SP:
            chiso = timIndexOfArr(stateTmp, sp_arg.id, false)
            if (chiso !== -1) {
                stateTmp[chiso] = sp_arg // nếu KO dùng reducer mà connect direct json-server thì KO cần xử lí này
            }
            return stateTmp
        default:
            return stateTmp
    }
}

export default reducerProducts