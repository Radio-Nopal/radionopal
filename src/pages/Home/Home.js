import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Calendar from '../../components/Calendar/Calendar';
import Page from '../../components/Page/Page';
import Loader from '../../components/Loader';
import { useViewport } from '../../util/viewPort';
import './Home.scss';

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

  const { imagenes_cabecera, imagenes_contenido, contenido, color_fondo } = data;
  const style = { '--header-text-color': color_fondo };
  console.log(color_fondo);
  return (
    <Page style={style} classModifier="home" backgroundImages={imagenes_cabecera}>
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
        <div className="grid md:grid-cols-8 gap-8 md:grid-flow-col">
          {!!imagenes_contenido?.length && (
            <div
              className="h-96 col-span-8 md:col-span-3"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url('${imagenes_contenido[0].url}')`
              }}></div>
          )}
          <div className="col-span-8 md:col-span-5">
            <ReactMarkdown>{contenido}</ReactMarkdown>
          </div>
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
