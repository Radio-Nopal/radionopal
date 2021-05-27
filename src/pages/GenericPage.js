import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Page from '../components/Page/Page';
import Loader from '../components/Loader';
import { getCssColor } from '../util/getCssColor';

const GenericPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/paginas?slug=${match.params.slug}`)
      .then((response) => response.json())
      .then((res) => {
        if (res.length) setData(res[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  const {
    imagenes_cabecera,
    imagenes_contenido,
    subtitulo,
    contenido,
    titulo,
    descripcion,
    color_fondo
  } = data;

  return (
    <>
      {!isLoading && data.length === 0 && <Redirect to="/" />}
      <Page
        title={titulo}
        subtitle={subtitulo}
        description={descripcion}
        backgroundColor={getCssColor(color_fondo)}
        backgroundImages={imagenes_cabecera}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!!imagenes_contenido?.length && (
              <img alt={subtitulo} src={imagenes_contenido[0].url} />
            )}
            <ReactMarkdown>{contenido}</ReactMarkdown>
          </>
        )}
      </Page>
    </>
  );
};

export default GenericPage;
