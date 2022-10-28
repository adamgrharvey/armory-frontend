import React from 'react';
import isTitleAfter from '../helpers/isTitleAfter';
import getAverageItemLevel from '../helpers/getAverageItemLevel';
import { ReactComponent as AchShield } from '../images/Character/achievement-shield.69931dc20a64225f093d504faf2afb34.svg';
import { ReactComponent as ILVLSword } from '../images/Character/swords.01e57e65afe77495544524c74b7cd100.svg'

export default function CharacterHeader(props) {


  return (
    <div className='CharacterHeader'>
      <div>
        <div className='CharacterHeader-character'>
          <div className={`Logo Logo-${props.character.faction}`}></div>
          <div>
            {/* start of title diff*/}
            {isTitleAfter(props.character.title) ?
              <div>
                <div className={`CharacterHeader-name CharacterHeader--${props.character.wowClass}`}>
                  {props.character.name}
                </div>
                <div className='CharacterHeader-title'>
                  {props.character.title}
                </div>
              </div>
              :
              <div>
                <div className='CharacterHeader-title'>
                  {props.character.title}
                </div>
                <div className={`CharacterHeader-name CharacterHeader ${props.character.wowClass}`}>
                  {props.character.name}
                </div>
              </div>
            }
            {/*end of title diff */}
          </div>
        </div>
      </div>
      <div className='CharacterHeader-info'>
        <div className='CharacterHeader-info-entry'>
          <div className='CharacterHeader.info.icon'>
            <ILVLSword height={16} width={16} fill={"#f8b700"} />
          </div>
          <div className='CharacterHeader-ilvl'>
            {getAverageItemLevel(props.character.inventory)} ILVL
          </div>
        </div>
        <div className='CharacterHeader-info-entry'>
          <div className='CharacterHeader.info.icon'>
            <AchShield height={16} width={16} fill={"#f8b700"} />
          </div>
          <div className='CharacterHeader-ilvl'>
            {props.character.achPoints}
          </div>
        </div>
      </div>
    </div>
  )
}