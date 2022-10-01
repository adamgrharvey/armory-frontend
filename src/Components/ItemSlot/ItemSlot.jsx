import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import getAccessToken from '../../helpers/getAccessToken';
import getItemData from '../../helpers/getItemData';
import statsArray from '../../helpers/statsArray';

export default function ItemSlot(props) {

  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"
  const [accessToken, setAccessToken] = useState("");
  const [updated, setUpdated] = useState(true)
  const [item, setItem] = useState({});


  useEffect(() => {
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET, setAccessToken)
      setUpdated(true)
    }
    if (updated) {
      getItemData(props.item, accessToken);
      setUpdated(false);
    }
    
  }, [updated])


  return (
    item.name ?
      <div className='ItemSlot'>
        <div className='itemrow'>
          <p>{item.name ? item.name : {}}</p>
        </div>
        <div className='itemrow'>
          <p>Item Level {item.level ? item.level : {}}</p>
        </div>
        <div className='itemrow'>
          <p>{item.preview_item.binding.name ? item.preview_item.binding.name : {}}</p>
        </div>
        <div className='itemrow'>
          <p>{item.preview_item.unique_equipped ? item.preview_item.unique_equipped : {}}</p>
        </div>
        <div className='itemrow'>
          <div>{item.inventory_type.name ? item.inventory_type.name : {}}</div>
          <div>{item.preview_item.item_subclass.name ? item.preview_item.item_subclass.name : {}}</div>
        </div>
        <div className='itemrow'>
          <div>{item.preview_item.weapon.damage.display_string ? item.preview_item.weapon.damage.display_string : {}}</div>
          <div>{item.preview_item.weapon.attack_speed.display_string ? item.preview_item.weapon.attack_speed.display_string : {}}</div>
        </div>
        <div className='itemrow'>
          <p>{item.preview_item.weapon.dps.display_string ? item.preview_item.weapon.dps.display_string : {}}</p>
        </div>
        <div className='itemrow statrow'>
          {item.preview_item.stats ? (statsArray(item.preview_item, false).map(stat => <div className='itemrow'>{stat}</div>)) : {}}
        </div>
        <div className='itemrow'>
          {item.preview_item.durability.display_string ? item.preview_item.durability.display_string : {}}
        </div>
        <div className='itemrow'>
          {item.preview_item.requirements.playable_classes.display_string ? item.preview_item.requirements.playable_classes.display_string : {}}
        </div>
        <div className='itemrow'>
          {item.preview_item.requirements.level.display_string ? item.preview_item.requirements.level.display_string : {}}
        </div>
        <div className='itemrow statrow'>
          {item.preview_item.stats ? (statsArray(item.preview_item, true).map(stat => <div className='itemrow'>{stat}</div>)) : {}}
        </div>
        <div className='itemrow'>
          {item.preview_item.set.display_string ? item.preview_item.set.display_string : {}}
        </div>
      </div>
      :
      <div>
        no item
      </div>

  );

}