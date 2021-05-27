import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './PagesList.scss';

const PagesList = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const search = searchTerm ? `?_q=${searchTerm}` : '';
  const url = `${process.env.REACT_APP_CMS_URL}/paginas${search}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, [searchTerm]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="pt-8">
        {data.map((item, key) => {
          return (
            <li key={key}>
              <Link to={`/info/${item.slug}`}>
                <span className="text-2xl">{item.titulo}</span>
                <span className="ml-2 text-gray-400">{item.subtitulo}</span>
                <br />
                <span className="ml-6">{item.descripcion}</span>
              </Link>
            </li>
          );
        })}
      </div>
      {data.length === 0 && !isLoading && (
        <span>{'No se encontraron páginas con esta búsqueda.'}</span>
      )}
    </>
  );
};

export default PagesList;
