export default function formatCharStats(charStats, allStats) {
  let newAllStats = {}
  let allStatsKeys = Object.keys(allStats)
  //console.log(charStats);

  for (const key of allStatsKeys) {
    newAllStats[allStats[key].stat_id] = allStats[key]
    if (charStats[allStats[key].stat_id] && charStats[allStats[key].stat_id].value) {
      newAllStats[allStats[key].stat_id].value = charStats[allStats[key].stat_id].value
    } else {
      newAllStats[allStats[key].stat_id].value = null
    }
    if (charStats[allStats[key].stat_id] && charStats[allStats[key].stat_id].dateCompleted) {
      newAllStats[allStats[key].stat_id].dateCompleted =
        charStats[allStats[key].stat_id].dateCompleted
    }
  }
  //console.log('newall', newAllStats);

  return newAllStats
}
