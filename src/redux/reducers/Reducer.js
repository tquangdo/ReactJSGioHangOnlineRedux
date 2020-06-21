import { combineReducers } from 'redux'
import reducerProducts from './ReducerProducts'
import reducerCart from './ReducerCart'
import reducerMsg from './ReducerMsg'
import reducerSPDeSua from './ReducerSPDeSua'

var myReducer = combineReducers({
    reducerProducts,
    reducerCart,
    reducerMsg,
    reducerSPDeSua
})

export default myReducer
