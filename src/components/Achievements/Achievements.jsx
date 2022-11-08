import '../../styles/Achievement.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import Achievement from './Achievement';
import getCharacterStatistics from '../../helpers/backend/getCharacterStatistics';
import { useEffect, useState } from 'react';

export default function Achievements(props) {
  let params = useParams();
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    getCharacterStatistics(params.region, params.server, params.characterName)
      .then((res) => {
        setAchievements(res);
        console.log(res);
      })
  }, [])


  return (
    <div>
      {achievements.map((i) =>
        <Achievement achievement={i} key={i.id} />
      )}
    </div>

  )
}

//      <Achievement achievement={achievements[9]}/>
/* <Achievement achievement={achievements[3]}/>
<Achievement achievement={achievements[91]}/> */