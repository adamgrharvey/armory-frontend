import React from 'react'
import isTitleAfter from '../helpers/isTitleAfter'
import getAverageItemLevel from '../helpers/getAverageItemLevel'
import { ReactComponent as AchShield } from '../images/Character/achievement-shield.69931dc20a64225f093d504faf2afb34.svg'
import { ReactComponent as ILVLSword } from '../images/Character/swords.01e57e65afe77495544524c74b7cd100.svg'

export default function CharacterHeader(props) {
  let iLvl = getAverageItemLevel(props.character.inventory)

  if (props.loading) {
    return null
  }

  return (
    <div className="CharacterHeader">
      <div>
        <div className="CharacterHeader-nameTitle">
          <div className={`Logo Logo-${props.character.characterData.miscInfo.faction}`}></div>
          {/* start of title div*/}
          {isTitleAfter(props.character.characterData.miscInfo.title) ||
          props.character.characterData.miscInfo.title === null ? (
            <div className="CharacterHeader-nameArea">
              <div
                className={`CharacterHeader-name CharacterHeader--${props.character.characterData.miscInfo.wowClass}`}
              >
                {props.character.characterData.name}
              </div>
              <div className="CharacterHeader-title">
                {props.character.characterData.miscInfo.title}
              </div>
            </div>
          ) : (
            <div>
              <div className="CharacterHeader-title">
                {props.character.characterData.miscInfo.title}
              </div>
              <div
                className={`CharacterHeader-name CharacterHeader--${props.character.characterData.miscInfo.wowClass}`}
              >
                {props.character.characterData.name}
              </div>
            </div>
          )}
          {/*end of title div */}
        </div>
      </div>
      <div>
        <div className="CharacterHeader-info">
          <div className="CharacterHeader-info-entry">
            <div className="CharacterHeader.info.icon">
              <ILVLSword height={16} width={16} fill={'#f8b700'} />
            </div>
            <div className="CharacterHeader-ilvl">{iLvl} ILVL</div>
          </div>
          <div className="CharacterHeader-info-entry">
            <div className="CharacterHeader.info.icon">
              <AchShield height={16} width={16} fill={'#f8b700'} />
            </div>
            <div className="CharacterHeader-ilvl">
              {props.character.characterData.miscInfo.achPoints}
            </div>
          </div>
        </div>
        <div className="CharacterHeader-info-chardetails">
          {`${props.character.characterData.miscInfo.level} ${props.character.characterData.miscInfo.wowRace} ${props.character.characterData.miscInfo.wowClass.charAt(0) + props.character.characterData.miscInfo.wowClass.substring(1).toLowerCase()} | ${props.character.characterData.miscInfo.server}`}
        </div>
      </div>
    </div>
  )
}
