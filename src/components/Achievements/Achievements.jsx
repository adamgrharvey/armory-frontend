
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Achievement from './Achievement';
import getCharacterStatistics from '../../helpers/backend/getCharacterStatistics';
import { useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import CategoryButton from './CategoryButton';
import SubCategoryButton from './SubCategoryButton';
import getCharacterData from '../../helpers/backend/getCharacterData';
import characterStringSplitter from '../../helpers/backend/parseSubmissionData';

export default function Achievements(props) {
  let params = useParams();
  const [achievements, setAchievements] = useState([])
  const [charLoading, setCharLoading] = useState(true);
  const [achLoading, setAchLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState(null);
  const [characterExists, setCharacterExists] = useState(false);
  const [character, setCharacter] = useState({
    inventory: {}
  });

  useEffect(() => {
    setCharLoading(true);
    getCharacterStatistics(params.region, params.server, params.characterName, category)
      .then((res) => {
        setAchievements(res);
        setAchLoading(false);
      })
  }, [category])

  useEffect(() => {
    if (achLoading) {
      getCharacterData(params.region, params.server, params.characterName).then((results) => {
        console.log(results);
        characterStringSplitter(results.character_string, setCharacter)
      })
    }

  }, [])


  return (
    <div>
      <div className='Achievements'>
        <div>
          <CategoryButton label={"Summary"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <CategoryButton label={"General"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <CategoryButton label={"Quests"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"quests"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Exploration"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"exploration"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Player vs. Player"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"player-vs-player"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Dungeons & Raids"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"dungeons-&-raids"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Professions"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"professions"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Reputation"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"reputation"} setSubCategory={setSubCategory} />
          <CategoryButton label={"World Events"} setCategory={setCategory} setSubCategory={setSubCategory}/>
          <SubCategoryButton selected={category} category={"world-events"} setSubCategory={setSubCategory} />
          <CategoryButton label={"Feats of Strength"} setCategory={setCategory} setSubCategory={setSubCategory}/>
        </div>
        {achLoading ?
          <div className='Loader'>
            <MoonLoader color={'#5118a7'} width={'50%'} height={8} />
          </div>
          :
          <div className='AchievementList'>
            {achievements.map((i) =>
              <Achievement category={category} subCategory={subCategory} achievement={i} key={i.id} />
            )}
          </div>}
      </div>
    </div>



  )
}

//      <Achievement achievement={achievements[9]}/>
/* <Achievement achievement={achievements[3]}/>
<Achievement achievement={achievements[91]}/> */