import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import MainRouter from './MainRouter';
import AudioElement from './components/AudioElement';
import { StateProvider } from './store';
import { ViewportProvider } from './util/viewPort';
import reportWebVitals from './reportWebVitals';
import './index.scss';

console.log(
  '%c radionopal.com ',
  `font-weight: bold;
  font-size: 40px;
  color: #365ABD;
  text-shadow: 3px -3px 0 #FFD2C3,
  6px -6px 0 #3F6845,
  9px -9px 0 #FF6F61`
);
console.log(
  '%c /* \n‍ https://github.com/Radio-Nopal/radionopal\n */',
  'font-size: 15px; color: blue;'
);

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.StrictMode>
      <StateProvider>
        <ViewportProvider>
          <AudioElement />
          <MainRouter />
        </ViewportProvider>
      </StateProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
