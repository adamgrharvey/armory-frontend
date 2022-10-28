
export default function getAverageItemLevel(character) {
  let keys = Object.keys(character);
  let sum = 0;
  let itemCount = 0;
  console.log(keys);
  console.log(character);

  for (const key of keys) {
    if (key !== '3' && key !== '18') {
      
      sum += character[key].level;
      itemCount++;
    }

  }
  return Math.round(sum / itemCount);
}
