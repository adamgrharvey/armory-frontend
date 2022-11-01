import readItemString from "./readItemString";
import getItemData from "./blizzardAPI/getItemData";

export default function itemStringToObject(itemString, accessToken, setCharLoading, setCharacter) {
  let inventory = {}
  let charac = readItemString(itemString, setCharLoading)
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
  setCharacter(prev => ({ ...prev, inventory }))
  return;
}