
export default function Raid(props) {

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