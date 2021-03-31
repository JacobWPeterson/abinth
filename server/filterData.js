const tweets = require('../dummyData/tweets.js');

const findMostInteractedTweet = (callback) => {
  const mostPopularTweets = [];
  tweets.tweets.forEach((account) => {
    if (account) {
      let accountsBestTweet = account[0];
      let mostInteractions = 0;
      account.forEach((tweet) => {
        const interactions = Object.values(tweet.public_metrics).reduce((a, b) => a + b);
        if (interactions > mostInteractions) {
          mostInteractions = interactions;
          accountsBestTweet = tweet;
        }
      });
      mostPopularTweets.push(accountsBestTweet);
    }
  });
  callback(mostPopularTweets);
};

module.exports.findMostInteractedTweet = findMostInteractedTweet;