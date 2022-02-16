import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import ReactDOM from 'react-dom';
import Notes from './pages/Notes';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';;
// import { store } from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    {/* <Notes/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
