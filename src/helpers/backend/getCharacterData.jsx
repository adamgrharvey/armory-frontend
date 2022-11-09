import axios from "axios";

export default function getCharacterData(region, server, characterName) {

  let backendURL = "http://localhost:3000";
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