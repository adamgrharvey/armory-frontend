import '../../styles/Achievement.css';
import React from 'react';
import formatAchievementDate from '../../helpers/formatAchievementDate';

export default function Achievement(props) {

  let ach = props.achievement;

  return (
    // is this complete?
    (ach && !ach.is_statistic && ach.date_completed) ?
      <div className='Achievement'>

        <div className='AchievementBackground'>
          <div className='AchTitleBackground'>
            <img src={require(`../../images/Achievement/UI-Achievement-Title.png`)} />
          </div>
          <div className='TsunamiTop'>
            <img src={require(`../../images/Achievement/UI-Achievement-Tsunami-Horizontal.png`)} />
          </div>
          {
            ach.reward_text !== "" &&
            <div className='Reward'>
              <img src={require(`../../images/Achievement/UI-Achievement-Reward-Background.png`)} />
            </div>
          }
          <div className='TsunamiBottom'>
            <img src={require(`../../images/Achievement/UI-Achievement-Tsunami-Horizontal.png`)} />
          </div>
        </div>

        <div className='AchData'>

          <div className='Media'>
            <img src={ach.image_url} />
            <div className='MediaBorder'>
              <img src={require(`../../images/Achievement/UI-Achievement-IconFrame.png`)} />
            </div>
          </div>
          <div className='AchNameDesc'>
            <div>
              <div className='AchName'>
                {ach.name}
              </div>
            </div>
            <div className='AchDesc'>
              {ach.description}
            </div>
            <div className='RewardText'>
              {ach.reward_text}
            </div>
          </div>
          <div className='AchPointsDate'>
            <div>
              <div className='AchShield'>
                {
                  (!ach.is_statistic) && ach.points === 0 ?
                    <div>
                      <img src={require(`../../images/Achievement/Achievement_feat_icon.webp`)} />
                      <div className='Date feat'>
                        {formatAchievementDate(ach.date_completed)}
                      </div>
                    </div>
                    :
                    <div>
                      <img src={require(`../../images/Achievement/Achievement_icon.webp`)} />
                      <div className='Points'>
                        {ach.points}
                      </div>
                      <div className='Date'>
                        {formatAchievementDate(ach.date_completed)}
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      // not complete
      : (ach && !ach.is_statistic && !ach.date_completed && !ach.name.includes("Realm First") && ach.points !== 0) ?
        <div className='Achievement'>

          <div className='AchievementBackgroundNotEarned'>
            <div className='AchTitleBackground NotEarned'>
              <img src={require(`../../images/Achievement/UI-Achievement-Title.png`)} />
            </div>
            <div className='TsunamiTop'>
              <img src={require(`../../images/Achievement/UI-Achievement-Tsunami-Horizontal.png`)} />
            </div>
            {
              ach.reward_text !== "" &&
              <div className='Reward NotEarned'>
                <img src={require(`../../images/Achievement/UI-Achievement-Reward-Background.png`)} />
              </div>
            }
            <div className='TsunamiBottom'>
              <img src={require(`../../images/Achievement/UI-Achievement-Tsunami-Horizontal.png`)} />
            </div>
          </div>

          <div className='AchData'>

            <div className='Media NotEarned'>
              <img src={ach.image_url} />
              <div className='MediaBorder'>
                <img src={require(`../../images/Achievement/UI-Achievement-IconFrame.png`)} />
              </div>
            </div>
            <div className='AchNameDesc'>
              <div>
                <div className='AchName NotEarned'>
                  {ach.name}
                </div>
              </div>
              <div className='AchDesc'>
                {ach.description}
              </div>
              <div className='RewardText'>
                {ach.reward_text}
              </div>
            </div>
            <div className='AchPointsDate'>
              <div>
                <div className='AchShield NotEarned'>
                  {(!ach.is_statistic) && ach.points === 0 ? <img src={require(`../../images/Achievement/Achievement_feat_icon.webp`)} /> :
                    <div>
                      <img src={require(`../../images/Achievement/Achievement_icon.webp`)} />
                      <div className='Points'>
                        {ach.points}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div>

        </div>
  )
}

/*
<div className='Achievement'>
        <div className='test'>
          <img src={require(`../../images/Achievement/UI-Achievement-Title.png`)} />
        </div>

        <div className='Media'>
          <img src={ach.image_url} />
        </div>
        <div className='MediaBorder'>
          <img src={require(`../../images/Achievement/UI-Achievement-IconFrame.png`)} />
        </div>
        <div className='AchNameDesc'>
          <div>

            <div className='AchName'>
              {ach.name}
            </div>
          </div>
          <div>
            {ach.description}
          </div>
          <div>
            {ach.reward_text}
          </div>

        </div>
        <div className='AchPointsDate'>
          <div className='AchShield'>
            <div>
              {(!ach.is_statistic) && ach.points === 0 ? <img src={require(`../../images/Achievement/Achievement_feat_icon.webp`)} /> : <img src={require(`../../images/Achievement/Achievement_icon.webp`)} />
              }
              <div className='Points'>
                {ach.points}
              </div>
            </div>
            <div>
              {formatAchievementDate(ach.date_completed)}
            </div>
          </div>
        </div>
      </div>
*/