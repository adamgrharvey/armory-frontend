import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CategoryButton(props) {
  const formatCategory = function (category) {
    category = category.replace(/\s+/g, '-').toLowerCase()
    category = category.replace('.', '')
    if (category === 'summary') {
      return ''
    }
    return category
  }

  let legend = {
    Summary: '',
    General: 'general',
    Quests: 'quests',
    Exploration: 'exploration',
    'Player vs. Player': 'player-vs-player',
    'Dungeons & Raids': 'dungeons-&-raids',
    Professions: 'professions',
    Reputation: 'reputation',
    'World Events': 'world-events',
    'Feats of Strength': 'feats-of-strength',
  }

  let subCategories = {
    Summary: [],
    General: [],
    Quests: ['Classic', 'The Burning Crusade', 'Wrath of the Lich King'],
    Exploration: ['Eastern Kingdoms', 'Kalimdor', 'Outland', 'Northrend'],
    'Player vs. Player': [
      'Arena',
      'Alterac Valley',
      'Arathi Basin',
      'Eye of the Storm',
      'Warsong Gulch',
      'Strand of the Ancients',
      'Wintergrasp',
      'Isle of Conquest',
    ],
    'Dungeons & Raids': [
      'Classic',
      'The Burning Crusade',
      'Lich King Dungeon',
      'Lich King Heroic',
      'Lich King 10-player Raid',
      'Lich King 25-player Raid',
      'Secrets of Ulduar 10-player Raid',
      'Secrets of Ulduar 25-player Raid',
      'Call of the Crusade 10-player Raid',
      'Call of the Crusade 25-player Raid',
      'Fall of the Lich King 10-player Raid',
      'Fall of the Lich King 25-player Raid',
    ],
    Professions: ['Cooking', 'Fishing', 'First Aid'],
    Reputation: ['Classic', 'The Burning Crusade', 'Wrath of the Lich King'],
    'World Events': [
      'Lunar Festival',
      'Love is in the Air',
      'Noblegarden',
      "Children's Week",
      'Midsummer',
      'Brewfest',
      "Hallow's End",
      "Pilgrim's Bounty",
      'Winter Veil',
      'Argent Tournament',
    ],
    'Feats of Strength': [],
  }

  const [label, setLabel] = useState(props.label)

  return (
    <div
      className="Category"
      onMouseEnter={() => {
        props.onMouseEvent(legend[label])
      }}
      onMouseLeave={() => {
        props.onMouseEvent(null)
      }}
    >
      <button
        className="CategoryButtonBG AllCategoryText CategoryTextColor"
        onClick={() => {
          if (
            props.category === legend[label] &&
            props.showSubCategory === true &&
            props.subCategory === null
          ) {
            props.setShowSubCategory(false)
          } else {
            props.setShowSubCategory(true)
          }
          props.setCategory(legend[label])
          props.setSubCategory(null)
        }}
      >
        <div
          className={
            props.hover === formatCategory(props.label) ||
            (props.category === formatCategory(props.label) && props.subCategory === null)
              ? 'Highlight'
              : ''
          }
        ></div>
        <div className="Absolute">{label}</div>
      </button>
    </div>
  )
}
