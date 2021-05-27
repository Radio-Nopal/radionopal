import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import Page from '../components/Page/Page';
import Loader from '../components/Loader';
import MixcloudArchive from '../components/MixcloudArchive/MixcloudArchive';
import HostsInfo from '../components/HostsInfo/HostsInfo';

const ShowInfo = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/programas?slug=${match.params.slug}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  const {
    nombre,
    dias,
    hora,
    periodicidad,
    imagen_programa,
    locutorxs,
    archivo_mixcloud,
    descripcion_programa
  } = data;
  return (
    <Page
      title={nombre || ''}
      subtitle={dias && hora && periodicidad ? `${dias} | ${hora} | ${periodicidad} ` : ''}
      backgroundImages={imagen_programa}>
      {isLoading ? (
        <Loader />
      ) : data.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <>
          <div>{descripcion_programa}</div>
          <br />
          <HostsInfo data={locutorxs} />
          {archivo_mixcloud?.length > 0 && (
            <>
              <h1 className="text-4xl pt-12 pb-4">Archivo</h1>
              <MixcloudArchive data={archivo_mixcloud} />
            </>
          )}
        </>
      )}
    </Page>
  );
};

export default ShowInfo;
