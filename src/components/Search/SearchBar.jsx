import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function SearchBar(props) {
  let backendURL = "//production-env.eba-q3dkmdph.us-west-2.elasticbeanstalk.com";
  let frontendURL = "";

  function submitSearchString(searchString, setSearchResults) {
    axios
      .get(`${backendURL}/character-search/${searchString}`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        // if server returns 200 (success)
        if (res.status === 200) {
          setSearchResults(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Search">
      <input className="SearchBar"
        value={props.searchString}
        placeholder={"Enter a player name"}
        onChange={(event) => {
          props.setSearchString(event.target.value);
        }}
      />
      <button className='SearchButton'
        onClick={() => {
          if (props.searchString != "") {
            submitSearchString(props.searchString, props.setSearchResults);
          }

        }}

      />
    </div>
  )
}