import React, { Fragment } from 'react';
import statsArray from '../helpers/statsArray';
import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';
import getPlayableClasses from '../helpers/getPlayableClasses';
import getItemNameFromID from '../helpers/getItemNameFromID';

export default function Tooltip(props) {

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  return (
    props.item ?
      <div className='Tooltip'>
        <b className={`itemrow ItemSlot ItemDetails ${props.item.preview_item.quality.name}`}>{props.item.name}</b>
        <div className='itemrow itemlevelORset'>Item Level {props.item.level}</div>
        {/*start of binding type */}
        <div className='itemrow'>{props.item.preview_item.binding ? props.item.preview_item.binding.name : ""}</div>
        {/*start of uniqueness */}
        <div className='itemrow'>{props.item.preview_item.unique_equipped ? props.item.preview_item.unique_equipped : ""}</div>
        {/*start of armor type */}
        <div className='itemrow'>
          <div>
            {props.item.preview_item.inventory_type.name}
          </div>
          <div>
            {/* dont show subclass for Back, Trinket, Finger, Neck, or Shirt. */}
            {(props.item.preview_item.inventory_type.name != "Back" && props.item.preview_item.inventory_type.name != "Trinket" && props.item.preview_item.inventory_type.name != "Finger" && props.item.preview_item.inventory_type.name != "Neck" && props.item.preview_item.inventory_type.name != "Shirt") ? props.item.preview_item.item_subclass.name : ""}
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
          {props.item.preview_item.weapon ? <div>{props.item.preview_item.weapon.dps.display_string}</div> : <div />}
        </div> {/*end of weapon */}
        {/*armor stat */}
        <div className='itemrow'>{props.item.preview_item.armor ? props.item.preview_item.armor.display.display_string : ""}</div>
        {/*start of +xyz stats */}
        <div className='itemrow statrow'>
          {props.item.preview_item.stats ? statsArray(props.item, false).map((stat, i) => <div key={i}>{stat}</div>) : ""}
        </div>
        {/*start of durability */}
        <div className='itemrow'>{props.item.preview_item.durability ? props.item.preview_item.durability.display_string : ""}</div>
        {/*start of requirements */}
        <div className='itemrow classes'>
          {props.item.preview_item.requirements && props.item.preview_item.requirements.playable_classes ?
            getPlayableClasses(props.item)
            : ""}
        </div>
        <div className='itemrow'>
          {props.item.preview_item.requirements && props.item.preview_item.requirements.level ? props.item.preview_item.requirements.level.display_string : ""}
        </div>
        {/*start of equip stats */}
        <div className='itemrow statrow equipstats'>
          {props.item.preview_item.stats ? statsArray(props.item, true).map((stat, i) => <div className='itemrow' key={i}>{stat}</div>) : ""}
        </div>
        {/*start of SET bonuses */}
        <div>
          {props.item.preview_item.set ?
            <Fragment>
              <div className='itemrow itemlevelORset'>

                <Fragment>
                  <br />
                  {props.item.preview_item.set.display_string}
                </Fragment>
              </div>
              <div className='itemrow setrow setitems'>
                {props.item.preview_item.set.items.map((item) =>
                  <div className='itemrow'>{item.item.name}</div>
                )}
              </div>
              <br />
              <div className='itemrow setrow'>
                {props.item.preview_item.set.effects.map((effect) =>
                  <div className='itemrow'>{effect.display_string}</div>
                )}
              </div>
            </Fragment>
            : ""}

          {/*END of SET bonuses */}
        </div>
        {/*Start of vendor price */}
        <div>
          <div className='itemrow'>{props.item.sell_price > 0 ? props.item.preview_item.unique_equipped : ""}</div>
        </div>
      </div>
      :
      <div>
        no item
      </div>

  );

}