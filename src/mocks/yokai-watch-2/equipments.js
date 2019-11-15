const equipments = [
    {
        index: 0,
        name: 'Worn Bangle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/worn_bangle.png',
        description:
            "It's sort of cheap, but some Yo-kai say it's just right for them!",
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Lie-in',
            'Dropped by Chansin',
            'Dropped by Mircle'
        ],
        statsInfo: { str: '+10', spr: '0', def: '0', spd: '-5' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 1,
        name: 'Cheap Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheap_bracelet.png',
        description: "It's not the classiest accessory, but it does the job.",
        effect: '',
        locations: [
            'Downtown Springdale – Delivery Bay',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Tublappa',
            "Dropped by N'more",
            'Dropped by Grublappa'
        ],
        statsInfo: { str: '+10', spr: '0', def: '-5', spd: '0' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 2,
        name: 'Rocker Wrist',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rocker_wrist.png',
        description:
            "A rocker bracelet with spikes. It'd hurt to be on the receiving end.",
        effect: '',
        locations: [
            'Breezy Hills – Gourd Pond Museum',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by B3-NK1',
            'Dropped by Suspicioni',
            'Dropped by Croonger',
            'Dropped by Samureel',
            'Dropped by Takoyakid',
            'Dropped by Gutsy Bones',
            'Quest – Officially Official!',
            'Lottery'
        ],
        statsInfo: { str: '+18', spr: '0', def: '0', spd: '-8' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 3,
        name: 'Power Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/power_bracelet.png',
        description:
            'Makes the wearer tough enough to crush apples bare-handed!',
        effect: '',
        locations: [
            'Downtown Springdale – Springdale Business Tower',
            'Old Springdale',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Undy',
            'Dropped by Helmsman',
            'Dropped by Benkei',
            'Dropped by Predictabull',
            'Dropped by Defectabull',
            'Dropped by Slumberhog',
            'Quest – Officially Official!',
            "Quest – Which Beetle's Better",
            'Lottery'
        ],
        statsInfo: { str: '+18', spr: '0', def: '-8', spd: '0' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 4,
        name: 'Brute Bracer',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/brute_bracer.png',
        description: "Like solving problems with strength? This one's for you.",
        effect: '',
        locations: [
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            "Shopper's Row – Tranquility Apts. – A–201",
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Flamurice',
            'Dropped by Scarasol',
            'Dropped by Agon',
            'Dropped by Belfree',
            'Dropped by Sproink',
            'Dropped by Time Keeler',
            'Dropped by Takoyaking',
            'Quest – Eerie, Roving Armor',
            'Lottery'
        ],
        statsInfo: { str: '+25', spr: '0', def: '0', spd: '-12' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 5,
        name: 'Grand Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/grand_bracelet.png',
        description:
            'An elegant, strength-enhancing item that helps with heavy lifting.',
        effect: '',
        locations: [
            'Blossom Heights – Old Mansion Attic',
            'San Fantastico – Seaside Cave',
            'Old Springdale – Flatpot Plains',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Chansin',
            'Dropped by Baddinyan',
            'Dropped by Papa Bolt',
            'Dropped by Eyesoar',
            'Dropped by Robbinyu',
            'Dropped by Rawry',
            'Dropped by Copperled',
            'Dropped by Hovernyan',
            'Dropped by Snortlehog',
            'Lottery'
        ],
        statsInfo: { str: '+25', spr: '0', def: '-12', spd: '0' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 6,
        name: 'Sun Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sun_bracelet.png',
        description:
            'A heavy gold bracelet said to contain the power of the sun.',
        effect: '',
        locations: [
            'Infinite Inferno – 4th Circle',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Memory Store',
            'Dropped by Siro',
            'Dropped by Beetall',
            'Dropped by Swelterrier',
            'Dropped by Phantasmurai',
            'Dropped by Spooklunk',
            'Quest – Find Gnomey!',
            'Quest – C-1 Grand Prix S',
            'Lottery'
        ],
        statsInfo: { str: '+35', spr: '0', def: '0', spd: '-15' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 7,
        name: 'Comet Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/comet_bracelet.png',
        description:
            'Unleashes the destructive force of a comet flying through space.',
        effect: '',
        locations: [
            'Yo–kai World – Hooligan Road',
            "Breezy Hills – Gate Room – Compunzer's Zone",
            'Mystery Way',
            'Gold–Gleaming Hwy.',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Memory Store',
            'Dropped by Zerberker',
            'Dropped by Cruncha',
            'Dropped by Venoct',
            'Dropped by Untidy',
            'Dropped by Massiface',
            'Quest – Find Gnomey!',
            'Quest – The Phantom Giant',
            'Lottery'
        ],
        statsInfo: { str: '+35', spr: '0', def: '-15', spd: '0' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 8,
        name: 'Fiend Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_band.png',
        description:
            "A bracelet bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [
            'Dropped by Gargaros',
            "Quest – Nyada's Trials V",
            'Quest – The Bony General'
        ],
        statsInfo: { str: '+50', spr: '0', def: '0', spd: '-25' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 9,
        name: 'Legend Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_bracelet.png',
        description: 'A fabled fashion accessory that crackles with power.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise – 5F',
            'Jungle Hunter',
            "Dropped by Cap'n Rex",
            'Quest – Fleshy Souls General'
        ],
        statsInfo: { str: '+50', spr: '0', def: '-25', spd: '0' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 10,
        name: 'Rusty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rusty_ring.png',
        description: "A ring that's gotten old and rusty. It still has power.",
        effect: '',
        locations: [
            "Shopper's Row – Tranquility Apts. – B–201",
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Slacka-slash',
            'Dropped by Robonoko'
        ],
        statsInfo: { str: '0', spr: '+10', def: '-5', spd: '0' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 11,
        name: 'Ugly Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ugly_ring.png',
        description: "It's not pretty, but it's pretty effective.",
        effect: '',
        locations: [
            'Blossom Heights – Secret Byway',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Illoo',
            'Dropped by Yoink',
            'Dropped by Chatalie'
        ],
        statsInfo: { str: '0', spr: '+10', def: '0', spd: '-5' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 12,
        name: 'Pretty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pretty_ring.png',
        description: 'A cute ring of pink gold. Lady Yo-kai like it a lot.',
        effect: '',
        locations: [
            'Harrisville – Old House by The Station',
            'Mt.Wildwood – Crank–a–kai – Flower Excitement Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Tattletell',
            'Dropped by Rattelle',
            'Dropped by Nagatha',
            'Dropped by Toiletta',
            'Dropped by Happycane',
            'Quest – Springdale Star Pt. 1',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+18', def: '-8', spd: '0' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 13,
        name: 'Rainbow Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rainbow_ring.png',
        description:
            'A beautiful ring that sparkles with all the colors of the rainbow.',
        effect: '',
        locations: [
            'Downtown Springdale – Springdale Business Tower',
            'Old Harrisville',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Smogling',
            'Dropped by Elloo',
            'Dropped by Zappary',
            "Dropped by K'mon-K'mon",
            'Dropped by Droplette',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+18', def: '0', spd: '-8' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 14,
        name: 'Illusion Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/illusion_ring.png',
        description:
            'Anyone who wears this ring can easily use Yo-kai Techniques.',
        effect: '',
        locations: [
            'Blossom Heights',
            'Old Springdale – Flatpot Plains',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            "Dropped by Q'wit",
            'Dropped by Espy',
            'Dropped by Drizzelda',
            'Dropped by Blandon',
            'Dropped by Snobetty',
            'Dropped by Vacuumory',
            'Dropped by Groupus Khan',
            'Dropped by Starrycane',
            'Dropped by Kin',
            "Quest – No Time For Fishin'!",
            'Quest – I Just Wanna Grow Up',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+25', def: '-12', spd: '0' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 15,
        name: 'Fairy Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fairy_ring.png',
        description: 'The spirit of a fairy dwells within this ring.',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel West',
            'San Fantastico',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Tattlecast',
            'Dropped by Smogmella',
            'Dropped by Apelican',
            'Dropped by Infour',
            'Dropped by Betterfly',
            'Dropped by Insomni',
            'Dropped by Cynake',
            'Dropped by Sailornyan',
            'Dropped by Badsmella',
            "Quest – No Time For Fishin'!",
            'Quest – A Real Charmer',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+25', def: '0', spd: '-12' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 16,
        name: 'Lunar Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lunar_ring.png',
        description:
            'A softly glowing ring said to contain the power of the moon.',
        effect: '',
        locations: [
            'Infinite Inferno – 7th Circle',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Memory Store',
            'Dropped by Kyubi',
            'Dropped by Peppillon',
            'Dropped by Darknyan',
            'Dropped by Unkeen',
            'Dropped by Clipso',
            'Quest – Find Mermaidyn!',
            'Quest – Springdale Star Pt. 2',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+35', def: '-15', spd: '0' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 17,
        name: 'Ring of Fate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ring_of_fate.png',
        description: "Imbued with the power to alter one's destiny.",
        effect: '',
        locations: [
            'Yo–kai World – Entry Hall',
            'Mystery Way',
            'Gold–Gleaming Hwy.',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Memory Store',
            'Dropped by Frostail',
            'Dropped by Dragon Lord',
            'Dropped by Mermadonna',
            'Dropped by Unpleasant',
            'Quest – Find Mermaidyn!',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '+35', def: '0', spd: '-15' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 18,
        name: 'Fiend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_ring.png',
        description: "A ring bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [
            'Dropped by Ogralus',
            "Quest – Nyada's Trials V",
            'Quest – The Old Fox Shrine'
        ],
        statsInfo: { str: '0', spr: '+50', def: '-25', spd: '0' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 19,
        name: 'Legend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_ring.png',
        description: 'A mythical fashion accessory with untold power.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise – 3F',
            'Jungle Hunter',
            'Dropped by Flippa',
            'Quest – Enma and the Serpent'
        ],
        statsInfo: { str: '0', spr: '+50', def: '0', spd: '-25' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 20,
        name: 'Aged Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aged_charm.png',
        description: 'An old charm whose power has atrophied over the years.',
        effect: '',
        locations: [
            "Shopper's Row",
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Wotchagot',
            'Dropped by Fidgephant',
            "Dropped by Ol' Fortune"
        ],
        statsInfo: { str: '0', spr: '-5', def: '+10', spd: '0' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 21,
        name: 'Old Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/old_charm.png',
        description:
            "It's seen better days, but it can still offer a little power.",
        effect: '',
        locations: [
            'Blossom Heights',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by No-Go Kart',
            'Dropped by Touphant'
        ],
        statsInfo: { str: '-5', spr: '0', def: '+10', spd: '0' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 22,
        name: 'Runic Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/runic_charm.png',
        description: 'A charm with a mysterious pattern upon it.',
        effect: '',
        locations: [
            'Breezy Hills – Gourd Pond Museum',
            'Old Harrisville',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Mimikin',
            'Dropped by Blowkade',
            'Dropped by Fishpicable',
            'Dropped by Babblong',
            'Dropped by Grumpus Khan',
            'Dropped by Sumodon',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-8', def: '+18', spd: '0' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 23,
        name: 'Protective Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/protective_charm.png',
        description: 'Offers divine protection to the wearer.',
        effect: '',
        locations: [
            'Blossom Heights – Old Mansion House',
            'Harrisville – Fullface Rock',
            'Old Springdale – Fox Shrine Road',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Goruma',
            'Dropped by Roughraff',
            'Dropped by Castelius III',
            'Dropped by Alhail',
            'Dropped by Danke Sand',
            'Dropped by Whateverest',
            'Lottery'
        ],
        statsInfo: { str: '-8', spr: '0', def: '+18', spd: '0' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 24,
        name: 'Armor Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/armor_charm.png',
        description: 'A charm said to provide impregnable defense.',
        effect: '',
        locations: [
            'Blossom Heights – Hidden Side Street',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Casanono',
            'Dropped by Bowminos',
            'Dropped by Mistank',
            'Dropped by Rhinoggin',
            'Dropped by Hornaplenty',
            'Dropped by Greesel',
            'Dropped by Rageon',
            'Dropped by Yokozudon',
            "Dropped by Cap'n Crash",
            'Quest – Secrets of Soulcery',
            'Quest – The Heartthrobs',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-12', def: '+25', spd: '0' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 25,
        name: 'Lucky Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lucky_charm.png',
        description: 'Brings good fortune and offers powerful protection.',
        effect: '',
        locations: [
            'Uptown Springdale – Lonely Waterway',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Miradox',
            'Dropped by Pride Shrimp',
            'Dropped by Bruff',
            'Dropped by Shmoopie',
            'Dropped by Don Chan',
            'Dropped by Noko',
            'Dropped by Jetnyan',
            'Dropped by No Sandkyu',
            'Dropped by Whatuption',
            'Quest – Secrets of Soulcery',
            'Quest – Gone Haunting',
            'Lottery'
        ],
        statsInfo: { str: '-12', spr: '0', def: '+25', spd: '0' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 26,
        name: 'Galaxy Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/galaxy_charm.png',
        description: 'A powerful charm that sparkles like a nebula.',
        effect: '',
        locations: [
            'Breezy Hills – Gate Room – Traffic–Light Zone',
            'Mystery Way',
            'Gold–Gleaming Hwy.',
            'Infinite Inferno – 6th Circle',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Memory Store',
            'Dropped by Swosh',
            'Dropped by Uncle Infinite',
            'Dropped by Wobblewok',
            'Dropped by Unfairy',
            "Quest – The Shrine's Part",
            'Quest – Ultimate Bear Boy',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-15', def: '+35', spd: '0' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 27,
        name: 'Earth Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/earth_charm.png',
        description:
            'This charm draws its power from the spirit of the earth itself.',
        effect: '',
        locations: [
            'Infinite Inferno – 1st Circle',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Memory Store',
            'Dropped by Walldin',
            'Dropped by Enduriphant',
            'Dropped by Dromp',
            'Dropped by Sproink',
            'Dropped by Hoggles',
            "Quest – The Shrine's Part",
            'Quest – Treasure Hunters Pt. 3',
            'Lottery'
        ],
        statsInfo: { str: '-15', spr: '0', def: '+35', spd: '0' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 28,
        name: 'Fiend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_charm.png',
        description: "A charm bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: ['Quest – Watch the Skies'],
        statsInfo: { str: '0', spr: '-25', def: '+50', spd: '0' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 29,
        name: 'Legend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_charm.png',
        description:
            'A famed charm that offers the wearer unmatched protection.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise – 1F',
            'Jungle Hunter',
            'Dropped by Dame Dredful',
            'Quest – The God of the Sea'
        ],
        statsInfo: { str: '-25', spr: '0', def: '+50', spd: '0' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 30,
        name: 'Simple Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/simple_badge.png',
        description:
            'Sometimes simple is best. This badge bumps up your Speed.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            "Quest – Matt, Don't Give Up!"
        ],
        statsInfo: { str: '-5', spr: '0', def: '0', spd: '+8' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 31,
        name: 'Black Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_badge.png',
        description: 'A mysterious dark badge that boosts your Speed.',
        effect: '',
        locations: [
            'Downtown Springdale',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Mirapo',
            'Dropped by Mircle',
            'Dropped by Dubbles',
            "Quest – Matt, Don't Give Up!"
        ],
        statsInfo: { str: '0', spr: '-5', def: '0', spd: '+8' },
        priceInfo: { sell: '1,8', buy: '18' },
        type: 'equipments'
    },
    {
        index: 32,
        name: 'Shiny Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shiny_badge.png',
        description: 'A cool badge that shines bright. Kids love this one!',
        effect: '',
        locations: [
            'Excellent Tower',
            'Old Springdale',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Pupsicle',
            'Dropped by Komajiro',
            'Dropped by Baku',
            'Dropped by Rockabelly',
            'Dropped by Draggie',
            'Dropped by Panja Pupil',
            'Lottery'
        ],
        statsInfo: { str: '-8', spr: '0', def: '0', spd: '+15' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 33,
        name: 'Cute Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cute_badge.png',
        description:
            "An adorable glittery badge. It's actually functional too!",
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'Old Harrisville',
            'Mt.Wildwood – Crank–a–kai – Flower Excitement Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Signibble',
            'Dropped by Komasan',
            'Dropped by Whapir',
            'Dropped by Frostina',
            'Dropped by Chippa',
            'Quest – Makeover Takeover',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-8', def: '0', spd: '+15' },
        priceInfo: { sell: '6,5', buy: '65' },
        type: 'equipments'
    },
    {
        index: 34,
        name: 'Hermes Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hermes_badge.png',
        description: 'A badge that lets you run like the wind.',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel East',
            "Shopper's Row – Nocturne Hospital",
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Thornyan',
            'Dropped by Komiger',
            'Dropped by Mama Aura',
            'Dropped by Nul',
            'Dropped by Bananose',
            'Dropped by Draaagin',
            'Dropped by Panja Pro',
            'Dropped by Eyeclone',
            'Quest – True Hide-and-Seek',
            'Quest – Ultra Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: { str: '-12', spr: '0', def: '0', spd: '+20' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 35,
        name: 'Aurora Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aurora_badge.png',
        description: 'A badge that pulsates with scintillating starlight.',
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Failian',
            'Dropped by Chilhuahua',
            'Dropped by Komane',
            'Dropped by Blizzaria',
            'Dropped by Nurse Tongus',
            'Dropped by Auntie Heart',
            'Dropped by Gush',
            'Dropped by Sandi',
            'Dropped by Slitheref',
            'Dropped by Jibakoma',
            'Quest – True Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-12', def: '0', spd: '+20' },
        priceInfo: { sell: '11', buy: '110' },
        type: 'equipments'
    },
    {
        index: 36,
        name: 'Meteor Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/meteor_badge.png',
        description:
            'A badge shaped like a shooting star, with power to match.',
        effect: '',
        locations: [
            'Yo–kai World – Liar Mountain',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Memory Store',
            'Dropped by Master Nyada',
            'Dropped by Smashibull',
            'Dropped by Eyellure',
            'Dropped by Unkaind',
            'Dropped by Hans Full',
            "Quest – Retrace Dad's Steps",
            'Lottery'
        ],
        statsInfo: { str: '-15', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 37,
        name: 'Lightning Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lightning_badge.png',
        description: "A fast-moving accessory. Blink and you'll miss it!",
        effect: '',
        locations: [
            'Mystery Way',
            'Bony Spirits Way',
            'Fleshy Souls',
            'Gold–Gleaming Hwy.',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Memory Store',
            'Dropped by Signiton',
            'Dropped by Statiking',
            'Dropped by Master Oden',
            'Dropped by Frazzel',
            'Dropped by Tarantutor',
            "Quest – Retrace Dad's Steps",
            'Quest – Expert Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '-15', def: '0', spd: '+30' },
        priceInfo: { sell: '28', buy: '280' },
        type: 'equipments'
    },
    {
        index: 38,
        name: 'Fiend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_badge.png',
        description: "A badge bearing a demon's crest. It houses unholy speed.",
        effect: '',
        locations: ['Quest – C-1 Grand Prix X'],
        statsInfo: { str: '-25', spr: '0', def: '0', spd: '40' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 39,
        name: 'Legend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_badge.png',
        description:
            'A powerful accessory that gives an incredible boost to Speed.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise – 4F',
            'Jungle Hunter',
            "Quest – Nyada's Trials III"
        ],
        statsInfo: { str: '0', spr: '-25', def: '0', spd: '+40' },
        priceInfo: { sell: '80', buy: '800' },
        type: 'equipments'
    },
    {
        index: 40,
        name: 'Cicada Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cicada_sword.png',
        description:
            'The sword of the cicada-style ninja. Only for cicada Yo-kai.',
        effect: '',
        locations: ['Dropped by Cadable', 'Dropped by Singcada', 'Lottery'],
        statsInfo: { str: '+35', spr: '0', def: '0', spd: '+35' },
        priceInfo: { sell: '15', buy: '15' },
        type: 'equipments'
    },
    {
        index: 41,
        name: 'Beefy Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/beefy_bell.png',
        description:
            'Use this cat bell if you want to get beefy! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', 'Quest – Bam-Boom! Fusing!'],
        statsInfo: { str: '+50', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '20', buy: '20' },
        type: 'equipments'
    },
    {
        index: 42,
        name: 'Spell Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spell_bell.png',
        description:
            'Use this cat bell if you want elegance! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', 'Quest – Bam-Boom! Fusing!'],
        statsInfo: { str: '0', spr: '+50', def: '0', spd: '0' },
        priceInfo: { sell: '20', buy: '20' },
        type: 'equipments'
    },
    {
        index: 43,
        name: 'Tough Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tough_bell.png',
        description:
            'Use this cat bell if you want to be tough! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', "Quest – The Ironworks' Part"],
        statsInfo: { str: '0', spr: '0', def: '+50', spd: '0' },
        priceInfo: { sell: '20', buy: '20' },
        type: 'equipments'
    },
    {
        index: 44,
        name: 'Speed Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_bell.png',
        description:
            'Use this cat bell if you want to be speedy! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', "Quest – The Ironworks' Part"],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '20', buy: '20' },
        type: 'equipments'
    },
    {
        index: 45,
        name: 'Big Bottle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/big_bottle.png',
        description:
            'A water bottle that never runs dry. For kappa Yo-kai only.',
        effect: 'Boosts water power.Lowers water defense.',
        locations: [
            'Jungle Hunter',
            'Dropped by Walkappa',
            'Dropped by Appak',
            'Dropped by Supyo',
            'Dropped by Faux Kappa',
            'Dropped by Tigappa',
            'Dropped by Mad Kappa',
            'Quest – The Realest Kappa'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '30', buy: '30' },
        type: 'equipments'
    },
    {
        index: 46,
        name: 'Tengu Fan',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tengu_fan.png',
        description:
            'Tengu draw power from fans like these. For tengu Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '+100', def: '0', spd: '+100' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'equipments'
    },
    {
        index: 47,
        name: 'Cheery Coat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheery_coat.png',
        description:
            "This'll make you wanna dance! For Wiglin, Steppa, and Rhyth only.",
        effect: '',
        locations: ['Quest – Trying Tangle Tango', 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+50' },
        priceInfo: { sell: '18', buy: '18' },
        type: 'equipments'
    },
    {
        index: 48,
        name: 'Nail Bat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nail_bat.png',
        description:
            'A bat with nails sticking out of it. Only for Badude and Bruff.',
        effect: '',
        locations: ['Jungle Hunter', 'Dropped by Badude'],
        statsInfo: { str: '+50', spr: '0', def: '-25', spd: '0' },
        priceInfo: { sell: '30', buy: '30' },
        type: 'equipments'
    },
    {
        index: 49,
        name: 'Drumsticks',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/drumsticks.png',
        description: 'Don Chan uses these to thump out big, bold rhythms.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest – Inspirited Away'],
        statsInfo: { str: '0', spr: '+40', def: '+60', spd: '0' },
        priceInfo: { sell: '14', buy: '14' },
        type: 'equipments'
    },
    {
        index: 50,
        name: 'Robovitamin E',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/robovitamin_e.png',
        description: 'A drink that makes robotic Yo-kai run more smoothly.',
        effect: '',
        locations: [
            'Dropped by Robonyan',
            'Dropped by Robokapp',
            'Dropped by Robokoma',
            'Dropped by Robogramps',
            'Dropped by Robomutt',
            'Dropped by Robonoko',
            'Dropped by Robodraggie',
            'Quest – From the Future!',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '+45', spd: '+20' },
        priceInfo: { sell: '35', buy: '35' },
        type: 'equipments'
    },
    {
        index: 51,
        name: "Burly's Wristband",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/burly_s_wristband.png',
        description: "Imbued with Sgt. Burly's thirst for bigger muscles.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Sgt. Burly',
            "Quest – Jibanyan's Secret"
        ],
        statsInfo: { str: '+60', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '28', buy: '28' },
        type: 'equipments'
    },
    {
        index: 52,
        name: 'Memory Chime',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/memory_chime.png',
        description: 'This treasured chime reminds Jibanyan of Amy.',
        effect: '',
        locations: ["Quest – Jibanyan's Secret"],
        statsInfo: { str: '+40', spr: '0', def: '0', spd: '+40' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'equipments'
    },
    {
        index: 53,
        name: 'Bony Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bony_band.png',
        description:
            'Inspires Bony Spirits Yo-kai to outdo their Fleshy Souls rivals.',
        effect: '+ Damage to Fleshy Yo-kai.',
        locations: [
            'Old Springdale – Flatpot Plains',
            'Dropped by Faysoff',
            'Dropped by Mad Mountain',
            'Dropped by Herbiboy',
            'Dropped by Carniboy',
            'Dropped by Irewig',
            'Dropped by Firewig',
            'Quest – Find Faux Kappa!',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '30', buy: '30' },
        type: 'equipments'
    },
    {
        index: 54,
        name: 'Fleshy Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fleshy_band.png',
        description:
            'Inspires Fleshy Souls Yo-kai to outdo their Bony Spirits rivals.',
        effect: '+ Damage to Bony Yo-kai.',
        locations: [
            'Old Springdale – Flatpot Plains',
            'Dropped by Impass',
            'Dropped by Lava Lord',
            'Dropped by Boyclops',
            'Dropped by Wydeawake',
            'Dropped by Allnyta',
            'Dropped by Count Zapaway',
            'Quest – Find Faux Kappa!',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '30', buy: '30' },
        type: 'equipments'
    },
    {
        index: 55,
        name: 'Reversword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reversword.png',
        description:
            'This sword strengthens the weak. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: [
            "Quest – Timers & More's Part",
            "Quest – Little Grandma's Helper",
            'Lottery'
        ],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '25', buy: '25' },
        type: 'equipments'
    },
    {
        index: 56,
        name: 'Turnabeads',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/turnabeads.png',
        description:
            'A jewel that gives the weak power. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '+30', def: '0', spd: '+30' },
        priceInfo: { sell: '25', buy: '25' },
        type: 'equipments'
    },
    {
        index: 57,
        name: 'Reflector',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reflector.png',
        description:
            'One of a wimpy trinity of items. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: ["Quest – Timers & More's Part", 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '+30' },
        priceInfo: { sell: '25', buy: '25' },
        type: 'equipments'
    },
    {
        index: 58,
        name: 'Paradise Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/paradise_ball.png',
        description: 'A gem that can only be used by B-Rank or lower Yo-kai.',
        effect: '',
        locations: ['Dropped by Kat Kraydel'],
        statsInfo: { str: '0', spr: '0', def: '+50', spd: '+50' },
        priceInfo: { sell: '100', buy: '100' },
        type: 'equipments'
    },
    {
        index: 59,
        name: 'Sinister Screed',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sinister_screed.png',
        description: 'Cures cursed Yo-kai and curses healthy ones.',
        effect: '+ Damage to Wicked Yo-kai. Dmg. to non-Wicked.',
        locations: [
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Quest – Gera Gera Good-Byes'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '150', buy: '150' },
        type: 'equipments'
    },
    {
        index: 60,
        name: 'Cursed Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_sword.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: ['Mystery Way – Crank–a–kai – Boar Mystery Coin'],
        statsInfo: { str: '+80', spr: '0', def: '0', spd: '-40' },
        priceInfo: { sell: '150', buy: '150' },
        type: 'equipments'
    },
    {
        index: 61,
        name: 'Cursed Staff',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_staff.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            "Quest – A Legend's Loco Motive",
            'Quest – Tamer of Time'
        ],
        statsInfo: { str: '0', spr: '+80', def: '0', spd: '-40' },
        priceInfo: { sell: '150', buy: '150' },
        type: 'equipments'
    },
    {
        index: 62,
        name: 'Cursed Shield',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_shield.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Quest – Getting to Gera Gera'
        ],
        statsInfo: { str: '0', spr: '0', def: '+80', spd: '-40' },
        priceInfo: { sell: '150', buy: '150' },
        type: 'equipments'
    },
    {
        index: 63,
        name: 'Cursed Robe',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_robe.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Quest – Whistory Lesson, Part 3'
        ],
        statsInfo: { str: '0', spr: '0', def: '-40', spd: '+80' },
        priceInfo: { sell: '150', buy: '150' },
        type: 'equipments'
    },
    {
        index: 64,
        name: 'Restraint Belt',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/restraint_belt.png',
        description:
            'Wear this power-lowering belt when you want to hold back.',
        effect: 'Massively lowers all stats.',
        locations: ['Quest – The Gates of Whimsy', 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '25', buy: '25' },
        type: 'equipments'
    },
    {
        index: 65,
        name: 'Monkey Circlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/monkey_circlet.png',
        description:
            'This circlet will tighten to put a stop to any evolution.',
        effect: 'Prevents Yo-kai evolving.',
        locations: [
            'Jungle Hunter',
            'Quest – The Gates of Whimsy',
            'Quest – Collection Correction',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '15', buy: '15' },
        type: 'equipments'
    },
    {
        index: 66,
        name: "General's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/general_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '800', buy: '800' },
        type: 'equipments'
    },
    {
        index: 67,
        name: "Lt. Gen's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lt._gen_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '700', buy: '700' },
        type: 'equipments'
    },
    {
        index: 68,
        name: 'Maj. Gen. Medal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/maj._gen._medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '600', buy: '600' },
        type: 'equipments'
    },
    {
        index: 69,
        name: "Colonel's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/colonel_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '500', buy: '500' },
        type: 'equipments'
    },
    {
        index: 70,
        name: "Major's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/major_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '400', buy: '400' },
        type: 'equipments'
    },
    {
        index: 71,
        name: "Captain's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/captain_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '300', buy: '300' },
        type: 'equipments'
    },
    {
        index: 72,
        name: "CDR.'s Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cdr._s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '200', buy: '200' },
        type: 'equipments'
    },
    {
        index: 73,
        name: "Lt.'s Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lt._s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '100', buy: '100' },
        type: 'equipments'
    }
];

export default equipments;
