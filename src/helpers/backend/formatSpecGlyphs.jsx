export default function formatSpecGlyphs(specString) {
  let [string, glyph1, glyph2, glyph3, glyph4, glyph5, glyph6] = specString.split('.')

  glyph1 = glyph1.split(':')
  glyph2 = glyph2.split(':')
  glyph3 = glyph3.split(':')
  glyph4 = glyph4.split(':')
  glyph5 = glyph5.split(':')
  glyph6 = glyph6.split(':')

  string += '_0'
  string += `0${glyphConversion[Number(glyph1[1])]}`
  string += `1${glyphConversion[Number(glyph4[1])]}`
  string += `2${glyphConversion[Number(glyph6[1])]}`
  string += `3${glyphConversion[Number(glyph2[1])]}`
  string += `4${glyphConversion[Number(glyph3[1])]}`
  string += `5${glyphConversion[Number(glyph5[1])]}`

  return string
}

let glyphConversion = {
  '': '',

  161: '1ngt',
  // -Glyph of Frenzied Regeneration: While Frenzied Regeneration is active: healing effects on you are $54810s1% more powerful.

  162: '1ngv',
  // -Glyph of Maul: Your Maul ability now hits $s1 additional target.

  163: '1ngw',
  // -Glyph of Growling: Increases the chance for your Growl ability to work successfully by 8%.

  164: '1ngx',
  // -Glyph of Mangle: Increases the damage done by Mangle by $54813s1%.

  165: '1ngz',
  // -Glyph of Shred: Each time you Shred: the duration of your Rip on the target is extended $54815s1 sec: up to a maximum of $54815s2 sec.

  166: '1nh2',
  // -Glyph of Rip: Increases the duration of your Rip ability by ${$m1/1000} sec.

  167: '1nh5',
  // -Glyph of Rake: Your Rake ability prevents targets from fleeing.

  168: '1nh8',
  // -Glyph of Swiftmend: Your Swiftmend ability no longer consumes a Rejuvenation or Regrowth effect from the target.

  169: '1nhg',
  // -Glyph of Innervate: Innervate now grants the caster $54832s1% of $ghis:her; base mana pool over $54833d in addition to the normal effects of Innervate.

  170: '1ned',
  // -Glyph of Rebirth: Players resurrected by Rebirth are returned to life with $54733s2% health.

  171: '1neq',
  // -Glyph of Regrowth: Increases the healing of your Regrowth spell by $54743s1% if your Regrowth effect is still active on the target.

  172: '1nf2',
  // -Glyph of Rejuvenation: While your Rejuvenation targets are below 50% health: you will heal them for an additional $s1% health.

  173: '1nh9',
  // -Glyph of Healing Touch: Decreases the cast time of Healing Touch by ${$m3/-1000}.1 sec: the mana cost by $s1%: and the amount healed by $s2%.

  174: '1nha',
  // -Glyph of Lifebloom: Increases the duration of Lifebloom by ${$m1/1000} sec.

  175: '1nhx',
  // -Glyph of Starfire: Your Starfire ability increases the duration of your Moonfire effect on the target by $54845s1 sec: up to a maximum of $54845s2 additional seconds.

  176: '1nhe',
  // -Glyph of Insect Swarm: Increases the damage of your Insect Swarm ability by $s2%: but it no longer affects your victim's chance to hit.

  177: '1nhf',
  // -Glyph of Hurricane: Your Hurricane ability now also slows the movement speed of its victims by $s1%.

  178: '1nhc',
  // -Glyph of Starfall: Reduces the cooldown of Starfall by ${$54828m1/-1000} sec.

  179: '1nf4',
  // -Glyph of Wrath: Reduces the pushback suffered from damaging attacks while casting your Wrath spell by $54756s1%.

  180: '1nhd',
  // -Glyph of Moonfire: Increases the periodic damage of your Moonfire ability by $s2%: but initial damage is decreased by $s1%.

  181: '1nf8',
  // -Glyph of Entangling Roots: Increases the damage your Entangling Roots victims can take before the Entangling Roots automatically breaks by $s1%.

  183: '1nma',
  // -Glyph of Judgement: Your Judgements deal $54922s1% more damage.

  184: '1nmd',
  // -Glyph of Seal of Command: You gain $68082s1% of your base mana each time you use a Judgement with Seal of Command active.

  185: '1nmb',
  // -Glyph of Hammer of Justice: Increases your Hammer of Justice range by $54923s1 yards.

  186: '1nmc',
  // -Glyph of Spiritual Attunement: Increases the amount of mana gained from your Spiritual Attunement spell by an additional $54924s1%.

  187: '1nme',
  // -Glyph of Hammer of Wrath: Reduces the mana cost of Hammer of Wrath by ${$54926m1/-1}%.

  188: '1nmf',
  // -Glyph of Crusader Strike: Reduces the mana cost of your Crusader Strike ability by $54927s1%.

  189: '1nmg',
  // -Glyph of Consecration: Increases the duration and cooldown of Consecration by ${$54928m1/1000} sec.

  190: '1nmh',
  // -Glyph of Righteous Defense: Increases the chance for your Righteous Defense and Hand of Reckoning abilities to work successfully by $54929s1% on each target.

  191: '1nmj',
  // -Glyph of Avenger's Shield: Your Avenger's Shield hits $54930s1 fewer targets: but for $54930s2% more damage.

  192: '1nmk',
  // -Glyph of Turn Evil: Reduces the casting time of your Turn Evil spell by $54931s1%: but increases the cooldown by ${$54931m2/1000} sec.

  193: '1nmp',
  // -Glyph of Exorcism: Increases damage done by Exorcism by $54934s1%.

  194: '1nmq',
  // -Glyph of Cleansing: Reduces the mana cost of your Cleanse and Purify spells by $54935s1%.

  195: '1nmr',
  // -Glyph of Flash of Light: Your Flash of Light has an additional $54936s1% critical strike chance.

  196: '1nms',
  // -Glyph of Holy Light: Your Holy Light grants $54937s1% of its heal amount to up to 5 friendly targets within $54968a1 yards of the initial target.

  197: '1nmt',
  // -Glyph of Avenging Wrath: Reduces the cooldown of your Hammer of Wrath spell by $54938s1% while Avenging Wrath is active.

  198: '1nmv',
  // -Glyph of Divinity: Your Lay on Hands grants twice as much mana as normal and also grants you as much mana as it grants your target.

  199: '1nmw',
  // -Glyph of Seal of Wisdom: While Seal of Wisdom is active: the cost of your healing spells is reduced by $54940s1%.

  200: '1nmz',
  // -Glyph of Seal of Light: While Seal of Light is active: the effect of your healing spells is increased by $54943s1%.

  211: '1p4c',
  // -Glyph of Water Mastery: Increases the passive mana regeneration of your Water Shield spell by $55436s1%.

  212: '1p4d',
  // -Glyph of Chain Heal: Your Chain Heal heals 1 additional target.

  213: '1p4s',
  // -Glyph of Chain Lightning: Your Chain Lightning strikes 1 additional target.

  214: '1p4y',
  // -Glyph of Lava: Your Lava Burst spell gains an additional $55454s1% of your spellpower.

  215: '1p4j',
  // -Glyph of Shocking: Reduces the global cooldown triggered by your shock spells to $m2 sec.

  216: '1p4f',
  // -Glyph of Earthliving Weapon: Increases the chance for your Earthliving weapon to trigger by $55439s1%.

  217: '1p4z',
  // -Glyph of Fire Elemental Totem: Reduces the cooldown of your Fire Elemental Totem by ${$55455m1/-60000} min.

  218: '1p4t',
  // -Glyph of Fire Nova: Reduces the cooldown of your Fire Nova spell by ${$55450m1/-1000} seconds.

  219: '1p4q',
  // -Glyph of Flame Shock: Increases the critical strike damage bonus of your Flame Shock damage by $55447s1%.

  220: '1p4v',
  // -Glyph of Flametongue Weapon: Increases spell critical strike chance by $55451s1% while Flametongue Weapon is active.

  221: '1p4k',
  // -Glyph of Frost Shock: Increases the duration of your Frost Shock by ${$55443m1/1000} sec.

  222: '1p50',
  // -Glyph of Healing Stream Totem: Your Healing Stream Totem heals for an additional $55456s1%.

  223: '1p4g',
  // -Glyph of Healing Wave: Your Healing Wave also heals you for $55440s1% of the healing effect when you heal someone else.

  224: '1p4e',
  // -Glyph of Lesser Healing Wave: Your Lesser Healing Wave heals for $55438s1% more if the target is also affected by Earth Shield.

  225: '1p4r',
  // -Glyph of Lightning Shield: Increases the damage from Lightning Shield by $55448s1%.

  226: '1p4x',
  // -Glyph of Lightning Bolt: Increases the damage dealt by Lightning Bolt by $55453s1%.

  227: '1p4h',
  // -Glyph of Mana Tide: Your Mana Tide Totem grants an additional 1% of each

  228: '1p4p',
  // -Glyph of Stormstrike: Increases the Nature damage bonus from your Stormstrike ability by an additional $55446s1%.

  229: '1p4m',
  // -Glyph of Lava Lash: Damage on your Lava Lash is increased by an additional $55444s1% if your weapon is enchanted with Flametongue.

  230: '1p4w',
  // -Glyph of Elemental Mastery: Reduces the cooldown of your Elemental Mastery ability by ${$55452m1/-1000} sec.

  231: '1p4n',
  // -Glyph of Windfury Weapon: Increases the chance per swing for Windfury Weapon to trigger by $55445s1%.

  0: '1pc9',
  // -Glpyh of Shadow: While in Shadowform: your non-per

  251: '1pbv',
  // -Glyph of Circle of Healing: Your Circle of Healing spell heals 1 additional target.

  252: '1pbx',
  // -Glyph of Dispel Magic: Your Dispel Magic spell also heals your target for $55677s1% of maximum health.

  253: '1pc4',
  // -Glyph of Fade: Reduces the cooldown of your Fade spell by ${$55684m2/-1000} sec.

  254: '1pby',
  // -Glyph of Fear Ward: Reduces cooldown and duration of Fear Ward by ${$55678m1/-1000} sec.

  255: '1pbz',
  // -Glyph of Flash Heal: Reduces the mana cost of your Flash Heal by $55679s1%.

  256: '1pc3',
  // -Glyph of Holy Nova: Increases the damage and healing of your Holy Nova spell by an additional $55683s1%.

  257: '1pc6',
  // -Glyph of Inner Fire: Increases the armor from your Inner Fire spell by $55686m1%.

  258: '1pbs',
  // -Glyph of Lightwell: Increases the amount healed by your Lightwell by $55673s1%

  259: '1pcb',
  // -Glyph of Mass Dispel: Reduces the mana cost of Mass Dispel by $55691s1%.

  260: '1pc8',
  // -Glyph of Mind Control: Reduces the chance targets will resist or break your Mind Control spell by an additional $55688s1%.

  261: '1pc1',
  // -Glyph of Shadow Word: Pain: The periodic damage ticks of your Shadow Word: Pain spell restore $s1% of your base mana.

  263: '1pbr',
  // -Glyph of Power Word: Shield: Your Power Word: Shield also heals the target for $55672s1% of the absorption amount.

  264: '1pc0',
  // -Glyph of Prayer of Healing: Your Prayer of Healing spell also heals an additional $55680s1% of its initial heal over 6 sec.

  265: '1pbw',
  // -Glyph of Psychic Scream: Increases the duration of your Psychic Scream by ${$55676m1/1000} sec. and increases its cooldown by ${$55676m2/1000} sec.

  266: '1pbt',
  // -Glyph of Renew: Reduces the duration of your Renew by ${$55674m1/-1000} sec. but increases the amount healed each tick by $55674s2%.

  267: '1pca',
  // -Glyph of Scourge Imprisonment: Reduces the cast time of your Shackle Undead by ${$55690m1/-1000}.1 sec.

  268: '1pc2',
  // -Glyph of Shadow Word: Death: Targets below $55682s1% health take an additional $55682s2% damage from your Shadow Word: Death spell.

  269: '1pc7',
  // -Glyph of Mind Flay: Increases the damage done by your Mind Flay spell by $55687s1% when your target is afflicted with Shadow Word: Pain.

  270: '1pcc',
  // -Glyph of Smite: Your Smite spell inflicts an additional $55692s1% damage against targets afflicted by Holy Fire.

  271: '1pc5',
  // -Glyph of Spirit of Redemption: Increases the duration of Spirit of Redemption by ${$55685m2/1000} sec.

  272: '1pxj',
  // -Glyph of Incinerate: Increases the damage done by Incinerate by $56242m1%.

  273: '1pxb',
  // -Glyph of Conflagrate: Your Conflagrate spell no longer consumes your Immolate or Shadowflame spell from the target.

  274: '1pwt',
  // -Glyph of Corruption: Your Corruption spell has a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by $17941s1%.

  275: '1pxh',
  // -Glyph of Curse of Agony: Increases the duration of your Curse of Agony by ${$56241m1/1000} sec.

  0: '1rq0',
  // -Glyph of Curse of Exhaustion: Increases the range of your Curse of Exhaustion spell by 5 yards.

  276: '1px8',
  // -Glyph of Death Coil: Increases the duration of your Death Coil by ${$56232m1/1000}.1 sec.

  277: '1pxm',
  // -Glyph of Fear: Increases the damage your Fear target can take before the Fear effect is removed by $56244s1%.

  278: '1pxp',
  // -Glyph of Felguard: Increases the Felguard's total attack power by $56246s1%.

  279: '1pxs',
  // -Glyph of Felhunter: When your Felhunter uses Devour Magic: you will also be healed for that amount.

  280: '1pxe',
  // -Glyph of Health Funnel: Reduces the pushback suffered from damaging attacks while channeling your Health Funnel spell by $56238s1%.

  281: '1px0',
  // -Glyph of Healthstone: You receive $56224s1% more healing from using a healthstone.

  282: '1pws',
  // -Glyph of Howl of Terror: Reduces the cooldown on your Howl of Terror spell by ${$56217m1/-1000} sec.

  283: '1px4',
  // -Glyph of Immolate: Increases the periodic damage of your Immolate by $56228s2%.

  284: '1pxr',
  // -Glyph of Imp: Increases the damage done by your Imp's Firebolt spell by $56248s1%.

  285: '1px2',
  // -Glyph of Searing Pain: Increases the critical strike bonus of your Searing Pain by $56226s1%.

  286: '',
  // -Glyph of Shadow Bolt: Reduces the mana cost of your Shadow Bolt by $56240s1%.

  287: '1px5',
  // -Glyph of Shadowburn: Increases the critical strike chance of Shadowburn by $56229s1% when the target is below 35% health.

  288: '1pwr',
  // -Glyph of Siphon Life: Increases the healing you receive from your Siphon Life talent by $56216s1%.

  289: '1px7',
  // -Glyph of Soulstone: Increases the amount of health you gain from resurrecting via a Soulstone by $56231s1%.

  290: '1pxt',
  // -Glyph of Succubus: Your Succubus's Seduction ability also removes all damage over time effects from the target.

  291: '1px9',
  // -Glyph of Unstable Affliction: Decreases the casting time of your Unstable Affliction by ${$56233m1/-1000}.1 sec.

  292: '1pxq',
  // -Glyph of Voidwalker: Increases your Voidwalker's total Stamina by $56247s1%.

  311: '1q18',
  // -Glyph of Arcane Explosion: Reduces mana cost of Arcane Explosion by $56360s1%.

  312: '1q1b',
  // -Glyph of Arcane Missiles: Increases the critical strike damage bonus of Arcane Missiles by $56363s1%.

  313: '1q1x',
  // -Glyph of Arcane Power: Increases the duration of Arcane Power by ${$56381m1/1000} sec.

  314: '1q1d',
  // -Glyph of Blink: Increases the distance you travel with the Blink spell by $56365s1 yards.

  315: '1q1w',
  // -Glyph of Evocation: Your Evocation ability also causes you to regain ${$56380m1*4}% of your health over its duration.

  316: '1q1g',
  // -Glyph of Fireball: Reduces the casting time of your Fireball spell by ${$56368m1/-1000}.2 sec: but removes the damage over time effect.

  317: '1q1h',
  // -Glyph of Fire Blast: Increases the critical strike chance of Fire Blast by $56369s1% when the target is stunned or incapacitated.

  318: '1q1r',
  // -Glyph of Frost Nova: Your Frost Nova targets can take an additional $56376s1% damage before the Frost Nova effect automatically breaks.

  319: '1q1j',
  // -Glyph of Frostbolt: Increases the damage dealt by Frostbolt by $56370s1%: but removes the slowing effect.

  320: '1q20',
  // -Glyph of Ice Armor: Your Ice Armor and Frost Armor spells grant an additional $56384s1% armor and resistance.

  321: '1q1m',
  // -Glyph of Ice Block: Your Frost Nova cooldown is now reset every time you use Ice Block.

  322: '1q1s',
  // -Glyph of Ice Lance: Your Ice Lance now causes $56377s1 times damage against frozen targets higher level than you instead of triple damage.

  323: '1q1p',
  // -Glyph of Icy Veins: Your Icy Veins ability also removes all movement slowing and cast time slowing effects.

  324: '1q1k',
  // -Glyph of Scorch: Increases the damage of your Scorch spell by $56371s1%.

  325: '1q1e',
  // -Glyph of Invisibility: Increases the duration of the Invisibility effect by $/1000;56366s1 sec.

  326: '1q1z',
  // -Glyph of Mage Armor: Your Mage Armor spell grants an additional $56383s1% mana regeneration while casting.

  327: '1q1f',
  // -Glyph of Mana Gem: Increases the mana received from using a mana gem by $56367s1%.

  328: '1q1y',
  // -Glyph of Molten Armor: Your Molten Armor grants an additional $56382s1% of your spirit as critical strike rating.

  329: '1q1q',
  // -Glyph of Polymorph: Your Polymorph spell also removes all damage over time effects from the target.

  330: '1q1c',
  // -Glyph of Remove Curse: Your Remove Curse spell also makes the target immune to all curses for $60803d.

  331: '1q1n',
  // -Glyph of Water Elemental: Reduces the cooldown of your Summon Water Elemental spell by ${$56373m1/-1000} sec.

  351: '1qfr',
  // -Glyph of Aimed Shot: Reduces the cooldown of your Aimed Shot ability by ${$56824m1/-1000} sec.

  352: '1qg9',
  // -Glyph of Arcane Shot: Your Arcane Shot refunds $56841s1% of its mana cost if the target has one of your Stings active on it.

  353: '1qgs',
  // -Glyph of the Beast: Increases the attack power bonus of Aspect of the Beast for you and your pet by an additional $56857s1%.

  354: '1qg1',
  // -Glyph of Mending: Increases the healing done by your Mend Pet ability by $56833s1%.

  355: '1qgk',
  // -Glyph of Aspect of the Viper: Increases the amount of mana gained from attacks while Aspect of the Viper is active by $56851s1%.

  356: '1qfy',
  // -Glyph of Bestial Wrath: Decreases the cooldown of Bestial Wrath by ${$56830m1/-1000} sec.

  357: '1qgj',
  // -Glyph of Deterrence: Decreases the cooldown of Deterrence by ${$56850m1/-1000} sec.

  358: '1qgc',
  // -Glyph of Disengage: Decreases the cooldown of Disengage by ${$56844m1/-1000} sec.

  359: '1qgd',
  // -Glyph of Freezing Trap: When your Freezing Trap breaks: the victim's movement speed is reduced by $61394s1% for $61394d.

  360: '1qgf',
  // -Glyph of Frost Trap: Increases the radius of the effect from your Frost Trap by $56847s1 yards.

  361: '1qfx',
  // -Glyph of Hunter's Mark: Increases the attack power bonus of your Hunter's Mark by $56829s1%.

  362: '1qge',
  // -Glyph of Immolation Trap: Decreases the duration of the effect from your Immolation Trap by 6 sec.: but damage while active is increased by $56846s2%.

  363: '1qgr',
  // -Glyph of the Hawk: Increases the haste bonus of the Improved Aspect of the Hawk effect by an additional $56856s1%.

  364: '1qg4',
  // -Glyph of Multi-Shot: Decreases the cooldown of Multi-Shot by ${$56836m1/-1000} sec.

  365: '1qfw',
  // -Glyph of Rapid Fire: Increases the haste from Rapid Fire by an additional $56828s1%.

  366: '1qg0',
  // -Glyph of Serpent Sting: Increases the duration of your Serpent Sting by ${$56832m1/1000} sec.

  367: '1qgh',
  // -Glyph of Snake Trap: Snakes from your Snake Trap take $56849s1% reduced damage from area of effect spells.

  368: '1qft',
  // -Glyph of Steady Shot: Increases the damage dealt by Steady Shot by $56826s1% when your target is afflicted with Serpent Sting.

  369: '1qga',
  // -Glyph of Trueshot Aura: While your Trueshot Aura is active: you have $56842s1% increased critical strike chance on your Aimed Shot.

  370: '1qg6',
  // -Glyph of Volley: Decreases the mana cost of Volley by $56838s1%.

  371: '1qgg',
  // -Glyph of Wyvern Sting: Decreases the cooldown of your Wyvern Sting by ${$m1/-1000} sec.

  391: '1qf8',
  // -Glyph of Adrenaline Rush: Increases the duration of Adrenaline Rush by ${$56808m1/1000} sec.

  392: '1qfd',
  // -Glyph of Ambush: Increases the range on Ambush by $56813s1 yards.

  393: '1qf0',
  // -Glyph of Backstab: Your Backstab increases the duration of your Rupture effect on the target by $56800s1 sec: up to a maximum of $56800s2 additional sec.

  394: '1qfj',
  // -Glyph of Blade Flurry: Reduces the energy cost of Blade Flurry by $56818s1%.

  395: '1qfm',
  // -Glyph of Crippling Poison: Increases the chance to inflict your target with Crippling Poison by an additional $56820s1%.

  396: '1qf6',
  // -Glyph of Deadly Throw: Increases the slowing effect on Deadly Throw by $56806s1%.

  397: '1qez',
  // -Glyph of Evasion: Increases the duration of Evasion by ${$56799m1/1000} sec.

  398: '1qf2',
  // -Glyph of Eviscerate: Increases the critical strike chance of Eviscerate by $56802s1%.

  399: '1qf3',
  // -Glyph of Expose Armor: Increases the duration of Expose Armor by ${$56803m1/1000} sec.

  400: '1qf4',
  // -Glyph of Feint: Reduces the energy cost of Feint by $56804s1.

  401: '1qfc',
  // -Glyph of Garrote: Reduces the duration of your Garrote ability by ${$56812m1/-1000} sec and increases the total damage it deals by 20%.

  402: '1qfe',
  // -Glyph of Ghostly Strike: Increases the damage dealt by Ghostly Strike by $56814s2% and the duration of its effect by ${$56814m1/1000} sec: but increases its cooldown by ${$56814m3/1000} sec.

  403: '1qf9',
  // -Glyph of Gouge: Reduces the energy cost of Gouge by $56809s1.

  404: '1qf7',
  // -Glyph of Hemorrhage: Increases the damage bonus against targets afflicted by Hemorrhage by $56807s1%.

  405: '1qfk',
  // -Glyph of Preparation: Your Preparation ability also instantly resets the cooldown of Blade Flurry: Dismantle: and Kick.

  406: '1qf1',
  // -Glyph of Rupture: Increases the duration of Rupture by ${$56801m1/1000} sec.

  407: '1qey',
  // -Glyph of Sap: Increases the duration of Sap by ${$56798m1/1000} sec.

  408: '1qf5',
  // -Glyph of Vigor: Vigor grants an additional $56805s1 maximum energy.

  409: '1qfn',
  // -Glyph of Sinister Strike: Your Sinister Strike critical strikes have a $h% chance to add an additional combo point.

  410: '1qfa',
  // -Glyph of Slice and Dice: Increases the duration of Slice and Dice by ${$56810m1/1000} sec.

  411: '1qfb',
  // -Glyph of Sprint: Increases the movement speed of your Sprint ability by an additional $56811s1%.

  489: '1s00',
  // -Glyph of Mortal Strike: Increases the damage of your Mortal Strike ability by $58368s2%.

  490: '1s01',
  // -Glyph of Bloodthirst: Increases the healing you receive from your Bloodthirst ability by $58369s1%.

  491: '1rzk',
  // -Glyph of Rapid Charge: Reduces the cooldown of your Charge ability by $58355s1%.

  492: '1rzy',
  // -Glyph of Cleaving: Increases the number of targets your Cleave hits by 1.

  493: '1s0m',
  // -Glyph of Devastate: Your Devastate ability now applies two stacks of Sunder Armor.

  494: '1rzz',
  // -Glyph of Execution: Your Execute ability deals damage as if you had $58367s1 additional rage.

  495: '1s04',
  // -Glyph of Hamstring: Gives your Hamstring ability a $58372h% chance to immobilize the target for $58373d.

  496: '1rzn',
  // -Glyph of Heroic Strike: You gain ${$58357m1/10} rage when you critically strike with your Heroic Strike ability.

  497: '1s09',
  // -Glyph of Intervene: Increases the number attacks you intercept for your Intervene target by $58377s1.

  498: '1rzx',
  // -Glyph of Barbaric Insults: Your Mocking Blow ability generates $58365s1% additional threat.

  499: '1s0j',
  // -Glyph of Overpower: Adds a $58386m1% chance to enable your Overpower when your attacks are parried.

  500: '1s0h',
  // -Glyph of Rending: Increases the duration of your Rend ability by ${$58385m1/1000} sec.

  501: '1rzw',
  // -Glyph of Revenge: After using Revenge: your next Heroic Strike costs no rage.

  502: '1s07',
  // -Glyph of Blocking: Increases your block value by $58374s1% for $58374d after using your Shield Slam ability.

  503: '1s08',
  // -Glyph of Last Stand: Reduces the cooldown of your Last Stand ability by ${$58376m1/-60000} min.

  504: '1s0k',
  // -Glyph of Sunder Armor: Your Sunder Armor ability affects a second nearby target.

  505: '1s0g',
  // -Glyph of Sweeping Strikes: Reduces the rage cost of your Sweeping Strikes ability by $58384s1%.

  506: '1rzh',
  // -Glyph of Taunt: Increases the chance for your Taunt ability to succeed by $58353m1%.

  507: '1rzm',
  // -Glyph of Resonating Power: Reduces the rage cost of your Thunder Clap ability by ${$58356m1/-10}.

  508: '1s0e',
  // -Glyph of Victory Rush: Your Victory Rush ability has a $58382s1% increased critical strike chance.

  509: '1s02',
  // -Glyph of Whirlwind: Reduces the cooldown of your Whirlwind by ${$58370m1/-1000} sec.

  511: '1s7n',
  // -Glyph of Dark Command: Increases the chance for your Dark Command ability to work successfully by $s1%.

  512: '1s7z',
  // -Glyph of Anti-Magic Shell: Increases the duration of your Anti-Magic Shell by ${$58623m1/1000} sec.

  513: '1s7r',
  // -Glyph of Heart Strike: Your Heart Strike also reduces the movement speed of your target by $58617s1% for $58617d.

  515: '1s9h',
  // -Glyph of Bone Shield: Adds $58673s1 additional $Lcharge:charges; to your Bone Shield.

  516: '1s7w',
  // -Glyph of Chains of Ice: Your Chains of Ice also causes $58621s1 Frost damage: increased by your attack power.

  519: '1wsk',
  // -Glyph of Death Grip: When you deal a killing blow that grants honor or experience: the cooldown of your Death Grip is refreshed.

  520: '1s85',
  // -Glyph of Death and Decay: Damage of your Death and Decay spell increased by $58629s1%.

  521: '1s8q',
  // -Glyph of Frost Strike: Reduces the cost of your Frost Strike by ${$58647m1/-10} Runic Power.

  523: '1s81',
  // -Glyph of Icebound Fortitude: Your Icebound Fortitude now always grants at least $58625s1% damage reduction: regardless of your defense skill.

  524: '1s87',
  // -Glyph of Icy Touch: Your Frost Fever disease deals $58631s1% additional damage.

  525: '1s9f',
  // -Glyph of Obliterate: Increases the damage of your Obliterate ability by $m3%.

  526: '1s91',
  // -Glyph of Plague Strike: Your Plague Strike does $s1% additional damage.

  527: '1s9y',
  // -Glyph of the Ghoul: Your Ghoul receives an additional $58686s1% of your Strength and $58686s1% of your Stamina.

  528: '1s9d',
  // -Glyph of Rune Strike: Increases the critical strike chance of your Rune Strike by $58669s2%.

  529: '1s8j',
  // -Glyph of Scourge Strike: Your Scourge Strike increases the duration of your diseases on the target by $58642m1 sec: up to a maximum of $58642m2 additional seconds.

  530: '1s7t',
  // -Glyph of Strangulate: Reduces the cooldown of your Strangulate by ${$58618m1/-1000} sec.

  531: '1s8b',
  // -Glyph of Unbreakable Armor: Increases the total armor granted by Unbreakable Armor to $58635m2%.

  532: '1s9m',
  // -Glyph of Vampiric Blood: Increases  the duration of your Vampiric Blood by ${$58676m1/1000} sec.

  556: '1sxz',
  // -Glyph of Rune Tap: Your Rune Tap heals yourself for an additional 10% of the effect: and also heals your party for 10% of their maximum health.

  557: '1sy4',
  // -Glyph of Blood Strike: Your Blood Strike causes an additional 20% damage to snared targets.

  558: '1sy8',
  // -Glyph of Death Strike: Increases your Death Strike's damage by $59336s1% for every $59336s1 runic power you currently have (up to a maximum of $59336s2%).  The runic power is not consumed by this effect.

  559: '1q34',
  // -Glyph of Holy Wrath: Reduces the cooldown of your Holy Wrath spell by ${$56420m1/-1000} sec.

  560: '1q2y',
  // -Glyph of Seal of Righteousness: Increases the damage done by Seal of Righteousness by $56414s1%.

  561: '1q30',
  // -Glyph of Seal of Vengeance: Your Seal of Vengeance or Seal of Corruption also grants $56416s1 expertise while active.

  591: '1vrn',
  // -Glyph of Frostfire: Increases the initial damage dealt by Frostfire Bolt by $61205s1% and its critical strike chance by $61205s2%.

  631: '1wm0',
  // -Glyph of Focus: Increases the damage done by Starfall by $62080s2%: but decreases its radius by $62080s1%.

  651: '1wr2',
  // -Glyph of Arcane Blast: Increases the damage from your Arcane Blast buff by $62210s1%.

  671: '1xfs',
  // -Glyph of Berserk: Increases the duration of Berserk by ${$62969m1/1000} sec.

  672: '1xft',
  // -Glyph of Wild Growth: Wild Growth can affect $62970s1 additional target.

  673: '1xfv',
  // -Glyph of Nourish: Your Nourish heals an additional $62971s1% for each of your heal over time effects present on the target.

  674: '1xjf',
  // -Glyph of Savage Roar: Your Savage Roar ability grants an additional $63055s1% bonus damage done.

  675: '1xjg',
  // -Glyph of Monsoon: Reduces the cooldown of your Typhoon spell by ${$63056m1/-1000} sec.

  676: '1xjh',
  // -Glyph of Barkskin: Reduces the chance you'll be critically hit by melee attacks by $63057s1% while Barkskin is active.

  677: '1xjs',
  // -Glyph of Chimera Shot: Reduces the cooldown of Chimera Shot by ${$63065m1/-1000} sec.

  691: '1xjt',
  // -Glyph of Explosive Shot: Increases the critical strike chance of Explosive Shot by $63066s1%.

  692: '1xjv',
  // -Glyph of Kill Shot: Reduces the cooldown of Kill Shot by ${$63067m1/-1000} sec.

  693: '1xjw',
  // -Glyph of Explosive Trap: The periodic damage from your Explosive Trap can now be critical strikes.

  694: '1xjx',
  // -Glyph of Scatter Shot: Increases the range of Scatter Shot by $63069s1 yards.

  695: '1xke',
  // -Glyph of Raptor Strike: Reduces damage taken by $63087s1% for $63087d after using Raptor Strike.

  696: '1xkj',
  // -Glyph of Deep Freeze: Increases the range of Deep Freeze by $63090s1 yards.

  697: '1xkk',
  // -Glyph of Living Bomb: The periodic damage from your Living Bomb can now be critical strikes.

  698: '1xkm',
  // -Glyph of Arcane Barrage: Reduces the mana cost of Arcane Barrage by $63092s1%.

  699: '1xkn',
  // -Glyph of Mirror Image: Your Mirror Image spell now creates a 4th copy.

  700: '1xkq',
  // -Glyph of Ice Barrier: Increases the amount of damage absorbed by your Ice Barrier by $63095s1%.

  701: '1xqj',
  // -Glyph of Beacon of Light: Increases the duration of Beacon of Light by ${$63218m1/1000} sec.

  702: '1xqk',
  // -Glyph of Hammer of the Righteous: Your Hammer of the Righteous hits $63219s1 additional target.

  703: '1xqm',
  // -Glyph of Divine Storm: Your Divine Storm now heals for an additional $63220s1% of the damage it causes.

  704: '1xqp',
  // -Glyph of Shield of Righteousness: Reduces the mana cost of Shield of Righteousness by $63222s1%.

  705: '1xqq',
  // -Glyph of Divine Plea: While Divine Plea is active: you take $63223s1% reduced damage from all sources.

  706: '1xqr',
  // -Glyph of Holy Shock: Reduces the cooldown of Holy Shock by ${$63224m1/-1000} sec.

  707: '1xqs',
  // -Glyph of Salvation: When you cast Hand of Salvation on yourself: it also reduces damage taken by $63225s1%.

  708: '1xqx',
  // -Glyph of Dispersion: Reduces the cooldown on Dispersion by ${$63229m1/-1000} sec.

  709: '1xqz',
  // -Glyph of Guardian Spirit: If your Guardian Spirit lasts its entire duration without being triggered: the cooldown is reset to ${$63231m1/60} min.

  710: '1xr3',
  // -Glyph of Penance: Reduces the cooldown of Penance by ${$63235m1/-1000} sec.

  711: '1xr5',
  // -Glyph of Mind Sear: Increases the radius of effect on Mind Sear by $63237s1 yards.

  712: '1xre',
  // -Glyph of Hymn of Hope: Your Hymn of Hope lasts an additional ${$m1/1000} sec.

  713: '1xrg',
  // -Glyph of Pain Suppression: Allows Pain Suppression to be cast while stunned.

  714: '1xrh',
  // -Glyph of Hunger For Blood: Increases the bonus damage from Hunger For Blood by $63249s1%.

  715: '1xrm',
  // -Glyph of Killing Spree: Reduces the cooldown on Killing Spree by ${$63252m1/-1000} sec.

  716: '1xrn',
  // -Glyph of Shadow Dance: Increases the duration of Shadow Dance by ${$63253m1/1000} sec.

  731: '1xrp',
  // -Glyph of Fan of Knives: Increases the damage done by Fan of Knives by $63254s1%.

  732: '1xrr',
  // -Glyph of Tricks of the Trade: The bonus damage and threat redirection granted by your Tricks of the Trade ability lasts an additional ${$63256m1/1000} sec.

  733: '1xs4',
  // -Glyph of Mutilate: Reduces the cost of Mutilate by $63268s1 energy.

  734: '1xs5',
  // -Glyph of Cloak of Shadows: While Cloak of Shadows is active: you take $63269s1% less physical damage.

  735: '1xs6',
  // -Glyph of Thunder: Reduces the cooldown on Thunderstorm by ${$63270m1/-1000} sec.

  736: '1xs7',
  // -Glyph of Feral Spirit: Your spirit wolves gain an additional $63271s1% of your attack power.

  737: '1xs9',
  // -Glyph of Riptide: Increases the duration of Riptide by ${$63273m1/1000} sec.

  751: '1xsf',
  // -Glyph of Earth Shield: Increases the amount healed by your Earth Shield by $63279s1%.

  752: '1xsg',
  // -Glyph of Totem of Wrath: When you cast Totem of Wrath: you gain $63280s1% of the totem's bonus spell power for $63283d.

  753: '1xsv',
  // -Glyph of Hex: Increases the damage your Hex target can take before the Hex effect is removed by $63291s1%.

  754: '1xt2',
  // -Glyph of Stoneclaw Totem: Your Stoneclaw Totem also places a damage absorb shield on you: equal to $63298s1 times the strength of the shield it places on your totems.

  755: '1xt6',
  // -Glyph of Haunt: The bonus damage granted by your Haunt spell is increased by an additional $63302s1%.

  756: '1xt7',
  // -Glyph of Metamorphosis: Increases the duration of your Metamorphosis by ${$63303m1/1000} sec.

  757: '1xt8',
  // -Glyph of Chaos Bolt: Reduces the cooldown on Chaos Bolt by ${$63304m1/-1000} sec.

  758: '1xtd',
  // -Glyph of Demonic Circle: Reduces the cooldown on Demonic Circle by ${$63309m1/-1000} sec.

  759: '1xte',
  // -Glyph of Shadowflame: Your Shadowflame also applies a $63310s1% movement speed slow on its victims.

  760: '1xtr',
  // -Glyph of Life Tap: When you use Life Tap or Dark Pact: you gain $63321s1% of your Spirit as spell power for $63321d.

  761: '1xtg',
  // -Glyph of Soul Link: Increases the percentage of damage shared via your Soul Link by an additional $63312s1%.

  762: '1xtw',
  // -Glyph of Bladestorm: Reduces the cooldown on Bladestorm by ${$63324m1/-1000} sec.

  763: '1xtx',
  // -Glyph of Shockwave: Reduces the cooldown on Shockwave by ${$63325m1/-1000} sec.

  764: '1xty',
  // -Glyph of Vigilance: Your Vigilance ability transfers an additional $63326s1% of your target's threat to you.

  765: '1xtz',
  // -Glyph of Enraged Regeneration: Your Enraged Regeneration ability heals for an additional ${$63327m1*10}% of your health over its duration.

  766: '1xv0',
  // -Glyph of Spell Reflection: Reduces the cooldown on Spell Reflection by ${$63328m1/-1000} sec.

  767: '1xv1',
  // -Glyph of Shield Wall: Reduces the cooldown on Shield Wall by ${$63329m1/-60000} min: but Shield Wall now only reduces damage taken by ${60-$63329m2}%.

  768: '1xv2',
  // -Glyph of Dancing Rune Weapon: Increases the duration of Dancing Rune Weapon by ${$63330m1/1000} sec.

  769: '1xv3',
  // -Glyph of Hungering Cold: Reduces the cost of Hungering Cold by ${$63331m1/-10} runic power.

  770: '1xv4',
  // -Glyph of Unholy Blight: Increases the damage done by Unholy Blight by $63332s1%.

  771: '1xv5',
  // -Glyph of Dark Death: Increases the damage or healing done by Death Coil by $63333s1%.

  772: '1xv6',
  // -Glyph of Disease: Your Pestilence ability now refreshes disease durations and secondary effects of diseases on your primary target back to their maximum duration.

  773: '1xv7',
  // -Glyph of Howling Blast: Your Howling Blast ability now infects your targets with Frost Fever.

  791: '',
  //
  // -Glyph of Envenom: Your Envenom ability no longer consumes Deadly Poison from your target.

  811: '1zpv',
  // -Glyph of Survival Instincts: Your Survival Instincts ability grants an additional $s1% of your maximum health.

  831: '220e',
  // -Glyph of Claw: Reduces the energy cost of your Claw ability by $67598s1.

  871: '258s',
  // -Glyph of Eternal Water: Your Summon Water Elemental now lasts indefinitely: but your Water Elemental can no longer cast Freeze.

  891: '25b5',
  // -Glyph of Rapid Rejuvenation: Your haste now reduces the time between the periodic healing ticks of your Rejuvenation spell.

  911: '2593',
  // -Glyph of Quick Decay: Your haste now reduces the time between periodic damage ticks of your Corruption spell.

  431: '1rg0',
  // -Glyph of Aquatic Form: Increases your swim speed by $57856s1% while in Aquatic Form.

  432: '1rg2',
  // -Glyph of Challenging Roar: Reduces the cooldown of your Challenging Roar ability by ${$57858m1/-1000} sec.

  433: '1rfz',
  // -Glyph of the Wild: Mana cost of your Mark of the Wild and Gift of the Wild spells reduced by $57855s1%.

  434: '1rg1',
  // -Glyph of Unburdened Rebirth: Your Rebirth spell no longer requires a reagent.

  435: '1rg6',
  // -Glyph of Thorns: Increases the duration of your Thorns ability by $57862s1 min when cast on yourself.

  439: '1rga',
  // -Glyph of Revive Pet: Reduces the pushback suffered from damaging attacks while casting Revive Pet by $57866s1%.

  440: '1rge',
  // -Glyph of Mend Pet: Your Mend Pet spell increases your pet's happiness slightly.

  441: '1rhf',
  // -Glyph of Feign Death: Reduces the cooldown of your Feign Death spell by ${$57903m1/-1000} sec.

  442: '1rhe',
  // -Glyph of Scare Beast: Reduces the pushback suffered from damaging attacks while casting Scare Beast by $57902s1%.

  443: '1rhg',
  // -Glyph of the Pack: Increases the range of your Aspect of the Pack ability by $57904s1 yards.

  444: '1rhc',
  // -Glyph of Possessed Strength: Increases the damage your pet inflicts while using Eyes of the Beast by $57900s1%.

  445: '1rj4',
  // -Glyph of Arcane Intellect: Reduces the mana cost of your Arcane Intellect and Arcane Brilliance spells by $57924s1%.

  446: '1rj6',
  // -Glyph of Fire Ward: You have an additional $57926s1% chance to reflect Fire spells while your Fire Ward is active.

  447: '1rj7',
  // -Glyph of Frost Ward: You have an additional $57927s1% chance to reflect Frost spells while your Frost Ward is active.

  448: '1rj8',
  // -Glyph of Frost Armor: Increases the duration of your Frost Armor and Ice Armor spells by ${$57928m1/60000} min.

  449: '',
  // -Glyph of the Bear Cub: Your Polymorph: Sheep spell polymorphs the target into a polar bear cub instead.

  450: '1kd8',
  // -Glyph of the Penguin: Your Polymorph: Sheep spell polymorphs the target into a penguin instead.

  451: '1rj5',
  // -Glyph of Slow Fall: Your Slow Fall spell no longer requires a reagent.

  452: '1rjh',
  // -Glyph of Blessing of Kings: Reduces the mana cost of your Blessing of Kings and Greater Blessing of Kings spells by $57937s1%.

  453: '1rk6',
  // -Glyph of Blessing of Might: Increases the duration of your Blessing of Might spell by $57958s1 min when cast on yourself.

  454: '1rkv',
  // -Glyph of Blessing of Wisdom: Increases the duration of your Blessing of Wisdom spell by $57979s1 min when cast on yourself.

  455: '1rk3',
  // -Glyph of Lay on Hands: Reduces the cooldown of your Lay on Hands spell by ${$57955m1/-60000} min.

  456: '1rjv',
  // -Glyph of Sense Undead: Damage against Undead increased by $57947s1% while your Sense Undead ability is active.

  457: '1rk2',
  // -Glyph of the Wise: Reduces the mana cost of your Seal of Wisdom spell by $57954s1%.

  458: '1rm1',
  // -Glyph of Fading: Reduces the mana cost of your Fade spell by $57985s1%.

  459: '1rm3',
  // -Glyph of Levitate: Your Levitate spell no longer requires a reagent.

  460: '1rms',
  // -Glyph of Fortitude: Reduces the mana cost of your Power Word: Fortitude and Prayer of Fortitude spells by $58009s1%.

  461: '1rm2',
  // -Glyph of Shackle Undead: Increases the range of your Shackle Undead spell by $57986s1 yards.

  462: '1rmz',
  // -Glyph of Shadow Protection: Increases the duration of your Shadow Protection and Prayer of Shadow Protection spells by ${$58015m1/60000} min.

  463: '1rvm',
  // -Glyph of Shadowfiend: Receive $58227s1% of your maximum mana if your Shadowfiend dies from damage.

  464: '1rng',
  // -Glyph of Distract: Increases the range of your Distract ability by $58032s1 yards.

  465: '1rnb',
  // -Glyph of Pick Lock: Reduces the cast time of your Pick Lock ability by $58027s1%.

  466: '1rn1',
  // -Glyph of Pick Pocket: Increases the range of your Pick Pocket ability by $58017s1 yards.

  467: '1rnh',
  // -Glyph of Safe Fall: Increases the distance your Safe Fall ability allows you to fall without taking damage.

  468: '1rnq',
  // -Glyph of Blurred Speed: Enables you to walk on water while your Sprint ability is active.

  469: '1rnp',
  // -Glyph of Vanish: Increases your movement speed by $58038s1% while the Vanish effect is active.

  470: '1rpa',
  // -Glyph of Astral Recall: Cooldown of your Astral Recall spell reduced by ${$58058m1/-60000}.1 min.

  473: '1rpb',
  // -Glyph of Renewed Life: Your Reincarnation spell no longer requires a reagent.

  474: '1rp7',
  // -Glyph of Water Breathing: Your Water Breathing spell no longer requires a reagent.

  475: '1rpf',
  // -Glyph of Water Shield: Increases the number of charges on your Water Shield spell by $58063s1.

  476: '1rp9',
  // -Glyph of Water Walking: Your Water Walking spell no longer requires a reagent.

  477: '1rpz',
  // -Glyph of Unending Breath: Increases the swim speed of targets affected by your Unending Breath spell by $58079s1%.

  478: '1rpp',
  // -Glyph of Drain Soul: Your Drain Soul ability occasionally creates an additional soul shard.

  479: '1rq1',
  // -Glyph of Kilrogg: Increases the movement speed of your Eye of Kilrogg by $s1% and allows it to fly in areas where flying mounts are enabled.

  481: '1rqv',
  // -Glyph of Enslave Demon: Reduces the cast time of your Enslave Demon spell by $58107s1%.

  482: '1rqe',
  // -Glyph of Souls: Reduces the mana cost of your Ritual of Souls spell by $58094s1%.

  483: '1rqf',
  // -Glyph of Battle: Increases the duration of your Battle Shout ability by ${$58095m1/60000} min.

  484: '1rqg',
  // -Glyph of Bloodrage: Reduces the health cost of your Bloodrage ability by $s1%.

  485: '1rqh',
  // -Glyph of Charge: Increases the range of your Charge ability by $58097s1 yards.

  486: '1rqk',
  // -Glyph of Mocking Blow: Increases the damage of your Mocking Blow ability by $58099s1%.

  487: '1rqj',
  // -Glyph of Thunder Clap: Increases the radius of your Thunder Clap ability by $58098s1 yards.

  488: '1rqr',
  // -Glyph of Enduring Victory: Increases the window of opportunity in which you can use Victory Rush by ${$58104m1/1000} sec.

  514: '1s8g',
  // -Glyph of Blood Tap: Your Blood Tap no longer causes damage to you.

  518: '1s9n',
  // -Glyph of Death's Embrace: Your Death Coil refunds $s1 runic power when used to heal.

  522: '1s9r',
  // -Glyph of Horn of Winter: Increases the duration of your Horn of Winter ability by ${$58680m1/60000} min.

  551: '1stk',
  // -Glyph of Dash: Reduces the cooldown of your Dash ability by $59219s1%.

  552: '1sws',
  // -Glyph of Ghost Wolf: Your Ghost Wolf form regenerates an additional $59289s1% of your maximum health every 5 sec.

  553: '1sxd',
  // -Glyph of Pestilence: Increases the radius of your Pestilence effect by $59309s1 yards.

  554: '1sxb',
  // -Glyph of Corpse Explosion: Increases the radius of effect on Corpse Explosion by $59307s1 yards.

  555: '1ts8',
  // -Glyph of Raise Dead: Your Raise Dead spell no longer requires a reagent.

  611: '1wne',
  // -Glyph of Blast Wave: The mana cost of your Blast Wave spell is reduced by $62126s1%: but it no longer knocks enemies back.

  612: '1wnm',
  // -Glyph of Thunderstorm: Increases the mana you receive from your Thunderstorm spell by $62132s1%: but it no longer knocks enemies back.

  613: '1wnq',
  // -Glyph of Typhoon: Reduces the cost of your Typhoon spell by $62135s1% and increases its radius by $62135s2 yards: but it no longer knocks enemies back.

  851: '22j4',
  // -Glyph of Command: Increases the duration of your Commanding Shout ability by ${$68164m1/60000} min.
}
