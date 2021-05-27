import React from 'react';
import {
  FaTwitterSquare,
  FaGlobe,
  FaInstagram,
  FaFacebookSquare,
  FaMailBulk,
  FaLink
} from 'react-icons/fa';

const HostsContactLinks = ({ data }) => {
  const renderIcon = (param) => {
    switch (param) {
      case 'Email':
        return <FaMailBulk className="inline" />;
      case 'SitioWeb':
        return <FaLink className="inline" />;
      case 'Instagram':
        return <FaInstagram className="inline" />;
      case 'Facebook':
        return <FaFacebookSquare className="inline" />;
      case 'Twitter':
        return <FaTwitterSquare className="inline" />;
      default:
        return <FaGlobe className="inline" />;
    }
  };

  return data
    .filter((x) => x.url)
    .map((x) => (
      <a key={x.id} href={x.url} target="_blank" rel="noreferrer" alt={x.contacto} className="pr-1">
        {renderIcon(x.contacto)}
      </a>
    ));
};

export default HostsContactLinks;
