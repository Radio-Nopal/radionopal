import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Calendar from '../components/Calendar/Calendar';
import Page from '../components/Page/Page';
import Shows from '../components/Shows/Shows';
import Loader from '../components/Loader';
import { getCssColor } from '../util/getCssColor';
import { useViewport } from '../util/viewPort';
import './Home.scss';

const Home = () => {
  const [data, setData] = useState({});

  const { width } = useViewport();
  const breakpoint = 600;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/paginas?slug=home`)
      .then((response) => response.json())
      .then((res) => {
        if (res.length) setData(res[0]);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);

  const { imagenes_cabecera, imagenes_contenido, subtitulo, contenido, color_fondo } = data;
  return (
    <Page
      classModifier="page--home"
      backgroundColor={getCssColor(color_fondo)}
      backgroundImages={imagenes_cabecera}>
      {Object.keys(data).length ? (
        <div className="py-8">
          {!!imagenes_contenido.length && <img alt={subtitulo} src={imagenes_contenido[0].url} />}
          <ReactMarkdown>{contenido}</ReactMarkdown>
        </div>
      ) : (
        <Loader />
      )}
      <Calendar view={width < breakpoint ? 'dayGridDay' : 'dayGridWeek'} />
      <Shows />
    </Page>
  );
};

export default Home;
