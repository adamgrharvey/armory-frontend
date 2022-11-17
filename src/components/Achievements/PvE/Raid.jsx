import { useState, useEffect } from "react";

export default function Raid(props) {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const getRaidProgress = function (stats, difficulty, instance) {
    let count = 0;
    let progressLevel = "low"
    for (let i = 0; i < instance.bosses.length; i++) {
      if (stats[instance[difficulty][i]].value !== "0") {
        count++;
      }
    }

    if (count / instance.bosses.length > 0.25) {
      progressLevel = "medium";
      if (count / instance.bosses.length > 0.8) {
        progressLevel = "high";
      }
    }

    return [count, instance.bosses.length, progressLevel];
  }

  let [progress10, bossCount10, progressLevel10] = getRaidProgress(props.stats, "10bossIDs", props.instance);
  let [progress25, bossCount25, progressLevel25] = getRaidProgress(props.stats, "25bossIDs", props.instance);

  return (
    <div className="Raid">
      <div className='NaxxImgSmall' />
      <div className="instanceheader">
        <div className="instanceName">
          {props.instance.name}
        </div>
        <div className="instanceLvl">
          Level {props.instance.level}
        </div>
      </div>
      <div className="instanceprogress">
        <div className="10man">
          <div>
            <div>
              10man
            </div>
            <div onClick={() => {
              setShow1(prev => !prev)
            }} className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
              <div className="Progressbar-progress" data-progresslevel={progressLevel10} style={{ width: `${progress10 / bossCount10 * 100}%` }}></div>
              <div class="Progressbar-content"><div class="Progressbar-fraction">{`${progress10} / ${bossCount10}`}</div></div>
            </div>
          </div>
          <div className={`statistics${show1 ? "" : " none"}`}>
            {props.instance.bosses.map((i, index) => {
              return (
                <div>
                  {`${i} x ${props.stats[props.instance["10bossIDs"][index]].value}`}
                </div>
              )
            })}
          </div>

        </div>
        <div className="25man">
          <div>
            <div>
              25man
            </div>
            <div onClick={() => {
              setShow2(prev => !prev)
            }} className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
              <div className="Progressbar-progress" data-progresslevel={progressLevel25} style={{ width: `${progress25 / bossCount25 * 100}%` }}></div>
              <div class="Progressbar-content"><div class="Progressbar-fraction">{`${progress25} / ${bossCount25}`}</div></div>
            </div>
          </div>
          <div className={`statistics${show2 ? "" : " none"}`}>
            {props.instance.bosses.map((i, index) => {
              return (
                <div>
                  {`${i} x ${props.stats[props.instance["25bossIDs"][index]].value}`}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}