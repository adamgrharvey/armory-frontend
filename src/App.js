import './App.css';
import ItemSlot from './components/ItemSlot/ItemSlot';
import React from 'react';
import { useEffect, useState } from 'react';
import getAccessToken from './helpers/getAccessToken';
import getItemData from './helpers/getItemData';

/*
		"item:32235:3003:32409:32220:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [1]
		"item:35135:0:32220:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [2]
		"item:34195:2986:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [3]
		"item:2105:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [4]
		"item:34397:2661:32212:32220:32194:0:0:0:70:0:0:0:0:0:0:0:0:", -- [5]
		"item:34558:0:32212:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [6]
		"item:31029:3012:32212:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [7]
		"item:34575:2657:32194:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [8]
		"item:34448:1593:32194:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [9]
		"item:34370:2564:32194:32194:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [10]
		"item:32266:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [11]
		"item:34887:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [12]
		"item:37865:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [13]
		"item:34472:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [14]
		"item:41592:368:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [15]
		"item:34329:2673:32194:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [16]
		"item:35095:2673:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [17]
		"item:34349:0:35761:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [18]
		"item:23705:0:0:0:0:0:0:0:70:0:0:0:0:0:0:0:0:", -- [19]
    https://static.wikia.nocookie.net/wowwiki/images/a/ae/InventorySlots.jpg/revision/latest?cb=20090410062622
*/


function App() {
  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"
  const [accessToken, setAccessToken] = useState("");
  const [updated, setUpdated] = useState(false)
  const [item, setItem] = useState({});
  const [character, setCharacter] = useState({});
  let Subspace = [32235, 35135, 34195, 2105, 34397, 34558, 31029, 34575, 34448, 34370, 32266, 34887, 37865, 34472, 41592, 34329, 35095, 34349, 23705];
  let slotIDs = {
    0: "AMMO",
    1: "HEAD",
    2: "NECK",
    3: "SHOULDER",
    4: "BODY",
    5: "CHEST",
    6: "WAIST",
    7: "LEGS",
    8: "FEET",
    9: "WRIST",
    10: "HAND",
    11: "FINGER1",
    12: "FINGER2",
    13: "TRINKET1",
    14: "TRINKET2",
    15: "CLOAK",
    16: "MAINHAND",
    17: "OFFHAND",
    18: "RANGED",
    19: "TABARD"
  };

  
  useEffect(() => {
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET, setAccessToken)
      setUpdated(true)
    }
    if (updated) {
      for (let i = 0; i < Subspace.length; i++) {
       // setCharacter({...character, ...{[i]: getItemData(Subspace[i], accessToken)}});
       getItemData(Subspace[i], accessToken)
        .then(res => {
          console.log(res);
          setCharacter(prev => ({...prev, ...{[i]: res}}));
        })
      }
      console.log();
      setUpdated(false);
    }
    
  }, [accessToken])


  return (
    <div className="App">
      <ItemSlot item={"item"}/>
    </div>
  );
}

export default App;
