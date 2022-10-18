import React from 'react';

export default function getAverageItemLevel(character) {

  let keys = Object.keys(character);
  let sum = 0;
  let itemCount = keys.length;

  for (const key of keys) {
    sum += character[key].level;
  }

  return sum / itemCount;
}
