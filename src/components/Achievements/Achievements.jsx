import '../../styles/Achievement.css';
import React from 'react';
import Achievement from './Achievement';
import getCharacterStatistics from '../../helpers/backend/getCharacterStatistics';
import { useEffect, useState } from 'react';

export default function Achievements(props) {

  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    if (props.character.characterData && props.character.characterData.miscInfo) {
      getCharacterStatistics(props.character.characterData.miscInfo.region, props.character.characterData.miscInfo.server, props.character.characterData.miscInfo.name)
        .then((res) => {
          setAchievements(res);
          console.log(res);
        })
    }
  }, [])




  return (
    <div>
      <Achievement achievement={achievements[0]}/>
    </div>

  )
}