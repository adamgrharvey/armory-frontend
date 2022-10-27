
export default function getAverageItemLevel(character) {
  let keys = Object.keys(character);
  let sum = 0;
  let itemCount = keys.length;

  for (const key of keys) {
    if (key < 20 && key !== 3 && key !== 18)
    sum += character[key].level;
  }

  return Math.round(sum / itemCount);
}
