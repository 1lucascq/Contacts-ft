import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PhBookProvider from './context/PhBookProvider';

ReactDOM.render(
  <PhBookProvider>
    {/* <BrowserRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </BrowserRouter> */}
  </PhBookProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
