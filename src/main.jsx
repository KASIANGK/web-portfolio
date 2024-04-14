import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../src/i18n'; 

// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <I18nextProvider i18n={i18n}>
//       <App />
//     </I18nextProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
