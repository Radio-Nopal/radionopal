import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
import SocialNetworksLinks from '../Header/SocialNetworksLinks';
import './Page.scss';

const GenericPage = ({ children, style, classModifier, ...others }) => {
  return (
    <div className={`page ${classModifier ? `page--${classModifier}` : ''}`} style={style}>
      <Header />
      <PageTitle {...others} />
      <SocialNetworksLinks />
      <div className="max-w-4xl m-auto p-8 text-justify">{children}</div>
      <Footer />
    </div>
  );
};

export default GenericPage;
