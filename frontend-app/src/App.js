import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.compenent'
import City from './pages/city/city.component'
import CompanyPreview from './pages/company-preview/company-preview.component'
import Register from './pages/register/register.component'
import Homepage from './pages/homepage/homepage.component'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
    <Header/>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/belgrade' component={City} />
        <Route path='/company-preview' component={CompanyPreview} />
        <Route path='/register' component={Register} />
      </Switch>
   </div>


  );
}

export default App;
