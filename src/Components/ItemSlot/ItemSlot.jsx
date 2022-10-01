import React from 'react';
import statsArray from '../../helpers/statsArray';

export default function ItemSlot(props) {

  return (
    props.item.name ?
      <div className='ItemSlot'>
        <div className='itemrow'>
          <p>{props.item.name ? props.item.name : {}}</p>
        </div>
        <div className='itemrow'>
          <p>Item Level {props.item.level ? props.item.level : {}}</p>
        </div>
        <div className='itemrow'>
          <p>{props.item.preview_item.binding.name ? props.item.preview_item.binding.name : {}}</p>
        </div>
        <div className='itemrow'>
          <p>{props.item.preview_item.unique_equipped ? props.item.preview_item.unique_equipped : {}}</p>
        </div>
        <div className='itemrow'>
          <div>{props.item.inventory_type.name ? props.item.inventory_type.name : {}}</div>
          <div>{props.item.preview_item.item_subclass.name ? props.item.preview_item.item_subclass.name : {}}</div>
        </div>
        <div className='itemrow'>
          <div>{props.item.preview_item.weapon.damage.display_string ? props.item.preview_item.weapon.damage.display_string : {}}</div>
          <div>{props.item.preview_item.weapon.attack_speed.display_string ? props.item.preview_item.weapon.attack_speed.display_string : {}}</div>
        </div>
        <div className='itemrow'>
          <p>{props.item.preview_item.weapon.dps.display_string ? props.item.preview_item.weapon.dps.display_string : {}}</p>
        </div>
        <div className='itemrow statrow'>
          {props.item.preview_item.stats ? (statsArray(props.item.preview_item, false).map(stat => <div className='itemrow'>{stat}</div>)) : {}}
        </div>
        <div className='itemrow'>
          {props.item.preview_item.durability.display_string ? props.item.preview_item.durability.display_string : {}}
        </div>
        <div className='itemrow'>
          {props.item.preview_item.requirements.playable_classes.display_string ? props.item.preview_item.requirements.playable_classes.display_string : {}}
        </div>
        <div className='itemrow'>
          {props.item.preview_item.requirements.level.display_string ? props.item.preview_item.requirements.level.display_string : {}}
        </div>
        <div className='itemrow statrow'>
          {props.item.preview_item.stats ? (statsArray(props.item.preview_item, true).map(stat => <div className='itemrow'>{stat}</div>)) : {}}
        </div>
        <div className='itemrow'>
          {props.item.preview_item.set.display_string ? props.item.preview_item.set.display_string : {}}
        </div>
      </div>
      :
      <div>
        no item
      </div>

  );

}