import axios from "axios";

export default function submitStatisticData(characterData) {
  let backendURL = "http://production-env.eba-q3dkmdph.us-west-2.elasticbeanstalk.com";
  let stats = [];
  let character = { name: characterData.miscInfo.name, server: characterData.miscInfo.server, region: characterData.miscInfo.region }
  let values = Object.values(characterData.statistics);
  for (const stat of values) {
    // ensure the data exists. if value not a string, it breaks. if value is a '%', that stat doesnt actually exist.
    if ((typeof stat.value) === 'string' && stat.value !== '%') {
      stats.push({ ...stat })
    }
  }
  console.log({ character, stats });


  return new Promise((resolve, reject) => {
    axios
      .post(`${backendURL}/character-statistic`, { character, stats }, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          resolve(res);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

//curl POST http://localhost:3000/character-statistic -H 'Content-Type: application/json' -d '{"stats":[{"name": "ralphster", "server": "Faerlina", "region": "US","stat_id": 11, "value": "1", "date_completed": "082322"}]}' -v

//rankings.twentyfiveRanks.rankings[index].rankPercent
