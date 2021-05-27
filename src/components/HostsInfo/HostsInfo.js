import React from 'react';
import HostsContactLinks from './HostsContactLinks';

const HostsInfo = ({ data }) => {
  return data.map((i) => (
    <div key={i.id} className="w-full lg:flex py-2">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${i.fotografia?.url}')` }}
        title={i.nombre}></div>
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{i.nombre}</div>
          <p className="text-grey-darker text-base">{i.biografia}</p>
          <div>
            <HostsContactLinks data={i.contacto} />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default HostsInfo;
