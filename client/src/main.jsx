// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
  <  BrowserRouter>
    <Provider store={store}>

<App />

</Provider>
  </ BrowserRouter>,
)
