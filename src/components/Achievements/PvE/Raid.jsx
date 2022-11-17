export default function Raid(props) {

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
        <div className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
          <div className="Progressbar-progress" data-progresslevel={progressLevel10} style={{ width: `${progress10 / bossCount10 * 100}%` }}></div>
          <div class="Progressbar-content"><div class="Progressbar-fraction">{`${progress10} / ${bossCount10}`}</div></div>
        </div>
        <div className="Progressbar Progressbar--leftText Progressbar--levelColor Progressbar--fraction" data-queryselectoralways-ignore="true">
          <div className="Progressbar-progress" data-progresslevel={progressLevel25} style={{ width: `${progress25 / bossCount25 * 100}%` }}></div>
          <div class="Progressbar-content"><div class="Progressbar-fraction">{`${progress25} / ${bossCount25}`}</div></div>
        </div>


        {props.instance.bosses.map((i, index) => {
          return (
            <div>
              {`${i} ${props.stats[props.instance["25bossIDs"][index]].value}`}
            </div>
          )



        })}
      </div>
    </div>
  )
}