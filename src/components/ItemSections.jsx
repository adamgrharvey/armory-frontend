import React, { Component } from 'react';
import { useLayoutEffect } from 'react';
import ItemSection from './ItemSection';

export default function ItemSections(props) {

useLayoutEffect(() => {
  props.setLoading(false);
}, [])

  return (
    <div>
      <div className='Paperdoll'>
        <ItemSection section={"left"} character={props.character.inventory} setTooltip={props.setTooltip} />
        <ItemSection section={"right"} character={props.character.inventory} setTooltip={props.setTooltip} />
      </div>
      <div className='Paperdoll bottom'>
        <ItemSection section={"bottomLeft"} character={props.character.inventory} setTooltip={props.setTooltip} />
        <ItemSection section={"bottomRight"} character={props.character.inventory} setTooltip={props.setTooltip} />
      </div>
    </div>
  )

}