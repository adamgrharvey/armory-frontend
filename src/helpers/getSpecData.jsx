export default function getSpecData(specString, wowClass) {

  let [tree1, tree2, tree3] = specString.split("-");
  let talents = [0, 0, 0];
  let classes =
  {
    DEATHKNIGHT: ['Blood', 'Frost', 'Unholy'],
    DRUID: ['Balance', 'Feral', 'Restoration'],
    HUNTER: ['Beast Mastery', 'Marksmanship', 'Survival'],
    MAGE: ['Arcane', 'Fire', 'Frost'],
    PALADIN: ['Holy', 'Protection', 'Retribution'],
    PRIEST: ['Discipline', 'Holy', 'Shadow'],
    ROGUE: ['Assassination', 'Combat', 'Subtlety'],
    SHAMAN: ['Elemental', 'Enhancement', 'Restoration'],
    WARLOCK: ['Affliction', 'Demonology', 'Destruction'],
    WARRIOR: ['Arms', 'Fury', 'Protection']
  }

  
  let spec;

  talents[0] = countTalents(tree1);
  talents[1] = countTalents(tree2);
  talents[2] = countTalents(tree3);

  if (talents[0] >= talents[1] && talents[0] >= talents[2]) {
    spec = classes[wowClass][0];
  } else if(talents[1] >= talents[0] && talents[1] >= talents[2]) {
    spec = classes[wowClass][1];
  } else {
    spec = classes[wowClass][2];
  }
  
  return {
    spec: spec,
    tree1: talents[0],
    tree2: talents[1],
    tree3: talents[2]
  }
}

const countTalents = function (treeString) {
  let count = 0;
  for (let i = 0; i < treeString.length; i++) {
    if (treeString[i] !== '0') {
      count += Number(treeString[i])
    }
  }
  return count;
}