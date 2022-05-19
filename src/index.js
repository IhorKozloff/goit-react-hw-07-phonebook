import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux'
import { phonebookStore } from 'Redux/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={phonebookStore}>

        <App />

    </Provider>
  </React.StrictMode>
);
