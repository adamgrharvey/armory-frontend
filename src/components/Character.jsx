import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';
import CharacterHeader from './CharacterHeader';
import ItemSection from './ItemSection';
import Tooltip from './Tooltip';

export default function Character(props) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const {region, server, characterName} = useParams();
  const setTooltip = function (show, item) {
    setShow(show);
    setItem(item);
  }


  return (
      <div className='Character'>
        <CharacterHeader character={props.character} />
        <div className='CompletePaperdoll'>
          <div className='Paperdoll'>
            <ItemSection section={"left"} character={props.character.inventory} setTooltip={setTooltip} />
            <ItemSection section={"right"} character={props.character.inventory} setTooltip={setTooltip} />
          </div>
          <div className='Paperdoll bottom'>
            <ItemSection section={"bottomLeft"} character={props.character.inventory} setTooltip={setTooltip} />
            <ItemSection section={"bottomRight"} character={props.character.inventory} setTooltip={setTooltip} />
          </div>
          {show && <Tooltip locationData={props.locationData} item={item} />}
        </div>
      </div>
  )
}