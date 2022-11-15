import { useEffect } from "react"

export default function Talents(props) {
  let none = "Talents";
  if (props.display === 'none') {
    none = 'none-talents';
  }

  return (
    <div className={`${none} ctc-tree-header`}>
      <a href={`https://www.wowhead.com/wotlk/talent-calc/embed/${props.wowClass}`}></a>
    </div>

  )
}