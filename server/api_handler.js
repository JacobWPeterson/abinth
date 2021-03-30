const axios = require('axios');
const BEARER_TOKEN = require('../config/API.js');

axios.defaults.headers.common.Authorization = BEARER_TOKEN.BEARER_TOKEN;

const API_URL = 'https://api.twitter.com/2/users/';

const fetchUsers = (userID, callback) => {
  axios.get(`${API_URL}${userID}/following`)
    .then((data) => {
      callback(data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

module.exports.fetchUsers = fetchUsers;
