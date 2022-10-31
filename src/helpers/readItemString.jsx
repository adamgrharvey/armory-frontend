export default function readItemString(itemString, setCharLoading) {

  let itemArr = itemString.split(".");

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
    slotIDs[i].item = translateItemSegment(itemArr[i - 1])

    // mark each slot as 'loaded'
    let temp = {}
    temp[i] = true;
    setCharLoading((prev) => 
      ({...prev, ...temp})
      
    );
  }
  return (slotIDs);
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