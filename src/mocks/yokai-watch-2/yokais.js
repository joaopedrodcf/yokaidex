const yokais = [
    {
        name: 'Pandle',
        yokaiNumber: '001',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pandle.png',
        description:
            'A careless Yo-kai who enters battle wearing only a loincloth...and a pan on his head. Try not to take after him so much.',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Uptown Springdale - Desolate Lane',
            'Uptown Springdale - Elementary School 3F',
            'Uptown Springdale - Elementary School 2F',
            'Uptown Springdale - Elementary School 1F',
            'Uptown Springdale - Bushes',
            'Mystery Way - Route 2',
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle',
            'Infinite Inferno - 3rd Circle',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Careless',
            description: 'Prone to be dealtcritical attacks.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Pointy Toothpick',
            description: 'Pokes his foes with his beloved toothpick.',
            power: '18x5'
        },
        inspirit: {
            name: 'Careless',
            description: 'Makes a foe careless and decreases its DEF.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '99',
            spr: '44',
            def: '51',
            spd: '81'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [0]
    },
    {
        name: 'Undy',
        yokaiNumber: '002',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/undy.png',
        description:
            "Having abandoned the pan, Undy is pretty much bare to the world. That aside, you won't ever see him wince or bruise.",
        locations: ['Evolve Pandle at Level 18.'],
        skill: {
            name: 'Careless',
            description: 'Prone to be dealtcritical attacks.'
        },
        attack: {
            name: 'Pointy Pokes',
            power: '12x3 to 26x3'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Toothpick Rainfall',
            description: 'Pokes his foes very hard with his beloved toothpick.',
            power: '20x7'
        },
        inspirit: {
            name: 'Defenseless',
            description:
                'Makes a foe defenseless, which... lowers its DEF. Duh!',
            power: '0'
        },
        stats: {
            hp: '243',
            str: '118',
            spr: '52',
            def: '55',
            spd: '93'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [0]
    },
    {
        name: 'Tanbo',
        yokaiNumber: '003',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tanbo.png',
        description:
            'A Yo-kai that is always first to the battle! With no clothes to slow him down, he shows up early and always has a nice tan.',
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin'
        ],
        skill: {
            name: 'Careless',
            description: 'Prone to be dealtcritical attacks.'
        },
        attack: {
            name: 'Pointy Pokes',
            power: '12x3 to 26x3'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Gutsy Cut',
            description:
                'Cuts into a single foe with confidence and for high damage.',
            power: '155 to 232'
        },
        inspirit: {
            name: 'Gutsiness',
            description: "Raises an ally's SPD by making it gutsy!",
            power: '0'
        },
        stats: {
            hp: '278',
            str: '128',
            spr: '63',
            def: '59',
            spd: '95'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Cutta-nah',
        yokaiNumber: '004',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cutta-nah.png',
        description:
            "A lazy katana Yo-kai who can drain all of your motivation. He's strangely sharp for being so lazy.",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East',
            'Mt. Wildwood - Bamboo Groves',
            'Mt. Wildwood - Brushwoods',
            'Mt. Wildwood - Abandoned Tunnel West & East & Jumbo Slider - Brushwoods',
            'Blossom Heights - Bamboo groves',
            "Shopper's Row - Brushwoods & flowers",
            'Breezy Hills - Under cars & Garbages',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Old Springdale - Mt.Wildwood Shrine - Bamboo groves',
            'Fleshy Souls Way - Exit',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Bladed Body',
            description: 'Body deals damage toall foes who attack it.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Halfhearted Chop',
            description: 'Slices his opponents while lolling around. ',
            power: '20x5'
        },
        inspirit: {
            name: 'Aimless',
            description:
                'Makes Yo-kai lose their motivation and Loaf around more.',
            power: '0'
        },
        stats: {
            hp: '191',
            str: '96',
            spr: '49',
            def: '69',
            spd: '62'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [1]
    },
    {
        name: 'Cutta-nah-nah',
        yokaiNumber: '005',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cutta-nah-nah.png',
        description:
            'Too lazy to get a haircut, but not too lazy to slash enemies with his untidy strands.',
        locations: [
            'Mystery Way - Gogo Junction',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Evolve Cuttah-nah at Level 20.'
        ],
        skill: {
            name: 'Bladed Body',
            description: 'Body deals damage toall foes who attack it.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Resigned Rush',
            description:
                'Rushes into battle and spins around while slicing up his foes.',
            power: '20x7'
        },
        inspirit: {
            name: 'Laziness',
            description: 'Makes enemies so lazy that it saps their STR.',
            power: '0'
        },
        stats: {
            hp: '241',
            str: '109',
            spr: '62',
            def: '82',
            spd: '84'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Juices',
        evolutionIndexes: [1]
    },
    {
        name: 'Slacka-slash',
        yokaiNumber: '006',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slacka-slash.png',
        description:
            'More dangerous than he looks, Slacka-slash can beat his foes with only a single slice.',
        locations: [
            'Breezy Hills - Gourd Pond Museum 2F',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin'
        ],
        skill: {
            name: 'Bladed Body',
            description: 'Body deals damage toall foes who attack it.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Phantom Smash',
            description:
                'Chops an enemy with his hair. Likely to be either critical or a miss.',
            power: '155 to 232'
        },
        inspirit: {
            name: 'Laziness',
            description: 'Makes enemies so lazy that it saps their STR.',
            power: '0'
        },
        stats: {
            hp: '257',
            str: '124',
            spr: '66',
            def: '89',
            spd: '94'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Juices'
    },
    {
        name: 'Brushido',
        yokaiNumber: '007',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/brushido.png',
        description:
            "A foot soldier who loves  cleaning. His spotless  reputation means he's  sure to be a shogun  someday.",
        locations: [
            'Uptown Springdale - Under cars, Distributors & Garbages',
            'Uptown Springdale - Lonely Waterway, Shady Back Alley, The Catwalk & Desolate Lane - Garbages & Dumps',
            'Gera Gera Land'
        ],
        skill: {
            name: 'Washed Out',
            description: 'Stats decrease when negatively Inspirited.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Cleaning Circle',
            description: 'Uses his trusty brush to scrub his allies clean.',
            power: '0'
        },
        inspirit: {
            name: 'Freshen Up',
            description:
                'Clean, virtuous power restores a little HP to the Inspirited Yo-kai.',
            power: '0'
        },
        stats: {
            hp: '193',
            str: '88',
            spr: '56',
            def: '49',
            spd: '104'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Sweets',
        evolutionIndexes: [2]
    },
    {
        name: 'Washogun',
        yokaiNumber: '008',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/washogun.png',
        description:
            'A neat-freak shogun who has been known to make heads roll if an underling so much as smudges his helmet.',
        locations: ['Evolve Brushido at Level 19.'],
        skill: {
            name: 'Washed Out',
            description: 'Stats decrease when negatively Inspirited.'
        },
        attack: {
            name: 'Spraygun',
            power: '100 to 150'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Spray Care',
            description: 'Cleanses allies with his spray gun, restoring HP.',
            power: '70'
        },
        inspirit: {
            name: 'Spruce Up',
            description:
                'Clean, virtuous power restores a little HP to the Inspirited Yo-kai.',
            power: '0'
        },
        stats: {
            hp: '227',
            str: '125',
            spr: '69',
            def: '99',
            spd: '88'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Sweets',
        evolutionIndexes: [2]
    },
    {
        name: 'Lie-in',
        yokaiNumber: '009',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lie-in.png',
        description:
            'A laid-back lion who  wants to be a mighty warrior but tends to prioritize nap time over  sword practice.',
        locations: [
            'Blossom Heights - Tucked Away Lot',
            'Mystery Way - Back Road',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Quest - "Train Lie-in with Pride".'
        ],
        skill: {
            name: 'Hard Worker',
            description: 'Receives moreexperience points.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: "Paws 'n' Claws",
            description:
                'Serves up a serious beating to his foes with his bare hands.',
            power: '16x5'
        },
        inspirit: {
            name: 'Lionize',
            description:
                'The power of a lion awakes in the Inspirited Yo-kai. STR goes up.',
            power: '0'
        },
        stats: {
            hp: '184',
            str: '89',
            spr: '57',
            def: '48',
            spd: '100'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [3]
    },
    {
        name: 'Lie-in Heart',
        yokaiNumber: '010',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lie-in_heart.png',
        description:
            "A lion who's realized his full potential. He always waits for the perfect moment before striking.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Sum Mystery Coin',
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Evolve Lie-in at Level 28.'
        ],
        skill: {
            name: 'Lie-in Wait',
            description: "Doesn't take an actionfor one to two turns."
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Lion Blade',
            description:
                'Waits for the perfect moment before cutting foes with his sword.',
            power: '28x8'
        },
        inspirit: {
            name: 'Lionize',
            description:
                'The power of a lion awakes in the Inspirited Yo-kai. STR goes up.',
            power: '0'
        },
        stats: {
            hp: '223',
            str: '130',
            spr: '90',
            def: '87',
            spd: '125'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [3]
    },
    {
        name: 'Hissfit',
        yokaiNumber: '011',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hissfit.png',
        description:
            'This foul-tempered fellow  stamps his feet  constantly, making it hard to take him seriously.',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Gera Gera Land',
            'Mystery Way - Route 2',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)'
        ],
        skill: {
            name: 'Annoyance',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Angry Crosscut',
            description:
                'In a rage, he waves his sword around and strikes all foes.',
            power: '18x5'
        },
        inspirit: {
            name: 'Temper Tantrum',
            description:
                'The Inspirited Yo-kai, angry at everything, attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '178',
            str: '92',
            spr: '58',
            def: '64',
            spd: '82'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Meats',
        evolutionIndexes: [5]
    },
    {
        name: 'Zerberker',
        yokaiNumber: '012',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/zerberker.png',
        description:
            "Legend has it that this Yo-kai leveled an entire village with one tantrum. You'll explode with rage if he's around.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Annoyance',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Zerberker Slash',
            description:
                'Goes nuts with his cutters and slashes all of his opponents.',
            power: '20x10'
        },
        inspirit: {
            name: 'Berserk',
            description: 'Irritates a foe and makes it attack its allies.',
            power: '0'
        },
        stats: {
            hp: '271',
            str: '134',
            spr: '82',
            def: '85',
            spd: '95'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Meats',
        evolutionIndexes: [5]
    },
    {
        name: 'Snartle',
        yokaiNumber: '013',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snartle.png',
        description:
            'This Yo-kai visits homes asking, "Any brats here?"  It\'s a way of scaring kids into behaving well. Kind of like a reverse Santa.',
        locations: ['Jaywalk'],
        skill: {
            name: 'Sword Hunting',
            description: 'Power increases eachtime a foe is defeated.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'For Naughty Brats',
            description:
                'Goes nuts with his cutters and slashes all of his opponents.',
            power: '22x10'
        },
        inspirit: {
            name: 'Frighten',
            description:
                'Makes an enemy so scared of Snartle that it can hardly move.',
            power: '0'
        },
        stats: {
            hp: '294',
            str: '150',
            spr: '71',
            def: '76',
            spd: '114'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Mochismo',
        yokaiNumber: '014',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mochismo.png',
        description:
            "He's cute most of the time, but when he's mad, his body cracks and his manly face pops out.",
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Uptown Springdale - Elementary School 2F',
            'Uptown Springdale - Elementary School 1F',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)'
        ],
        skill: {
            name: 'Soft Skin',
            description: 'Increases own DEF ifdealt critical damage.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Mochi Punch',
            description: 'Puffs up and decks an opponent with one mean punch.',
            power: '105 to 157'
        },
        inspirit: {
            name: 'Mochi Power',
            description: "Boosts an ally's STR with tasty mochi power.",
            power: '0'
        },
        stats: {
            hp: '236',
            str: '107',
            spr: '41',
            def: '73',
            spd: '65'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [7]
    },
    {
        name: 'Minochi',
        yokaiNumber: '015',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/minochi.png',
        description:
            "When he's in love, he gets overly protective of his partner. He can make you a very jealous person.",
        locations: [
            'Downtown Springdale - Behind Frostia\u2019s place',
            'Downtown Springdale - Rivers & Sea',
            "Shopper's Row - Brushwoods & flowers",
            'Breezy Hills - Gourd Pond Museum 1F',
            'Breezy Hills - Gourd Pond Museum 2F',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Soft Skin',
            description: 'Increases own DEF ifdealt critical damage.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Minochi Punch',
            description: 'Puffs up and decks an opponent with one mean punch.',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Jealousy',
            description:
                'Makes a foe so jealous of its allies that it will attack them!',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '110',
            spr: '23',
            def: '88',
            spd: '57'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Tublappa',
        yokaiNumber: '016',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tublappa.png',
        description:
            "There's nothing he won't lick\u2014the ickier the better! Don't get Inspirited by Tublappa if you value a clean tongue.",
        locations: [
            'Old Springdale - Well Road',
            'Old Springdale - Fox Shrine Road',
            'Old Springdale - Brushwoods & Under cars',
            'Old Springdale - Gravestones',
            'Old Springdale - Well Road - Under porches',
            'Old Springdale - Gourd Pond - Brushwoods',
            'Fleshy Souls - Gogo Junction',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Lickaway',
            description: 'Purifies adjacent allies.'
        },
        attack: {
            name: 'Slurp',
            power: '50 to 110'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Lickety-Lick',
            description:
                'Unfurls his lengthy tongue and does damage to all foes.',
            power: '40x3'
        },
        inspirit: {
            name: 'Sick Lick',
            description:
                'The Inspirited Yo-kai is licked, feels terrible, and is unable to act.',
            power: '0'
        },
        stats: {
            hp: '200',
            str: '97',
            spr: '64',
            def: '84',
            spd: '75'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Odens',
        evolutionIndexes: [13]
    },
    {
        name: 'Slicenrice',
        yokaiNumber: '017',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slicenrice.png',
        description:
            'Strength: defeating Oni in battle. Weakness: being eaten by Hungramps.',
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Old Mansion House',
            'Bony Spirits - Gogo Junction',
            'Quest - "Slicenrice Under Fire".'
        ],
        skill: {
            name: 'Rice and Dice',
            description: "Ups damage Yo-kaidoes to enemy's Oni."
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Onigiri Slash',
            description:
                'Leaps into the air and delivers a sword blow to a single foe.',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Power Snack',
            description:
                "The Inspirited Yo-kai's STR goes up due to yummy rice power.",
            power: '0'
        },
        stats: {
            hp: '206',
            str: '106',
            spr: '51',
            def: '61',
            spd: '88'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [12]
    },
    {
        name: 'Flamurice',
        yokaiNumber: '018',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flamurice.png',
        description:
            "A smokin'-hot, next-level rice warrior. His tough, crispy skin makes him pretty unappealing to Hungramps.",
        locations: ['Evolve Slicenrice at Level 31.'],
        skill: {
            name: 'Rice and Dice',
            description: "Ups damage Yo-kaidoes to enemy's Oni."
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Toasted Slash',
            description:
                'Leaps into the air and delivers a sword blow to a single foe.',
            power: '180 to 270'
        },
        inspirit: {
            name: 'Power Lunch',
            description:
                "The Inspirited Yo-kai's STR goes up due to yummy rice power.",
            power: '0'
        },
        stats: {
            hp: '226',
            str: '126',
            spr: '120',
            def: '84',
            spd: '102'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [12]
    },
    {
        name: 'Helmsman',
        yokaiNumber: '019',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/helmsman.png',
        description:
            'A floating helmet that was worn by a famous military commander. He spends his days searching for his body\u2014a good use of time.',
        locations: [
            'Blossom Heights - Old Mansion House',
            'Sawayama-jo - Area 2',
            'Mystery Way - Route 1',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)'
        ],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Headbutt',
            power: '55 to 121'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Helmsman Helm',
            description: "Gives an order that raises allies' morale and DEF.",
            power: '0'
        },
        inspirit: {
            name: 'Helmet Defense',
            description:
                "Raises an ally's DEF... as if it were wearing a helmet!",
            power: '0'
        },
        stats: {
            hp: '231',
            str: '100',
            spr: '42',
            def: '92',
            spd: '59'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [11]
    },
    {
        name: 'Reuknight',
        yokaiNumber: '020',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reuknight.png',
        description:
            "Helmsman and Armsman reunited. He now aspires to do what he couldn't do when he was alive\u2014 unify the country.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: "Knight's Slash",
            description:
                'Draws a sword from his hip and strikes all his foes with one blow.',
            power: '130 to 195'
        },
        inspirit: {
            name: "Knight's Curse",
            description:
                "Lowers a foe's SPR with the power of an undead knight.",
            power: '0'
        },
        stats: {
            hp: '263',
            str: '128',
            spr: '54',
            def: '121',
            spd: '90'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [11]
    },
    {
        name: 'Corptain',
        yokaiNumber: '021',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/corptain.png',
        description:
            "A popular leader when he was alive, Corptain leads an army of souls even after death. Now that's charisma! ",
        locations: ['Quest - Nightmare Revelation'],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Ticket to Hades',
            description:
                'Cuts his enemies. Likely to be either critical or a miss.',
            power: '135 to 202'
        },
        inspirit: {
            name: 'Stygian Curse',
            description:
                "Drops a foe's SPR with a strange power from the underworld.",
            power: '0'
        },
        stats: {
            hp: '283',
            str: '143',
            spr: '57',
            def: '130',
            spd: '81'
        },
        tribe: 'Brave',
        element: 'Drain',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Mudmunch',
        yokaiNumber: '022',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mudmunch.png',
        description:
            'This Yo-kai embodies the pain of farmers who have lost their fields. He\'s easy to identify thanks to his moan, "Get off my land!"',
        locations: [
            'Old Harrisville - Paddy fields',
            'Old Harrisville - Rice Paddy, Fullface Rock & Cicada Canyon - Paddy fields',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)'
        ],
        skill: {
            name: 'Sludge Grudge',
            description: 'When defeated, takesrevenge on enemy.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Dirty Trick',
            description:
                'Focuses all his rage to attack and sap the STR of his foes.',
            power: '100'
        },
        inspirit: {
            name: 'Sucking Mud',
            description:
                'The Inspirited Yo-kai loses HP due to anger about a rice field.',
            power: '0'
        },
        stats: {
            hp: '225',
            str: '108',
            spr: '60',
            def: '98',
            spd: '69'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Odens',
        evolutionIndexes: [15]
    },
    {
        name: 'Sgt. Burly',
        yokaiNumber: '023',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sgt._burly.png',
        description:
            "The much-loved boss of Burly's Beat Camp doesn't go easy on folks he  trains. He's there to pump you up, after all!",
        locations: [
            'Climb the flagpole every day until you see Sgt. Burly on the rooftop for a daily fight.'
        ],
        skill: {
            name: 'Gimme Twenty',
            description: "Boosts all adjacentYo-kai's STR."
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Victoryyyyyyyy!',
            description:
                "Boosts all allies' stats with a stint in his Beat Camp.",
            power: '0'
        },
        inspirit: {
            name: 'Fighting Fit',
            description:
                "The Inspirited Yo-kai boosts all stats at Burly's Beat Camp.",
            power: '0'
        },
        stats: {
            hp: '259',
            str: '130',
            spr: '33',
            def: '81',
            spd: '77'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Blazion',
        yokaiNumber: '024',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blazion.png',
        description:
            'The king of beasts with a mane of fire! This hot- blooded Yo-kai fills folks with fiery enthusiasm.',
        locations: [
            'Excellent Tower - Garbages',
            'Excellent Tower - Empty flats',
            'Excellent Tower - Under cars & Distributors'
        ],
        skill: {
            name: 'Blazing Spirit',
            description: 'Power increases whenan ally is defeated.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Blazing Fist',
            description:
                'Burns enemies with the flaming power of his fighting spirit.',
            power: '60 to 132'
        },
        inspirit: {
            name: 'Emblaze',
            description:
                "Sets an ally's heart ablaze. This also raises its STR.",
            power: '0'
        },
        stats: {
            hp: '243',
            str: '106',
            spr: '94',
            def: '50',
            spd: '73'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Meats',
        evolutionIndexes: [17]
    },
    {
        name: 'Quaken',
        yokaiNumber: '025',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/quaken.png',
        description:
            'Every step Quaken takes shakes the place...and some of those vibrations can even move your heart. Awwwwww!',
        locations: [
            'Mt. Wildwood Trail',
            'Bony Spirits Way - Exit',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)'
        ],
        skill: {
            name: 'Courageous Spirit',
            description: 'Power increases whenan ally is defeated.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Earthshaker',
            description:
                'Shakes the earth and batters opponents with massive rocks.',
            power: '75 to 165'
        },
        inspirit: {
            name: "Lion's Pride",
            description:
                'The Inspirited Yo-kai will really cheer up, and DEF will increase.',
            power: '0'
        },
        stats: {
            hp: '253',
            str: '117',
            spr: '105',
            def: '41',
            spd: '91'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Meats'
    },
    {
        name: 'Siro',
        yokaiNumber: '026',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/siro.png',
        description:
            'Siro brings out the best in those he Inspirits. They become shining lights for the future.',
        locations: [
            'Mt. Wildwood Trail',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Mon Mystery Coin',
            'Mystery Way - Crank-a-kai - Butterfly Mystery Coin',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb'
        ],
        skill: {
            name: 'Shining Spirit',
            description: 'Power increases whenan ally is defeated.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Roaring Stance',
            description:
                'Massively increases the STR of allies with his fierce aura.',
            power: '0'
        },
        inspirit: {
            name: "Heart's Roar",
            description: "Raises an ally's SPD with his roaring aura!",
            power: '0'
        },
        stats: {
            hp: '267',
            str: '111',
            spr: '123',
            def: '65',
            spd: '93'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Meats'
    },
    {
        name: 'Chansin',
        yokaiNumber: '027',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chansin.png',
        description:
            'Once a proud warrior, Chansin threw it all away by gambling... Now his best odds are to retreat.',
        locations: [
            'San Fantastico - Seaside Cave',
            'Sawayama-jo - Area 2',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)'
        ],
        skill: {
            name: 'Gambler',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Go for Broke',
            description:
                'Boosts STR of allies by increasing their focus on the battle.',
            power: '0'
        },
        inspirit: {
            name: 'Bad Bet',
            description:
                'Makes a foe stop worrying about losing and lowers its DEF.',
            power: '0'
        },
        stats: {
            hp: '241',
            str: '106',
            spr: '68',
            def: '71',
            spd: '92'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [19, 20, 21]
    },
    {
        name: 'Sheen',
        yokaiNumber: '028',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sheen.png',
        description:
            'A Yo-kai swordsman who returned to the way of the sword when a legendary blade reignited his spirit.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Light Speed',
            description: 'High chance to dealcritical attacks.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Legendary Slash',
            description:
                'Cuts one foe with the blade of justice. High critical chance.',
            power: '155 to 232'
        },
        inspirit: {
            name: 'Fine Weapon',
            description: "The masterwork blade Masamune boosts an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '257',
            str: '129',
            spr: '77',
            def: '87',
            spd: '102'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [19]
    },
    {
        name: 'Snee',
        yokaiNumber: '029',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snee.png',
        description:
            'Cursed by his demon blade, Snee searches the world for blood. He excels at silently sneaking up on his enemies.',
        locations: ['Fusion.'],
        skill: {
            name: 'Cursed Skin',
            description: 'All stats will increasewhen Inspirited by foe.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Demonic Slash',
            description: 'Dices all opponents with his cursed blade.',
            power: '20x7 to 30x7'
        },
        inspirit: {
            name: 'Cursed Sword',
            description:
                "Curses a foe with the blade Muramasa and drops the foe's SPD.",
            power: '0'
        },
        stats: {
            hp: '256',
            str: '125',
            spr: '104',
            def: '62',
            spd: '108'
        },
        tribe: 'Brave',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [20]
    },
    {
        name: 'Gleam',
        yokaiNumber: '030',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gleam.png',
        description:
            'A holy swordsman with a divine blade that cuts through evil like cheddar cheese. Could he bring about tasty world peace?',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Cheerful Coin',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Light Speed',
            description: 'High chance to dealcritical attacks.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Holy Slash',
            description:
                'Slices a single enemy with his sacred sword. High critical chance.',
            power: '165 to 247'
        },
        inspirit: {
            name: 'Holy Sword',
            description: "The holy sword Kusanagi boosts an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '276',
            str: '142',
            spr: '89',
            def: '81',
            spd: '115'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [21]
    },
    {
        name: 'Benkei',
        yokaiNumber: '031',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/benkei.png',
        description:
            'Hiding 999 weapons from fallen foes in his stomach, Benkei can call any one of them out in a moment of need.',
        locations: [
            'Breezy Hills - Gourd Pond Museum 1F',
            'Breezy Hills - Gourd Pond Museum 2F',
            'Sawayama-jo - Area 2',
            'Mystery Way - Route 1',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)'
        ],
        skill: {
            name: 'Sword Hunting',
            description: 'Power increases eachtime a foe is defeated.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: '999 Blades',
            description: 'Unleashes 999 blades and attacks all foes.',
            power: '17x9'
        },
        inspirit: {
            name: 'Clumsiness',
            description: 'Makes a foe clumsy. This decreases its SPR.',
            power: '0'
        },
        stats: {
            hp: '251',
            str: '125',
            spr: '49',
            def: '59',
            spd: '92'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'B3-NK1',
        yokaiNumber: '032',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/b3-nk1.png',
        description:
            "A Yo-kai whose body is half machine. He could  very well be the world's  first cyborg Yo-kai.",
        locations: [
            'Breezy Hills - Gate Room - Traffic-Light Zone',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Gold Orb'
        ],
        skill: {
            name: 'Sword Hunting',
            description: 'Power increases eachtime a foe is defeated.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'B3-NK1 GUN',
            description:
                'Rapidly fires blades. Likely to be either critical or a miss.',
            power: '20x9'
        },
        inspirit: {
            name: 'Cyborg Strength',
            description:
                "Raises an ally's DEF by making part of its body mechanical!",
            power: '0'
        },
        stats: {
            hp: '284',
            str: '128',
            spr: '32',
            def: '69',
            spd: '100'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Sushiyama',
        yokaiNumber: '033',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sushiyama.png',
        description:
            'A Yo-kai who desperately wants to be Japanese. He sleeps on a futon and eats only sushi. I think he might be doing it wrong...',
        locations: [
            "Shopper's Row - Nocturne Hospital",
            'Harrisville - Under porches',
            'Harrisville - Under cars',
            'Gera Gera Land',
            'Sawayama-jo - Area 2',
            'Mystery Way - Route 3',
            'Bony Spirits Way - Entrance',
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sushiyama Strike',
            description:
                'Smashes his pole onto a foe. High critical and miss chances.',
            power: '210'
        },
        inspirit: {
            name: 'Samurai Spirit',
            description:
                "Raises an ally's STR with the spirit of an ancient samurai.",
            power: '0'
        },
        stats: {
            hp: '229',
            str: '121',
            spr: '82',
            def: '77',
            spd: '103'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Kapunki',
        yokaiNumber: '034',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kapunki.png',
        description:
            'A punk Yo-kai who wears kabuki-style makeup. He dreams of rocking the socks and faces off his fans all across the globe.',
        locations: [
            'Harrisville - Under porches',
            'Mt.Wildwood - Crank-a-kai - 3DS coin',
            'Mystery Way - Crank-a-kai - Mystery Coin'
        ],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Boastful Bomber',
            description:
                'Boldly bashes a foe with his pole. High critical/miss chance.',
            power: '260'
        },
        inspirit: {
            name: 'Kabuki Fun',
            description:
                'Injects an ally with the soul of kabuki to raise its STR.',
            power: '0'
        },
        stats: {
            hp: '240',
            str: '144',
            spr: '90',
            def: '92',
            spd: '102'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Beetler',
        yokaiNumber: '035',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beetler.png',
        description:
            'Beetler is a young battler who fights with his horns and his fists. He trains with his rival, Rhinoggin.',
        locations: [
            'Mt. Wildwood - Trees',
            'Mt. Wildwood - Brushwoods',
            'Fleshy Souls Way - Entrance',
            "Quest - Which Beetle's Better"
        ],
        skill: {
            name: 'Too Serious',
            description: 'Will never Loaf.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Big Pincers',
            description: 'Pinches a foe with... well, his pincers.',
            power: '110 to 242'
        },
        inspirit: {
            name: 'Stag Power',
            description:
                "Boosts an ally's STR with the power of a stag beetle.",
            power: '0'
        },
        stats: {
            hp: '233',
            str: '113',
            spr: '65',
            def: '105',
            spd: '92'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [22]
    },
    {
        name: 'Beetall',
        yokaiNumber: '036',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beetall.png',
        description:
            'If Beetler bashes baddies in a bevy of brutal battles, the result will be a big- bodied Beetall.',
        locations: ['Fusion.'],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'Meteor Punch',
            power: '20x3 to 30x3'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Infernal Pincers',
            description:
                'Crushes an opponent with the huge pincers atop his head.',
            power: '195 to 292'
        },
        inspirit: {
            name: 'Fighter Power',
            description: "Boosts an ally's STR to make it a worthier fighter.",
            power: '0'
        },
        stats: {
            hp: '275',
            str: '138',
            spr: '70',
            def: '125',
            spd: '96'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [22]
    },
    {
        name: 'Cruncha',
        yokaiNumber: '037',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cruncha.png',
        description:
            'A stag beetle Yo-kai that represents the apex of the thorax. He can grant you incredible strength.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Red Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Kai Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'Meteor Punch',
            power: '20x3 to 30x3'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'The Guillotine',
            description: 'Cuts an enemy with the massive pincers on his head.',
            power: '210 to 315'
        },
        inspirit: {
            name: 'Legend Power',
            description:
                "Raises an ally's STR to transform it into a great warrior!",
            power: '0'
        },
        stats: {
            hp: '281',
            str: '132',
            spr: '89',
            def: '117',
            spd: '98'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Demuncher',
        yokaiNumber: '038',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/demuncher.png',
        description:
            'A terrifying Yo-kai who can open his huge mouth and swallow monsters whole. He has very bad indigestion.',
        locations: ["Quest - Nyada's Trials"],
        skill: {
            name: 'Sneaky Snacker',
            description: 'Recovers HP after anenemy is defeated.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Open Wide',
            description: 'Opens his massive mouth and chomps on a single foe.',
            power: '195 to 292'
        },
        inspirit: {
            name: 'Fightamins',
            description:
                'The Inspirited Yo-kai gets nasty nutrients. STR goes up.',
            power: '0'
        },
        stats: {
            hp: '258',
            str: '137',
            spr: '103',
            def: '114',
            spd: '98'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Devourer',
        yokaiNumber: '039',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/devourer.png',
        description:
            "He sucks the energy out of his victims but leaves their bodies intact so that they look like they've simply fallen asleep.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Red Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Soul Snacker',
            description: 'Recovers HP after anenemy is defeated.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Ill Appetite',
            description: 'Opens his massive mouth and chomps on a single foe.',
            power: '205 to 307'
        },
        inspirit: {
            name: 'Maulnutrition',
            description:
                'The Inspirited Yo-kai has its life snatched away. HP drains.',
            power: '0'
        },
        stats: {
            hp: '267',
            str: '137',
            spr: '110',
            def: '88',
            spd: '105'
        },
        tribe: 'Brave',
        element: 'Drain',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Brokenbrella',
        yokaiNumber: '040',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/brokenbrella.png',
        description:
            'A Yo-kai born from the pain of a flimsy plastic umbrella who desperately wished he was a sturdier model.',
        locations: [
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle',
            'Infinite Inferno - 3rd Circle',
            'Story recruit.'
        ],
        skill: {
            name: "Gust o' Gusto",
            description: "When in the back, increases allies' SPD."
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'North Wind',
            description:
                'Whips up a wind that turns him inside out and strikes all foes.',
            power: '80'
        },
        inspirit: {
            name: 'Tailwind',
            description:
                'The Inspirited Yo-kai benefits from a tailwind. SPD goes up.',
            power: '0'
        },
        stats: {
            hp: '188',
            str: '43',
            spr: '97',
            def: '46',
            spd: '99'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Pittapatt',
        yokaiNumber: '041',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pittapatt.png',
        description:
            "The spirit of a pair of well- worn straw sandals. If you ever find yourself hearing mysterious footsteps, it's probably this little guy.",
        locations: [
            'Old Springdale - Well Road',
            'Old Springdale - Fox Shrine Road',
            'Old Springdale - Brushwoods & Under cars',
            'Old Springdale - Under porches',
            'Old Springdale - Bamboo Groves',
            'Old Springdale - Well Road - Under porches',
            'Old Springdale - Mt.Wildwood Shrine - Bamboo groves',
            'Sawayama-jo - Area 2 - Under porches',
            'Fleshy Souls - Gogo Junction',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Got Your Back',
            description: "When in back, slowlyrefills front row's HP."
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Sole Quaker',
            description:
                'Uses power built up on his epic walks to strike every foe.',
            power: '75'
        },
        inspirit: {
            name: 'Bless My Sole',
            description:
                'The Inspirited Yo-kai gets a SPD boost from well-fitted sandals.',
            power: '0'
        },
        stats: {
            hp: '185',
            str: '33',
            spr: '92',
            def: '61',
            spd: '108'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Snotsolong',
        yokaiNumber: '042',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snotsolong.png',
        description:
            "A crane Yo-kai with an insanely runny nose. He's scared his drippings will make him too heavy to fly. ...I'd be scared too.",
        locations: ['Blossom Heights - Secret Byway', 'Mystery Way - Route 6'],
        skill: {
            name: 'Water Play',
            description: 'Increases damage ofown Water attacks.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Stretchy Slap',
            description:
                'Slaps an opponent with his snot. May cancel Soultimate Moves!',
            power: '100'
        },
        inspirit: {
            name: 'Runny Nose',
            description:
                "Gives a foe a nose so runny that it can't do anything but blow it!",
            power: '0'
        },
        stats: {
            hp: '194',
            str: '46',
            spr: '96',
            def: '54',
            spd: '92'
        },
        tribe: 'Mysterious',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Duchoo',
        yokaiNumber: '043',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/duchoo.png',
        description:
            "Ever felt like you might be sick, but you're not totally sure if you really are? Blame Duchoo.",
        locations: [
            'Springdale Underground Waterway',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Snow Play',
            description: 'Increases damage ofown Ice attacks.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sneezy Spike',
            description:
                'Slaps an opponent with his snot. May cancel Soultimate Moves!',
            power: '130'
        },
        inspirit: {
            name: 'Catch Cold',
            description:
                'Makes an enemy Yo-kai catch a cold. This will lower its STR.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '53',
            spr: '95',
            def: '67',
            spd: '85'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Seafoods'
    },
    {
        name: "D'wanna",
        yokaiNumber: '044',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/d_wanna.png',
        description:
            "D'wanna's chants will weaken your resolve! This can make you give up on...y'know, stuff and whatever.",
        locations: [
            "Shopper's Row - Empty flats",
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)'
        ],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Croaking Prayer',
            description: 'Hinders foes with a chanted curse.',
            power: '30'
        },
        inspirit: {
            name: 'Full of Sighs',
            description:
                "Lowers an opponent's STR and makes it sigh constantly.",
            power: '0'
        },
        stats: {
            hp: '185',
            str: '58',
            spr: '83',
            def: '64',
            spd: '77'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [23]
    },
    {
        name: "N'more",
        yokaiNumber: '045',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/n_more.png',
        description:
            "N'more gets bored of things quickly. Some say his cool brows and beard grew from his boredom with shaving.",
        locations: ['Gera Gera Land', 'Evolve D\u2019wanna at Level 15.'],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Yawnehameha',
            description: 'Hinders foes with a rolling wave of curses.',
            power: '100'
        },
        inspirit: {
            name: 'Full of Sighs',
            description:
                "Lowers an opponent's STR significantly and makes it sigh constantly.",
            power: '0'
        },
        stats: {
            hp: '226',
            str: '68',
            spr: '110',
            def: '74',
            spd: '92'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [23]
    },
    {
        name: "Q'wit",
        yokaiNumber: '046',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/q_wit.png',
        description:
            "He gives up on everything he tries and won't do the same thing twice. He has a lot of experience in doing things once.",
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Mystery Way - Crank-a-kai - Butterfly Mystery Coin'
        ],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Yawnehameha X',
            description:
                "Drops a foe's DEF with a very strong wave of rolling curses.",
            power: '130'
        },
        inspirit: {
            name: 'Demotivator',
            description:
                'Lowers all stats of an opponent by taking away its motivation.',
            power: '0'
        },
        stats: {
            hp: '233',
            str: '89',
            spr: '109',
            def: '68',
            spd: '75'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Wazzat',
        yokaiNumber: '047',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wazzat.png',
        description:
            'He fits snugly on your  head then devours your memories. It can be nice to forget the bad ones... or to just wear a hat.',
        locations: [
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            'Downtown Springdale - Springdale Business Tower',
            'Downtown Springdale - Behind Frostia\u2019s place',
            'Downtown Springdale - Under cars, Distributors, Garbages & Dumps',
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            "Breezy Hills - Gate Room - Compunzer's Zone",
            'Breezy Hills - Trees',
            'Old Springdale - Gourd Pond - Trees',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Forgot to Guard',
            description: 'No Yo-kai will guard inbattle.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Wuwuzzat?',
            description:
                'Undoes good effects on foes by eating up their memories.',
            power: '0'
        },
        inspirit: {
            name: 'Memory Eater',
            description:
                'Makes a foe forgetful enough to start attacking its allies!',
            power: '0'
        },
        stats: {
            hp: '161',
            str: '47',
            spr: '93',
            def: '55',
            spd: '119'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Candies',
        evolutionIndexes: [24]
    },
    {
        name: 'Houzzat',
        yokaiNumber: '048',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/houzzat.png',
        description:
            "A Wazzat who has grown to the size of a house and can wolf down someone's entire memory in one gigantic gulp.",
        locations: [
            'Mystery Way - Gogo Junction',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Evolve Wazzat at Level 21.'
        ],
        skill: {
            name: 'Forgot to Guard',
            description: 'No Yo-kai will guard inbattle.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Forget about It',
            description:
                'Sucks foes into his mysterious maw and causes confusion.',
            power: '0'
        },
        inspirit: {
            name: 'Memory Loss',
            description:
                'Makes a foe forgetful enough to start attacking its allies.',
            power: '0'
        },
        stats: {
            hp: '216',
            str: '63',
            spr: '118',
            def: '99',
            spd: '116'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Candies',
        evolutionIndexes: [24]
    },
    {
        name: 'Dummkap',
        yokaiNumber: '049',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dummkap.png',
        description:
            'This hat Yo-kai can make geniuses into dreamy fools. A foolish life can be more fun...but would you even realize if it were?!',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Uptown Springdale - Desolate Lane',
            'Uptown Springdale - Trees',
            'Uptown Springdale - Lonely Waterway, Shady Back Alley, The Catwalk & Desolate Lane - Garbages & Dumps',
            'Blossom Heights - Trees',
            'Downtown Springdale - Under cars, Distributors, Garbages & Dumps',
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'Old Springdale - Trees',
            'Old Springdale - Telephone poles',
            'Old Springdale - Well Road - Trees',
            'Mystery Way - Route 2'
        ],
        skill: {
            name: 'Prediction',
            description: "Decreases foe'saccuracy."
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Ignorance Is Bliss',
            description:
                "Unleashes an ally's heart and significantly boosts SPD.",
            power: '0'
        },
        inspirit: {
            name: 'Liven Up',
            description:
                'The Inspirited Yo-kai gets into a groove and gets a big SPR boost.',
            power: '0'
        },
        stats: {
            hp: '172',
            str: '34',
            spr: '90',
            def: '52',
            spd: '126'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Candies'
    },
    {
        name: 'Faysoff',
        yokaiNumber: '050',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/faysoff.png',
        description:
            'This most classic of Classic Yo-kai can give anyone he Inspirits a completely blank expression.',
        locations: ['Old Springdale - Well Road'],
        skill: {
            name: 'Bony Bond',
            description: 'Gives a DEF boost toall Bony Spirits Yo-kai.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Blank Face',
            description:
                'Calls spirits with no elemental affiliation to damage all foes.',
            power: '65 to 170'
        },
        inspirit: {
            name: 'Losing Face',
            description:
                "The Inspirited Yo-kai's face becomes blank, and it loses DEF.",
            power: '0'
        },
        stats: {
            hp: '204',
            str: '59',
            spr: '104',
            def: '69',
            spd: '97'
        },
        tribe: 'Mysterious',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Odens'
    },
    {
        name: 'Lafalotta',
        yokaiNumber: '051',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lafalotta.png',
        description:
            'This Yo-kai sucks the laughter and fun out of a  situation and keeps all the laughs for herself.',
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Old Mansion House',
            'Blossom Heights - Bamboo groves',
            'Breezy Hills - Under cars & Garbages',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Mwabsorption',
            description:
                'Absorbs HP from all foes and divides it among her allies.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Side Splitter',
            description:
                "Makes a foe laugh so much during a battle that it can't move.",
            power: '0'
        },
        stats: {
            hp: '197',
            str: '64',
            spr: '96',
            def: '70',
            spd: '89'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [28]
    },
    {
        name: 'Blips',
        yokaiNumber: '052',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blips.png',
        description:
            'If you see someone get out of a pool with blue lips, they might just be Inspirited by Blips...',
        locations: [
            'Blossom Heights - Brushwoods & Flowers',
            'Sawayama-jo - Area 2 - Under Cars',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Blue Kiss',
            description:
                'Absorbs HP from all foes and divides it among her allies.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Shivers',
            description: 'Chills a foe so much that its SPR drops.',
            power: '0'
        },
        stats: {
            hp: '220',
            str: '72',
            spr: '97',
            def: '81',
            spd: '94'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Tattletell',
        yokaiNumber: '053',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tattletell.png',
        description:
            "When Tattletell Inspirits you, you'll feel inspired to TELL, TELL, TELL all of your secrets. ",
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Loving Slap',
            description:
                'Slaps a foe...with love. May cancel enemy Soultimate Moves.',
            power: '120'
        },
        inspirit: {
            name: 'Disclose',
            description:
                'Makes a foe reveal its weakness, thus lowering its DEF.',
            power: '0'
        },
        stats: {
            hp: '206',
            str: '53',
            spr: '113',
            def: '72',
            spd: '92'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Ramens',
        evolutionIndexes: [28]
    },
    {
        name: 'Tattlecast',
        yokaiNumber: '054',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tattlecast.png',
        description:
            "She uses her massive speakers to broadcast scandalous secrets to the whole city. Hope they aren't yours!",
        locations: ['Evolve Tattletell at Level 22.'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Max Volume 11!',
            description:
                "Tosses speakers and slaps. May cancel foe's Soultimate Moves.",
            power: '160'
        },
        inspirit: {
            name: 'Disclose',
            description:
                'Makes a foe reveal its weakness, thus lowering its DEF.',
            power: '0'
        },
        stats: {
            hp: '240',
            str: '71',
            spr: '127',
            def: '79',
            spd: '107'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Ramens',
        evolutionIndexes: [28]
    },
    {
        name: 'Skranny',
        yokaiNumber: '055',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skranny.png',
        description:
            'Only Tattletells who discover their love of heavy metal music can don the skull makeup and become a Skranny.',
        locations: ['Statue Yo-kai Spots.'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Skeleton Smack',
            description:
                'A bony-handed slap that can cancel enemy Soultimate Moves.',
            power: '130'
        },
        inspirit: {
            name: 'Face Paint',
            description: "Lowers an enemy's DEF with a shady skeletal curse.",
            power: '0'
        },
        stats: {
            hp: '215',
            str: '69',
            spr: '120',
            def: '61',
            spd: '103'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Cupistol',
        yokaiNumber: '056',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cupistol.png',
        description:
            "This debonair Yo-kai is quite a hit with the ladies. Anyone he shoots will love you. He's just the greatest! *swoon*",
        locations: [
            'Downtown Springdale - Springdale Business Tower',
            'Downtown Springdale - Rivers & Sea',
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Popularity',
            description: 'Makes more foesbefriend you.'
        },
        attack: {
            name: 'Shoot',
            power: '10 to 45'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Kiss of Life',
            description:
                'Restores HP of allies by blowing a very handsome kiss!',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Popularize',
            description:
                'Makes an ally so popular that all foes will target it.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '61',
            spr: '96',
            def: '64',
            spd: '100'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Sweets',
        evolutionIndexes: [30, 31]
    },
    {
        name: 'Casanuva',
        yokaiNumber: '057',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/casanuva.png',
        description:
            'This narcissist makes every lady he sees fall in love with him, regardless of appearance.',
        locations: [
            'Gold-Gleaming Hwy. - Entrance',
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'Fusion.'
        ],
        skill: {
            name: 'Popularity',
            description: 'Makes more foesbefriend you.'
        },
        attack: {
            name: 'Guns Blazing',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Heavenly Heart',
            description:
                'Restores HP of allies with his extremely handsome aura!',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Popularize',
            description:
                'Makes an ally so popular that all foes will target it.',
            power: '0'
        },
        stats: {
            hp: '235',
            str: '81',
            spr: '132',
            def: '87',
            spd: '124'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Sweets',
        evolutionIndexes: [30]
    },
    {
        name: 'Casanono',
        yokaiNumber: '058',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/casanono.png',
        description:
            "Casanuva's opposite. He just can't get a date no matter what! He'll make you unpopular too. Best to give him some space.",
        locations: [
            'Breezy Hills - Brushwoods & flowers',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Unpopularity',
            description: 'Makes foes less likelyto become your friend.'
        },
        attack: {
            name: 'Guns Blazing',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Fiery Longing',
            description:
                'Uses his bitterness from being unpopular to fry all his foes.',
            power: '130 to 195'
        },
        inspirit: {
            name: 'Unpopularize',
            description:
                'Makes an ally so unpopular that all foes will ignore it.',
            power: '0'
        },
        stats: {
            hp: '243',
            str: '80',
            spr: '142',
            def: '78',
            spd: '118'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Sweets'
    },
    {
        name: 'So-Sorree',
        yokaiNumber: '059',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/so-sorree.png',
        description:
            "He may apologize for everything, but the truth is he doesn't mean a word of it and cheerfully avoids any real responsibility.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Bird Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Wind Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Moon Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Flower Excitement Coin'
        ],
        skill: {
            name: 'Make Amends',
            description: 'Restores HP to allieswhile Yo-kai Loafs.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'My Bad',
            description:
                'Apologizes profusely as he purifies all allies and boosts HP.',
            power: '40'
        },
        inspirit: {
            name: 'Not So Sorry',
            description:
                "The Inspirited Yo-kai thinks it's all that and is always targeted for it.",
            power: '0'
        },
        stats: {
            hp: '212',
            str: '59',
            spr: '108',
            def: '48',
            spd: '93'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Curries',
        evolutionIndexes: [32]
    },
    {
        name: 'Bowminos',
        yokaiNumber: '060',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bowminos.png',
        description:
            'These domino Yo-kai are forever falling over themselves to apologize for every little thing.',
        locations: ['Evolve So-Sorree at Level 30.'],
        skill: {
            name: 'Make Amends',
            description: 'Restores HP to allieswhile Yo-kai Loafs.'
        },
        attack: {
            name: 'Flatten',
            power: '30 to 66'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Endless Apology',
            description:
                'Crushes an enemy with the force of apology. Enemies are hindered.',
            power: '150'
        },
        inspirit: {
            name: 'Not So Sorry',
            description:
                "The Inspirited Yo-kai thinks it's all that and is always targeted for it.",
            power: '0'
        },
        stats: {
            hp: '259',
            str: '93',
            spr: '117',
            def: '113',
            spd: '91'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Curries',
        evolutionIndexes: [32]
    },
    {
        name: 'Smogling',
        yokaiNumber: '061',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/smogling.png',
        description:
            'A wispy spirit who appears in smoky places but often blows away before she develops into something more substantial.',
        locations: [
            'Old Harrisville - Rice Paddy',
            'Old Harrisville - Rice Paddy, Fullface Rock & Cicada Canyon - Trees',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Magic Mist',
            description: "Helps recover adjacentYo-kai's Soul Meters."
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Cloud Control',
            description:
                'Calls up a lovable little storm that damages all foes.',
            power: '60 to 157'
        },
        inspirit: {
            name: 'Amazing Haze',
            description:
                'The Inspirited Yo-kai is encircled by mysterious smoke. SPR goes up.',
            power: '0'
        },
        stats: {
            hp: '190',
            str: '49',
            spr: '103',
            def: '57',
            spd: '107'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Sweets',
        evolutionIndexes: [33]
    },
    {
        name: 'Smogmella',
        yokaiNumber: '062',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/smogmella.png',
        description:
            'Her vaporous nature means she can take on any form she chooses,  but this shape is by far  her current favorite.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Gold Orb',
            'Evolve Smogling at Level 27.'
        ],
        skill: {
            name: 'Magic Mist',
            description: "Helps recover adjacentYo-kai's Soul Meters."
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Upward Tornado',
            description:
                "Calls a tornado strong enough to mess up the enemy's clothes.",
            power: '220'
        },
        inspirit: {
            name: 'Amazing Haze',
            description:
                'The Inspirited Yo-kai is encircled by smoke. SPR goes way up.',
            power: '0'
        },
        stats: {
            hp: '232',
            str: '75',
            spr: '126',
            def: '90',
            spd: '134'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Sweets',
        evolutionIndexes: [33, 121]
    },
    {
        name: 'Signibble',
        yokaiNumber: '063',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/signibble.png',
        description:
            "A mischievous Yo-kai that snacks on radio waves in the air. You'll lose a few bars on your phone when he's around.",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East',
            'Blossom Heights - Telephone poles',
            "Shopper's Row - Telephone poles",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'Harrisville - Station Plaza - Telephone poles',
            'Gera Gera Land',
            'Fleshy Souls Way - Exit',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Lightning Play',
            description: 'Increases damage of own Lightning attacks.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Signal Shock',
            description:
                'Releases his stored electric waves onto his foes all at once.',
            power: '55 to 144'
        },
        inspirit: {
            name: 'Paralyze',
            description: 'Slows an enemy down with an electric shock.',
            power: '0'
        },
        stats: {
            hp: '197',
            str: '75',
            spr: '90',
            def: '68',
            spd: '98'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Snacks',
        evolutionIndexes: [34]
    },
    {
        name: 'Signiton',
        yokaiNumber: '064',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/signiton.png',
        description:
            'Signiton is almost a deity for those in desperate need of a wireless signal. He can boost your reception if you ask.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Fusion.'
        ],
        skill: {
            name: 'Lightning Play',
            description: 'Increases damage of own Lightning attacks.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: "Ton o' Thunder",
            description:
                'Beats his stomach to call lightning down onto his opponents.',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Paralyze',
            description: 'Slows an enemy down with an electric shock.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '112',
            spr: '118',
            def: '99',
            spd: '69'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Odens',
        evolutionIndexes: [34]
    },
    {
        name: 'Statiking',
        yokaiNumber: '065',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/statiking.png',
        description:
            "He's pretty lazy, but if he got motivated, his power would fix a ton of the world's energy problems.",
        locations: [
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Long Lasting',
            description: 'Good Inspirits will lastlonger.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Giga Turbocharge',
            description:
                'Absorbs HP from all foes and divides it among his allies.',
            power: '190'
        },
        inspirit: {
            name: 'Electrocute',
            description:
                "Gradually decreases an enemy's HP through electric shock.",
            power: '0'
        },
        stats: {
            hp: '256',
            str: '113',
            spr: '132',
            def: '105',
            spd: '93'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Odens'
    },
    {
        name: 'Master Oden',
        yokaiNumber: '066',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/master_oden.png',
        description:
            'A cheerful Yo-kai who runs an oden stall. He dishes up hot food and loves nothing more than a good chat.',
        locations: ['Quest - Oden of the Soul'],
        skill: {
            name: 'Tasty Aroma',
            description: "All adjacent Yo-kai's HPis slowly refilled."
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Stirring Broth',
            description:
                'Revives a single ally with a bowl of hot, soothing broth.',
            power: '0'
        },
        inspirit: {
            name: 'Hot Pot',
            description:
                'The Inspirited Yo-kai eats some warm food. HP steadily increases.',
            power: '0'
        },
        stats: {
            hp: '249',
            str: '117',
            spr: '111',
            def: '101',
            spd: '79'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Odens'
    },
    {
        name: 'Failian',
        yokaiNumber: '067',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/failian.png',
        description:
            'This fake flying saucer causes anyone he  Inspirits to turn into a  massive liar.',
        locations: ['Uptown Springdale - Trees'],
        skill: {
            name: 'Electro Field',
            description: 'Lightning damage triggers DEF boost.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Lies-er Beam',
            description:
                'Blasts a foe with an ice beam he says is from outer space.',
            power: '95 to 209'
        },
        inspirit: {
            name: 'Lying Saucer',
            description:
                "The Inspirited Yo-kai fibs that it's pro-enemy. They stop attacking it.",
            power: '0'
        },
        stats: {
            hp: '197',
            str: '28',
            spr: '111',
            def: '104',
            spd: '129'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Apelican',
        yokaiNumber: '068',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/apelican.png',
        description:
            "He studied in Texas and loves all things American, but his Southern accent still isn't great.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Bird Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Wind Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Moon Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Flower Excitement Coin'
        ],
        skill: {
            name: 'Apelican Is No.1',
            description: 'SPD increases when front and center.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Yes We Pelican!',
            description:
                "Leads a rousing line dance that boosts all of his allies' stats.",
            power: '0'
        },
        inspirit: {
            name: "Stats 'n' Stripes",
            description:
                "The Inspirited Yo-kai's stats rise due to pride in its country's power.",
            power: '0'
        },
        stats: {
            hp: '204',
            str: '76',
            spr: '103',
            def: '92',
            spd: '104'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Mirapo',
        yokaiNumber: '069',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mirapo.png',
        description:
            'An ancient mirror that embodied a soul and became a Yo-kai. It can make a portal between two mirrors.',
        locations: ['Yo-kai World - Liar Mountain', 'Story recruit.'],
        skill: {
            name: 'Mirror Body',
            description: 'Sends 1/2 of Techniquedamage back at foe.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Mirror to Mirror',
            description:
                'Calls forth a random spirit from the mirror world to attack.',
            power: '0'
        },
        inspirit: {
            name: 'Mirror Power',
            description:
                "Raises an ally's SPR with the power of a mysterious mirror.",
            power: '0'
        },
        stats: {
            hp: '214',
            str: '65',
            spr: '106',
            def: '98',
            spd: '81'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [35]
    },
    {
        name: 'Miradox',
        yokaiNumber: '070',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/miradox.png',
        description:
            'Triple the size and triple  the power of Mirapo, Miradox makes it possible to travel through time as well as space.',
        locations: ['Fusion.', 'Story recruit.'],
        skill: {
            name: 'Mirror Body',
            description: 'Sends 1/2 of Techniquedamage back at foe.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Mirror Mirror',
            description:
                'Calls forth a random spirit from the mirror world to attack.',
            power: '0'
        },
        inspirit: {
            name: 'Mirror Power',
            description:
                "Raises an ally's SPR with the power of a mysterious mirror.",
            power: '0'
        },
        stats: {
            hp: '236',
            str: '80',
            spr: '128',
            def: '125',
            spd: '89'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [35]
    },
    {
        name: 'Mircle',
        yokaiNumber: '071',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mircle.png',
        description:
            'Mircle fills the space behind mirrors with evil by renting it out to bad Yo-kai...at a wickedly high rate, naturally.',
        locations: [
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 3F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)'
        ],
        skill: {
            name: 'Mirror Body',
            description: 'Sends 1/2 of Techniquedamage back at foe.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Dark World',
            description:
                'Calls forth a random spirit from the mirror world to attack.',
            power: '0'
        },
        inspirit: {
            name: 'Cursed Mirror',
            description: 'Curses foes and makes their SPR drop significantly.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '77',
            spr: '123',
            def: '125',
            spd: '79'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Illoo',
        yokaiNumber: '072',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/illoo.png',
        description:
            'A caring teacher who uses illusions to simplify his lessons. He can make complex topics seem pretty accessible.',
        locations: [
            'Downtown Springdale - Construction Site',
            "Breezy Hills - Gate Room - Compunzer's Zone",
            'Harrisville - Trees',
            'Harrisville - Telephone poles',
            'Harrisville - Mt. Middleton',
            'Gera Gera Land',
            'Mystery Way - Route 3',
            'Gold-Gleaming Hwy. - Inner Lane',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: "Brother's Vow",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Spirit Illusion',
            description: "Summons will-o'-the- wisps to damage his enemies.",
            power: '110'
        },
        inspirit: {
            name: 'Illusion Power',
            description:
                'Envelops an ally in an illusion, which will raise its SPR significantly.',
            power: '0'
        },
        stats: {
            hp: '215',
            str: '56',
            spr: '115',
            def: '61',
            spd: '94'
        },
        tribe: 'Mysterious',
        element: 'Water',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Elloo',
        yokaiNumber: '073',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/elloo.png',
        description:
            "A friendly, old Yo-kai who can dissipate into a haze. He's Illoo's brother.",
        locations: [
            'Breezy Hills - Gate Room - Can-Kicking Zone',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)'
        ],
        skill: {
            name: "Brother's Vow",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Spirit Daze',
            description: "Summons will-o'-the- wisps to damage his enemies.",
            power: '120'
        },
        inspirit: {
            name: 'Haze Power',
            description:
                'Makes an ally move fast enough to look like a thin haze.',
            power: '0'
        },
        stats: {
            hp: '202',
            str: '52',
            spr: '129',
            def: '50',
            spd: '106'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Alloo',
        yokaiNumber: '074',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/alloo.png',
        description:
            "He wanders the world without a goal. It's an absolute miracle if the three brothers Illoo, Elloo, and Alloo all meet up. ",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel',
            "Shopper's Row - Nocturne Hospital",
            'Sawayama-jo - Area 1 - Trees',
            'Divine Paradise - 3F',
            'Divine Paradise - 4F',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)'
        ],
        skill: {
            name: "Brother's Vow",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Wandering World',
            description:
                'Curses his enemies with strong magic. May confuse them as well.',
            power: '80'
        },
        inspirit: {
            name: 'Wanderlust',
            description:
                "Drops an enemy's DEF by filling it with the desire to wander.",
            power: '0'
        },
        stats: {
            hp: '230',
            str: '82',
            spr: '122',
            def: '71',
            spd: '102'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Breads'
    },
    {
        name: 'Espy',
        yokaiNumber: '075',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/espy.png',
        description:
            "Espy gets a kick out of reading people's minds. It's totally not fair that no one can read hers...and now she knows that too.",
        locations: [
            "Shopper's Row - Nocturne Hospital",
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Third Eye',
            description:
                'Absorbs HP from all foes and divides it among her allies.',
            power: '55 to 144'
        },
        inspirit: {
            name: 'Expose Weakness',
            description: "Reads a foe's weakness and drops its DEF.",
            power: '0'
        },
        stats: {
            hp: '234',
            str: '93',
            spr: '115',
            def: '96',
            spd: '75'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Infour',
        yokaiNumber: '076',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/infour.png',
        description:
            "Her four eyes can see a person's age, name, gender, and birthday, but  she can't read minds. It's still kinda creepy, though.",
        locations: [
            'Yo-kai World - Hooligan Road',
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 3F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'San Fantastico - Trees',
            'San Fantastico - Garbages',
            'San Fantastico - Empty flats',
            'San Fantastico - Telephone poles',
            'Divine Paradise - 3F',
            'Divine Paradise - 4F',
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Foursight',
            description:
                'Absorbs HP from all foes and divides it among her allies.',
            power: '65 to 170'
        },
        inspirit: {
            name: 'Mysterious Power',
            description:
                "Mysterious power significantly lowers an enemy's SPR. ",
            power: '0'
        },
        stats: {
            hp: '246',
            str: '65',
            spr: '127',
            def: '78',
            spd: '99'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Verygoodsir',
        yokaiNumber: '077',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/verygoodsir.png',
        description:
            'An excellent but fussy manservant officially certified by the Yo-kai Council of Applied Butlering.',
        locations: [
            'Excellent Tower - Trees',
            'Excellent Tower - Brushwoods & Flowers',
            'Excellent Tower - Empty flats',
            'Excellent Tower - Observation Deck'
        ],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Bon App\u00e9tit',
            description: 'Top-class butler skills serve to heal all allies.',
            power: '120'
        },
        inspirit: {
            name: 'At Your Service',
            description:
                'Due to advanced butler skills, the Inspirited Yo-kai regains HP.',
            power: '0'
        },
        stats: {
            hp: '212',
            str: '98',
            spr: '115',
            def: '68',
            spd: '110'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Tengu',
        yokaiNumber: '078',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tengu.png',
        description:
            'A popular tengu who controls the power of wind. Apparently all that power comes from his number-one fan.',
        locations: [
            'Divine Paradise - 5F',
            'Infinite Tunnel',
            'Heights - Shoten Temple',
            ' Yo-kai Spot - The Bell That Tolls at Night',
            ' Yo-kai Spot - Another Bell That Tolls at Night'
        ],
        skill: {
            name: 'Wind Play',
            description: 'Increases damage ofown Wind attacks.'
        },
        attack: {
            name: 'Nasty Kick',
            power: '100 to 150'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Typhoon Fan',
            description:
                'Uses his fan to create a whirlwind that hits all of his enemies.',
            power: '180'
        },
        inspirit: {
            name: "Tengu'd",
            description:
                'Makes a Yo-kai into a hated tengu, drawing attacks to it.',
            power: '0'
        },
        stats: {
            hp: '228',
            str: '86',
            spr: '91',
            def: '90',
            spd: '77'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Flengu',
        yokaiNumber: '079',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flengu.png',
        description:
            'A tengu with hair the color of fire. Legend says he causes a drought when humanity needs to be taught a lesson.',
        locations: ['Mystery Way - Crank-a-kai - Mystery Coin'],
        skill: {
            name: 'Fire Play',
            description: 'Increases damage ofown Fire attacks.'
        },
        attack: {
            name: 'Nasty Kick',
            power: '100 to 150'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Blazing Typhoon',
            description:
                'Uses his fan to create a typhoon that blasts all of his enemies.',
            power: '200'
        },
        inspirit: {
            name: 'Burn',
            description:
                'Burns a foe with raging fire and steadily lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '249',
            str: '97',
            spr: '100',
            def: '81',
            spd: '65'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Kyubi',
        yokaiNumber: '080',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kyubi.png',
        description:
            'An elite nine-tailed-fox Yo-kai. He can easily produce power greater than a volcanic eruption.',
        locations: ['Quest - The Old Fox Shrine'],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Inferno',
            description:
                'Creates a massive fireball and burns enemies to ashes.',
            power: '250'
        },
        inspirit: {
            name: 'Burn',
            description:
                'Burns a foe with raging fire and steadily lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '255',
            str: '83',
            spr: '151',
            def: '107',
            spd: '124'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Odens'
    },
    {
        name: 'Frostail',
        yokaiNumber: '081',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/frostail.png',
        description:
            "Even a single hair of this rare Yo-kai's silvery coat can bring generations of good luck!",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Yo Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Sense of Smell',
            description: 'Never misses attacks.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Arctic Abyss',
            description: 'Freezes his foes with his powerful, icy spirit.',
            power: '250'
        },
        inspirit: {
            name: 'Divine Protection',
            description:
                "Boosts an ally's SPR under the watchful eye of Frostail.",
            power: '0'
        },
        stats: {
            hp: '261',
            str: '84',
            spr: '152',
            def: '99',
            spd: '122'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Odens'
    },
    {
        name: 'Chymera',
        yokaiNumber: '082',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chymera.png',
        description:
            "This Yo-kai has a monkey's head, a tiger's body, a snake's tail, and a cry that creeps people out\u2014much to his dismay.",
        locations: [
            'Infinite Inferno - 6th Circle',
            'Infinite Inferno - 7th Circle',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'In a Flash',
            description: 'Gets one preemptiveattack.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Shock Tactic',
            description:
                'Summons a lightning strike, doing great damage to one foe.',
            power: '185 to 277'
        },
        inspirit: {
            name: 'Beastly Blare',
            description:
                'The Inspirited Yo-kai feels the Chymera cry. SPD goes up.',
            power: '0'
        },
        stats: {
            hp: '247',
            str: '119',
            spr: '131',
            def: '95',
            spd: '112'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Kingmera',
        yokaiNumber: '083',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kingmera.png',
        description:
            'A regal Yo-kai who was once a legendary ninja. Supremely stealthy, he can steal any treasure.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Yellow Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Cheerful Coin',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'In a Flash',
            description: 'Gets one preemptiveattack.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Thunderstruck',
            description:
                'Summons a lightning strike, doing great damage to one foe.',
            power: '190 to 285'
        },
        inspirit: {
            name: 'Royal Rush',
            description:
                "The Inspirited Yo-kai's SPD will rise due to the power of a wind demon.",
            power: '0'
        },
        stats: {
            hp: '246',
            str: '105',
            spr: '147',
            def: '86',
            spd: '118'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Terrorpotta',
        yokaiNumber: '084',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/terrorpotta.png',
        description:
            "Loves scaring people by making them think that he's about to fall onto the floor and be smashed to smithereens.",
        locations: [
            'Mt. Wildwood Trail',
            'Mt. Wildwood - Jumbo Slider',
            'Mt. Wildwood - Bamboo Groves',
            'Mt. Wildwood - Brushwoods',
            'Bony Spirits Way - Exit',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Rest in Pieces',
            description: 'Prevents all Yo-kaifrom being revived.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Cracked Pot',
            description:
                'Causes confusion in foes by teetering on the brink of tripping.',
            power: '0'
        },
        inspirit: {
            name: 'Crack Up',
            description:
                "The Inspirited Yo-kai's body becomes fragile, lowering DEF.",
            power: '0'
        },
        stats: {
            hp: '150',
            str: '83',
            spr: '61',
            def: '92',
            spd: '94'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Dulluma',
        yokaiNumber: '085',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dulluma.png',
        description:
            'He looks like a lucky daruma, but his real body is inside the shell. Dull and sluggish, he can really slow you down.',
        locations: [
            'Downtown Springdale - Academy Shortcut',
            'Gera Gera Land',
            'Gold-Gleaming Hwy. - Westbound',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)'
        ],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Headbutt HEY-O!',
            description:
                'Leaps high into the air and delivers a powerful headbutt.',
            power: '60 to 157'
        },
        inspirit: {
            name: 'Dullness',
            description:
                'Makes an enemy very lazy, with absolutely no desire to move.',
            power: '0'
        },
        stats: {
            hp: '212',
            str: '84',
            spr: '44',
            def: '88',
            spd: '56'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Curries',
        evolutionIndexes: [7]
    },
    {
        name: 'Darumacho',
        yokaiNumber: '086',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/darumacho.png',
        description:
            'Now a truly macho Yo-kai, this one worked tirelessly in a mountain retreat to train away his dullness.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Fusion.'
        ],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Burning Buster',
            description:
                'Jumps and charges a foe but will hurt himself with the effort.',
            power: '170 to 255'
        },
        inspirit: {
            name: 'Machismo',
            description: 'Fills an ally with machismo and boosts its STR.',
            power: '0'
        },
        stats: {
            hp: '253',
            str: '112',
            spr: '63',
            def: '120',
            spd: '68'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Curries',
        evolutionIndexes: [7]
    },
    {
        name: 'Goruma',
        yokaiNumber: '087',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/goruma.png',
        description:
            "Darumacho wasn't happy until he had the body and strength of a gorilla. Goruma can crush cars  like marshmallows. ",
        locations: [
            "Shopper's Row - Nocturne Hospital",
            "Shopper's Row - Distributors",
            "Shopper's Row - Garbages & Dumps",
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Gorilla Straight',
            description:
                'Unleashes a straight punch with all the strength of a gorilla.',
            power: '160 to 240'
        },
        inspirit: {
            name: 'Musclehead',
            description:
                'Makes an enemy such a knucklehead that it forgets its friends.',
            power: '0'
        },
        stats: {
            hp: '267',
            str: '119',
            spr: '57',
            def: '108',
            spd: '58'
        },
        tribe: 'Tough',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Curries'
    },
    {
        name: 'Wotchagot',
        yokaiNumber: '088',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wotchagot.png',
        description:
            "A plain bowl of rice who can't help looking at the tasty treats others are eating and turning green with envy.",
        locations: ["Shopper's Row - Shopping Street Narrows"],
        skill: {
            name: 'Bitter Rice',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Bowl Buster',
            description:
                'Strikes a foe in envy and ends up hurting himself in the process.',
            power: '60 to 157'
        },
        inspirit: {
            name: 'Envy',
            description:
                'Makes a foe so envious of its allies that it will attack them.',
            power: '0'
        },
        stats: {
            hp: '166',
            str: '50',
            spr: '86',
            def: '93',
            spd: '89'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [36]
    },
    {
        name: 'Pride Shrimp',
        yokaiNumber: '089',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pride_shrimp.png',
        description:
            "He's the priciest dish in the shop, and he knows it. Inspirits people to be insufferably self-satisfied.",
        locations: ['Fusion.'],
        skill: {
            name: 'Thick Crust',
            description: 'DEF increases whenfront and center.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Prawn Punch',
            description:
                'Dramatically strikes a foe with a perfectly cooked prawn.',
            power: '165 to 247'
        },
        inspirit: {
            name: 'Shrimpervious',
            description:
                'Inspirited Yo-kai gets a DEF boost from a bowl of prawn tempura.',
            power: '0'
        },
        stats: {
            hp: '224',
            str: '75',
            spr: '104',
            def: '126',
            spd: '97'
        },
        tribe: 'Tough',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [36]
    },
    {
        name: 'No-Go Kart',
        yokaiNumber: '090',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/no-go_kart.png',
        description:
            'Unsuspecting folks who accept a ride from this Yo-kai find themselves terribly lost because he has no sense of direction.',
        locations: ["Shopper's Row - Shopping Street Narrows"],
        skill: {
            name: 'Digging In',
            description: 'Takes less damagefrom Earth attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: "You've Lost Me",
            description:
                'His bizarre sense of direction serves to confuse the enemy.',
            power: '0'
        },
        inspirit: {
            name: 'Get Lost',
            description: "The Inspirited Yo-kai gets so lost it can't move.",
            power: '0'
        },
        stats: {
            hp: '174',
            str: '79',
            spr: '32',
            def: '94',
            spd: '103'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [37]
    },
    {
        name: 'Mistank',
        yokaiNumber: '091',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mistank.png',
        description:
            "A tank who trundled off toward the enemy but got badly lost. At least his heart's in the right place.",
        locations: ['Fusion.'],
        skill: {
            name: 'Earth Cannon',
            description: 'Normal attacks becomeEarth attacks.'
        },
        attack: {
            name: 'Kaboom!',
            power: '50 to 110'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: "Tank 'n' Spank",
            description:
                'Unleashes a massive cannon blast, hitting a single foe.',
            power: '170 to 255'
        },
        inspirit: {
            name: 'Loose Cannon',
            description:
                'The Inspirited Yo-kai behaves erratically and attacks allies.',
            power: '0'
        },
        stats: {
            hp: '227',
            str: '116',
            spr: '53',
            def: '109',
            spd: '120'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [37]
    },
    {
        name: 'Noway',
        yokaiNumber: '092',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/noway.png',
        description:
            'He rejects everything with a "no way!" Becoming a brain-surgeon astronaut is easier than getting past him.',
        locations: [
            'Uptown Springdale - Desolate Lane',
            'Gold-Gleaming Hwy. - Eastbound'
        ],
        skill: {
            name: 'Blocker',
            description: 'Will be guarding whenmoving to the front.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'No Way Through',
            description:
                'A defensive posture that boosts DEF and draws enemy attacks.',
            power: '42 to 0'
        },
        inspirit: {
            name: 'Refusal',
            description:
                'Uses the power of "no way!" to make a Yo-kai refuse to fight.',
            power: '0'
        },
        stats: {
            hp: '217',
            str: '75',
            spr: '41',
            def: '104',
            spd: '40'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [39]
    },
    {
        name: 'Impass',
        yokaiNumber: '093',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/impass.png',
        description:
            "You...you just can't get by Impass. Why?! What's his  motivation?! What's the story behind him?! Nobody knows...",
        locations: ['Evolve Noway at Level 29.'],
        skill: {
            name: 'Blocker',
            description: 'Will be guarding whenmoving to the front.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Insurmountable',
            description:
                'A defensive posture that strongly boosts DEF and draws attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Refusal',
            description: 'Makes a foe refuse everything...including fighting.',
            power: '0'
        },
        stats: {
            hp: '271',
            str: '109',
            spr: '59',
            def: '139',
            spd: '79'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Ramens',
        evolutionIndexes: [39]
    },
    {
        name: 'Walldin',
        yokaiNumber: '094',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/walldin.png',
        description:
            'Formerly a sturdy castle wall, the fall of the family he once protected turned him into a Yo-kai.',
        locations: [
            'Breezy Hills - Empty flats',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Mystery Way - Crank-a-kai - Butterfly Mystery Coin',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb'
        ],
        skill: {
            name: 'Blocker',
            description: 'Will be guarding whenmoving to the front.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Stonewall Drop',
            description:
                'Drops a stone wall from his former castle onto his foes.',
            power: '180'
        },
        inspirit: {
            name: 'Castle Power',
            description:
                "Increases an ally's DEF to the level of a castle wall.",
            power: '0'
        },
        stats: {
            hp: '277',
            str: '88',
            spr: '61',
            def: '143',
            spd: '95'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Roughraff',
        yokaiNumber: '095',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/roughraff.png',
        description:
            'A Yo-kai whose only cause is rebellion, he Inspirits good kids into badness and delinquency.',
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin'],
        skill: {
            name: 'Revenge',
            description: 'Reflects some damageback to foe.'
        },
        attack: {
            name: 'Headbutt',
            power: '55 to 121'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Stare Down',
            description: 'Glares at his foes and lowers their SPD.',
            power: '30'
        },
        inspirit: {
            name: 'Rebel Soul',
            description:
                "Fails to fill a foe with a rebel's soul and lowers its DEF.",
            power: '0'
        },
        stats: {
            hp: '218',
            str: '84',
            spr: '30',
            def: '96',
            spd: '73'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [40, 63]
    },
    {
        name: 'Badude',
        yokaiNumber: '096',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/badude.png',
        description:
            "This gang leader runs into enemy territory wielding his brutal nail bat. That's his way of taking care of his gang.",
        locations: ['Evolve Roughraff at Level 26.'],
        skill: {
            name: 'Revenge',
            description: 'Reflects some damageback to foe.'
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gangster Glare',
            description:
                "Glares at enemies until they're self-conscious. Lowers SPD.",
            power: '100'
        },
        inspirit: {
            name: 'Rebel Soul',
            description:
                "Inspirited Yo-kai's DEF decreases when it works against itself.",
            power: '0'
        },
        stats: {
            hp: '256',
            str: '123',
            spr: '58',
            def: '112',
            spd: '86'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Ramens',
        evolutionIndexes: [40]
    },
    {
        name: 'Bruff',
        yokaiNumber: '097',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bruff.png',
        description:
            'Said to have taken down an entire Yo-kai gang by himself. Many rebel Yo-kai revere him as a big brother.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Yo Mystery Coin',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb'
        ],
        skill: {
            name: 'Revenge',
            description: 'Reflects some damageback to foe.'
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Brutal Butt Bat',
            description:
                'Crunches his foes with his nail bat. Likely to be either critical or a miss.',
            power: '260'
        },
        inspirit: {
            name: 'Enrage',
            description:
                'Enrages an enemy and makes it attack anyone who may be nearby.',
            power: '0'
        },
        stats: {
            hp: '256',
            str: '128',
            spr: '67',
            def: '120',
            spd: '100'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Armsman',
        yokaiNumber: '098',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/armsman.png',
        description:
            'Even headless, he gives 110 percent. He dreams of reuniting with his head someday... Not sure how he dreams\u2014he just does.',
        locations: [
            'Breezy Hills - Gourd Pond Museum 1F',
            'Breezy Hills - Gourd Pond Museum 2F',
            'Sawayama-jo - Area 2',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)'
        ],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Lock of Steel',
            description: "Gives an order that raises allies' morale and DEF.",
            power: '0'
        },
        inspirit: {
            name: 'Armor Defense',
            description:
                "Raises an ally's DEF with Armsman's divine protection.",
            power: '0'
        },
        stats: {
            hp: '244',
            str: '84',
            spr: '50',
            def: '96',
            spd: '54'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [11]
    },
    {
        name: 'Mimikin',
        yokaiNumber: '099',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mimikin.png',
        description:
            'A store mannequin and very gifted mimic. Anyone he Inspirits starts doing impressions of others whenever possible.',
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Uptown Springdale - Elementary School 2F',
            'Uptown Springdale - Elementary School 1F',
            'Breezy Hills - Gate Room - Traffic-Light Zone',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)'
        ],
        skill: {
            name: 'Me Too!',
            description: 'Yo-kai mimics movesmade by an ally in front.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Imitate Guardian',
            description:
                'Ups his DEF by mimicking a deity, drawing enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Copycat',
            description:
                'The Inspirited Yo-kai imitates the enemy and attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '195',
            str: '100',
            spr: '34',
            def: '104',
            spd: '96'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Candies'
    },
    {
        name: 'Blowkade',
        yokaiNumber: '100',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blowkade.png',
        description:
            "Blowkade is one weird Yo-kai. Nobody knows why he puts his all into blocking people's paths.",
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Downtown Springdale - Construction Site',
            "Breezy Hills - Gate Room - Compunzer's Zone",
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Blasters - Crank-a-kai - Brown mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Barricade Block',
            description:
                'Raises DEF and draws enemy attacks. Quite the effective blockade.',
            power: '0'
        },
        inspirit: {
            name: 'Needle Poke',
            description:
                'Pierces a foe with a needle and gradually lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '236',
            str: '79',
            spr: '43',
            def: '93',
            spd: '66'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Milks'
    },
    {
        name: 'Ledballoon',
        yokaiNumber: '101',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ledballoon.png',
        description:
            "A dump truck couldn't move Ledballoon's heavy body...which is bad news if he gets in your way.",
        locations: [
            "Breezy Hills - Gate Room - Compunzer's Zone",
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Blasters - Crank-a-kai - Silver mission - Red Orb'
        ],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Iron Cloutain',
            description: 'Slaps an enemy. Can cancel enemy Soultimate Moves.',
            power: '130'
        },
        inspirit: {
            name: 'Big Needle Poke',
            description:
                'Pierces a foe with a needle and gradually lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '246',
            str: '98',
            spr: '47',
            def: '110',
            spd: '62'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Milks',
        evolutionIndexes: [37]
    },
    {
        name: 'Fidgephant',
        yokaiNumber: '102',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/fidgephant.png',
        description:
            'Fidgephant always feels like his nose is going to leak. He attacks with a water stream when he has to release it all!',
        locations: [
            'Harrisville - Cicada Canyon',
            'Harrisville - Fullface Rock',
            'Harrisville - Old House by The Station',
            'Harrisville - Rivers',
            'Harrisville - Rice Paddy Path, Cicada Canyon & Fullface Rock - Rivers',
            'Old Harrisville - Rivers',
            'Old Harrisville - Rice Paddy, Fullface Rock & Cicada Canyon - Rivers',
            'Bony Spirits Way - Entrance',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Endurance',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Fidgeting Smack',
            description:
                'Slaps an opponent with his nose. May cancel Soultimate Moves.',
            power: '120'
        },
        inspirit: {
            name: 'Fidgeting',
            description: 'Makes a foe fidget too much to fight.',
            power: '0'
        },
        stats: {
            hp: '221',
            str: '80',
            spr: '64',
            def: '95',
            spd: '71'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [46]
    },
    {
        name: 'Touphant',
        yokaiNumber: '103',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/touphant.png',
        description:
            'Touphant can endure anything...with a certain amount of body-shaking effort. He can help you persevere as well.',
        locations: [
            'San Fantastico - Trees',
            'San Fantastico - Telephone poles',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)'
        ],
        skill: {
            name: 'Endurance',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Trembling Smack',
            description:
                'Slaps an opponent with his nose. May cancel Soultimate Moves.',
            power: '160'
        },
        inspirit: {
            name: 'Shaking',
            description: 'Makes an enemy shake like a newborn fawn.',
            power: '0'
        },
        stats: {
            hp: '206',
            str: '69',
            spr: '104',
            def: '107',
            spd: '71'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [46]
    },
    {
        name: 'Enduriphant',
        yokaiNumber: '104',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/enduriphant.png',
        description:
            'Heroically resists the urge to go to the bathroom for reasons that remain obscure.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Fusion.'
        ],
        skill: {
            name: 'Going Nowhere',
            description: 'Retains 1 HP after aknockout blow twice.'
        },
        attack: {
            name: 'Ventilator',
            power: '50 to 110'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Patience Wall',
            description: 'Turns himself into a wall, hugely increasing DEF.',
            power: '0'
        },
        inspirit: {
            name: 'Thick Skin',
            description:
                'The Inspirited Yo-kai can endure anything. DEF rises strongly.',
            power: '0'
        },
        stats: {
            hp: '247',
            str: '117',
            spr: '83',
            def: '114',
            spd: '85'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [46]
    },
    {
        name: 'Zappary',
        yokaiNumber: '105',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/zappary.png',
        description:
            'His mother made him a nice knapsack in which he stores the mighty powers of thunder and lightning.',
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East'
        ],
        skill: {
            name: 'In a Flash',
            description: 'Gets one preemptiveattack.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Zattack',
            description:
                'Pierces a single foe with an impressive bolt of lightning.',
            power: '65 to 170'
        },
        inspirit: {
            name: 'Lightning Speed',
            description:
                'The Inspirited Yo-kai is hit by lightning, and SPD rises.',
            power: '0'
        },
        stats: {
            hp: '154',
            str: '91',
            spr: '100',
            def: '90',
            spd: '99'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [47]
    },
    {
        name: 'Frazzel',
        yokaiNumber: '106',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/frazzel.png',
        description:
            "He's like a lightning rod for danger and attracts trouble wherever he goes. Not the most relaxing way to live...",
        locations: ['Evolve Zappary at Level 29.'],
        skill: {
            name: 'Superconductor',
            description: 'Blocks damage from allLightning skill attacks.'
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Divine Strike',
            description:
                'Releases the electric power he has absorbed and strikes all foes.',
            power: '180'
        },
        inspirit: {
            name: 'Lightning Speed',
            description:
                'The Inspirited Yo-kai is hit by lightning, and SPD rises.',
            power: '0'
        },
        stats: {
            hp: '218',
            str: '95',
            spr: '123',
            def: '117',
            spd: '114'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [47]
    },
    {
        name: 'Swelton',
        yokaiNumber: '107',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/swelton.png',
        description:
            "Those he's Inspirited sweat up a storm. When several of these Yo-kai get together, they make for a very sticky situation!",
        locations: [
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Story recruit.'
        ],
        skill: {
            name: 'Oily Mess',
            description: 'Extends time allowedto spin Yo-kai Wheel.'
        },
        attack: {
            name: 'Squish',
            power: '10 to 45'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sweaty Wall',
            description:
                'Ups DEF with a sweaty stance and draws enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Sweat It Out',
            description:
                "The Inspirited Yo-kai can't stop sweating and gradually loses HP.",
            power: '0'
        },
        stats: {
            hp: '231',
            str: '79',
            spr: '88',
            def: '107',
            spd: '63'
        },
        tribe: 'Tough',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Curries'
    },
    {
        name: 'Mad Mountain',
        yokaiNumber: '108',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mad_mountain.png',
        description:
            "Hailing from the land of frost, he's the wrestler with legs as thick as glaciers and a heart of ice: MAD MOUNTAIN!",
        locations: [
            'Harrisville - Cicada Canyon',
            'Sawayama-jo - Area 2',
            'Bony Spirits Way - Entrance',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Blasters - Crank-a-kai - Brown mission - Red Orb'
        ],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Ultra Sumo Stomp',
            description:
                'Makes a defensive stomp. Boosts DEF and draws enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Perseverance',
            description:
                "Boosts an ally's DEF with an extra jolt of directed tenacity.",
            power: '0'
        },
        stats: {
            hp: '249',
            str: '96',
            spr: '55',
            def: '93',
            spd: '72'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Sushis',
        evolutionIndexes: [49]
    },
    {
        name: 'Lava Lord',
        yokaiNumber: '109',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lava_lord.png',
        description:
            "And in red, we have the only wrestler to rival Mad Mountain! It's the violent volcano himself\u2014 LAAAVA LOOOOOOORD!",
        locations: [
            'Excellent Tower - Brushwoods & Flowers',
            'Excellent Tower - Garbages',
            'Excellent Tower - Under cars & Distributors',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Red Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb'
        ],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Midnight Stomp',
            description:
                'Makes a defensive stomp. Greatly boosts DEF. Draws attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Volcanic Blessing',
            description:
                'Warms an ally like a volcanic hot spring and gradually restores HP.',
            power: '0'
        },
        stats: {
            hp: '265',
            str: '90',
            spr: '83',
            def: '93',
            spd: '85'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Castelius III',
        yokaiNumber: '110',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_iii.png',
        description:
            "Castelius III will make you always come in third. There's not much of a future in that...unless you're a bronze tycoon.",
        locations: [
            'Downtown Springdale - Construction Site',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Sawayama-jo - Area 2',
            'Mystery Way - Service Road',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Bronze Guard',
            description: 'Takes less Earth andWind damage.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Self-Destruct',
            description:
                'Explosion that will deal damage to enemies and allies alike.',
            power: '220'
        },
        inspirit: {
            name: 'Bronze Power',
            description: 'Wraps an ally in bronze and raises DEF.',
            power: '0'
        },
        stats: {
            hp: '229',
            str: '83',
            spr: '61',
            def: '103',
            spd: '73'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Milks',
        evolutionIndexes: [50]
    },
    {
        name: 'Castelius II',
        yokaiNumber: '111',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_ii.png',
        description:
            'Castelius II will always lock you in second place. Not bad, but could you have done a bit better...?',
        locations: [
            'Mystery Way - Gogo Junction',
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Silver Guard',
            description: 'Takes less Fire and Icedamage.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Refined Guard',
            description:
                'A strong defensive pose. Greatly boosts DEF. Draws attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Silver Power',
            description: 'Covers an ally in silver and raises DEF.',
            power: '0'
        },
        stats: {
            hp: '239',
            str: '94',
            spr: '71',
            def: '116',
            spd: '83'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Milks',
        evolutionIndexes: [50, 51]
    },
    {
        name: 'Castelius I',
        yokaiNumber: '112',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_i.png',
        description:
            "First place. Gold medals. Big trophies. That's your life if Castelius I Inspirits you. But with great power comes great...ness!",
        locations: ['Gold-Gleaming Hwy. - Interchange', 'Fusion.'],
        skill: {
            name: 'Gold Guard',
            description: 'Takes less Lightningand Water damage.'
        },
        attack: {
            name: 'Bone Crusher',
            power: '100 to 150'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Glorious Buh-Bye',
            description:
                'Explosion that will deal damage to enemies and allies alike.',
            power: '250'
        },
        inspirit: {
            name: 'Gold Power',
            description: 'Covers an ally in gold and raises DEF.',
            power: '0'
        },
        stats: {
            hp: '259',
            str: '103',
            spr: '82',
            def: '131',
            spd: '93'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [51, 52]
    },
    {
        name: 'Castelius Max',
        yokaiNumber: '113',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_max.png',
        description:
            'Being Inspirited by this extremely rare Yo-kai will let you transcend mere winning and losing.',
        locations: ['Fusion.'],
        skill: {
            name: 'Platinum Guard',
            description: 'Weakens Ice, Wind, andWater elemental hits.'
        },
        attack: {
            name: 'Bone Crusher',
            power: '100 to 150'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Platinum Guard',
            description:
                'A strong defensive pose with a strong DEF boost. Draws attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Platinum Power',
            description:
                'Covers an ally in shiny platinum and boosts all stats!',
            power: '0'
        },
        stats: {
            hp: '276',
            str: '107',
            spr: '86',
            def: '146',
            spd: '104'
        },
        tribe: 'Tough',
        element: 'Wind',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Milks',
        evolutionIndexes: [52]
    },
    {
        name: 'Rhinoggin',
        yokaiNumber: '114',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhinoggin.png',
        description:
            'The hyperaggressive Rhinoggin is always  battling Beetler for the title of Bug Yo-kai King.',
        locations: [
            'Harrisville - Trees',
            'Bony Spirits - Gogo Junction',
            "Quest - Which Beetle's Better"
        ],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Super Horn Crash',
            description:
                'Crashes into an enemy with his prized horn and deals big damage.',
            power: '160 to 240'
        },
        inspirit: {
            name: 'Rhino Power',
            description:
                'Gives an ally all the proportionate STR of a Rhino Beetle.',
            power: '0'
        },
        stats: {
            hp: '261',
            str: '102',
            spr: '66',
            def: '113',
            spd: '64'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [53]
    },
    {
        name: 'Rhinormous',
        yokaiNumber: '115',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhinormous.png',
        description:
            'Only the select few Rhinoggin who have proven their might in battle can hold the name of Rhinormous.',
        locations: ['Fusion.'],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Horn Breaker',
            description: 'Smashes into an enemy like a dump truck with a horn!',
            power: '190 to 285'
        },
        inspirit: {
            name: 'Peerless Power',
            description: "Raises an ally's STR to peerless levels.",
            power: '0'
        },
        stats: {
            hp: '280',
            str: '116',
            spr: '68',
            def: '133',
            spd: '98'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [53]
    },
    {
        name: 'Hornaplenty',
        yokaiNumber: '116',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hornaplenty.png',
        description:
            'When Rhinormous achieves power far beyond his peers, he can earn the rare title of Hornaplenty.',
        locations: [
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Horn Explosion',
            description: 'Smashes into an enemy like a dump truck with a horn!',
            power: '210 to 315'
        },
        inspirit: {
            name: 'Legend Power',
            description: "Boosts an ally's DEF with divine combat abilities.",
            power: '0'
        },
        stats: {
            hp: '279',
            str: '133',
            spr: '57',
            def: '141',
            spd: '112'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Robonyan',
        yokaiNumber: '117',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonyan.png',
        description:
            "A robot that thinks he's actually Jibanyan. Stiff movement aside, the resemblance is uncatty! Meow meow.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - 3DS coin',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'Quest - From the Future!',
            'Quest - Watch the Skies'
        ],
        skill: {
            name: 'Blocker',
            description: 'Will be guarding whenmoving to the front.'
        },
        attack: {
            name: 'Rocket Punch',
            power: '100 to 150'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Guard Meowde',
            description: 'Increases DEF and draws enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Steel Power',
            description: "Makes an ally's skin as strong as steel. Raises DEF.",
            power: '0'
        },
        stats: {
            hp: '266',
            str: '101',
            spr: '79',
            def: '119',
            spd: '104'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Goldenyan',
        yokaiNumber: '118',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/goldenyan.png',
        description:
            'Goldenyan glistens with purrfection. Meow meow. Truly priceless.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mystery Way - Crank-a-kai - Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Gold Guard',
            description: 'Takes less Lightningand Water damage.'
        },
        attack: {
            name: 'Rocket Punch',
            power: '100 to 150'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gold Thundpurr',
            description:
                'Increases stats of allies with mystic, golden powers.',
            power: '0'
        },
        inspirit: {
            name: 'Golden Power',
            description: "Makes an ally's skin shiny as gold. Raises DEF.",
            power: '0'
        },
        stats: {
            hp: '282',
            str: '102',
            spr: '67',
            def: '132',
            spd: '122'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Dromp',
        yokaiNumber: '119',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dromp.png',
        description:
            'Fairy tales tell of the monstrous Dromp building mountains and digging ponds.',
        locations: [
            'Mystery Way - Crank-a-kai - Butterfly Mystery Coin',
            'Quest - Treasure Hunters'
        ],
        skill: {
            name: 'Insulator',
            description: 'Takes less damagefrom Lightning attacks.'
        },
        attack: {
            name: 'Steamroll',
            power: '60 to 90'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Total Collapse',
            description:
                'Explosion that will deal damage to enemies and allies alike.',
            power: '300'
        },
        inspirit: {
            name: 'Earth Healing',
            description:
                "Gradually restores an ally's HP using the power of earth.",
            power: '0'
        },
        stats: {
            hp: '275',
            str: '111',
            spr: '58',
            def: '142',
            spd: '58'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Swosh',
        yokaiNumber: '120',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/swosh.png',
        description:
            'A Yo-kai with a heart as big as the ocean. Some say that Swosh embodies the sea itself.',
        locations: ['Quest - The God of the Sea'],
        skill: {
            name: 'Blessed Body',
            description: 'When defeated, Yo-kaiin the front recover HP.'
        },
        attack: {
            name: 'Steamroll',
            power: '60 to 90'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Tidal Guard',
            description:
                'Braces himself and raises DEF for the attacks he will draw.',
            power: '0'
        },
        inspirit: {
            name: 'Ocean Power',
            description:
                "Boosts an ally's stats with the vast power of the sea.",
            power: '0'
        },
        stats: {
            hp: '291',
            str: '55',
            spr: '111',
            def: '156',
            spd: '84'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Toadal Dude',
        yokaiNumber: '121',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/toadal_dude.png',
        description:
            'A toad who lived for so long that he turned into a Yo-kai. He says the secret to his long life lies in his slick sense of style.',
        locations: ['Clear "Fleshy Souls General" quest.'],
        skill: {
            name: 'Toadally Saved',
            description: 'Protects allies on theverge of defeat.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Warts and All',
            description: 'Attacks all foes with a blast of pent-up toad power.',
            power: '46x5'
        },
        inspirit: {
            name: 'Big Shot',
            description:
                'The Inspirited Yo-kai feels so important that it is always targeted.',
            power: '0'
        },
        stats: {
            hp: '261',
            str: '149',
            spr: '96',
            def: '129',
            spd: '111'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Uber Geeko',
        yokaiNumber: '122',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/uber_geeko.png',
        description:
            'This gecko-turned-guy prefers staying in to living the high life, unlike his outgoing cousin Toadal Dude.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Orange Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin'
        ],
        skill: {
            name: 'Geckstra Safe',
            description: 'Protects allies on theverge of defeat.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Geck Out',
            description:
                'Attacks all foes with a blast of pent-up gecko power.',
            power: '42x5'
        },
        inspirit: {
            name: 'Fade Away',
            description:
                'The Inspirited Yo-kai fades out of awareness and cannot be targeted.',
            power: '0'
        },
        stats: {
            hp: '252',
            str: '99',
            spr: '126',
            def: '131',
            spd: '101'
        },
        tribe: 'Tough',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Leggly',
        yokaiNumber: '123',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/leggly.png',
        description:
            'A pair of perfect limbs that gives whomever he Inspirits the loveliest legs in town!',
        locations: [
            'Uptown Springdale - Bushes',
            'Blossom Heights - Secret Byway',
            'Blossom Heights - Bamboo groves',
            'Blossom Heights - Under cars & Distributors',
            'Blossom Heights - Tucked Away Lot, Secret Byway & Hidden Side Street - Garbages & Dumps',
            'Breezy Hills - Gate Room - Can-Kicking Zone',
            'Mystery Way - Route 6',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)'
        ],
        skill: {
            name: 'Great Legs',
            description: 'When in back, allies infront recover HP.'
        },
        attack: {
            name: 'Kick',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Shake a Leg',
            description: 'Boosts morale, giving her allies a burst of SPD.',
            power: '0'
        },
        inspirit: {
            name: 'Leg Up',
            description:
                "The Inspirited Yo-kai's newly beautified legs give it a SPD boost.",
            power: '0'
        },
        stats: {
            hp: '189',
            str: '84',
            spr: '49',
            def: '41',
            spd: '110'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Dazzabel',
        yokaiNumber: '124',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dazzabel.png',
        description:
            "Dazzabel loves wearing anything gaudy. If she Inspirits you, you'll start liking that style too!",
        locations: [
            'Uptown Springdale - Bushes',
            'Breezy Hills - Gourd Pond Museum 1F',
            'Breezy Hills - Gourd Pond Museum 2F',
            'Breezy Hills - Brushwoods & flowers',
            'Gera Gera Land',
            'Mystery Way - Service Road',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: '\u2606Stylish Stab',
            description:
                'Repeatedly stabs her opponents with her stylish umbrella.',
            power: '17x5'
        },
        inspirit: {
            name: 'Makeover',
            description:
                'Turns a Yo-kai into a gaudy fashionista who draws a lot of anger.',
            power: '0'
        },
        stats: {
            hp: '180',
            str: '75',
            spr: '49',
            def: '82',
            spd: '88'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Sweets',
        evolutionIndexes: [31]
    },
    {
        name: 'Rattelle',
        yokaiNumber: '125',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rattelle.png',
        description:
            "While she looks calm in her gothic wear, she'll fly into a rage if you insult her style.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Fusion.'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: '\u2606Prism Parasol',
            description: 'Pokes all foes with her sassy umbrella.',
            power: '22x7'
        },
        inspirit: {
            name: 'So Generous',
            description: 'Makes a Yo-kai generous enough to scatter money.',
            power: '0'
        },
        stats: {
            hp: '222',
            str: '92',
            spr: '68',
            def: '89',
            spd: '101'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Sweets',
        evolutionIndexes: [31]
    },
    {
        name: 'Skelebella',
        yokaiNumber: '126',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skelebella.png',
        description:
            "She's so confident in the unparalleled beauty of her bones that she doesn't even need her skin.",
        locations: [
            'Mt. Wildwood - Brushwoods',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Pointy Pokes',
            power: '12x3 to 26x3'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: '\u2606Radiant Rain',
            description:
                'Damages opponents by calling down rain to match her umbrella.',
            power: '160'
        },
        inspirit: {
            name: 'So Generous',
            description: 'Makes a Yo-kai generous enough to scatter money.',
            power: '0'
        },
        stats: {
            hp: '245',
            str: '90',
            spr: '81',
            def: '104',
            spd: '98'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Cadin',
        yokaiNumber: '127',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cadin.png',
        description:
            'He claims to practice "cicada ninjutsu"...but that\'s not really a thing. Unless it\'s a mastery of running away.',
        locations: [
            'Uptown Springdale - Trees',
            'Mt. Wildwood - Trees',
            'Mt. Wildwood - Abandoned Tunnel West & East & Jumbo Slider - Trees',
            'Blossom Heights - Trees',
            "Shopper's Row - Trees",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'San Fantastico - Trees',
            'Harrisville - Trees',
            'Old Springdale - Trees',
            'Old Springdale - Well Road - Trees',
            'Old Springdale - Gourd Pond - Trees',
            'Old Harrisville - Trees',
            'Sawayama-jo - Area 1 - Trees',
            'Gold-Gleaming Hwy. - Eastbound',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Modest',
            description: 'Low chance of gettingattacked by foes.'
        },
        attack: {
            name: 'Stepping Slice',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Cicada Cut',
            description: 'Nervously slices all of his foes.',
            power: '18x5'
        },
        inspirit: {
            name: 'Cicada Ninjutsu',
            description: "Raises a Yo-kai's SPD with cicada-style ninjutsu.",
            power: '0'
        },
        stats: {
            hp: '185',
            str: '84',
            spr: '64',
            def: '56',
            spd: '87'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [55]
    },
    {
        name: 'Cadable',
        yokaiNumber: '128',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cadable.png',
        description:
            'Cadin has trained his "cicada ninjutsu" to its peak. Now Cadable claims it\'s a worthy martial art! *crickets* *cicadas*',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Blasters - Crank-a-kai - Gold mission - Red Orb',
            'Evolve Cadin at Level 21.'
        ],
        skill: {
            name: 'Modest',
            description: 'Low chance of gettingattacked by foes.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Shadow Speed',
            description:
                "Cicada ninjutsu's ultimate move! This boosts SPD of allies.",
            power: '0'
        },
        inspirit: {
            name: 'Cicada Ninjutsu',
            description: "Raises a Yo-kai's SPD with cicada-style ninjutsu.",
            power: '0'
        },
        stats: {
            hp: '222',
            str: '104',
            spr: '74',
            def: '67',
            spd: '98'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Juices',
        evolutionIndexes: [55]
    },
    {
        name: 'Singcada',
        yokaiNumber: '129',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/singcada.png',
        description:
            'His advanced style of "cicada ninjutsu" involves singing as you swing! His battles even attract the occasional music fan!',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Mystery Way - Crank-a-kai - Mystery Coin',
            'Blasters - Crank-a-kai - Normal mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Quest - A Cicada Professional'
        ],
        skill: {
            name: 'Eyesight A',
            description: 'Never misses attacks.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Wind Run',
            description:
                "Cicada ninjutsu's ultimate technique! Boosts SPD of allies.",
            power: '0'
        },
        inspirit: {
            name: 'Radical Ninjutsu',
            description:
                "Raises a Yo-kai's SPD with a branch style of cicada ninjutsu.",
            power: '0'
        },
        stats: {
            hp: '250',
            str: '105',
            spr: '88',
            def: '63',
            spd: '112'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Juices'
    },
    {
        name: 'Pupsicle',
        yokaiNumber: '130',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pupsicle.png',
        description:
            'Pupsicle is always cold. He may be Inspiriting those who wear layers of clothes in summer.',
        locations: [
            'Blossom Heights - Hidden Side Street',
            'Mystery Way - Back Road'
        ],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Icicle Crack',
            description: 'Drops a number of sharp icicles on his opponents.',
            power: '55 to 144'
        },
        inspirit: {
            name: 'Chills',
            description: 'Makes a foe too cold to fight and lowers its STR.',
            power: '0'
        },
        stats: {
            hp: '174',
            str: '73',
            spr: '80',
            def: '57',
            spd: '85'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [57]
    },
    {
        name: 'Chilhuahua',
        yokaiNumber: '131',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chilhuahua.png',
        description:
            'Legends tell of Chilhuahua saving people lost in the snowy mountains. Some consider him a deity.',
        locations: ['Fusion.'],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Ventilator',
            power: '50 to 110'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Subzero',
            description: 'Crushes his foes with an icy blast.',
            power: '125 to 187'
        },
        inspirit: {
            name: 'Freeze',
            description: 'Makes a foe shiver and drops its SPD.',
            power: '0'
        },
        stats: {
            hp: '221',
            str: '109',
            spr: '131',
            def: '89',
            spd: '106'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Ramens',
        evolutionIndexes: [57]
    },
    {
        name: 'Swelterrier',
        yokaiNumber: '132',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/swelterrier.png',
        description:
            'His fiery heart and body always make him feel too hot. Being near him is like being near a space heater.',
        locations: [
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Fire Watchout',
            description: 'Takes less damagefrom Fire attacks.'
        },
        attack: {
            name: 'Ventilator',
            power: '50 to 110'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Heat Wave',
            description: 'Overwhelms his foes with a stifling heat.',
            power: '140 to 210'
        },
        inspirit: {
            name: 'Blazing Heart',
            description: "Sets an ally's heart ablaze and boosts STR.",
            power: '0'
        },
        stats: {
            hp: '237',
            str: '120',
            spr: '127',
            def: '98',
            spd: '115'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Jumbelina',
        yokaiNumber: '133',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jumbelina.png',
        description:
            'Those she Inspirits wind up with their faces rearranged. For some reason, her victims are usually female...',
        locations: [
            'Uptown Springdale - Bushes',
            'Breezy Hills - Gate Room - Traffic-Light Zone',
            'Breezy Hills - Brushwoods & flowers',
            'Harrisville - Under porches',
            'Harrisville - Gravestones',
            'Harrisville - Under cars',
            'Sawayama-jo - Area 1 - Brushwoods',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)'
        ],
        skill: {
            name: 'Shuffle',
            description: 'Shuffles all Yo-kailineups.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Change Face',
            description:
                'Rearranges her facial features at top speed to confuse foes.',
            power: '0'
        },
        inspirit: {
            name: 'Funny Face',
            description:
                "The Inspirited Yo-kai's face looks so funny, it's always targeted.",
            power: '0'
        },
        stats: {
            hp: '205',
            str: '55',
            spr: '89',
            def: '70',
            spd: '103'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Boyclops',
        yokaiNumber: '134',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/boyclops.png',
        description:
            "Not the most intimidating of Yo-kai, but he saves so much on contact lenses that he doesn't really care.",
        locations: ['Old Springdale - Well Road'],
        skill: {
            name: 'Soulful Promise',
            description: 'Gives a SPD boost to all Fleshy Souls Yo-kai.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Eyelusion',
            description:
                'Stares down the enemy, sowing discomfort in their ranks.',
            power: '0'
        },
        inspirit: {
            name: 'Eye-Eye',
            description:
                "The Inspirited Yo-kai's eyesight gets better, and so does its STR.",
            power: '0'
        },
        stats: {
            hp: '197',
            str: '95',
            spr: '55',
            def: '77',
            spd: '101'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Odens'
    },
    {
        name: 'Jibanyan',
        yokaiNumber: '135',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jibanyan.png',
        description:
            'After being run over by a truck, he Inspirits an intersection and seeks to get his revenge on passing trucks.',
        locations: ['Story recruit.'],
        skill: {
            name: 'Adrenaline',
            description: 'Power increases eachtime a foe is defeated.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Paws of Fury',
            description:
                'Punches all opponents with paws trained on moving vehicles.',
            power: '20x5'
        },
        inspirit: {
            name: 'Slow Down',
            description: 'Lowers enemy SPD with a paralyzing seal.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '97',
            spr: '56',
            def: '68',
            spd: '104'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Chocobars',
        evolutionIndexes: [63, 64]
    },
    {
        name: 'Thornyan',
        yokaiNumber: '136',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/thornyan.png',
        description:
            "Jibanyan's proud of his new spiky body. Just don't walk behind him while you're barefoot.",
        locations: ['Row - Tranquility Apartments'],
        skill: {
            name: 'Spiky Guard',
            description: 'Deals damage back tofoe while guarding.'
        },
        attack: {
            name: 'Ventilator',
            power: '50 to 110'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Thorny Thwacks',
            description: 'Grows spikes on his paws and punches all opponents.',
            power: '23x7'
        },
        inspirit: {
            name: 'Needle Poke',
            description:
                'Stabs a foe with tons of needles and steadily lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '224',
            str: '104',
            spr: '90',
            def: '93',
            spd: '121'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Chocobars',
        evolutionIndexes: [64]
    },
    {
        name: 'Baddinyan',
        yokaiNumber: '137',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/baddinyan.png',
        description:
            "Jibanyan gone bad. REAL BAD. With an impressive pompadour haircut and classy tails, he's a delinquent with no cause.",
        locations: ['Row - Tranquility Apartments'],
        skill: {
            name: 'Pompadour',
            description: 'Will dodge enemyheadbutt attacks.'
        },
        attack: {
            name: 'Nasty Kick',
            power: '100 to 150'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Nyice ta Beatcha',
            description:
                'Damages and confuses his enemies with a wave of evil.',
            power: '130'
        },
        inspirit: {
            name: 'Delinquency',
            description:
                "Makes a foe such a delinquent that it'll attack its allies.",
            power: '0'
        },
        stats: {
            hp: '246',
            str: '111',
            spr: '51',
            def: '105',
            spd: '119'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chocobars',
        evolutionIndexes: [63]
    },
    {
        name: 'Buchinyan',
        yokaiNumber: '138',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/buchinyan.png',
        description:
            'A combination of Jibanyan and Whisper. Despite their obvious differences, it actually works pretty well.',
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin +'],
        skill: {
            name: 'Soft Skin',
            description: 'Increases own DEF ifdealt critical damage.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Flurry of Furry',
            description:
                'A new level of Paws of Fury that deals damage to all foes.',
            power: '13x10'
        },
        inspirit: {
            name: 'All Shook Up',
            description:
                'The Inspirited Yo-kai is befuddled and attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '113',
            spr: '88',
            def: '62',
            spd: '119'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Walkappa',
        yokaiNumber: '139',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/walkappa.png',
        description:
            'Most kappas stay in the water, but this one likes to walk around. He pours water on his head to make up for this.',
        locations: [
            'Uptown Springdale - Rivers',
            'Fleshy Souls Way - Entrance'
        ],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Mega Waterfall',
            description: 'Summons a huge waterfall directly above his enemies.',
            power: '80'
        },
        inspirit: {
            name: 'Nap Time',
            description:
                'Walkappa makes an enemy quick to nap... just like him!',
            power: '0'
        },
        stats: {
            hp: '197',
            str: '62',
            spr: '99',
            def: '68',
            spd: '95'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Sushis',
        evolutionIndexes: [62]
    },
    {
        name: 'Appak',
        yokaiNumber: '140',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/appak.png',
        description:
            'Appak can cut just about anything with his water sword. He wanders the world in order to heighten his skills.',
        locations: ['Evolve Walkappa at Level 32.'],
        skill: {
            name: "Fill 'Er Up",
            description: 'Blocks damage from allWater skill attacks.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Torrent Slash',
            description:
                'Puts all his spirit into his water blade to cut his enemies.',
            power: '130 to 195'
        },
        inspirit: {
            name: 'Torrent Power',
            description: "Improves an ally's concentration as well as SPR!",
            power: '0'
        },
        stats: {
            hp: '237',
            str: '110',
            spr: '113',
            def: '75',
            spd: '101'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Sushis',
        evolutionIndexes: [62]
    },
    {
        name: 'Supyo',
        yokaiNumber: '141',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/supyo.png',
        description:
            "Whereas most kappas stick to rivers, this one likes to surf...and pick up girls while he's at it.",
        locations: [
            'San Fantastico - Sea',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb',
            'Evolve D\u2019wanna at Level 15.',
            'Quest - The Realest Kappa'
        ],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bodacious Slash',
            description:
                'Puts all his spirit into his water blade to cut his enemies.',
            power: '135 to 202'
        },
        inspirit: {
            name: 'Surf Power',
            description:
                "Makes an ally move so fast, you'd think it was surfing.",
            power: '0'
        },
        stats: {
            hp: '245',
            str: '109',
            spr: '124',
            def: '85',
            spd: '103'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Komasan',
        yokaiNumber: '142',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komasan.png',
        description:
            "Komasan is a guardian lion-dog who got bored with guarding his shrine. Now he's looking for a new one.",
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin +'],
        skill: {
            name: 'Alpha',
            description: 'With an adjacent OmegaYo-kai, SPR increases.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Spirit Dance',
            description: "Summons will-o'-the- wisps to damage his enemies.",
            power: '100'
        },
        inspirit: {
            name: 'Burn',
            description:
                'Burns a foe with raging fire and steadily drains its HP.',
            power: '0'
        },
        stats: {
            hp: '203',
            str: '65',
            spr: '105',
            def: '72',
            spd: '94'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Milks',
        evolutionIndexes: [65]
    },
    {
        name: 'Komane',
        yokaiNumber: '143',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komane.png',
        description:
            "Komasan's travels made him grow up into a brave and dependable Yo-kai. He's strong too!",
        locations: ['Evolve Komasan at Level 35.'],
        skill: {
            name: 'Alpha',
            description: 'With an adjacent OmegaYo-kai, SPR increases.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Spirit Burst',
            description:
                "Will-o'-the-wisps fly from his body to burn his foes.",
            power: '140 to 210'
        },
        inspirit: {
            name: 'Burn',
            description:
                'Burns a foe with raging fire and steadily decreases its HP.',
            power: '0'
        },
        stats: {
            hp: '248',
            str: '87',
            spr: '124',
            def: '90',
            spd: '114'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [65]
    },
    {
        name: 'Komajiro',
        yokaiNumber: '144',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komajiro.png',
        description:
            "Komajiro is Komasan's younger, more streetwise twin. But he'll always look up to his bumpkin big bro.",
        locations: [
            'Blossom Heights - Under cars & Distributors',
            'Bony Spirits - Gogo Junction'
        ],
        skill: {
            name: 'Omega',
            description: 'With an adjacent AlphaYo-kai, STR increases.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Wild Zaps',
            description: 'Calls down lightning upon his opponents.',
            power: '85'
        },
        inspirit: {
            name: 'Tiger Power',
            description: "Raises an ally's SPD to match that of a tiger.",
            power: '0'
        },
        stats: {
            hp: '178',
            str: '79',
            spr: '82',
            def: '77',
            spd: '96'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Milks',
        evolutionIndexes: [66]
    },
    {
        name: 'Komiger',
        yokaiNumber: '145',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komiger.png',
        description:
            "Komajiro's pursuit of his brother brought out his ferocious tiger spirit. He even has stripes!",
        locations: [
            'Evolve Komajiro at Level 35.',
            ' Yo-kai Spot - Heavyweight Boxing Ghost'
        ],
        skill: {
            name: 'Omega',
            description: 'With an adjacent AlphaYo-kai, STR increases.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Crazy Lightning',
            description:
                'Calls down strong lightning bolts upon his unfortunate enemies.',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Tiger Power',
            description:
                "Raises an ally's SPD significantly to match that of a tiger.",
            power: '0'
        },
        stats: {
            hp: '228',
            str: '111',
            spr: '107',
            def: '95',
            spd: '102'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [66]
    },
    {
        name: 'Baku',
        yokaiNumber: '146',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/baku.png',
        description:
            'A Yo-kai that eats only human dreams. It puts people to sleep before digging in. Beaux r\u00eaves!',
        locations: [
            'Yo-kai World - Liar Mountain',
            'Sawayama-jo - Area 2',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Story recruit.'
        ],
        skill: {
            name: 'Grip on You',
            description: 'Amount of absorbed HPincreased.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sleepy Smoke',
            description:
                'Sprays smoke from his nose and puts his foes to sleep.',
            power: '0'
        },
        inspirit: {
            name: 'Bedtime',
            description:
                'Hits Yo-kai with a heavy drowsiness...and makes them very...sleepy...',
            power: '0'
        },
        stats: {
            hp: '196',
            str: '65',
            spr: '94',
            def: '75',
            spd: '90'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Juices',
        evolutionIndexes: [59]
    },
    {
        name: 'Bakulia',
        yokaiNumber: '147',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bakulia.png',
        description:
            "Has the ability to enter people's dreams and find out what they're feeling\u2014 and can take others along for the ride.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Evolve Baku at Level 29.'
        ],
        skill: {
            name: 'Grip on You',
            description: 'Amount of absorbed HPincreased.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Sleepy Gas',
            description:
                'Emits sleeping gas from her nostrils, flooring all foes.',
            power: '0'
        },
        inspirit: {
            name: 'Bedtime',
            description:
                "Makes a foe so deeply sleepy that it'll even sleep in battle!",
            power: '0'
        },
        stats: {
            hp: '233',
            str: '78',
            spr: '108',
            def: '93',
            spd: '110'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Juices',
        evolutionIndexes: [59]
    },
    {
        name: 'Whapir',
        yokaiNumber: '148',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/whapir.png',
        description:
            "A rare white Baku. Legends say that if a Whapir Inspirits you, you're guaranteed to have good dreams. ",
        locations: [
            'San Fantastico - Garbages',
            'San Fantastico - Empty flats',
            'San Fantastico - Under cars',
            'San Fantastico - Hidden Workshop - Garbages',
            'San Fantastico - Hidden Workshop - Empty Flats'
        ],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Daydream',
            description: 'Heals the heart and HP of allies with happy dreams.',
            power: '0'
        },
        inspirit: {
            name: 'Sweet Dreams',
            description:
                "Gradually restores an ally's HP with the power of dreams.",
            power: '0'
        },
        stats: {
            hp: '191',
            str: '83',
            spr: '111',
            def: '82',
            spd: '110'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Juices'
    },
    {
        name: 'Drizzelda',
        yokaiNumber: '149',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/drizzelda.png',
        description:
            "This Yo-kai is a serious downer. Don't invite her to outdoor events, as she's bound to make it rain.",
        locations: [
            'Mt. Wildwood - Brushwoods',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)'
        ],
        skill: {
            name: 'Downpour',
            description: 'All Yo-kai receive moreWater damage.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Drenched',
            description:
                'A deluge of deeply depressing rain does damage to all foes.',
            power: '80 to 176'
        },
        inspirit: {
            name: 'Storm Drain',
            description:
                'The Inspirited Yo-kai gets soaking wet and loses a lot of DEF.',
            power: '0'
        },
        stats: {
            hp: '210',
            str: '41',
            spr: '114',
            def: '83',
            spd: '109'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Juices'
    },
    {
        name: 'Nekidspeed',
        yokaiNumber: '150',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nekidspeed.png',
        description:
            'Anyone Inspirited by this Yo-kai will race around at top speed. Useful for that big track meet.',
        locations: [
            'Breezy Hills - Under cars & Garbages',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Blasters - Crank-a-kai - Silver mission - Red Orb',
            ' Yo-kai Spot - Nuisance Vehicle Complaints'
        ],
        skill: {
            name: 'Step Up',
            description: 'Gets one preemptiveattack.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Flying Start',
            description:
                'Comes flying out of the blocks with a huge SPD boost.',
            power: '0'
        },
        inspirit: {
            name: 'Hot Stepper',
            description:
                'The Inspirited Yo-kai gets a strong SPD boost via Nekidspeed.',
            power: '0'
        },
        stats: {
            hp: '219',
            str: '100',
            spr: '60',
            def: '50',
            spd: '140'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Curries'
    },
    {
        name: 'Shmoopie',
        yokaiNumber: '151',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shmoopie.png',
        description:
            "This Yo-kai is cute enough to melt anyone's heart...and he knows it!  He can be quite the schemer, so look out!",
        locations: [
            'Downtown Springdale - Under cars, Distributors, Garbages & Dumps',
            'Gera Gera Land',
            'Divine Paradise - 5F',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)'
        ],
        skill: {
            name: 'Popularity',
            description: 'Makes more foesbefriend you.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Heartstring Tug',
            description:
                "He's oh-so cute! The hearts of his allies skip a beat and recover HP.",
            power: '90'
        },
        inspirit: {
            name: 'Skip a Beat',
            description:
                "Makes an ally's heart skip a beat. Steadily recovers HP.",
            power: '0'
        },
        stats: {
            hp: '221',
            str: '66',
            spr: '103',
            def: '68',
            spd: '97'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [67, 68]
    },
    {
        name: 'Pinkipoo',
        yokaiNumber: '152',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pinkipoo.png',
        description:
            'Known as the Aristocrat of Love, Pinkipoo uses his overpowering cuteness to win over new followers.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Popularity',
            description: 'Makes more foesbefriend you.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Heartmelt Love',
            description:
                "He's so adorable! The hearts of his allies skip a beat and recover HP.",
            power: '120 to 180'
        },
        inspirit: {
            name: 'Skip a Beat',
            description:
                "Makes an ally's heart skip a beat. Steadily recovers HP.",
            power: '0'
        },
        stats: {
            hp: '238',
            str: '81',
            spr: '121',
            def: '73',
            spd: '111'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [67]
    },
    {
        name: 'Pookivil',
        yokaiNumber: '153',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pookivil.png',
        description:
            "This Yo-kai will make even nice people into scheming manipulators. An embodiment of Pinkipoo's bad side.",
        locations: [
            'Divine Paradise - 5F',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Kai Mystery Coin',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb'
        ],
        skill: {
            name: 'Unpopularity',
            description: 'Makes foes less likelyto become your friend.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Twisted Love',
            description:
                'Heals the hearts of his allies and restores HP) when he acts cute.',
            power: '140 to 210'
        },
        inspirit: {
            name: 'Trickery',
            description:
                'Passes his wickedness on to a foe, who will attack its allies.',
            power: '0'
        },
        stats: {
            hp: '247',
            str: '113',
            spr: '93',
            def: '89',
            spd: '118'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Harry Barry',
        yokaiNumber: '154',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/harry_barry.png',
        description:
            'This village mascot works night and day to come up with ways of making his hometown more popular.',
        locations: ['Quest - Your Local Mascot'],
        skill: {
            name: 'Bear Care',
            description: 'Can recover once whenlow on HP.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Bear Knuckle',
            description:
                'Bolstered by hearty Harrisville vegetables, he hits a single foe.',
            power: '170 to 255'
        },
        inspirit: {
            name: 'Rustic Charm',
            description:
                'The Inspirited Yo-kai is charmed by rural life. All stats boosted.',
            power: '0'
        },
        stats: {
            hp: '227',
            str: '124',
            spr: '95',
            def: '109',
            spd: '85'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'nothing',
        rank: 'b',
        favouriteFood: 'Meats'
    },
    {
        name: 'Frostina',
        yokaiNumber: '155',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/frostina.png',
        description:
            'Frostina has the power to freeze anything, but that keeps her pretty chilly\u2014 that and bad circulation.',
        locations: [
            'Uptown Springdale - Trees',
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Stone Orb'
        ],
        skill: {
            name: 'Snow Play',
            description: 'Increases damage ofown Ice attacks.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Snow Sherbet',
            description:
                'Bombards opponents with a barrage of freezing icicles.',
            power: '65 to 170'
        },
        inspirit: {
            name: 'Numbify',
            description: 'Numbs a foe with sheer cold and lowers its STR.',
            power: '0'
        },
        stats: {
            hp: '225',
            str: '73',
            spr: '114',
            def: '78',
            spd: '106'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Candies',
        evolutionIndexes: [69]
    },
    {
        name: 'Blizzaria',
        yokaiNumber: '156',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blizzaria.png',
        description:
            'Now she can fully control her chilling power. Blizzaria can make snow fall in summer and freeze volcanoes.',
        locations: ['Fusion.'],
        skill: {
            name: 'Snow Play',
            description: 'Increases damage ofown Ice attacks.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Shiny Snowdrifts',
            description: 'Blasts her opponents with a sparkling ice formation.',
            power: '180'
        },
        inspirit: {
            name: 'Numbify',
            description: 'Numbs a foe with sheer cold and lowers its STR.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '81',
            spr: '138',
            def: '93',
            spd: '126'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Candies',
        evolutionIndexes: [59]
    },
    {
        name: 'Damona',
        yokaiNumber: '157',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/damona.png',
        description:
            'The princess of a small netherworld region. Her power is immense, but she lacks the power to feel any emotion.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Cursed Skin',
            description: 'All stats will increasewhen Inspirited by foe.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: '\u2606Shiny Chaos',
            description:
                'Damages her foes and lowers their stats with a dark power.',
            power: '140'
        },
        inspirit: {
            name: 'Curse of Darkness',
            description:
                "Drops a foe's SPR with the terrifying curse of darkness.",
            power: '0'
        },
        stats: {
            hp: '254',
            str: '116',
            spr: '132',
            def: '99',
            spd: '105'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Faux Kappa',
        yokaiNumber: '158',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/faux_kappa.png',
        description:
            "Now THIS is a Yo-kai! There's a possibility that he's related to Walkappa!",
        locations: [
            'Old Springdale - Rivers',
            'Sawayama-jo - Area 2 - Rivers',
            'Story recruit.',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Mega Wave',
            description:
                "Harnesses the power of a river's flow to do damage to a foe.",
            power: '170 to 255'
        },
        inspirit: {
            name: 'Kappa Quick',
            description:
                'The Inspirited Yo-kai gets a SPD boost thanks to Faux Kappa.',
            power: '0'
        },
        stats: {
            hp: '232',
            str: '105',
            spr: '113',
            def: '79',
            spd: '119'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Tigappa',
        yokaiNumber: '159',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tigappa.png',
        description:
            "Although he's well  respected in Springdale, this exotic kappa can't help getting homesick sometimes.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Pink Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Sum Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Raging River',
            description:
                "Harnesses the power of a river's flow to do damage to a foe.",
            power: '200 to 300'
        },
        inspirit: {
            name: 'Kappa Quick',
            description:
                'The Inspirited Yo-kai gets a SPD boost thanks to Tigappa.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '122',
            spr: '126',
            def: '79',
            spd: '143'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Master Nyada',
        yokaiNumber: '160',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/master_nyada.png',
        description:
            'A battle-hardened Yo-kai who channels an energy known as "The Faucet" via his mastery of a mystical conduit. No pushover.',
        locations: ["Quest - Nyada's Trials"],
        skill: {
            name: 'Use the Hose',
            description: 'Dodges and returnsevery enemy attack.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'The Hose',
            description:
                'Infinite Hose energy flows from his palms, damaging all enemies.',
            power: '210'
        },
        inspirit: {
            name: 'Hose Be with You',
            description:
                "The Inspirited Yo-kai's stats get boosted by Hose power.",
            power: '0'
        },
        stats: {
            hp: '249',
            str: '92',
            spr: '150',
            def: '108',
            spd: '129'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Wantston',
        yokaiNumber: '161',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wantston.png',
        description:
            "Wantston wants everything others have, but he won't even try to acquire what he envies. So no worries.",
        locations: [
            'Downtown Springdale - Delivery Bay',
            'Gold-Gleaming Hwy. - Westbound'
        ],
        skill: {
            name: 'Greed',
            description: 'Foe will be more proneto drop items.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Envious Hand',
            description:
                'Grows a hand from his mouth and gives enemy HP to his allies.',
            power: '45 to 117'
        },
        inspirit: {
            name: 'Envy',
            description:
                'The Inspirited Yo-kai attacks allies out of jealousy.',
            power: '0'
        },
        stats: {
            hp: '180',
            str: '80',
            spr: '72',
            def: '61',
            spd: '85'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Grubsnitch',
        yokaiNumber: '162',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grubsnitch.png',
        description:
            "If you can't stop snacking before dinner, Grubsnitch is probably nearby.",
        locations: [
            'Blossom Heights - Bamboo groves',
            "Shopper's Row - Brushwoods & flowers",
            'Old Springdale - Under porches',
            'Old Springdale - Gravestones',
            'Old Springdale - Bamboo Groves',
            'Sawayama-jo - Area 2 - Under porches',
            'Mystery Way - Route 5'
        ],
        skill: {
            name: 'Snitch',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Grub Stealer',
            description:
                'Grows a hand from his mouth and gives enemy HP to his allies.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Gluttony',
            description:
                "Gradually decreases a foe's HP with a strong stomachache. ",
            power: '0'
        },
        stats: {
            hp: '205',
            str: '91',
            spr: '74',
            def: '63',
            spd: '89'
        },
        tribe: 'Heartful',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Wiglin',
        yokaiNumber: '163',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wiglin.png',
        description:
            "A seaweed Yo-kai who wants to spread his hometown dance to the world. And he's very healthy too!",
        locations: [
            "Shopper's Row - Shopping Street Narrows",
            "Shopper's Row - Rivers",
            "Shopper's Row - Shopping Street Narrows - Garbages & Dumps",
            'San Fantastico - Seaside Cave',
            'San Fantastico - Hidden Workshop',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Wavy Body',
            description: "Dodges attacks likeyou wouldn't believe!"
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Wiggling Wave',
            description:
                'Raises the cheer and DEF of all allies with a catchy tune.',
            power: '0'
        },
        inspirit: {
            name: 'Healthy Wakame',
            description: "Uses seaweed to raise an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '189',
            str: '88',
            spr: '65',
            def: '73',
            spd: '69'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [72]
    },
    {
        name: 'Kelpacabana',
        yokaiNumber: '164',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kelpacabana.png',
        description:
            'The biggest star the world of seaweed has ever seen! He dances for screaming fans wherever he goes.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Evolve Wiglin at Level 17.'
        ],
        skill: {
            name: 'Seaweed Samba',
            description: "Boosts all adjacentYo-kai's STR."
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Seaweed Carnival',
            description: "An elaborate dance steadily restores all allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Dance Party',
            description:
                "The Inspirited Yo-kai's stats get boosted due to a samba beat.",
            power: '0'
        },
        stats: {
            hp: '199',
            str: '97',
            spr: '101',
            def: '77',
            spd: '107'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Ramens',
        evolutionIndexes: [72]
    },
    {
        name: 'Steppa',
        yokaiNumber: '165',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/steppa.png',
        description:
            "Steppa is one of Wiglin's rivals. He believes that kombu is the best kind of seaweed...if there is such a thing.",
        locations: [
            "Shopper's Row - Shopping Street Narrows",
            "Shopper's Row - Rivers",
            "Shopper's Row - Shopping Street Narrows - Garbages & Dumps",
            'San Fantastico - Seaside Cave',
            'San Fantastico - Hidden Workshop',
            'Gera Gera Land'
        ],
        skill: {
            name: 'Wavy Body',
            description: "Dodges attacks likeyou wouldn't believe!"
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Mambo Madness',
            description: 'Dances a mambo to get his allies moving faster.',
            power: '0'
        },
        inspirit: {
            name: 'Kombu Energy',
            description: "Uses the power of seaweed to raise an ally's DEF.",
            power: '0'
        },
        stats: {
            hp: '185',
            str: '64',
            spr: '76',
            def: '83',
            spd: '78'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Rhyth',
        yokaiNumber: '166',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhyth.png',
        description:
            "The one female of the seaweed trio. Wiglin and Steppa both really like her, but she doesn't seem to notice.",
        locations: [
            "Shopper's Row - Rivers",
            'San Fantastico - Seaside Cave',
            'San Fantastico - Hidden Workshop',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb'
        ],
        skill: {
            name: 'Wavy Body',
            description: "Dodges attacks likeyou wouldn't believe!"
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Seaweed Samba',
            description:
                'Dances a samba that gradually restores HP of her allies.',
            power: '0'
        },
        inspirit: {
            name: 'Slippery Mekabu',
            description:
                "The Inspirited Yo-kai's SPD increases thanks to a gooey additive.",
            power: '0'
        },
        stats: {
            hp: '172',
            str: '62',
            spr: '96',
            def: '70',
            spd: '110'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Hungramps',
        yokaiNumber: '167',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hungramps.png',
        description:
            "A Yo-kai who is always hungry and can make others' tummies rumble. ...That's really about the only thing he can do. ",
        locations: [
            'Downtown Springdale - Brushwoods & Flowers',
            'Downtown Springdale - Rivers & Sea',
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            'Story recruit.'
        ],
        skill: {
            name: 'Starver',
            description: 'Increases the effect offood on allies.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Hungry Impact',
            description:
                'Restores HP for allies with a wealth of heavenly rice balls.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Starve',
            description: 'Makes a foe hungry and decreases its STR.',
            power: '0'
        },
        stats: {
            hp: '193',
            str: '53',
            spr: '83',
            def: '67',
            spd: '89'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [74]
    },
    {
        name: 'Hungorge',
        yokaiNumber: '168',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hungorge.png',
        description:
            "A terribly gluttonous Yo-kai that'll eat anything in front of him. His mouth is like a black hole\u2014even rice can't escape it.",
        locations: ['Fusion.'],
        skill: {
            name: 'Starver',
            description: 'Increases the effect offood on allies.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gleeful Gluttony',
            description:
                'Heals allies with rice balls summoned by the power of gluttony.',
            power: '90 to 198'
        },
        inspirit: {
            name: 'Starve',
            description:
                "Makes a foe's food unfilling and lowers its STR significantly.",
            power: '0'
        },
        stats: {
            hp: '239',
            str: '87',
            spr: '117',
            def: '85',
            spd: '99'
        },
        tribe: 'Heartful',
        element: 'Drain',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [74]
    },
    {
        name: 'Grainpa',
        yokaiNumber: '169',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grainpa.png',
        description:
            "A rare Hungramps with a body made of rice. He's so kind, he'll let a hungry person eat part of his body if necessary. ",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Terror Time - Crank-a-kai - Stone Oni Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Stone Orb'
        ],
        skill: {
            name: 'Blessed Body',
            description: 'When defeated, Yo-kaiin the front recover HP.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Fresh Impact',
            description:
                'Restores HP for allies with a wealth of fresh rice balls.',
            power: '150'
        },
        inspirit: {
            name: "Rice's Kindness",
            description:
                "Gradually restores an ally's HP with delicious, delectable rice!",
            power: '0'
        },
        stats: {
            hp: '230',
            str: '115',
            spr: '99',
            def: '82',
            spd: '100'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Tongus',
        yokaiNumber: '170',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tongus.png',
        description:
            'Her healing tongue can cure any wound and even serve to strengthen the bonds between people!',
        locations: [
            'Yo-kai World - Liar Mountain',
            'Sawayama-jo - Area 2 - Under porches',
            'Story recruit.'
        ],
        skill: {
            name: 'Lick It Clean',
            description: 'Yo-kai gets purifiedwhen healing allies.'
        },
        attack: {
            name: 'Slurp',
            power: '50 to 110'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Lick of Love',
            description:
                'All allies are licked from head to toe, and their HP is restored.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Lick Your Wounds',
            description:
                'The Inspirited Yo-kai gets its injuries licked and slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '194',
            str: '39',
            spr: '102',
            def: '42',
            spd: '98'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [68]
    },
    {
        name: 'Nurse Tongus',
        yokaiNumber: '171',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nurse_tongus.png',
        description:
            'A hugely popular nurse with a long waiting list of patients who want their wounds licked better.',
        locations: ['Fusion.'],
        skill: {
            name: 'Lick It Clean',
            description: 'Yo-kai gets purifiedwhen healing allies.'
        },
        attack: {
            name: 'Slurp',
            power: '50 to 110'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Lick of Life',
            description:
                'All allies are licked from head to toe, and their HP is restored.',
            power: '120'
        },
        inspirit: {
            name: 'Lick Your Wounds',
            description:
                'The Inspirited Yo-kai gets its injuries licked and slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '229',
            str: '67',
            spr: '119',
            def: '73',
            spd: '111'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [68]
    },
    {
        name: 'Sandmeh',
        yokaiNumber: '172',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sandmeh.png',
        description:
            'A simple, serene Yo-kai whose calming aura is so effective, he can get even Roughraff to chill out.',
        locations: [
            'Mt. Wildwood - Bamboo Groves',
            'Mt. Wildwood - Brushwoods',
            'Mt. Wildwood - Abandoned Tunnel West & East & Jumbo Slider - Brushwoods',
            'Old Springdale - Mt.Wildwood Shrine - Brushwoods',
            'Fleshy Souls Way - Entrance'
        ],
        skill: {
            name: 'Sand Still',
            description: 'Will never Loaf.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Sandslide',
            description: 'A ton of loose sand is dumped on the enemy.',
            power: '80'
        },
        inspirit: {
            name: 'A-meh-zing',
            description:
                'The Inspirited Yo-kai is so docile, it cannot be targeted.',
            power: '0'
        },
        stats: {
            hp: '175',
            str: '92',
            spr: '62',
            def: '63',
            spd: '84'
        },
        tribe: 'Heartful',
        element: 'Earth',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Odens',
        evolutionIndexes: [77]
    },
    {
        name: 'Mister Sandmeh',
        yokaiNumber: '173',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mr._sandmeh.png',
        description:
            "His responsible attitude and respectable-salary- man's air of humility are so intense that others can't help but notice.",
        locations: ['Fusion.'],
        skill: {
            name: 'Sand Still',
            description: 'Will never Loaf.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sand Stormal',
            description:
                'All foes are struck by the force of a steady lifestyle.',
            power: '130'
        },
        inspirit: {
            name: 'A-meh-zing',
            description:
                'The Inspirited Yo-kai is so docile, it cannot be targeted.',
            power: '0'
        },
        stats: {
            hp: '231',
            str: '105',
            spr: '97',
            def: '87',
            spd: '97'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Odens',
        evolutionIndexes: [77]
    },
    {
        name: 'Pallysol',
        yokaiNumber: '174',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pallysol.png',
        description:
            'The sprightly spirit of a well-loved parasol. Just  thinking about his old owner makes him jump up and down with joy.',
        locations: [
            'Old Springdale - Well Road',
            'Sawayama-jo - Area 2',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Story recruit.'
        ],
        skill: {
            name: 'Sun Shield',
            description: 'Returns all attackswhen guarding.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Umbrella Gust',
            description:
                'Strikes all enemies with a dry gust of wind from a traditional Yo-kai.',
            power: '90'
        },
        inspirit: {
            name: 'Undercover',
            description:
                'The Inspirited Yo-kai is defended by a keen umbrella. DEF goes up.',
            power: '0'
        },
        stats: {
            hp: '183',
            str: '66',
            spr: '78',
            def: '85',
            spd: '74'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Odens',
        evolutionIndexes: [49, 71]
    },
    {
        name: 'Scarasol',
        yokaiNumber: '175',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/scarasol.png',
        description:
            'He uses a Pallysol as a weapon, blocking attacks by opening him and then striking by jabbing him at opponents.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Cheerful Coin',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Sun Shield',
            description: 'Returns all attackswhen guarding.'
        },
        attack: {
            name: 'Ventilator',
            power: '50 to 110'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Umbrellicade',
            description:
                'Opens his parasol to boost his DEF and draw enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Deep Cover',
            description:
                'The Inspirited Yo-kai is protected by an umbrella. DEF goes up.',
            power: '0'
        },
        stats: {
            hp: '253',
            str: '117',
            spr: '90',
            def: '114',
            spd: '76'
        },
        tribe: 'Heartful',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Sushis',
        evolutionIndexes: [49]
    },
    {
        name: 'Lodo',
        yokaiNumber: '176',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lodo.png',
        description:
            "You know when you keep losing change or keep getting the wrong change back? Lodo's fault.",
        locations: [
            'Harrisville - Cicada Canyon',
            'Harrisville - Rice Paddy Path',
            'Gold-Gleaming Hwy. - Inner Lane',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Blasters - Crank-a-kai - Brown mission - Red Orb'
        ],
        skill: {
            name: 'Stealing',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Kick',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'I Want It All!',
            description:
                'Sucks in everything without thinking. Gives enemy HP to allies.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Poverty',
            description:
                "Makes a foe drop cash uncontrollably until it's poor.",
            power: '0'
        },
        stats: {
            hp: '214',
            str: '69',
            spr: '82',
            def: '78',
            spd: '85'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Milks',
        evolutionIndexes: [80]
    },
    {
        name: 'Supoor Hero',
        yokaiNumber: '177',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/supoor_hero.png',
        description:
            'Fights for the poor. Unfortunately, the fact that he can rarely afford bus fare sorely limits the reach of his efforts.',
        locations: [
            'Gold-Gleaming Hwy. - Entrance',
            'Evolve Lodo at Level 28.'
        ],
        skill: {
            name: 'Acrobat',
            description: 'Counterattacks rightafter dodging enemy.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Empty Pockets',
            description: 'Tosses all his coins at the enemy with great force.',
            power: '36x5'
        },
        inspirit: {
            name: 'Big Spender',
            description:
                'The Inspirited Yo-kai frivolously scatters money around.',
            power: '0'
        },
        stats: {
            hp: '228',
            str: '104',
            spr: '117',
            def: '95',
            spd: '102'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [80]
    },
    {
        name: 'Chippa',
        yokaiNumber: '178',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chippa.png',
        description:
            'An eternal optimist that never worries about anything. Being Inspirited by him can be worse than you think.',
        locations: [
            'Harrisville - Under porches',
            'Harrisville - Under cars',
            'Sawayama-jo - Area 2 - Under Cars',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)'
        ],
        skill: {
            name: 'Optimism Power',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Carefree Hero',
            description:
                'Confuses his enemies with his strange pose and mysterious aura.',
            power: '90'
        },
        inspirit: {
            name: 'Optimism',
            description:
                'Turns an ally into an optimist and gradually restores HP.',
            power: '0'
        },
        stats: {
            hp: '227',
            str: '101',
            spr: '73',
            def: '67',
            spd: '98'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Milks'
    },
    {
        name: 'Gnomey',
        yokaiNumber: '179',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gnomey.png',
        description:
            'A playful Yo-kai who takes up residence in old houses and gives them a nice, homey atmosphere.',
        locations: [
            'Old Harrisville - Cicada Canyon',
            'Old Harrisville - Fullface Rock',
            'Old Harrisville - Brushwoods',
            'Old Harrisville - Gravestones & Under porches',
            'Old Harrisville - Station - Brushwoods & Under porches',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Kai Mystery Coin',
            'Story recruit.'
        ],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Innocent World',
            description:
                "The power of good, clean fun steadily restores allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Cheer Up',
            description:
                'The Inspirited Yo-kai cheers up and slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '193',
            str: '57',
            spr: '96',
            def: '88',
            spd: '84'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Snacks',
        evolutionIndexes: [81, 82]
    },
    {
        name: 'High Gnomey',
        yokaiNumber: '180',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/high_gnomey.png',
        description:
            "It's said that if you get hold of a single hair from this deity Yo-kai's head, you'll enjoy an eternity of good fortune.",
        locations: [
            'Gold-Gleaming Hwy. - Interchange',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Evolve Gnomey at Level 28.'
        ],
        skill: {
            name: 'Golden Touch',
            description: 'Win more money afterbattles.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Joyful Jig',
            description:
                "The healing power of dance steadily restores allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Cheer Up',
            description:
                'The Inspirited Yo-kai is engulfed in joy and regains HP.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '77',
            spr: '126',
            def: '89',
            spd: '115'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Snacks',
        evolutionIndexes: [81]
    },
    {
        name: 'Enerfly',
        yokaiNumber: '181',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/enerfly.png',
        description:
            'A butterfly Yo-kai who brings those he Inspirits to their peak condition. Often mistaken for Enefly.',
        locations: [
            'Mt. Wildwood - Trees',
            'Mt. Wildwood - Abandoned Tunnel',
            'Old Springdale - Mt.Wildwood Shrine - Trees'
        ],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Energy Heaven',
            description:
                'Creates an energizing breeze that restores HP for allies.',
            power: '60 to 157'
        },
        inspirit: {
            name: 'Energize',
            description: 'Makes an ally feel energized and boosts its stats.',
            power: '0'
        },
        stats: {
            hp: '174',
            str: '90',
            spr: '83',
            def: '69',
            spd: '94'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Enefly',
        yokaiNumber: '182',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/enefly.png',
        description:
            'A butterfly Yo-kai who makes those he Inspirits cut ties with their best friends. Often mistaken  for Enerfly.',
        locations: [
            'Harrisville - Trees',
            'Harrisville - Rice Paddy Path, Cicada Canyon & Fullface Rock - Trees',
            'Harrisville - Mt. Middleton',
            'Harrisville - Station Plaza - Trees',
            'Old Harrisville - Trees',
            'Old Harrisville - Rice Paddy, Fullface Rock & Cicada Canyon - Trees',
            'Old Harrisville - Station - Trees'
        ],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Enemy Aura',
            description:
                'Uses his evil spirit to undo all good effects on enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Enemy Maker',
            description:
                'Makes a foe cut ties with its friends and attack them!',
            power: '0'
        },
        stats: {
            hp: '199',
            str: '65',
            spr: '97',
            def: '67',
            spd: '84'
        },
        tribe: 'Heartful',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Betterfly',
        yokaiNumber: '183',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/betterfly.png',
        description:
            "People will fulfill their potential in ways they've never imagined with Betterfly. Everyone wants this Yo-kai!",
        locations: ['Fusion.'],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bestacular',
            description:
                'Restores HP for allies and gets them into tip- top shape.',
            power: '110 to 165'
        },
        inspirit: {
            name: 'Feeling Fine',
            description:
                'Puts an ally into top shape and raises all of its stats.',
            power: '0'
        },
        stats: {
            hp: '236',
            str: '90',
            spr: '123',
            def: '76',
            spd: '113'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Peppillon',
        yokaiNumber: '184',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/peppillon.png',
        description:
            'A butterfly Yo-kai with otherworldly wings. Breathing in her scales  will boost your level of excitement to its max.',
        locations: ['Harrisville - Mt. Middleton'],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Party Miracle',
            description:
                "Blows a gust that restores HP and raises allies' spirits!",
            power: '180'
        },
        inspirit: {
            name: 'Life Is Good',
            description: 'Takes an ally to paradise and steadily restores HP.',
            power: '0'
        },
        stats: {
            hp: '250',
            str: '96',
            spr: '135',
            def: '94',
            spd: '122'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Juices'
    },
    {
        name: 'Predictabull',
        yokaiNumber: '185',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/predictabull.png',
        description:
            'Half-man, half-bull, all- trainee fortune-teller. His powers so far are limited to weather forecasting.',
        locations: [
            'Old Harrisville - Cicada Canyon',
            'Old Harrisville - Fullface Rock',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)'
        ],
        skill: {
            name: 'Clairvoidance',
            description: 'Improves ability tododge enemy attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Soothing Fortune',
            description: "Good fortune causes all allies' HP to recover.",
            power: '70 to 183'
        },
        inspirit: {
            name: 'Raging Bull',
            description:
                'The Inspirited Yo-kai gets a STR boost and charges like a bull.',
            power: '0'
        },
        stats: {
            hp: '191',
            str: '82',
            spr: '85',
            def: '63',
            spd: '90'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Sushis',
        evolutionIndexes: [84, 85]
    },
    {
        name: 'Smashibull',
        yokaiNumber: '186',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/smashibull.png',
        description:
            "He's completed his training as a fortune- teller and now knows exactly what's going to happen next.",
        locations: ['Fusion.'],
        skill: {
            name: 'Clairvoidance',
            description: 'Improves ability tododge enemy attacks.'
        },
        attack: {
            name: 'Bone Crusher',
            power: '100 to 150'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bull Rush',
            description:
                'Slams a single enemy to the ground with the force of a raging bull.',
            power: '180 to 270'
        },
        inspirit: {
            name: 'Raging Bull',
            description:
                'The Inspirited Yo-kai gets a STR boost and charges like a bull.',
            power: '0'
        },
        stats: {
            hp: '262',
            str: '129',
            spr: '112',
            def: '95',
            spd: '100'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Sushis',
        evolutionIndexes: [84]
    },
    {
        name: 'Don Chan',
        yokaiNumber: '187',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/don_chan.png',
        description:
            'The spirit of a well-used Japanese drum. His big ambition is to bring his unique rhythms to the world.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Mon Mystery Coin',
            'Quest - Inspirited Away'
        ],
        skill: {
            name: 'Feel the Beat',
            description: 'Boosts all stats.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: "Rockin' Rockets",
            description:
                'The sound of drums summons fireworks to rain upon all foes.',
            power: '100 to 220'
        },
        inspirit: {
            name: 'Battle Beat',
            description:
                'The Inspirited Yo-kai gets a big STR boost from taiko drumming.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '51',
            spr: '118',
            def: '99',
            spd: '103'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Snacks'
    },
    {
        name: "Ray O'Light",
        yokaiNumber: '188',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ray_o_light.png',
        description:
            "A sunny fellow who brings fine weather wherever he goes. He's been trying to brighten up Drizzelda's view on life.",
        locations: [
            'Harrisville - Brushwoods',
            'Harrisville - Gravestones',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)'
        ],
        skill: {
            name: 'Sunburn',
            description: 'All Yo-kai receive moreFire damage.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Solar Flare',
            description: 'Enemies are engulfed in a fiery conflagration.',
            power: '80 to 176'
        },
        inspirit: {
            name: 'Solar Power',
            description:
                'The Inspirited Yo-kai is feeling bright and gets a STR boost.',
            power: '0'
        },
        stats: {
            hp: '215',
            str: '105',
            spr: '93',
            def: '65',
            spd: '94'
        },
        tribe: 'Heartful',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Happierre',
        yokaiNumber: '189',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/happierre.png',
        description:
            'This heartwarming  Yo-kai removes the  tension in the air. He can cheer up even the angriest of people.',
        locations: [
            'Blossom Heights - Trees',
            'Excellent Tower - Trees',
            'Excellent Tower - Observation Deck',
            'Old Springdale - Trees',
            'Old Springdale - Telephone poles',
            'Divine Paradise - 1F',
            'Divine Paradise - 2F',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Air of Happiness',
            description:
                'Gradually recovers HP of allies with his blissful aura.',
            power: '0'
        },
        inspirit: {
            name: 'Cheerfulness',
            description:
                "Fills an ally's heart with cheer and steadily recovers HP.",
            power: '0'
        },
        stats: {
            hp: '213',
            str: '76',
            spr: '104',
            def: '74',
            spd: '94'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Breads',
        evolutionIndexes: [86]
    },
    {
        name: 'Reversa',
        yokaiNumber: '190',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reversa.png',
        description:
            "One moment he's happy, and the next, he's sad. He can be more difficult to deal with than Dismarelda sometimes.",
        locations: ['Fusion.'],
        skill: {
            name: 'Insecure',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Fun Field',
            description:
                'Steadily recovers HP of allies with her exciting aura.',
            power: '0'
        },
        inspirit: {
            name: 'Insecurity',
            description:
                'Makes an enemy so insecure that it takes it out on its allies.',
            power: '0'
        },
        stats: {
            hp: '235',
            str: '94',
            spr: '116',
            def: '91',
            spd: '103'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Breads',
        evolutionIndexes: [86]
    },
    {
        name: 'Reversette',
        yokaiNumber: '191',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reversette.png',
        description:
            'She resembles Reversa, but her reversed pattern is a rare sight. Her depression\u2014not so rare.',
        locations: [
            'Downtown Springdale - Under cars, Distributors, Garbages & Dumps',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin',
            'Blasters - Crank-a-kai - Brown mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb'
        ],
        skill: {
            name: 'Insecure',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Zany Zone',
            description:
                'Steadily recovers HP of allies with her exciting aura.',
            power: '0'
        },
        inspirit: {
            name: 'Insecurity',
            description:
                'Makes an enemy so insecure that it takes it out on its allies.',
            power: '0'
        },
        stats: {
            hp: '243',
            str: '117',
            spr: '107',
            def: '88',
            spd: '109'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Breads'
    },
    {
        name: "Ol' Saint Trick",
        yokaiNumber: '192',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__saint_trick.png',
        description:
            "Take a guess and get one of three presents: bad, good, or average. He'll leave if you ask for all three, though...",
        locations: [
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'Excellent Tower - Trees',
            'Excellent Tower - Observation Deck',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)'
        ],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Pick-a-Present',
            description:
                'Pulls something out of a bag... What comes out is up to chance!',
            power: '0'
        },
        inspirit: {
            name: 'So Generous',
            description: 'Makes a Yo-kai scatter money everywhere.',
            power: '0'
        },
        stats: {
            hp: '229',
            str: '81',
            spr: '114',
            def: '80',
            spd: '110'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Curries'
    },
    {
        name: "Ol' Fortune",
        yokaiNumber: '193',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__fortune.png',
        description:
            "Another old man with bags full of gifts. Unlike Ol' Saint Trick, all of his presents are good!",
        locations: [
            'Harrisville - Mt. Middleton',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)'
        ],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Get-a-Present',
            description:
                'Opens a bag full of presents that restore HP of allies.',
            power: '130'
        },
        inspirit: {
            name: 'So Generous',
            description: 'Makes a Yo-kai scatter money everywhere.',
            power: '0'
        },
        stats: {
            hp: '220',
            str: '112',
            spr: '94',
            def: '86',
            spd: '91'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Curries'
    },
    {
        name: 'Rollen',
        yokaiNumber: '194',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rollen.png',
        description:
            'Everything he does is decided by a roll of his dice eyes. Their outcome changes his personality! ',
        locations: [
            'Breezy Hills - Under cars & Garbages',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)'
        ],
        skill: {
            name: 'Gambler',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'Earthsplitter',
            power: '95 to 142'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Roll of Fate',
            description:
                'Rolls his eyes and attacks based on the result of the dice roll.',
            power: '0'
        },
        inspirit: {
            name: "Luck's Smile",
            description: 'Gradually heals an ally with divine protection.',
            power: '0'
        },
        stats: {
            hp: '226',
            str: '90',
            spr: '106',
            def: '97',
            spd: '92'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Candies'
    },
    {
        name: 'Dubbles',
        yokaiNumber: '195',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dubbles.png',
        description:
            "Dubbles will Inspirit you and point you toward an unknown fate. Even he doesn't know if it'll be a good or bad one.",
        locations: [
            "Shopper's Row - Brushwoods & flowers",
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Gambler',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'Earthsplitter',
            power: '95 to 142'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Hit It Big!',
            description:
                "Attacks with the kind of damage you'd expect from rolling doubles.",
            power: '140 to 210'
        },
        inspirit: {
            name: 'Lucky Streak',
            description: 'Steadily heals an ally with divine protection.',
            power: '0'
        },
        stats: {
            hp: '222',
            str: '119',
            spr: '108',
            def: '130',
            spd: '97'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Candies'
    },
    {
        name: 'Papa Bolt',
        yokaiNumber: '196',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/papa_bolt.png',
        description:
            "No matter how lazy you are, you'll work fast when Papa Bolt's watching. His anger is SCAAAAARY!",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel',
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Strict',
            description: 'All allies will Loafaround less.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: "A Father's Scorn",
            description:
                'Zaps foes with the lightning of fatherly discontent. Yikes!',
            power: '125 to 187'
        },
        inspirit: {
            name: "Dad's Support",
            description: "Papa's encouragement will raise an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '242',
            str: '105',
            spr: '90',
            def: '95',
            spd: '113'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Uncle Infinite',
        yokaiNumber: '197',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/uncle_infinite.png',
        description:
            "Even Papa Bolt is scared of Uncle Infinite's power. He can throw a table an entire mile!",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel',
            'Infinite Tunnel',
            'Randomly appears the night when it rains at Mt.Wildwood Summit when using the pair of binoculars. ',
            'Randomly appears the night when it rains at Mt.Wildwood Summit when using the pair of binoculars. '
        ],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Table Flip',
            description:
                'Flips a table onto foes. High chance to cancel Soultimate Moves.',
            power: '250'
        },
        inspirit: {
            name: "Uncle's Shout",
            description:
                "Uncle's words will significantly raise an ally's STR. ",
            power: '0'
        },
        stats: {
            hp: '275',
            str: '122',
            spr: '102',
            def: '103',
            spd: '116'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Mama Aura',
        yokaiNumber: '198',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mama_aura.png',
        description:
            'Sometimes strict and sometimes nice, she embraces Yo-kai with her warm aura. No Yo-kai can defy her.',
        locations: ['Excellent Tower - Observation Deck', 'Infinite Tunnel'],
        skill: {
            name: 'Prayer',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: "A Mother's Love",
            description:
                'Steadily recovers HP for allies with her motherly warmth.',
            power: '0'
        },
        inspirit: {
            name: "Mama's Warmth",
            description:
                "Gradually restores an ally's HP by wrapping it in Mama's warmth.",
            power: '0'
        },
        stats: {
            hp: '224',
            str: '78',
            spr: '118',
            def: '92',
            spd: '125'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Auntie Heart',
        yokaiNumber: '199',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/auntie_heart.png',
        description:
            "Regardless of how bad a Yo-kai is, Auntie Heart's healing hug will make it pure again. That is some true kindness!",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Green Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Prayer',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Loving Auntie',
            description:
                'Revives and heals her allies with all the love of a favorite aunt.',
            power: '0'
        },
        inspirit: {
            name: "Auntie's Love",
            description:
                "Envelops an ally in Auntie's kindness, which raises DEF.",
            power: '0'
        },
        stats: {
            hp: '258',
            str: '102',
            spr: '134',
            def: '85',
            spd: '126'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Kyryn',
        yokaiNumber: '200',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kyryn.png',
        description:
            'A sacred being who protects all living things. His divine cry tops the Yo-kai download chart.',
        locations: [
            'Divine Paradise - 3F',
            'Divine Paradise - 4F',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Second Wind',
            description: 'Restores a chunk of HPto allies in need.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: "Kyryn's Kry",
            description:
                "A holy howl is sent to heaven, fully restoring allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Rest Aura',
            description:
                "The Inspirited Yo-kai regains HP thanks to a sacred beast's aura.",
            power: '0'
        },
        stats: {
            hp: '238',
            str: '106',
            spr: '132',
            def: '92',
            spd: '127'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Unikirin',
        yokaiNumber: '201',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/unikirin.png',
        description:
            'A legendary creature with a horn that countless figures throughout history have tried to steal.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Green Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Kai Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Second Wind',
            description: 'Restores a chunk of HPto allies in need.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Horn of Plenty',
            description:
                "A holy horn is blown toward heaven, fully restoring allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Healing Horn',
            description:
                'The Inspirited Yo-kai regains HP, courtesy of a healing horn.',
            power: '0'
        },
        stats: {
            hp: '250',
            str: '131',
            spr: '115',
            def: '84',
            spd: '123'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Leadoni',
        yokaiNumber: '202',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/leadoni.png',
        description:
            "A Yo-kai that beckons to people with a huge hand and gets them confused. It's his fault when a child gets lost!",
        locations: [
            'Mt. Wildwood Trail',
            'Mt. Wildwood - Jumbo Slider',
            'Bony Spirits Way - Exit'
        ],
        skill: {
            name: 'Windshield',
            description: 'Takes less damagefrom Wind attacks.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: "C'mon, This Way!",
            description:
                'Draws enemy attacks to himself while increasing his DEF.',
            power: '0'
        },
        inspirit: {
            name: 'Guide',
            description:
                'Makes one Yo-kai bring all incoming attacks onto itself.',
            power: '0'
        },
        stats: {
            hp: '178',
            str: '93',
            spr: '53',
            def: '68',
            spd: '87'
        },
        tribe: 'Shady',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Candies'
    },
    {
        name: 'Mynimo',
        yokaiNumber: '203',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mynimo.png',
        description:
            "People Inspirited by Mynimo get much better treatment than those around them. Hey! That's not fair!",
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Uptown Springdale - Elementary School 2F',
            'Uptown Springdale - Elementary School 1F',
            'Uptown Springdale - Under cars, Distributors & Garbages',
            'Mt. Wildwood - Bamboo Groves',
            'Mt. Wildwood - Brushwoods',
            'Old Springdale - Mt.Wildwood Shrine - Brushwoods',
            'Gera Gera Land',
            'Sawayama-jo - Area 2 - Under Cars',
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle',
            'Infinite Inferno - 3rd Circle',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Windshield',
            description: 'Takes less damagefrom Wind attacks.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Just for You',
            description:
                'Raises the DEF of all allies. Affects all enemy attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Bias',
            description:
                "The Inspirited ally won't be targeted. Very special treatment.",
            power: '0'
        },
        stats: {
            hp: '201',
            str: '95',
            spr: '72',
            def: '88',
            spd: '85'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Candies'
    },
    {
        name: 'Ake',
        yokaiNumber: '204',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ake.png',
        description:
            "A bratty Yo-kai who's always kicking people's shoulders. The kicks just make your shoulders stiff.",
        locations: [
            'Blossom Heights - Tucked Away Lot',
            'Blossom Heights - Secret Byway',
            'Blossom Heights - Old Mansion House',
            'Blossom Heights - Brushwoods & Flowers',
            'Blossom Heights - Tucked Away Lot, Secret Byway & Hidden Side Street - Garbages & Dumps',
            'Breezy Hills - Brushwoods & flowers',
            'Mystery Way - Route 6',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Kick',
            power: '15 to 67'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Shoulder Crunch',
            description:
                "Jumps up to hurt an enemy's shoulders but will hurt himself too...",
            power: '135'
        },
        inspirit: {
            name: 'Shoulder Pain',
            description:
                'Gives a foe an aching shoulder, which will steadily decrease HP.',
            power: '0'
        },
        stats: {
            hp: '166',
            str: '78',
            spr: '71',
            def: '73',
            spd: '93'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Candies',
        evolutionIndexes: [87]
    },
    {
        name: 'Payn',
        yokaiNumber: '205',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/payn.png',
        description:
            'Payn will show your shoulders the meaning of pain using his massive strength. Payn is really into working out.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Fusion.'
        ],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Shoulder Lock',
            description:
                "Jumps up to hurt an enemy's shoulders but will hurt himself too...",
            power: '145 to 217'
        },
        inspirit: {
            name: 'Shoulder Pain',
            description:
                'Gives a foe an aching shoulder, which will steadily decrease HP.',
            power: '0'
        },
        stats: {
            hp: '223',
            str: '119',
            spr: '74',
            def: '83',
            spd: '78'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Candies',
        evolutionIndexes: [87]
    },
    {
        name: 'Agon',
        yokaiNumber: '206',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/agon.png',
        description:
            "A horrible Yo-kai that gives people a slipped disk in their backs! You're more susceptible the older you are.",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel East',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin',
            'Blasters - Crank-a-kai - Normal mission - Gold Orb'
        ],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Backache Buster',
            description: "Bashes a foe's hips. May cancel Soultimate Moves.",
            power: '180'
        },
        inspirit: {
            name: 'Back Pain',
            description:
                "Messes up a foe's back and makes it completely immobile.",
            power: '0'
        },
        stats: {
            hp: '251',
            str: '126',
            spr: '79',
            def: '93',
            spd: '66'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Candies'
    },
    {
        name: 'Wydeawake',
        yokaiNumber: '207',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wydeawake.png',
        description:
            "This nighttime nuisance loves staying up late. Have a friend who won't go to bed? It's probably this Yo-kai's fault.",
        locations: ['Downtown Springdale - Behind Frostia\u2019s place'],
        skill: {
            name: 'Night Life',
            description: 'All statuses receiveboosts at night.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Worn Out',
            description: 'Too many late nights greatly weakens enemy defenses.',
            power: '0'
        },
        inspirit: {
            name: 'Restless Night',
            description:
                "The Inspirited Yo-kai can't stop staying up late. DEF goes down.",
            power: '0'
        },
        stats: {
            hp: '220',
            str: '37',
            spr: '89',
            def: '43',
            spd: '98'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [88]
    },
    {
        name: 'Allnyta',
        yokaiNumber: '208',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/allnyta.png',
        description:
            "The bags under his eyes from playing video games all night are enough to make anyone worry for this Yo-kai's health.",
        locations: ['Fusion.'],
        skill: {
            name: 'Night Life',
            description: 'All statuses receiveboosts at night.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Tuckered Out',
            description:
                'Too many late nights massively weakens enemy defenses.',
            power: '0'
        },
        inspirit: {
            name: 'Sleepless Night',
            description:
                'The Inspirited Yo-kai stays up all night. DEF goes way down.',
            power: '0'
        },
        stats: {
            hp: '260',
            str: '51',
            spr: '126',
            def: '60',
            spd: '123'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [88]
    },
    {
        name: 'Herbiboy',
        yokaiNumber: '209',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/herbiboy.png',
        description:
            'A weakling with no real ambitions to speak of. Anyone Inspirited by him is bound to lose their spark.',
        locations: ['Downtown Springdale - Behind Frostia\u2019s place'],
        skill: {
            name: 'Herbivaura',
            description: 'All Yo-kai find it harderto attack.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Sap',
            description:
                "A faintly wimpy aura greatly weakens the enemy's attack.",
            power: '0'
        },
        inspirit: {
            name: 'Wilt',
            description:
                'The Inspirited Yo-kai becomes a delicate flower. STR goes down.',
            power: '0'
        },
        stats: {
            hp: '182',
            str: '82',
            spr: '81',
            def: '56',
            spd: '85'
        },
        tribe: 'Shady',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [17]
    },
    {
        name: 'Carniboy',
        yokaiNumber: '210',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/carniboy.png',
        description:
            'A red-blooded Yo-kai who uses a gorgeous tan, luscious golden locks, and robust supply of one- liners to wow the ladies.',
        locations: ['Fusion.'],
        skill: {
            name: 'Carnivaura',
            description: 'All Yo-kai find it easierto attack.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Proteam',
            description:
                "An aura of vim and vigor boosts allies' attacking prowess.",
            power: '0'
        },
        inspirit: {
            name: 'Beef Up',
            description:
                'The Inspirited Yo-kai greedily eats meat. STR is strongly boosted.',
            power: '0'
        },
        stats: {
            hp: '215',
            str: '122',
            spr: '91',
            def: '98',
            spd: '95'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Meats',
        evolutionIndexes: [17]
    },
    {
        name: 'Negatibuzz',
        yokaiNumber: '211',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/negatibuzz.png',
        description:
            'A Yo-kai that nurtures negativity and sucks it up with its needlelike nose.',
        locations: [
            'Uptown Springdale - Shady Back Alley',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)'
        ],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Negativity Germs',
            description: 'Spreads negativity germs that lower enemy DEF.',
            power: '20'
        },
        inspirit: {
            name: 'Negativize',
            description: 'Makes an enemy very pessimistic and lowers its SPD.',
            power: '0'
        },
        stats: {
            hp: '182',
            str: '86',
            spr: '76',
            def: '60',
            spd: '79'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [92]
    },
    {
        name: 'Moskevil',
        yokaiNumber: '212',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/moskevil.png',
        description:
            "This nasty Yo-kai can drop you into the depths of despair. You cannot cheer up if he's nearby. ",
        locations: ['Evolve Negatibuzz at Level 17.'],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Think Evil',
            description:
                'Sends evil sound waves at his enemies and lowers their DEF.',
            power: '80'
        },
        inspirit: {
            name: 'Negativize',
            description: 'Makes an enemy very pessimistic and lowers its SPD.',
            power: '0'
        },
        stats: {
            hp: '209',
            str: '92',
            spr: '90',
            def: '78',
            spd: '102'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Juices',
        evolutionIndexes: [92]
    },
    {
        name: 'Scritchy',
        yokaiNumber: '213',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/scritchy.png',
        description:
            'The mere presence of Scritchy will make your body itch. No amount of scratching can make it stop.',
        locations: [
            'Excellent Tower - Trees',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb'
        ],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Itchpocalypse',
            description: 'Makes enemies itchy and lowers their STR.',
            power: '120'
        },
        inspirit: {
            name: 'Itchy',
            description:
                'Makes an enemy itch constantly, which will decrease its HP.',
            power: '0'
        },
        stats: {
            hp: '265',
            str: '68',
            spr: '125',
            def: '91',
            spd: '117'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Juices'
    },
    {
        name: 'Dimmy',
        yokaiNumber: '214',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dimmy.png',
        description:
            'Being Inspirited by Dimmy will tone down your presence. Dimmy uses this for his job as a ninja.',
        locations: [
            'Breezy Hills - Under cars & Garbages',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Old Springdale - Gourd Pond - Brushwoods'
        ],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Stepping Slice',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Did You See Me?',
            description:
                "Deals a strong but dull slap. Can cancel a foe's Soultimate Move.",
            power: '100'
        },
        inspirit: {
            name: 'Fade Away',
            description: 'Makes a Yo-kai so plain that its foes ignore it.',
            power: '0'
        },
        stats: {
            hp: '185',
            str: '88',
            spr: '65',
            def: '48',
            spd: '98'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [93]
    },
    {
        name: 'Blandon',
        yokaiNumber: '215',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blandon.png',
        description:
            "Blandon's lack of presence makes him a really great spy, but he's sad that no one recognizes him for that.",
        locations: ['Evolve Dimmy at Level 24.'],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Ninja Star',
            power: '60 to 90'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Hazy Dance',
            description:
                'Deals a strong hit. May cancel enemy Soultimate Moves.',
            power: '180'
        },
        inspirit: {
            name: 'Fade Away',
            description: 'Makes a Yo-kai so plain that its foes ignore it.',
            power: '0'
        },
        stats: {
            hp: '225',
            str: '120',
            spr: '101',
            def: '61',
            spd: '124'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [93]
    },
    {
        name: 'Nul',
        yokaiNumber: '216',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/null.png',
        description:
            "You can't sense Nul even if you're really close to him. He's really good at entertaining himself.",
        locations: [
            'San Fantastico - Under cars',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Ninja Star',
            power: '60 to 90'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: "Creep 'n' Cut",
            description:
                'Hits from the shadows and may cancel enemy Soultimate Moves.',
            power: '200'
        },
        inspirit: {
            name: 'Absence',
            description:
                'Makes foes ignore an ally by reducing its presence to nothing.',
            power: '0'
        },
        stats: {
            hp: '238',
            str: '100',
            spr: '114',
            def: '84',
            spd: '116'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Suspicioni',
        yokaiNumber: '217',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/suspicioni.png',
        description:
            "An Oni who doubts everything. He hangs out with his fellow Oni but doesn't trust them at all.",
        locations: ['Downtown Springdale - Garbages & Dumps', 'Gera Gera Land'],
        skill: {
            name: 'Suspicion',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Suspicious Eyes',
            description:
                'Gives his enemies the evil eye and hinders their actions.',
            power: '0'
        },
        inspirit: {
            name: 'Distrust',
            description: 'Makes a foe distrust its allies and attack them.',
            power: '0'
        },
        stats: {
            hp: '188',
            str: '80',
            spr: '94',
            def: '78',
            spd: '85'
        },
        tribe: 'Shady',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Tantroni',
        yokaiNumber: '218',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tantroni.png',
        description:
            "This Yo-kai will throw a fit whenever he doesn't get his way... It's probably time to grow out of that.",
        locations: [
            'Harrisville - Cicada Canyon',
            'Harrisville - Fullface Rock',
            'Harrisville - Old House by The Station',
            'Harrisville - Rice Paddy Path',
            'Harrisville - Brushwoods',
            'Harrisville - Under cars',
            'Harrisville - Rice Paddy Path, Cicada Canyon & Fullface Rock - Brushwoods',
            'Harrisville - Station Plaza - Brushwoods, Garbages & Empty flats',
            'Harrisville - Station Plaza - Under cars',
            'Old Harrisville - Brushwoods',
            'Old Harrisville - Gravestones & Under porches',
            'Gera Gera Land',
            'Gold-Gleaming Hwy. - Inner Lane',
            'Infinite Inferno - 6th Circle',
            'Infinite Inferno - 7th Circle',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Suspicion',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Temper Tantrum',
            description:
                'Gives his enemies the evil eye and hinders their actions.',
            power: '0'
        },
        inspirit: {
            name: 'Bratty',
            description:
                'Makes a Yo-kai have a temper tantrum and attack its allies.',
            power: '0'
        },
        stats: {
            hp: '186',
            str: '102',
            spr: '59',
            def: '91',
            spd: '81'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Contrarioni',
        yokaiNumber: '219',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/contrarioni.png',
        description:
            'Get ready to say "no" a lot if Contrarioni Inspirits you. You\'ll disagree with anything people say. Always fun at parties.',
        locations: [
            'Yo-kai World - Hooligan Road',
            'Excellent Tower - Garbages',
            'Excellent Tower - Empty flats',
            'Excellent Tower - Under cars & Distributors',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Suspicion',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Contrary Gas',
            description:
                'Spreads gas that makes enemies contrarians, causing chaos.',
            power: '0'
        },
        inspirit: {
            name: 'Contrariness',
            description: 'Makes an enemy attack its allies...just because.',
            power: '0'
        },
        stats: {
            hp: '204',
            str: '86',
            spr: '97',
            def: '109',
            spd: '116'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Hidabat',
        yokaiNumber: '220',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hidabat.png',
        description:
            "Hidabat will make you a shut-in who fears going outside. He's better at Inspiriting modern city dwellers. ",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Yo-kai World - Hooligan Road',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Hidabat Harmony',
            description: 'Hinders enemies with a cursed lullaby.',
            power: '60'
        },
        inspirit: {
            name: 'Shut Away',
            description: "Takes away a foe's motivation.",
            power: '0'
        },
        stats: {
            hp: '193',
            str: '68',
            spr: '81',
            def: '92',
            spd: '82'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Meats',
        evolutionIndexes: [88]
    },
    {
        name: 'Abodabat',
        yokaiNumber: '221',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/abodabat.png',
        description:
            "After being inside the house for so long, Hidabat fused with it. Now he really can't ever leave!",
        locations: ['Fusion.'],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Abodaballad',
            description: 'Hinders enemies with a baleful ballad.',
            power: '120'
        },
        inspirit: {
            name: 'Shut Away',
            description: "Takes away a foe's motivation.",
            power: '0'
        },
        stats: {
            hp: '227',
            str: '99',
            spr: '105',
            def: '115',
            spd: '97'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Meats',
        evolutionIndexes: [95]
    },
    {
        name: 'Belfree',
        yokaiNumber: '222',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/belfree.png',
        description:
            "A rare Abodabat in  temporary housing. Once a year, if you're lucky, you can see him change  houses.",
        locations: [
            'Springdale Underground Waterway',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 3DS coin',
            'Mt.Wildwood - Crank-a-kai - Sum Mystery Coin',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin'
        ],
        skill: {
            name: 'Vampiric',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Belfree Blues',
            description: 'Hinders enemies with some bad-luck blues.',
            power: '150'
        },
        inspirit: {
            name: 'Shut Away',
            description: "Takes away a foe's motivation.",
            power: '0'
        },
        stats: {
            hp: '234',
            str: '101',
            spr: '98',
            def: '128',
            spd: '100'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Meats'
    },
    {
        name: 'Yoink',
        yokaiNumber: '223',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/yoink.png',
        description:
            "A Yo-kai who says he's borrowing people's stuff but actually just swallows it and never gives it back.",
        locations: [
            'Harrisville - Fullface Rock',
            'Harrisville - Old House by The Station',
            'Harrisville - Brushwoods',
            'Harrisville - Under porches',
            'Harrisville - Gravestones',
            'Harrisville - Rice Paddy Path, Cicada Canyon & Fullface Rock - Brushwoods',
            'Harrisville - Station Plaza - Brushwoods, Garbages & Empty flats',
            'Old Harrisville - Station - Paddy fields',
            'Gera Gera Land',
            'Mystery Way - Route 3',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Sticky Fingers',
            description: 'Steals an item whileattacking an enemy.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Energetic Gulp',
            description:
                'Yoink helps himself to enemy HP, sharing it among his allies.',
            power: '50'
        },
        inspirit: {
            name: 'Bad Influence',
            description:
                'The Inspirited Yo-kai wants to borrow things, so it attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '203',
            str: '93',
            spr: '61',
            def: '90',
            spd: '80'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Sushis',
        evolutionIndexes: [96]
    },
    {
        name: 'Gimme',
        yokaiNumber: '224',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gimme.png',
        description:
            "Why borrow people's stuff when you can just steal it? Stores his loot in the bag on his head.",
        locations: ['Evolve Yoink at Level 27.'],
        skill: {
            name: 'Sticky Fingers',
            description: 'Steals an item whileattacking an enemy.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Life Looter',
            description:
                "Enemy HP is skillfully pilfered and shared among Gimme's allies.",
            power: '130'
        },
        inspirit: {
            name: 'Shakedown',
            description:
                'The Inspirited Yo-kai gets shaken down and loses money.',
            power: '0'
        },
        stats: {
            hp: '220',
            str: '115',
            spr: '80',
            def: '103',
            spd: '116'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Sushis',
        evolutionIndexes: [96]
    },
    {
        name: "K'mon-K'mon",
        yokaiNumber: '225',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/k_mon-k_mon.png',
        description:
            "An impatient Yo-kai who's always antsy. You'll find him first in line whenever anything new is released.",
        locations: [
            'Blossom Heights - Bamboo groves',
            "Shopper's Row - Nocturne Hospital",
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Me First!',
            description: 'Gets one preemptiveattack.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Abrupt Punch',
            description:
                'An enemy is confused by an explosion of pent-up frustration.',
            power: '80'
        },
        inspirit: {
            name: 'Hate to Wait',
            description:
                "The Inspirited Yo-kai doesn't want to wait its turn and attacks allies.",
            power: '0'
        },
        stats: {
            hp: '204',
            str: '103',
            spr: '98',
            def: '88',
            spd: '78'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Curries'
    },
    {
        name: 'Yoodooit',
        yokaiNumber: '226',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/yoodooit.png',
        description:
            'A wise old man who never lifts a finger if he can help it and always gets others to do his dirty work.',
        locations: [
            'Blossom Heights - Old Mansion House',
            'Sawayama-jo - Area 1 - Trees',
            'Mystery Way - Route 1',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)'
        ],
        skill: {
            name: 'You First',
            description: 'Another Yo-kai willfight for this one.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Borrowed Health',
            description:
                'An evil staff is used to steal enemy HP and share it with allies.',
            power: '70'
        },
        inspirit: {
            name: 'Helpless',
            description: "The Inspirited Yo-kai can't do anything for itself.",
            power: '0'
        },
        stats: {
            hp: '210',
            str: '77',
            spr: '109',
            def: '96',
            spd: '76'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Count Zapaway',
        yokaiNumber: '227',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/count_zapaway.png',
        description:
            'A Yo-kai who whisks TV remotes away on dreamy, romantic dates and then leaves them in the very strangest of places.',
        locations: ['Uptown Springdale - Under cars, Distributors & Garbages'],
        skill: {
            name: 'Zap Away',
            description: 'Steals an item whileattacking an enemy.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Channel Changer',
            description:
                'An infrared signal damages the enemy and causes confusion.',
            power: '80'
        },
        inspirit: {
            name: 'Spirit Zapper',
            description: 'The Inspirited Yo-kai loses SPR to strange waves.',
            power: '0'
        },
        stats: {
            hp: '189',
            str: '105',
            spr: '65',
            def: '94',
            spd: '114'
        },
        tribe: 'Shady',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Tyrat',
        yokaiNumber: '228',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tyrat.png',
        description:
            "He's spent so much time hiding alone in his hole, he thinks the universe revolves around him.",
        locations: ['Mt.Wildwood - Crank-a-kai - Flower Excitement Coin'],
        skill: {
            name: 'Dirty Rat',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Me, Me, Me',
            description:
                "The sheer scale of Tyrat's selfishness confuses the enemy.",
            power: '0'
        },
        inspirit: {
            name: 'Rat Fink',
            description: 'The Inspirited Yo-kai selfishly attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '114',
            spr: '53',
            def: '85',
            spd: '105'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Milks'
    },
    {
        name: 'Tengloom',
        yokaiNumber: '229',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tengloom.png',
        description:
            "A gloomy tengu who's always reading. He's somehow amassed a Yo-kai fan base that likes his pessimism.",
        locations: [
            'Excellent Tower - Observation Deck',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)'
        ],
        skill: {
            name: 'Windshield',
            description: 'Takes less damagefrom Wind attacks.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gloomy Storm',
            description: 'Batters enemies with a powerful tornado.',
            power: '90 to 135'
        },
        inspirit: {
            name: 'Pessimism',
            description: 'Makes an enemy a pessimist and lowers its SPD.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '70',
            spr: '106',
            def: '81',
            spd: '100'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads',
        evolutionIndexes: [95]
    },
    {
        name: 'Nird',
        yokaiNumber: '230',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nird.png',
        description:
            'This Yo-kai became a bookworm upon arrival in the human world. Noisiness will be severely punished! Shhhh!',
        locations: [
            "Shopper's Row - Nocturne Hospital",
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)'
        ],
        skill: {
            name: 'Death Sphere',
            description: 'All healing Techniqueswill be weaker.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Demonic Storm',
            description:
                'Buffets enemies with vicious winds from the underworld.',
            power: '100 to 150'
        },
        inspirit: {
            name: 'Stygian Curse',
            description: "Drops a foe's SPR significantly with a dark power.",
            power: '0'
        },
        stats: {
            hp: '240',
            str: '66',
            spr: '124',
            def: '78',
            spd: '100'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Breads'
    },
    {
        name: 'Snobetty',
        yokaiNumber: '231',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snobetty.png',
        description:
            'This stuck-up, high-and- mighty Yo-kai married into money and loves to boss around those she sees as "commoners."',
        locations: [
            "Shopper's Row - Nocturne Hospital",
            'Breezy Hills - Brushwoods & flowers',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Blasters - Crank-a-kai - Brown mission - Gold Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Know Your Place',
            description: 'Transfers a defeat to anally and restores HP.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'How Dare You!',
            description:
                'Slaps an enemy for no good reason, stopping it from moving.',
            power: '20x5'
        },
        inspirit: {
            name: 'Prima Donna',
            description:
                'The Inspirited Yo-kai becomes irrational and attacks allies.',
            power: '0'
        },
        stats: {
            hp: '222',
            str: '80',
            spr: '118',
            def: '93',
            spd: '102'
        },
        tribe: 'Shady',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Slimamander',
        yokaiNumber: '232',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slimamander.png',
        description:
            'Slimamander hides his eye in one of his three mouths so that enemies have a hard time targeting that sensitive spot.',
        locations: ['Quest - Seal No Evil'],
        skill: {
            name: 'Triple-Header',
            description: "This Yo-kai's Skills willtarget all enemy Yo-kai."
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Triple Trouble',
            description: 'Slams all enemies using his three powerful heads.',
            power: '25x6'
        },
        inspirit: {
            name: 'Burn',
            description:
                'The Inspirited Yo-kai is burnt by flames and loses HP.',
            power: '0'
        },
        stats: {
            hp: '222',
            str: '127',
            spr: '96',
            def: '84',
            spd: '92'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Odens'
    },
    {
        name: 'Dracunyan',
        yokaiNumber: '233',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dracunyan.png',
        description:
            "Jibanyan has taken the form of a vampire, but his victims really don't need to worry\u2014they'll feel a bit dizzy at worst.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Wind Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Moon Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Flower Excitement Coin'
        ],
        skill: {
            name: 'Bloodsucker',
            description: 'Steals HP from adjacentYo-kai when attacking.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Big Bloodsucker',
            description:
                'Sucks the HP out of one enemy and shares it with his allies.',
            power: '150'
        },
        inspirit: {
            name: 'Dracufang',
            description:
                'The Inspirited Yo-kai gets chewed on, causing it to lose HP.',
            power: '0'
        },
        stats: {
            hp: '214',
            str: '127',
            spr: '89',
            def: '76',
            spd: '123'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Negasus',
        yokaiNumber: '234',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/negasus.png',
        description:
            "Negasus will make you  want to do things that'll get you in trouble. The more trouble the better!",
        locations: [
            'Divine Paradise - 1F',
            'Divine Paradise - 2F',
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Bird Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Wind Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Moon Excitement Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Negasus Curse',
            description: 'Creates an evil aura that lowers STR of all enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Negasus Waves',
            description:
                'Makes enemies give in to the urge to hit their own allies.',
            power: '0'
        },
        stats: {
            hp: '221',
            str: '73',
            spr: '127',
            def: '90',
            spd: '123'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Neighfarious',
        yokaiNumber: '235',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/neighfarious.png',
        description:
            'Shining mysteriously in the night sky, Neighfarious is a bit of an enigma. What kind of evil Yo-kai is he?',
        locations: ['Infinite Tunnel'],
        skill: {
            name: 'Cursed Skin',
            description: 'All stats will increasewhen Inspirited by foe.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Dark Horse',
            description: 'Creates an evil aura that lowers DEF of all enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Neighing Curse',
            description:
                "Significantly lowers all of an enemy's stats with an unknown evil.",
            power: '0'
        },
        stats: {
            hp: '234',
            str: '127',
            spr: '77',
            def: '123',
            spd: '90'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Timidevil',
        yokaiNumber: '236',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/timidevil.png',
        description:
            "A nervous devil who's too scared to even use his own powers. If he'd just relax, he could be unstoppable.",
        locations: ['Yo-kai World - Hooligan Road', 'Infinite Tunnel'],
        skill: {
            name: 'Too Afraid',
            description: 'Loafs around a lot.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Timid Boo',
            description:
                'Curses his foes with a spell that gradually decreases HP.',
            power: '110'
        },
        inspirit: {
            name: 'Scaredy-Cat',
            description:
                "Makes a foe a super scaredy-cat who's even afraid to fight.",
            power: '0'
        },
        stats: {
            hp: '210',
            str: '141',
            spr: '91',
            def: '100',
            spd: '139'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Ramens',
        evolutionIndexes: [122]
    },
    {
        name: 'Beelzebold',
        yokaiNumber: '237',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beelzebold.png',
        description:
            'Timidevil at full power! He still gets nervous every so often, though.',
        locations: ['Fusion.'],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Boldakazam',
            description:
                'Curses his foes with a spell that steadily decreases HP.',
            power: '140'
        },
        inspirit: {
            name: 'Scaredy-Cat',
            description:
                "Makes a foe a super scaredy-cat who's even afraid to fight.",
            power: '0'
        },
        stats: {
            hp: '234',
            str: '142',
            spr: '101',
            def: '109',
            spd: '117'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Ramens',
        evolutionIndexes: [122]
    },
    {
        name: 'Count Cavity',
        yokaiNumber: '238',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/count_cavity.png',
        description:
            'A terrifying Yo-kai who can dissolve your teeth. He loves the sound of kids crying over aching teeth. What a jerk.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Sum Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bacteria Barrage',
            description:
                'Steadily decreases enemy HP while giving them jet-black cavities.',
            power: '160'
        },
        inspirit: {
            name: 'Cavity',
            description:
                'Gives a foe a nasty cavity and gradually decreases HP.',
            power: '0'
        },
        stats: {
            hp: '258',
            str: '112',
            spr: '129',
            def: '80',
            spd: '124'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Eyesoar',
        yokaiNumber: '239',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyesoar.png',
        description:
            "One of his many eyes is connected to his heart. You'll have to find out which one if you want to beat him.",
        locations: [
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb',
            "Quest - Nyada's Trials"
        ],
        skill: {
            name: 'Eye See You',
            description: 'Never misses attacks.'
        },
        attack: {
            name: 'Meteor Punch',
            power: '20x3 to 30x3'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Centur-Eye Stare',
            description:
                'Beams of light fire from his eyes, damaging all enemies.',
            power: '37x5'
        },
        inspirit: {
            name: 'Evil Eyes',
            description:
                'The Inspirited Yo-kai is stared at by 100 eyes and loses STR.',
            power: '0'
        },
        stats: {
            hp: '229',
            str: '122',
            spr: '118',
            def: '108',
            spd: '84'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Meats'
    },
    {
        name: 'Eyellure',
        yokaiNumber: '240',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyellure.png',
        description:
            'The eyes that cover his body are made of jewels and give off a light so bright that he sometimes blinds even himself.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Blue Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Yo Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Eye See You',
            description: 'Never misses attacks.'
        },
        attack: {
            name: 'Meteor Punch',
            power: '20x3 to 30x3'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Dazzling Glare',
            description:
                'Beams of light fire from his eyes, damaging all enemies.',
            power: '43x5'
        },
        inspirit: {
            name: 'Evil Eyes',
            description:
                'The Inspirited Yo-kai is stared at by 100 eyes and loses STR.',
            power: '0'
        },
        stats: {
            hp: '260',
            str: '112',
            spr: '133',
            def: '115',
            spd: '87'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Greesel',
        yokaiNumber: '241',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/greesel.png',
        description:
            "A powerful, greedy Yo-kai who wants to control the world's wealth. He'll do anything for money.",
        locations: [
            'Infinite Inferno - 4th Circle',
            'Infinite Inferno - 5th Circle',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Mine',
            description: 'Will take good Inspiritson allies for itself.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Stingy Curse',
            description:
                'An ominous, villainous curse lowers the HP of all enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Stinginess',
            description:
                'Makes an enemy extra greedy and hateful toward its allies.',
            power: '0'
        },
        stats: {
            hp: '260',
            str: '86',
            spr: '129',
            def: '106',
            spd: '110'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Awevil',
        yokaiNumber: '242',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/awevil.png',
        description:
            "An aristocrat of evil. Pure depravity. A Yo-kai that will do anything just because it's bad. He's earned his name.",
        locations: ['Springdale Underground Waterway'],
        skill: {
            name: 'Ultimate Dark',
            description: 'Inspirit will alwayssucceed.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Pitch-Black Curse',
            description: 'The dark power of eternity hinders enemy actions.',
            power: '140'
        },
        inspirit: {
            name: 'Darkness Power',
            description: 'Steadily damages a foe with the powers of darkness.',
            power: '0'
        },
        stats: {
            hp: '272',
            str: '89',
            spr: '128',
            def: '94',
            spd: '124'
        },
        tribe: 'Shady',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Wobblewok',
        yokaiNumber: '243',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wobblewok.png',
        description:
            "A Yo-kai formed from spirits who've fallen in battle. He struggles to keep a lid on all of his incredible power.",
        locations: ['Old Springdale - Flatpot Plains'],
        skill: {
            name: 'Ultimate Dark',
            description: 'Inspirit will alwayssucceed.'
        },
        attack: {
            name: 'Bone Crusher',
            power: '100 to 150'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Pitch Bomber',
            description: 'A giant ball of darkness crashes into all foes.',
            power: '200'
        },
        inspirit: {
            name: 'Boil Away',
            description:
                'The Inspirited Yo-kai is under a Wobblewok curse. Lowers all stats.',
            power: '0'
        },
        stats: {
            hp: '256',
            str: '123',
            spr: '123',
            def: '100',
            spd: '102'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Coughkoff',
        yokaiNumber: '244',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/coughkoff.png',
        description:
            'Coughkoff can cause your throat to feel tingly and make you sick. Try to stay healthy!',
        locations: [
            'Uptown Springdale - Rivers',
            'Downtown Springdale - Garbages & Dumps',
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'Springdale Underground Waterway',
            'Springdale Underground Waterway - Water',
            'San Fantastico - Seaside Cave',
            'Old Springdale - Rivers',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Spiky Guard',
            description: 'Deals damage back tofoe while guarding.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Koff Dropper',
            description:
                'His prickly nature undoes all good effects on enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Sore Throat',
            description:
                'Gives a Yo-kai a sore throat and steadily decreases its HP.',
            power: '0'
        },
        stats: {
            hp: '223',
            str: '93',
            spr: '32',
            def: '77',
            spd: '68'
        },
        tribe: 'Eerie',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Breads',
        evolutionIndexes: [64]
    },
    {
        name: 'Hurchin',
        yokaiNumber: '245',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hurchin.png',
        description:
            "He looks just like Coughkoff, but don't say that! He hates that guy.",
        locations: [
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            'San Fantastico - Seaside Cave',
            'San Fantastico - Hidden Workshop',
            'San Fantastico - Sea',
            'Mystery Way - Main Line',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)'
        ],
        skill: {
            name: 'Spiky Guard',
            description: 'Deals damage back tofoe while guarding.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sting Bomb',
            description:
                'Explosion that will deal damage to enemies and allies alike.',
            power: '100 to 262'
        },
        inspirit: {
            name: 'Headache',
            description:
                'Gives a foe a headache and steadily decreases its HP.',
            power: '0'
        },
        stats: {
            hp: '223',
            str: '35',
            spr: '96',
            def: '97',
            spd: '78'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Breads'
    },
    {
        name: 'Droplette',
        yokaiNumber: '246',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/droplette.png',
        description:
            "Droplette makes his way to places that don't get much sun and makes them damp and moldy...  Gross.",
        locations: [
            'Blossom Heights - Rivers',
            'Blossom Heights - Prayer\u2019s Peak Tunnel - Garbages',
            'Springdale Underground Waterway',
            'Old Springdale - Rivers',
            'Sawayama-jo - Area 2 - Rivers',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Moist Skin',
            description: 'Takes less damagefrom Water attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Drizzling Shower',
            description: 'Builds up moisture and dumps rain on his foes.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Pruned',
            description:
                "The Inspirited Yo-kai's skin gets clammy and DEF decreases.",
            power: '0'
        },
        stats: {
            hp: '151',
            str: '51',
            spr: '108',
            def: '56',
            spd: '112'
        },
        tribe: 'Eerie',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [98]
    },
    {
        name: 'Drizzle',
        yokaiNumber: '247',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/drizzle.png',
        description:
            'Drizzle creates rain clouds wherever he goes. You can find him in places that are thoroughly wet.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Evolve Droplette at Level 25.'
        ],
        skill: {
            name: 'Moist Skin',
            description: 'Takes less damagefrom Water attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Heavy Squall',
            description: 'Builds moisture and dumps a squall on his opponents.',
            power: '160'
        },
        inspirit: {
            name: 'Pruned',
            description:
                "The Inspirited Yo-kai's skin gets clammy and DEF decreases.",
            power: '0'
        },
        stats: {
            hp: '223',
            str: '67',
            spr: '129',
            def: '89',
            spd: '94'
        },
        tribe: 'Eerie',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Juices',
        evolutionIndexes: [98]
    },
    {
        name: 'Slush',
        yokaiNumber: '248',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slush.png',
        description:
            'A large gathering of these frosty Yo-kai could frost anything. Just one can freeze a cup of water.',
        locations: [
            'Uptown Springdale - Lonely Waterway',
            'Mt. Wildwood - Abandoned Tunnel West & East & Jumbo Slider - Ponds & Rivers',
            'Blossom Heights - Hidden Side Street',
            "Shopper's Row - Shopping Street Narrows",
            "Shopper's Row - Shopping Street Narrows - Garbages & Dumps",
            'Breezy Hills - Rivers',
            'Springdale Underground Waterway',
            'Old Springdale - Gourd Pond - Pond',
            'Sawayama-jo - Area 2 - Rivers',
            'Mystery Way - Back Road',
            'Gold-Gleaming Hwy. - Outer Lane',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb'
        ],
        skill: {
            name: 'Stiff Skin',
            description: 'Takes less damagefrom Ice attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Shivering Sigh',
            description:
                'Uses his frosty power to drop icicles on his enemies.',
            power: '50 to 131'
        },
        inspirit: {
            name: 'Numbify',
            description: 'Numbs a foe with cold and lowers STR.',
            power: '0'
        },
        stats: {
            hp: '166',
            str: '40',
            spr: '90',
            def: '87',
            spd: '96'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [123]
    },
    {
        name: 'Alhail',
        yokaiNumber: '249',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/alhail.png',
        description:
            'This Yo-kai has strong ice power by himself. Ice will gradually encase whatever he touches.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Evolve Slush at Level 25.'
        ],
        skill: {
            name: 'Stiff Skin',
            description: 'Takes less damagefrom Ice attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Heavenly Hail',
            description:
                'Drops a hailstorm like a meteor shower down upon his foes.',
            power: '160'
        },
        inspirit: {
            name: 'Frozen Solid',
            description: 'Thoroughly freezes a foe and lowers STR.',
            power: '0'
        },
        stats: {
            hp: '236',
            str: '50',
            spr: '105',
            def: '124',
            spd: '90'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Juices',
        evolutionIndexes: [123]
    },
    {
        name: 'Gush',
        yokaiNumber: '250',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gush.png',
        description:
            "If he Inspirits you, your nose won't stop bleeding. This Yo-kai can be much scarier than he looks.",
        locations: [
            'Blossom Heights - Rivers',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Mystery Way - Crank-a-kai - Mystery Coin',
            'Blasters - Crank-a-kai - Normal mission - Stone Orb',
            'Blasters - Crank-a-kai - Gold mission - Red Orb'
        ],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Nosebleed Bomb',
            description:
                'Blasts his opponents with enough power to give them nosebleeds.',
            power: '100'
        },
        inspirit: {
            name: 'Nosebleed',
            description: 'Slows down a foe with a bloody nose.',
            power: '0'
        },
        stats: {
            hp: '227',
            str: '33',
            spr: '115',
            def: '68',
            spd: '87'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Juices'
    },
    {
        name: 'Peckpocket',
        yokaiNumber: '251',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/peckpocket.png',
        description:
            "When Peckpocket has his eye on you, you'll start wanting other people's stuff. I'll take that!",
        locations: [
            'Uptown Springdale - Shady Back Alley',
            'Blossom Heights - Brushwoods & Flowers',
            "Shopper's Row - Brushwoods & flowers",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 3F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'Gera Gera Land',
            'Gold-Gleaming Hwy. - Outer Lane',
            'Infinite Inferno - 4th Circle',
            'Infinite Inferno - 5th Circle',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Squish',
            power: '10 to 45'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Life Snag',
            description:
                'Snags HP from all opponents and divides it among his allies.',
            power: '45 to 117'
        },
        inspirit: {
            name: 'Snatch',
            description:
                "Makes a foe so jealous of its allies' things that it will attack them.",
            power: '0'
        },
        stats: {
            hp: '179',
            str: '96',
            spr: '61',
            def: '80',
            spd: '71'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [99]
    },
    {
        name: 'Robbinyu',
        yokaiNumber: '252',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robbinyu.png',
        description:
            'A bird who uses a lasso to steal whatever he wants. He even lassoed his ex on her wedding day!',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Evolve Peckpocket at Level 23.'
        ],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: "Ropin' Robbin'",
            description:
                'A single enemy gets tied up tight and is unable to move.',
            power: '110'
        },
        inspirit: {
            name: 'Tie Down',
            description:
                'The Inspirited Yo-kai is tangled in rope and cannot move.',
            power: '0'
        },
        stats: {
            hp: '224',
            str: '124',
            spr: '80',
            def: '94',
            spd: '103'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [99]
    },
    {
        name: 'Rockabelly',
        yokaiNumber: '253',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rockabelly.png',
        description:
            "A weird Yo-kai who's quite the belly dancer. His stomach feathers look like an old man's face.",
        locations: ['Breezy Hills - Brushwoods & flowers'],
        skill: {
            name: 'Glossy Skin',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Squish',
            power: '10 to 45'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Face Flop',
            description:
                'Slams his belly into a foe. The impact hurts him too, though.',
            power: '130'
        },
        inspirit: {
            name: 'Funky Dance',
            description:
                'Makes a foe dance with its belly out, which lowers its DEF.',
            power: '0'
        },
        stats: {
            hp: '200',
            str: '60',
            spr: '87',
            def: '93',
            spd: '77'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Squeeky',
        yokaiNumber: '254',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/squeeky.png',
        description:
            "If you hear annoying tunes leaking from someone's headphones, you can bet this busy little Yo-kai's behind it.",
        locations: [
            'Uptown Springdale - Under cars, Distributors & Garbages',
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            'Downtown Springdale - Springdale Business Tower',
            'Downtown Springdale - Behind Frostia\u2019s place',
            'Downtown Springdale - Brushwoods & Flowers',
            'Downtown Springdale - Rivers & Sea',
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            "Shopper's Row - Distributors",
            "Shopper's Row - Garbages & Dumps",
            'Breezy Hills - Gate Room - Can-Kicking Zone',
            'Harrisville - Station Plaza - Distributors & Under porches',
            'Gera Gera Land',
            'Gold-Gleaming Hwy. - Westbound',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Noise Pollution',
            description: 'All Yo-kai receive moredamage from Inspirits.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: 'Maruckus',
            description:
                "The infernal sound of maracas gradually drops enemies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Ba-Dum-Diss',
            description:
                'The Inspirited Yo-kai slowly loses HP due to noise pollution.',
            power: '0'
        },
        stats: {
            hp: '180',
            str: '90',
            spr: '65',
            def: '50',
            spd: '99'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Curries',
        evolutionIndexes: [100]
    },
    {
        name: 'Rawry',
        yokaiNumber: '255',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rawry.png',
        description:
            'He loves nothing more than revving the engine on his stolen bike and thoroughly annoying everyone.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Fusion.'
        ],
        skill: {
            name: 'Noise Pollution',
            description: 'All Yo-kai receive moredamage from Inspirits.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Loud and Proud',
            description:
                "A booming noise from the speakers steadily drops enemies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Vroom Vroom',
            description:
                "The Inspirited Yo-kai's ears ring from a nearby blast, and it loses HP.",
            power: '0'
        },
        stats: {
            hp: '226',
            str: '116',
            spr: '74',
            def: '62',
            spd: '131'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Curries',
        evolutionIndexes: [100]
    },
    {
        name: 'Buhu',
        yokaiNumber: '256',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/buhu.png',
        description:
            'This bird Yo-kai is always sad. People she Inspirits get depressed and distracted a lot.',
        locations: [
            'Mt. Wildwood - Trees',
            'Mt. Wildwood - Abandoned Tunnel West & East & Jumbo Slider - Trees',
            'Mt. Wildwood - Abandoned Tunnel',
            'Old Springdale - Mt.Wildwood Shrine - Trees'
        ],
        skill: {
            name: 'Wind Play',
            description: 'Increases damage ofown Wind attacks.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Boohoo Blast',
            description:
                'Blasts unpleasant energy at her foes and slows them down.',
            power: '30'
        },
        inspirit: {
            name: 'Depression',
            description:
                'Depresses foes and makes them unwilling to take action.',
            power: '0'
        },
        stats: {
            hp: '188',
            str: '59',
            spr: '89',
            def: '66',
            spd: '77'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Breads'
    },
    {
        name: 'Flumpy',
        yokaiNumber: '257',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flumpy.png',
        description:
            'Flumpy can make even the coolest person unfashionable and awkward. She hates being so unstylish.',
        locations: [
            'Uptown Springdale - Lonely Waterway',
            'Gold-Gleaming Hwy. - Outer Lane',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Blasters - Crank-a-kai - Normal mission - Gold Orb'
        ],
        skill: {
            name: 'Wind Play',
            description: 'Increases damage ofown Wind attacks.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Awfully Awkward',
            description:
                'Blasts unpleasant energy at her foes and slows them down.',
            power: '70'
        },
        inspirit: {
            name: 'Awkwardness',
            description: 'Makes foes awkward and lowers their DEF.',
            power: '0'
        },
        stats: {
            hp: '216',
            str: '72',
            spr: '103',
            def: '74',
            spd: '94'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Skreek',
        yokaiNumber: '258',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skreek.png',
        description:
            'If you catch a glimpse of Skreek, just run. He can throw you into the deepest pits of despair.',
        locations: [
            'Mystery Way - Crank-a-kai - Mystery Coin',
            "Quest - Mr. Byrd's Tragic Tale"
        ],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Meet the Reaper',
            description:
                'Sends his foes and their stats) into the depths of despair.',
            power: '0'
        },
        inspirit: {
            name: 'Despair',
            description:
                'Stops foes from acting by filling them with a sense of despair.',
            power: '0'
        },
        stats: {
            hp: '247',
            str: '121',
            spr: '110',
            def: '80',
            spd: '113'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Breads'
    },
    {
        name: 'Manjimutt',
        yokaiNumber: '259',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/manjimutt.png',
        description:
            "A man-faced poodle who enjoys scaring people frightened by a poodle with a man's face. Hopes to one day be a CEO.",
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin'],
        skill: {
            name: "Mutt's Paradise",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Creepy Superbite',
            description:
                'Bites all of his enemies in a frenzy. Pretty creepy, actually...',
            power: '19x5'
        },
        inspirit: {
            name: 'Confusion',
            description: 'Startles foes into attacking their own allies.',
            power: '0'
        },
        stats: {
            hp: '180',
            str: '91',
            spr: '73',
            def: '59',
            spd: '94'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Curries',
        evolutionIndexes: [101]
    },
    {
        name: 'Multimutt',
        yokaiNumber: '260',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/multimutt.png',
        description:
            "Nobody wants to get close to Multimutt because both of his faces look mean. He's a perfect guard dog.",
        locations: ['Evolve Manjimutt at Level 22.'],
        skill: {
            name: "Mutt's Paradise",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Superbite Twin',
            description:
                'Twice the heads means twice the bites for the same number of foes.',
            power: '25'
        },
        inspirit: {
            name: 'Confusion',
            description: 'Startles foes into attacking their own allies.',
            power: '0'
        },
        stats: {
            hp: '228',
            str: '130',
            spr: '89',
            def: '83',
            spd: '104'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Curries',
        evolutionIndexes: [101]
    },
    {
        name: 'Sir Berus',
        yokaiNumber: '261',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sir_berus.png',
        description:
            "An elite guard dog born and raised in the netherworld. He doesn't let a single soul escape his grasp.",
        locations: ['Open the given red box.'],
        skill: {
            name: "Mutt's Paradise",
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Stygian Slingshot',
            description:
                'Shoots rocks gathered from the underworld at his opponents.',
            power: '130 to 195'
        },
        inspirit: {
            name: "Styx's Curse",
            description:
                "Decreases a foe's SPR significantly using an underworld curse.",
            power: '0'
        },
        stats: {
            hp: '245',
            str: '86',
            spr: '127',
            def: '94',
            spd: '111'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Curries'
    },
    {
        name: 'Furgus',
        yokaiNumber: '262',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/furgus.png',
        description:
            'A furry fellow who lurks in dark places and has the distinctly unimpressive ability to encourage mild hair growth.',
        locations: [
            'Old Harrisville - Cicada Canyon',
            'Old Harrisville - Fullface Rock',
            'Old Harrisville - Rice Paddy',
            'Old Harrisville - Paddy fields',
            'Old Harrisville - Brushwoods',
            'Old Harrisville - Gravestones & Under porches',
            'Old Harrisville - Station - Brushwoods & Under porches',
            'Fleshy Souls - Gogo Junction',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hairnet',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Fluffy Dispel',
            description:
                'Enemies are gently relieved of all their positive effects.',
            power: '0'
        },
        inspirit: {
            name: 'Thatch',
            description:
                'The Inspirited Yo-kai grows useless fluff, and SPD goes down.',
            power: '0'
        },
        stats: {
            hp: '173',
            str: '50',
            spr: '104',
            def: '42',
            spd: '102'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [103, 104]
    },
    {
        name: 'Furdinand',
        yokaiNumber: '263',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/furdinand.png',
        description:
            'A Yo-kai who makes thick, luxuriant hair sprout in the most...surprising places.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Yo Mystery Coin',
            'Blasters - Crank-a-kai - Normal mission - Stone Orb',
            'Evolve Furgus at Level 28.'
        ],
        skill: {
            name: 'Haiwax',
            description: 'Returns all negativeInspiriting attacks.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bushy World',
            description:
                'Furdinand blows himself up, damaging all enemies and allies.',
            power: '270'
        },
        inspirit: {
            name: 'Thicket',
            description:
                'The Inspirited Yo-kai gets overly fluffy. SPD goes way down.',
            power: '0'
        },
        stats: {
            hp: '231',
            str: '78',
            spr: '121',
            def: '94',
            spd: '118'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [103]
    },
    {
        name: 'Nosirs',
        yokaiNumber: '264',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nosirs.png',
        description:
            'This big-nosed trio always insists on its innocence and feigns ignorance when things go awry.',
        locations: [
            'Downtown Springdale - Brushwoods & Flowers',
            "Shopper's Row - Distributors",
            "Shopper's Row - Garbages & Dumps",
            "Shopper's Row - Empty flats",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 3F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 2F",
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'Breezy Hills - Gourd Pond Museum 1F',
            'Breezy Hills - Gourd Pond Museum 2F',
            'Breezy Hills - Under cars & Garbages',
            'Breezy Hills - Distributors',
            'Breezy Hills - Empty flats',
            'Mystery Way - Service Road',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Spin-no-rama',
            description: "When in front, enemiescan't change positions."
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Ah, Ah, Ah\u2014',
            description:
                "The trio's endless denials manage to confuse the enemy.",
            power: '0'
        },
        inspirit: {
            name: 'Doubt It',
            description:
                'The Inspirited Yo-kai doubts everything and cannot move.',
            power: '0'
        },
        stats: {
            hp: '188',
            str: '98',
            spr: '103',
            def: '56',
            spd: '83'
        },
        tribe: 'Eerie',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Dismarelda',
        yokaiNumber: '265',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dismarelda.png',
        description:
            "Her gloomy aura can  darken the mood in any environment. It's even worse when she's in a bad mood.",
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Under cars & Distributors',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Cursed Skin',
            description: 'All stats will increasewhen Inspirited by foe.'
        },
        attack: {
            name: 'Squish',
            power: '10 to 45'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Dismartillery',
            description:
                'Covers her foes in gloomy fumes that then lower their STR.',
            power: '40'
        },
        inspirit: {
            name: 'Overcast',
            description:
                'Surrounds a foe with overcast weather and lowers STR significantly.',
            power: '0'
        },
        stats: {
            hp: '208',
            str: '58',
            spr: '98',
            def: '91',
            spd: '76'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Breads',
        evolutionIndexes: [86]
    },
    {
        name: 'Chatalie',
        yokaiNumber: '266',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chatalie.png',
        description:
            "All talk and no action. If she Inspirits you, you'll be the same and lose the trust of others.",
        locations: [
            'Downtown Springdale - Springdale Business Tower',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)'
        ],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Bigmouth',
            description: 'Bites her opponents with a big-toothed grin.',
            power: '18x5 to 27x5'
        },
        inspirit: {
            name: 'All Talk',
            description: 'Makes Yo-kai talk big... but do little.',
            power: '0'
        },
        stats: {
            hp: '200',
            str: '75',
            spr: '90',
            def: '64',
            spd: '87'
        },
        tribe: 'Eerie',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Breads'
    },
    {
        name: 'Nagatha',
        yokaiNumber: '267',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nagatha.png',
        description:
            "Nagatha will make you into the kind of person that'll nag people over the smallest mistake.",
        locations: [
            'Excellent Tower - Brushwoods & Flowers',
            'Excellent Tower - Under cars & Distributors'
        ],
        skill: {
            name: 'Too Serious',
            description: 'Will never Loaf.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Badger Bite',
            description: 'Bites her opponents while complaining.',
            power: '21x5 to 31x5'
        },
        inspirit: {
            name: 'Complaints',
            description:
                'Makes foes complain a lot while they actually do very little.',
            power: '0'
        },
        stats: {
            hp: '220',
            str: '115',
            spr: '64',
            def: '82',
            spd: '96'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Papa Windbag',
        yokaiNumber: '268',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/papa_windbag.png',
        description:
            "This Yo-kai's constant insistence on his own greatness never fails to rub people the wrong way.",
        locations: [
            "Shopper's Row - Nocturne Hospital",
            "Shopper's Row - Brushwoods & flowers",
            "Shopper's Row - Empty flats",
            'Gera Gera Land',
            'Mystery Way - Route 5',
            'Divine Paradise - 5F',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Center Stage',
            description: 'All stats increase whenin front and center.'
        },
        attack: {
            name: 'Flip Kick',
            power: '60 to 90'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Boastful Dance',
            description:
                'Papa Windbag sings his own praises and restores HP in the process.',
            power: '0'
        },
        inspirit: {
            name: 'Big Up',
            description:
                'The Inspirited Yo-kai is filled with confidence. All stats go up.',
            power: '0'
        },
        stats: {
            hp: '212',
            str: '79',
            spr: '110',
            def: '65',
            spd: '99'
        },
        tribe: 'Eerie',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Sobas',
        evolutionIndexes: [36]
    },
    {
        name: 'Ben Tover',
        yokaiNumber: '269',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ben_tover.png',
        description:
            'A supple and slippery character whose pathetic excuses make it utterly impossible to pin blame on him.',
        locations: [
            'San Fantastico - Seaside Cave',
            'San Fantastico - Garbages',
            'San Fantastico - Empty flats',
            'San Fantastico - Under cars',
            'San Fantastico - Hidden Workshop - Garbages',
            'San Fantastico - Hidden Workshop - Empty Flats',
            'San Fantastico - Hidden Workshop - Under cars',
            'Gera Gera Land',
            'Sawayama-jo - Area 2',
            'Infinite Inferno - 4th Circle',
            'Infinite Inferno - 5th Circle',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Dodge',
            description: 'All Soultimate Moveswill be dodged.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Squirm',
            description: 'Unpleasant wriggling reduces all enemy stats.',
            power: '0'
        },
        inspirit: {
            name: 'Shirkster',
            description:
                "The Inspirited Yo-kai becomes lazy and doesn't do anything.",
            power: '0'
        },
        stats: {
            hp: '195',
            str: '85',
            spr: '102',
            def: '70',
            spd: '111'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Cheeksqueek',
        yokaiNumber: '270',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cheeksqueek.png',
        description:
            "A Yo-kai that can't stop farting. There's a rumor that he just has really bad  breath...but I'm not going to clear the air here.",
        locations: [
            'Downtown Springdale - Brushwoods & Flowers',
            'Gera Gera Land'
        ],
        skill: {
            name: 'Gassy Sphere',
            description: 'Decreases accuracyof enemies.'
        },
        attack: {
            name: 'Headbutt',
            power: '55 to 121'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Stinky Smog',
            description:
                'Emits an evil fart that significantly lowers the SPD of enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Stink Up',
            description:
                "Confuses a foe with a stench so strong that it can't think straight.",
            power: '0'
        },
        stats: {
            hp: '206',
            str: '101',
            spr: '86',
            def: '73',
            spd: '106'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Milks'
    },
    {
        name: 'Cuttincheez',
        yokaiNumber: '271',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cuttincheez.png',
        description:
            'A god of flatulence. Brace yourself for agony if you get stuck in a windowless room with Cuttincheez.',
        locations: ['Uptown Springdale - Bushes', 'Infinite Tunnel'],
        skill: {
            name: 'Sense of Smell',
            description: 'Never misses attacks.'
        },
        attack: {
            name: 'Headbutt',
            power: '55 to 121'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Toxic Gas',
            description:
                'Emits an evil fart that significantly lowers the SPD of enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Stink Up',
            description:
                "Confuses a foe with a stench so strong that it can't think straight.",
            power: '0'
        },
        stats: {
            hp: '230',
            str: '97',
            spr: '121',
            def: '92',
            spd: '118'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Milks'
    },
    {
        name: 'Toiletta',
        yokaiNumber: '272',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/toiletta.png',
        description:
            "Toiletta really wants to make new friends, but she's too shy to leave the bathroom.",
        locations: [
            'Uptown Springdale - Elementary School 3F',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)'
        ],
        skill: {
            name: 'Curse Worsener',
            description: 'Intensifies negativeInspirits on allies.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Curse You!',
            description:
                'A powerful curse causes enemy HP to steadily drop away.',
            power: '0'
        },
        inspirit: {
            name: 'Elementary Curse',
            description:
                'The Inspirited Yo-kai is cursed by a third grader. SPR decreases.',
            power: '0'
        },
        stats: {
            hp: '200',
            str: '68',
            spr: '106',
            def: '87',
            spd: '104'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Snacks',
        evolutionIndexes: [107]
    },
    {
        name: 'Foiletta',
        yokaiNumber: '273',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/foiletta.png',
        description:
            "Toiletta's now in high school, where her love of curses and disruptive behavior has earned her a new nickname.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Cheerful Coin',
            'Blasters - Crank-a-kai - Normal mission - Stone Orb',
            'Blasters - Crank-a-kai - Silver mission - Stone Orb',
            'Fusion.'
        ],
        skill: {
            name: 'Curse Worsener',
            description: 'Intensifies negativeInspirits on allies.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Cursed Love',
            description:
                'A curse from a book causes enemy HP to rapidly drop away.',
            power: '0'
        },
        inspirit: {
            name: 'High School Hex',
            description:
                'The Inspirited Yo-kai is cursed by a kid in high school. SPR decreases.',
            power: '0'
        },
        stats: {
            hp: '224',
            str: '85',
            spr: '129',
            def: '103',
            spd: '113'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Snacks',
        evolutionIndexes: [107]
    },
    {
        name: 'Sproink',
        yokaiNumber: '274',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sproink.png',
        description:
            'Loves to bathe in super- hot water. Dip a toe before jumping in with him\u2014you might be making a HUGE mistake!',
        locations: ['Springdale Hot Springs - Lobby'],
        skill: {
            name: 'Pigskin',
            description: 'Only receives halfdamage from an attack.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Squealing Boil',
            description:
                'Roasts the enemy with flames fired from his boiling-hot nose.',
            power: '160'
        },
        inspirit: {
            name: 'Sweaty Swine',
            description:
                'The Inspirited Yo-kai gets dizzy from heat. All stats go down.',
            power: '0'
        },
        stats: {
            hp: '218',
            str: '96',
            spr: '117',
            def: '104',
            spd: '92'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Compunzer',
        yokaiNumber: '275',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/compunzer.png',
        description:
            "Even though he wants to make people laugh, Compunzer's jokes fall flat and just lead to awkward silences.",
        locations: ['Old Harrisville - Brushwoods'],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Lamest Joke',
            description:
                'Tells a joke so badly that his foes slow down to a crawl...',
            power: '0'
        },
        inspirit: {
            name: 'Fall Flat',
            description:
                "Makes a foe's jokes fall so flat that it hurts both pride and HP.",
            power: '0'
        },
        stats: {
            hp: '232',
            str: '89',
            spr: '117',
            def: '100',
            spd: '115'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Lamedian',
        yokaiNumber: '276',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lamedian.png',
        description:
            "Recycles jokes like they're made out of plastic. He'll be here all week, folks.",
        locations: [
            'Downtown Springdale - Under cars, Distributors, Garbages & Dumps',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hanging In',
            description: "Won't get bad effectsof enemy Inspirits."
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Millennium of Lame',
            description:
                'Tells a joke so badly that his foes slow down to a crawl...',
            power: '0'
        },
        inspirit: {
            name: 'Fall Flat',
            description:
                "Makes a foe's jokes fall so flat that it hurts both pride and HP.",
            power: '0'
        },
        stats: {
            hp: '249',
            str: '119',
            spr: '88',
            def: '82',
            spd: '110'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Grumples',
        yokaiNumber: '277',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grumples.png',
        description:
            'Bitter toward youth and beauty, Grumples makes people wrinkly. She was quite the beauty when she was young, though.',
        locations: [
            'Blossom Heights - Bamboo groves',
            'Sawayama-jo - Area 1 - Brushwoods',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Blasters - Crank-a-kai - Gold mission - Red Orb'
        ],
        skill: {
            name: 'Oldness Zone',
            description: 'No Yo-kai will be ableto dodge.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Scary Wrinkles',
            description:
                'Steals HP from foes with her staff and gives it to her allies.',
            power: '100 to 150'
        },
        inspirit: {
            name: 'Wrinkles',
            description:
                'Makes a foe wrinkled and decrepit, which will lower its DEF.',
            power: '0'
        },
        stats: {
            hp: '211',
            str: '71',
            spr: '124',
            def: '78',
            spd: '105'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Milks',
        evolutionIndexes: [108]
    },
    {
        name: 'Everfore',
        yokaiNumber: '278',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/everfore.png',
        description:
            'Sustaining her own youth and beauty by absorbing it from others, Everfore is always out looking to meet beautiful women.',
        locations: ['Fusion.'],
        skill: {
            name: 'Oldness Zone',
            description: 'No Yo-kai will be ableto dodge.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Beauty Beam',
            description:
                'Steals HP from foes with her staff and gives it to her allies.',
            power: '130 to 195'
        },
        inspirit: {
            name: 'Youth Drain',
            description: "Saps an enemy's youth and lowers all stats.",
            power: '0'
        },
        stats: {
            hp: '246',
            str: '90',
            spr: '132',
            def: '97',
            spd: '125'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Milks',
        evolutionIndexes: [108]
    },
    {
        name: 'Eterna',
        yokaiNumber: '279',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eterna.png',
        description:
            "They say this Yo-kai's immortality stems from her staff and that she'll age instantly without it.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Mon Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Oldness Zone',
            description: 'No Yo-kai will be ableto dodge.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Undying Drain',
            description:
                'Steals HP from foes with her staff and gives it to her allies.',
            power: '140'
        },
        inspirit: {
            name: 'Immortal Power',
            description:
                "Regenerates an ally's HP with the power of immortality.",
            power: '0'
        },
        stats: {
            hp: '267',
            str: '108',
            spr: '128',
            def: '85',
            spd: '121'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Milks'
    },
    {
        name: 'Insomni',
        yokaiNumber: '280',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/insomni.png',
        description:
            "If you catch Insomni's eye, she won't let you fall asleep until she's bored with you...or you're almost dead.",
        locations: [
            'Blossom Heights - Trees',
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Present)',
            ' Yo-kai Spot - The Light Pursuing Drivers'
        ],
        skill: {
            name: 'Insecure',
            description: 'High chance to giveand take critical strikes.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Never Sleep Ever',
            description: "Lowers all her enemies' stats with just one look.",
            power: '0'
        },
        inspirit: {
            name: 'Insomnia',
            description:
                'Makes an enemy unable to sleep and lowers stats significantly.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '94',
            spr: '117',
            def: '85',
            spd: '120'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Candies'
    },
    {
        name: 'Sandi',
        yokaiNumber: '281',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sandi.png',
        description:
            "When Sandi Inspirits you, the two of you will play in your dreams. It's too fun to ever wake up from.",
        locations: ['Mystery Way - Crank-a-kai - Mystery Coin'],
        skill: {
            name: 'Grip on You',
            description: 'Amount of absorbed HPincreased.'
        },
        attack: {
            name: 'Slap',
            power: '10 to 45'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Unwaking Dream',
            description:
                'Sends a wave of evil at her foes and lowers all of their stats.',
            power: '140'
        },
        inspirit: {
            name: 'Bedtime',
            description:
                'The Inspirited Yo-kai falls so deeply asleep it is unable to act.',
            power: '0'
        },
        stats: {
            hp: '270',
            str: '86',
            spr: '124',
            def: '92',
            spd: '129'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Arachnus',
        yokaiNumber: '282',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/arachnus.png',
        description:
            'A Yo-kai from ancient Japan who sometimes confuses his prey by revealing his spidery true form.',
        locations: ['Clear "The Bony General" quest.'],
        skill: {
            name: 'Highlander',
            description: 'Attack power increasesafter beating enemies.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Spider Smash',
            description:
                'Legendary spider power inflicts earth damage on an enemy.',
            power: '300'
        },
        inspirit: {
            name: 'Entrap',
            description:
                'The Inspirited Yo-kai gets tangled in a web and loses a lot of SPD.',
            power: '0'
        },
        stats: {
            hp: '254',
            str: '107',
            spr: '151',
            def: '101',
            spd: '120'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Arachnia',
        yokaiNumber: '283',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/arachnia.png',
        description:
            'An expert in poisons, this Yo-kai is often called a femme fatale, despite being very much a man.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Purple Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'Mystery Way - Crank-a-kai - Boar Mystery Coin',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin'
        ],
        skill: {
            name: 'Highlander',
            description: 'Attack power increasesafter beating enemies.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Spider Crash',
            description:
                'Infamous spider power inflicts earth damage on an enemy.',
            power: '290'
        },
        inspirit: {
            name: 'Entrap',
            description:
                'The Inspirited Yo-kai gets tangled in a web and loses a lot of SPD.',
            power: '0'
        },
        stats: {
            hp: '249',
            str: '130',
            spr: '97',
            def: '96',
            spd: '126'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Sobas'
    },
    {
        name: 'Cricky',
        yokaiNumber: '284',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cricky.png',
        description:
            'Poor Cricky is sure to wake up with a pain in his neck no matter how fluffy his pillows are.',
        locations: [
            'Uptown Springdale - Rivers',
            'Downtown Springdale - Garbages & Dumps',
            "Breezy Hills - Gate Room - Compunzer's Zone - Quiz Room 1F",
            'Gold-Gleaming Hwy. - Eastbound',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Rest Less',
            description: 'All Yo-kai take damagewhile Loafing.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Morning Shower',
            description:
                'A powerful morning shower causes damage to all enemies.',
            power: '60 to 157'
        },
        inspirit: {
            name: 'Pain in the Neck',
            description:
                'The Inspirited Yo-kai has a crick in its neck and slowly loses HP.',
            power: '0'
        },
        stats: {
            hp: '193',
            str: '48',
            spr: '94',
            def: '53',
            spd: '92'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Noko',
        yokaiNumber: '285',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/noko.png',
        description:
            "This Yo-kai is one lucky snake! He's really scared of being seen by humans, which happens a lot since he's terrible at hiding.",
        locations: ['Mt.Wildwood - Crank-a-kai - Select-A-Coin +'],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Noko Smile',
            description:
                'Restores HP for his allies with his soothing Noko smile.',
            power: '100'
        },
        inspirit: {
            name: 'Fortunate',
            description:
                "Noko's luck provides an ally with a little stat boost.",
            power: '0'
        },
        stats: {
            hp: '195',
            str: '37',
            spr: '99',
            def: '40',
            spd: '128'
        },
        tribe: 'slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [111]
    },
    {
        name: 'Bloominoko',
        yokaiNumber: '286',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bloominoko.png',
        description:
            "The flower on top of Bloominoko's head brings people luck and happiness. Some folks even worship it.",
        locations: ['Evolve Noko at Level 25.'],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Lucky Smile',
            description:
                'Recovers HP for his allies with a smile that brings good fortune.',
            power: '150'
        },
        inspirit: {
            name: 'Fortunate',
            description:
                "Bloominoko's luck provides an ally with a little stat boost.",
            power: '0'
        },
        stats: {
            hp: '247',
            str: '78',
            spr: '127',
            def: '75',
            spd: '148'
        },
        tribe: 'slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [111]
    },
    {
        name: 'Pandanoko',
        yokaiNumber: '287',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pandanoko.png',
        description:
            "A wandering Yo-kai from a faraway land. He's tough to find and a miracle to actually befriend.",
        locations: ['Wayfarer Manor'],
        skill: {
            name: 'Summon',
            description: 'Will make Wisps appearmore often.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Panda Smile',
            description:
                'Recovers HP for his allies with a rare black- and-white smile.',
            power: '170'
        },
        inspirit: {
            name: 'Panda Cuteness',
            description:
                'Heals an ally bit by bit with the cuteness of a panda bear.',
            power: '0'
        },
        stats: {
            hp: '230',
            str: '131',
            spr: '94',
            def: '98',
            spd: '127'
        },
        tribe: 'slippery',
        element: 'Ice',
        weakness: 'nothing',
        rank: 'a',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Snaggly',
        yokaiNumber: '288',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snaggly.png',
        description:
            "Delights in making people difficult to deal with. If someone's being awkward, you can bet she's nearby.",
        locations: [
            'Uptown Springdale - Trees',
            'Mt. Wildwood - Trees',
            'Blossom Heights - Trees',
            'Blossom Heights - Bamboo groves',
            "Shopper's Row - Shopping Street Narrows",
            "Shopper's Row - Trees",
            "Shopper's Row - Shopping Street Narrows - Garbages & Dumps",
            'Breezy Hills - Gate Room - Can-Kicking Zone',
            'Breezy Hills - Trees',
            'Harrisville - Station Plaza - Distributors & Under porches',
            'Mystery Way - Route 5',
            'Divine Paradise - 1F',
            'Divine Paradise - 2F',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Hassle',
            description: 'Makes it difficult forenemies to be purified.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Tossabout',
            description: 'Restless tossing and turning confuses all enemies.',
            power: '0'
        },
        inspirit: {
            name: 'Two to Tangle',
            description:
                'The Inspirited Yo-kai keeps tripping. SPD goes way down.',
            power: '0'
        },
        stats: {
            hp: '186',
            str: '82',
            spr: '61',
            def: '64',
            spd: '92'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Sweets',
        evolutionIndexes: [112]
    },
    {
        name: 'Whinona',
        yokaiNumber: '289',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/whinona.png',
        description:
            "She's never EVER happy, and her constant moaning has ruined more than a few friendships.",
        locations: [
            'Gold-Gleaming Hwy. - Interchange',
            'Evolve Snaggly at Level 29.'
        ],
        skill: {
            name: 'Hassle',
            description: 'Makes it difficult forenemies to be purified.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Whining Wail',
            description: 'Endless griping and groaning confuses all enemies.',
            power: '0'
        },
        inspirit: {
            name: 'What a Drag',
            description:
                'The Inspirited Yo-kai gets all tangled up, and SPD goes down.',
            power: '0'
        },
        stats: {
            hp: '237',
            str: '111',
            spr: '105',
            def: '91',
            spd: '108'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Sweets',
        evolutionIndexes: [112]
    },
    {
        name: 'Heheheel',
        yokaiNumber: '290',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/heheheel.png',
        description:
            "This eel just can't stop laughing, and nobody knows why. Maybe his sense of humor is broken.",
        locations: [
            'San Fantastico - Seaside Cave',
            'San Fantastico - Sea',
            'San Fantastico - Empty flats',
            'San Fantastico - Under cars',
            'San Fantastico - Hidden Workshop - Empty Flats',
            'San Fantastico - Hidden Workshop - Under cars',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Jar Guard',
            description: 'Has extremely highchances to guard.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'In da Funny Bone',
            description:
                'Restores HP for allies. Laughter really is the best medicine!',
            power: '85'
        },
        inspirit: {
            name: 'Playfulness',
            description: 'Cheers up allies and increases their STR.',
            power: '0'
        },
        stats: {
            hp: '195',
            str: '95',
            spr: '66',
            def: '78',
            spd: '74'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Meats'
    },
    {
        name: 'Croonger',
        yokaiNumber: '291',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/croonger.png',
        description:
            "A pot Yo-kai who sings a strange tune. If you hear singing coming from a pot, don't look into it!",
        locations: [
            'Uptown Springdale - Rivers',
            'Gera Gera Land',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Jar Guard',
            description: 'Has extremely highchances to guard.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Eel Life',
            description: 'Bites his enemies as he sings classic tunes.',
            power: '21x5 to 31x5'
        },
        inspirit: {
            name: 'Power of Song',
            description: 'Cheers up allies and increases their SPR.',
            power: '0'
        },
        stats: {
            hp: '202',
            str: '100',
            spr: '95',
            def: '80',
            spd: '84'
        },
        tribe: 'slippery',
        element: 'Drain',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Meats'
    },
    {
        name: 'Urnaconda',
        yokaiNumber: '292',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/urnaconda.png',
        description:
            "That's no regular pot\u2014 there's a huge snake inside! Some say this inspired the creation of the jack-in-the-box.",
        locations: ['Springdale Underground Waterway', 'Mystery Way - Route 4'],
        skill: {
            name: 'Jar Guard',
            description: 'Has extremely highchances to guard.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Venoconda',
            description:
                'Emits a poison mist that gradually drains HP of enemies.',
            power: '80'
        },
        inspirit: {
            name: "Serpent's Power",
            description: 'Gives a Yo-kai snakelike speed.',
            power: '0'
        },
        stats: {
            hp: '220',
            str: '112',
            spr: '68',
            def: '91',
            spd: '78'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Meats'
    },
    {
        name: 'Fishpicable',
        yokaiNumber: '293',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/fishpicable.png',
        description:
            'Fishpicable sees only the bad in people and slaps things he hates with his tail. His tail is very busy.',
        locations: [
            'Springdale Underground Waterway',
            'Springdale Underground Waterway - Water',
            'Mystery Way - Route 4',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)'
        ],
        skill: {
            name: 'Waterproof',
            description: 'Takes less damagefrom Water attacks.'
        },
        attack: {
            name: 'Batter',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Hateful Charge',
            description:
                'Charges up with enemy HP and shares some with his allies).',
            power: '55 to 144'
        },
        inspirit: {
            name: 'Hateful',
            description: 'Makes an enemy hate everything. Even allies.',
            power: '0'
        },
        stats: {
            hp: '207',
            str: '83',
            spr: '88',
            def: '80',
            spd: '67'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Meats',
        evolutionIndexes: [114]
    },
    {
        name: 'Rageon',
        yokaiNumber: '294',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rageon.png',
        description:
            'Rageon holds grudges for no reason. If you wake up to see him standing next to your bed...RUN!',
        locations: ['Evolve Fishpicable at Level 27.'],
        skill: {
            name: 'Waterproof',
            description: 'Takes less damagefrom Water attacks.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Vengeance',
            description: 'Charges into an enemy. Deals huge damage.',
            power: '110 to 242'
        },
        inspirit: {
            name: 'Detest',
            description: 'Makes an enemy hate everything. Even allies.',
            power: '0'
        },
        stats: {
            hp: '229',
            str: '97',
            spr: '114',
            def: '96',
            spd: '79'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Meats',
        evolutionIndexes: [114]
    },
    {
        name: 'Tunatic',
        yokaiNumber: '295',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tunatic.png',
        description:
            "Tunatic will go on a rampage if he's criticized at all. He makes kids angry when they get guidance from adults.",
        locations: [
            'San Fantastico - Seaside Cave',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 3DS coin',
            'Mystery Way - Crank-a-kai - Deer Mystery Coin',
            'Terror Time - Crank-a-kai - Gold Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb',
            'Blasters - Crank-a-kai - Gold mission - Gold Orb'
        ],
        skill: {
            name: 'Fire Play',
            description: 'Increases damage ofown Fire attacks.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Frenzied Rage',
            description:
                'Calls forth his fiery rage to burn his foes to a crisp.',
            power: '125 to 187'
        },
        inspirit: {
            name: 'Frenzy',
            description:
                'Sends an enemy into a frenzy where it will attack anything.',
            power: '0'
        },
        stats: {
            hp: '261',
            str: '128',
            spr: '86',
            def: '106',
            spd: '78'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Meats'
    },
    {
        name: 'Flushback',
        yokaiNumber: '296',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flushback.png',
        description:
            "Uses a plunger to unblock people's memories and bring clarity to muddled minds.",
        locations: [
            'Breezy Hills - Gate Room - Traffic-Light Zone',
            'San Fantastico - Seaside Cave',
            'San Fantastico - Hidden Workshop',
            'San Fantastico - Sea',
            'San Fantastico - Garbages',
            'San Fantastico - Under cars',
            'San Fantastico - Hidden Workshop - Garbages',
            'San Fantastico - Hidden Workshop - Under cars',
            'Gera Gera Land',
            'Mystery Way - Main Line',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Windbreaker',
            description: 'Blocks damage from allWind skill attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Sucksorcism',
            description:
                'Purifies all allies by pulling bad spirits out of them.',
            power: '0'
        },
        inspirit: {
            name: 'Happy Daze',
            description:
                'The Inspirited Yo-kai remembers something good. SPD goes up.',
            power: '0'
        },
        stats: {
            hp: '192',
            str: '44',
            spr: '97',
            def: '92',
            spd: '75'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Sobas',
        evolutionIndexes: [124]
    },
    {
        name: 'Vacuumory',
        yokaiNumber: '297',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/vacuumory.png',
        description:
            'This god of recollection can use his odd suction device to recover memories once thought lost.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Fusion.'
        ],
        skill: {
            name: 'Windbreaker',
            description: 'Blocks damage from allWind skill attacks.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Vacuucism',
            description:
                'Purifies all allies by pulling bad spirits out of them.',
            power: '0'
        },
        inspirit: {
            name: 'Happy Daze',
            description:
                'The Inspirited Yo-kai remembers something good. SPD goes up.',
            power: '0'
        },
        stats: {
            hp: '235',
            str: '88',
            spr: '127',
            def: '116',
            spd: '92'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Sobas',
        evolutionIndexes: [124]
    },
    {
        name: 'Irewig',
        yokaiNumber: '298',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/irewig.png',
        description:
            "This bug makes people get grumpy\u2014and asking them what's wrong will only make things worse!",
        locations: ['Harrisville - Fullface Rock'],
        skill: {
            name: 'Revenge',
            description: 'Reflects some damageback to foe.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Flailing Tail',
            description:
                'An angry tail swipe that often misses but can score a critical hit.',
            power: '75 to 165'
        },
        inspirit: {
            name: 'Bugged Out',
            description: 'The Inspirited Yo-kai goes mad and attacks allies.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '107',
            spr: '52',
            def: '63',
            spd: '98'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [125]
    },
    {
        name: 'Firewig',
        yokaiNumber: '299',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/firewig.png',
        description:
            "He has SUCH a terrible temper. He's even been known to make people smash every plate they own!",
        locations: ['Evolve Irewig at Level 26.'],
        skill: {
            name: 'Revenge',
            description: 'Reflects some damageback to foe.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Flaming Tail',
            description:
                'An angry tail swipe that often misses but can score a critical hit.',
            power: '180'
        },
        inspirit: {
            name: 'Wigged Out',
            description:
                'The Inspirited Yo-kai rages at everything and attacks allies.',
            power: '0'
        },
        stats: {
            hp: '279',
            str: '134',
            spr: '77',
            def: '54',
            spd: '114'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [125]
    },
    {
        name: 'Draggie',
        yokaiNumber: '300',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/draggie.png',
        description:
            'A dragon kid who wants attention. He can see the hidden strengths of others with the ball on his head.',
        locations: [
            'Mt. Wildwood - Abandoned Tunnel East',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            ' Yo-kai Spot - Miracle! A Living Fossil!',
            ' Yo-kai Spot - Miracle! A Living Fossil!'
        ],
        skill: {
            name: 'Hard Worker',
            description: 'Receives moreexperience points.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Draggie Stone',
            description:
                'Shakes the earth beneath his foes with a sacred crystal.',
            power: '100'
        },
        inspirit: {
            name: 'Dragon Power',
            description: "Boosts an ally's STR with a dragon's might.",
            power: '0'
        },
        stats: {
            hp: '202',
            str: '63',
            spr: '93',
            def: '72',
            spd: '86'
        },
        tribe: 'slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [126]
    },
    {
        name: 'Dragon Lord',
        yokaiNumber: '301',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dragon_lord.png',
        description:
            'Draggie has come into his own with dignity  and might worthy of  the title "dragon."',
        locations: ['Fusion.'],
        skill: {
            name: 'Dragon Force',
            description: 'Power will increasewhen in trouble.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Dragon Rock',
            description:
                'Drops a boulder on his foes with the power of the crystal.',
            power: '190'
        },
        inspirit: {
            name: 'Dragon Power',
            description: "Boosts an ally's STR with a dragon's might.",
            power: '0'
        },
        stats: {
            hp: '261',
            str: '97',
            spr: '126',
            def: '91',
            spd: '110'
        },
        tribe: 'slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [126]
    },
    {
        name: 'Azure Dragon',
        yokaiNumber: '302',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/azure_dragon.png',
        description:
            'A legendary, divine beast. He holds domain over water, surpassing even the power of Dragon Lord.',
        locations: ['Excellent Tower - Observation Deck'],
        skill: {
            name: 'Dragon Force',
            description: 'Power will increasewhen in trouble.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Dragon Falls',
            description:
                'Creates a massive waterfall that simply overwhelms his foes.',
            power: '200'
        },
        inspirit: {
            name: 'Cobalt Power',
            description: "Boosts an ally's SPR with a dragon's might.",
            power: '0'
        },
        stats: {
            hp: '277',
            str: '124',
            spr: '108',
            def: '90',
            spd: '104'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Mermaidyn',
        yokaiNumber: '303',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mermaidyn.png',
        description:
            'Half girl, half fish, this Yo-kai has a lovely voice and is ever so curious about life on land.',
        locations: [
            'Old Springdale - Gourd Pond - Pond',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Blasters - Crank-a-kai - Brown mission - Red Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb',
            'Story recruit.'
        ],
        skill: {
            name: 'Saintly Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Beach Wave',
            description:
                'Summons waves and sends them crashing into all enemies.',
            power: '120'
        },
        inspirit: {
            name: 'Rejuvenate',
            description:
                'The Inspirited Yo-kai is rejuvenated and slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '182',
            str: '65',
            spr: '99',
            def: '62',
            spd: '96'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Sweets',
        evolutionIndexes: [116, 117]
    },
    {
        name: 'Mermadonna',
        yokaiNumber: '304',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mermadonna.png',
        description:
            'This ancient Yo-kai is known for her beautiful, lustrous skin and is said to have the ability to grant immortality.',
        locations: ['Fusion.'],
        skill: {
            name: 'Saintly Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Tidal Wave',
            description: 'Sends foaming white waves smashing into all enemies.',
            power: '190'
        },
        inspirit: {
            name: 'Rejuvenate',
            description:
                'The Inspirited Yo-kai is rejuvenated and slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '240',
            str: '99',
            spr: '137',
            def: '100',
            spd: '117'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Sweets',
        evolutionIndexes: [116]
    },
    {
        name: 'Mermother',
        yokaiNumber: '305',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mermother.png',
        description:
            'This special Yo-kai is the source of all life and claims to have given birth to the gods.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Mon Mystery Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Saintly Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Big Wave',
            description: 'Assails all enemies with colossal crashing waves.',
            power: '200'
        },
        inspirit: {
            name: 'Legend Power',
            description:
                'The Inspirited Yo-kai is granted immense power. All stats go up.',
            power: '0'
        },
        stats: {
            hp: '247',
            str: '91',
            spr: '143',
            def: '113',
            spd: '113'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Sweets'
    },
    {
        name: 'Lady Longnek',
        yokaiNumber: '306',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lady_longnek.png',
        description:
            'She could pass for human if she were able to resist the urge to stretch out her superlong neck.',
        locations: [
            'Old Springdale - Gravestones',
            'Old Springdale - Bamboo Groves',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)',
            'Blasters - Crank-a-kai - Normal mission - Gold Orb'
        ],
        skill: {
            name: 'Rubberneck',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: "Twist 'n' Tangle",
            description: 'A neck-stretching strike that always hits home.',
            power: '140 to 210'
        },
        inspirit: {
            name: 'Necks Level',
            description:
                "The Inspirited Yo-kai's neck grows very slightly. DEF boosted.",
            power: '0'
        },
        stats: {
            hp: '220',
            str: '96',
            spr: '79',
            def: '80',
            spd: '94'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Sweets',
        evolutionIndexes: [119]
    },
    {
        name: 'Daiz',
        yokaiNumber: '307',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/daiz.png',
        description:
            "Daiz just stares off into space, sometimes not moving for three whole days. What's he thinking about all that time...?",
        locations: [
            'Mt. Wildwood - Jumbo Slider',
            'Yo-kai World - Liar Mountain',
            'Mt.Wildwood - Crank-a-kai - Bird Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Wind Excitement Coin',
            'Mt.Wildwood - Crank-a-kai - Moon Excitement Coin'
        ],
        skill: {
            name: 'Dodge',
            description: 'All Soultimate Moveswill be dodged.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Spacing Out',
            description:
                'Sends an evil aura at foes. The aura will send them into a daze.',
            power: '80'
        },
        inspirit: {
            name: 'Generous Heart',
            description: 'Makes an ally big- hearted and increases all stats.',
            power: '0'
        },
        stats: {
            hp: '225',
            str: '26',
            spr: '103',
            def: '88',
            spd: '144'
        },
        tribe: 'slippery',
        element: 'Drain',
        weakness: 'nothing',
        rank: 'c',
        favouriteFood: 'Candies'
    },
    {
        name: 'Confuze',
        yokaiNumber: '308',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/confuze.png',
        description:
            "Confuze will make you  babble and mumble. He's the worst when you have to read aloud in class!",
        locations: [
            'Springdale Underground Waterway - Water',
            'Mystery Way - Route 4',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Blasters - Crank-a-kai - Silver mission - Gold Orb'
        ],
        skill: {
            name: 'Dodge',
            description: 'All Soultimate Moveswill be dodged.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Uh, Er... Hold On.',
            description: 'Sends a dark aura at foes and puts them into a daze.',
            power: '100'
        },
        inspirit: {
            name: 'Faltering Heart',
            description: 'Makes an enemy falter and lowers its stats.',
            power: '0'
        },
        stats: {
            hp: '214',
            str: '88',
            spr: '116',
            def: '78',
            spd: '109'
        },
        tribe: 'slippery',
        element: 'Drain',
        weakness: 'nothing',
        rank: 'b',
        favouriteFood: 'Candies'
    },
    {
        name: 'Chummer',
        yokaiNumber: '309',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chummer.png',
        description:
            "Chummer loves eating kids. He'll make them loiter after school before devouring them. He likes asparagus too.",
        locations: [
            'San Fantastico - Hidden Workshop',
            'Mystery Way - Main Line',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Terror Time - Crank-a-kai - Red Oni Orb',
            'Blasters - Crank-a-kai - Silver mission - Red Orb'
        ],
        skill: {
            name: 'Loiterer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sharkskin Shield',
            description: 'Draws attacks to himself and raises DEF.',
            power: '0'
        },
        inspirit: {
            name: 'Loitering',
            description: 'Makes a foe want to loiter instead of fight.',
            power: '0'
        },
        stats: {
            hp: '234',
            str: '99',
            spr: '65',
            def: '82',
            spd: '89'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Shrook',
        yokaiNumber: '310',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shrook.png',
        description:
            "Shrook will make you bad at whatever you're usually good at. He can make a master into a novice pretty quickly.",
        locations: ['San Fantastico - Seaside Cave'],
        skill: {
            name: 'Shark Skin',
            description: 'Skin deals damage toattacking foes.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Feeding Frenzy',
            description:
                'Voraciously devours enemy HP and divides it among his allies.',
            power: '120 to 180'
        },
        inspirit: {
            name: 'Amateur',
            description:
                'Turns a foe into an amateur and drops STR significantly.',
            power: '0'
        },
        stats: {
            hp: '265',
            str: '116',
            spr: '57',
            def: '104',
            spd: '80'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Spenp',
        yokaiNumber: '311',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/spenp.png',
        description:
            "Being Inspirited by Spenp will make you buy things you don't even want. Wave bye to your cash!",
        locations: [
            "Shopper's Row - Distributors",
            "Shopper's Row - Garbages & Dumps",
            'Gold-Gleaming Hwy. - Entrance',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Blasters - Crank-a-kai - Normal mission - Red Orb',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Matchless Shell',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Bank Breaker',
            description:
                'Makes his foes forget the value of money as they toss it away!',
            power: '130'
        },
        inspirit: {
            name: 'Wastefulness',
            description:
                'Makes an enemy waste its money by tossing it everywhere.',
            power: '0'
        },
        stats: {
            hp: '218',
            str: '86',
            spr: '78',
            def: '119',
            spd: '76'
        },
        tribe: 'slippery',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Almi',
        yokaiNumber: '312',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/almi.png',
        description:
            "When Almi Inspirits you, you'll want to treat others all the time. Your wallet will be empty before you know it.",
        locations: [
            "Shopper's Row - Distributors",
            'Mystery Way - Crank-a-kai - Mystery Coin'
        ],
        skill: {
            name: 'Matchless Shell',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Eternal Debt',
            description:
                'Sends foes into debt by scattering their money uncontrollably. ',
            power: '160'
        },
        inspirit: {
            name: 'So Generous',
            description: 'Makes a Yo-kai scatter money everywhere.',
            power: '0'
        },
        stats: {
            hp: '226',
            str: '80',
            spr: '110',
            def: '124',
            spd: '73'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Breads'
    },
    {
        name: 'Babblong',
        yokaiNumber: '313',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/babblong.png',
        description:
            "Don't agree to listen to Babblong or else he'll talk and talk and talk and talk and talk and talk. He's a terrible listener.",
        locations: [
            'Mt. Wildwood - Bamboo Groves',
            'Excellent Tower - Brushwoods & Flowers',
            'Excellent Tower - Garbages',
            'Excellent Tower - Empty flats',
            'Fleshy Souls Way - Exit',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Babbleblast',
            description:
                'Slaps a foe with his nose. May cancel Soultimate Moves.',
            power: '160'
        },
        inspirit: {
            name: 'Keep Chatting',
            description: 'Makes an enemy chitchat so much that it slows down.',
            power: '0'
        },
        stats: {
            hp: '224',
            str: '100',
            spr: '65',
            def: '91',
            spd: '96'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Candies'
    },
    {
        name: 'Bananose',
        yokaiNumber: '314',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bananose.png',
        description:
            'This Yo-kai is made of banana and is often bothered by circling flies. No relation to Babblong.',
        locations: [
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)',
            'Blasters - Crank-a-kai - Normal mission - Gold Orb'
        ],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Fullswing',
            power: '80 to 120'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Banana Splat',
            description:
                'Slaps a foe with his nose. May cancel Soultimate Moves.',
            power: '200'
        },
        inspirit: {
            name: 'Banana Power',
            description:
                "Boosts an ally's SPD with a great, healthy banana taste!",
            power: '0'
        },
        stats: {
            hp: '246',
            str: '125',
            spr: '92',
            def: '88',
            spd: '121'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Candies'
    },
    {
        name: 'Draaagin',
        yokaiNumber: '315',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/draaagin.png',
        description:
            "A desperately indecisive dragon. Don't expect that anything at all will get done when he's around.",
        locations: [
            'Downtown Springdale - Brushwoods & Flowers',
            'Gera Gera Land',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Past)'
        ],
        skill: {
            name: 'Just a Minute',
            description: "Doesn't take an actionfor one to two turns."
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Aaand Release',
            description:
                'Finally gets around to breathing a burst of watery breath.',
            power: '230'
        },
        inspirit: {
            name: 'Maybe Later',
            description:
                'The Inspirited Yo-kai puts everything on hold and cannot move.',
            power: '0'
        },
        stats: {
            hp: '210',
            str: '102',
            spr: '123',
            def: '108',
            spd: '82'
        },
        tribe: 'slippery',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Ramens'
    },
    {
        name: 'SV Snaggerjag',
        yokaiNumber: '316',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sv_snaggerjag.png',
        description:
            'Fish of all species have nothing but love and respect for this Yo-kai, who brings bad luck to anglers.',
        locations: ['Quest - The Price of Iron'],
        skill: {
            name: 'Waterworks',
            description: 'Water attacks restoreHP.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: "A Fisher's Life",
            description:
                'Hooks a huge whale that blasts foes with its watery breath.',
            power: '160'
        },
        inspirit: {
            name: 'Coast Guard',
            description:
                "The Inspirited Yo-kai's DEF goes up thanks to a lake guardian.",
            power: '0'
        },
        stats: {
            hp: '218',
            str: '88',
            spr: '128',
            def: '85',
            spd: '104'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Odens'
    },
    {
        name: 'Copperled',
        yokaiNumber: '317',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/copperled.png',
        description:
            "You just can't refuse orders from the fan on this old Yo-kai's tail. And he loves to micromanage everything he can!",
        locations: [
            'Mt. Wildwood - Bamboo Groves',
            'Mt. Wildwood - Brushwoods',
            'Gera Gera Land',
            'Infinite Inferno - 6th Circle',
            'Infinite Inferno - 7th Circle',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Past)'
        ],
        skill: {
            name: 'Fire Watchout',
            description: 'Takes less damagefrom Fire attacks.'
        },
        attack: {
            name: 'Batter',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: "I'll Take the Lead!",
            description:
                "Gives an order that heightens allies' morale and STR.",
            power: '0'
        },
        inspirit: {
            name: 'Bossiness',
            description:
                'Makes a Yo-kai so bossy that everyone wants to attack it.',
            power: '0'
        },
        stats: {
            hp: '244',
            str: '92',
            spr: '77',
            def: '88',
            spd: '110'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Cynake',
        yokaiNumber: '318',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cynake.png',
        description:
            'This sulky snake Yo-kai will make you sulk at the slightest problem. Hmph!',
        locations: [
            'San Fantastico - Garbages',
            'San Fantastico - Empty flats',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Blasters - Crank-a-kai - Brown mission - Stone Orb'
        ],
        skill: {
            name: 'Greed',
            description: 'Foe will be more proneto drop items.'
        },
        attack: {
            name: 'Batter',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Sulky Soul',
            description:
                'Undoes all good effects on foes by making them overly cynical. ',
            power: '130'
        },
        inspirit: {
            name: 'Sulky',
            description: 'Makes an enemy sulk and start attacking its friends.',
            power: '0'
        },
        stats: {
            hp: '230',
            str: '74',
            spr: '117',
            def: '98',
            spd: '88'
        },
        tribe: 'slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Slitheref',
        yokaiNumber: '319',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slitheref.png',
        description:
            'When a battle starts, Slitheref will appear out of nowhere and make sure the fight stays fair and square.',
        locations: [
            'Harrisville - Brushwoods',
            'Harrisville - Gravestones',
            'Sawayama-jo - Area 1 - Brushwoods',
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Too Serious',
            description: 'Will never Loaf.'
        },
        attack: {
            name: 'Batter',
            power: '15x3 to 33x3'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Venomous Feint',
            description: 'Sprays a venomous wave that decreases enemy STR.',
            power: '0'
        },
        inspirit: {
            name: 'Pit Viper Venom',
            description:
                "Viper's venom Inspirits Yo-kai and its SPD decreases significantly.",
            power: '0'
        },
        stats: {
            hp: '248',
            str: '105',
            spr: '92',
            def: '107',
            spd: '98'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Venoct',
        yokaiNumber: '320',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/venoct.png',
        description:
            'An elite Yo-kai who fights with his dragon scarf. All of his abilities are truly first class.',
        locations: ['Quest - Enma and the Serpent'],
        skill: {
            name: 'Venocharge',
            description: 'Soul Meter chargesfaster.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Octo Snake',
            description:
                'Repeatedly bites his foes with his aura- filled dragon scarf. ',
            power: '25x10'
        },
        inspirit: {
            name: "Venoct's Blessing",
            description:
                "Increases an ally's SPD under Venoct's careful watch.",
            power: '0'
        },
        stats: {
            hp: '252',
            str: '130',
            spr: '112',
            def: '86',
            spd: '143'
        },
        tribe: 'slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Shad. Venoct',
        yokaiNumber: '321',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shad._venoct.png',
        description:
            "Venoct's shadow, skilled in the deadly arts. Few who learn that he exists live long after that.",
        locations: [
            'Mt.Wildwood - Crank-a-kai - Light Blue Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - 5-star Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Special Coin (Present)',
            'Mt.Wildwood - Crank-a-kai - Glitzy Coin',
            'GeraGe Land - Crank-a-kai - Lucky Crank-a-Coin',
            'Infinite Tunnel'
        ],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Shadow Dragon',
            description:
                'Repeatedly bites his foes with his dragon scarf made of aura. ',
            power: '24x10'
        },
        inspirit: {
            name: 'Enshroud',
            description:
                'Makes enemies ignore an ally by making it shadowlike.',
            power: '0'
        },
        stats: {
            hp: '263',
            str: '104',
            spr: '126',
            def: '90',
            spd: '120'
        },
        tribe: 'slippery',
        element: 'Restoration',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Shogunyan',
        yokaiNumber: '322',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shogunyan.png',
        description:
            'This ancestor of Jibanyan owns a sword so sharp it ------------------------------ can even slice this description in two!',
        locations: ['Medallium.'],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Bonito Blade',
            description:
                'Cuts his opponents\u2014 not with his claws, but with his trusty sword.',
            power: '25x10'
        },
        inspirit: {
            name: 'Heart of a Warrior',
            description:
                'Gives an ally the heart of a warrior and raises its STR. ',
            power: '0'
        },
        stats: {
            hp: '256',
            str: '153',
            spr: '87',
            def: '92',
            spd: '151'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Seafoods',
        seal: 13
    },
    {
        name: 'Komashura',
        yokaiNumber: '323',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komashura.png',
        description:
            'A legendary Komasan with the heart of a greater demon. He scorches his foes with infernal flame.',
        locations: ['Medallium.'],
        skill: {
            name: 'Blazing Spirit',
            description: 'Power increases whenan ally is defeated.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Shura Shower',
            description: 'Broils all of his foes with fearsome flames.',
            power: '170 to 255'
        },
        inspirit: {
            name: 'Burly Power',
            description:
                'Fills an ally with a legendary burliness that raises its SPR.',
            power: '0'
        },
        stats: {
            hp: '267',
            str: '86',
            spr: '173',
            def: '91',
            spd: '123'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Milks',
        seal: 15
    },
    {
        name: 'Gilgaros',
        yokaiNumber: '324',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gilgaros.png',
        description:
            'The strongest Oni ever born. His power is so great that it needs no explanation. None. At all. Even this is too much...',
        locations: ['Medallium.'],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Golden Beatdown',
            description:
                'Crushes a single foe with all the might of a legendary Oni.',
            power: '350'
        },
        inspirit: {
            name: 'Power of Terror',
            description: 'Gives an ally the insane DEF of an Oni.',
            power: '0'
        },
        stats: {
            hp: '318',
            str: '190',
            spr: '48',
            def: '126',
            spd: '96'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Meats',
        seal: 4
    },
    {
        name: 'Spoilerina',
        yokaiNumber: '325',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/spoilerina.png',
        description:
            "There's nothing worse than a spoiler, but that doesn't stop Spoilerina from spilling the beans at the first opportunity.",
        locations: ['Medallium.'],
        skill: {
            name: 'Twinkle Toes',
            description: 'Dodges and returnsevery enemy attack.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Finale Spoiler',
            description:
                'A divine dance that heals HP and maxes out all stats.',
            power: '0'
        },
        inspirit: {
            name: 'Spoiler Spiller',
            description:
                'The Inspirited Yo-kai keeps giving spoilers and is always targeted.',
            power: '0'
        },
        stats: {
            hp: '254',
            str: '94',
            spr: '127',
            def: '92',
            spd: '169'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Sweets',
        seal: 20
    },
    {
        name: 'Elder Bloom',
        yokaiNumber: '326',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/elder_bloom.png',
        description:
            'This legendary Hungramps supposedly once filled a city with spirit-invigorating cherry blossoms.',
        locations: ['Medallium.'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Full Bloom',
            description:
                'Revives allies and restores their HP with cherry-blossom power.',
            power: '0'
        },
        inspirit: {
            name: 'Miracle Blossom',
            description: "Greatly improves an ally's SPD with cherry blossoms!",
            power: '0'
        },
        stats: {
            hp: '241',
            str: '89',
            spr: '161',
            def: '98',
            spd: '148'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Rice Balls',
        seal: 19
    },
    {
        name: 'Poofessor',
        yokaiNumber: '327',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/poofessor.png',
        description:
            'He insists on "sharing" his trivial knowledge, much to the annoyance of anyone who\'s forced to listen.',
        locations: ['Medallium.'],
        skill: {
            name: 'Biochemistry',
            description: 'Removes elements from all Yo-kai attacks.'
        },
        attack: {
            name: 'Pointy Pokes',
            power: '12x3 to 26x3'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Pooped Out',
            description:
                'A wave of woe hits all foes and can confuse them too.',
            power: '150'
        },
        inspirit: {
            name: 'Info Dump',
            description:
                "The Inspirited Yo-kai can only recite poo facts and can't act.",
            power: '0'
        },
        stats: {
            hp: '277',
            str: '140',
            spr: '126',
            def: '67',
            spd: '127'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Curries',
        seal: 21
    },
    {
        name: 'Dandoodle',
        yokaiNumber: '328',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dandoodle.png',
        description:
            "A legendary Manjimutt that, through some sort of mistake, got handsome. His smile's so soothing!",
        locations: ['Medallium.'],
        skill: {
            name: 'Popularity',
            description: 'Makes more foesbefriend you.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Handsome Grin',
            description:
                'Fully recovers HP of his allies with a truly handsome smile.',
            power: '0'
        },
        inspirit: {
            name: 'Healing Air',
            description:
                "Steadily recovers an ally's HP with the power of a dandy!",
            power: '0'
        },
        stats: {
            hp: '272',
            str: '95',
            spr: '134',
            def: '81',
            spd: '156'
        },
        tribe: 'Eerie',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Chinese foods',
        seal: 17
    },
    {
        name: 'Slurpent',
        yokaiNumber: '329',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slurpent.png',
        description:
            'Slurpent is formed from eight dragons, each with a different personality.',
        locations: ['Medallium.'],
        skill: {
            name: 'Tongue Twister',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: "Lick 'Em Good!",
            description:
                'Licks all enemies with eight tongues and then chews them up.',
            power: '32x8'
        },
        inspirit: {
            name: 'Slurperpowers',
            description:
                "The Inspirited Yo-kai's stats don't increase a lot, just a little.",
            power: '0'
        },
        stats: {
            hp: '332',
            str: '141',
            spr: '142',
            def: '86',
            spd: '122'
        },
        tribe: 'slippery',
        element: 'Drain',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Meats',
        seal: 7
    },
    {
        name: 'Sapphinyan',
        yokaiNumber: '330',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sapphinyan.png',
        description:
            'Jibanyan made of sapphire. His body is the color of a clear ocean on a beautiful summer day.',
        locations: ['Mystery Way - Crank-a-kai - Butterfly Mystery Coin'],
        skill: {
            name: 'Linked Together',
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Pure-Blue Paws',
            description:
                'Attacks all opponents with his beautiful sapphire paws.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Sapphire Power',
            description:
                "Makes all of an ally's stats shine like a glowing sapphire.",
            power: '0'
        },
        stats: {
            hp: '230',
            str: '83',
            spr: '132',
            def: '90',
            spd: '119'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Emenyan',
        yokaiNumber: '331',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/emenyan.png',
        description:
            "Jibanyan made of emerald. If you could sell him, he'd be worth more  than 100 million dollars.",
        locations: ['Mystery Way - Crank-a-kai - Butterfly Mystery Coin'],
        skill: {
            name: 'Linked Together',
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Cutie Paws',
            description:
                'Attacks all opponents with his adorable emerald paws.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Emerald Power',
            description:
                "Makes all of an ally's stats shine like a beautiful emerald.",
            power: '0'
        },
        stats: {
            hp: '221',
            str: '96',
            spr: '122',
            def: '97',
            spd: '121'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'nothing',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Rubinyan',
        yokaiNumber: '332',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rubinyan.png',
        description:
            'Jibanyan made of ruby. Fire-like light reflects off of him as he fights.',
        locations: ['Mystery Way - Crank-a-kai - Boar Mystery Coin'],
        skill: {
            name: 'Linked Together',
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Ruby Boogie',
            description: 'Attacks all opponents with shiny ruby paws.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Ruby Power',
            description: "Makes all of an ally's stats shine like a ruby.",
            power: '0'
        },
        stats: {
            hp: '248',
            str: '133',
            spr: '86',
            def: '87',
            spd: '104'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Topanyan',
        yokaiNumber: '333',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/topanyan.png',
        description:
            'Jibanyan made of topaz. Making friends with him means you have inherently good luck.',
        locations: ['Mystery Way - Crank-a-kai - Deer Mystery Coin'],
        skill: {
            name: 'Linked Together',
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Glittering Paws',
            description: 'Attacks all opponents with rich topaz paws.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Topaz Power',
            description: "Makes all of an ally's stats shine like topaz.",
            power: '0'
        },
        stats: {
            hp: '264',
            str: '100',
            spr: '65',
            def: '131',
            spd: '90'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Dianyan',
        yokaiNumber: '334',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dianyan.png',
        description:
            "Jibanyan made of diamonds. He's said to be the most lavish, timeless, and romantic Yo-kai. Do you think so? I do!",
        locations: ['Mystery Way - Crank-a-kai - Butterfly Mystery Coin'],
        skill: {
            name: 'Linked Together',
            description: 'Stat boosts for adjacentYo-kai with same Skill.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Blizzard',
            power: '80 to 120'
        },
        soultime: {
            name: 'Perfect Paws',
            description:
                'Attacks all opponents with his unbreakable diamond paws.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Diamond Power',
            description:
                "Makes all of an ally's stats shine like a pure diamond.",
            power: '0'
        },
        stats: {
            hp: '240',
            str: '99',
            spr: '93',
            def: '90',
            spd: '132'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Melonyan',
        yokaiNumber: '335',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/melonyan.png',
        description:
            "A juicy Yo-kai who's been known to fetch a high price, he thinks less of other fruit as a result.",
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Melon Masher',
            description:
                'Pummels all enemies with paws powered by pure melon juice.',
            power: '22x10'
        },
        inspirit: {
            name: 'Melon Juice',
            description: "Melon juice gradually restores an ally's HP.",
            power: '0'
        },
        stats: {
            hp: '227',
            str: '106',
            spr: '107',
            def: '102',
            spd: '104'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Oranyan',
        yokaiNumber: '336',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/oranyan.png',
        description:
            'More orange than cat, this Yo-kai would rather sleep in a bowl than knock it off the table.',
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Vitameow C',
            description: 'Heals all allies with a burst of pure vitamin C.',
            power: '150'
        },
        inspirit: {
            name: 'Juiced Up',
            description:
                'Greatly boosts STR with a burst of pure, strong vitamin C.',
            power: '0'
        },
        stats: {
            hp: '241',
            str: '108',
            spr: '85',
            def: '68',
            spd: '105'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Kiwinyan',
        yokaiNumber: '337',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kiwinyan.png',
        description:
            'This kiwi-kitty combo has a charming furry coat that can soften the blows of attacking foes.',
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Stubble Barrier',
            description: 'Maxes DEF with his tiny hairs and attracts attacks.',
            power: '0'
        },
        inspirit: {
            name: 'Fur Coat',
            description: "Greatly boosts an ally's DEF with kiwi fuzz.",
            power: '0'
        },
        stats: {
            hp: '215',
            str: '121',
            spr: '69',
            def: '94',
            spd: '103'
        },
        tribe: 'Charming',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Grapenyan',
        yokaiNumber: '338',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grapenyan.png',
        description:
            "Grapenyan's aroma drives the ladies crazy, and boy does this narcissistic Yo-kai know it!",
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Grape Buddies',
            description: 'Confuses all foes with a waft of fruity goodness.',
            power: '0'
        },
        inspirit: {
            name: 'Feeling Grape',
            description: "Delicious grape juice greatly boosts an ally's SPR.",
            power: '0'
        },
        stats: {
            hp: '211',
            str: '73',
            spr: '122',
            def: '87',
            spd: '107'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Strawbnyan',
        yokaiNumber: '339',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/strawbnyan.png',
        description:
            "This Yo-kai knows that there's no honor greater than being placed on top of a shortcake!",
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Strawberry Roar',
            description:
                'Damages all enemies with a blast of strawberry breath.',
            power: '140 to 210'
        },
        inspirit: {
            name: 'Strawburst',
            description: "Sweet strawberry juice greatly boosts an ally's SPD.",
            power: '0'
        },
        stats: {
            hp: '216',
            str: '94',
            spr: '101',
            def: '72',
            spd: '126'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Watermelnyan',
        yokaiNumber: '340',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/watermelnyan.png',
        description:
            "This juicy Yo-kai lives in fear of being sliced up and served for dessert on a hot summer's day.",
        locations: ['Scan QR Code for daily fight in Harrisville School.'],
        skill: {
            name: 'Juicy Goodness',
            description: "When defeated, allies'Soul Meters are filled."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Seed Nyattack',
            description: 'Spits a string of stinging seeds at all enemies.',
            power: '32x7'
        },
        inspirit: {
            name: "Watermaulin'",
            description: "Watermelon juice greatly boosts an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '220',
            str: '111',
            spr: '93',
            def: '132',
            spd: '101'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Robokapp',
        yokaiNumber: '341',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robokapp.png',
        description:
            'A robotic Walkappa from the future. A ring of unbreakable titanium protects his cranium.',
        locations: ['Scan QR Code for a daily fight at Green Street Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Kappa Cutter',
            description: 'Attacks all enemies with a hidden razor blade.',
            power: '30x7'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF is boosted by the steel power of robots.",
            power: '0'
        },
        stats: {
            hp: '221',
            str: '104',
            spr: '115',
            def: '110',
            spd: '112'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Sushis'
    },
    {
        name: 'Robokoma',
        yokaiNumber: '342',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robokoma.png',
        description:
            'A robotic Komasan from the future. Not only does he still find city life hard, but now he has to worry about his battery too...',
        locations: ['Scan QR Code for a daily fight at Hibarly Hills Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Koma Kannon',
            description: 'Attacks a single foe with a beam of country power!',
            power: '260'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF gets a big boost due to steely robot power.",
            power: '0'
        },
        stats: {
            hp: '217',
            str: '90',
            spr: '128',
            def: '106',
            spd: '120'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Milks'
    },
    {
        name: 'Robogramps',
        yokaiNumber: '343',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robogramps.png',
        description:
            'A robotic Hungramps from the future. Even in robotic form, his appetite is as insatiable as ever.',
        locations: ['Scan QR Code for a daily fight at Temple Park Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Eat This!',
            description: 'Attacks a single foe with a beam of advanced hunger.',
            power: '230'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF gets a big boost due to steely robot power.",
            power: '0'
        },
        stats: {
            hp: '208',
            str: '95',
            spr: '111',
            def: '104',
            spd: '101'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Robomutt',
        yokaiNumber: '344',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robomutt.png',
        description:
            "A robotic Manjimutt from the future. There's nothing even faintly human about him anymore.",
        locations: ['Scan QR Code for a daily fight at Bayside Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: "Pooch a' Splode",
            description: 'Explodes and damages all enemies and allies.',
            power: '250'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF gets a big boost due to steely robot power.",
            power: '0'
        },
        stats: {
            hp: '220',
            str: '107',
            spr: '72',
            def: '97',
            spd: '119'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Curries'
    },
    {
        name: 'Robonoko',
        yokaiNumber: '345',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonoko.png',
        description:
            'This robotic Noko from the future has the ability to blend into the background, avoiding detection.',
        locations: ['Scan QR Code for a daily fight at Dingle Falls Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Soothing Smile',
            description: "An awkward robotic smile recovers all allies' HP.",
            power: '150'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF gets a big boost due to steely robot power.",
            power: '0'
        },
        stats: {
            hp: '199',
            str: '39',
            spr: '115',
            def: '129',
            spd: '138'
        },
        tribe: 'slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Robodraggie',
        yokaiNumber: '346',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robodraggie.png',
        description:
            "A steel-bodied robot Draggie. Becoming Dragon Lord is beyond him now, but he's still quite powerful.",
        locations: ['Scan QR Code for a daily fight at Ridgemont Station.'],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Headsmack',
            power: '15 to 67'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Dragonic Burn',
            description:
                'Beams of futuristic dragon energy blast a single foe.',
            power: '230'
        },
        inspirit: {
            name: 'Steel Power',
            description:
                "The Inspirited Yo-kai's DEF gets a big boost due to steely robot power.",
            power: '0'
        },
        stats: {
            hp: '207',
            str: '69',
            spr: '127',
            def: '113',
            spd: '115'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Wondernyan',
        yokaiNumber: '347',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wondernyan.png',
        description:
            'Never without his bandanna and sword, this wandering Jibanyan has visited many distant lands.',
        locations: ['Scan QR Code for a daily fight on Mt. Middleton.'],
        skill: {
            name: 'Long Lasting',
            description: 'Good Inspirits will lastlonger.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
        },
        soultime: {
            name: 'Vagabond Blade',
            description: "Slices all foes with his beloved wanderer's sword.",
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Wanderlust',
            description:
                "The Inspirited Yo-kai's adventurous spirit rises and with it, its STR.",
            power: '0'
        },
        stats: {
            hp: '233',
            str: '120',
            spr: '95',
            def: '72',
            spd: '112'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Robonyan F',
        yokaiNumber: '348',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonyan_f.png',
        description:
            "Robonyan's latest model is leaner and meaner than ever now that all the unnecessary extras are gone.",
        locations: [
            'Buy Bony Spirits digitally for a daily fight in Springdale Elementary science lab.'
        ],
        skill: {
            name: 'Polarity',
            description: 'Builds STR as SoulMeter refills.'
        },
        attack: {
            name: 'Rocket Punch',
            power: '100 to 150'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Farewell Blast',
            description: 'Explodes and damages all enemies and allies.',
            power: '300'
        },
        inspirit: {
            name: 'System Upgrade',
            description:
                "The Inspirited Yo-kai's DEF goes up thanks to the latest firmware.",
            power: '0'
        },
        stats: {
            hp: '267',
            str: '132',
            spr: '65',
            def: '113',
            spd: '92'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Sailornyan',
        yokaiNumber: '349',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sailornyan.png',
        description:
            "Sailornyan makes the most of her charms and is a much-loved member of her ship's crew.",
        locations: [
            'Buy Fleshy Souls digitally for a daily fight at Springdale Elementary 3F.'
        ],
        skill: {
            name: 'Healer Moon',
            description: "When in back, slowlyrefills front row's HP."
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Paradise',
            power: '80 to 120'
        },
        soultime: {
            name: 'Lovely Meow',
            description:
                'The potent power of feline femininity heals all allies.',
            power: '160'
        },
        inspirit: {
            name: 'Girl Power',
            description:
                'The Inspirited Yo-kai slowly regains HP due to excess girl power.',
            power: '0'
        },
        stats: {
            hp: '228',
            str: '82',
            spr: '130',
            def: '95',
            spd: '122'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Machonyan',
        yokaiNumber: '350',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/machonyan.png',
        description:
            "Machonyan's mask hides the scars he suffered during his time as a wrestler-in-training.",
        locations: [
            'Buy Psychic Specters digitally for a daily fight at Springdale Elementary Gym.'
        ],
        skill: {
            name: 'Purrsistence',
            description: 'Retains 1 HP after aknockout blow twice.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
        },
        soultime: {
            name: 'Tiger Meow',
            description:
                'Dives off the ropes to attack so hard he hurts himself.',
            power: '210'
        },
        inspirit: {
            name: 'Tiger Power',
            description:
                'The Inspirited Yo-kai gains STR with all the power of a tiger.',
            power: '0'
        },
        stats: {
            hp: '277',
            str: '134',
            spr: '62',
            def: '86',
            spd: '105'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Hovernyan',
        yokaiNumber: '351',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hovernyan.png',
        description:
            "Despite being able to float, Hovernyan's very down to earth. His forehead scar reminds him of his fallibility.",
        locations: ['Scan QR Code for a daily fight at Past Ninja Forest.'],
        skill: {
            name: 'Acrobat',
            description: 'Counterattacks rightafter dodging enemy.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gusty Cross Paw',
            description:
                'Builds up and then hits a single foe with a stunning tackle.',
            power: '180'
        },
        inspirit: {
            name: 'Pal Power',
            description:
                'The Inspirited Yo-kai becomes a faithful friend. STR increases.',
            power: '0'
        },
        stats: {
            hp: '215',
            str: '124',
            spr: '89',
            def: '67',
            spd: '135'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Darknyan',
        yokaiNumber: '352',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/darknyan.png',
        description:
            'Hoping to gain new powers, Hovernyan has been rebooted as a dark, gritty version of his former self.',
        locations: [
            'Scan QR Code for a daily fight at Old Springdale Furnace.'
        ],
        skill: {
            name: 'Night Guard',
            description: 'Dodges all SoultimateMoves.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Night Claw',
            description:
                'Attacks a single foe from the shadows. High critical chance.',
            power: '180 to 270'
        },
        inspirit: {
            name: 'Curse of Darkness',
            description:
                "The Inspirited Yo-kai's stats all go down due to a dark curse.",
            power: '0'
        },
        stats: {
            hp: '219',
            str: '93',
            spr: '129',
            def: '98',
            spd: '123'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Jibakoma',
        yokaiNumber: '353',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jibakoma.png',
        description:
            'Someone messed up and blended Jibanyan and Komasan together. City smarts meet rustic charm!',
        locations: [
            'Scan QR Code for a daily fight at Springdale Elementary Infirmary.'
        ],
        skill: {
            name: 'Fire Play',
            description: 'Increases damage ofown Fire attacks.'
        },
        attack: {
            name: 'Punch',
            power: '15 to 67'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Swirly Nyanball',
            description:
                'Attacks all enemies with balls of energy drawn from allies.',
            power: '230'
        },
        inspirit: {
            name: 'All Shook Up',
            description:
                'The Inspirited Yo-kai is befuddled and attacks its allies.',
            power: '0'
        },
        stats: {
            hp: '219',
            str: '130',
            spr: '122',
            def: '75',
            spd: '114'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Jetnyan',
        yokaiNumber: '354',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jetnyan.png',
        description:
            "Jetnyan dreams of soaring through the skies, but that model plane on his head isn't going to help!",
        locations: [
            'Scan QR Code for a daily fight on Springdale Elementary\u2019s roof.'
        ],
        skill: {
            name: 'Apelican Is No.1',
            description: 'SPD increases when front and center.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Paws of Flying',
            description:
                'Attacks all enemies with paws powered by jumbo-jet engines.',
            power: '15x10 to 22x10'
        },
        inspirit: {
            name: 'Jet Propulsion',
            description:
                "The Inspirited Yo-kai's SPD increases with jet propulsion.",
            power: '0'
        },
        stats: {
            hp: '225',
            str: '65',
            spr: '127',
            def: '89',
            spd: '126'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Unfairy',
        yokaiNumber: '355',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/unfairy.png',
        description:
            'A Wicked boss who takes pleasure in being a pain. No wonder no one likes him!',
        locations: ['Blossom Heights - Prayer\u2019s Peak Tunnel - Night'],
        skill: {
            name: 'Grip on You',
            description: 'Amount of absorbed HPincreased.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Unfairy Kraft',
            description: 'An uncommonly unfair curse rapidly decreases foe HP.',
            power: '180'
        },
        inspirit: {
            name: 'Unfairy Power',
            description:
                'The Inspirited Yo-kai is transfixed by a worrying curse and cannot act.',
            power: '0'
        },
        stats: {
            hp: '384',
            str: '79',
            spr: '140',
            def: '198',
            spd: '123'
        },
        tribe: 'Wicked',
        element: 'Drain',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Unkaind',
        yokaiNumber: '356',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/unkaind.png',
        description:
            'A Wicked boss. She may be beautiful, but she enjoys nothing more than causing misery.',
        locations: ['Uptown - Springdale Elementary - Night'],
        skill: {
            name: 'Curse Worsener',
            description: 'Intensifies negativeInspirits on allies.'
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Unkind Kiss',
            description: 'Restores HP to all allies with her alluring aura.',
            power: '180'
        },
        inspirit: {
            name: 'Unkaind Power',
            description:
                'The Inspirited Yo-kai is transfixed by an unkind curse and loses STR.',
            power: '0'
        },
        stats: {
            hp: '353',
            str: '120',
            spr: '139',
            def: '103',
            spd: '188'
        },
        tribe: 'Wicked',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Untidy',
        yokaiNumber: '357',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/untidy.png',
        description:
            'A Wicked boss who is always all in. No Yo-kai can match Untidy for pure power. ',
        locations: ['Gourd Pond Museum - Night'],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Bone Crusher',
            power: '100 to 150'
        },
        technique: {
            name: 'Meteor',
            power: '80 to 120'
        },
        soultime: {
            name: 'Untidy Keeper',
            description:
                'Raises DEF and directs all attacks to this character.',
            power: '0'
        },
        inspirit: {
            name: 'Untidy Power',
            description:
                'The Inspirited Yo-kai is transfixed by terrible power. SPD decreases.',
            power: '0'
        },
        stats: {
            hp: '399',
            str: '202',
            spr: '64',
            def: '167',
            spd: '100'
        },
        tribe: 'Wicked',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Unpleasant',
        yokaiNumber: '358',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/unpleasant.png',
        description:
            'A Wicked boss who loves confusing people with long words and obscure nuggets of knowledge.',
        locations: ['Nocturne Hospital - 3F - Night'],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Unpleasant Kurse',
            description: 'A nasty curse causes all enemies to get confused.',
            power: '180'
        },
        inspirit: {
            name: 'Unpleasant Power',
            description:
                'The Inspirited Yo-kai is transfixed by nasty power and loses HP.',
            power: '0'
        },
        stats: {
            hp: '354',
            str: '99',
            spr: '196',
            def: '114',
            spd: '141'
        },
        tribe: 'Wicked',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Odens'
    },
    {
        name: 'Unkeen',
        yokaiNumber: '359',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/unkeen.png',
        description:
            "A Wicked boss who wields great power, he believes it's his duty to destroy all that he sees.",
        locations: ['Springdale Business Tower - 4F - Night'],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guardeffect when attacking."
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Unkeen Krack',
            description:
                'A punch capable of destroying all. Strikes one enemy.',
            power: '265 to 397'
        },
        inspirit: {
            name: 'Unkeen Power',
            description:
                'The Inspirited Yo-kai is transfixed by ruinous power. Stats go down.',
            power: '0'
        },
        stats: {
            hp: '352',
            str: '171',
            spr: '168',
            def: '104',
            spd: '160'
        },
        tribe: 'Wicked',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Curries'
    },
    {
        name: 'Grublappa',
        yokaiNumber: '360',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grublappa.png',
        description:
            'Tublappa turned Wicked! His long tongue sticks to surfaces and leaves them looking all grubby.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Lickaway',
            description: 'Purifies adjacent allies.'
        },
        attack: {
            name: 'Slurp',
            power: '50 to 110'
        },
        technique: {
            name: 'Lightning',
            power: '50 to 110'
        },
        soultime: {
            name: 'Lickety-Lick',
            description:
                'Unfurls his lengthy tongue and does damage to all foes.',
            power: '40x3'
        },
        inspirit: {
            name: 'Sick Lick',
            description:
                'The Inspirited Yo-kai is licked, feels terrible, and is unable to act.',
            power: '0'
        },
        stats: {
            hp: '266',
            str: '135',
            spr: '81',
            def: '72',
            spd: '101'
        },
        tribe: 'Wicked',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'c',
        favouriteFood: 'Odens',
        evolutionIndexes: [113]
    },
    {
        name: 'Madmunch',
        yokaiNumber: '361',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/madmunch.png',
        description:
            "Mudmunch turned Wicked! Now even more resentful than ever, he's started lashing out at hapless passersby.",
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Sludge Grudge',
            description: 'When defeated, takesrevenge on enemy.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Dirty Trick',
            description:
                'Focuses all his rage to attack and sap the STR of his foes.',
            power: '100'
        },
        inspirit: {
            name: 'Sucking Mud',
            description:
                'The Inspirited Yo-kai loses HP due to anger about a rice field.',
            power: '0'
        },
        stats: {
            hp: '291',
            str: '142',
            spr: '78',
            def: '100',
            spd: '99'
        },
        tribe: 'Wicked',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Odens',
        evolutionIndexes: [15]
    },
    {
        name: 'Badsmella',
        yokaiNumber: '362',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/badsmella.png',
        description:
            'Smogmella turned Wicked! Shrouded in a cloud of poisonous gas, she can never stop coughing.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Magic Mist',
            description: "Helps recover adjacentYo-kai's Soul Meters."
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Upward Tornado',
            description:
                "Calls a tornado strong enough to mess up the enemy's clothes.",
            power: '220'
        },
        inspirit: {
            name: 'Awful Haze',
            description:
                'The Inspirited Yo-kai inhales unpleasant smoke. HP decreases.',
            power: '0'
        },
        stats: {
            hp: '295',
            str: '63',
            spr: '160',
            def: '72',
            spd: '154'
        },
        tribe: 'Wicked',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Sweets',
        evolutionIndexes: [121]
    },
    {
        name: 'Mad Kappa',
        yokaiNumber: '363',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mad_kappa.png',
        description:
            "Faux Kappa turned Wicked! He's always trying to drag people down the river to their doom.",
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'One-Two Punch',
            power: '15x2 to 33x2'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Mega Wave',
            description:
                "Harnesses the power of a river's flow to do damage to a foe.",
            power: '170 to 255'
        },
        inspirit: {
            name: 'Wicked Tale',
            description:
                'The Inspirited Yo-kai gets scared and loses a lot of SPR.',
            power: '0'
        },
        stats: {
            hp: '268',
            str: '127',
            spr: '152',
            def: '49',
            spd: '145'
        },
        tribe: 'Wicked',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [70]
    },
    {
        name: 'Shamasol',
        yokaiNumber: '364',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shamasol.png',
        description:
            'Pallysol turned Wicked! The regrets of a discarded umbrella brought to life...',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Sun Shield',
            description: 'Returns all attackswhen guarding.'
        },
        attack: {
            name: 'Pesky Poke',
            power: '15 to 67'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Umbrella Gust',
            description:
                'Strikes all enemies with a dry gust of wind from a traditional Yo-kai.',
            power: '90'
        },
        inspirit: {
            name: 'Ruin',
            description:
                'The Inspirited Yo-kai loses DEF like a ruined, holey, old umbrella.',
            power: '0'
        },
        stats: {
            hp: '241',
            str: '123',
            spr: '81',
            def: '62',
            spd: '107'
        },
        tribe: 'Wicked',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Odens',
        evolutionIndexes: [71]
    },
    {
        name: 'Gnomine',
        yokaiNumber: '365',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gnomine.png',
        description:
            'Gnomey turned Wicked! He brings bad luck into a home, eventually ruining its owners.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Good Fortune',
            description: 'Will increase money atthe end of a battle.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Innocent World',
            description:
                "The power of good, clean fun steadily restores allies' HP.",
            power: '0'
        },
        inspirit: {
            name: 'Chin Down',
            description:
                'The Inspirited Yo-kai is feeling down and slowly loses HP.',
            power: '0'
        },
        stats: {
            hp: '251',
            str: '100',
            spr: '133',
            def: '59',
            spd: '116'
        },
        tribe: 'Wicked',
        element: 'Restoration',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Snacks',
        evolutionIndexes: [82]
    },
    {
        name: 'Defectabull',
        yokaiNumber: '366',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/defectabull.png',
        description:
            'Predictabull turned Wicked! He only predicts bad things...and smiles when people get scared.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Clairvoidance',
            description: 'Improves ability tododge enemy attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Soothing Fortune',
            description: "Good fortune causes all allies' HP to recover.",
            power: '70 to 183'
        },
        inspirit: {
            name: 'Bad Fortune',
            description:
                'The Inspirited Yo-kai gets a bad fortune and loses STR.',
            power: '0'
        },
        stats: {
            hp: '255',
            str: '133',
            spr: '103',
            def: '55',
            spd: '114'
        },
        tribe: 'Wicked',
        element: 'Restoration',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Sushis',
        evolutionIndexes: [85]
    },
    {
        name: 'Feargus',
        yokaiNumber: '367',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/feargus.png',
        description:
            'Furgus turned Wicked! This menace leaves only evil deeds in his wake and causes incurable cooties!',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Hairnet',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'Fluffy Dispel',
            description:
                'Enemies are gently relieved of all their positive effects.',
            power: '0'
        },
        inspirit: {
            name: 'Thatch',
            description:
                'The Inspirited Yo-kai grows useless fluff, and SPD goes down.',
            power: '0'
        },
        stats: {
            hp: '234',
            str: '79',
            spr: '128',
            def: '40',
            spd: '126'
        },
        tribe: 'Wicked',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [104]
    },
    {
        name: 'Scaremaiden',
        yokaiNumber: '368',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/scaremaiden.png',
        description:
            'Mermaidyn turned Wicked! She uses her lovely voice to lure ships into storms, causing them to sink.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Saintly Scales',
            description: 'Does not get Inspiritedby enemies.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Beach Wave',
            description:
                'Summons waves and sends them crashing into all enemies.',
            power: '120'
        },
        inspirit: {
            name: 'Gouge',
            description:
                'The Inspirited Yo-kai has a bit of body odor. Slowly loses HP.',
            power: '0'
        },
        stats: {
            hp: '266',
            str: '72',
            spr: '143',
            def: '45',
            spd: '131'
        },
        tribe: 'Wicked',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Sweets',
        evolutionIndexes: [117]
    },
    {
        name: 'Wrongnek',
        yokaiNumber: '369',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wrongnek.png',
        description:
            'Lady Longnek turned Wicked! She now uses her neck to ensnare hapless victims.',
        locations: ['Mystery Way - Gogo Junction'],
        skill: {
            name: 'Rubberneck',
            description: 'Does not get dealtcritical damage.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: "Twist 'n' Tangle",
            description: 'A neck-stretching strike that always hits home.',
            power: '140 to 210'
        },
        inspirit: {
            name: 'Strained Neck',
            description:
                "The Inspirited Yo-kai's neck gets stiff, and it slowly loses HP.",
            power: '0'
        },
        stats: {
            hp: '275',
            str: '136',
            spr: '126',
            def: '65',
            spd: '115'
        },
        tribe: 'Wicked',
        element: 'Restoration',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Sweets',
        evolutionIndexes: [119]
    },
    {
        name: 'Grumpus Khan',
        yokaiNumber: '370',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grumpus_khan.png',
        description:
            'Those possessed by this morose Yo-kai end up hated by everyone for their negative attitude.',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin North"],
        skill: {
            name: 'Breaking Baaad',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Bite',
            power: '15 to 67'
        },
        technique: {
            name: 'Whirlwind',
            power: '20 to 90'
        },
        soultime: {
            name: 'Awkward Silence',
            description:
                'Makes the enemy so awkward that they all get confused.',
            power: '0'
        },
        inspirit: {
            name: 'Get Your Goat',
            description:
                'The Inspirited Yo-kai attacks allies as things get a little awkward.',
            power: '0'
        },
        stats: {
            hp: '180',
            str: '105',
            spr: '62',
            def: '69',
            spd: '94'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Meats'
    },
    {
        name: 'Groupus Khan',
        yokaiNumber: '371',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/groupus_khan.png',
        description:
            'The leader of the Woolly Grumpers. His constant griping makes him monumentally unpopular.',
        locations: ['Fusion.'],
        skill: {
            name: 'Breaking Baaad',
            description: 'May attack an ally.'
        },
        attack: {
            name: 'Bowshot',
            power: '50 to 110'
        },
        technique: {
            name: 'Tornado',
            power: '50 to 110'
        },
        soultime: {
            name: 'Awkward Moment',
            description:
                'Makes the enemy so awkward that they all get confused.',
            power: '0'
        },
        inspirit: {
            name: 'Get Your Goat',
            description:
                'The Inspirited Yo-kai attacks allies as things get a little awkward.',
            power: '0'
        },
        stats: {
            hp: '219',
            str: '118',
            spr: '68',
            def: '82',
            spd: '120'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Meats'
    },
    {
        name: 'Slumberhog',
        yokaiNumber: '372',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slumberhog.png',
        description:
            'With this Yo-kai, it is best to follow a slight twist on an old saying: "Let sleeping hogs lie."',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin Northeast"],
        skill: {
            name: 'Fast Asleep',
            description: "Doesn't take an actionfor one to two turns."
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Snooze Bruiser',
            description: 'Slams hard into an enemy without even waking up.',
            power: '110 to 242'
        },
        inspirit: {
            name: 'Bedtime',
            description: "The Inspirited Yo-kai gets so sleepy, it can't move.",
            power: '0'
        },
        stats: {
            hp: '195',
            str: '99',
            spr: '92',
            def: '72',
            spd: '67'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [8]
    },
    {
        name: 'Snortlehog',
        yokaiNumber: '373',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snortlehog.png',
        description:
            "Someone made the mistake of wakin' the bacon, and he's absolutely furious about it!",
        locations: ['Fusion.'],
        skill: {
            name: 'Extreme Critical',
            description: 'Power of criticalattacks is high.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Hog Wild',
            description:
                'A battle-hardened blaze of blows that strikes all foes.',
            power: '30x5'
        },
        inspirit: {
            name: 'Festival Fun',
            description:
                'The Inspirited Yo-kai gets a STR boost due to festival enthusiasm.',
            power: '0'
        },
        stats: {
            hp: '222',
            str: '114',
            spr: '97',
            def: '107',
            spd: '71'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [8]
    },
    {
        name: 'Panja Pupil',
        yokaiNumber: '374',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/panja_pupil.png',
        description:
            'This urban Yo-kai provides those he Inspirits with a dash of charm and big-city sophistication.',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin East"],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Hit',
            power: '10 to 45'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
        },
        soultime: {
            name: "I'm a Panda!",
            description:
                'Attacks a single foe with the full power of the Panja.',
            power: '90 to 198'
        },
        inspirit: {
            name: 'Panja Power',
            description:
                'The Inspirited Yo-kai uses Panja power to increase its SPD.',
            power: '0'
        },
        stats: {
            hp: '185',
            str: '100',
            spr: '51',
            def: '65',
            spd: '107'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Sushis',
        evolutionIndexes: [60]
    },
    {
        name: 'Panja Pro',
        yokaiNumber: '375',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/panja_pro.png',
        description:
            'This evolved Panja can vanish into thin air! Sadly, his big mouth keeps giving away his position.',
        locations: ['Fusion.'],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Double Slice',
            power: '18x2 to 39x2'
        },
        technique: {
            name: 'Frost',
            power: '50 to 110'
        },
        soultime: {
            name: 'Panjitsu',
            description:
                'Attacks a single foe with the full power of the Panja.',
            power: '170 to 255'
        },
        inspirit: {
            name: 'Panja Power',
            description:
                'The Inspirited Yo-kai uses Panja power to increase its SPD.',
            power: '0'
        },
        stats: {
            hp: '215',
            str: '114',
            spr: '65',
            def: '79',
            spd: '127'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Sushis',
        evolutionIndexes: [60]
    },
    {
        name: 'Samureel',
        yokaiNumber: '376',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/samureel.png',
        description:
            'A warrior who aims to be the best in the world, he excels at giving enemies the slip.',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin Central"],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Beat',
            power: '40 to 88'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
        },
        soultime: {
            name: 'Eelergetic',
            description:
                "Employs nutritious eeliness to increase all allies' STR.",
            power: '0'
        },
        inspirit: {
            name: 'Eelectrify',
            description:
                'The Inspirited Yo-kai gets a slight stat boost due to eelectricity.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '108',
            spr: '46',
            def: '91',
            spd: '71'
        },
        tribe: 'Brave',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [9]
    },
    {
        name: 'Time Keeler',
        yokaiNumber: '377',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/time_keeler.png',
        description:
            'This evolved Samureel is so powerful that no one is willing to take him on in battle.',
        locations: ['Fusion.'],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
        },
        attack: {
            name: 'Lightning Slash',
            power: '20x3 to 44x3'
        },
        technique: {
            name: 'Rapids',
            power: '50 to 110'
        },
        soultime: {
            name: 'Bored Slice',
            description:
                'Strikes all enemies with his swords just because he can.',
            power: '31x5'
        },
        inspirit: {
            name: 'Eelectrify',
            description:
                'The Inspirited Yo-kai gets a slight stat boost due to eelectricity.',
            power: '0'
        },
        stats: {
            hp: '232',
            str: '126',
            spr: '54',
            def: '121',
            spd: '61'
        },
        tribe: 'Brave',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [9]
    },
    {
        name: 'Takoyakid',
        yokaiNumber: '378',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/takoyakid.png',
        description:
            "A demon born from a tasty takoyaki octopus ball. Don't even think of underestimating that crispy, grilled exterior.",
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin West"],
        skill: {
            name: 'Killer Comeback',
            description: 'Can immediatelycounterattack.'
        },
        attack: {
            name: 'Pointy Pokes',
            power: '12x3 to 26x3'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Octopick',
            description: 'Pokes all enemies repeatedly with his little stick.',
            power: '25x5'
        },
        inspirit: {
            name: 'Octoplus',
            description:
                'The Inspirited Yo-kai, nourished by takoyaki, slowly regains HP.',
            power: '0'
        },
        stats: {
            hp: '205',
            str: '106',
            spr: '47',
            def: '85',
            spd: '68'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Odens',
        evolutionIndexes: [113]
    },
    {
        name: 'Takoyaking',
        yokaiNumber: '379',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/takoyaking.png',
        description:
            'This spouter of squid ink is the king of the kitchen and a keen advocate for takoyaki culture.',
        locations: ['Fusion.'],
        skill: {
            name: 'Killer Comeback',
            description: 'Can immediatelycounterattack.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Octopoke',
            description: 'Pokes all enemies repeatedly with his little stick.',
            power: '23x7'
        },
        inspirit: {
            name: 'Octoplus',
            description:
                'The Inspirited Yo-kai, nourished by takoyaki, regains HP.',
            power: '0'
        },
        stats: {
            hp: '250',
            str: '119',
            spr: '50',
            def: '102',
            spd: '82'
        },
        tribe: 'slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Odens',
        evolutionIndexes: [113]
    },
    {
        name: 'Danke Sand',
        yokaiNumber: '380',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/danke_sand.png',
        description:
            'A sand dune with a mouth so big he can swallow almost any opponent. But he never forgets to say thanks!',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin Mountain"],
        skill: {
            name: 'Sandbag',
            description: 'Takes less damagefrom Earth attacks.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
        },
        soultime: {
            name: 'Thand You',
            description:
                'Attacks all enemies with energy from under the earth.',
            power: '120'
        },
        inspirit: {
            name: 'Sanks So Much',
            description:
                'The Inspirited Yo-kai is so grateful to everyone that it is not targeted.',
            power: '0'
        },
        stats: {
            hp: '209',
            str: '46',
            spr: '97',
            def: '92',
            spd: '64'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Odens',
        evolutionIndexes: [106]
    },
    {
        name: 'No Sandkyu',
        yokaiNumber: '381',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/no_sandkyu.png',
        description:
            'This evolved Yo-kai is a very fussy eater, refusing most things with a firm "No, thanks"!',
        locations: ['Fusion.'],
        skill: {
            name: 'Sandbag',
            description: 'Takes less damagefrom Earth attacks.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Rockslide',
            power: '50 to 110'
        },
        soultime: {
            name: 'No Thand You',
            description:
                'Attacks all enemies with energy from under the earth.',
            power: '160'
        },
        inspirit: {
            name: 'Refusal',
            description:
                'The Inspirited Yo-kai denies everything and cannot move.',
            power: '0'
        },
        stats: {
            hp: '245',
            str: '57',
            spr: '119',
            def: '111',
            spd: '72'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Odens',
        evolutionIndexes: [106]
    },
    {
        name: 'Sumodon',
        yokaiNumber: '382',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sumodon.png',
        description:
            'A proud sumo wrestler whose thick, noodly arms and piping-hot broth make him a real handful.',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin South"],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Slapdown',
            description:
                "A stunning slap that can cancel a foe's Soultimate Move.",
            power: '160'
        },
        inspirit: {
            name: 'Suck It Up',
            description:
                "The Inspirited Yo-kai's DEF goes up due to its love of udon noodles.",
            power: '0'
        },
        stats: {
            hp: '204',
            str: '99',
            spr: '47',
            def: '102',
            spd: '60'
        },
        tribe: 'Tough',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Sobas',
        evolutionIndexes: [44]
    },
    {
        name: 'Yokozudon',
        yokaiNumber: '383',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/yokozudon.png',
        description:
            'An evolved Sumodon who has reached the rank of yokozuna. His firm grip is the stuff of legend.',
        locations: ['Fusion.'],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Palm Strike',
            power: '60 to 90'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Smackdown',
            description:
                "A stunning slap that can cancel a foe's Soultimate Move.",
            power: '160 to 240'
        },
        inspirit: {
            name: 'Suck It Up',
            description:
                "The Inspirited Yo-kai's DEF goes way up due to awe of udon noodles.",
            power: '0'
        },
        stats: {
            hp: '235',
            str: '121',
            spr: '56',
            def: '115',
            spd: '72'
        },
        tribe: 'Tough',
        element: 'Restoration',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Sobas',
        evolutionIndexes: [44]
    },
    {
        name: 'Whateverest',
        yokaiNumber: '384',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/whateverest.png',
        description:
            "A Yo-kai who doesn't seem to have the slightest interest in anything. Not on the surface, at least...",
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin Midwest"],
        skill: {
            name: 'Eruption',
            description: 'Normal attacks becomeFire attacks.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Oh!',
            description:
                'Musters the power of immovable mountains to attack all foes.',
            power: '120'
        },
        inspirit: {
            name: 'Could Care Less',
            description:
                'The Inspirited Yo-kai loses all interest. All stats go down.',
            power: '0'
        },
        stats: {
            hp: '209',
            str: '34',
            spr: '111',
            def: '107',
            spd: '47'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Meats',
        evolutionIndexes: [45]
    },
    {
        name: 'Whatuption',
        yokaiNumber: '385',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/whatuption.png',
        description:
            "Whateverest has blown his top, and now he's overflowing with curiosity about everything!",
        locations: ['Fusion.'],
        skill: {
            name: 'Eruption',
            description: 'Normal attacks becomeFire attacks.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Gleeruption',
            description:
                'A massive blast of magma rains fire damage on all foes.',
            power: '160'
        },
        inspirit: {
            name: 'Could Care More',
            description:
                'The Inspirited Yo-kai is interested in all things, so its STR goes way up.',
            power: '0'
        },
        stats: {
            hp: '240',
            str: '39',
            spr: '129',
            def: '135',
            spd: '58'
        },
        tribe: 'Tough',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Meats',
        evolutionIndexes: [45]
    },
    {
        name: 'Happycane',
        yokaiNumber: '386',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/happycane.png',
        description:
            'This Yo-kai is sweet in every way and loves to help people overcome their troubles with a kind word or two.',
        locations: ["Mt.Wildwood - Crank-a-kai - Traveler's Coin Island"],
        skill: {
            name: 'How Sweet',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Heal',
            power: '20 to 90'
        },
        soultime: {
            name: 'Make You Happy',
            description:
                'Cheers everyone up with her cute moves, healing HP all round.',
            power: '120'
        },
        inspirit: {
            name: 'Sweet Relief',
            description:
                'The Inspirited Yo-kai slowly regains HP due to tender sugarcane.',
            power: '0'
        },
        stats: {
            hp: '182',
            str: '53',
            spr: '103',
            def: '77',
            spd: '94'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Candies',
        evolutionIndexes: [79]
    },
    {
        name: 'Starrycane',
        yokaiNumber: '387',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/starrycane.png',
        description:
            'This Yo-kai is simply bursting with excitement! No wonder she makes people see stars!',
        locations: ['Fusion.'],
        skill: {
            name: 'How Sweet',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
        },
        attack: {
            name: 'Tackle',
            power: '60 to 90'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Starry Bright',
            description:
                'Cheers everyone up with her cute moves, healing HP all round.',
            power: '120'
        },
        inspirit: {
            name: 'Sweet Relief',
            description:
                'The Inspirited Yo-kai regains HP due to tasty, tender sugarcane.',
            power: '0'
        },
        stats: {
            hp: '218',
            str: '66',
            spr: '117',
            def: '92',
            spd: '112'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Candies',
        evolutionIndexes: [79]
    },
    {
        name: 'Gutsy Bones',
        yokaiNumber: '388',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gutsy_bones.png',
        description:
            "A skeleton Yo-kai who lurks atop the school, playing with his beloved Crank-a-kai. He's always dropping medals through his body, but his crow friends are kind enough to pick them up.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Meganyan',
        yokaiNumber: '389',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/meganyan.png',
        description:
            'Years of constant eating have made Hovernyan MASSIVE...and have given him the power to make others huge too!',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: "Cap'n Crash",
        yokaiNumber: '390',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cap_n_crash.png',
        description:
            "Once a famous pirate, he sank his ship on his final voyage after reading the map upside down. He was so upset, his spirit turned into a Yo-kai. He's been assembling a monstrous pirate crew ever since.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Eyeclone',
        yokaiNumber: '391',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyeclone.png',
        description:
            "Eyeclone is the Yo-kai who causes storms to rage during the summer. It's his ambition to set a new wind-speed record, but look on the bright side\u2014the calm after he leaves is quite lovely.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Kin',
        yokaiNumber: '392',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kin.png',
        description:
            'The older of the twin sisters who have dedicated themselves to Dame Dedtime. She can turn back time and rewrite history using the power of the Time Stone given to her by her mistress.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Gin',
        yokaiNumber: '393',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gin.png',
        description:
            'The younger of the twin sisters who have dedicated themselves to Dame Dedtime. Her powers are scarily strong, but she can only use them when her big sis is nearby.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Dame Dedtime',
        yokaiNumber: '394',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dame_dedtime.png',
        description:
            "Once a fair-faced young maiden, she spent most of her life behind bars for a crime she didn't commit. Now she robs humans of their happiness, just as she was robbed of hers.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Dame Demona',
        yokaiNumber: '395',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dame_demona.png',
        description:
            "Dame Dedtime's power has spiraled out of control thanks to all the human auras she's absorbed, and now stealing time and happiness alone isn't enough\u2014she wants the entire world! Stop her!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Slimamander',
        yokaiNumber: '396',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slimamander.png',
        description:
            "A huge, snakelike Yo-kai with three big-mouthed heads and skin thicker than an elephant's. Aim for the mouth with the eye in it!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Eyedra',
        yokaiNumber: '397',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyedra.png',
        description:
            'A huge salamander Yo-kai that lives in the underworld. Those fixed by his red-eyed gaze will cower in fear before being swallowed whole.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Sproink',
        yokaiNumber: '398',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sproink.png',
        description:
            "This middle-aged Yo-kai loves hot baths so much that he sneaks into hot springs after hours. He turns red and snorts fire from his nose when he's been soaking too long.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Hoggles',
        yokaiNumber: '399',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hoggles.png',
        description:
            'Hoggles used to be a little piglet of a guy until he drank a broth made of other Yo-kai\u2014 then he got huge!',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'SV Snaggerjag',
        yokaiNumber: '400',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sv_snaggerjag.png',
        description:
            'The guardian spirit of Catfish Pond, who flies into a rage if he sees anyone mistreating his beloved lake. The fish respect him a lot for this and will do whatever he asks.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Styx Mk.VI',
        yokaiNumber: '401',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/styx_mk.vi.png',
        description:
            'The Styx Mk. VI fishes souls out of the fabled river of the underworld\u2014 no sinner can escape his net. On good fishing days, he sings sea chanties that resound throughout the inferno.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Massiface',
        yokaiNumber: '402',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/massiface.png',
        description:
            "If a giant, man-shaped shadow falls over you on a moonlit night, DO NOT turn around. Just stay still and wait until it's gone. Those who give in to fear and curiosity are never heard from again...",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Clipso',
        yokaiNumber: '403',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/clipso.png',
        description:
            "This massive being roams the earth on cloud- covered nights, searching for kids who've stayed up too late. Sleep well!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Phantasmurai',
        yokaiNumber: '404',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/phantasmurai.png',
        description:
            "This eerie suit of armor wanders the museum at night. It's not actually possessed, but the little mouse inside doesn't want you to know that.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Spooklunk',
        yokaiNumber: '405',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/spooklunk.png',
        description:
            "This suit of armor once belonged to a mighty warrior but somehow found its way to the underworld. It's now raising an army in preparation for a return to the battlefield.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Tarantutor',
        yokaiNumber: '406',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tarantutor.png',
        description:
            "A spider Yo-kai that lives in a school and spends his days looking for prime opportunities to eat students. Fortunately for the kids, he's so shy that he only comes out after they've gone home.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Dr. Maddiman',
        yokaiNumber: '407',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dr._maddiman.png',
        description:
            'This madman used to perform experiments on humans at his hospital. Even as a Yo-kai, his search for new test subjects continues...',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Dr. Nogut',
        yokaiNumber: '408',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dr._nogut.png',
        description:
            'A mad doctor Yo-kai who wants to create an ideal creature by blending parts from humans and Yo-kai alike! He even used his own guts in one experiment!',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'McKraken 1',
        yokaiNumber: '409',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mckraken.png',
        description:
            'Squiddilius McKraken was the leader of a group that once tried to take over the Yo-kai World. He can absorb energy through the holes in his hands.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'McKraken 2',
        yokaiNumber: '410',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mckraken_2.png',
        description:
            'McKraken in the form he took after absorbing the aura pervading Springdale. The aura gave him the monstrous power to control the elements and wreak havoc.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Squisker',
        yokaiNumber: '411',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/squisker.png',
        description:
            "Sent to the inferno in disgrace after falling to one of McKraken's schemes, this former politician is still bitter about his banishment.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Duwheel',
        yokaiNumber: '412',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/duwheel.png',
        description:
            "The blue, cheery side of Duwheel is always smiling. Don't upset it, though, or it'll flip upside down and turn an angry shade of red!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Chirpster',
        yokaiNumber: '413',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chirpster.png',
        description:
            "If you hear music coming from an old, abandoned mansion, this Yo-kai is probably partying there\u2014 and if you venture inside, you might just wind up dancing 'til dawn!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Wobblewok',
        yokaiNumber: '414',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wobblewok.png',
        description:
            'Many Yo-kai fought and died to keep this terrifying beast sealed in a large cauldron in the inferno. Some still dare not utter the name Wobblewok aloud.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Hans Full',
        yokaiNumber: '415',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hans_full.png',
        description:
            'An experimental Yo-kai sewn together in secret by a desperate doctor. He really would have preferred one or two legs, but all he got was more and more arms.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Eyephoon',
        yokaiNumber: '416',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyephoon.png',
        description:
            'He uses his illusion- creating powers to erect strange portals all over Springdale and then uses the delusions of the people who wander through them to create completely new worlds.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Mallice',
        yokaiNumber: '417',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mallice.png',
        description:
            'Time for a hammer! BAM BAM! BOOM BOOM! Cocky egomaniacs  beware, or this giant will take you down a notch with one swing of his mallet. He holds an insane Whack-a-Mole record.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: "Cap'n Rex",
        yokaiNumber: '418',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cap_n_rex.png',
        description:
            'The last in a long line of legendary pirates. His motto "Full steam ahead!" has sunk every ship he\'s sailed on, as well as his family legacy. He\'s known as Captain Shipwreck by sailors everywhere.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Flippa',
        yokaiNumber: '419',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flippa.png',
        description:
            "Flippa and Floppa are minor witches who serve Dame Dredful. They're closer than sisters and can join forces to unleash a killer combo.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Floppa',
        yokaiNumber: '420',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/floppa.png',
        description:
            "Flippa and Floppa are minor witches who serve Dame Dredful. They're closer than sisters and can join forces to unleash a killer combo.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Dame Dredful',
        yokaiNumber: '421',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dame_dredful.png',
        description:
            'A witch who has spent years studying black magic. Her spells are imbued with a lifetime of bitterness and are extra powerful as a result. In her spare time, she likes to morph into a tin can.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Kat Kraydel',
        yokaiNumber: '422',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kat_kraydel.png',
        description:
            "This string-pulling spirit controls the destiny of all humanity. It's up to you whether you go along with it or decide to fight fate!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Goldy Bones',
        yokaiNumber: '423',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/goldy_bones.png',
        description:
            "Gutsy Bones got lucky, winning a Crank-a-kai loaded with cash! He spent all his winnings on making his body gold and partying every day, but he's since found out that it's lonely at the top.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Glitzy Bones',
        yokaiNumber: '424',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/glitzy_bones.png',
        description:
            "Gutsy Bones got himself covered in diamonds, but he's more interested in seeing what comes out of the Crank-a-kai next than in the fact that he's now the most valuable Yo-kai in the world!",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Hans Galore',
        yokaiNumber: '425',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hans_galore.png',
        description:
            "This friendly fellow is the designated meeter and  greeter down on Mystery Way. Don't get on his bad side though, or the only thing he'll give you is a deadly handshake or five.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Retinado',
        yokaiNumber: '426',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/retinado.png',
        description:
            "A Yo-kai who enforces the speed limit on Mystery Way, where the cost of being caught speeding is your life! You'll know he's nearby when you see his camera flash.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Gargaros',
        yokaiNumber: '427',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gargaros.png',
        description:
            "A giant red Oni that appears in children's nightmares. Some say that he's the essence of fear itself. If you beat him, you'll grow as a person.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Ogralus',
        yokaiNumber: '428',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ogralus.png',
        description:
            'This two-horned terror is said to appear in the dreams of children who tell lies. The only way to escape him is to promise to be unfailingly honest for the rest of your days!',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Orcanos',
        yokaiNumber: '429',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/orcanos.png',
        description:
            'Orcanos appears in the nightmares of lazy kids and spanks them so hard with his iron bat that they wake up screaming. Now then...do you have any homework to finish?',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Snottle',
        yokaiNumber: '430',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snottle.png',
        description:
            "Snottle doesn't need a reason to pick his nose. He's got two nostrils, and he wants to know what's up there.",
        locations: [
            "Shopper's Row - Mary's Coin Laundry",
            "Shopper's Row - Mary's Coin Laundry"
        ],
        skill: {
            name: 'Mirror Body',
            description: 'Sends 1/2 of Techniquedamage back at foe.'
        },
        attack: {
            name: 'Pinpoint Pierce',
            power: '30 to 66'
        },
        technique: {
            name: 'Drain',
            power: '50 to 110'
        },
        soultime: {
            name: 'Icky Picky',
            description:
                'Confuses all enemies by striking an oddly defiant nose-picking pose.',
            power: '0'
        },
        inspirit: {
            name: '-',
            description: '-',
            power: '0'
        },
        stats: {
            hp: '258',
            str: '34',
            spr: '85',
            def: '36',
            spd: '129'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: '-',
        rank: 'd',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Moximous N',
        yokaiNumber: '431',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/moximous_n.png',
        description:
            'This champion of justice has crushed countless evils via the purity of his heart. He used to be a normal boy who just loved superheroes...a lot.',
        locations: [
            'Harrisville - Night - Gravestones',
            'Harrisville - Night - Gravestones'
        ],
        skill: {
            name: 'Born Winner',
            description: "Dodges attacks like you wouldn't believe!"
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Storm',
            power: '80 to 120'
        },
        soultime: {
            name: 'Mighty Moxie',
            description:
                'Strikes a Moxie pose, recovering HP and getting even more powerful!',
            power: '0'
        },
        inspirit: {
            name: 'Moximous',
            description:
                'The Inspirited Yo-kai becomes gutsy, and its STR is boosted.',
            power: '0'
        },
        stats: {
            hp: '241',
            str: '116',
            spr: '84',
            def: '80',
            spd: '104'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Moximous K',
        yokaiNumber: '432',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/moximous_k.png',
        description:
            'He was a boy who loved Yo-kai so much that he became one himself. That love still spreads through hundreds of Yo-kai friends.',
        locations: [
            'Harrisville - Daytime - Gravestones',
            'Harrisville - Daytime - Gravestones'
        ],
        skill: {
            name: 'Born Lucky',
            description: 'Dodges and returns every enemy attack.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Mega Moxie',
            description:
                'Reaches maximum strength while restoring HP in the moxie pose.',
            power: '0'
        },
        inspirit: {
            name: 'Moximous',
            description:
                'The inspired Yo-kai becomes gusty, and its STR is boosted.',
            power: '0'
        },
        stats: {
            hp: '231',
            str: '70',
            spr: '136',
            def: '73',
            spd: '113'
        },
        tribe: 'Brave',
        element: 'Water',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Snacks'
    },
    {
        name: 'Jibanyan S',
        yokaiNumber: '433',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jibanyan_s.png',
        description:
            "Finally Jibanyan is S-Rank! He's stronger and confident that he'll beat the truck, but...",
        locations: ['Uptown - Fish Place', 'Uptown - Fish Place'],
        skill: {
            name: 'No Guard',
            description: 'High chance to give and take critical strikes.'
        },
        attack: {
            name: 'Sharp Claws',
            power: '10x2 to 45x2'
        },
        technique: {
            name: 'Blaze',
            power: '50 to 110'
        },
        soultime: {
            name: 'Paws of Fury',
            description:
                'Punches all opponents with paws trained on moving vehicles.',
            power: '20x5'
        },
        inspirit: {
            name: 'Paralyzing Seal S',
            description:
                'Lowers enemy SPD by a lot with a Rank S paralyzing seal.',
            power: '0'
        },
        stats: {
            hp: '266',
            str: '129',
            spr: '109',
            def: '74',
            spd: '127'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Chocobars'
    },
    {
        name: 'Komasan S',
        yokaiNumber: '434',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komasan_s.png',
        description:
            "Somehow or other, Komasan became S-Rank. He's rather bewildered and wants to go back to his previous rank if possible.",
        locations: ['Nom Burger', 'Nom Burger'],
        skill: {
            name: 'Firewall',
            description: 'Draws in all Fire Techniques.'
        },
        attack: {
            name: 'Power Punch',
            power: '50 to 110'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Spirit Dance',
            description: "Summons will-o'-the- wisps to damage his enemies.",
            power: '100'
        },
        inspirit: {
            name: 'Burn S',
            description:
                'Burns a foe with Rank S fire and steadily lowers its HP.',
            power: '0'
        },
        stats: {
            hp: '271',
            str: '65',
            spr: '146',
            def: '106',
            spd: '134'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Milks'
    },
    {
        name: 'Komajiro S',
        yokaiNumber: '435',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komajiro_s.png',
        description:
            "Komajiro noticed one day that he had become S-Rank. He's taking his new rank in stride. If anything, it's made him even more optimistic.",
        locations: [
            'Downtown - Rolling Waves Park',
            'Downtown - Rolling Waves Park'
        ],
        skill: {
            name: 'Superconductor',
            description: 'Blocks damage from all Lightning skill attacks.'
        },
        attack: {
            name: 'Practiced Punch',
            power: '90 to 135'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Wild Zaps',
            description: 'Calls down lightning upon his opponents.',
            power: '85 to '
        },
        inspirit: {
            name: 'Tiger Power S',
            description:
                "Significantly raises an ally's SPD to match that of an S-Rank tiger.",
            power: '0'
        },
        stats: {
            hp: '280',
            str: '43',
            spr: '136',
            def: '133',
            spd: '131'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Milks'
    },
    {
        name: 'Darkyubi',
        yokaiNumber: '436',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/darkyubi.png',
        description:
            'Entranced by evil power, Darkyubi has a dark soul. He wants to crush all hope and send the world into despair...or does he?',
        locations: [
            "Quest - Whistory Lesson, Part 3  - Directator's All-Star Cast  - Tamer of Time",
            "Quest - Whistory Lesson, Part 3  - Directator's All-Star Cast  - Tamer of Time"
        ],
        skill: {
            name: 'Darkness Falls',
            description: 'Amount of absorbed HP increased.'
        },
        attack: {
            name: 'Tail Slap',
            power: '100 to 150'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Alpha Omega',
            description:
                'Unleashes a terrifying darkness, steadily lowering the HP of the enemy.',
            power: '200 to '
        },
        inspirit: {
            name: 'Dark Descent',
            description:
                'Fills an enemy with darkness and steadily decreases its HP.',
            power: '0'
        },
        stats: {
            hp: '272',
            str: '70',
            spr: '157',
            def: '97',
            spd: '131'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Odens'
    },
    {
        name: 'Illuminoct',
        yokaiNumber: '437',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/illuminoct.png',
        description:
            'Illuminoct has a heart full of pure, golden justice that shines as brightly as the sun. That light shines on and obliterates all evil.',
        locations: ['Happy-Go-Lucky Express', 'Happy-Go-Lucky Express'],
        skill: {
            name: 'Lord of Light',
            description: "All adjecent Yo-kai's HP is slowly refilled."
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Voltage',
            power: '80 to 120'
        },
        soultime: {
            name: 'Dragon Flash',
            description:
                'Repeatedly bites his foes with his aura- filled dragon scarf. ',
            power: '24x10 to '
        },
        inspirit: {
            name: 'Light of Life',
            description:
                'Wraps an ally in holy light, steadily restoring its HP.',
            power: '0'
        },
        stats: {
            hp: '268',
            str: '144',
            spr: '66',
            def: '115',
            spd: '133'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Gargaros',
        yokaiNumber: '438',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gargaros.png',
        description:
            'Gargaros, a symbol of fear itself, swoops in from Terror Time swinging his powerful club and smashing weak Yo-kai who get in his way.',
        locations: ['Bony Spirits Way', 'Bony Spirits Way'],
        skill: {
            name: 'Guard Break',
            description: "Ignore foe's guard effect when attacking."
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Incinerate',
            power: '80 to 120'
        },
        soultime: {
            name: 'Nightmare Beat',
            description: '-',
            power: '300 to '
        },
        inspirit: {
            name: 'Power of Terror',
            description: 'Gives an ally the insane DEF of an Oni.',
            power: '0'
        },
        stats: {
            hp: '431',
            str: '195',
            spr: '83',
            def: '107',
            spd: '144'
        },
        tribe: 'Tough',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Ogralus',
        yokaiNumber: '439',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ogralus.png',
        description:
            'He prowls Terror Time, smashing and bashing his enemies. He befriends those with the strength and purity of heart to escape Terror Time.',
        locations: ['Fleshy Souls', 'Fleshy Souls'],
        skill: {
            name: 'Water Play',
            description: 'Increased damage of own Water attacks.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Waterfall',
            power: '80 to 120'
        },
        soultime: {
            name: 'Nightmare Beat',
            description: '-',
            power: '400 to '
        },
        inspirit: {
            name: 'Power of Terror',
            description: 'Gives an ally the insane DEF of an Oni.',
            power: '0'
        },
        stats: {
            hp: '420',
            str: '110',
            spr: '177',
            def: '115',
            spd: '140'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Orcanos',
        yokaiNumber: '440',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/orcanos.png',
        description:
            "The giant horns mean he's an Oni of supreme rank. The characteristic Oni pattern stands out when his blood is up in battle.",
        locations: ['Gold-Gleaming Hwy.', 'Gold-Gleaming Hwy.'],
        skill: {
            name: 'Thick Crust',
            description: 'DEF increases when front and center.'
        },
        attack: {
            name: 'Clobber',
            power: '75 to 112'
        },
        technique: {
            name: 'Reaper',
            power: '80 to 120'
        },
        soultime: {
            name: 'Nightmare Beat',
            description: '-',
            power: '500 to '
        },
        inspirit: {
            name: 'Power of Terror',
            description: 'Gives an ally the insane DEF of an Oni.',
            power: '0'
        },
        stats: {
            hp: '446',
            str: '171',
            spr: '77',
            def: '183',
            spd: '94'
        },
        tribe: 'Tough',
        element: 'Drain',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Rubeus J',
        yokaiNumber: '441',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rubeus_j.png',
        description:
            'Feared as the strongest Yo-kai, this monster leaves a trail of defeated enemies in his wake. Accompanied by fiendish minions, Rubeus J can level a battlefield with his destructive power.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Hardy Hound',
        yokaiNumber: '442',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hardy_hound.png',
        description:
            'The majestic white body hides a savage soul. His backpack is full of explosive skulls that are reserved for his foes, and he devours the souls of those he defeats.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Hinozall',
        yokaiNumber: '443',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hinozall.png',
        description:
            'A godlike Yo-kai of infinite creativity, he can make anything imaginable and has been known to create many fantastic worlds.',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Bronzlow',
        yokaiNumber: '444',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bronzlow_.png',
        description:
            "He's the younger brother of Dame Dedtime's associates, Kin and Gin. He admires his sisters and tries to help them, but he can't always keep up with them and often gets in their way.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Teastroyer',
        yokaiNumber: '445',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/teastroyer.png',
        description:
            'This huge raccoon dog uses his shape-shifting powers to become whatever he wants to become. He wears a huge tea kettle that can fuse two things into one. It can even fuse two Yo-kai together!',
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Infinipea',
        yokaiNumber: '446',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/infinipea.png',
        description:
            "He's spent several hundred years spinning and spinning ans spinning and...history has kind of passed him by. Civilizations rise and fall, technology marches on, and Infinipea spins. But lately, he's into meeting new people.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Headasteam',
        yokaiNumber: '447',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/headasteam.png',
        description:
            "He's been at the controls so long, he's become one with the Hexpress's engine room. He eats coal to keep the train running, but he overheats a little too easily. Where will this runaway train stop?",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    },
    {
        name: 'Kabuking',
        yokaiNumber: '448',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kabuking.png',
        description:
            "The owner of Gera Gera Resort, he's also a superstar in the world of Kaibuki theater. He's friendly in person, but watch out for his stage persona. He's quite the fierce leading man.",
        locations: [],
        skill: {},
        attack: {},
        technique: {},
        soultime: {},
        inspirit: {},
        stats: {},
        tribe: 'Boss',
        element: '',
        weakness: '',
        rank: '',
        favouriteFood: ''
    }
];

export default yokais;
