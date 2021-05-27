import React from 'react';
import Page from '../components/Page/Page';
import PagesList from '../components/PagesList/PagesList';
import ShowsList from '../components/Shows/ShowsList';

const SearchResults = ({ match }) => {
  const searchTerm = match.params.searchTerm;

  return (
    <Page title="Búsqueda" description="Restulados de la búsqueda">
      <span className="text-4xl">Programas:</span>
      <ShowsList searchTerm={searchTerm} />

      <h1 className="text-4xl pt-12">Información:</h1>
      <PagesList searchTerm={searchTerm} />
    </Page>
  );
};

export default SearchResults;
