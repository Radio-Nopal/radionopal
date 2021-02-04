import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Programacion from './pages/Programacion';
import Home from './pages/Home';
import ShowDetail from './components/Shows/ShowDetail';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/programacion/:slug" component={ShowDetail} />
      <Route path="/programacion" render={() => <Programacion />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
