import '../../styles/Achievement.css';
import React from 'react';

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
            {ach.date_completed}
          </div>
          <div className='AchShield'>
            <div>
              <img src={require(`../../images/Achievement/Achievement_icon.webp`)} />
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