export default function decapitalizeString(string) {
  return string.charAt(0) + string.substring(1).toLowerCase()
}
