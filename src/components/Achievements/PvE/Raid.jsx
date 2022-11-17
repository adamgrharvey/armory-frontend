export default function Raid(props) {

  const getRaidProgress = function (stats, difficulty, instance) {
    let count = 0;
    for (let i = 0; i < instance.bosses.length; i++) {
      if (stats[instance[difficulty][i]].value !== "0") {
        count++;
      }
    }
    return [count, instance.bosses.length];
  }
  let [progress10, bossCount10] = getRaidProgress(props.stats, "10bossIDs", props.instance);
  let [progress25, bossCount25] = getRaidProgress(props.stats, "25bossIDs", props.instance);

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
        <div>
          {`10man: ${progress10} / ${bossCount10}`}
          
        </div>
        <div>
          {`25man: ${progress25} / ${bossCount25}`}
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