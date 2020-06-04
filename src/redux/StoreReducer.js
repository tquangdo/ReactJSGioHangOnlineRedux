import { createStore, compose } from 'redux'
import myReducer from './reducers/Reducer'
var storeReducer = createStore(myReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))
// storeReducer.subscribe(() => {
//     console.log(storeReducer.getState())
// })
export default storeReducer