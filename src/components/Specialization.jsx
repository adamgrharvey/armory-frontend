import getSpecData from "../helpers/getSpecData"
import { useState } from "react";

export default function Specialization(props) {

  let selectionData = {};

  const changeHighlight = function () {
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
      primaryHighlight: "",
      secondaryHighlight: "IsSelected"
    }))

  }

  const setPrimaryHighlight = function () {

    props.setSpecSelected((prev) => ({
      ...prev,
      talentString: props.characterData.primarySpecString,
      primaryHighlight: "IsSelected",
      secondaryHighlight: ""
    }))

  }

  if (props.position === "Primary") {
    selectionData = { primaryHighlight: "IsSelected", secondaryHighlight: "" }
  } else {
    selectionData = { primaryHighlight: "", secondaryHighlight: "IsSelected" }
  }

  const [specData, setSpecData] = useState(getSpecData(props.spec, props.wowClass))

  let hidden = "";
  if (props.position === "Secondary" && specData.tree1 === 0 && specData.tree2 === 0 && specData.tree3 === 0) {
    hidden = "hide"
  }

  return (
    <button onClick={() => changeHighlight()}
      className={`SpecBox ${hidden} BG-${props.wowClass.replace(/\s/g, '')}-${specData.spec} ${props.selected} CharacterHeader--${props.wowClass}`}
    >
      <div className="SpecNameCount">
        <div className={`SpecIconandName`}>
          <div className={`Spec Spec-${props.wowClass.replace(/\s/g, '')}-${specData.spec}`} />
          <div className="SpecNameCount">
            <div>
              {specData.spec}
            </div>
            <div>
              {`${specData.tree1} / ${specData.tree2} / ${specData.tree3}`}
            </div>
          </div>
        </div>
      </div>
    </button >
  )
}