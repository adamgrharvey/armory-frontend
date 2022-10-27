import React from 'react';

//40499:3817:41398:42702:0:0:0:0:80:0:0:0:0:0:0:0:0:.44664:0:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40502:3808:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.2105:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40495:3832:40003:40053:0:0:0:0:80:0:0:0:0:0:0:0:0:.40205:0:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.44011:3823:40003:39910:0:0:0:0:80:0:0:0:0:0:0:0:0:.34575:3606:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.34448:3845:40003:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40496:3604:40053:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40717:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.37642:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.44253:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40684:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40721:3730:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.39714:3789:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.40386:3789:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.39296:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.43156:0:0:0:0:0:0:0:80:0:0:0:0:0:0:0:0:.

//itemId:enchantId:gemId1:gemId2:gemId3:gemId4:
//suffixId:uniqueId:linkLevel:specializationID:upgradeId:instanceDifficultyId:
//numBonusIds:bonusId1:bonusId2:upgradeValue

export default function readCharacterString(characterString) {

  let itemArr = characterString.split(".");

  let itemIDs = {
    itemID: 0,
    enchantID: 0,
    gem1ID: 0,
    gem2ID: 0,
    gem3ID: 0,
    gem4ID: 0,
    suffixID: 0,
    uniqueID: 0,
    charLevel: 0,
    specializationID: 0,
    upgradeID: 0,
    instanceDifficultyID: 0,
    numBonusIDs: 0,
    bonus1ID: 0,
    bonus2ID: 0,
    upgradeValue: 0
  }

  let slotIDs = {
    1: { slot: "HEAD" },
    2: { slot: "NECK" },
    3: { slot: "SHOULDER" },
    4: { slot: "BODY" },
    5: { slot: "CHEST" },
    6: { slot: "WAIST" },
    7: { slot: "LEGS" },
    8: { slot: "FEET" },
    9: { slot: "WRIST" },
    10: { slot: "HAND" },
    11: { slot: "FINGER1" },
    12: { slot: "FINGER2" },
    13: { slot: "TRINKET1" },
    14: { slot: "TRINKET2" },
    15: { slot: "CLOAK" },
    16: { slot: "MAINHAND" },
    17: { slot: "OFFHAND" },
    18: { slot: "RANGED" },
    19: { slot: "TABARD" }
  };

  for (let i = 1; i <= 19; i++) {
    slotIDs[i].item = translateItemSegment(itemArr[i-1])
  }
console.log(slotIDs);
}

const translateItemSegment = function (itemSegment) {
  let itemIDs = {
    itemID: 0,
    enchantID: 0,
    gem1ID: 0,
    gem2ID: 0,
    gem3ID: 0,
    gem4ID: 0,
    suffixID: 0,
    uniqueID: 0,
    charLevel: 0,
    specializationID: 0,
    upgradeID: 0,
    instanceDifficultyID: 0,
    numBonusIDs: 0,
    bonus1ID: 0,
    bonus2ID: 0,
    upgradeValue: 0
  }
  let keys = Object.keys(itemIDs);

  if (itemSegment === 'empty') {
    return null;
  } else {
    let item = itemSegment.split(":")
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '') {
        itemIDs[keys[i]] = null;
      } else {
        itemIDs[keys[i]] = parseInt(item[i], 10);
      }
    }
    return itemIDs;
  }

}