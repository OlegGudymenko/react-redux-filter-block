import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { myStore } from './store';
import configureStore from './FilterComponent/store'
import './index.css';
import App from './FilterComponent/App';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore()
console.log(store.getState())

store.subscribe( () => {console.log(store.getState(), 'store change')} )

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
