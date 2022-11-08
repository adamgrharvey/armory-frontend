import '../../styles/Achievement.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import Achievement from './Achievement';
import getCharacterStatistics from '../../helpers/backend/getCharacterStatistics';
import { useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Achievements(props) {
  let params = useParams();
  const [achievements, setAchievements] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterStatistics(params.region, params.server, params.characterName)
      .then((res) => {
        setAchievements(res);
        setLoading(false);
      })
  }, [])


  return (
    <div>
      {loading ?
        <div className='Loader'>
          <MoonLoader color={'#5118a7'} width={'50%'} height={8} />
        </div>
        :
        <div>
          {achievements.map((i) =>
            <Achievement achievement={i} key={i.id} />
          )}
        </div>}
    </div>



  )
}

//      <Achievement achievement={achievements[9]}/>
/* <Achievement achievement={achievements[3]}/>
<Achievement achievement={achievements[91]}/> */