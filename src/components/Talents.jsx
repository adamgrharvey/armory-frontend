import { useEffect } from "react"

export default function Talents(props) {
  console.log(props.talents);
  let none = "";
  if (props.display === 'none') {
    none = 'none-talents';
  }

  return (
    <div className={`${none}`}>
      <a href={`https://www.wowhead.com/wotlk/talent-calc/embed/${props.wowClass}/${props.talents}`}></a>
    </div>

  )
}