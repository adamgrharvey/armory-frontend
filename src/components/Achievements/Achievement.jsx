import '../../styles/Achievement.css';
import React from 'react';
import formatAchievementDate from '../../helpers/formatAchievementDate';

export default function Achievement(props) {

  let ach = props.achievement;

  if (props.achievement) {
  }


  return (
    props.achievement ?
      <div className='Achievement'>
        <img src={ach.image_url} />
        <div>
          <div className='AchNameDesc'>
            {ach.name}
          </div>
          <div>
            {ach.description}
          </div>
          <div>
            {ach.reward_text}
          </div>

        </div>
        <div className='AchPointsDate'>
          <div>
            {formatAchievementDate(ach.date_completed)}
          </div>
          <div className='AchShield'>
            <div>
              {(!ach.is_statistic) && ach.points === 0 ? <img src={require(`../../images/Achievement/Achievement_feat_icon.webp`)} /> : <img src={require(`../../images/Achievement/Achievement_icon.webp`)} />
              }
            </div>
            <div className='Points'>
              {ach.points}
            </div>
          </div>

        </div>

      </div>
      :
      <div>

      </div>
  )
}