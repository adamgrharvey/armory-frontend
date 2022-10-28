
export default function getAverageItemLevel(character) {
  let keys = Object.keys(character);
  let sum = 0;
  let itemCount = 0;

  for (const key of keys) {
    if (key !== '3' && key !== '18') {
      if (key === '15' && character[key].inventory_type.name === 'Two-Hand') {
        sum += character[key].level;
      }
      sum += character[key].level;
      itemCount++;
    }

  }
  return Math.round(sum / itemCount);
}
