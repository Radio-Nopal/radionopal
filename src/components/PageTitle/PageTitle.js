import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, subtitle, description, backgroundColor, backgroundImages = [] }) => {
  return (
    <div
      className="page-title flex"
      style={{
        height: backgroundImages.length ? '80vh' : '',
        backgroundColor: backgroundColor || 'none',
        animation: backgroundColor ? 'none' : 'background-color-animation 20s 0.08s infinite'
      }}>
      <div
        className="text-center max-w-lg"
        style={{ width: '100%', maxWidth: '100%', alignSelf: 'flex-end' }}>
        <div
          className="page-title__image-container"
          style={{
            backgroundImage: `url(${backgroundImages.length ? backgroundImages[0].url : 'none'})`
          }}>
          <div
            className={`p-12 page-title__info ${
              backgroundImages.length ? 'page-title__info--inverse' : ''
            }`}>
            <h1 className="text-3xl pb-4">
              <span>{title}</span>
            </h1>
            <h2>
              <span>{subtitle}</span>
            </h2>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
