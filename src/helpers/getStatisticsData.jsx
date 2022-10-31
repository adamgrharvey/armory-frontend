import axios from "axios";
import merge from "lodash/merge"

export default function getStatisticsData(oldStatistics, setCharacter) {
  let statistics = {};

  let backendURL = "http://localhost:3000";
    axios
      .get(`${backendURL}/statistics/all`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        
        // if server returns 200 (success)
        if (res.status === 200) {
          console.log(res.data);
          let statObj = res.data;

          return statObj; 
        }
      }).then(res => {
        statistics = merge(res, oldStatistics)
        setCharacter(prev => 
          ({...prev, statistics})
        )
      }
        
      )
      .catch((err) => {
        console.log(err);
      });

}