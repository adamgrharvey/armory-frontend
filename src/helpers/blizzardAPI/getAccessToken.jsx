import axios from 'axios';
export default function getAccessToken(clientID, clientSecret, setAccessToken) {
  const queryString = require('query-string');
  
  axios.post('https://oauth.battle.net/token', queryString.stringify({ 'grant_type': 'client_credentials' }), {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    auth:
    {
      username: clientID,
      password: clientSecret
    },
  })
    .then((res) => {
      ////console.log(res);
      setAccessToken(res.data.access_token);
    })
    .catch((err) => {
      //console.log(err)
    })
}