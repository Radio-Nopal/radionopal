import React from 'react';

const MixcloudArchive = ({ data }) => {
  return data.map((i) => (
    <iframe
      title={i.descripcion}
      key={i.id}
      width="100%"
      height="60"
      src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${i.link}`}
      frameBorder="0"></iframe>
  ));
};

export default MixcloudArchive;
