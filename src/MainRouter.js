import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenericPage from './pages/GenericPage';
import ShowInfo from './pages/ShowInfo';
import Home from './pages/Home';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/info/:slug" component={GenericPage} />
      <Route path="/programacion/:slug" component={ShowInfo} />
      <Route path="/" render={Home} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
