import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import TokenSale from './pages/TokenSale';

const App: React.FC = () => {
  const handleHeaderAction = (txt: any) => {
    console.log(txt)
  }
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='bg-cover bg-mobileBackground laptop:bg-background'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tokenSale" component={TokenSale} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default React.memo(App)