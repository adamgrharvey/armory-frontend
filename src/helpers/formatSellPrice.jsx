import React from 'react'
import reactStringReplace from 'react-string-replace'

export default function formatSellPrice(price) {
  let outString = 'Sell Price: '
  let moneyArr = []
  let moneyArrChars = ['moneygold', 'moneysilver', 'moneycopper']
  moneyArr[0] = Math.floor(price / 10000) //24
  moneyArr[1] = Math.floor((price - moneyArr[0] * 10000) / 100) //31
  moneyArr[2] = price - moneyArr[0] * 10000 - moneyArr[1] * 100

  for (let i = 0; i < moneyArrChars.length; i++) {
    if (moneyArr[i] > 0) {
      outString += `${moneyArr[i]}${moneyArrChars[i]}`
    }
  }
  for (const [index, numeration] of moneyArrChars.entries()) {
    if (moneyArr[index] > 0) {
      outString = reactStringReplace(outString, numeration, (match, i) => (
        <span key={index} className={`${numeration}`}>
          {}
        </span>
      ))
    }
  }
  return outString
}
