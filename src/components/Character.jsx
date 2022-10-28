import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';

import CharacterHeader from './CharacterHeader';
import ItemSection from './ItemSection';
import Tooltip from './Tooltip';

import getAccessToken from '../helpers/getAccessToken';
import getItemData from '../helpers/getItemData';
import readCharacterString from '../helpers/readCharacterString';
import { AccessTokenContext } from '../helpers/Context';
import ItemSections from './ItemSections';

export default function Character(props) {
  let backendURL = "http://localhost:3000";
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [characterExists, setCharacterExists] = useState(false);
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const { region, server, characterName } = useParams();
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

  function getCharacterData() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${backendURL}/character/${region}/${server}/${characterName}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            //console.log(res);
            if (res.data && res.data.character_string) {
              let characterString = res.data.character_string;
              setCharacter(prev => ({ ...prev, characterString }))
              setCharacterExists(true);
              return res;
            }
          }
        })
        .then((res) => {
          setTimeout(() => {
            setLoading(false);
            resolve(res);
          }, 500)

        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

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

  useEffect(() => {
    if (loading) {
      getCharacterData()
    }
  }, [loading])

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
      let charac = readCharacterString(character.characterString)
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
    if (!loading) {
      console.log(character);
    }
  }, [loading])



  const locationData = {
    mouseX: mouseX,
    mouseY: mouseY,
    innerWidth: windowSize.innerWidth,
    innerHeight: windowSize.innerHeight
  };




  return (
    <div>
      {loading ? (<div className='Loader'><MoonLoader color={'#5118a7'} width={'50%'} height={8} />
      </div>) : (characterExists ? (<div className='Character'>
        <CharacterHeader character={character} />
        <div className='CompletePaperdoll'>
          <ItemSections setLoading={setLoading} setTooltip={setTooltip} character={character} />
          {show && <Tooltip locationData={locationData} item={item} />}
        </div>
      </div>) : (<div> Character does not exist </div>))}

    </div>
  )
}