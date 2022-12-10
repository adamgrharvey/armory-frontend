import { useEffect } from "react"

export default function Talents(props) {
  let wowClass = props.wowClass;
  if (wowClass.toUpperCase() === "DEATHKNIGHT") {
    wowClass = "death-knight";
  }
  let none = "Talents";
  if (props.display === "") {
    none = 'none-talents';
  }

  return (
    <div className={`${none} ctc-tree-header`}>
      <a href={`https://www.wowhead.com/wotlk/talent-calc/embed/${wowClass}/${props.talents}`}></a>
    </div>

  )
}