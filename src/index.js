import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/index.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// const getCurrentDate = () =>  {
//   const date = new Date();
//   return date.toDateString();
// }
// const greeting = React.createElement('h1', {}, 'Hello, World!');
// const greeting = <h1>Hello, World! Current date: {getCurrentDate()}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  // </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
