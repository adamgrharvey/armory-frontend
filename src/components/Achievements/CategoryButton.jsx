import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CategoryButton(props) {

  let legend = {
    "Summary": "",
    "General": "general",
    "Quests": "quests",
    "Exploration": "exploration",
    "Player vs. Player": "player-vs-player",
    "Dungeons & Raids": "dungeons-&-raids",
    "Professions": "professions",
    "Reputation": "reputation",
    "World Events": "world-events",
    "Feats of Strength": "feats-of-strength"
  }

  const [label, setLabel] = useState(props.label)

  return (
    <div>
      <button
        onClick={() => {
          props.setCategory(legend[label])
        }}>

        {label}
      </button>
    </div>
  )
}