import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';
import './styles/background.css';
import './styles/custom.css';
import './styles/neumorph.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapWithApollo } from './graphql';

ReactDOM.render(
  <React.StrictMode>{wrapWithApollo(<App />)}</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
