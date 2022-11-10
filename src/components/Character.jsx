import React from 'react';
import { useParams, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';
import { Helmet } from "react-helmet";
import CharacterHeader from './CharacterHeader';
import ItemSection from './ItemSection';
import Tooltip from './Tooltip';
import ItemSections from './ItemSections';

import getAccessToken from '../helpers/blizzardAPI/getAccessToken';
import getItemData from '../helpers/blizzardAPI/getItemData';
import readItemString from '../helpers/readItemString';
import { AccessTokenContext } from '../helpers/Context';
import classIDtoName from '../helpers/classIDtoName';
import characterStringSplitter from '../helpers/characterStringSplitter';
import itemStringToObject from '../helpers/itemStringToObject';
import getStatisticsData from '../helpers/backend/getStatisticsData';
import submitStatisticData from '../helpers/backend/submitStatisticData';
import getCharacterStatistics from '../helpers/backend/getCharacterStatistics';
import getAchievementMedia from '../helpers/blizzardAPI/getAchievementMedia';
import Achievements from './Achievements/Achievements';
import getCharacterData from '../helpers/backend/getCharacterData';
import Talents from './Talents';

export default function Character(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  let backendURL = "http://localhost:3000";
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



  useEffect(() => {
    if (loading && !characterExists) {
      Promise.all([getCharacterData(region, server, characterName)]).then((results) => {

        if (!character.characterData && results[0] && results[0].character_string) {
          console.log(results);
          characterStringSplitter(results[0].character_string, setCharacter, setCharacterExists, setLoading)
        } else {
          setLoading(false);
          setCharacterExists(false);
        }
      })

    }
  }, [loading, character, characterExists])

  useEffect(() => {
    if (!Object.values(charLoading).includes(false) && charLoading) {
      setLoading(false);
      console.log(character);
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
  }, [loading])




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
          <div className='CharacterNav'>
            <button onClick={() => {
              setNavItem({
                selected: "Character", charHighlight: "IsSelected",
                achHighlight: ""
              })
            }} className={`CharacterNav-item ${navItem.charHighlight}`}>Character</button>
            <button onClick={() => {
              setNavItem({
                selected: "Achievements", charHighlight: "",
                achHighlight: "IsSelected"
              })
            }} className={`CharacterNav-item ${navItem.achHighlight}`}>ACHIEVEMENTS</button>
          </div>
          <div className='Divider' />
          <div className='CompletePaperdoll'>

            {navItem.selected === "Character" && (<ItemSections loading={loading} setCharLoading={setCharLoading} setTooltip={setTooltip} character={character} />)}

            {navItem.selected === "Achievements" && (<Achievements />)}

            <div className='Divider' />
            <Talents />

            {show && <Tooltip locationData={locationData} item={item} />}
          </div>
          <Helmet>
            <script>{`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true }`}</script>
            <script src="https://wow.zamimg.com/js/tooltips.js"></script>
          </Helmet>

        </div>)}
    </div>


  )
}

//<Achievements character={character}/>