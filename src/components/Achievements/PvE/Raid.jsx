import { useState, useEffect } from "react";

export default function Raid(props) {

  const [show10, setShow10] = useState(false);
  const [show25, setShow25] = useState(false);

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

  const getRaidSlug = function(instanceName) {

    switch (true) {
      case instanceName === "Naxxramas": return "Naxx";
      case instanceName === "The Obsidian Sanctum": return "OS";
      case instanceName === "The Eye of Eternity": return "Eye";
      case instanceName === "Vault of Archavon": return "Naxx";
      case instanceName === "Onyxia's Lair": return "Ony";
      case instanceName === "Ulduar": return "Ulduar";
      case instanceName === "Trial of the Crusader": return "TotC";
      case instanceName === "Icecrown Citadel": return "ICC";
      case instanceName === "The Ruby Sanctum": return "RS";
      default: return "ERROR";
    }
    
  }

  let instanceSlug = getRaidSlug(props.instance.name);

  let [progress10, bossCount10, progressLevel10] = getRaidProgress(props.stats, "10bossIDs", props.instance);
  let [progress25, bossCount25, progressLevel25] = getRaidProgress(props.stats, "25bossIDs", props.instance);

  return (
    <div className="Raid">
      <div className={`${instanceSlug}ImgSmall`} />
      <div className="Details">
        <div className="instanceheader">
          <div className="InstanceName">
            {props.instance.name}
          </div>
          <div className="InstanceLvl">
            Level {props.instance.level}
          </div>
        </div>
        <div className="InstanceProgress">
          <div className="tenman">
            <div className="Difficulty">
              <div className="DifficultyText">
                10-PLAYER
              </div>
              <div onClick={() => {
                setShow10(prev => !prev)
              }} className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
                <div className="Progressbar-progress" data-progresslevel={progressLevel10} style={{ width: `${progress10 / bossCount10 * 100}%` }}></div>
                <div className="Progressbar-border" />
                <div className="Progressbar-content">
                  <div className="Progressbar-fraction">
                    {`${progress10} / ${bossCount10}`}
                  </div>
                </div>
              </div>
            </div>
            <div className={`Statistics${show10 ? "" : " HideDiffStats"}`}>
              {props.instance.bosses.map((i, index) => {
                return (
                  <div className="Statistic">
                    <div>
                    {`${props.stats[props.instance["10bossIDs"][index]].value} x` + '\xa0\xa0' + `${i}`}
                    </div>
                    <div>
                      rank
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="twentyfiveman">
            <div className="Difficulty">
              <div className="DifficultyText">
                25-PLAYER
              </div>
              <div onClick={() => {
                setShow25(prev => !prev)
              }} className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
                <div className="Progressbar-progress" data-progresslevel={progressLevel25} style={{ width: `${progress25 / bossCount25 * 100}%` }}></div>
                <div className="Progressbar-border" />
                <div className="Progressbar-content">
                  <div className="Progressbar-fraction">
                    {`${progress25} / ${bossCount25}`}
                  </div>
                </div>
              </div>
            </div>
            <div className={`Statistics${show25 ? "" : " HideDiffStats"}`}>
              {props.instance.bosses.map((i, index) => {
                return (
                  <div className="Statistic">
                    <div>
                      {`${props.stats[props.instance["25bossIDs"][index]].value} x` + '\xa0\xa0' + `${i}`}
                    </div>
                    <div>
                      rank
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}