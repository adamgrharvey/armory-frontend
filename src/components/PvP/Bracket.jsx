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

  const getWinLossRatio = function (played, won) {
    return won / played * 100;
  }

  const getArenaImageData = function (rating) {

    if (!rating) {
      return "None"
    }
    if (rating < 1400) {
      return { "css": "Unranked", label: "Combatant" }
    }
    if (rating < 1550) {
      return { "css": "Challenger", label: "Challenger I" }
    }
    if (rating < 1775) {
      return { "css": "Challenger", label: "Challenger II" }
    }
    if (rating < 1925) {
      return { "css": "Rival", label: "Rival I" }
    }
    if (rating < 2075) {
      return { "css": "Rival", label: "Rival II" }
    }
    if (rating < 2375) {
      return { "css": "Duelist", label: "Duelist" }
    }
    return { "css": "Elite", label: "Elite" }
  }

  let arenaImageData = getArenaImageData(props.PvP[props.label].rating);

  return (
    <div className='Bracket'>
      <div className={`PVPLogo ArenaRank-${arenaImageData.css}`} />
      <div className='Title'>{`${props.label}`}</div>
      <div className='ArenaTitle'>{`${arenaImageData.label}`}</div>
      <div className='honorkillsdropdown'>
        <div className='Rating'>
          {`Current Rating: ${props.PvP[props.label].rating}`}
        </div>
        <div>
          {`${props.PvP[props.label].seasonWon} W | ${props.PvP[props.label].seasonPlayed - props.PvP[props.label].seasonWon} L (${Math.round(getWinLossRatio(props.PvP[props.label].seasonPlayed, props.PvP[props.label].seasonWon))}%)`}
        </div>

      </div>
    </div>
  )
}