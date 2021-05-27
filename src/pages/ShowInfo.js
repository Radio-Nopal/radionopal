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

  return (
    <Page
      title={data.nombre || ''}
      subtitle={`${data.dias || ''} | ${data.hora || ''} | ${data.periodicidad || ''}`}
      backgroundImages={data.imagen_programa}>
      {isLoading ? (
        <Loader />
      ) : data.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <>
          <div>{data.descripcion_programa}</div>
          <br />
          <HostsInfo data={data.locutorxs} />
          <h1 className="text-4xl pt-12 pb-4">Archivo</h1>
          <MixcloudArchive data={data.archivo_mixcloud} />
        </>
      )}
    </Page>
  );
};

export default ShowInfo;
