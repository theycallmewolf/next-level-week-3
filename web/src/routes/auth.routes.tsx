// open routes
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanagesMap from '../pages/OrphanagesMap';
import LogIn from '../pages/BackofficeLogin';

export default function AuthRoutes() {
  <BrowserRouter>
    <Switch> 
      <Route path="/" exact component={Landing} />
      <Route path="/map" component={OrphanagesMap} />
      <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      <Route path="/login" component={LogIn} />
    </Switch>
  </BrowserRouter>
}

