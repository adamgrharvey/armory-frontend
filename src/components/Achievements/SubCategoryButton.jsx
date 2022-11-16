import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function SubCategoryButton(props) {

  const formatCategory = function (category) {
    category = category.replace(/\s+/g, '-').toLowerCase();
    return category;
  }

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

  let subCategories = {
    "": [],
    "general": [],
    "quests": ["Classic", "The Burning Crusade", "Wrath of the Lich King"],
    "exploration": ["Eastern Kingdoms", "Kalimdor", "Outland", "Northrend"],
    "player-vs-player": ["Arena", "Alterac Valley", "Arathi Basin", "Eye of the Storm", "Warsong Gulch", "Strand of the Ancients", "Wintergrasp", "Isle of Conquest"],
    "dungeons-&-raids": ["Classic", "The Burning Crusade", "Lich King Dungeon", "Lich King Heroic", "Lich King 10-Player Raid", "Lich King 25-Player Raid", "Secrets of Ulduar 10-Player Raid", "Secrets of Ulduar 25-Player Raid", "Call of the Crusade 10-Player Raid", "Call of the Crusade 25-Player Raid", "Fall of the Lich King 10-Player Raid", "Fall of the Lich King 25-Player Raid"],
    "professions": ["Cooking", "Fishing", "First Aid"],
    "reputation": ["Classic", "The Burning Crusade", "Wrath of the Lich King"],
    "world-events": ["Lunar Festival", "Love is in the Air", "Noblegarden", "Children's Week", "Midsummer", "Brewfest", "Hallow's End", "Pilgrim's Bounty", "Winter Veil", "Argent Tournament"],
    "feats-of-strength": []

  }

  if (props.category === props.selected && props.showSubCategory) {
    return (
      <div>
        {
          subCategories[props.category].map((i) =>
          (<div className='SubCategory'>
            <button className='SubCategoryButtonBG AllCategoryText SubcategoryTextColor'
              onClick={() => {
                props.setSubCategory(i)
              }}>
              <div className={props.subCategory === i ? 'Highlight' : ""}>
              </div>
              <div className='Absolute'>
                {i}
              </div>

            </button>
          </div>)
          )}

      </div>


    )
  }

}