import React from 'react';

const PageTitle = (props) => {
  const { title, subtitle, description } = props;
  return (
    <div className="page__title flex">
      <div className="text-center max-w-lg m-auto">
        <h1 className="text-4xl">{title}</h1>
        <h2>{subtitle}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PageTitle;
