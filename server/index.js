const express = require('express');
const path = require('path');

const api = require('./api_handler.js');
const filter = require('./filterData.js');

const app = express();
const port = 3000;

const staticMiddlware = express.static(path.join(__dirname, '../client/dist'));

app.use(staticMiddlware);

app.get('/Tweets', (req, res) => {
  api.getFollowedAccounts('1376270016786558979', async (follows) => {
    const array = await Promise.all(follows.data.map(async (user) => api.getUserTweets(user.id)));
    filter.findMostInteractedTweet(array, (data) => {
      res.status(200).send(data);
    });
  });
});

// I cannot complete this request with my current Twitter API access-level
// app.get('/media', (req, res) => {
//   api.getMedia('2557521', (media) => {
//     // console.log('UT ', userTweets);
//     res.status(200).send(media);
//   });
// });

app.listen(port);
