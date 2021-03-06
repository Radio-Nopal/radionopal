import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './Shows.scss';

const Shows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/programas`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  return (
    <>
      {data.length === 0 && <Loader />}
      <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-4">
        {data.map((item, key) => {
          return (
            <div key={key} className="show">
              <Link to={`/${item.slug}`}>
                <h1 className="show__title text-4xl">{item.nombre}</h1>
                {item.locutorxs[0].nombre && (
                  <span className="show__host">Por: {item.locutorxs[0].nombre}</span>
                )}
                <h2 className="show__description text-gray-400">{`${item.dias} | ${item.hora} | ${item.periodicidad}`}</h2>
                <img src={item.imagen_programa[0].url} alt={item.descripcion} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shows;
