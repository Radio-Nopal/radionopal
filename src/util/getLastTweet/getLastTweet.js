import twitterFetcher from './twitterFetcher';

export const getLastTweet = (cb) => {
  const configProfile = {
    profile: { screenName: process.env.REACT_APP_TWITTER_USERNAME },
    maxTweets: 1,
    enableLinks: true,
    showUser: false,
    showTime: false,
    showImages: false,
    dataOnly: true,
    customCallback: cb,
    lang: 'en'
  };

  return twitterFetcher.fetch(configProfile);
};
