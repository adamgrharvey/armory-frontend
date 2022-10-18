import React from 'react';
 export default function isTitleAfter(title) {
  let isAfter = false;
  if (title.slice(0,2) === 'of' || title.slice(0,3) === 'the' || title.slice(0,2) === ', ') {
    isAfter = true;
  }

  return isAfter;
 }