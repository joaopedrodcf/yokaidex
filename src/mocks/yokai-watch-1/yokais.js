const yokais = [
    {
        name: 'Pandle',
        yokaiNumber: '001',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pandle.png',
        description:
            'A careless Yo-kai who enters battle wearing only a loincloth...and a pan...on his head. Try not to take after him so much.',
        locations: [
            'Blossom Heights - Secret Byway',
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Objects'
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
            power: '20x5'
        },
        inspirit: {
            name: 'Careless',
            description: 'Makes a foe careless and decreases its DEF.',
            power: '0'
        },
        stats: {
            hp: '29',
            str: '27',
            spr: '19',
            def: '17',
            spd: '26'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [0],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Undy',
        yokaiNumber: '002',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/undy.png',
        description:
            "Having abandoned the pan, Undy is pretty much bare to the world. That aside, you won't ever see him wince or bruise.",
        locations: [
            "Shopper's Row - Tranquility Apts. - B-102",
            "Shopper's Row - Tranquility Apts. - C-301",
            'Evolve Pandle at Level 18.'
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
            name: 'Fire',
            power: '20 to 90'
        },
        soultime: {
            name: 'Toothpick Rainfall',
            description: 'Pokes his foes very hard with his beloved toothpick.',
            power: '23x7'
        },
        inspirit: {
            name: 'Defenseless',
            description:
                'Makes a foe defenseless, which... lowers its DEF. Duh!',
            power: '0'
        },
        stats: {
            hp: '36',
            str: '33',
            spr: '21',
            def: '18',
            spd: '30'
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
        locations: ['Blossom Heights - Objects'],
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
            power: '140'
        },
        inspirit: {
            name: 'Gutsiness',
            description: "Raises an ally's SPD by making it gutsy!",
            power: '0'
        },
        stats: {
            hp: '43',
            str: '36',
            spr: '24',
            def: '18',
            spd: '30'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        type: ['rare']
    },
    {
        name: 'Cutta-nah',
        yokaiNumber: '004',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cutta-nah.png',
        description:
            "A lazy katana Yo-kai who can drain all of your motivation. He's strangely sharp for being so lazy.",
        locations: ['Mt. Wildwood - Abandoned Tunnel West'],
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
            power: '15x5'
        },
        inspirit: {
            name: 'Aimless',
            description:
                'Makes Yo-kai lose their motivation and Loaf around more.',
            power: '0'
        },
        stats: {
            hp: '27',
            str: '26',
            spr: '20',
            def: '23',
            spd: '21'
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
            'Downtown Springdale - Construction Site',
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
            power: '22x7'
        },
        inspirit: {
            name: 'Laziness',
            description: 'Makes enemies so lazy that it saps their STR.',
            power: '0'
        },
        stats: {
            hp: '34',
            str: '28',
            spr: '22',
            def: '28',
            spd: '26'
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
        locations: ['Downtown Springdale - Construction Site'],
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
            name: 'Resigned Rush',
            description:
                'Rushes into battle and spins around while slicing up his foes.',
            power: '140'
        },
        inspirit: {
            name: 'Laziness',
            description: 'Makes enemies so lazy that it saps their STR.',
            power: '0'
        },
        stats: {
            hp: '38',
            str: '31',
            spr: '24',
            def: '29',
            spd: '30'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Juices',
        type: ['rare'],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Mochismo',
        yokaiNumber: '007',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mochismo.png',
        description:
            "He's cute most of the time, but when he's mad, his body cracks and his manly face pops out.",
        locations: [
            'Uptown Springdale - Objects',
            'Blossom Heights - Secret Byway'
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
            hp: '34',
            str: '30',
            spr: '17',
            def: '25',
            spd: '21'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [7],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Minochi',
        yokaiNumber: '008',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/minochi.png',
        description:
            "When he's in love, he gets overly protective about his partner. He can make you a very jealous person.",
        locations: ['Downtown Springdale - Springdale Business Tower'],
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
            hp: '37',
            str: '32',
            spr: '13',
            def: '28',
            spd: '17'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Helmsman',
        yokaiNumber: '009',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/helmsman.png',
        description:
            'A floating helmet that was worn by a famous military commander. It spends its days searching for its body\u2014a good use of time.',
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Trees',
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
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
            hp: '33',
            str: '29',
            spr: '17',
            def: '30',
            spd: '19'
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
        yokaiNumber: '010',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reuknight.png',
        description:
            "Helmsman and Armsman reunited. He now aspires to do what he couldn't do when he was alive\u2014 unify the country.",
        locations: ['Yo-kai World - Hooligan Road', 'Fusion.'],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
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
            hp: '36',
            str: '35',
            spr: '23',
            def: '30',
            spd: '33'
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
        yokaiNumber: '011',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/corptain.png',
        description:
            "A popular leader when he was alive, Corptain leads an army of souls even after death. Now that's charisma! ",
        locations: ['Old Mansion - Side House'],
        skill: {
            name: 'Spirit Guard',
            description: 'No elemental-weaknessdamage if guarding.'
        },
        attack: {
            name: 'Stab Storm',
            power: '10x5 to 22x5'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
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
            hp: '36',
            str: '38',
            spr: '27',
            def: '32',
            spd: '38'
        },
        tribe: 'Brave',
        element: 'Drain',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Vegetables',
        type: ['rare']
    },
    {
        name: 'Blazion',
        yokaiNumber: '012',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blazion.png',
        description:
            'The king of beasts with a mane of fire! This hot- blooded Yo-kai fills folks with fiery enthusiasm.',
        locations: [
            'Downtown Springdale - Construction Site',
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
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
            hp: '30',
            str: '28',
            spr: '27',
            def: '20',
            spd: '29'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Meats'
    },
    {
        name: 'Quaken',
        yokaiNumber: '013',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/quaken.png',
        description:
            'Every step Quaken takes shakes the place...and some of those vibrations can even move your heart. Awwwwww!',
        locations: ['Uptown Springdale - Elementary School'],
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
            name: 'Clumsiness',
            description: 'Makes a foe clumsy. This decreases its SPR.',
            power: '0'
        },
        stats: {
            hp: '30',
            str: '32',
            spr: '28',
            def: '23',
            spd: '29'
        },
        tribe: 'Brave',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Meats'
    },
    {
        name: 'Siro',
        yokaiNumber: '014',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/siro.png',
        description:
            'Siro brings out the best in those he Inspirits. They become shining lights for the future.',
        locations: ['Uptown Springdale - Bushes'],
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
            name: "Lion's Pride",
            description:
                'The Inspirited Yo-kai will really cheer up, and DEF will increase.',
            power: '0'
        },
        stats: {
            hp: '31',
            str: '35',
            spr: '31',
            def: '29',
            spd: '38'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Meats',
        type: ['rare'],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Chansin',
        yokaiNumber: '015',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chansin.png',
        description:
            'Once a proud warrior, Chansin threw it all away by gambling... Now his best odds are to retreat.',
        locations: ["Shopper's Row - Bushes", "Shopper's Row - Empty flats"],
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
            name: "Heart's Roar",
            description: "Raises an ally's SPD with his roaring aura!",
            power: '0'
        },
        stats: {
            hp: '31',
            str: '29',
            spr: '24',
            def: '21',
            spd: '27'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [19, 20, 21],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Sheen',
        yokaiNumber: '016',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sheen.png',
        description:
            'A Yo-kai swordsman who returned to the way of the sword when a legendary blade reignited his spirit.',
        locations: ['Fusion.'],
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
            name: 'Bad Bet',
            description:
                'Makes a foe stop worrying about losing and lowers its DEF.',
            power: '0'
        },
        stats: {
            hp: '37',
            str: '38',
            spr: '23',
            def: '22',
            spd: '37'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [19],
        crankakai: [
            {
                name: 'Five-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Snee',
        yokaiNumber: '017',
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
            name: 'Fine Weapon',
            description: "The masterwork blade Masamune boosts an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '33',
            str: '36',
            spr: '29',
            def: '23',
            spd: '36'
        },
        tribe: 'Brave',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [20]
    },
    {
        name: 'Gleam',
        yokaiNumber: '018',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gleam.png',
        description:
            'A holy swordsman with a divine blade that cuts through evil like cheddar cheese. Could he bring about tasty world peace?',
        locations: ['Fusion.'],
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
            name: 'Cursed Sword',
            description:
                "Curses a foe with the blade Muramasa and drops the foe's SPD.",
            power: '0'
        },
        stats: {
            hp: '33',
            str: '44',
            spr: '25',
            def: '27',
            spd: '42'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [21],
        type: ['rare']
    },
    {
        name: 'Benkei',
        yokaiNumber: '019',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/benkei.png',
        description:
            'Hiding 999 weapons from fallen foes in his stomach, Benkei can call any one of them out in a moment of need.',
        locations: ['Breezy Hills - Objects'],
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
            name: 'Holy Sword',
            description: "The holy sword Kusanagi boosts an ally's STR.",
            power: '0'
        },
        stats: {
            hp: '35',
            str: '39',
            spr: '18',
            def: '26',
            spd: '30'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Chinese foods',
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'B3-NK1',
        yokaiNumber: '020',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/b3-nk1.png',
        description:
            "A Yo-kai whose body is half machine. It could very well be the world's first cyborg Yo-kai.",
        locations: ['Breezy Hills - Gourd Pond Museum'],
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
            hp: '33',
            str: '36',
            spr: '22',
            def: '23',
            spd: '34'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Sushiyama',
        yokaiNumber: '021',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sushiyama.png',
        description:
            'A Yo-kai who desperately wants to be Japanese. He sleeps on a futon and eats only sushi. I think he might be doing it wrong...',
        locations: [
            'Uptown Springdale - Elementary School',
            "Shopper's Row - Objects",
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle'
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
            name: 'Hail',
            power: '20 to 90'
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
            hp: '34',
            str: '33',
            spr: '22',
            def: '25',
            spd: '30'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        type: ['rare'],
        crankakai: [
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: 'Five-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Kapunki',
        yokaiNumber: '022',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kapunki.png',
        description:
            'A punk Yo-kai who wears kabuki-style makeup. He dreams of rocking the socks and faces off his fans all across the globe.',
        locations: ['Uptown Springdale - Elementary School'],
        skill: {
            name: 'The Stand',
            description: 'Will keep 1 HP after aknockout blow once.'
        },
        attack: {
            name: 'Headbuster',
            power: '130 to 195'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
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
            hp: '34',
            str: '33',
            spr: '23',
            def: '25',
            spd: '37'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Beetler',
        yokaiNumber: '023',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beetler.png',
        description:
            'Beetler is a young battler who fights with his horns and his fists. He trains with his rival, Rhinoggin.',
        locations: ['Mt. Wildwood - Trees'],
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
            hp: '33',
            str: '30',
            spr: '23',
            def: '29',
            spd: '32'
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
        yokaiNumber: '024',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beetall.png',
        description:
            'If Beetler bashes baddies in a bevy of brutal battles, the result will be a big- bodied Beetall.',
        locations: ['Uptown Springdale - Trees', 'Fusion.'],
        skill: {
            name: 'Intimidation',
            description: 'No Yo-kai will Loafaround.'
        },
        attack: {
            name: 'Meteor Punch',
            power: '20x3 to 30x3'
        },
        technique: {
            name: 'Hail',
            power: '20 to 90'
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
            hp: '39',
            str: '39',
            spr: '24',
            def: '28',
            spd: '32'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [22]
    },
    {
        name: 'Cruncha',
        yokaiNumber: '025',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cruncha.png',
        description:
            'A stag-beetle Yo-kai that represents the apex of the thorax. He can grant you incredible strength.',
        locations: [],
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
            hp: '43',
            str: '40',
            spr: '25',
            def: '31',
            spd: '35'
        },
        tribe: 'Brave',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Vegetables',
        type: ['rare'],
        crankakai: [
            {
                name: 'Red Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Zerberker',
        yokaiNumber: '026',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/zerberker.png',
        description:
            "Legend has it that this Yo-kai leveled an entire village with one tantrum. You'll explode with rage if he's around.",
        locations: ['Infinite Inferno - 7-8th Circle'],
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
            hp: '36',
            str: '38',
            spr: '21',
            def: '31',
            spd: '40'
        },
        tribe: 'Brave',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Snartle',
        yokaiNumber: '027',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snartle.png',
        description:
            'This Yo-kai visits homes asking, "Any brats here?"  It\'s a way of scaring kids into behaving well. Kind of like a reverse Santa.',
        locations: ['Pedestrian crossing '],
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
            hp: '37',
            str: '41',
            spr: '24',
            def: '33',
            spd: '39'
        },
        tribe: 'Brave',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Meats',
        type: ['rare']
    },
    {
        name: 'Snotsolong',
        yokaiNumber: '028',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snotsolong.png',
        description:
            "A crane Yo-kai with an insanely runny nose. It's scared its drippings will make it too heavy to fly. ...I'd be scared too.",
        locations: [
            'Uptown Springdale - Water',
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Water'
        ],
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
            hp: '24',
            str: '18',
            spr: '26',
            def: '24',
            spd: '27'
        },
        tribe: 'Mysterious',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'e',
        favouriteFood: 'Seafoods',
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            }
        ]
    },
    {
        name: 'Duchoo',
        yokaiNumber: '029',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/duchoo.png',
        description:
            "Ever felt like you might be sick, but you're not totally sure if you really are? Blame Duchoo.",
        locations: ['Breezy Hills - Water'],
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
            hp: '25',
            str: '19',
            spr: '27',
            def: '24',
            spd: '27'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Wazzat',
        yokaiNumber: '030',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wazzat.png',
        description:
            'It fits snugly on your head before it devours your memories. It can be nice to forget the bad ones... or to just wear a hat.',
        locations: ['Downtown Springdale - Trees'],
        skill: {
            name: 'Fire Watchout',
            description: 'Takes less damagefrom Fire attacks.'
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
            hp: '23',
            str: '15',
            spr: '28',
            def: '16',
            spd: '37'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Candies'
    },
    {
        name: 'Dummkap',
        yokaiNumber: '031',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dummkap.png',
        description:
            'This hat Yo-kai can make geniuses into dreamy fools. A foolish life can be more fun...but would you even realize if it were?!',
        locations: ['Downtown Springdale - Trees'],
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
            hp: '22',
            str: '19',
            spr: '21',
            def: '20',
            spd: '35'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Candies'
    },
    {
        name: "D'wanna",
        yokaiNumber: '032',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/d_wanna.png',
        description:
            "D'wanna's chants will weaken your resolve! This can make you give up on...y'know, stuff and whatever.",
        locations: ['Blossom Heights - Old Mansion Attic'],
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
            hp: '26',
            str: '18',
            spr: '27',
            def: '20',
            spd: '25'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [23]
    },
    {
        name: "N'more",
        yokaiNumber: '033',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/n_more.png',
        description:
            "N'more gets bored of things quickly. Some say his cool brows and beard grew from his boredom with shaving.",
        locations: [
            'Blossom Heights - Bushes',
            "Shopper's Row - Tranquility Apts. - B-301",
            'Evolve D\u2019wanna at Level 15.'
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
            name: 'Restore',
            power: '50 to 110'
        },
        soultime: {
            name: 'Croaking Prayer',
            description: 'Hinders foes with a chanted curse.',
            power: '30'
        },
        inspirit: {
            name: 'Full of Sighs',
            description:
                "Lowers an opponent's STR significantly and makes it sigh constantly.",
            power: '0'
        },
        stats: {
            hp: '32',
            str: '22',
            spr: '34',
            def: '20',
            spd: '29'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [23]
    },
    {
        name: "Q'wit",
        yokaiNumber: '034',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/q_wit.png',
        description:
            "He gives up on everything he tries and won't do the same thing twice. He has a lot of experience at doing things once.",
        locations: ["Shopper's Row - Tranquility Apts. - B-301"],
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
            hp: '34',
            str: '23',
            spr: '36',
            def: '22',
            spd: '29'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        type: ['rare'],
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            }
        ]
    },
    {
        name: 'Lafalotta',
        yokaiNumber: '035',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lafalotta.png',
        description:
            'This Yo-kai sucks the laughter and fun out of a  situation and keeps all the laughs for herself.',
        locations: ['Blossom Heights - Trees'],
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
            hp: '26',
            str: '20',
            spr: '29',
            def: '24',
            spd: '28'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Blips',
        yokaiNumber: '036',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blips.png',
        description:
            'If you see someone get out of a pool with blue lips, they might just be Inspirited by Blips...',
        locations: ['Blossom Heights - Trees'],
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
            hp: '31',
            str: '22',
            spr: '31',
            def: '25',
            spd: '30'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Tattletell',
        yokaiNumber: '037',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tattletell.png',
        description:
            "When Tattletell Inspirits you, you'll feel inspired to TELL, TELL, TELL all of your secrets. ",
        locations: [
            'Blossom Heights - Old Mansion Attic',
            'Blossom Heights - Tucked Away Lot, Secret Byway & Hidden Side Street',
            'Fusion.'
        ],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
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
            hp: '27',
            str: '21',
            spr: '31',
            def: '22',
            spd: '28'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Ramens',
        evolutionIndexes: [28]
    },
    {
        name: 'Tattlecast',
        yokaiNumber: '038',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tattlecast.png',
        description:
            "She uses her massive speakers to broadcast scandalous secrets to the whole city. Hope they aren't yours!",
        locations: ['Fusion.'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
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
            hp: '30',
            str: '22',
            spr: '39',
            def: '24',
            spd: '34'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Ramens',
        evolutionIndexes: [28]
    },
    {
        name: 'Skranny',
        yokaiNumber: '039',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skranny.png',
        description:
            'Only Tattletells who discover their love of heavy-metal music can don the skull makeup and become a Skranny.',
        locations: ["Shopper's Row - Trees", 'Statue Yo-kai Spots.'],
        skill: {
            name: 'Caring',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
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
            hp: '30',
            str: '22',
            spr: '32',
            def: '25',
            spd: '33'
        },
        tribe: 'Mysterious',
        element: 'Restoration',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Ramens',
        type: ['rare']
    },
    {
        name: 'Cupistol',
        yokaiNumber: '040',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cupistol.png',
        description:
            "This debonair Yo-kai is quite a hit with the ladies. Anyone he shoots will love you. He's just the greatest! *swoon*",
        locations: [
            'Downtown Springdale - Springdale Business Tower',
            'Downtown Springdale - Trees'
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
            hp: '26',
            str: '20',
            spr: '30',
            def: '22',
            spd: '31'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Breads',
        evolutionIndexes: [30, 31]
    },
    {
        name: 'Casanuva',
        yokaiNumber: '041',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/casanuva.png',
        description:
            'This narcissist makes every lady he sees fall in love with him, regardless of appearance.',
        locations: ["Shopper's Row - Trees", 'Fusion.'],
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
            hp: '33',
            str: '25',
            spr: '39',
            def: '26',
            spd: '35'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Breads',
        evolutionIndexes: [30]
    },
    {
        name: 'Casanono',
        yokaiNumber: '042',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/casanono.png',
        description:
            "Casanuva's opposite. He just can't get a date no matter what! He'll make you unpopular too. Best to give him some space.",
        locations: ['Downtown Springdale - Objects'],
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
            hp: '31',
            str: '23',
            spr: '43',
            def: '24',
            spd: '37'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Breads',
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            }
        ]
    },
    {
        name: 'Signibble',
        yokaiNumber: '043',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/signibble.png',
        description:
            "A mischievous Yo-kai that snacks on radio waves in the air. You'll lose a few bars on your phone when he's around.",
        locations: [
            'Blossom Heights - Telephone poles',
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            "Downtown Springdale - Behind Frostia's place",
            "Shopper's Row - Telephone poles"
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
            hp: '24',
            str: '24',
            spr: '28',
            def: '22',
            spd: '26'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [34],
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Signiton',
        yokaiNumber: '044',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/signiton.png',
        description:
            'Signiton is almost a deity for those in desperate need of a wireless signal. He can boost your reception if you ask.',
        locations: [
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle',
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
            hp: '30',
            str: '29',
            spr: '36',
            def: '29',
            spd: '28'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [34],
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            }
        ]
    },
    {
        name: 'Statiking',
        yokaiNumber: '045',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/statiking.png',
        description:
            "He's pretty lazy, but if he got motivated, his power would fix a ton of the world's energy problems.",
        locations: ['Infinite Inferno - 2nd Circle'],
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
            hp: '33',
            str: '34',
            spr: '41',
            def: '32',
            spd: '34'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Rice Balls',
        type: ['rare']
    },
    {
        name: 'Mirapo',
        yokaiNumber: '046',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mirapo.png',
        description:
            'An ancient mirror that embodied a soul and became a Yo-kai. It can make a portal between two mirrors.',
        locations: ['Breezy Hills - Trees'],
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
            hp: '30',
            str: '20',
            spr: '34',
            def: '30',
            spd: '25'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Mircle',
        yokaiNumber: '047',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mircle.png',
        description:
            'Mircle fills the space behind mirrors with evil by renting it out to bad Yo-kai...at a wickedly high rate, naturally.',
        locations: ["Shopper's Row - Trees", 'Breezy Hills - Trees'],
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
            hp: '31',
            str: '23',
            spr: '38',
            def: '38',
            spd: '24'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Illoo',
        yokaiNumber: '048',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/illoo.png',
        description:
            'A caring teacher who uses illusions to simplify his lessons. He can make complex topics seem pretty accessible.',
        locations: ['Breezy Hills - Objects'],
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
            hp: '27',
            str: '19',
            spr: '36',
            def: '23',
            spd: '29'
        },
        tribe: 'Mysterious',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Elloo',
        yokaiNumber: '049',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/elloo.png',
        description:
            "A friendly old Yo-kai who can dissipate into a haze. He's Illoo's brother.",
        locations: [
            'Downtown Springdale - Construction Site',
            'Downtown Springdale - Objects'
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
            hp: '24',
            str: '17',
            spr: '41',
            def: '20',
            spd: '32'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Alloo',
        yokaiNumber: '050',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/alloo.png',
        description:
            "He wanders the world without a goal. It's an absolute miracle if the three brothers Illoo, Elloo, and Alloo all meet up. ",
        locations: ["Shopper's Row - Trees"],
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
            hp: '29',
            str: '21',
            spr: '38',
            def: '26',
            spd: '34'
        },
        tribe: 'Mysterious',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chinese foods',
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            }
        ]
    },
    {
        name: 'Espy',
        yokaiNumber: '051',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/espy.png',
        description:
            "Espy gets a kick out of reading people's minds. It's totally not fair that no one can read hers...and now she knows that too.",
        locations: ['Breezy Hills - Gourd Pond Museum'],
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
            hp: '31',
            str: '25',
            spr: '32',
            def: '24',
            spd: '32'
        },
        tribe: 'Mysterious',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Vegetables',
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Infour',
        yokaiNumber: '052',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/infour.png',
        description:
            "Her four eyes can see a person's age, name, gender, and birthday, but  she can't read minds. It's still kinda creepy, though.",
        locations: [
            'Uptown Springdale - Elementary School',
            'Infinite Inferno - 7-8th Circle'
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
            hp: '30',
            str: '22',
            spr: '36',
            def: '21',
            spd: '33'
        },
        tribe: 'Mysterious',
        element: 'Drain',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Tengu',
        yokaiNumber: '053',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tengu.png',
        description:
            'A popular tengu who controls the power of wind. Apparently all that power comes from his number-one fan.',
        locations: ['Quest - Take Out Tengu!'],
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
            hp: '29',
            str: '27',
            spr: '27',
            def: '26',
            spd: '22'
        },
        tribe: 'Mysterious',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Flengu',
        yokaiNumber: '054',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flengu.png',
        description:
            'A tengu with hair the color of fire. Legend says it causes a drought when humanity needs to be taught a lesson.',
        locations: ['Blossom Heights - Trees'],
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
            hp: '34',
            str: '30',
            spr: '33',
            def: '26',
            spd: '19'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Candies',
        type: ['rare']
    },
    {
        name: 'Kyubi',
        yokaiNumber: '055',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kyubi.png',
        description:
            'An elite nine-tailed-fox Yo-kai. He can easily produce power greater than a volcanic eruption.',
        locations: ['Quest - The Legendary Kyubi'],
        skill: {
            name: 'Sense of Smell',
            description: 'Never misses attacks.'
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
            hp: '32',
            str: '24',
            spr: '44',
            def: '31',
            spd: '38'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Frostail',
        yokaiNumber: '056',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/frostail.png',
        description:
            "Even a single hair of this rare Yo-kai's silvery coat can bring generations of good luck!",
        locations: [],
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
            hp: '34',
            str: '26',
            spr: '47',
            def: '30',
            spd: '37'
        },
        tribe: 'Mysterious',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Seafoods',
        type: ['rare'],
        crankakai: [
            {
                name: 'Yellow Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Dulluma',
        yokaiNumber: '057',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dulluma.png',
        description:
            'He looks like a lucky daruma, but his real body is inside the shell. Dull and sluggish, he can really slow you down.',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Uptown Springdale - Desolate Lane',
            'Uptown Springdale - Objects'
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
            hp: '30',
            str: '26',
            spr: '18',
            def: '26',
            spd: '17'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Breads',
        evolutionIndexes: [7]
    },
    {
        name: 'Darumacho',
        yokaiNumber: '058',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/darumacho.png',
        description:
            'Now a truly macho Yo-kai, this one worked tirelessly in a mountain retreat to train away his dullness.',
        locations: ['Blossom Heights - Objects', 'Fusion.'],
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
            hp: '41',
            str: '30',
            spr: '20',
            def: '35',
            spd: '23'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Breads',
        evolutionIndexes: [7],
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Goruma',
        yokaiNumber: '059',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/goruma.png',
        description:
            "Darumacho wasn't happy until he had the body and strength of a gorilla. Goruma can crush cars  like marshmallows. ",
        locations: ['Uptown Springdale - Elementary School'],
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
            hp: '41',
            str: '37',
            spr: '19',
            def: '33',
            spd: '19'
        },
        tribe: 'Tough',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Breads'
    },
    {
        name: 'Noway',
        yokaiNumber: '060',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/noway.png',
        description:
            'He rejects everything with a "no way!" Becoming a brain-surgeon astronaut is easier than getting past him.',
        locations: ['Uptown Springdale - Bushes'],
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
            hp: '27',
            str: '24',
            spr: '18',
            def: '28',
            spd: '20'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [39],
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Impass',
        yokaiNumber: '061',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/impass.png',
        description:
            "You...you just can't get by Impass. Why?! What's his  motivation?! What's the story behind him?! Nobody knows...",
        locations: [
            'Yo-kai World - Hooligan Road',
            'Evolve Noway at Level 29.'
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
            hp: '38',
            str: '29',
            spr: '21',
            def: '44',
            spd: '27'
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
        yokaiNumber: '062',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/walldin.png',
        description:
            'Formerly a sturdy castle wall, the fall of the family he once protected turned him into a Yo-kai.',
        locations: ['Yo-kai World - Hooligan Road'],
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
            hp: '40',
            str: '32',
            spr: '17',
            def: '45',
            spd: '30'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Ramens',
        type: ['rare'],
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Armsman',
        yokaiNumber: '063',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/armsman.png',
        description:
            'Even headless he gives 110 percent. He dreams of reuniting with his head someday... Not sure how he dreams\u2014he just does.',
        locations: ['Blossom Heights - Old Mansion Attic'],
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
            hp: '35',
            str: '26',
            spr: '20',
            def: '27',
            spd: '21'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [11]
    },
    {
        name: 'Fidgephant',
        yokaiNumber: '064',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/fidgephant.png',
        description:
            'Fidgephant always feels like his nose is going to leak. He attacks with a water stream when he has to release it all!',
        locations: ['Uptown Springdale - Bushes'],
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
            hp: '33',
            str: '29',
            spr: '22',
            def: '29',
            spd: '26'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Touphant',
        yokaiNumber: '065',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/touphant.png',
        description:
            'Touphant can endure anything...with a certain amount of body-shaking effort. He can help you persevere as well.',
        locations: ['Uptown Springdale - Bushes'],
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
            hp: '30',
            str: '26',
            spr: '29',
            def: '31',
            spd: '23'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Blowkade',
        yokaiNumber: '066',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blowkade.png',
        description:
            "Blowkade is one weird Yo-kai. Nobody knows why he puts his all into blocking people's paths.",
        locations: ['Downtown Springdale - Construction Site'],
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
            hp: '34',
            str: '25',
            spr: '18',
            def: '30',
            spd: '20'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Milks'
    },
    {
        name: 'Ledballoon',
        yokaiNumber: '067',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ledballoon.png',
        description:
            "A dump truck couldn't move Ledballoon's heavy body...which is bad news if it gets in your way.",
        locations: ['Springdale Underground Waterway'],
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
            hp: '31',
            str: '28',
            spr: '15',
            def: '28',
            spd: '20'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Milks',
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Mad Mountain',
        yokaiNumber: '068',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mad_mountain.png',
        description:
            "Hailing from the land of frost, it's the wrestler with legs as thick as glaciers and a heart of ice: MAD MOUNTAIN!",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East'
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
            hp: '36',
            str: '28',
            spr: '21',
            def: '29',
            spd: '25'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Rice Balls',
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Lava Lord',
        yokaiNumber: '069',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lava_lord.png',
        description:
            "And in red, we have the only wrestler to rival Mad Mountain! It's the violent volcano himself\u2014 LAAAVA LOOOOOOORD!",
        locations: ['Breezy Hills - Gourd Pond Museum'],
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
            hp: '39',
            str: '32',
            spr: '20',
            def: '30',
            spd: '28'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Rice Balls'
    },
    {
        name: 'Roughraff',
        yokaiNumber: '070',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/roughraff.png',
        description:
            'A Yo-kai whose only cause is rebellion, he Inspirits good kids into badness and delinquency.',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Uptown Springdale - Desolate Lane',
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
        ],
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
            hp: '25',
            str: '25',
            spr: '18',
            def: '21',
            spd: '26'
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
        yokaiNumber: '071',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/badude.png',
        description:
            "This gang leader runs into enemy territory wielding his brutal nail bat. That's his way of taking care of his gang.",
        locations: [
            'Breezy Hills - Gourd Pond Museum',
            'Evolve Roughraff at Level 26.',
            'Yo-kai Spot - Oar-Powered Dates'
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
            name: 'Pebble',
            power: '20 to 90'
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
            hp: '34',
            str: '37',
            spr: '16',
            def: '27',
            spd: '30'
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
        yokaiNumber: '072',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bruff.png',
        description:
            'Said to have taken down an entire Yo-kai gang by himself, many rebel Yo-kai revere him as a big brother.',
        locations: [
            'Yo-kai World - Hooligan Road',
            'Yo-kai Spot - Oar-Powered Dates'
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
            hp: '38',
            str: '40',
            spr: '20',
            def: '30',
            spd: '33'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Ramens',
        type: ['rare'],
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            }
        ]
    },
    {
        name: 'Rhinoggin',
        yokaiNumber: '073',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhinoggin.png',
        description:
            'The hyperaggressive Rhinoggin is always  battling Beetler for the title of Bug Yo-kai King.',
        locations: ['Mt. Wildwood - Trees'],
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
            hp: '38',
            str: '32',
            spr: '18',
            def: '33',
            spd: '21'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [53],
        crankakai: [
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Rhinormous',
        yokaiNumber: '074',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhinormous.png',
        description:
            'Only the select few Rhinoggin who have proven their might in battle can hold the name of Rhinormous.',
        locations: ['Uptown Springdale - Trees', 'Fusion.'],
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
            hp: '38',
            str: '37',
            spr: '21',
            def: '36',
            spd: '30'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Breads',
        evolutionIndexes: [53]
    },
    {
        name: 'Hornaplenty',
        yokaiNumber: '075',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hornaplenty.png',
        description:
            'When Rhinormous achieves power far beyond his peers, he can earn the rarified title of Hornaplenty.',
        locations: ['Mt. Wildwood - Trees'],
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
            hp: '43',
            str: '40',
            spr: '17',
            def: '40',
            spd: '34'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables',
        type: ['rare']
    },
    {
        name: 'Castelius III',
        yokaiNumber: '076',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_iii.png',
        description:
            "Castelius III will make you always come in third. There's not much of a future in that...unless you're a bronze tycoon.",
        locations: ['Downtown Springdale - Construction Site'],
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
            hp: '33',
            str: '26',
            spr: '21',
            def: '30',
            spd: '24'
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
        yokaiNumber: '077',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_ii.png',
        description:
            'Castelius II will always lock you in second place. Not bad, but could you have done a bit better...?',
        locations: ['Breezy Hills - Gourd Pond Museum', 'Fusion.'],
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
            hp: '35',
            str: '27',
            spr: '19',
            def: '32',
            spd: '27'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Milks',
        evolutionIndexes: [50, 51]
    },
    {
        name: 'Castelius I',
        yokaiNumber: '078',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_i.png',
        description:
            "First place. Gold medals. Big trophies. That's your life if Castelius I Inspirits you. But with great power comes great...ness!",
        locations: ['Fusion.'],
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
            hp: '39',
            str: '27',
            spr: '20',
            def: '36',
            spd: '30'
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
        yokaiNumber: '079',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/castelius_max.png',
        description:
            'Being Inspirited by this extremely rare Yo-kai will let you transcend mere winning and losing.',
        locations: ['Breezy Hills - Trees', 'Fusion.'],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
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
            hp: '45',
            str: '34',
            spr: '23',
            def: '37',
            spd: '33'
        },
        tribe: 'Tough',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Milks',
        evolutionIndexes: [52],
        type: ['rare']
    },
    {
        name: 'Robonyan',
        yokaiNumber: '080',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonyan.png',
        description:
            "A robot that thinks it's actually Jibanyan. Stiff movement aside, the resemblance is uncatty! Meow meow.",
        locations: ['Downtown Springdale - Construction Site'],
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
            hp: '39',
            str: '32',
            spr: '24',
            def: '35',
            spd: '34'
        },
        tribe: 'Tough',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare'],
        crankakai: [
            {
                name: '3ds Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/3ds_coin.png'
            }
        ]
    },
    {
        name: 'Goldenyan',
        yokaiNumber: '081',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/goldenyan.png',
        description:
            'Goldenyan glistens with purrfection. Meow meow. Truly priceless.',
        locations: [],
        skill: {
            name: 'Gold Guard',
            description: 'Takes less Lightningand Water damage.'
        },
        attack: {
            name: 'Rocket Punch',
            power: '100 to 150'
        },
        technique: {
            name: 'Shock',
            power: '20 to 90'
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
            hp: '44',
            str: '33',
            spr: '21',
            def: '37',
            spd: '39'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods',
        type: ['rare'],
        crankakai: [
            {
                name: 'Orange Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Dromp',
        yokaiNumber: '082',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dromp.png',
        description:
            'Fairy tales tell of the monstrous Dromp building mountains and digging ponds.',
        locations: ['Shrine Behind the Waterfall'],
        skill: {
            name: 'Insulator',
            description: 'Takes less damagefrom Lightning attacks.'
        },
        attack: {
            name: 'Steamroll',
            power: '60 to 90'
        },
        technique: {
            name: 'Pebble',
            power: '20 to 90'
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
            hp: '44',
            str: '31',
            spr: '22',
            def: '48',
            spd: '27'
        },
        tribe: 'Tough',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Swosh',
        yokaiNumber: '083',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/swosh.png',
        description:
            'A Yo-kai with a heart as big as the ocean. Some say that Swosh embodies the sea itself.',
        locations: ['Downtown Springdale - Water'],
        skill: {
            name: 'Blessed Body',
            description: 'When defeated, Yo-kaiin the front recover HP.'
        },
        attack: {
            name: 'Steamroll',
            power: '60 to 90'
        },
        technique: {
            name: 'Torrent',
            power: '20 to 90'
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
            hp: '45',
            str: '18',
            spr: '34',
            def: '47',
            spd: '30'
        },
        tribe: 'Tough',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Vegetables',
        type: ['rare']
    },
    {
        name: 'Dazzabel',
        yokaiNumber: '084',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dazzabel.png',
        description:
            "Dazzabel loves wearing anything gaudy. If she Inspirits you, you'll start liking that style too!",
        locations: [
            'Blossom Heights - Tucked Away Lot',
            'Blossom Heights - Hidden Side Street'
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
            hp: '26',
            str: '24',
            spr: '16',
            def: '25',
            spd: '26'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [31]
    },
    {
        name: 'Rattelle',
        yokaiNumber: '085',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rattelle.png',
        description:
            "While she looks calm in her gothic wear, she'll fly into a rage if you insult her style.",
        locations: [
            'Breezy Hills - Gourd Pond Museum',
            'Breezy Hills - Bushes',
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
            hp: '32',
            str: '27',
            spr: '23',
            def: '29',
            spd: '28'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [31]
    },
    {
        name: 'Skelebella',
        yokaiNumber: '086',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skelebella.png',
        description:
            "She's so confident in the unparalleled beauty of her bones that she doesn't even need her skin.",
        locations: ['Breezy Hills - Gourd Pond Museum'],
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
            hp: '35',
            str: '29',
            spr: '26',
            def: '32',
            spd: '32'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Hamburgers',
        type: ['rare'],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            },
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Cadin',
        yokaiNumber: '087',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cadin.png',
        description:
            'He claims to practice "cicada ninjutsu"...but that\'s not really a thing. Unless it\'s a mastery of running away.',
        locations: ['Uptown Springdale - Trees', 'Blossom Heights - Trees'],
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
            hp: '24',
            str: '25',
            spr: '21',
            def: '19',
            spd: '26'
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
        yokaiNumber: '088',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cadable.png',
        description:
            'Cadin has trained his "cicada ninjutsu" to its peak. Now Cadable claims it\'s a worthy martial art! *crickets* *cicadas*',
        locations: ['Breezy Hills - Trees', 'Evolve Cadin at Level 21.'],
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
            hp: '32',
            str: '33',
            spr: '27',
            def: '21',
            spd: '31'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Juices',
        evolutionIndexes: [55],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            }
        ]
    },
    {
        name: 'Singcada',
        yokaiNumber: '089',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/singcada.png',
        description:
            'His advanced style of "cicada ninjutsu" makes him sing while he fights! His battles even draw music fans sometimes!',
        locations: ['Breezy Hills - Trees'],
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
            hp: '35',
            str: '34',
            spr: '29',
            def: '20',
            spd: '36'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Juices',
        type: ['rare'],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            }
        ]
    },
    {
        name: 'Pupsicle',
        yokaiNumber: '090',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pupsicle.png',
        description:
            'Pupsicle is always cold. He may be Inspiriting those who wear layers of clothes in summer.',
        locations: [
            'Mt. Wildwood - Water',
            'Blossom Heights - Tucked Away Lot',
            'Blossom Heights - Hidden Side Street',
            'Infinite Inferno - 7-8th Circle'
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
            hp: '24',
            str: '23',
            spr: '25',
            def: '19',
            spd: '24'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Ramens',
        evolutionIndexes: [57],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            }
        ]
    },
    {
        name: 'Chilhuahua',
        yokaiNumber: '091',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chilhuahua.png',
        description:
            'Legends tell of Chilhuahua saving people lost in the snowy mountains. Some consider him a deity.',
        locations: ['Mt. Wildwood - Ponds', 'Fusion.'],
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
            hp: '32',
            str: '37',
            spr: '34',
            def: '26',
            spd: '33'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Ramens',
        evolutionIndexes: [57]
    },
    {
        name: 'Swelterrier',
        yokaiNumber: '092',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/swelterrier.png',
        description:
            'His fiery heart and body always make him feel too hot. Being near him is like being near a space heater.',
        locations: ['Infinite Inferno - 7-8th Circle'],
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
            hp: '36',
            str: '35',
            spr: '38',
            def: '30',
            spd: '35'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Ramens',
        type: ['rare']
    },
    {
        name: 'Jibanyan',
        yokaiNumber: '093',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/jibanyan.png',
        description:
            'After being run over by a truck, he Inspirits an intersection and seeks to get his revenge on passing trucks.',
        locations: [
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle',
            'During the story.'
        ],
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
            hp: '30',
            str: '20',
            spr: '19',
            def: '24',
            spd: '35'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [63, 64],
        crankakai: [
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Thornyan',
        yokaiNumber: '094',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/thornyan.png',
        description:
            "Jibanyan's proud of his new spiky body. Just don't walk behind him while you're barefoot.",
        locations: ['Fusion.'],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
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
            hp: '33',
            str: '24',
            spr: '20',
            def: '27',
            spd: '38'
        },
        tribe: 'Charming',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [64]
    },
    {
        name: 'Baddinyan',
        yokaiNumber: '095',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/baddinyan.png',
        description:
            "Jibanyan gone bad. REAL BAD. With an impressive pompadour haircut and classy tails, he's a delinquent with no cause.",
        locations: ['Fusion.'],
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
            hp: '35',
            str: '33',
            spr: '15',
            def: '30',
            spd: '36'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Seafoods',
        evolutionIndexes: [63]
    },
    {
        name: 'Walkappa',
        yokaiNumber: '096',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/walkappa.png',
        description:
            'Most kappas stay in the water, but this one likes to walk around. He pours water on his head to make up for this.',
        locations: [
            'Uptown Springdale - Water',
            'Blossom Heights - Water',
            'During the story.'
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
            hp: '28',
            str: '22',
            spr: '29',
            def: '22',
            spd: '28'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [62]
    },
    {
        name: 'Appak',
        yokaiNumber: '097',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/appak.png',
        description:
            'Appak can cut just about anything with his water sword. He wanders the world in order to heighten his skills.',
        locations: [
            'Blossom Heights - Water',
            "Shopper's Row - Trees",
            'Evolve Walkappa at Level 32.'
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
            hp: '38',
            str: '37',
            spr: '29',
            def: '24',
            spd: '31'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [62]
    },
    {
        name: 'Supyo',
        yokaiNumber: '098',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/supyo.png',
        description:
            "Whereas most kappas stick to rivers, this one likes to surf...and pick up girls while he's at it.",
        locations: ['Downtown Springdale - Water'],
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
            hp: '39',
            str: '34',
            spr: '34',
            def: '25',
            spd: '32'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Vegetables',
        type: ['rare'],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            }
        ]
    },
    {
        name: 'Komasan',
        yokaiNumber: '099',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komasan.png',
        description:
            "Komasan is a guardian lion-dog that got bored with guarding his shrine. Now he's looking for a new one.",
        locations: [
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
        ],
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
            hp: '25',
            str: '22',
            spr: '30',
            def: '23',
            spd: '27'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Milks',
        evolutionIndexes: [127]
    },
    {
        name: 'Komane',
        yokaiNumber: '100',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komane.png',
        description:
            "Komasan's travels made him grow up into a brave and dependable Yo-kai. He's strong too!",
        locations: ['Yo-kai World - Entry Hall', 'Evolve Komasan at Level 35.'],
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
            hp: '35',
            str: '26',
            spr: '39',
            def: '23',
            spd: '36'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [127]
    },
    {
        name: 'Komajiro',
        yokaiNumber: '101',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komajiro.png',
        description:
            "Komasan's younger twin, he looks for his runaway bro. But he can't find him anywhere, poor guy.",
        locations: ['Blossom Heights - Old Mansion Attic', 'During the story.'],
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
            hp: '25',
            str: '26',
            spr: '27',
            def: '24',
            spd: '25'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Milks',
        evolutionIndexes: [128],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            }
        ]
    },
    {
        name: 'Komiger',
        yokaiNumber: '102',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komiger.png',
        description:
            "Komajiro's pursuit of his brother brought out his ferocious tiger spirit. He even has stripes!",
        locations: ["Shopper's Row - Trees", 'Evolve Komajiro at Level 33.'],
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
            hp: '31',
            str: '30',
            spr: '34',
            def: '24',
            spd: '33'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Milks',
        evolutionIndexes: [128]
    },
    {
        name: 'Baku',
        yokaiNumber: '103',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/baku.png',
        description:
            'A Yo-kai that eats only human dreams. It puts people to sleep before digging in. Beaux r\u00eaves!',
        locations: ['Blossom Heights - Bushes', 'During the story.'],
        skill: {
            name: 'Hard Worker',
            description: 'Receives moreexperience points.'
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
            hp: '24',
            str: '22',
            spr: '28',
            def: '23',
            spd: '27'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Juices'
    },
    {
        name: 'Whapir',
        yokaiNumber: '104',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/whapir.png',
        description:
            "A rare white Baku. Legends say that if a Whapir Inspirits you, you're guaranteed to have good dreams. ",
        locations: ['Nocturne Hospital - 2F'],
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
            hp: '26',
            str: '25',
            spr: '31',
            def: '26',
            spd: '29'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Juices'
    },
    {
        name: 'Shmoopie',
        yokaiNumber: '105',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shmoopie.png',
        description:
            "This Yo-kai is cute enough to melt anyone's heart...and he knows it!  He can be quite the schemer, so look out!",
        locations: ['Mt. Wildwood - Bushes'],
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
            hp: '26',
            str: '22',
            spr: '31',
            def: '24',
            spd: '29'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [67],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Pinkipoo',
        yokaiNumber: '106',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pinkipoo.png',
        description:
            'Known as the Aristocrat of Love, Pinkipoo uses his overpowering cuteness to win over new followers.',
        locations: ['Yo-kai World - Entry Hall', 'Fusion.'],
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
            hp: '31',
            str: '22',
            spr: '39',
            def: '26',
            spd: '36'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [67],
        crankakai: [
            {
                name: 'Five-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Pookivil',
        yokaiNumber: '107',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pookivil.png',
        description:
            "This Yo-kai will make even nice people into scheming manipulators. An embodiment of Pinkipoo's bad side.",
        locations: ['Yo-kai World - Entry Hall'],
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
            name: 'Numbify',
            description: 'Numbs a foe with sheer cold and lowers its STR.',
            power: '0'
        },
        stats: {
            hp: '35',
            str: '28',
            spr: '34',
            def: '29',
            spd: '38'
        },
        tribe: 'Charming',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Hamburgers',
        type: ['rare'],
        crankakai: [
            {
                name: '3ds Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/3ds_coin.png'
            }
        ]
    },
    {
        name: 'Frostina',
        yokaiNumber: '108',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/frostina.png',
        description:
            'Frostina has the power to freeze anything, but that keeps her pretty chilly\u2014 that and bad circulation.',
        locations: [
            'Uptown Springdale - Elementary School',
            'Yo-kai Spot - Oar-Powered Dates'
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
            name: 'Trickery',
            description:
                'Passes his wickedness on to a foe, who will attack its allies.',
            power: '0'
        },
        stats: {
            hp: '32',
            str: '22',
            spr: '37',
            def: '25',
            spd: '33'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'b',
        favouriteFood: 'Candies',
        evolutionIndexes: [69],
        crankakai: [
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: 'Five-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Blizzaria',
        yokaiNumber: '109',
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
            hp: '36',
            str: '27',
            spr: '43',
            def: '29',
            spd: '34'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Candies',
        evolutionIndexes: [69]
    },
    {
        name: 'Damona',
        yokaiNumber: '110',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/damona.png',
        description:
            'The princess of a small netherworld region. Her power is immense, but she lacks the power to feel any emotion.',
        locations: [],
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
            hp: '39',
            str: '33',
            spr: '41',
            def: '31',
            spd: '30'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Candies',
        type: ['rare'],
        crankakai: [
            {
                name: 'Pink Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Wiglin',
        yokaiNumber: '111',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wiglin.png',
        description:
            "A seaweed Yo-kai who wants to spread his hometown dance to the world. And he's very healthy too!",
        locations: ['Downtown Springdale - Water'],
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
            hp: '24',
            str: '22',
            spr: '26',
            def: '20',
            spd: '27'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Steppa',
        yokaiNumber: '112',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/steppa.png',
        description:
            "Steppa is one of Wiglin's rivals. It believes that kombu is the best kind of seaweed...if there is such a thing.",
        locations: ['Downtown Springdale - Water'],
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
            hp: '26',
            str: '20',
            spr: '24',
            def: '24',
            spd: '25'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Rhyth',
        yokaiNumber: '113',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhyth.png',
        description:
            "The one female of the seaweed trio. Wiglin and Steppa both really like her, but she doesn't seem to notice.",
        locations: ['Downtown Springdale - Water'],
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
            hp: '28',
            str: '19',
            spr: '28',
            def: '23',
            spd: '31'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Wantston',
        yokaiNumber: '114',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wantston.png',
        description:
            "Wantston wants everything others have, but he won't even try to acquire what he envies. So no worries.",
        locations: [
            'Blossom Heights - Tucked Away Lot',
            'Blossom Heights - Hidden Side Street'
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
            hp: '26',
            str: '25',
            spr: '23',
            def: '20',
            spd: '26'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'e',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Grubsnitch',
        yokaiNumber: '115',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grubsnitch.png',
        description:
            "If you can't stop snacking before dinner, Grubsnitch is probably nearby.",
        locations: ["Shopper's Row - Bushes", "Shopper's Row - Empty flats"],
        skill: {
            name: 'Snitch',
            description: "Absorbs foe's HP withregular attacks."
        },
        attack: {
            name: 'Smackdown',
            power: '20x2 to 44x2'
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
            hp: '29',
            str: '28',
            spr: '23',
            def: '21',
            spd: '28'
        },
        tribe: 'Heartful',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Ramens'
    },
    {
        name: 'Hungramps',
        yokaiNumber: '116',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hungramps.png',
        description:
            "A Yo-kai who is always hungry and can make other tummies rumble. ...That's really about the only thing he can do. ",
        locations: [
            'Uptown Springdale - Lonely Waterway, Shady Back Alley, The Catwalk & Desolate Lane'
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
            hp: '25',
            str: '22',
            spr: '26',
            def: '20',
            spd: '24'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [74],
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Hungorge',
        yokaiNumber: '117',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hungorge.png',
        description:
            "A terribly gluttonous Yo-kai that'll eat anything in front of him. His mouth is like a black hole\u2014even rice can't escape it.",
        locations: [
            'Uptown Springdale - Elementary School',
            'Uptown Springdale - Lonely Waterway, Shady Back Alley, The Catwalk & Desolate Lane',
            'Evolve Hungramps at Level 22.'
        ],
        skill: {
            name: 'Starver',
            description: 'Increases the effect offood on allies.'
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
            hp: '32',
            str: '35',
            spr: '30',
            def: '26',
            spd: '26'
        },
        tribe: 'Heartful',
        element: 'Drain',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        evolutionIndexes: [74],
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Grainpa',
        yokaiNumber: '118',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grainpa.png',
        description:
            "A rare Hungramps with a body made of rice. He's so kind, he'll let a hungry person eat part of his body if necessary. ",
        locations: ['Blossom Heights - Tucked Away Lot'],
        skill: {
            name: 'Blessed Body',
            description: 'When defeated, Yo-kaiin the front recover HP.'
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
            hp: '34',
            str: '28',
            spr: '37',
            def: '26',
            spd: '29'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Rice Balls',
        type: ['rare']
    },
    {
        name: 'Lodo',
        yokaiNumber: '119',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lodo.png',
        description:
            "You know when you just keep losing change or getting the wrong change back? Lodo's fault.",
        locations: [
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            "Shopper's Row - Shopping Street Narrows"
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
            hp: '27',
            str: '22',
            spr: '29',
            def: '24',
            spd: '27'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Milks',
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Chippa',
        yokaiNumber: '120',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chippa.png',
        description:
            'An eternal optimist that never worries about anything. Being Inspirited by him can be worse than you think.',
        locations: [
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            "Shopper's Row - Shopping Street Narrows"
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
            hp: '29',
            str: '25',
            spr: '27',
            def: '27',
            spd: '29'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Milks'
    },
    {
        name: 'Enerfly',
        yokaiNumber: '121',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/enerfly.png',
        description:
            'A butterfly Yo-kai who brings those it Inspirits to their peak condition. Often mistaken for Enefly.',
        locations: ['Mt. Wildwood - Trees'],
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
            hp: '25',
            str: '24',
            spr: '28',
            def: '21',
            spd: '29'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Enefly',
        yokaiNumber: '122',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/enefly.png',
        description:
            'A butterfly Yo-kai who makes those it Inspirits cut ties with their best friends. Often mistaken  for Enerfly.',
        locations: ['Mt. Wildwood - Trees'],
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
            hp: '26',
            str: '20',
            spr: '30',
            def: '22',
            spd: '26'
        },
        tribe: 'Heartful',
        element: 'Drain',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Betterfly',
        yokaiNumber: '123',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/betterfly.png',
        description:
            "People will fulfill their potential in ways they've never imagined with Betterfly. Everyone wants this Yo-kai!",
        locations: ["Shopper's Row - Trees", 'Fusion.'],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
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
            hp: '35',
            str: '25',
            spr: '39',
            def: '25',
            spd: '35'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Juices',
        evolutionIndexes: [83]
    },
    {
        name: 'Peppillon',
        yokaiNumber: '124',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/peppillon.png',
        description:
            'A butterfly Yo-kai with otherworldly wings. Breathing in its scales will boost your level of excitement to its max.',
        locations: ['Mt. Wildwood - Trees'],
        skill: {
            name: 'Miraculous Scales',
            description: 'Does not get Inspiritedby enemies.'
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
            hp: '39',
            str: '27',
            spr: '42',
            def: '27',
            spd: '39'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Juices',
        type: ['rare']
    },
    {
        name: 'Happierre',
        yokaiNumber: '125',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/happierre.png',
        description:
            'This heartwarming  Yo-kai removes the  tension in the air. He can cheer up even the angriest of people.',
        locations: ['Downtown Springdale - Trees'],
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
            hp: '27',
            str: '23',
            spr: '29',
            def: '25',
            spd: '28'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Breads',
        evolutionIndexes: [86],
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Reversa',
        yokaiNumber: '126',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reversa.png',
        description:
            "One moment she's happy, and the next, she's sad. She can be more difficult to deal with than Dismarelda sometimes.",
        locations: [
            'Yo-kai World - Liar Mountain',
            'Yo-kai World - Entry Hall',
            'Fusion.'
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
            hp: '31',
            str: '29',
            spr: '36',
            def: '29',
            spd: '32'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Breads',
        evolutionIndexes: [86]
    },
    {
        name: 'Reversette',
        yokaiNumber: '127',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/reversette.png',
        description:
            'She resembles Reversa, but her reversed pattern is a rare sight. Her depression\u2014not so rare.',
        locations: ['Yo-kai World - Liar Mountain'],
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
            hp: '35',
            str: '32',
            spr: '37',
            def: '26',
            spd: '34'
        },
        tribe: 'Heartful',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Breads',
        type: ['rare'],
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: "Ol' Saint Trick",
        yokaiNumber: '128',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__saint_trick.png',
        description:
            "Take a guess and get one of three presents: bad, good, or average. He'll leave if you ask for all three, though...",
        locations: ['Uptown Springdale - Trees'],
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
            hp: '28',
            str: '27',
            spr: '30',
            def: '26',
            spd: '31'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Milks'
    },
    {
        name: "Ol' Fortune",
        yokaiNumber: '129',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__fortune.png',
        description:
            "Another old man with bags full of gifts. Unlike Ol' Saint Trick, all of his presents are good!",
        locations: ['Uptown Springdale - Elementary School'],
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
            hp: '31',
            str: '26',
            spr: '30',
            def: '28',
            spd: '27'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Milks',
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Rollen',
        yokaiNumber: '130',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rollen.png',
        description:
            'Everything he does is decided by a roll of his dice eyes. Their outcome changes his personality! ',
        locations: ['Yo-kai World - Liar Mountain'],
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
            hp: '33',
            str: '31',
            spr: '31',
            def: '31',
            spd: '31'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Candies'
    },
    {
        name: 'Dubbles',
        yokaiNumber: '131',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dubbles.png',
        description:
            "Dubbles will Inspirit you and point you toward an unknown fate. Even he doesn't know if it'll be a good or bad one.",
        locations: ['Breezy Hills - Objects'],
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
            hp: '36',
            str: '28',
            spr: '28',
            def: '32',
            spd: '33'
        },
        tribe: 'Heartful',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Candies',
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            }
        ]
    },
    {
        name: 'Papa Bolt',
        yokaiNumber: '132',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/papa_bolt.png',
        description:
            "No matter how lazy you are, you'll work fast when Papa Bolt's watching. His anger is SCAAAAARY!",
        locations: ['Blossom Heights - Telephone poles'],
        skill: {
            name: 'Strict',
            description: 'All allies will Loafaround less.'
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
            hp: '33',
            str: '32',
            spr: '29',
            def: '30',
            spd: '35'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Meats'
    },
    {
        name: 'Uncle Infinite',
        yokaiNumber: '133',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/uncle_infinite.png',
        description:
            "Even Papa Bolt is scared of Uncle Infinite's power. He can throw a table an entire mile!",
        locations: ['Blossom Heights - Telephone poles'],
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
            hp: '39',
            str: '37',
            spr: '31',
            def: '31',
            spd: '36'
        },
        tribe: 'Heartful',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Meats',
        type: ['rare']
    },
    {
        name: 'Mama Aura',
        yokaiNumber: '134',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mama_aura.png',
        description:
            'Sometimes strict and sometimes nice, she embraces Yo-kai with her warm aura. No Yo-kai can defy her.',
        locations: [
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
        ],
        skill: {
            name: 'Prayer',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
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
            hp: '36',
            str: '29',
            spr: '36',
            def: '28',
            spd: '38'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Auntie Heart',
        yokaiNumber: '135',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/auntie_heart.png',
        description:
            "Regardless of how bad a Yo-kai is, Auntie Heart's healing hug will make it pure again. That is some true kindness!",
        locations: [],
        skill: {
            name: 'Prayer',
            description: 'Gradually recovers HPof adjacent Yo-kai.'
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
            hp: '39',
            str: '31',
            spr: '38',
            def: '27',
            spd: '39'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Vegetables',
        type: ['rare'],
        crankakai: [
            {
                name: 'Green Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Leadoni',
        yokaiNumber: '136',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/leadoni.png',
        description:
            "A Yo-kai that beckons people with a huge hand and gets them confused. It's his fault when a child gets lost!",
        locations: [
            'Uptown Springdale - Bushes',
            'Mt. Wildwood - Abandoned Tunnel West'
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
            hp: '26',
            str: '26',
            spr: '18',
            def: '25',
            spd: '24'
        },
        tribe: 'Shady',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'e',
        favouriteFood: 'Candies'
    },
    {
        name: 'Mynimo',
        yokaiNumber: '137',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mynimo.png',
        description:
            "People Inspirited by Mynimo get much better treatment than those around them. Hey! That's not fair!",
        locations: [
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            "Downtown Springdale - Behind Frostia's place"
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
            hp: '28',
            str: '29',
            spr: '19',
            def: '27',
            spd: '26'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Candies',
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Ake',
        yokaiNumber: '138',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ake.png',
        description:
            "A bratty Yo-kai that's always kicking people's shoulders. The kicks just make your shoulders stiff.",
        locations: ['Blossom Heights - Old Mansion Attic'],
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
            hp: '24',
            str: '25',
            spr: '22',
            def: '20',
            spd: '26'
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
        yokaiNumber: '139',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/payn.png',
        description:
            'Payn will show your shoulders the meaning of pain using its massive strength. Payn is really into working out.',
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East',
            'Mt. Wildwood - Bushes',
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
            hp: '32',
            str: '32',
            spr: '23',
            def: '25',
            spd: '27'
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
        yokaiNumber: '140',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/agon.png',
        description:
            "A horrible Yo-kai that gives people a slipped disc in their backs! You're more susceptible the older you are.",
        locations: ['Mt. Wildwood - Abandoned Tunnel West'],
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
            hp: '35',
            str: '36',
            spr: '23',
            def: '27',
            spd: '33'
        },
        tribe: 'Shady',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'b',
        favouriteFood: 'Candies',
        type: ['rare'],
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Negatibuzz',
        yokaiNumber: '141',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/negatibuzz.png',
        description:
            'A Yo-kai that nurtures negativity and sucks it up with its needlelike nose.',
        locations: [
            'Uptown Springdale - Lonely Waterway',
            'Uptown Springdale - Shady Back Alley',
            'Uptown Springdale - Trees',
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
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
            hp: '23',
            str: '26',
            spr: '20',
            def: '22',
            spd: '25'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Juices',
        evolutionIndexes: [92],
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Moskevil',
        yokaiNumber: '142',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/moskevil.png',
        description:
            "This nasty Yo-kai can drop you into the depths of despair. You cannot cheer up if he's nearby. ",
        locations: [
            'Uptown Springdale - Trees',
            'Downtown Springdale - Construction Site',
            'Evolve Negatibuzz at Level 17.'
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
            hp: '31',
            str: '29',
            spr: '22',
            def: '24',
            spd: '33'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Juices',
        evolutionIndexes: [92]
    },
    {
        name: 'Scritchy',
        yokaiNumber: '143',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/scritchy.png',
        description:
            'The mere presence of Scritchy will make your body itch. No amount of scratching can make it stop.',
        locations: ['Uptown Springdale - Trees'],
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
            hp: '37',
            str: '34',
            spr: '27',
            def: '29',
            spd: '37'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Juices',
        type: ['rare'],
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            }
        ]
    },
    {
        name: 'Dimmy',
        yokaiNumber: '144',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dimmy.png',
        description:
            'Being Inspirited by Dimmy will tone down your presence. Dimmy uses this for his job as a ninja.',
        locations: [
            'Uptown Springdale - The Catwalk',
            'Uptown Springdale - Desolate Lane',
            'Uptown Springdale - Objects'
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
            hp: '24',
            str: '24',
            spr: '23',
            def: '18',
            spd: '28'
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
        yokaiNumber: '145',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blandon.png',
        description:
            "Blandon's lack of presence makes him a really great spy, but he's sad that no one recognizes him for that.",
        locations: [
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle',
            'Evolve Dimmy at Level 24.'
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
            hp: '31',
            str: '32',
            spr: '31',
            def: '20',
            spd: '35'
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
        yokaiNumber: '146',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/null.png',
        description:
            "You can't sense Nul even if you're really close to him. He's really good at entertaining himself.",
        locations: ["Shopper's Row - Trees"],
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
            hp: '33',
            str: '35',
            spr: '34',
            def: '20',
            spd: '37'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Rice Balls',
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png'
            },
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Hidabat',
        yokaiNumber: '147',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hidabat.png',
        description:
            "Hidabat will make you a shut-in who fears going outside. It's better at Inspiriting modern city dwellers. ",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East',
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle'
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
            hp: '27',
            str: '22',
            spr: '26',
            def: '29',
            spd: '25'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'd',
        favouriteFood: 'Meats',
        evolutionIndexes: [95],
        crankakai: [
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Abodabat',
        yokaiNumber: '148',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/abodabat.png',
        description:
            "After being inside the house for so long, Hidabat fused with it. Now it really can't ever leave!",
        locations: [
            'Yo-kai World - Hooligan Road',
            'Yo-kai World - Liar Mountain',
            'Yo-kai World - Entry Hall',
            'Fusion.'
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
            hp: '29',
            str: '30',
            spr: '31',
            def: '37',
            spd: '30'
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
        yokaiNumber: '149',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/belfree.png',
        description:
            "A rare Abodabat in  temporary housing. Once a year, if you're lucky, you can see it change houses.",
        locations: ['Yo-kai World - Hooligan Road'],
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
            hp: '30',
            str: '31',
            spr: '32',
            def: '40',
            spd: '31'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Meats',
        type: ['rare']
    },
    {
        name: 'Suspicioni',
        yokaiNumber: '150',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/suspicioni.png',
        description:
            "An Oni who doubts everything. He hangs out with his fellow Oni but doesn't trust them at all.",
        locations: [
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            "Downtown Springdale - Behind Frostia's place",
            'Downtown Springdale - Objects',
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
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
            hp: '20',
            str: '25',
            spr: '26',
            def: '26',
            spd: '27'
        },
        tribe: 'Shady',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'd',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Tantroni',
        yokaiNumber: '151',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tantroni.png',
        description:
            "This Yo-kai will throw a fit whenever he doesn't get his way... It's probably time to grow out of that.",
        locations: [
            'Downtown Springdale - Academy Shortcut',
            'Downtown Springdale - Delivery Bay',
            "Downtown Springdale - Behind Frostia's place",
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
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
            hp: '22',
            str: '29',
            spr: '19',
            def: '29',
            spd: '25'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Contrarioni',
        yokaiNumber: '152',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/contrarioni.png',
        description:
            "Get ready to say no a lot if Contrarioni Inspirits you. You'll disagree with anything people say. Always fun at parties.",
        locations: ['Breezy Hills - Gourd Pond Museum'],
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
            hp: '25',
            str: '28',
            spr: '33',
            def: '31',
            spd: '29'
        },
        tribe: 'Shady',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Chinese foods',
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png'
            }
        ]
    },
    {
        name: 'Tengloom',
        yokaiNumber: '153',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tengloom.png',
        description:
            "A gloomy tengu who's always reading. He's somehow amassed a Yo-kai fan base that likes his pessimism.",
        locations: [
            'Downtown Springdale - Construction Site',
            "Shopper's Row - Trees",
            "Shopper's Row - Empty flats",
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
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
            hp: '28',
            str: '21',
            spr: '32',
            def: '23',
            spd: '30'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Vegetables',
        evolutionIndexes: [95],
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png'
            }
        ]
    },
    {
        name: 'Nird',
        yokaiNumber: '154',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nird.png',
        description:
            'This Yo-kai became a bookworm upon arrival in the human world. Noisiness will be severely punished! Shhhh!',
        locations: ["Shopper's Row - Trees", "Shopper's Row - Empty flats"],
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
            hp: '30',
            str: '23',
            spr: '34',
            def: '25',
            spd: '32'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Negasus',
        yokaiNumber: '155',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/negasus.png',
        description:
            "Negasus will make you  want to do things that'll get you in trouble. The more trouble the better!",
        locations: ["Shopper's Row - Trees", "Shopper's Row - Empty flats"],
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
            hp: '30',
            str: '23',
            spr: '39',
            def: '28',
            spd: '39'
        },
        tribe: 'Shady',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Vegetables',
        crankakai: [
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Neighfarious',
        yokaiNumber: '156',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/neighfarious.png',
        description:
            'Shining mysteriously in the night sky, Neighfarious is a bit of an enigma. What kind of evil Yo-kai is he?',
        locations: ["Shopper's Row - Trees", "Shopper's Row - Empty flats"],
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
            hp: '36',
            str: '31',
            spr: '28',
            def: '33',
            spd: '36'
        },
        tribe: 'Shady',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Vegetables',
        type: ['rare'],
        crankakai: [
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Timidevil',
        yokaiNumber: '157',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/timidevil.png',
        description:
            "A nervous devil who's too scared to even use his own powers. If he'd just relax, he could be unstoppable.",
        locations: [
            'Yo-kai World - Hooligan Road',
            'Yo-kai World - Liar Mountain',
            'Yo-kai World - Entry Hall',
            'Infinite Inferno - 7-8th Circle'
        ],
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
            hp: '26',
            str: '37',
            spr: '29',
            def: '33',
            spd: '32'
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
        yokaiNumber: '158',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/beelzebold.png',
        description:
            'Timidevil at full power! He still gets nervous every so often, though.',
        locations: ['Downtown Springdale - Objects', 'Fusion.'],
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
            hp: '28',
            str: '33',
            spr: '31',
            def: '35',
            spd: '35'
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
        yokaiNumber: '159',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/count_cavity.png',
        description:
            'A terrifying Yo-kai who can dissolve your teeth. He loves the sound of kids crying over aching teeth. What a jerk.',
        locations: [],
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
            hp: '44',
            str: '35',
            spr: '33',
            def: '23',
            spd: '39'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Ramens',
        type: ['rare'],
        crankakai: [
            {
                name: 'Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Greesel',
        yokaiNumber: '160',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/greesel.png',
        description:
            "A powerful, greedy Yo-kai who wants to control the world's wealth. He'll do anything for money.",
        locations: [
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
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
            name: 'Blaze',
            power: '50 to 110'
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
            hp: '37',
            str: '27',
            spr: '41',
            def: '32',
            spd: '35'
        },
        tribe: 'Shady',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Meats'
    },
    {
        name: 'Awevil',
        yokaiNumber: '161',
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
            hp: '40',
            str: '29',
            spr: '39',
            def: '34',
            spd: '32'
        },
        tribe: 'Shady',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Meats',
        type: ['rare']
    },
    {
        name: 'Coughkoff',
        yokaiNumber: '162',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/coughkoff.png',
        description:
            'Coughkoff can cause your throat to feel tingly and make you sick. Try to stay healthy!',
        locations: [
            'Uptown Springdale - Trees',
            'Springdale Underground Waterway'
        ],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
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
            hp: '28',
            str: '23',
            spr: '17',
            def: '25',
            spd: '26'
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
        yokaiNumber: '163',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hurchin.png',
        description:
            "He looks just like Coughkoff, but don't say that! He hates that guy.",
        locations: ['Springdale Underground Waterway - Water'],
        skill: {
            name: 'Soothing Rhythm',
            description: 'All foes will be prone toLoafing around.'
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
            name: 'Snatch',
            description:
                "Makes a foe so jealous of its allies' things that it will attack them.",
            power: '0'
        },
        stats: {
            hp: '30',
            str: '25',
            spr: '16',
            def: '26',
            spd: '25'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'd',
        favouriteFood: 'Breads'
    },
    {
        name: 'Peckpocket',
        yokaiNumber: '164',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/peckpocket.png',
        description:
            "When Peckpocket has its eye on you, you'll start wanting other people's stuff. I'll take that!",
        locations: ['Mt. Wildwood - Bushes'],
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
            name: 'Headache',
            description:
                'Gives a foe a headache and steadily decreases its HP.',
            power: '0'
        },
        stats: {
            hp: '25',
            str: '18',
            spr: '26',
            def: '28',
            spd: '22'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'e',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Rockabelly',
        yokaiNumber: '165',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rockabelly.png',
        description:
            "A weird Yo-kai that's quite the belly dancer. Its stomach feathers look like an old man's face.",
        locations: ['Downtown Springdale - Springdale Business Tower'],
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
            hp: '28',
            str: '20',
            spr: '27',
            def: '30',
            spd: '24'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Hamburgers'
    },
    {
        name: 'Buhu',
        yokaiNumber: '166',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/buhu.png',
        description:
            'This bird Yo-kai is always bummed out. People it Inspirits get depressed and distracted a lot.',
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Trees'
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
            hp: '26',
            str: '19',
            spr: '27',
            def: '22',
            spd: '25'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'e',
        favouriteFood: 'Breads'
    },
    {
        name: 'Flumpy',
        yokaiNumber: '167',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/flumpy.png',
        description:
            'Flumpy can make even the coolest person unfashionable and awkward. He hates being so unstylish.',
        locations: [
            "Shopper's Row - Shopping Street Narrows",
            "Shopper's Row - Trees",
            "Shopper's Row - Empty flats"
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
            hp: '30',
            str: '22',
            spr: '32',
            def: '24',
            spd: '31'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Skreek',
        yokaiNumber: '168',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/skreek.png',
        description:
            'If you catch a glimpse of Skreek, just run. He can throw you into the deepest pits of despair.',
        locations: ['Byrd House - Hidden Room'],
        skill: {
            name: 'Penetrate',
            description: 'Always deals elementaldamage.'
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
            hp: '38',
            str: '32',
            spr: '32',
            def: '28',
            spd: '34'
        },
        tribe: 'Eerie',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'a',
        favouriteFood: 'Breads',
        type: ['rare']
    },
    {
        name: 'Manjimutt',
        yokaiNumber: '169',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/manjimutt.png',
        description:
            "A man-faced poodle who enjoys scaring people frightened by a poodle with a man's face. Hopes to one day be a CEO.",
        locations: [
            'Blossom Heights - Secret Byway',
            'Blossom Heights - Tucked Away Lot, Secret Byway & Hidden Side Street',
            'Infinite Inferno - 1st Circle',
            'Infinite Inferno - 2nd Circle'
        ],
        skill: {
            name: 'Moist Skin',
            description: 'Takes less damagefrom Water attacks.'
        },
        attack: {
            name: 'Chomp',
            power: '45 to 99'
        },
        technique: {
            name: 'Fire',
            power: '20 to 90'
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
            hp: '24',
            str: '25',
            spr: '23',
            def: '20',
            spd: '25'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'e',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [102],
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Multimutt',
        yokaiNumber: '170',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/multimutt.png',
        description:
            "Nobody wants to get close to Multimutt, because both of his faces look mean. He's a perfect guard dog.",
        locations: [
            'Uptown Springdale - Elementary School',
            'Infinite Inferno - 7-8th Circle',
            'Fusion.'
        ],
        skill: {
            name: 'Moist Skin',
            description: 'Takes less damagefrom Water attacks.'
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
            hp: '32',
            str: '34',
            spr: '26',
            def: '25',
            spd: '30'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [102],
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Sir Berus',
        yokaiNumber: '171',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sir_berus.png',
        description:
            "An elite guard dog born and raised in the netherworld. He doesn't let a single soul escape his grasp.",
        locations: ['Uptown Springdale - Elementary School'],
        skill: {
            name: 'Moist Skin',
            description: 'Takes less damagefrom Water attacks.'
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
            hp: '35',
            str: '38',
            spr: '28',
            def: '30',
            spd: '33'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Chinese foods',
        type: ['rare'],
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Droplette',
        yokaiNumber: '172',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/droplette.png',
        description:
            "Droplette makes his way to places that don't get much sun and makes them damp and moldy...  Gross.",
        locations: [
            'Uptown Springdale - Lonely Waterway',
            'Uptown Springdale - Shady Back Alley'
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
            name: 'Torrent',
            power: '20 to 90'
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
            hp: '22',
            str: '23',
            spr: '26',
            def: '24',
            spd: '22'
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
        yokaiNumber: '173',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/drizzle.png',
        description:
            'Drizzle creates rain clouds wherever it goes. You can find it in places that are thoroughly wet.',
        locations: [
            'Springdale Underground Waterway',
            'Springdale Underground Waterway - Water',
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
            name: 'Rapids',
            power: '50 to 110'
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
            hp: '28',
            str: '25',
            spr: '30',
            def: '28',
            spd: '31'
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
        yokaiNumber: '174',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slush.png',
        description:
            'A large gathering of these frosty Yo-kai could frost anything. Just one can freeze a cup of water.',
        locations: [
            'Springdale Underground Waterway',
            'Springdale Underground Waterway - Water'
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
            name: 'Hail',
            power: '20 to 90'
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
            hp: '24',
            str: '22',
            spr: '24',
            def: '26',
            spd: '21'
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
        yokaiNumber: '175',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/alhail.png',
        description:
            'This Yo-kai has strong ice power by itself. Ice will gradually encase whatever it touches. ',
        locations: [
            'Springdale Underground Waterway',
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
            name: 'Frost',
            power: '50 to 110'
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
            hp: '30',
            str: '20',
            spr: '31',
            def: '34',
            spd: '27'
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
        yokaiNumber: '176',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gush.png',
        description:
            "If it Inspirits you, your nose won't stop bleeding. This Yo-kai can be much scarier than it looks.",
        locations: ['Springdale Underground Waterway - Water'],
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
            hp: '27',
            str: '24',
            spr: '29',
            def: '23',
            spd: '31'
        },
        tribe: 'Eerie',
        element: 'Fire',
        weakness: 'Water',
        rank: 'd',
        favouriteFood: 'Juices',
        type: ['rare']
    },
    {
        name: 'Chatalie',
        yokaiNumber: '177',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chatalie.png',
        description:
            "All talk and no action. If she Inspirits you, you'll be the same and lose the trust of others.",
        locations: ['Downtown Springdale - Springdale Business Tower'],
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
            hp: '29',
            str: '23',
            spr: '29',
            def: '21',
            spd: '27'
        },
        tribe: 'Eerie',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Breads'
    },
    {
        name: 'Nagatha',
        yokaiNumber: '178',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nagatha.png',
        description:
            "Nagatha will make you into the kind of person that'll nag people over the smallest mistake.",
        locations: ['Downtown Springdale - Objects'],
        skill: {
            name: 'Skilled Loafer',
            description: 'Will recover a little HPwhen Loafing around.'
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
            hp: '31',
            str: '34',
            spr: '20',
            def: '25',
            spd: '29'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Breads',
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Dismarelda',
        yokaiNumber: '179',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dismarelda.png',
        description:
            "Her gloomy aura can  darken the mood in any environment. It's even worse when she's in a bad mood.",
        locations: [
            'Downtown Springdale - Construction Site',
            'Downtown Springdale - Behind Frostina, Delivery Bay & Academy Shortcut - Garbages & Dumps',
            "Shopper's Row - Shopping Street Narrows"
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
            name: 'Pebble',
            power: '20 to 90'
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
            hp: '30',
            str: '22',
            spr: '26',
            def: '28',
            spd: '23'
        },
        tribe: 'Eerie',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Breads',
        evolutionIndexes: [86]
    },
    {
        name: 'Cheeksqueek',
        yokaiNumber: '180',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cheeksqueek.png',
        description:
            "A Yo-kai that can't stop farting. There's a rumor that it just has really bad  breath...but I'm not going to clear the air here.",
        locations: ["Shopper's Row - Shopping Street Narrows"],
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
            hp: '26',
            str: '27',
            spr: '26',
            def: '23',
            spd: '30'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'c',
        favouriteFood: 'Milks'
    },
    {
        name: 'Cuttincheez',
        yokaiNumber: '181',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cuttincheez.png',
        description:
            'A god of flatulence. Brace yourself for agony if you get stuck in a windowless room with Cuttincheez.',
        locations: ["Shopper's Row - Trees"],
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
            hp: '32',
            str: '33',
            spr: '30',
            def: '28',
            spd: '36'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Milks',
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Compunzer',
        yokaiNumber: '182',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/compunzer.png',
        description:
            "Even though he wants to make people laugh, Compunzer's jokes fall flat and just lead to awkward silences.",
        locations: ["Shopper's Row - Trees", 'Infinite Inferno - 7-8th Circle'],
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
            hp: '32',
            str: '27',
            spr: '32',
            def: '29',
            spd: '37'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Lamedian',
        yokaiNumber: '183',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/lamedian.png',
        description:
            "His jokes are the worst, inciting only involuntary guffaws at best. But he thinks he's hilarious. IS HE RITE, FOLKS?!",
        locations: [
            'Yo-kai World - Hooligan Road',
            'Yo-kai World - Liar Mountain',
            'Yo-kai World - Entry Hall'
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
            hp: '37',
            str: '26',
            spr: '28',
            def: '26',
            spd: '35'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Chinese foods'
    },
    {
        name: 'Grumples',
        yokaiNumber: '184',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/grumples.png',
        description:
            'Bitter toward youth and beauty, Grumples makes people wrinkly. She was quite the beauty when she was young, though.',
        locations: [
            'Breezy Hills - Gourd Pond Museum',
            'Breezy Hills - Bushes',
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle'
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
            hp: '32',
            str: '25',
            spr: '35',
            def: '24',
            spd: '33'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Milks',
        evolutionIndexes: [108],
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            }
        ]
    },
    {
        name: 'Everfore',
        yokaiNumber: '185',
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
            hp: '40',
            str: '27',
            spr: '40',
            def: '29',
            spd: '36'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Milks',
        evolutionIndexes: [108]
    },
    {
        name: 'Eterna',
        yokaiNumber: '186',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eterna.png',
        description:
            "They say this Yo-kai's immortality stems from her staff and that she'll age instantly without it.",
        locations: [],
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
            hp: '43',
            str: '26',
            spr: '40',
            def: '27',
            spd: '38'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Milks',
        type: ['rare'],
        crankakai: [
            {
                name: 'Purple Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Insomni',
        yokaiNumber: '187',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/insomni.png',
        description:
            "If you catch Insomni's eye, she won't let you fall asleep until she's bored with you...or you're almost dead.",
        locations: [
            'Infinite Inferno - 5th Circle',
            'Infinite Inferno - 6th Circle'
        ],
        skill: {
            name: 'Insecure',
            description: 'High chance to giveand take critical strikes.'
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
            hp: '35',
            str: '26',
            spr: '36',
            def: '27',
            spd: '38'
        },
        tribe: 'Eerie',
        element: 'Ice',
        weakness: 'Fire',
        rank: 's',
        favouriteFood: 'Candies'
    },
    {
        name: 'Sandi',
        yokaiNumber: '188',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sandi.png',
        description:
            "When Sandi Inspirits you, the two of you will play in your dreams. It's too fun to ever wake up from.",
        locations: ['Infinite Inferno - 6th Circle'],
        skill: {
            name: 'Hard Worker',
            description: 'Receives moreexperience points.'
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
            hp: '39',
            str: '28',
            spr: '38',
            def: '29',
            spd: '40'
        },
        tribe: 'Eerie',
        element: 'Drain',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Candies',
        type: ['rare']
    },
    {
        name: 'Noko',
        yokaiNumber: '189',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/noko.png',
        description:
            "This Yo-kai is one lucky snake! It is always scared of being seen by humans. Which happens a lot since it's terrible at hiding.",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Yo-kai World - Liar Mountain',
            'Blossom Heights - Secret Byway'
        ],
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
            hp: '29',
            str: '15',
            spr: '25',
            def: '16',
            spd: '39'
        },
        tribe: 'Slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'e',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [110]
    },
    {
        name: 'Bloominoko',
        yokaiNumber: '190',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bloominoko.png',
        description:
            "The flower on top of Bloominoko's head brings people luck and happiness. Some folks even worship it.",
        locations: ['Infinite Inferno - 7-8th Circle', 'Fusion.'],
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
            hp: '33',
            str: '26',
            spr: '31',
            def: '29',
            spd: '46'
        },
        tribe: 'Slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'a',
        favouriteFood: 'Hamburgers',
        evolutionIndexes: [110]
    },
    {
        name: 'Pandanoko',
        yokaiNumber: '191',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pandanoko.png',
        description:
            "A wandering Yo-kai from a faraway land. It's tough to find and a miracle to actually befriend.",
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
            name: 'Frost',
            power: '50 to 110'
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
            hp: '35',
            str: '28',
            spr: '31',
            def: '31',
            spd: '41'
        },
        tribe: 'Slippery',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Hamburgers',
        type: ['rare']
    },
    {
        name: 'Heheheel',
        yokaiNumber: '192',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/heheheel.png',
        description:
            "This eel just can't stop laughing, and nobody knows why. Maybe its sense of humor is broken.",
        locations: [
            'Mt. Wildwood - Water',
            'Springdale Underground Waterway',
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle'
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
            hp: '27',
            str: '30',
            spr: '21',
            def: '25',
            spd: '24'
        },
        tribe: 'Slippery',
        element: 'Restoration',
        weakness: 'x',
        rank: 'd',
        favouriteFood: 'Meats',
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            }
        ]
    },
    {
        name: 'Croonger',
        yokaiNumber: '193',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/croonger.png',
        description:
            "A pot Yo-kai who sings a strange tune. If you hear singing coming from a pot, don't look into it!",
        locations: [
            'Mt. Wildwood - Water',
            'Downtown Springdale - Construction Site'
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
            name: 'Absorb',
            power: '20 to 90'
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
            hp: '29',
            str: '31',
            spr: '24',
            def: '26',
            spd: '27'
        },
        tribe: 'Slippery',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Meats'
    },
    {
        name: 'Urnaconda',
        yokaiNumber: '194',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/urnaconda.png',
        description:
            "That's no regular pot\u2014 there's a huge snake inside! Some say this inspired the creation of the jack-in-the-box.",
        locations: [
            'Blossom Heights - Tucked Away Lot, Secret Byway & Hidden Side Street',
            'Downtown Springdale - Construction Site'
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
            hp: '30',
            str: '34',
            spr: '21',
            def: '28',
            spd: '24'
        },
        tribe: 'Slippery',
        element: 'Restoration',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Meats'
    },
    {
        name: 'Fishpicable',
        yokaiNumber: '195',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/fishpicable.png',
        description:
            'Fishpicable sees only the bad in people and slaps things he hates with his tail. His tail is very busy.',
        locations: [
            'Downtown Springdale - Water',
            "Shopper's Row - Water",
            'Springdale Underground Waterway'
        ],
        skill: {
            name: 'Waterproof',
            description: 'Takes less damagefrom Water attacks.'
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
            hp: '27',
            str: '23',
            spr: '26',
            def: '25',
            spd: '21'
        },
        tribe: 'Slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'd',
        favouriteFood: 'Meats',
        evolutionIndexes: [114],
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            }
        ]
    },
    {
        name: 'Rageon',
        yokaiNumber: '196',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rageon.png',
        description:
            'Rageon holds grudges for no reason. If you wake up to see him standing next to your bed...RUN!',
        locations: [
            'Downtown Springdale - Water',
            "Shopper's Row - Water",
            'Springdale Underground Waterway',
            'Evolve Fishpicable at Level 27.'
        ],
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
            hp: '33',
            str: '29',
            spr: '36',
            def: '31',
            spd: '20'
        },
        tribe: 'Slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'b',
        favouriteFood: 'Meats',
        evolutionIndexes: [114],
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            }
        ]
    },
    {
        name: 'Tunatic',
        yokaiNumber: '197',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tunatic.png',
        description:
            "Tunatic will go on a rampage if he's criticized at all. He makes kids angry when they get guidance from adults.",
        locations: ["Shopper's Row - Water"],
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
            hp: '37',
            str: '36',
            spr: '31',
            def: '35',
            spd: '25'
        },
        tribe: 'Slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Meats',
        type: ['rare'],
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            },
            {
                name: '3ds Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/3ds_coin.png'
            }
        ]
    },
    {
        name: 'Draggie',
        yokaiNumber: '198',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/draggie.png',
        description:
            'A dragon kid who wants attention. He can see the hidden strengths of others with the ball on his head.',
        locations: [
            'Infinite Inferno - 3rd Circle',
            'Infinite Inferno - 4th Circle',
            'During the story.'
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
            hp: '30',
            str: '22',
            spr: '28',
            def: '23',
            spd: '26'
        },
        tribe: 'Slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 'd',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [126]
    },
    {
        name: 'Dragon Lord',
        yokaiNumber: '199',
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
            hp: '35',
            str: '30',
            spr: '32',
            def: '29',
            spd: '36'
        },
        tribe: 'Slippery',
        element: 'Earth',
        weakness: 'Wind',
        rank: 's',
        favouriteFood: 'Chinese foods',
        evolutionIndexes: [126]
    },
    {
        name: 'Azure Dragon',
        yokaiNumber: '200',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/azure_dragon.png',
        description:
            'A legendary divine beast. It holds domain over water, surpassing even the power of Dragon Lord.',
        locations: ['Infinite Inferno - 4th Circle'],
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
            hp: '40',
            str: '38',
            spr: '32',
            def: '31',
            spd: '33'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 's',
        favouriteFood: 'Chinese foods',
        type: ['rare']
    },
    {
        name: 'Daiz',
        yokaiNumber: '201',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/daiz.png',
        description:
            "Daiz just stares off into space, sometimes not moving for three whole days. What's it thinking about all that time...?",
        locations: ["Shopper's Row - Bushes", "Shopper's Row - Empty flats"],
        skill: {
            name: 'Dodge',
            description: 'All Soultimate Moveswill be dodged.'
        },
        attack: {
            name: 'Body Bash',
            power: '15 to 67'
        },
        technique: {
            name: 'Absorb',
            power: '20 to 90'
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
            hp: '32',
            str: '15',
            spr: '33',
            def: '27',
            spd: '36'
        },
        tribe: 'Slippery',
        element: 'Drain',
        weakness: 'x',
        rank: 'c',
        favouriteFood: 'Candies',
        crankakai: [
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Confuze',
        yokaiNumber: '202',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/confuze.png',
        description:
            "Confuze will make you  babble and mumble. It's the worst when you have to read aloud in class!",
        locations: ["Shopper's Row - Bushes", "Shopper's Row - Empty flats"],
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
            hp: '29',
            str: '26',
            spr: '35',
            def: '30',
            spd: '27'
        },
        tribe: 'Slippery',
        element: 'Drain',
        weakness: 'x',
        rank: 'b',
        favouriteFood: 'Candies',
        crankakai: [
            {
                name: 'Excitement Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png'
            }
        ]
    },
    {
        name: 'Chummer',
        yokaiNumber: '203',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chummer.png',
        description:
            "Chummer loves eating kids. He'll make them loiter after school before devouring them. He likes asparagus too.",
        locations: ['Springdale Underground Waterway'],
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
            hp: '33',
            str: '32',
            spr: '20',
            def: '26',
            spd: '28'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Vegetables',
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            }
        ]
    },
    {
        name: 'Shrook',
        yokaiNumber: '204',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shrook.png',
        description:
            "Shrook will make you bad at whatever you're usually good at. He can make a master into a novice pretty quickly.",
        locations: ['Rugged Path'],
        skill: {
            name: 'Shark Skin',
            description: 'Skin deals damage toattacking foes.'
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
            hp: '37',
            str: '35',
            spr: '18',
            def: '31',
            spd: '25'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Vegetables'
    },
    {
        name: 'Spenp',
        yokaiNumber: '205',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/spenp.png',
        description:
            "Being Inspirited by Spenp will make you buy things you don't even want. Wave bye to your cash!",
        locations: ['Breezy Hills - Water'],
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
            hp: '30',
            str: '22',
            spr: '25',
            def: '34',
            spd: '23'
        },
        tribe: 'Slippery',
        element: 'Wind',
        weakness: 'Ice',
        rank: 'c',
        favouriteFood: 'Breads'
    },
    {
        name: 'Almi',
        yokaiNumber: '206',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/almi.png',
        description:
            "When Almi Inspirits you, you'll want to treat others all the time. Your wallet will be empty before you know it.",
        locations: ['Breezy Hills - Water'],
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
            hp: '33',
            str: '24',
            spr: '28',
            def: '43',
            spd: '26'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Breads',
        type: ['rare']
    },
    {
        name: 'Babblong',
        yokaiNumber: '207',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/babblong.png',
        description:
            "Don't agree to listen to Babblong or else he'll talk and talk and talk and talk and talk and talk. He's a terrible listener. ",
        locations: [
            'Mt. Wildwood - Abandoned Tunnel West',
            'Mt. Wildwood - Abandoned Tunnel East',
            "Shopper's Row - Objects"
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
            hp: '32',
            str: '31',
            spr: '19',
            def: '27',
            spd: '30'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'c',
        favouriteFood: 'Candies'
    },
    {
        name: 'Bananose',
        yokaiNumber: '208',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/bananose.png',
        description:
            'This Yo-kai is made of banana and is often bothered by circling flies. No relation to Babblong.',
        locations: ["Shopper's Row - Objects"],
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
            hp: '39',
            str: '41',
            spr: '21',
            def: '32',
            spd: '31'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Candies',
        type: ['rare']
    },
    {
        name: 'Copperled',
        yokaiNumber: '209',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/copperled.png',
        description:
            "You just can't refuse orders from the fan on this old Yo-kai's tail. And he loves to micromanage everything he can!",
        locations: ['Uptown Springdale - Elementary School'],
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
            hp: '35',
            str: '28',
            spr: '24',
            def: '27',
            spd: '35'
        },
        tribe: 'Slippery',
        element: 'Fire',
        weakness: 'Water',
        rank: 'b',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Cynake',
        yokaiNumber: '210',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cynake.png',
        description:
            'This sulky snake Yo-kai will make you sulk at the slightest problem. Hmph!',
        locations: ['Downtown Springdale - Bushes'],
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
            hp: '33',
            str: '20',
            spr: '33',
            def: '30',
            spd: '28'
        },
        tribe: 'Slippery',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'b',
        favouriteFood: 'Seafoods',
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            }
        ]
    },
    {
        name: 'Slitheref',
        yokaiNumber: '211',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slitheref.png',
        description:
            'When a battle starts, Slitheref will appear out of nowhere and make sure the fight stays fair and square.',
        locations: [
            'Yo-kai World - Hooligan Road',
            'Yo-kai World - Liar Mountain',
            'Yo-kai World - Entry Hall'
        ],
        skill: {
            name: 'Equipment Forbidden!',
            description: 'Equipment effects onall Yo-kai are negated.'
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
            hp: '36',
            str: '32',
            spr: '22',
            def: '33',
            spd: '29'
        },
        tribe: 'Slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Seafoods',
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            }
        ]
    },
    {
        name: 'Venoct',
        yokaiNumber: '212',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/venoct.png',
        description:
            'An elite Yo-kai who fights with his dragon scarf. All of his abilities are truly first class.',
        locations: ['During the story.'],
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
            hp: '35',
            str: '32',
            spr: '38',
            def: '25',
            spd: '42'
        },
        tribe: 'Slippery',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Seafoods'
    },
    {
        name: 'Shadow Venoct',
        yokaiNumber: '213',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shad._venoct.png',
        description:
            "Venoct's shadow, skilled in the deadly arts. Few who learn that he exists live long after that.",
        locations: [],
        skill: {
            name: 'Secrecy',
            description: 'Will not become targetof attacks.'
        },
        attack: {
            name: 'Maul',
            power: '80 to 120'
        },
        technique: {
            name: 'Restore',
            power: '50 to 110'
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
            hp: '38',
            str: '39',
            spr: '33',
            def: '29',
            spd: '35'
        },
        tribe: 'Slippery',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Seafoods',
        type: ['rare'],
        crankakai: [
            {
                name: 'Light-Blue Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png'
            },
            {
                name: 'Special Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png'
            },
            {
                name: '5-star Coin',
                image:
                    'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png'
            }
        ]
    },
    {
        name: 'Shogunyan',
        yokaiNumber: '214',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/shogunyan.png',
        description:
            'Jibanyan turned into a legendary warrior. He just loves skipjack tuna and carries it around in his armor.',
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
            hp: '31',
            str: '39',
            spr: '27',
            def: '23',
            spd: '50'
        },
        tribe: 'Brave',
        element: 'Wind',
        weakness: 'Ice',
        rank: 's',
        favouriteFood: 'Seafoods',
        seal: 12,
        type: ['legendary']
    },
    {
        name: 'Komashura',
        yokaiNumber: '215',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/komashura.png',
        description:
            'A legendary Komasan with the heart of a greater demon. He scorches his foes with infernal flame.',
        locations: ['Medallium.'],
        skill: {
            name: 'Bladed Body',
            description: 'Body deals damage toall foes who attack it.'
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
            hp: '37',
            str: '25',
            spr: '50',
            def: '27',
            spd: '39'
        },
        tribe: 'Mysterious',
        element: 'Fire',
        weakness: 'Water',
        rank: 's',
        favouriteFood: 'Milks',
        seal: 14,
        type: ['legendary']
    },
    {
        name: 'Dandoodle',
        yokaiNumber: '216',
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
            hp: '43',
            str: '20',
            spr: '40',
            def: '26',
            spd: '47'
        },
        tribe: 'Eerie',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Chinese foods',
        seal: 16,
        type: ['legendary']
    },
    {
        name: 'Elder Bloom',
        yokaiNumber: '217',
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
            hp: '32',
            str: '29',
            spr: '41',
            def: '31',
            spd: '45'
        },
        tribe: 'Heartful',
        element: 'Restoration',
        weakness: 'x',
        rank: 's',
        favouriteFood: 'Rice Balls',
        seal: 18,
        type: ['legendary']
    },
    {
        name: 'Gilgaros',
        yokaiNumber: '218',
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
            hp: '45',
            str: '50',
            spr: '18',
            def: '35',
            spd: '40'
        },
        tribe: 'Tough',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 's',
        favouriteFood: 'Meats',
        seal: 4,
        type: ['legendary']
    },
    {
        name: 'Sapphinyan',
        yokaiNumber: '219',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sapphinyan.png',
        description:
            'Jibanyan made of sapphire. Its body is the color of a clear ocean on a beautiful summer day.',
        locations: ['QR Code'],
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
            hp: '33',
            str: '28',
            spr: '38',
            def: '28',
            spd: '36'
        },
        tribe: 'Charming',
        element: 'Water',
        weakness: 'Lightning',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare']
    },
    {
        name: 'Emenyan',
        yokaiNumber: '220',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/emenyan.png',
        description:
            "Jibanyan made of emerald. If you could sell it, it'd be worth more than 100 million dollars.",
        locations: ['QR Code'],
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
            hp: '31',
            str: '30',
            spr: '34',
            def: '30',
            spd: '38'
        },
        tribe: 'Charming',
        element: 'Restoration',
        weakness: 'x',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare']
    },
    {
        name: 'Rubinyan',
        yokaiNumber: '221',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rubinyan.png',
        description:
            'Jibanyan made of ruby. Fire-like light reflects off of it as it fights.',
        locations: ['QR Code'],
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
            hp: '38',
            str: '39',
            spr: '27',
            def: '27',
            spd: '32'
        },
        tribe: 'Charming',
        element: 'Fire',
        weakness: 'Water',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare']
    },
    {
        name: 'Topanyan',
        yokaiNumber: '222',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/topanyan.png',
        description:
            'Jibanyan made of topaz. Making friends with it means you have inherently good luck.',
        locations: ['QR Code'],
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
            hp: '41',
            str: '31',
            spr: '28',
            def: '35',
            spd: '28'
        },
        tribe: 'Charming',
        element: 'Lightning',
        weakness: 'Earth',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare']
    },
    {
        name: 'Dianyan',
        yokaiNumber: '223',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dianyan.png',
        description:
            "Jibanyan made of diamonds. It's said to be the most lavish, timeless, and romantic Yo-kai. Do you think so? I do!",
        locations: ['QR Code'],
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
            hp: '35',
            str: '33',
            spr: '30',
            def: '31',
            spd: '34'
        },
        tribe: 'Charming',
        element: 'Ice',
        weakness: 'Fire',
        rank: 'a',
        favouriteFood: 'Seafoods',
        type: ['rare']
    },
    {
        name: 'Slimamander',
        yokaiNumber: '224',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/slimamander.png',
        description:
            "A huge, snakelike Yo-kai with three bigmouthed heads and skin thicker than an elephant's. Aim for the eye in its mouth!",
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
        yokaiNumber: '225',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sproink.png',
        description:
            "This middle-aged Yo-kai loves hot baths and even sneaks into hot springs after hours. He turns red and snorts fire from his nose when he's been soaking too long.",
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
        yokaiNumber: '226',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sv_snaggerjag.png',
        description:
            'The guardian spirit of Catfish Pond, he gets mad if he sees anyone mistreating it. The fish respect his manly personality and will do whatever he asks.',
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
        yokaiNumber: '227',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/massiface.png',
        description:
            'If a giant, man-shaped shadow falls over you on a hazy night, DO NOT turn around. Just wait for him to leave. Those who turn around disappear and fade from memory...',
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
        yokaiNumber: '228',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/phantasmurai.png',
        description:
            "This eerie suit of armor wanders the museum every night. Or at least that's what a little mouse wants you to think.",
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
        yokaiNumber: '229',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tarantutor.png',
        description:
            "A spider Yo-kai that lives at school and looks for prime opportunities to eat students. It's so shy it comes out only at night.",
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
        yokaiNumber: '230',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dr._maddiman.png',
        description:
            'This madman used to  perform experiments on humans at his hospital. Now, as a Yo-kai, he continues his search for new test subjects.',
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
        name: 'McKraken',
        yokaiNumber: '231',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mckraken.png',
        description:
            'The leader of the group trying to take over the Yo-kai World. He can absorb energy through the holes in his hands. His full name is Squiddilius McKraken.',
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
        yokaiNumber: '232',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mckraken.png',
        description:
            'The leader of the group trying to take over the Yo-kai World. He can absorb energy through the holes in his hands. His full name is Squiddilius McKraken.',
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
        yokaiNumber: '233',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/duwheel.png',
        description:
            "The blue, cheery side of Duwheel is always smiling. Don't cross it, or its head will flip upside down and turn an angry shade of red!",
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
        yokaiNumber: '234',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chirpster.png',
        description:
            "If you hear music coming from an old, abandoned mansion, this Yo-kai is likely partying there. If you stumble in, you may be dancing 'til dawn!",
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
        yokaiNumber: '235',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/eyedra.png',
        description:
            'A huge salamander Yo-kai that lives in the inferno. Those who fall under its red-eyed gaze cower in fear before being swallowed whole.',
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
        yokaiNumber: '236',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hoggles.png',
        description:
            'He was once a tiny pig Yo-kai, but when he drank broth he made by boiling other Yo-kai...he got huge!',
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
        yokaiNumber: '237',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/styx_mk.vi.png',
        description:
            'The Styx Mk. VI fishes souls out of the River Styx. No sinner escapes his net. On good fishing days, he sings sea shanties that resound through the inferno.',
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
        yokaiNumber: '238',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/clipso.png',
        description:
            'This massive being returns to earth on cloud- covered nights to take away kids who like to stay up all night. Good night!',
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
        yokaiNumber: '239',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/dr._nogut.png',
        description:
            'A mad doctor Yo-kai who wants to create an ideal Yo-kai by combining humans who fell into the inferno with other Yo-kai. He even used his own guts in one experiment.',
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
        yokaiNumber: '240',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/spooklunk.png',
        description:
            'This armor once belonged to a strong warrior. It now  gathers vassals in the inferno and waits to return to battle someday.',
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
        yokaiNumber: '241',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/squisker.png',
        description:
            "Sent to the inferno after falling victim to one of his distant relative's schemes, this former politician is filled with a blind rage.",
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
        yokaiNumber: '242',
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
        name: 'Gargaros',
        yokaiNumber: '243',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/gargaros.png',
        description:
            "A giant red Oni that appears in children's nightmares. Some say it's the essence of childhood fears given full form. If you triumph over this nightmare, you will grow as a person.",
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
        yokaiNumber: '244',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ogralus.png',
        description:
            'Ogralus is said to appear in the dreams of lying children to scare them back to honesty. Liars cannot escape from Ogralus or their nightmares.',
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
        yokaiNumber: '245',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/orcanos.png',
        description:
            'Orcanos appears in the nightmares of lazy children and spanks them with its iron bat. The pain usually jolts them awake. So...did you do all of your homework?',
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
