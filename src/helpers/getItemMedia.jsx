import axios from "axios";

export default function getItemMedia(itemID, accessToken) {


  return new Promise((resolve, reject) => {
    axios
      .get(`https://us.api.blizzard.com/data/wow/media/item/${itemID}?namespace=static-classic-us&locale=en_US&access_token=${accessToken}`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          //console.log('item media', res.data.assets[0].value);
          resolve(res.data.assets[0].value);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

}