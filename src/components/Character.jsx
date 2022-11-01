import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';

import CharacterHeader from './CharacterHeader';
import ItemSection from './ItemSection';
import Tooltip from './Tooltip';
import ItemSections from './ItemSections';

import getAccessToken from '../helpers/getAccessToken';
import getItemData from '../helpers/getItemData';
import readItemString from '../helpers/readItemString';
import { AccessTokenContext } from '../helpers/Context';
import classIDtoName from '../helpers/classIDtoName';
import characterStringSplitter from '../helpers/characterStringSplitter';
import itemStringToObject from '../helpers/itemStringToObject';
import getStatisticsData from '../helpers/getStatisticsData';


export default function Character(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  let backendURL = "http://localhost:3000";
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [characterExists, setCharacterExists] = useState(false);

  const { region, server, characterName } = useParams();
  const [charLoading, setCharLoading] = useState({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false, 19: false
  });
  const setTooltip = function (show, item) {
    setShow(show);
    setItem(item);
  }
  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"

  const [character, setCharacter] = useState({
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

  function getCharacterData() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${backendURL}/character/${region}/${server}/${characterName}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res);
          // if server returns 200 (success)
          if (res.status === 200) {
            if (res.data == null) {
              setLoading(false);
              resolve(res);
            }
            resolve(res);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  useEffect(() => {
    if (loading && !characterExists) {
      Promise.all([getStatisticsData(), getCharacterData()]).then((res) => {
        console.log(res);
        if (!character.characterData && res[1].data && res[1].data.character_string) {
          characterStringSplitter(res[1].data.character_string, setCharacter, setCharacterExists, res[0])
        }
      })

    }
  }, [loading, character, characterExists])

  useEffect(() => {
    if (!Object.values(charLoading).includes(false)) {
      setLoading(false);
    }
  }, [charLoading])


  useEffect(() => {
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET, setAccessToken)
    }
    if (accessToken !== "" && Object.values(charLoading).includes(false)) {
      if (characterExists) {
        itemStringToObject(character.characterData.itemString, accessToken, setCharLoading, setCharacter)
      }
    }
  }, [accessToken, loading, characterExists])


  useEffect(() => {
    if (!loading && character.inventory[0]) {
      console.log(character);
    }
  }, [loading, character])



  const locationData = {
    mouseX: mouseX,
    mouseY: mouseY,
    innerWidth: windowSize.innerWidth,
    innerHeight: windowSize.innerHeight
  };




  return (
    <div>
      {!characterExists && !loading && <div>Character does not exist</div>}
      {loading &&
        (<div className='Loader'>
          <MoonLoader color={'#5118a7'} width={'50%'} height={8} />
        </div>)}
      {(!loading && characterExists) &&
        (<div className='Character'>
          <CharacterHeader loading={loading} character={character} />
          <div className='CompletePaperdoll'>
            <ItemSections loading={loading} setCharLoading={setCharLoading} setTooltip={setTooltip} character={character} />
            {show && <Tooltip locationData={locationData} item={item} />}
          </div>
        </div>)}

    </div>
  )
}