import axios from "axios";

export default function getStatisticsData() {

  let backendURL = "http://localhost:3000";
    return new Promise((resolve, reject) => {
      axios
        .get(`${backendURL}/statistics/all`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          ////console.log(res);
          // if server returns 200 (success)
          if (res.status === 200) {
            
            resolve(res.data);
          } else {
            //console.log(res);
            reject(res);
          }
        })
        .catch((err) => {
          //console.log(err);
          reject(err);
        });
    });

}