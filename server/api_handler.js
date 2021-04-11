const axios = require('axios');
const BEARER_TOKEN = require('../config/API.js');

axios.defaults.headers.common.Authorization = BEARER_TOKEN.BEARER_TOKEN;

const API_BASE_URL = 'https://api.twitter.com/2/users/';

let today = new Date();
let yesterday = new Date(today);
today.setDate(today.getDate());
today.toTimeString();
today = today.toISOString().substring(0, 10);
yesterday.setDate(yesterday.getDate() - 1);
yesterday.toTimeString();
yesterday = yesterday.toISOString().substring(0, 10);

const PDTStartTime = `${yesterday}T07:00:00Z`;
const PDTEndTime = `${today}T06:59:59Z`;

const feedParams = `?media.fields=url,type&start_time=${PDTStartTime}&end_time=${PDTEndTime}&exclude=retweets,replies&max_results=10&tweet.fields=attachments,author_id,conversation_id,created_at,entities,geo,id,public_metrics,referenced_tweets,text,withheld&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&expansions=author_id,referenced_tweets.id,referenced_tweets.id.author_id,entities.mentions.username,attachments.poll_ids,attachments.media_keys,in_reply_to_user_id,geo.place_id&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type`;

const getFollowedAccounts = (userID, callback) => {
  axios.get(`${API_BASE_URL}${userID}/following?user.fields=id,location,profile_image_url`)
    .then((data) => {
      callback(data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

async function getUserTweets(user) {
  try {
    const response = await axios.get(`${API_BASE_URL}${user.id}/tweets${feedParams}`);
    const userTweets = response.data.data;
    return { userTweets, user };
  } catch (error) {
    return error;
  }
}

// Twitter does not allow me access to this media object endpoint to get picture URLs
// const getMedia = (userID, callback) => {
//   axios.get(`https://ads-api.twitter.com/9/accounts/${userID}/media_library/3_1376710056180391944`)
//     .then((data) => {
//       // console.log(data.data.data);
//       callback(data.data.data);
//     })
//     .catch((err) => {
//       console.log(err.response);
//     });
// };

module.exports.getFollowedAccounts = getFollowedAccounts;
module.exports.getUserTweets = getUserTweets;
// module.exports.getMedia = getMedia;
