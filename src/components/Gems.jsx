import { useEffect } from "react";
import { useState, useContext } from "react";
import getItemData from "../helpers/blizzardAPI/getItemData";
import getItemMedia from "../helpers/blizzardAPI/getItemMedia";
import { AccessTokenContext } from '../helpers/Context';

export default function Gems(props) {
  const [gemData, setGemData] = useState(
    {
      gem1: { itemID: props.itemDetails.gem1ID },
      gem2: { itemID: props.itemDetails.gem2ID },
      gem3: { itemID: props.itemDetails.gem3ID },
      gem4: { itemID: props.itemDetails.gem4ID }
    }
  );
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  let count = 0;
  if (props.itemDetails.gem1ID !== 0) {
    count++;
  }
  if (props.itemDetails.gem2ID !== 0) {
    count++;
  }
  if (props.itemDetails.gem3ID !== 0) {
    count++;
  }
  if (props.itemDetails.gem4ID !== 0) {
    count++;
  }

  useEffect(() => {
    Promise.all([getItemData(gemData.gem1.itemID, accessToken), getItemData(gemData.gem2.itemID, accessToken), getItemData(gemData.gem3.itemID, accessToken), getItemData(gemData.gem4.itemID, accessToken), getItemMedia(gemData.gem1.itemID, accessToken), getItemMedia(gemData.gem2.itemID, accessToken), getItemMedia(gemData.gem3.itemID, accessToken), getItemMedia(gemData.gem4.itemID, accessToken)]).then((values) => {
      setGemData({
        gem1: { itemID: props.itemDetails.gem1ID, gemData: values[0], gemMedia: values[4] },
        gem2: { itemID: props.itemDetails.gem2ID, gemData: values[1], gemMedia: values[5] },
        gem3: { itemID: props.itemDetails.gem3ID, gemData: values[2], gemMedia: values[6] },
        gem4: { itemID: props.itemDetails.gem4ID, gemData: values[3], gemMedia: values[7] }
      })
    })
  }, [])



  if (count === 0) {
    return (
      <div></div>
    )
  }


  return (
    <div>

      {count}
    </div>
  )
}