const express = require('express');
const path = require('path');

const api = require('./api_handler.js');

const app = express();
const port = 3000;

const staticMiddlware = express.static(path.join(__dirname, '../client/dist'));

app.use('/', staticMiddlware);

app.get('/BayArea', (req, res) => {
  // const tweets = [];
  api.fetchUsers('1376270016786558979', async (follows) => {
    // console.log(follows.data);
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
