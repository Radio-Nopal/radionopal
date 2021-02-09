import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import Page from '../components/Page/Page';
import Shows from '../components/Shows/Shows';
import './Home.scss';

const Home = () => {
  return (
    <Page
      title="Home"
      subtitle="asdf"
      classModifier="page--home"
      description="Quisque sodales nunc id justo eleifend ullamcorper. Maecenas malesuada feugiat neque, sit amet eleifend mauris consequat nec">
      <Calendar />
      <Shows />
    </Page>
  );
};

export default Home;
