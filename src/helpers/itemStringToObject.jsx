import readItemString from "./readItemString";
import getItemData from "./getItemData";

export default function itemStringToObject(itemString, accessToken, setCharLoading) {
  let inventory = {}
  let charac = readItemString(itemString)
  let keys = Object.keys(charac)
  for (const item of keys) {
    if (charac[item].item) {
      getItemData(charac[item].item.itemID, accessToken, setCharLoading, item)
        .then(res => {
          inventory[item - 1] = res;
        })
        .catch(err => {
          console.log(err);
        });
    }

  }
  return inventory
}