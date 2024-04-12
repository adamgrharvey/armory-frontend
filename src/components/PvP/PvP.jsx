import React from 'react'
import Bracket from './Bracket'
import HonorKills from './HonorKills'

export default function PvP(props) {
  props.PvP['2v2'].rating = 2019
  props.PvP['2v2'].seasonPlayed = 82
  props.PvP['2v2'].seasonWon = 60

  props.PvP['3v3'].rating = 3000
  props.PvP['3v3'].seasonPlayed = 121
  props.PvP['3v3'].seasonWon = 117

  props.PvP['5v5'].rating = 1996
  props.PvP['5v5'].seasonPlayed = 123
  props.PvP['5v5'].seasonWon = 55
  return (
    <div>
      <div className="Divider" />
      <div className="SectionHeader">Player vs. Player</div>
      <div className="PvP">
        <HonorKills faction={props.faction} characterStats={props.characterStats} />
        <Bracket label={'2v2'} PvP={props.PvP} />
        <Bracket label={'3v3'} PvP={props.PvP} />
        <Bracket label={'5v5'} PvP={props.PvP} />
      </div>
    </div>
  )
}
