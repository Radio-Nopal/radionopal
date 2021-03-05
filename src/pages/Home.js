import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Calendar from '../components/Calendar/Calendar';
import Page from '../components/Page/Page';
import Shows from '../components/Shows/Shows';
import Loader from '../components/Loader';
import { getCssColor } from '../util/getCssColor';
import './Home.scss';

const Home = () => {
  const [data, setData] = useState({});

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
      <Calendar />
      {Object.keys(data).length ? (
        <Loader />
      ) : (
        <>
          {imagenes_contenido && <img alt={subtitulo} src={imagenes_contenido[0].url} />}
          <ReactMarkdown>{contenido}</ReactMarkdown>
        </>
      )}
      <div id="example1"></div>
      <Shows />
    </Page>
  );
};

export default Home;
