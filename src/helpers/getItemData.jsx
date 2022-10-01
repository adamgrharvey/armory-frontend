import axios from "axios";

export default function getItemData(itemID, accessToken, setItem) {

  function sendRequest(accessToken) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://us.api.blizzard.com/data/wow/item/${itemID}?namespace=static-classic-us&locale=en_US&access_token=${accessToken}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            setItem(res.data);
            //console.log(res);
            console.log('itemData', res.data);
            resolve(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

}