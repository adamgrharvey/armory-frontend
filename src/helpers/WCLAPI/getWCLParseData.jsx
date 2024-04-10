import axios from 'axios'

export default function getWCLParseData(
  characterName,
  serverName,
  region,
  accessToken,
  zoneID,
  setRankings,
  spec
) {
  let tenRanks = {}
  let twentyfiveRanks = {}

  const getRole = function (spec) {
    if (spec === 'Holy' || spec === 'Restoration' || spec === 'Discipline') {
      return 'Healer'
    } else {
      return 'DPS'
    }
  }

  console.log(spec)
  let role = getRole(spec)
  console.log(role)

  let data10man = {
    query: `{
      characterData{
        character(name: "${characterName}", serverSlug: "${serverName}", serverRegion: "${region}") {
          zoneRankings(zoneID: ${zoneID}, size: 10, role: ${role})
        }
      }
    }`,
  }

  let data25man = {
    query: `{
      characterData{
        character(name: "${characterName}", serverSlug: "${serverName}", serverRegion: "${region}") {
          zoneRankings(zoneID: ${zoneID}, size: 25, role: ${role})
        }
      }
    }`,
  }

  axios
    .post(`https://classic.warcraftlogs.com/api/v2/client`, data10man, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      //console.log(res.data.data.characterData.character.zoneRankings);
      tenRanks = res.data.data.characterData.character.zoneRankings
      tenRanks.ranks = {}
      let bossNames = []
      for (let i = 0; i < tenRanks.rankings.length; i++) {
        bossNames.push(tenRanks.rankings[i].encounter.name)
      }
      for (let i = 0; i < bossNames.length; i++) {
        tenRanks.ranks[bossNames[i]] = tenRanks.rankings[i]
      }
    })
    .then(() => {
      axios
        .post(`https://classic.warcraftlogs.com/api/v2/client`, data25man, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          //console.log(res.data.data.characterData.character.zoneRankings);
          twentyfiveRanks = res.data.data.characterData.character.zoneRankings
          twentyfiveRanks.ranks = {}
          let bossNames = []
          for (let i = 0; i < twentyfiveRanks.rankings.length; i++) {
            bossNames.push(twentyfiveRanks.rankings[i].encounter.name)
          }
          for (let i = 0; i < bossNames.length; i++) {
            twentyfiveRanks.ranks[bossNames[i]] = twentyfiveRanks.rankings[i]
          }
        })
        .then(() => {
          setRankings({ tenRanks, twentyfiveRanks })
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}
