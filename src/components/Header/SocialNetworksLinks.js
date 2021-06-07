import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaMixcloud } from 'react-icons/fa';

const SocialNetworksLinks = () => {
  return (
    <div className="flex relative left-0" style={{ marginLeft: '10px', top: '-7vh' }}>
      <a href="https://www.instagram.com/radionopal/" rel="noreferrer" target="_blank">
        <FaInstagram size="1.5em" />
      </a>
      <a href="https://twitter.com/radio_nopal" rel="noreferrer" target="_blank">
        <FaTwitterSquare size="1.5em" />
      </a>
      <a href="https://www.facebook.com/RadioNopal" rel="noreferrer" target="_blank">
        <FaFacebookSquare size="1.5em" />
      </a>
      <a href="https://www.mixcloud.com/radionopal" rel="noreferrer" target="_blank">
        <FaMixcloud size="1.5em" />
      </a>
    </div>
  );
};

export default SocialNetworksLinks;
