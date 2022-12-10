import axios from "axios";

export default function getItemData(itemID, accessToken, setCharLoading, item) {

  if (itemID === 0) {
    return new Promise((resolve, reject) => {
      resolve(null);
    })
  }


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
          if (item) {
            let temp = {}
            temp[item] = true;
            setCharLoading((prev) =>
              ({ ...prev, ...temp })

            );
          }

          ////console.log('itemData', res.data.preview_item);
          resolve(res.data);
        }
      })
      .catch((err) => {
        //console.log(err);
        reject(err);
      });
  });

}