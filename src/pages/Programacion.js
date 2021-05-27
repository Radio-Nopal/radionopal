import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Calendar from '../components/Calendar/Calendar';
import Page from '../components/Page/Page';
import ShowsList from '../components/Shows/ShowsList';
import Loader from '../components/Loader';
import { useViewport } from '../util/viewPort';

const Programacion = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useViewport();
  const breakpoint = 600;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/paginas?slug=programacion`)
      .then((response) => response.json())
      .then((res) => {
        if (res.length) {
          setData(res[0]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);

  const { imagenes_cabecera, imagenes_contenido, subtitulo, contenido } = data;
  return (
    <Page title={data.titulo || ''} subtitle={data.subtitulo} backgroundImages={imagenes_cabecera}>
      {!isLoading ? (
        <div>
          {!!imagenes_contenido?.length && (
            <img className="m-auto" alt={subtitulo} src={imagenes_contenido[0].url} />
          )}
          <br />
          <ReactMarkdown>{contenido}</ReactMarkdown>
        </div>
      ) : (
        <Loader />
      )}
      <br />
      <Calendar view={width < breakpoint ? 'dayGridDay' : 'dayGridWeek'} />
      <ShowsList />
    </Page>
  );
};

export default Programacion;
