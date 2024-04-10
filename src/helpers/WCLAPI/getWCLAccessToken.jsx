import axios from 'axios'
export default function getWCLAccessToken(clientID, clientSecret, setWCLToken) {
  const queryString = require('query-string')

  axios
    .post(
      'https://www.warcraftlogs.com/oauth/token',
      queryString.stringify({ grant_type: 'client_credentials' }),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: clientID,
          password: clientSecret,
        },
      }
    )
    .then((res) => {
      //console.log(res);
      setWCLToken(res.data.access_token)
    })
    .catch((err) => {
      console.log(err)
    })
}
