import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parseSubmissionData from '../helpers/backend/parseSubmissionData';
import submitStatisticData from '../helpers/backend/submitStatisticData';
export default function Submit(props) {
  let backendURL = "http://localhost:3000";
  let frontendURL = "";
  const [characterString, setCharacterString] = useState("");
  const navigate = useNavigate();

  function submitCharacterData(characterString) {


    let characterData = parseSubmissionData(characterString);
    let submissionData = {
      name: characterData.miscInfo.name,
      server: characterData.miscInfo.server,
      region: characterData.miscInfo.region,
      character_string: characterData.characterString,
      class_id: characterData.miscInfo.wowClassID,
      level: characterData.miscInfo.level
    }


    submitCharacterString(submissionData)
      .then((res) => {
        console.log(res);
        if (res.status === 200)
          submitStatisticData(characterData)
            .then((res) => {
              console.log(res);
              if (res.status === 200)
                navigate(`${frontendURL}/character/${submissionData.region}/${submissionData.server}/${submissionData.name}`);
            })
            .catch(err => {
              console.log(err);
            })
      })
      .catch(err => {
        console.log(err);
      })



  }

  function submitCharacterString(submissionData) {


    return new Promise((resolve, reject) => {
      axios
        .post(`${backendURL}/submit`, submissionData, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            resolve(res);
            console.log(res);
            //
          } else {
            reject(res);
          }

        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }




  return (
    <div>
      <label>
        Character String
      </label>
      <input
        value={characterString}
        placeholder={"Armory Addon string goes here..."}
        onChange={(event) => {
          setCharacterString(event.target.value);
        }}
      />
      <button
        onClick={() => {
          submitCharacterData(characterString);
        }}

      />
    </div>
  )
}

