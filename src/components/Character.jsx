import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import CharacterHeader from './CharacterHeader';
import Tooltip from './Tooltip';
import ItemSections from './ItemSections';
import Nav from './Nav';

import getAccessToken from '../helpers/blizzardAPI/getAccessToken';
import getWCLAccessToken from '../helpers/WCLAPI/getWCLAccessToken';
import { AccessTokenContext } from '../helpers/Context';
import { WCLTokenContext } from '../helpers/WCLContext';
import characterStringSplitter from '../helpers/characterStringSplitter';
import itemStringToObject from '../helpers/itemStringToObject';
import Achievements from './Achievements/Achievements';
import getCharacterData from '../helpers/backend/getCharacterData';
import SpecializationSection from './SpecializationSection';
import Raids from './PvE/Raids';
import PvP from './PvP/PvP';

export default function Character(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const { WCLToken, setWCLToken } = useContext(WCLTokenContext);
  // let backendURL = "production-env.eba-q3dkmdph.us-west-2.elasticbeanstalk.com";
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [characterExists, setCharacterExists] = useState(false);
  const [navItem, setNavItem] = useState(

    {
      selected: "Character",
      charHighlight: "IsSelected",
      achHighlight: ""

    });
  const [specSelected, setSpecSelected] = useState(

    {
      selected: "Primary",
      talentString: "",
      primaryHighlight: "IsSelected",
      secondaryHighlight: ""

    });

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
  let WCL_ClientID = '97c539a4-ea0a-43d0-b89e-dadbaffa74a0';
  let WCL_ClientSecret = 'OUUsiLmGn2vItGsXKwi8sAMKNP2UAdVVKUkkuiQF';

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

  useEffect(() => {
    if (loading && !characterExists) {
      Promise.all([getCharacterData(region, server, characterName)]).then((results) => {

        if (!character.characterData && results[0] && results[0].character_string) {
          console.log(results);
          characterStringSplitter(results[0].character_string, setCharacter, setCharacterExists, setLoading, setSpecSelected)
        } else {
          setLoading(false);
          setCharacterExists(false);

        }
      })

    }
  }, [loading, character, characterExists, region, server, characterName])

  useEffect(() => {
    if (!Object.values(charLoading).includes(false) && charLoading) {
      setLoading(false);
      console.log(character);
    }
  }, [charLoading, character])

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
  }, [loading])

  useEffect(() => {
    if (!WCLToken) {
      getWCLAccessToken(WCL_ClientID, WCL_ClientSecret, setWCLToken)
    }
  }, [WCLToken])

  const locationData = {
    mouseX: mouseX,
    mouseY: mouseY,
    innerWidth: windowSize.innerWidth,
    innerHeight: windowSize.innerHeight
  };

  return (
    <div>
      <Nav />
      {!characterExists && !loading && <div>Character does not exist</div>}
      {loading &&
        (<div className='Loader'>
          <MoonLoader color={'#5118a7'} width={'50%'} height={8} />
        </div>)}
      {(!loading && characterExists) &&
        (<div className='Character'>
          <CharacterHeader loading={loading} character={character} />
          <div className='CharacterNav'>
            <button onClick={() => {
              setNavItem({
                selected: "Character", charHighlight: "IsSelected",
                achHighlight: ""
              })
            }} className={`CharacterNav-item ${navItem.charHighlight}`}>CHARACTER</button>
            <button onClick={() => {
              setNavItem({
                selected: "Achievements", charHighlight: "",
                achHighlight: "IsSelected"
              })
            }} className={`CharacterNav-item ${navItem.achHighlight}`}>ACHIEVEMENTS</button>
          </div>
          <div className='Divider' />

          {show && <Tooltip locationData={locationData} item={item} />}

          {navItem.selected === "Character" && (
            <div className='CompletePaperdoll'>
              <ItemSections loading={loading} setCharLoading={setCharLoading} setTooltip={setTooltip} character={character} />
              <SpecializationSection character={character} specSelected={specSelected} setSpecSelected={setSpecSelected} />
              <Raids Spec={specSelected.talentString} characterMisc={character.characterData.miscInfo} characterStats={character.characterData.statistics} />
              <PvP faction={character.characterData.miscInfo.faction} PvP={character.characterData.PvP} characterStats={character.characterData.statistics} />

            </div>
          )}

          {navItem.selected === "Achievements" && (<Achievements />)}

        </div>)}
    </div>

  )
}
