import React from 'react';
import isTitleAfter from '../helpers/isTitleAfter';
import getAverageItemLevel from '../helpers/getAverageItemLevel';

export default function CharacterHeader(props) {


  return (
    <div>
          <div>
            <div className='CharacterHeader-character'>
              <div className={`Logo Logo-${props.character.faction}`}></div>
              <div>
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
                    <div className={`CharacterHeader-name CharacterHeader--${props.character.wowClass}`}>
                      {props.character.name}
                    </div>
                  </div>}
              </div>

            </div>
          </div>
          <p className='CharacterHeader-ilvl'>{getAverageItemLevel(props.character.inventory)} ILVL</p>
        </div>
  )
}