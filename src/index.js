import React from 'react'
import ReactDOM from 'react-dom'
import NgoaiCung from './components/NgoaiCung'
import * as serviceWorker from './serviceWorker'
//Redux
import storeReducer from './redux/StoreReducer'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={storeReducer}>
    <NgoaiCung />
  </Provider>
  , document.getElementById('dotq')
)

serviceWorker.unregister()
