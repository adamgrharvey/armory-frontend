import React from 'react';
import statsArray from '../helpers/statsArray';
import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';

export default function Tooltip(props) {

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  return (
    props.item ?
      <div className='Tooltip'>
        <b className={`itemrow ItemSlot ItemDetails ${props.item.preview_item.quality.name}`}>{props.item.name}</b>
        <div className='itemrow itemlevel'>Item Level {props.item.level}</div>
        <div className='itemrow'>{props.item.preview_item.binding ? props.item.preview_item.binding.name : ""}</div>
        <div className='itemrow'>
          <div>
            {props.item.preview_item.inventory_type.name}
          </div>
          <div>
            {props.item.preview_item.item_subclass.name}
          </div>
        </div>
        {/*start of weapon details if its a weapon */}
        <div>
          {props.item.preview_item.weapon ? <div className='itemrow'>
            <div>
              {props.item.preview_item.weapon.damage.display_string}
            </div>
            <div>
              {props.item.preview_item.weapon.attack_speed.display_string}
            </div>
          </div> : <div />}
        </div>
        <div className='itemrow'>
        {props.item.preview_item.weapon ? <div>{props.item.preview_item.weapon.dps.display_string}</div> : <div/>}
        </div>
        <div className='itemrow'>{props.item.preview_item.armor ? props.item.preview_item.armor.display.display_string : ""}</div>
        <div className='itemrow statrow'>
          {props.item.preview_item.stats ? statsArray(props.item, false).map((stat, i) => <div key={i}>{stat}</div>) : ""}
        </div>
        <div className='itemrow'>{props.item.preview_item.durability ? props.item.preview_item.durability.display_string : ""}</div>
        <div className='itemrow'>{props.item.preview_item.requirements && props.item.preview_item.requirements.level ? props.item.preview_item.requirements.level.display_string : ""}</div>
        <div className='itemrow statrow equipstats'>
          {props.item.preview_item.stats ? statsArray(props.item, true).map((stat, i) => <div className='itemrow' key={i}>{stat}</div>) : ""}
        </div>

      </div>

      :
      <div>
        no item
      </div>

  );

}