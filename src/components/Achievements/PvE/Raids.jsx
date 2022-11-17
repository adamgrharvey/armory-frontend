import Raid from "./Raid"

export default function Raids(props) {

  let WotLKRaids = {
    "Vault of Archavon": {
      level: 80,
      "10bossIDs": [1722, 2870, 4074, 0],
      "25bossIDs": [1721, 3236, 4075, 0],
      bosses: ["Archavon the Stone Watcher", "Emalon the Storm Watcher", "Koralon the Flame Watcher", "Toravon the Ice Watcher"]
    },

    "Naxxramas": {
      level: 80,
      name: "Naxxramas",
      "10bossIDs": [1361, 1362, 1363, 1365, 1369, 1370, 1374, 1366, 1375, 1364, 1371, 1372, 1373, 1376, 1377],
      "25bossIDs": [1368, 1380, 1386, 1387, 1382, 1385, 1384, 1379, 1383, 1367, 1381, 1378, 1388, 1389, 1390],
      bosses: ["Anub'Rekhan", "Grand Widow Faerlina", "Maexxna", "Noth the Plaguebringer", "Heigan the Unclean", "Loatheb", "Instructor Razuvious", "Gothik the Harvester", "The Four Horsemen", "Patchwerk", "Grobbulus", "Gluth", "Thaddius", "Sapphiron", "Kel'Thuzad"],
    },

    "The Obsidian Sanctum": {
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Sartharion"]
    },

    "The Eye of Eternity": {
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Malygos"]
    },

    "Ulduar": {
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Flame Leviathan", "Ignis the Furnace Master", "Razorscale", "XT-002 Deconstructor", "The Assembly of Iron", "Kologarn", "Auriaya", "Hodir", "Thorim", "Freya", "Mimiron", "General Vezax", "Yogg-Saron", "Algalon the Observer"]
    },

    "Trial of the Crusader": {
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["The Northrend Beasts", "Lord Jaraxxus", "Champions of the Alliance", "Twin Val'kyr", "Anub'arak"]
    },

    "Onyxia's Lair": {
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Onyxia"]
    },

    "Icecrown Citadel": {
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["Lord Narrowgar", "Lady Deathwhisper", "Icecrown Gunship Battle", "Deathbringer Saurfang", "Festergut", "Rotface", "Professor Putricide", "Blood Prince Council", "Blood-Queen Lana'thel", "Valithria Dreamwalker", "Sindragosa", "The Lich King"]
    },

    "The Ruby Sanctum": {
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["Halion"]
    }
  }

  return (
    <div className="Raids" >
      <Raid instance={WotLKRaids["Naxxramas"]} stats={props.characterStats} />
    </div >
  )
}