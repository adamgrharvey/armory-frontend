import './styles/App.css'
import './styles/Achievement.css'
import './styles/AchievementsPage.css'
import './styles/Specialization.css'
import './styles/PvE.css'
import './styles/PvP.css'
import './styles/Homepage.css'
import './styles/Nav.css'
import './styles/Submission.css'

import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccessTokenContext } from './helpers/Context'
import { WCLTokenContext } from './helpers/WCLContext'
import Character from './components/Character'
import Submit from './components/Submit'
import Homepage from './components/Homepage'

function App() {
  const [accessToken, setAccessToken] = useState('')
  const [WCLToken, setWCLToken] = useState('')
  let frontendURL = ''
  return (
    <BrowserRouter>
      <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
        <WCLTokenContext.Provider value={{ WCLToken, setWCLToken }}>
          <div className="App">
            <Routes>
              <Route path={`${frontendURL}/`} element={<Character />} />
            </Routes>
          </div>
        </WCLTokenContext.Provider>
      </AccessTokenContext.Provider>
    </BrowserRouter>
  )
}

export default App
