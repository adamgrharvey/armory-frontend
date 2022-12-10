import React from 'react';
import { useState } from 'react';
import getItemMedia from '../helpers/blizzardAPI/getItemMedia';
import enchantDetailsfromSpellID from '../helpers/enchantDetailsFromSpellID';
import Gems from './Gems';

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

  let whGems = "";
  let whEnch = "";
  if (props.item.itemDetails.enchantID !==0) {
    whEnch = `&ench=${props.item.itemDetails.enchantID}`
  }
  if (props.item.itemDetails.gem1ID !==0) {
    whGems = `&gems=${props.item.itemDetails.gem1ID}`
  }
  if (props.item.itemDetails.gem2ID !==0) {
    whGems = whGems+`:${props.item.itemDetails.gem2ID}`
  }
  if (props.item.itemDetails.gem3ID !==0) {
    whGems = whGems+`:${props.item.itemDetails.gem3ID}`
  }
  if (props.item.itemDetails.gem4ID !==0) {
    whGems = whGems+`:${props.item.itemDetails.gem4ID}`
  }

  //<a href={`https://www.wowhead.com/item=${props.item.id}`} data-wowhead="domain=classic"><img src={itemMedia} alt={props.slotID} className={`ItemSlotIcon ${props.item.preview_item.quality.name}`} /></a>

  //colorLinks: true, iconizeLinks: true, renameLinks: true 

  return (
    props.item ?

      <div>
        <div className={`ItemSlot ${props.section}`}>
          <a data-wh-rename-link="false" href={`https://www.wowhead.com/wotlk/item=${props.item.id}${whGems}${whEnch}`}><img src={itemMedia} alt={props.slotID} className={`ItemSlotIcon ${props.item.preview_item.quality.name}`} /></a>
          <div className='Apart'>
            <a data-wh-rename-link="false" href={`https://www.wowhead.com/wotlk/item=${props.item.id}${whGems}${whEnch}`}>
              <div className={`ItemSlot ItemDetails ${props.item.preview_item.quality.name}`} >
                {props.item.name}

              </div>
            </a>
            <Gems section={props.section} itemDetails={props.item.itemDetails} />
            <div className={`Enchant-${props.section}`}>{props.item.itemDetails.enchantID !== 0 ? (<a data-wh-rename-link="false" className={`Enchant-${props.section} q2`} href={`https://www.wowhead.com/wotlk/spell=${enchantDetailsfromSpellID(props.item.itemDetails.enchantID).id}`}>{`${enchantDetailsfromSpellID(props.item.itemDetails.enchantID).name}`}</a>) : ""}</div>
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