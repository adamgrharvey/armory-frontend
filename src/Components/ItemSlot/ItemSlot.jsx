import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ItemSlot(props) {

  let clientID = "cbeac907587149f08732abd74d2b73f8"
  let clientSecret = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"
  const [item, setItem] = useState({});

  function sendRequest() {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://us.api.blizzard.com/data/wow/item/${props.item}?namespace=static-classic-us&locale=en_US&access_token=USpabAYi6p09Uw1fdoJ7hw2z0JkR3GFwWH`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            setItem(res.data);
            //console.log(res);
            console.log('itemData', item);
            resolve(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  useEffect(() => {
    sendRequest()
  }, [])

  return (
    item.name ?
    <div className='ItemSlot'>
      <div>
        <p>{item.name ? item.name : {}}</p>
      </div>
      <div>
        <p>Item Level {item.level ? item.level : {}}</p>
      </div>
      <div>
        <p>{item.preview_item.binding.name ? item.preview_item.binding.name : {}}</p>
      </div>
      <div>
        <p>{item.preview_item.unique_equipped ? item.preview_item.unique_equipped: {}}</p>
      </div>
      <div>
        <div>{item.inventory_type.name ? item.inventory_type.name : {}}</div>
        <div>{item.preview_item.item_subclass.name ? item.preview_item.item_subclass.name : {}}</div>
      </div>
      <div>
        <p>{item.preview_item.weapon.damage.display_string}</p>
        <p></p>
      </div>
    </div>
    :
    <div>
      no item
    </div>
    
  );

}