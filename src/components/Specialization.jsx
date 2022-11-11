import getSpecData from "../helpers/getSpecData"
import { useState } from "react";

export default function Specialization(props) {

  let selectionData = {};

  const changeHighlight = function() {
    if (props.position === 'Primary') {
      setPrimaryHighlight();
    } else {
      setSecondaryHighlight();
    }
  }

  const setSecondaryHighlight = function () {

    props.setSpecSelected((prev) => ({
      ...prev, 
      talentString: props.characterData.secondarySpecString,
      primaryHighlight: "none",
      secondaryHighlight: "IsSelected"
    }))

  }

  const setPrimaryHighlight = function () {

    props.setSpecSelected((prev) => ({
      ...prev, 
      talentString: props.characterData.primarySpecString,
      primaryHighlight: "IsSelected",
      secondaryHighlight: "none"
    }))

  }

  if (props.position === "Primary") {
    selectionData = { primaryHighlight: "IsSelected", secondaryHighlight: "none" }
  } else {
    selectionData = { primaryHighlight: "none", secondaryHighlight: "IsSelected" }
  }

  const [specData, setSpecData] = useState(getSpecData(props.spec, props.wowClass))

  return (
    <button onClick={() => changeHighlight()}
      className={`SpecBox BG-${props.wowClass.replace(/\s/g, '')}-${specData.spec} ${props.selected}`}

    >
      <div className={`Spec Spec-${props.wowClass.replace(/\s/g, '')}-${specData.spec}`}>
      </div>
      <div className="SpecNameCount">
        <div>
          {specData.spec}
        </div>
        <div>
          {`${specData.tree1} / ${specData.tree2} / ${specData.tree3}`}
        </div>
      </div>

    </button >
  )
}