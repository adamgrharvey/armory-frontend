import React from 'react';
import emptyChest from 'armory\src\images\EmptySlots\inventoryslot_chest.jpg'
import emptyEnchant from 'armory\src\images\EmptySlots\inventoryslot_enchant.jpg'
import emptyFeet from 'armory\src\images\EmptySlots\inventoryslot_feet.jpg'
import emptyFinger from 'armory\src\images\EmptySlots\inventoryslot_finger.jpg'
import emptyHands from 'armory\src\images\EmptySlots\inventoryslot_hands.jpg'
import emptyHead from 'armory\src\images\EmptySlots\inventoryslot_head.jpg'
import emptyLegs from 'armory\src\images\EmptySlots\inventoryslot_legs.jpg'
import emptyMainhand from 'armory\src\images\EmptySlots\inventoryslot_mainhand.jpg'
import emptyNeck from 'armory\src\images\EmptySlots\inventoryslot_neck.jpg'
import emptyOffhand from 'armory\src\images\EmptySlots\inventoryslot_offhand.jpg'
import emptyRanged from 'armory\src\images\EmptySlots\inventoryslot_ranged.jpg'
import emptyShirt from 'armory\src\images\EmptySlots\inventoryslot_shirt.jpg'
import emptyShoulder from 'armory\src\images\EmptySlots\inventoryslot_shoulder.jpg'
import emptyTabard from 'armory\src\images\EmptySlots\inventoryslot_tabard.jpg'
import emptyTrinket from 'armory\src\images\EmptySlots\inventoryslot_trinket.jpg'
import emptyWaist from 'armory\src\images\EmptySlots\inventoryslot_waist.jpg'
import emptyWrists from 'armory\src\images\EmptySlots\inventoryslot_wrists.jpg'

export default function ItemSlot(props) {
let slotID = props.slotID
let quality = props.quality

  return (
    <img src={emptyChest} alt="emptyChest" />
  )
}