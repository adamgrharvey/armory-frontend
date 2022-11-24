import React from 'react';

export default function Bracket(props) {
  // elite 2375+
  // duelist 2075+
  // rival 2 1925+
  // rival 1 1775+
  // challenger 2 1575+
  // challenger 1 1400 +
  // unranked
  // no data

  const arenaImage = function(ratingString) {
    let rating = Number(ratingString);
  }

  return (
    <div className='HonorKills'>
      <div className={`PVPLogo PVPLogo-HORDE`}/>
      <div className='Title'>{`${props.label}`}</div>
      <div className='honorkillsdropdown'>
        <div>
          {`Current Rating: ${props.PvP[props.label].rating}`}
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}