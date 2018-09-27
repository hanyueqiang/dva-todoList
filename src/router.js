import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './routes/Products'
import Todo from './routes/todo'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Todo} />
        <Route path="/products" exact component={Products} />
        <Route path="/todo" exact component={Todo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
