import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route exact path="/auth/twitter">
            <form method="get" action="/auth/twitter">
              <button type="submit">Sign in with Twitter</button>
            </form>
          </Route>

          <Route exact path="/snacks">
            <Menu items={snacks} title="Snacks" />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
