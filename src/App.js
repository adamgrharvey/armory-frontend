import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { render } from "react-dom";
import { AccessTokenContext } from './helpers/Context';
import Character from './components/Character';
import Submit from './components/Submit';

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
  const [accessToken, setAccessToken] = useState("");
  let frontendURL = "";
  return (
    <BrowserRouter>
      <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
        <div className="App">
          <Routes>
            <Route exact path={`${frontendURL}/character/:region/:server/:characterName`} element={<Character />} />
            <Route path={`${frontendURL}/submit`} element={<Submit />}/>
          </Routes>
        </div>
      </AccessTokenContext.Provider >
    </BrowserRouter>

  );
}

export default App;
