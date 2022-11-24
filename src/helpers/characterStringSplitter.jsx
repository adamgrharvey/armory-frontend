import classIDtoName from "./classIDtoName";
import getFactionFromRace from "./getFactionFromRace";
import formatSpecGlyphs from "./backend/formatSpecGlyphs";

export default function characterStringSplitter(characterString, setCharacter, setCharacterExists, setLoading, setSpecSelected) {
  let [itemString, miscString, primarySpecString, secondarySpecString, activeSpec, PvPString, statisticString] = characterString.split("!");
  let miscArray = miscString.split(".");
  if (setCharacterExists) {
    setCharacterExists(true);
  }

  if (activeSpec === "2") {
    setSpecSelected({
      selected: "Secondary",
      talentString: formatSpecGlyphs(secondarySpecString),
      primaryHighlight: "",
      secondaryHighlight: "IsSelected"
    })
  } else {
    setSpecSelected({
      selected: "Primary",
      talentString: formatSpecGlyphs(primarySpecString),
      primaryHighlight: "IsSelected",
      secondaryHighlight: ""
    })
  }
  
  let charStats = statisticStringSplitter(statisticString);

  if (miscArray[3] === "null") {
    miscArray[3] = null;
  }

  let miscInfo = {
    name: miscArray[0],
    server: miscArray[1],
    region: miscArray[2],
    title: miscArray[3],
    wowRace: miscArray[6],
    level: Number(miscArray[7]),
    wowClassID: Number(miscArray[4]),
    wowClass: classIDtoName(miscArray[4]),
    faction: getFactionFromRace(miscArray[6]),
    achPoints: Number(miscArray[5]),
  }
  let characterData = {
    name: miscInfo.name[0].toUpperCase() + miscInfo.name.substring(1).toLowerCase(),
    characterString: characterString,
    primarySpecString: formatSpecGlyphs(primarySpecString),
    secondarySpecString: formatSpecGlyphs(secondarySpecString),
    activeSpec: activeSpec,
    PvP: PvPStringSplitter(PvPString),
    itemString: itemString,
    miscInfo: miscInfo,
    statisticString: statisticString,
    statistics: charStats
  }


  setCharacter((prev) => (
    { ...prev, characterData }
  ))
  if (setLoading) {
    setLoading(true);
  }
  

}

const PvPStringSplitter = function(PvPString) {
  let PvPArr = PvPString.split(":");
  let brackets = ["2v2", "3v3", "5v5"];
  let PvP = {
    "2v2": {},
    "3v3": {},
    "5v5": {}
  };

  for (let i = 0; i < PvPArr.length; i++) {
    let [rating, seasonPlayed, seasonWon] = PvPArr[i].split(".");
    PvP[brackets[i]] = {rating: hexToDecimal(rating), seasonPlayed: hexToDecimal(seasonPlayed), seasonWon: hexToDecimal(seasonWon)};
  }

  return PvP;
  
}

const hexToDecimal = hex => parseInt(hex, 16);

function statisticStringSplitter(statisticString) {
  let statisticsArr = statisticString.split(".");
  let statistics = {}


  for (const stat of statisticsArr) {
    let [statisticID, statisticValues] = stat.split(":");
    if (statisticID !== "") {
      if (statisticValues && statisticValues.includes("_")) {
        let [statisticValue, dateCompleted] = statisticValues.split("_");
        if (statisticValue) {
          statisticValue = statisticValue.trim();
        }
        statistics[hexToDecimal(statisticID)] = { stat_id: hexToDecimal(statisticID), value: statisticValue, dateCompleted: dateCompleted }
      } else {
        let statisticValue = statisticValues;
        if (statisticValue) {
          statisticValue = statisticValue.trim();
        }
        statistics[hexToDecimal(statisticID)] = { stat_id: hexToDecimal(statisticID), value: statisticValue, dateCompleted: null };
      }
    }

  }

  return statistics;

}