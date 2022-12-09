import axios from "axios";

export default function getAchievementMedia(achievements, accessToken) {

  //console.log(achievements);
  return new Promise((resolve, reject) => {
    let tempArr = []
    // //console.log(achievements);
    for (let i = 0; i < achievements.length; i++) {
      if (!achievements[i].is_statistic) {
        getRequest(achievements[i].id).then((res) => {
          tempArr.push({ link: res, id: achievements[i].id });
        })
      }
    }

    resolve(tempArr)

  })



}

const getRequest = function (achievementID) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://us.api.blizzard.com/data/wow/media/achievement/${achievementID}?namespace=static-us&locale=en_US&access_token=USP8u5cCD8KZ6rrAvMEwJvqvdaOkiIe1zs`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          ////console.log('itemData', res.data.preview_item);
          resolve(res.data.assets[0].value)
        }
      })
      .catch((err) => {
        resolve(null)
      });
  })
}

