import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './AppRoutes';

ReactDOM.render((
    <BrowserRouter>
    <Routes>
      <App />
      </Routes>
    </BrowserRouter>
  ), document.getElementById('root'))
registerServiceWorker();
