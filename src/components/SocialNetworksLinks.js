import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaMixcloud } from 'react-icons/fa';

const SocialNetworksLinks = () => {
  return (
    <>
      <span>
        <Link className="mr-1 font-noah-medium" to="/">
          Apóyanos
        </Link>
      </span>
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
    </>
  );
};

export default SocialNetworksLinks;
