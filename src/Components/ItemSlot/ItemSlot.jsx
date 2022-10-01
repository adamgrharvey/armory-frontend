import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ItemSlot(props) {

  let BNET_ID = "cbeac907587149f08732abd74d2b73f8"
  let BNET_SECRET = "UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC"
  const [accessToken, setAccessToken] = useState("");
  const [item, setItem] = useState({});

  //curl -u cbeac907587149f08732abd74d2b73f8:UvGoljFYvvQNhQgOw37mQs0yzjXqIGzC} -d grant_type=client_credentials https://oauth.battle.net/token
  function getAccessToken(clientID, clientSecret) {
    const queryString = require('query-string');
    
    axios.post('https://oauth.battle.net/token', queryString.stringify({ 'grant_type': 'client_credentials' }), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      auth:
      {
        username: clientID,
        password: clientSecret
      },
    })
      .then((res) => {
        console.log(res)
        setAccessToken(res.data.access_token);
      })
      .catch((err) => {
        console.log(err)
      })
  }


  function sendRequest(accessToken) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://us.api.blizzard.com/data/wow/item/${props.item}?namespace=static-classic-us&locale=en_US&access_token=${accessToken}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            setItem(res.data);
            //console.log(res);
            console.log('itemData', res.data);
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
    if (accessToken === "") {
      getAccessToken(BNET_ID, BNET_SECRET)
    }
    sendRequest(accessToken);
  }, [])


  const statsArray = function (item, isOnEquipStat) {
    let stats = item.stats
    let spells = item.spells
    let outArr = [];

    if (!isOnEquipStat) {
      for (let i = 0; i < stats.length; i++) {
        if (!stats[i].is_equip_bonus) {
          outArr.push(stats[i].display.display_string)
        }
      }
      return outArr
    } else {
      for (let i = 0; i < stats.length; i++) {
        if (stats[i].is_equip_bonus) {
          outArr.push(stats[i].display.display_string)
        }
      }
      for (let i = 0; i < spells.length; i++) {
        outArr.push(spells[i].description)
      }
      return outArr
    }
  }

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