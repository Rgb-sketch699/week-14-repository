import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Feed from './components/feed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  React.createElement(Feed, {}, null)
   
);

reportWebVitals();