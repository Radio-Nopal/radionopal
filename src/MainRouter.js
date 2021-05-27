import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenericPage from './pages/GenericPage';
import ShowInfo from './pages/ShowInfo';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Archivo from './pages/Archivo';
import Programacion from './pages/Programacion';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/info/:slug" component={GenericPage} />
      <Route path="/busqueda/:searchTerm" component={SearchResults} />
      <Route path="/archivo" component={Archivo} />
      <Route path="/programacion" component={Programacion} />
      <Route path="/:slug" component={ShowInfo} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
