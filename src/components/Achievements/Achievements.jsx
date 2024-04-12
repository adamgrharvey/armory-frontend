import React from 'react'
import Achievement from './Achievement'
import { useState } from 'react'
import CategoryButton from './CategoryButton'
import SubCategoryButton from './SubCategoryButton'
import { getStatistics } from './Statistics'

export default function Achievements(props) {
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState(null)
  const [hover, setHover] = useState(null)
  const [showSubCategory, setShowSubCategory] = useState(false)

  let achievements = Object.values(getStatistics())
  let complete = achievements.filter((ach) => ach.dateCompleted)
  let incomplete = achievements.filter((ach) => !ach.dateCompleted)
  complete.sort((a, b) => b.dateCompleted - a.dateCompleted)

  let display = [...complete, ...incomplete]

  if (category !== '') {
    complete = complete.filter((ach) => ach.category?.toLocaleLowerCase() === category)
    if (subCategory) {
      complete = complete.filter((ach) => ach.sub_category === subCategory)
    }
  } else {
    display = complete.filter((ach) => ach.dateCompleted)
    display = complete.slice(0, 20)
  }

  return (
    <div>
      <div className="Achievements">
        <div className="Categories">
          <CategoryButton
            label={'Summary'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            setSubCategory={setSubCategory}
            setShowSubCategory={setShowSubCategory}
          />

          <CategoryButton
            label={'General'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            setSubCategory={setSubCategory}
            setShowSubCategory={setShowSubCategory}
          />

          <CategoryButton
            label={'Quests'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'quests'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Exploration'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'exploration'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Player vs. Player'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'player-vs-player'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Dungeons & Raids'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'dungeons-&-raids'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Professions'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'professions'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Reputation'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'reputation'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'World Events'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            showSubCategory={showSubCategory}
            setShowSubCategory={setShowSubCategory}
            setSubCategory={setSubCategory}
          />
          <SubCategoryButton
            category={'world-events'}
            onMouseEvent={setHover}
            hover={hover}
            showSubCategory={showSubCategory}
            selected={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          <CategoryButton
            label={'Feats of Strength'}
            onMouseEvent={setHover}
            hover={hover}
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            setSubCategory={setSubCategory}
            setShowSubCategory={setShowSubCategory}
          />
        </div>
        <div className="AchievementList">
          {display.map((i) => (
            <Achievement category={category} subCategory={subCategory} achievement={i} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

//      <Achievement achievement={achievements[9]}/>
/* <Achievement achievement={achievements[3]}/>
<Achievement achievement={achievements[91]}/> */
