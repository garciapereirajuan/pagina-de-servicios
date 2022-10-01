import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import AppDesktop from './AppDesktop';
import AppMobile from './AppMobile';
import reportWebVitals from './reportWebVitals';
import MenuProvider from 'react-flexible-sliding-menu'
import Menu from './components/Menu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MenuProvider MenuComponent={Menu}>
        <AppDesktop />
      </MenuProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
