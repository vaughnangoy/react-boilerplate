import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducers';
//import { } from './actions/types';
//import { } from './actions';

import App from './components/app';
import Index from './components/layouts/index';

const store = createStore(reducer, {}, compose(applyMiddleware(reduxThunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index} />
          {/*<Route path="/path" component={ } />*/}
        </Route>
      </Router>
  </Provider>
  , document.querySelector('.container')
);
