import React from 'react'
import ReactDOM from 'react-dom'
import App from "./Component/App"
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();


ReactDOM.render(<App />, document.getElementById("root"))
