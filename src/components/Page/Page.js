import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
import './Page.scss';

const GenericPage = ({
  title = '',
  subtitle = '',
  description = '',
  backgroundColor = null,
  backgroundImages = null,
  children = null,
  classModifier = null
}) => {
  return (
    <div className={`page ${classModifier ?? ''}`}>
      <Header backgroundColor={backgroundColor} backgroundImages={backgroundImages} />
      <PageTitle title={title} subtitle={subtitle} description={description} />
      <div className="max-w-4xl m-auto p-8">{children}</div>
      <Footer />
    </div>
  );
};

export default GenericPage;
