import React from 'react'
import Bracket from './Bracket'
import HonorKills from './HonorKills'

export default function PvP(props) {
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
