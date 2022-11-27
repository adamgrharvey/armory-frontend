import React from "react";
import { useEffect, useState } from "react";

export default function Homepage(props) {

  let Backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [BG, setBG] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const nextBG = function (currentIndex) {
    let max = Backgrounds.length;

    if (currentIndex === max) {
      setBG(1);
    } else {
      setBG(currentIndex + 1);
    }
  }

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

  return (
    <div className={`Homepage BG-${BG}`}>
      <div className="Splash">
        <div className="ArmoryImg">
          <img src={require(`../images/Project/test.png`)} />
        </div>
      </div>
    </div>


  )
}