import Raid from "./Raid"

export default function Raids(props) {

  let WotLKRaids = {
    "Vault of Archavon P5": {
      name: "Vault of Archavon",
      WCLZoneID: 1016,
      level: 80,
      "10bossIDs": [1753, 2870, 4074, 4074],
      "25bossIDs": [1754, 3236, 4075, 4075],
      bosses: ["Archavon the Stone Watcher", "Emalon the Storm Watcher", "Koralon the Flame Watcher", "Toravon the Ice Watcher"]
    },

    "Vault of Archavon": {
      name: "Vault of Archavon",
      WCLZoneID: 1016,
      level: 80,
      "10bossIDs": [1753],
      "25bossIDs": [1754],
      bosses: ["Archavon the Stone Watcher"]
    },

    "Naxxramas": {
      level: 80,
      WCLZoneID: 1015,
      name: "Naxxramas",
      "10bossIDs": [1361, 1362, 1363, 1365, 1369, 1370, 1374, 1366, 1375, 1364, 1371, 1372, 1373, 1376, 1377],
      "25bossIDs": [1368, 1380, 1386, 1387, 1382, 1385, 1384, 1379, 1383, 1367, 1381, 1378, 1388, 1389, 1390],
      bosses: ["Patchwerk", "Grobbulus", "Gluth", "Thaddius", "Noth the Plaguebringer", "Heigan the Unclean", "Loatheb", "Anub'Rekhan", "Grand Widow Faerlina", "Maexxna", "Instructor Razuvious", "Gothik the Harvester", "The Four Horsemen", "Sapphiron", "Kel'Thuzad"],
    },

    "The Obsidian Sanctum": {
      level: 80,
      WCLZoneID: 1015,
      name: "The Obsidian Sanctum",
      "10bossIDs": [1392],
      "25bossIDs": [1393],
      bosses: ["Sartharion"]
    },

    "The Eye of Eternity": {
      level: 80,
      WCLZoneID: 1015,
      name: "The Eye of Eternity",
      "10bossIDs": [1391],
      "25bossIDs": [1394],
      bosses: ["Malygos"]
    },

    "Ulduar": {
      level: 80,
      name: "Ulduar",
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Flame Leviathan", "Ignis the Furnace Master", "Razorscale", "XT-002 Deconstructor", "The Assembly of Iron", "Kologarn", "Auriaya", "Hodir", "Thorim", "Freya", "Mimiron", "General Vezax", "Yogg-Saron", "Algalon the Observer"]
    },

    "Trial of the Crusader": {
      level: 80,
      name: "Trial of the Crusader",
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["The Northrend Beasts", "Lord Jaraxxus", "Champions of the Alliance", "Twin Val'kyr", "Anub'arak"]
    },

    "Onyxia's Lair": {
      level: 80,
      name: "Onyxia's Lair",
      "10bossIDs": [],
      "25bossIDs": [],
      bosses: ["Onyxia"]
    },

    "Icecrown Citadel": {
      level: 80,
      name: "Icecrown Citadel",
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["Lord Narrowgar", "Lady Deathwhisper", "Icecrown Gunship Battle", "Deathbringer Saurfang", "Festergut", "Rotface", "Professor Putricide", "Blood Prince Council", "Blood-Queen Lana'thel", "Valithria Dreamwalker", "Sindragosa", "The Lich King"]
    },

    "The Ruby Sanctum": {
      level: 80,
      name: "The Ruby Sanctum",
      "10bossIDs": [],
      "25bossIDs": [],
      "10HeroicBossIDs": [],
      "25HeroicBossIDs": [],
      bosses: ["Halion"]
    }
  }

  return (
    <div className="Raids" >
      <Raid Spec={props.Spec} instance={WotLKRaids["Naxxramas"]} characterMisc={props.characterMisc} stats={props.characterStats} />
      <Raid Spec={props.Spec} instance={WotLKRaids["The Obsidian Sanctum"]} characterMisc={props.characterMisc} stats={props.characterStats} />
      <Raid Spec={props.Spec} instance={WotLKRaids["The Eye of Eternity"]} characterMisc={props.characterMisc} stats={props.characterStats} />
      <Raid Spec={props.Spec} instance={WotLKRaids["Vault of Archavon"]} characterMisc={props.characterMisc} stats={props.characterStats} />
    </div >
  )
}