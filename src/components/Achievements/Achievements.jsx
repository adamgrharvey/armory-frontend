import '../../styles/Achievement.css';
import '../../styles/AchievementsPage.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import Achievement from './Achievement';
import getCharacterStatistics from '../../helpers/backend/getCharacterStatistics';
import { useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import CategoryButton from './CategoryButton';

export default function Achievements(props) {
  let params = useParams();
  const [achievements, setAchievements] = useState([])
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(params.category);

  useEffect(() => {
    setLoading(true);
    getCharacterStatistics(params.region, params.server, params.characterName, category)
      .then((res) => {
        setAchievements(res);
        setLoading(false);
      })
  }, [category])


  return (
    <div>
      <div className='Achievements'>
        <div>
          <CategoryButton label={"Summary"} setCategory={setCategory} />
          <CategoryButton label={"General"} setCategory={setCategory} />
          <CategoryButton label={"Quests"} setCategory={setCategory} />
          <CategoryButton label={"Exploration"} setCategory={setCategory} />
          <CategoryButton label={"Player vs. Player"} setCategory={setCategory} />
          <CategoryButton label={"Dungeons & Raids"} setCategory={setCategory} />
          <CategoryButton label={"Professions"} setCategory={setCategory} />
          <CategoryButton label={"Reputation"} setCategory={setCategory} />
          <CategoryButton label={"World Events"} setCategory={setCategory} />
          <CategoryButton label={"Feats of Strength"} setCategory={setCategory} />
        </div>
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
    </div>



  )
}

//      <Achievement achievement={achievements[9]}/>
/* <Achievement achievement={achievements[3]}/>
<Achievement achievement={achievements[91]}/> */