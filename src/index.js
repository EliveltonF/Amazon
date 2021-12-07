import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './paginas/appBar';
import Main from './paginas/parteBaixo.js';
import Mid from './paginas/Main';

ReactDOM.render(
  <React.StrictMode>
    <AppBar/>
    <Mid/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

