import './App.css';
import ItemSlot from './components/ItemSlot/ItemSlot';
import React from 'react';
import { useEffect, useState } from 'react';
import getAccessToken from './helpers/getAccessToken';
import getItemData from './helpers/getItemData';


function App() {
  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"
  const [accessToken, setAccessToken] = useState("");
  const [updated, setUpdated] = useState(false)
  const [item, setItem] = useState({});

  
  useEffect(() => {
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET, setAccessToken)
      setUpdated(true)
    }
    if (updated) {
      getItemData(32837, accessToken, setItem);
      setUpdated(false);
    }
    
  }, [accessToken])


  return (
    <div className="App">
      <ItemSlot item={item}/>
    </div>
  );
}

export default App;
