import React, { useState, useEffect } from 'react';
import Page from '../components/Page/Page';
import Loader from '../components/Loader';

const GenericPage = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/paginas?slug=${match.params.slug}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]))
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  const color_fondo = data.color_fondo !== undefined ? data.color_fondo : null;
  const color_fondo_object = JSON.parse(color_fondo);
  console.log(color_fondo_object);
  return (
    <Page title={data.titulo} subtitle={data.subtitulo} description={data.descripcion}>
      {data.length === 0 ? <Loader /> : data.contenido}
    </Page>
  );
};

export default GenericPage;
