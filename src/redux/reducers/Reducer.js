import { combineReducers } from 'redux'
import reducerProducts from './ReducerProducts'
import reducerCart from './ReducerCart'
import reducerMsg from './ReducerMsg'

var myReducer = combineReducers({
    reducerProducts,
    reducerCart,
    reducerMsg
})

export default myReducer
