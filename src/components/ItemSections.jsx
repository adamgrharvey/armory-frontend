import React, { Component } from 'react';
import { useLayoutEffect } from 'react';
import ItemSection from './ItemSection';
import MoonLoader from 'react-spinners/MoonLoader';

export default function ItemSections(props) {


  return (
    <div>
      <div className='Paperdoll'>
        <ItemSection section={"left"} setCharLoading={props.setCharLoading} character={props.character.inventory} setTooltip={props.setTooltip} />
        <ItemSection section={"right"} setCharLoading={props.setCharLoading} character={props.character.inventory} setTooltip={props.setTooltip} />
      </div>
      <div className='Paperdoll bottom'>
        <ItemSection section={"bottomLeft"} setCharLoading={props.setCharLoading} character={props.character.inventory} setTooltip={props.setTooltip} />
        <ItemSection section={"bottomRight"} setCharLoading={props.setCharLoading} character={props.character.inventory} setTooltip={props.setTooltip} />
      </div>
    </div>
  )

}