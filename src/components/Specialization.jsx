import getSpecData from "../helpers/getSpecData"
import { useState } from "react";

export default function Specialization(props) {

  const [specData, setSpecData] = useState(getSpecData(props.spec, props.wowClass))

  return (
    <div className={`SpecBox BG-${props.wowClass.replace(/\s/g, '')}-${specData.spec} Selected`}>
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

    </div>
  )
}