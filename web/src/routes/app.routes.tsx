// logged routes
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/BackofficeDashboard'

export default function AuthRoutes() {
  <BrowserRouter>
    <Switch> 
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
}

