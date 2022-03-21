import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import TokenSale from './pages/TokenSale';

const App: React.FC = () => {
  const [homeUri, setHomeUri] = useState('')

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='bg-cover bg-mobileBackground laptop:bg-background'>
          <Switch>
            <Route exact path="/">
              <Home uri={homeUri} />
            </Route>
            <Route path="/tokenSale">
              <TokenSale handler={setHomeUri} />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default React.memo(App)