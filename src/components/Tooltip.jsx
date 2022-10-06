import React from 'react';
import statsArray from '../helpers/statsArray';
import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';

export default function Tooltip(props) {

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  return (
    props.item ?
      <div className='Tooltip'>
        <b className='itemrow'>{props.item.name}</b>
        <p className='itemrow'>Item Level {props.item.level}</p>
        <p className='itemrow'>{props.item.preview_item.binding.name}</p>
        <div className='itemrow'>
          <p>
            {props.item.preview_item.inventory_type.name}
          </p>
          <p>
            {props.item.preview_item.item_subclass.name}
          </p>
        </div>
        
      </div>

      :
      <div>
        no item
      </div>

  );

}