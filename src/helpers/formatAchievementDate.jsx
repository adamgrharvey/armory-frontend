export default function formatAchievementDate(date) {
  let year = date.substring(2, 4)
  let month = date.substring(4, 6)
  if (month[0] == '0') {
    month = month[1]
  }
  let day = date.substring(6, 8)

  return `${month}/${day}/${year}`
}
