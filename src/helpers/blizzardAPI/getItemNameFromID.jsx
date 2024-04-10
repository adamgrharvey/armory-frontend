import axios from 'axios'

export default function getItemNameFromID(itemID, accessToken) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://us.api.blizzard.com/data/wow/item/${itemID}?namespace=static-classic-us&locale=en_US&access_token=${accessToken}`,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          //console.log('itemData', res.data.preview_item);
          resolve(res.data.name)
        }
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
