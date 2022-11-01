import axios from "axios";

export default function sendRequest(characterData) {
  let backendURL = "http://localhost:3000";
  let stats = [];
  let character = {name: characterData.miscInfo.name, server: characterData.miscInfo.server, region: characterData.miscInfo.region}
  let values = Object.values(characterData.statistics);
  for (const stat of values) {
    // ensure the data exists. if value not a string, it breaks. if value is a '%', that stat doesnt actually exist.
    if ((typeof stat.value) === 'string' && stat.value !== '%')
    if (stats.length === 0) {
      stats.push({...stat})
    } else {
      stats.push({...stat})
    }

  }
  console.log({character, stats});
  

  const postRequest = new Promise((resolve, reject) => {
    axios
      .post(`${backendURL}/character-statistic`, {character, stats}, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          console.log(res);
        }
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

//curl POST http://localhost:3000/character-statistic -H 'Content-Type: application/json' -d '{"stats":[{"name": "ralphster", "server": "Faerlina", "region": "US","stat_id": 11, "value": "1", "date_completed": "082322"}]}' -v