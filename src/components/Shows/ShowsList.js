import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './Shows.scss';

const ShowsList = ({ searchTerm, filter }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const search = searchTerm ? `?_q=${searchTerm}` : '';
  const url = `${process.env.REACT_APP_CMS_URL}/programas${search}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filtered = filter ? data.filter(filter) : data.filter((i) => !i.es_archivo);
        setData(filtered);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, [searchTerm]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-4">
        {data.map((item, key) => {
          const { dias, hora, periodicidad } = item;
          return (
            <div key={key} className="show">
              <Link to={`/${item.slug}`}>
                <h1 className="show__title text-4xl truncate">{item.nombre}</h1>
                {item.locutorxs[0]?.nombre ? (
                  <span className="show__host">Por: {item.locutorxs[0].nombre}</span>
                ) : (
                  <br />
                )}
                {dias && hora && periodicidad ? (
                  <h2 className="show__description text-gray-400">{`${dias} | ${hora} | ${periodicidad}`}</h2>
                ) : (
                  <>
                    <br />
                    <br />
                  </>
                )}
                <div
                  className="show__image bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imagen_programa[0]?.url})`,
                    backgroundColor: 'black'
                  }}></div>
              </Link>
            </div>
          );
        })}
      </div>
      {data.length === 0 && !isLoading && (
        <span>{'No se encontraron programas con esta búsqueda.'}</span>
      )}
    </>
  );
};

export default ShowsList;
