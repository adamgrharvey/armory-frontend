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
    <div>
      <div>
        <p>{item.name}</p>
      </div>
      <div>
        <p>Item Level {item.level}</p>
      </div>
      <div>
        <p>{item.preview_item.binding.name}</p>
      </div>
      <div>
        <p>{item.name}</p>
      </div>
      <div>
        <p>{item.name}</p>
      </div>
      <div>
        <p>{item.name}</p>
      </div>
    </div>

  );

}