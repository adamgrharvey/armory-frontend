import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemSlot from './ItemSlot';

export default function ItemSection(props) {
  let slotIDs = {
    1: "HEAD",
    2: "NECK",
    3: "SHOULDER",
    4: "BODY",
    5: "CHEST",
    6: "WAIST",
    7: "LEGS",
    8: "FEET",
    9: "WRIST",
    10: "HAND",
    11: "FINGER1",
    12: "FINGER2",
    13: "TRINKET1",
    14: "TRINKET2",
    15: "CLOAK",
    16: "MAINHAND",
    17: "OFFHAND",
    18: "RANGED",
    19: "TABARD"
  };

  // how to divide up the armory sides
  let left = [1, 2, 3, 15, 5, 4, 19, 9];
  let bottom = [16, 17, 18];
  let right = [10, 6, 7, 8, 11, 12, 13, 14];

  const [section, setSection] = useState([]);

  useEffect(() => {
    switch (true) {
      case props.section === 'left': setSection(left); break;
      case props.section === 'bottom': setSection(bottom); break;
      case props.section === 'right': setSection(right); break;
    }

  }, [])

  let keys = Object.keys(props.character);

  return (
    <div className='ItemSection'>
      {section.map((i) =>
        <ItemSlot section={props.section} key={`ItemSlot${slotIDs[i]}`} onMouseEvent={props.setTooltip} slotID={i} item={props.character[i-1]} />)}
    </div>
  )
}