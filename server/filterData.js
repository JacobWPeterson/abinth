const findMostInteractedTweet = (array, callback) => {
  const mostPopularTweets = [];
  array.forEach((account) => {
    const tweets = account.userTweets;
    const { user } = account;
    if (tweets) {
      let bestTweet = tweets[0];
      let mostInteractions = 0;
      tweets.forEach((tweet) => {
        const interactions = Object.values(tweet.public_metrics).reduce((a, b) => a + b);
        if (interactions > mostInteractions) {
          mostInteractions = interactions;
          bestTweet = tweet;
        }
      });
      mostPopularTweets.push({ bestTweet, user });
    }
  });
  callback(mostPopularTweets);
};

module.exports = { findMostInteractedTweet };
