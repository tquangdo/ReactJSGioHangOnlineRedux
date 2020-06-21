import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from './reducers/Reducer'
import thunk from 'redux-thunk'
var storeReducer = createStore(myReducer, compose(
    applyMiddleware(thunk), // phải để cái này ở trên, KO được move xuống dưới Redux Devtools
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
// storeReducer.subscribe(() => {
//     console.log(storeReducer.getState())
// })
// npm install gh-pages --save-dev
export default storeReducer