import React from 'react';
import { useState } from 'react';
import emptyChest from '../images/EmptySlots/inventoryslot_chest.jpg'
import emptyEnchant from '../images/EmptySlots/inventoryslot_enchant.jpg'
import emptyFeet from '../images/EmptySlots/inventoryslot_feet.jpg'
import emptyFinger from '../images/EmptySlots/inventoryslot_finger.jpg'
import emptyHands from '../images/EmptySlots/inventoryslot_hands.jpg'
import emptyHead from '../images/EmptySlots/inventoryslot_head.jpg'
import emptyLegs from '../images/EmptySlots/inventoryslot_legs.jpg'
import emptyMainhand from '../images/EmptySlots/inventoryslot_mainhand.jpg'
import emptyNeck from '../images/EmptySlots/inventoryslot_neck.jpg'
import emptyOffhand from '../images/EmptySlots/inventoryslot_offhand.jpg'
import emptyRanged from '../images/EmptySlots/inventoryslot_ranged.jpg'
import emptyShirt from '../images/EmptySlots/inventoryslot_shirt.jpg'
import emptyShoulder from '../images/EmptySlots/inventoryslot_shoulder.jpg'
import emptyTabard from '../images/EmptySlots/inventoryslot_tabard.jpg'
import emptyTrinket from '../images/EmptySlots/inventoryslot_trinket.jpg'
import emptyWaist from '../images/EmptySlots/inventoryslot_waist.jpg'
import emptyWrists from '../images/EmptySlots/inventoryslot_wrists.jpg'

import getItemMedia from '../helpers/getItemMedia';

import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';

export default function ItemSlot(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const [itemMedia, setItemMedia] = useState("");
  // let quality = props.item.preview_item.quality.name;
  if (props.item && props.item) {
    getItemMedia(props.item.id, accessToken).then(res => setItemMedia(res))

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



  return (
    props.item ?
    <div onMouseOver={() => {props.onMouseEvent(true, props.item)}} onMouseLeave={() => {props.onMouseEvent(false, props.item)}}>
      <div className={`ItemSlot ${props.section}`}>
        <img src={itemMedia} alt={props.slotID} className={`ItemSlotIcon ${props.item.preview_item.quality.name}`} />
        <div className={`ItemSlot ItemDetails ${props.item.preview_item.quality.name}`} >
          {props.item.name}
        </div>
      </div>
    </div>
    :
    <div className={`ItemSlot ${props.section}`}>
      <img src={require(`../images/EmptySlots/inventoryslot_${slotIDs[props.slotID]}.jpg`)} alt={props.slotID} className='ItemSlotIcon Common' />
      {slotIDs[props.slotID].charAt(0).toUpperCase() + slotIDs[props.slotID].slice(1)}
    </div>

  )
}