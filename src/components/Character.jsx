import React from 'react';
import {useParams} from "react-router-dom";
import CharacterHeader from './CharacterHeader';
import ItemSection from './ItemSection';
import Tooltip from './Tooltip';
import { useEffect, useState, useContext} from 'react';

import getAccessToken from '../helpers/getAccessToken';
import getItemData from '../helpers/getItemData';
import readCharacterString from '../helpers/readCharacterString';
import { AccessTokenContext } from '../helpers/Context';

export default function Character(props) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const {region, server, characterName} = useParams();
  const setTooltip = function (show, item) {
    setShow(show);
    setItem(item);
  }
  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"

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
    }
    if (accessToken !== "") {
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
      <div className='Character'>
        <CharacterHeader character={character} />
        <div className='CompletePaperdoll'>
          <div className='Paperdoll'>
            <ItemSection section={"left"} character={character.inventory} setTooltip={setTooltip} />
            <ItemSection section={"right"} character={character.inventory} setTooltip={setTooltip} />
          </div>
          <div className='Paperdoll bottom'>
            <ItemSection section={"bottomLeft"} character={character.inventory} setTooltip={setTooltip} />
            <ItemSection section={"bottomRight"} character={character.inventory} setTooltip={setTooltip} />
          </div>
          {show && <Tooltip locationData={locationData} item={item} />}
        </div>
      </div>
  )
}