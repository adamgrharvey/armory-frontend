import React from 'react';

export default function HonorKills(props) {

  // let hks = props.stats.588
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className='HonorKills'>
      <div className={`PVPLogo PVPLogo-${props.faction}`}/>
      <div className='Title'>Honorable Kills</div>
      <div className='honorkillsdropdown'>
        <div>
          {numberWithCommas(props.characterStats[588].value)}
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}