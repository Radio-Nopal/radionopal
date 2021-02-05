import React, { useState, useEffect } from 'react';
import Page from '../components/Page/Page';
import ShowDetail from '../components/Shows/ShowDetail';
import Loader from '../components/Loader';

const ShowInfo = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/programas?slug=${match.params.slug}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]))
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  console.log(data);
  return (
    <Page
      title="Programación"
      subtitle="Agosto-Septiembre"
      description="Quisque sodales nunc id justo eleifend ullamcorper. Maecenas malesuada feugiat neque, sit amet eleifend mauris consequat nec">
      {data.length === 0 ? <Loader /> : <ShowDetail data={data} />}
    </Page>
  );
};

export default ShowInfo;
