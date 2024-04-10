import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import parseSubmissionData from '../helpers/backend/parseSubmissionData'
import submitStatisticData from '../helpers/backend/submitStatisticData'
import MoonLoader from 'react-spinners/MoonLoader'
export default function Submit(props) {
  const [loading, setLoading] = useState(false)
  let backendURL = 'http://localhost:3000'
  let frontendURL = ''
  const [characterString, setCharacterString] = useState('')
  const navigate = useNavigate()

  function submitCharacterData(characterString) {
    let characterData = parseSubmissionData(characterString)
    let submissionData = {
      name: characterData.miscInfo.name,
      server: characterData.miscInfo.server,
      region: characterData.miscInfo.region,
      character_string: characterData.characterString,
      class_id: characterData.miscInfo.wowClassID,
      level: characterData.miscInfo.level,
    }

    console.log('submissionData:', submissionData)
    console.log('characterData:', characterData)

    submitCharacterString(submissionData)
      .then((res) => {
        console.log(res)
        if (res.status === 200)
          submitStatisticData(characterData)
            .then((res) => {
              console.log(res)
              if (res.status === 200)
                navigate(
                  `${frontendURL}/character/${submissionData.region}/${submissionData.server}/${submissionData.name}`
                )
            })
            .catch((err) => {
              console.log(err)
            })
      })
      .catch((err) => {
        console.log(err)
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
            resolve(res)
            console.log(res)
            //
          } else {
            reject(res)
          }
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  return (
    <div>
      <Nav />
      <div className="SubmissionPage">
        <div className="HowTo">
          <div>
            <body className="StepEntry">
              <span className="StepText">Step 1:</span> Download the Classic Armory Addon from ____
            </body>
            <body className="StepEntry">
              <span className="StepText">Step 2:</span> Use the in-game chat command "/Armory" to
              prompt the window.
            </body>
            <body className="StepEntry">
              <span className="StepText">Step 3:</span> Copy (Ctrl-C or Cmd-C) the Character string
              from the game, and paste (Ctrl-V or Cmd-V) in the input field here.
            </body>
            <body className="StepEntry">
              <span className="StepText">Step 4:</span> Submit your character and allow a moment for
              it to be processed.
            </body>
          </div>
        </div>
        {loading ? (
          <div className="Submit">
            <div className="Loader">
              <MoonLoader color={'#5118a7'} width={'50%'} height={8} />
            </div>
            <div className="SubmissionTextLoading">Uploading your character...</div>
          </div>
        ) : (
          <div className="Submit">
            <label className="SubmissionText">Character String</label>
            <div className="SubmitArea">
              <textarea
                className="SubmissionInput"
                value={characterString}
                placeholder={'Paste your Character string here...'}
                onChange={(event) => {
                  setCharacterString(event.target.value)
                }}
              />
              <button
                className="SubmissionButton"
                onClick={() => {
                  if (characterString != '') {
                    setLoading(true)
                    submitCharacterData(characterString)
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
