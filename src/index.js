// import "react-app-polyfill/ie9"
// 兼容ie9 请看这里 https://zh-hans.reactjs.org/docs/javascript-environment-requirements.html
// but 似乎并不起效  <ie11下仍会提示 "Map" is undefined

import "react-app-polyfill/ie11"
// Make sure to follow the Internet Explorer steps above if you need to support Internet Explorer in your application.
// import "react-app-polyfill/stable"

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
