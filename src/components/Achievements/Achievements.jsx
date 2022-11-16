
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
  const [showSubCategory, setShowSubCategory] = useState(false);
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
        <div className='Categories'>
          <CategoryButton label={"Summary"} category={category} subCategory={subCategory}  setCategory={setCategory} setSubCategory={setSubCategory} setShowSubCategory={setShowSubCategory}/>

          <CategoryButton label={"General"} category={category} subCategory={subCategory}  setCategory={setCategory} setSubCategory={setSubCategory} setShowSubCategory={setShowSubCategory}/>

          <CategoryButton label={"Quests"} category={category} subCategory={subCategory}  setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"quests"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Exploration"} category={category} subCategory={subCategory}  setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"exploration"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Player vs. Player"}category={category} subCategory={subCategory}  setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"player-vs-player"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Dungeons & Raids"} category={category} subCategory={subCategory}  setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"dungeons-&-raids"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Professions"} category={category} subCategory={subCategory} setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"professions"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Reputation"} category={category} subCategory={subCategory} setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"reputation"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"World Events"} category={category} subCategory={subCategory} setCategory={setCategory} showSubCategory={showSubCategory} setShowSubCategory={setShowSubCategory} setSubCategory={setSubCategory} />
          <SubCategoryButton category={"world-events"} showSubCategory={showSubCategory} selected={category} subCategory={subCategory} setSubCategory={setSubCategory} />

          <CategoryButton label={"Feats of Strength"} category={category} subCategory={subCategory} setCategory={setCategory} setSubCategory={setSubCategory} setShowSubCategory={setShowSubCategory}/>
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