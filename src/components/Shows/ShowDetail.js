import React from 'react';
import './Shows.scss';

const ShowDetail = ({ data }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="show">
      <h1 className="show__title text-4xl">{data.nombre}</h1>
      {data.locutorxs[0]?.nombre && (
        <span className="show__host">Por: {data.locutorxs[0]?.nombre}</span>
      )}
      <h2 className="show__description text-gray-400">{`${data.dias} | ${data.hora} | ${data.periodicidad}`}</h2>
      <img src={data.imagen_programa[0]?.url} alt={data.descripcion_programa} />
      <div>{data.descripcion_programa}</div>
    </div>
  </div>
);

export default ShowDetail;
