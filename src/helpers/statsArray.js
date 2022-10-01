export default function statsArray (item, isOnEquipStat) {
  let stats = item.stats
  let spells = item.spells
  let outArr = [];

  if (!isOnEquipStat) {
    for (let i = 0; i < stats.length; i++) {
      if (!stats[i].is_equip_bonus) {
        outArr.push(stats[i].display.display_string)
      }
    }
    return outArr
  } else {
    for (let i = 0; i < stats.length; i++) {
      if (stats[i].is_equip_bonus) {
        outArr.push(stats[i].display.display_string)
      }
    }
    for (let i = 0; i < spells.length; i++) {
      outArr.push(spells[i].description)
    }
    return outArr
  }
}