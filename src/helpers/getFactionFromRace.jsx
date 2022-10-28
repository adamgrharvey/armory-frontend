export default function getFactionFromRace(race) {
  let horde = ["Orc", "Tauren", "Undead", "BloodElf", "Troll", "Scourage", "Goblin", "HighmountainTauren", "Nightborne"]
  let alliance = ["Human", "NightElf", "Dwarf", "Gnome", "Draenei", "Worgen", "VoidElf", "LightforgedDraenei"]
  if (horde.includes(race)) {
    return "HORDE";
  } else {
    return "ALLIANCE";
  }
}