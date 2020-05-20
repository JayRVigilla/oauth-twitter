import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

// TODO button goes to backend
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <form method="get" action="auth/twitter">
              <button type="submit">Sign in with Twitter</button>
            </form>
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
