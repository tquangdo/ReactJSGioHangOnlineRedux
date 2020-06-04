import * as msgs from '../constants/ViewMessage'
import * as actionTypes from '../constants/ActionTypes'

var reducerMsg = (state = msgs.MSG_WELCOME, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MESSAGE:
            return action.msg_arg
        default:
            return state
    }
}

export default reducerMsg