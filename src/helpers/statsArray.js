export default function statsArray (item, isOnEquipStat) {
  let stats = item.preview_item.stats ? item.preview_item.stats : [];
  let spells = item.preview_item.spells ? item.preview_item.spells : [];
  let outArr = [];

  if (!isOnEquipStat) {
    for (let i = 0; i < stats.length; i++) {
      if (!stats[i].is_equip_bonus) {
        outArr.push(stats[i].display.display_string)
      }
    }
    console.log('outArr', outArr);
    return outArr
  } else {
    for (let i = 0; i < stats.length; i++) {
      if (stats[i].is_equip_bonus) {
        outArr.push(stats[i].display.display_string)
      }
    }
    if (spells) {
      for (let i = 0; i < spells.length; i++) {
        outArr.push(spells[i].description)
      }

    }
    console.log('outArr', outArr);
    return outArr
  }
}