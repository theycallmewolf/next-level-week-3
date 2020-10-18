import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import BackofficeLogin from './pages/BackofficeLogin';
import BackofficeDashboard from './pages/BackofficeDashboard';

function Routes() {
  return(
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/login" component={BackofficeLogin} />
        <Route path="/dashboard" component={BackofficeDashboard} />
      </Switch>
    </BrowserRouter>
  );
}
// <Switch> grants that only one route is presented
export default Routes;