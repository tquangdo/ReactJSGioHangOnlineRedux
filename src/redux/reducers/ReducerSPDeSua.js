import * as aTypes from '../constants/ActionTypes'

// phải tạo reducer này KO dùng chung reducerSanpham vì sẽ overwrite state
let reducerSPDeSua = (state = [], action) => {
    let { sp_arg } = action
    switch (action.type) {
        case aTypes.UR_SP:
            return sp_arg
        default:
            return state
    }
}

export default reducerSPDeSua
