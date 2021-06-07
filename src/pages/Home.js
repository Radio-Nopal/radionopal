import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Calendar from '../components/Calendar/Calendar';
import Page from '../components/Page/Page';
import Loader from '../components/Loader';
import { getCssColor } from '../util/getCssColor';
import { useViewport } from '../util/viewPort';

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { width } = useViewport();
  const breakpoint = 600;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/paginas?slug=home`)
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

  const { imagenes_cabecera, imagenes_contenido, subtitulo, contenido, color_fondo } = data;
  return (
    <Page backgroundColor={getCssColor(color_fondo)} backgroundImages={imagenes_cabecera}>
      <span
        className="direccion absolute text-xs"
        style={{
          bottom: '9rem',
          right: '1rem',
          transformOrigin: 'right bottom',
          transform: 'rotate(-90deg) translate(100%, 0)'
        }}>
        Calle José Rosas Moreno 123a, colonia San Rafael, CDMX, C.P. 06470
      </span>
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
      <br />
      <Calendar view={width < breakpoint ? 'dayGridDay' : 'dayGridWeek'} />
    </Page>
  );
};

export default Home;
