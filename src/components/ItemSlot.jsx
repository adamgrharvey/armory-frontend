import React from 'react';
import { useState } from 'react';
import getItemMedia from '../helpers/blizzardAPI/getItemMedia';
import enchantDetailsfromSpellID from '../helpers/enchantDetailsFromSpellID';

import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';

export default function ItemSlot(props) {
  const { accessToken } = useContext(AccessTokenContext);
  const [itemMedia, setItemMedia] = useState("");
  // let quality = props.item.preview_item.quality.name;
  if (props.item && itemMedia === "") {
    getItemMedia(props.item.id, accessToken, props.setCharLoading, props.slotID).then(res => setItemMedia(res))
  }

  let slotIDs = {
    1: "head",
    2: "neck",
    3: "shoulder",
    4: "shirt",
    5: "chest",
    6: "waist",
    7: "legs",
    8: "feet",
    9: "wrists",
    10: "hands",
    11: "finger",
    12: "finger",
    13: "trinket",
    14: "trinket",
    15: "chest",
    16: "mainhand",
    17: "offhand",
    18: "ranged",
    19: "tabard"
  };

  //<a href={`https://www.wowhead.com/item=${props.item.id}`} data-wowhead="domain=classic"><img src={itemMedia} alt={props.slotID} className={`ItemSlotIcon ${props.item.preview_item.quality.name}`} /></a>

  return (
    props.item ?
      <div >
        <div className={`ItemSlot ${props.section}`}>
          <img onMouseOver={() => { props.onMouseEvent(true, props.item) }} onMouseLeave={() => { props.onMouseEvent(false, props.item) }} src={itemMedia} alt={props.slotID} className={`ItemSlotIcon ${props.item.preview_item.quality.name}`} />
          <div className='Apart'>
            <div onMouseOver={() => { props.onMouseEvent(true, props.item) }} onMouseLeave={() => { props.onMouseEvent(false, props.item) }} className={`ItemSlot ItemDetails ${props.item.preview_item.quality.name}`} >
              {props.item.name}
            </div>
            <div className='Enchant'>{`${enchantDetailsfromSpellID(props.item.itemDetails.enchantID).name}`}</div>
          </div>

        </div>
      </div>
      :
      <div className={`ItemSlot ${props.section}`}>
        <img src={require(`../images/EmptySlots/inventoryslot_${slotIDs[props.slotID]}.jpg`)} alt={props.slotID} className='ItemSlotIcon Poor' />
        {slotIDs[props.slotID].charAt(0).toUpperCase() + slotIDs[props.slotID].slice(1)}
      </div>

  )
}