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
  let slotID = props.slotID;
  let quality = props.quality;
  let itemID = props.itemID;
  if (itemID) {
    getItemMedia(itemID, accessToken).then(res => setItemMedia(res))

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
    <div>
      {itemID ? <img src={itemMedia} /> : <img src={require(`../images/EmptySlots/inventoryslot_${slotIDs[slotID]}.jpg`)} />}
    </div>
    
  )
}