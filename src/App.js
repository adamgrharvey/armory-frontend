import './App.css';
import Tooltip from './components/Tooltip';
import React from 'react';
import { useEffect, useState, useContext, createContext, useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { render } from "react-dom";
import getAccessToken from './helpers/getAccessToken';
import getItemData from './helpers/getItemData';
import { AccessTokenContext } from './helpers/Context';
import readCharacterString from './helpers/readCharacterString';

import Character from './components/Character';

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
  const [updated, setUpdated] = useState(false);

  const [character, setCharacter] = useState({
    name: 'Testchar',
    title: 'the Insane',
    wowClass: 'ROGUE',
    faction: 'HORDE',
    achPoints: 9001,
    inventory: {}
  });

  const [mouseX, setMouseX] = useState()
  const [mouseY, setMouseY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setMouseX(e.x)
        setMouseY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setMouseX, setMouseY]
  )

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }


  useEffect(() => {
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET, setAccessToken)
      setUpdated(true)
    }
    if (updated) {
      let inventory = {};
      let charac = readCharacterString("40499:3817:41398:42702:0:0:0:0:80:0:0:0:0:0:0:0:0:.44664:0:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40502:3808:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.2105:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40495:3832:40003:40053:0:0:0:0:80:0:0:0:0:0:0:0:0:.40205:0:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.44011:3823:40003:39910:0:0:0:0:80:0:0:0:0:0:0:0:0:.34575:3606:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.34448:3845:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40496:3604:40053:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40717:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.37642:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.44253:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40684:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40721:3730:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.39714:3789:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40386:3789:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.39296:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.43156:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.")
      let keys = Object.keys(charac)
      for (const item of keys) {
        getItemData(charac[item].item.itemID, accessToken)
          .then(res => {
            inventory[item - 1] = res;
          })
          .catch(err => {
            console.log(err);
          });
      }
      setCharacter(prev => ({ ...prev, inventory }))
      setUpdated(false);
    }
  }, [accessToken])

  useEffect(() => {
    console.log(character);
  }, [character])



  const locationData = {
    mouseX: mouseX,
    mouseY: mouseY,
    innerWidth: windowSize.innerWidth,
    innerHeight: windowSize.innerHeight
  };

  return (
    <BrowserRouter>
      <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
        <div className="App">
          <Routes>
            <Route path="/character/:region/:server/:characterName" element={<Character character={character} locationData={locationData} />} />
          </Routes>
        </div>
      </AccessTokenContext.Provider >
    </BrowserRouter>

  );
}

export default App;
