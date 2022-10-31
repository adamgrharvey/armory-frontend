export default function getFactionFromRace(race) {
  let horde = ["Orc", "Tauren", "Undead", "BloodElf", "Blood Elf", "Troll", "Scourage", "Goblin", "HighmountainTauren", "Highmountain Tauren", "Nightborne"]
  let alliance = ["Human", "NightElf", "Night Elf", "Dwarf", "Gnome", "Draenei", "Worgen", "VoidElf", "Void Elf", "LightforgedDraenei", "Lightforged Draenei"]
  if (horde.includes(race)) {
    return "HORDE";
  } else if (alliance.includes(race)){
    return "ALLIANCE";
  } else {
    return "ERROR";
  }
}