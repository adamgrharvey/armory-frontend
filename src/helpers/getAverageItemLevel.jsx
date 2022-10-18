import React from 'react';

export default function getAverageItemLevel(character) {
  console.log(character);
  let keys = Object.keys(character);
  let sum = 0;
  let itemCount = keys.length;

  for (const key of keys) {
    if (key < 20)
    sum += character[key].level;
    console.log(sum);
  }

  return sum / itemCount;
}
