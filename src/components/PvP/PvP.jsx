import React from 'react';
import Bracket from './Bracket';
import HonorKills from './HonorKills';

export default function PvP(props) {

  return (
    <div>
      <div className='Divider' />
      <div className='SectionHeader'>
        Player vs. Player
      </div>
      <div className='PvP'>
        <HonorKills faction={props.faction} characterStats={props.characterStats}/>
      </div>
    </div>

  )
}