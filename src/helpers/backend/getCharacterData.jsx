import axios from "axios";

export default function getCharacterData(region, server, characterName) {

  let backendURL = "production-env.eba-q3dkmdph.us-west-2.elasticbeanstalk.com";
  return new Promise((resolve, reject) => {
    axios
      .get(`${backendURL}/character/${region}/${server}/${characterName}`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          if (res.data == null) {
            resolve(res.data);
          }
          resolve(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}