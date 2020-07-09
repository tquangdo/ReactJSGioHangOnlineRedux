import { combineReducers } from 'redux'
import reducerProducts from './ReducerProducts'
import reducerCart from './ReducerCart'
import reducerMsg from './ReducerMsg'
import reducerSPDeSua from './ReducerSPDeSua'
import { reducer as formReducer } from 'redux-form'

var myReducer = combineReducers({
    reducerProducts,
    reducerCart,
    reducerMsg,
    reducerSPDeSua,
    form: formReducer,
})

export default myReducer
