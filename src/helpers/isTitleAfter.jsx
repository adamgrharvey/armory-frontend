
 export default function isTitleAfter(title) {
  if (title === null) {
    return false;
  }
  let isAfter = false;
  if (title.slice(0,2) === 'of' || title.slice(0,3) === 'the' || title.slice(0,2) === ', ') {
    isAfter = true;
  }

  return isAfter;
 }