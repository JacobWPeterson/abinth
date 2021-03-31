const axios = require('axios');

const resolveURI = async (link) => {
  try {
    return await axios({
      method: 'get',
      url: link,
      maxRedirects: 0,
    });
  } catch (e) {
    if (Math.trunc(e.response.status / 100) === 3) {
      return resolveURI(e.response.headers.location);
    }
    throw e;
  }
};

// resolveURI('http://google.com').then((x) => x.status).then(console.log);

// module.exports.resolveURI = resolveURI;
export default resolveURI;
