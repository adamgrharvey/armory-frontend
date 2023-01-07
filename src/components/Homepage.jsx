import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./Search/SearchBar";
import SearchResults from "./Search/SearchResults";
import Nav from "./Nav";

export default function Homepage(props) {
  let backendURL = "http://localhost:3000";
  let frontendURL = "";
  let Backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [BG, setBG] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const nextBG = function (currentIndex) {
    let max = Backgrounds.length;

    if (currentIndex === max) {
      setBG(1);
    } else {
      setBG(currentIndex + 1);
    }
  }

  useEffect(() => {
    if (searchString.length > 1) {
      submitSearchString(searchString, setSearchResults);
    } else {
      setSearchResults([]);
    }
  }, [searchString])

  useEffect(() => {
    if (searchResults.length !== 0) {
      //console.log(searchResults);
    }
  }, [searchResults])



  useEffect(() => {
    let interval = null;
    if (seconds === 30) {
      setSeconds(0);
      nextBG(BG);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function submitSearchString(searchString, setSearchResults) {
    axios
      .get(`${backendURL}/character-search/${searchString}`, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        // if server returns 200 (success)
        if (res.status === 200) {
          setSearchResults(res.data);
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  return (
    <div>
      <Nav />
      <div className={`HomepageBG BG-${BG}`} />
      <div className="Splash">
        <div className="ArmoryLogo">
          <div className="ArmoryImg">
            <img src={require(`../images/Project/test-crop.png`)} />
          </div>
          <div className="ArmoryImgClassic">
            <img src={require(`../images/Project/CLASSIC.png`)} />
          </div>
        </div>
        <SearchBar searchString={searchString} setSearchString={setSearchString} setSearchResults={setSearchResults}/>
        <SearchResults searchResults={searchResults}/>
      </div>
    </div>



  )
}