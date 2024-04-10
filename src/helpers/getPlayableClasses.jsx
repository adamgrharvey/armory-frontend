import React from 'react'
import reactStringReplace from 'react-string-replace'

export default function getPlayableClasses(item) {
  let classArr = item.preview_item.requirements.playable_classes.links
  let outString = item.preview_item.requirements.playable_classes.display_string

  for (const wowClass of classArr) {
    outString = reactStringReplace(outString, wowClass.name, (match) => (
      <span key={wowClass.id} className={`c${wowClass.id}`}>
        {'\u00a0' + match}
      </span>
    ))
  }

  return outString
}
