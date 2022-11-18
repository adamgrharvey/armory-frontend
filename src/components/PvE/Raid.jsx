import { useState, useEffect } from "react";
import { useContext } from "react";
import { WCLTokenContext } from "../../helpers/WCLContext"
import getWCLParseData from "../../helpers/WCLAPI/getWCLParseData";
import getSpecData from "../../helpers/getSpecData";

export default function Raid(props) {
  const { WCLToken, setWCLToken } = useContext(WCLTokenContext);
  const [show10, setShow10] = useState(false);
  const [show25, setShow25] = useState(false);
  const [rankings, setRankings] = useState({});
  let spec = getSpecData(props.Spec, props.characterMisc.wowClass);

  const formatClassName = function (className) {

    return (className.charAt(0) + className.substring(1).toLowerCase());

  }

  const rankColor = function (percentile) {
    if (percentile < 25) {
      return "common";
    }
    if (percentile < 50) {
      return "uncommon";
    }
    if (percentile < 75) {
      return "rare";
    }
    if (percentile < 95) {
      return 'epic';
    }
    if (percentile < 99) {
      return 'legendary';
    }
    if (percentile < 100) {
      return 'astounding';
    }
    if (percentile >= 100) {
      return 'artifact';
    }
    return "";
  }

  useEffect(() => {
    if (WCLToken !== "") {
      getWCLParseData(props.characterMisc.name, props.characterMisc.server, props.characterMisc.region, WCLToken, props.instance.WCLZoneID, setRankings, spec.spec);
    }
  }, [WCLToken])

  const getRaidProgress = function (stats, difficulty, instance) {
    let count = 0;
    let progressLevel = "low"
    for (let i = 0; i < instance.bosses.length; i++) {
      if (stats[instance[difficulty][i]] && stats[instance[difficulty][i]].value !== "0") {
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

  const getRaidSlug = function (instanceName) {

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
        <div className="InstanceHeader">
          <div className="InstanceName">
            {props.instance.name}
          </div>
          <div className="InstanceLvl">
            Level {props.instance.level}
          </div>
        </div>
        <div className="InstanceProgress">
          <div onClick={() => {
            setShow10(prev => !prev)
          }} className="tenman">
            <div className="Difficulty">
              <div className="DifficultyText">
                10-PLAYER
              </div>
              <div className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
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
                    {rankings.tenRanks && rankings.tenRanks.ranks[i] ?
                      <a className="WCLLink" href={`https://classic.warcraftlogs.com/character/${props.characterMisc.region}/${props.characterMisc.server}/${props.characterMisc.name}#boss=${rankings.tenRanks.ranks[i].encounter.id}&size=10`}>
                        <div className={`Rankings ${rankings.tenRanks ? rankColor(rankings.tenRanks.ranks[i].rankPercent) : ""}`}>
                          <div>
                            {rankings.tenRanks && rankings.tenRanks.ranks[i].rankPercent ? rankings.tenRanks.ranks[i].rankPercent.toFixed(1) : ""}
                          </div>
                          <div className="specIcon">
                            <img src={require(`../../images/PvE/specs.jpg`)} className={`tiny-icon sprite actor-sprite-${formatClassName(props.characterMisc.wowClass)}-${rankings.tenRanks && rankings.tenRanks.ranks[i].bestSpec ? rankings.tenRanks.ranks[i].bestSpec : ""}`}></img>
                          </div>
                        </div>
                      </a>
                      : <div />}

                  </div>
                )
              })}
            </div>
          </div>
          <div onClick={() => {
            setShow25(prev => !prev)
          }} className="twentyfiveman">
            <div className="Difficulty">
              <div className="DifficultyText">
                25-PLAYER
              </div>
              <div className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
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
                    {rankings.twentyfiveRanks ?
                      <a className="WCLLink" href={`https://classic.warcraftlogs.com/character/${props.characterMisc.region}/${props.characterMisc.server}/${props.characterMisc.name}#boss=${rankings.twentyfiveRanks.ranks[i].encounter.id}&size=25`}>
                        <div className={`Rankings ${rankings.twentyfiveRanks ? rankColor(rankings.twentyfiveRanks.ranks[i].rankPercent) : ""}`}>
                          <div>
                            {rankings.twentyfiveRanks && rankings.twentyfiveRanks.ranks[i].rankPercent ? rankings.twentyfiveRanks.ranks[i].rankPercent.toFixed(1) : ""}
                          </div>
                          <div className="specIcon">
                            <img src={require(`../../images/PvE/specs.jpg`)} className={`tiny-icon sprite actor-sprite-${formatClassName(props.characterMisc.wowClass)}-${rankings.twentyfiveRanks && rankings.twentyfiveRanks.ranks[i].bestSpec ? rankings.twentyfiveRanks.ranks[i].bestSpec : ""}`}></img>
                          </div>
                        </div>
                      </a> : <div />}

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