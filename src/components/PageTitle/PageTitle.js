import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, subtitle, description, backgroundColor, backgroundImages = [] }) => {
  return (
    <div
      className="page-title flex"
      style={{
        backgroundImage: `url(${backgroundImages.length ? backgroundImages[0].url : 'none'})`,
        backgroundColor: backgroundColor || 'none',
        animation: backgroundColor ? 'none' : 'background-color-animation 20s 0.08s infinite'
      }}>
      <div className="text-center max-w-lg m-auto">
        <h1 className="text-4xl">{title}</h1>
        <h2>{subtitle}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PageTitle;
