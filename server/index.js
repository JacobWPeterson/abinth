const express = require('express');
const path = require('path');

const api = require('./api_handler.js');
const filter = require('./filterData.js');

const app = express();
const port = 3000;

const staticMiddlware = express.static(path.join(__dirname, '../client/dist'));

app.use(staticMiddlware);

app.get('/tweets', (req, res) => {
  filter.findMostInteractedTweet((data) => {
    res.status(200).send(data);
  });
});

// Get polish tweet for Rob
app.get('/poland', (req, res) => {
  api.getPolishTweet('1377580125521383425', (media) => {
    // console.log('UT ', userTweets);
    res.status(200).send(media);
  });
});

// Twitter does not allow me to complete this request
// app.get('/media', (req, res) => {
//   api.getMedia('2557521', (media) => {
//     // console.log('UT ', userTweets);
//     res.status(200).send(media);
//   });
// });

app.get('/BayArea', (req, res) => {
  // const tweets = [];
  api.fetchUsers('1376270016786558979', async (follows) => {
    // res.send(follows.data);
    // follows.data.forEach((user) => {
    //   api.fetchUserTweets(user.id, (userTweets) => {
    //     tweets.push(userTweets);
    //   });
    // });
    const array = await Promise.all(follows.data.map(async (user) => api.getUserTweets(user.id)));
    // => {
    //   // console.log('userTweets ', userTweets)
    //   tweets.push(userTweets);
    // });
    // ));
    res.status(200).send(array);
  });
});

// app.get('/Test', (req, res) => {
//   api.fetchUserTweets('121597316', (userTweets) => {
//     // console.log('UT ', userTweets);
//     tweets.push(userTweets);
//     res.status(200).send(tweets);
//   });
// });

app.listen(port);
