const items = [
    {
        name: 'Mini Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mini_exporb.png',
        description:
            'A touch of this teeny orb is worth three hours of training.',
        effect: 'Gain 10 EXP.',
        locations: [
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Dropped by Brushido',
            'Dropped by Wotchagot',
            'Dropped by No-Go Kart',
            'Dropped by Tongus'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,2', buy: '1' },
        type: 'items'
    },
    {
        name: 'Small Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/small_exporb.png',
        description: 'Three days of training in one touch of this orb.',
        effect: 'Gain 50 EXP.',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale – Elementary School 1F',
            'Breezy Hills',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Pandle',
            'Dropped by Cutta-nah',
            'Dropped by Cutta-nah-nah',
            'Dropped by Dulluma',
            'Dropped by Cadin',
            'Dropped by Ake',
            'Dropped by Peckpocket',
            'Dropped by Mermadonna',
            'Dropped by Unfairy',
            'Dropped by Unkaind',
            'Dropped by Untidy',
            'Dropped by Unpleasant',
            'Dropped by Unkeen'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '10' },
        type: 'items'
    },
    {
        name: 'Medium Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/medium_exporb.png',
        description: 'Those who touch this orb get the demeanor of a master.',
        effect: 'Gain 500 EXP.',
        locations: [
            'Mt. Wildwood – Jumbo Slider',
            'Downtown Springdale',
            'Downtown Springdale – Springdale Business Tower',
            'Breezy Hills – Gourd Pond Museum',
            'Springdale Underground Waterway',
            'San Fantastico',
            'Harrisville',
            'Harrisville – Rice Paddy Path',
            'Old Springdale',
            'Old Springdale – Well Road',
            'Old Harrisville',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Cutta-nah-nah',
            'Dropped by Slicenrice',
            'Dropped by Blazion',
            'Dropped by Castelius II',
            'Dropped by Castelius I',
            'Dropped by Jumbelina',
            'Dropped by Gnomey',
            'Dropped by Mynimo',
            'Dropped by Slush',
            'Dropped by Flumpy',
            'Dropped by Gnomine',
            'Quest – Go for Rank C!',
            'Quest – Treasure Hunters Pt. 1',
            'Lottery',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '8', buy: '0,8' },
        type: 'items'
    },
    {
        name: 'Large Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/large_exporb.png',
        description:
            "This orb bestows three lives' worth of EXP at a single touch.",
        effect: 'Gain 2,000 EXP.',
        locations: [
            'Uptown Springdale – Lonely Waterway',
            'Mt. Wildwood',
            'Mt. Wildwood – Abandoned Tunnel West',
            'Downtown Springdale – Construction Site',
            'Breezy Hills – Gate Room – Traffic–Light Zone',
            "Breezy Hills – Gate Room – Compunzer's Zone",
            'Excellent Tower',
            'San Fantastico – Briny Grotto',
            'San Fantastico – Seaside Cave',
            'Old Springdale',
            'Old Springdale – Flatpot Plains',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Washogun',
            'Dropped by Lie-in Heart',
            'Dropped by Beetler',
            'Dropped by Houzzat',
            'Dropped by Casanuva',
            'Dropped by Rhinormous',
            'Dropped by Skelebella',
            'Dropped by High Gnomey',
            'Dropped by Tyrat',
            'Dropped by Multimutt',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '26', buy: '260' },
        type: 'items'
    },
    {
        name: 'Mega Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mega_exporb.png',
        description:
            "It contains the wisdom of some of the world's sharpest minds.",
        effect: 'Gain 8,000 EXP.',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel East',
            'Yo–kai World – Hooligan Road',
            'Downtown Springdale – Springdale Business Tower',
            'Breezy Hills – Gate Room – Can–Kicking Zone',
            "Breezy Hills – Gate Room – Compunzer's Zone – Quiz Room 1F",
            'Old Springdale – Flatpot Plains',
            'Gera Gera Land',
            'Sawayama-jo – Area 1',
            'Mystery Way',
            'Gold–Gleaming Hwy.',
            'Infinite Inferno – 1st Circle',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yo Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Kai Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Sum Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Mon Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Wind Excitement Coin',
            'Mt.Wildwood – Crank–a–kai – Moon Excitement Coin',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Mt.Wildwood – Crank–a–kai – Cheerful Coin',
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Memory Store',
            'Jungle Hunter',
            'Dropped by Demuncher',
            'Dropped by Toadal Dude',
            'Dropped by Arachnus',
            'Dropped by Mermother',
            'Dropped by Shad. Venoct',
            'Dropped by Dame Dedtime',
            'Lottery',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '92', buy: '920' },
        type: 'items'
    },
    {
        name: 'Holy Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_exporb.png',
        description:
            'A tiny lizard touched this orb. That tiny lizard is a dinosaur now.',
        effect: 'Gain 20,000 EXP.',
        locations: [
            'Yo–kai World – Entry Hall',
            'Gera Gera Land',
            'Divine Paradise – 5F',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yo Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Kai Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Sum Mystery Coin',
            'Mt.Wildwood – Crank–a–kai – Mon Mystery Coin',
            'Mystery Way – Crank–a–kai – Butterfly Mystery Coin',
            'Dropped by Dame Demona',
            'Dropped by Kat Kraydel',
            'Quest – Nightmare Revelation',
            "Quest – Jibanyan's Own Home",
            'Brush your teeth at your place. Can be repeated.',
            'Dropped by Darkyubi.',
            'Dropped by Illuminoct.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '150', buy: '990' },
        type: 'items'
    },
    {
        name: 'Staminum',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum.png',
        description: 'This drink lets humans run without getting tired at all!',
        effect: 'Temporary infinite stamina.',
        locations: [
            'Chloro–Phil Good',
            'Dropped by Mochismo',
            'Dropped by Minochi',
            'Dropped by Blowkade',
            'Dropped by Robonyan',
            'Dropped by Goldenyan',
            'Dropped by Leggly',
            'Dropped by Wondernyan'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,4', buy: '12' },
        type: 'items'
    },
    {
        name: 'Staminum Alpha',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum_alpha.png',
        description: "Staminum Alpha lasts longer than regular ol' Staminum.",
        effect: 'Temporary infinite stamina.',
        locations: [
            'Uptown Springdale',
            'Mt. Wildwood',
            'Downtown Springdale – Springdale Business Tower',
            'Harrisville – Cicada Canyon',
            'Jungle Hunter',
            'Chloro–Phil Good',
            'Dropped by Nekidspeed',
            'Dropped by Master Nyada',
            'Dropped by Pallysol',
            'Dropped by Dimmy',
            'Dropped by Squeeky',
            'Dropped by Furdinand',
            'Dropped by Shamasol',
            'Quest – Super Hide-and-Seek',
            'Quest – The Bear Boy Returns'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '4,8', buy: '24' },
        type: 'items'
    },
    {
        name: 'Hidden Hits',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hidden_hits.png',
        description: "A book of combat secrets. You'll be an attack master!",
        effect: 'Increases Attack skill.',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'Mt. Wildwood – Abandoned Tunnel East',
            'Yo–kai World – Entry Hall',
            'Downtown Springdale – Construction Site',
            "Breezy Hills – Gate Room – Compunzer's Zone",
            'Springdale Underground Waterway',
            'Old Springdale – Flatpot Plains',
            'Gera Gera Land',
            'Sawayama-jo – Area 1 – Trees',
            'Infinite Inferno – 1st Circle',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Tanbo',
            'Dropped by Reuknight',
            'Dropped by Sheen',
            'Dropped by Kapunki',
            'Dropped by Tengu',
            'Dropped by Slimamander',
            'Dropped by Timidevil',
            'Dropped by Azure Dragon',
            'Dropped by Shogunyan',
            'Dropped by Dandoodle',
            'Dropped by Slimamander',
            'Dropped by Eyedra',
            "Dropped by Cap'n Rex",
            'Dropped by Gargaros',
            "Quest – Nyada's Trials II",
            'Quest – Go for Rank B!',
            'Quest – Slicenrice Under Fire',
            'Quest – Legendary Legacy',
            'Lottery',
            'Dropped by Moximous N.',
            'Dropped by Illuminoct.',
            'Dropped by Gargaros.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '40', buy: '200' },
        type: 'items'
    },
    {
        name: 'Top Techniques',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/top_techniques.png',
        description:
            'Give your Techniques a boost with this instructional book.',
        effect: 'Increases Technique level.',
        locations: [
            'Yo–kai World – Hungry Pass',
            'Downtown Springdale – Construction Site',
            "Shopper's Row – Nocturne Hospital",
            'Springdale Underground Waterway',
            'Old Springdale – Flatpot Plains',
            'Gera Gera Land',
            'Sawayama-jo – Area 1 – Trees',
            'Infinite Inferno – 3rd Circle',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Snee',
            'Dropped by Flengu',
            'Dropped by Damona',
            'Dropped by Beelzebold',
            'Dropped by SV Snaggerjag',
            'Dropped by Komashura',
            'Dropped by Spoilerina',
            'Dropped by Elder Bloom',
            'Dropped by Poofessor',
            'Dropped by SV Snaggerjag',
            'Dropped by Styx Mk.VI',
            'Dropped by Duwheel',
            'Dropped by Flippa',
            'Quest – Go for Rank B!',
            'Quest – Train Lie-in with Pride',
            'Quest – Train Lie-in with Pride',
            "Quest – Cap'n Crash...'n' Burn",
            'Lottery',
            'Excellent Tower – Scratch-off',
            'Dropped by Moximous K.',
            'Dropped by Darkyubi.',
            'Dropped by Ogralus.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '40', buy: '200' },
        type: 'items'
    },
    {
        name: 'Soul Secrets',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/soul_secrets.png',
        description: 'A book on the secrets of Soultimate Moves.',
        effect: 'Increases Soultimate level.',
        locations: [
            'Yo–kai World – Hooligan Road',
            'Downtown Springdale – Construction Site',
            'San Fantastico',
            'Old Springdale – Flatpot Plains',
            'Gera Gera Land',
            'Sawayama-jo – Area 1 – Trees',
            'Infinite Inferno – 4th Circle',
            'Divine Paradise – 2F',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Dropped by Corptain',
            'Dropped by Gleam',
            'Dropped by Scritchy',
            'Dropped by Count Cavity',
            'Dropped by Skreek',
            'Dropped by Sir Berus',
            'Dropped by Furdinand',
            'Dropped by Gilgaros',
            'Dropped by Slurpent',
            'Dropped by Squisker',
            'Dropped by Dame Dredful',
            'Quest – Find Pallysol!',
            'Quest – Independent Study, Pt. 3',
            'Lottery',
            'Dropped by Orcanos.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '40', buy: '200' },
        type: 'items'
    },
    {
        name: 'A Serious Life',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/a_serious_life.png',
        description:
            'A book about giving life your all. Good for a lazy Yo-kai.',
        effect: 'Makes a Yo-kai Loaf less.',
        locations: [
            'Yo–kai World – Liar Mountain',
            'Downtown Springdale – Springdale Business Tower',
            'Springdale Underground Waterway',
            'Gera Gera Land',
            'Infinite Inferno – 3rd Circle',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Dropped by Slacka-slash',
            'Dropped by Awevil',
            'Dropped by Pandanoko',
            'Dropped by McKraken',
            'Quest – Find Pallysol!',
            'Quest – A Card-Carrying Liar',
            'Quest – Independent Study, Pt. 1',
            'Quest – Independent Study, Pt. 2',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '250' },
        type: 'items'
    },
    {
        name: 'Think Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/think_karate.png',
        description:
            "A book on the karate mind-set. Change a Yo-kai's Attitude.",
        effect: 'Makes a Yo-kai Grouchy.',
        locations: [
            'Uptown Springdale',
            'Settle In Bookstore',
            'Dropped by Hissfit',
            'Dropped by Mochismo',
            'Dropped by Sgt. Burly',
            'Dropped by Scarasol',
            'Dropped by Smashibull',
            'Dropped by Firewig',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: 'Use Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/use_karate.png',
        description:
            'A book on advanced karate. It makes you focus on attacking.',
        effect: 'Makes a Yo-kai Rough.',
        locations: [
            'Blossom Heights – Old Mansion Attic',
            "Shopper's Row – Shopping Street Narrows",
            'Harrisville – Station Plaza',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Minochi',
            'Dropped by Mudmunch',
            'Dropped by Quaken',
            'Dropped by Sushiyama',
            'Dropped by Payn',
            'Dropped by Ben Tover',
            'Dropped by Shrook',
            'Dropped by Madmunch',
            'Quest – Customer Attraction!',
            'Quest – Your Local Mascot',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: 'Skill Compendium',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_compendium.png',
        description: 'An illustrated collection of Yo-kai Skills. Fascinating!',
        effect: 'Makes a Yo-kai Logical.',
        locations: [
            'Uptown Springdale – The Catwalk',
            'Settle In Bookstore',
            'Dropped by Pittapatt',
            'Dropped by Snotsolong',
            'Dropped by Wazzat',
            'Dropped by Lafalotta',
            'Dropped by Miradox',
            'Dropped by Illoo',
            'Dropped by Elloo',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: 'Skill Encyclopedia',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_encyclopedia.png',
        description:
            'A book containing EVERY single Yo-kai Skill ever! A must-have!',
        effect: 'Makes a Yo-kai Brainy.',
        locations: [
            'Blossom Heights – Old Mansion Attic',
            'San Fantastico – Seaside Cave',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Duchoo',
            "Dropped by N'more",
            'Dropped by Blips',
            'Dropped by Alloo',
            'Dropped by Chymera',
            'Dropped by Kingmera',
            'Dropped by Komashura',
            'Quest – Customer Attraction!',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: 'Get Guarding',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/get_guarding.png',
        description: 'A book on the importance of defense, with handy images.',
        effect: 'Makes a Yo-kai Careful.',
        locations: [
            'Breezy Hills',
            'Settle In Bookstore',
            'Dropped by Terrorpotta',
            'Dropped by Noway',
            'Dropped by Mimikin',
            'Dropped by Enduriphant',
            'Dropped by Abodabat',
            'Dropped by Danke Sand',
            'Dropped by No Sandkyu',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: 'Guard Gloriously',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/guard_gloriously.png',
        description:
            'This book proves the greatness of defense. Who needs offense?',
        effect: 'Makes a Yo-kai Calm.',
        locations: [
            'Blossom Heights',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Darumacho',
            'Dropped by Noway',
            'Dropped by Armsman',
            'Dropped by Ledballoon',
            'Dropped by Fidgephant',
            'Dropped by Touphant',
            'Dropped by Belfree',
            'Dropped by Coughkoff',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: "Li'l Angel Heals",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/li_l_angel_heals.png',
        description:
            'A book about an angel healing people. Gives you a kind heart.',
        effect: 'Makes a Yo-kai Gentle.',
        locations: [
            'Breezy Hills',
            'Harrisville – Mt. Middleton – Summit',
            'Settle In Bookstore',
            'Dropped by Shmoopie',
            'Dropped by Rhyth',
            'Dropped by Nurse Tongus',
            'Dropped by Urnaconda',
            'Dropped by Lady Longnek',
            'Dropped by Wrongnek',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: "Bye, Li'l Angel",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bye__li_l_angel.png',
        description:
            'The last book in the "Li\'l Angel" series. So heartwarming!',
        effect: 'Makes a Yo-kai Tender.',
        locations: [
            'Mt. Wildwood',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Pinkipoo',
            'Dropped by Kelpacabana',
            'Dropped by Tongus',
            'Dropped by Enerfly',
            'Dropped by Reversa',
            'Dropped by Heheheel',
            'Dropped by Lady Longnek',
            'Dropped by Wrongnek',
            'Quest – Your Local Mascot',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: "The Pest's Quest",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_pest_s_quest.png',
        description:
            'A novel about two country boys intent on becoming real pains.',
        effect: 'Makes a Yo-kai Twisted.',
        locations: ["Shopper's Row", 'Settle In Bookstore', 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: 'The Perfect Pest',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_perfect_pest.png',
        description:
            'The epic sequel, in which our heroes earn ultimate pesthood.',
        effect: 'Makes a Yo-kai Cruel.',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel West',
            "Shopper's Row – Nocturne Hospital",
            'San Fantastico',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Skranny',
            'Dropped by Enefly',
            'Dropped by Reversette',
            'Dropped by Moskevil',
            'Dropped by Tantroni',
            'Dropped by Yoodooit',
            'Dropped by Hurchin',
            'Dropped by Compunzer'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: 'Support Life #7',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/support_life_#7.png',
        description:
            "July's issue of the #1 magazine for those who live to serve.",
        effect: 'Makes a Yo-kai Helpful.',
        locations: [
            'Downtown Springdale',
            'Settle In Bookstore',
            'Dropped by Dummkap',
            'Dropped by Don Chan',
            'Dropped by Negasus',
            'Dropped by Noko',
            'Dropped by Vacuumory',
            'Dropped by Takoyakid',
            'Dropped by Takoyaking',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2,5', buy: '9,8' },
        type: 'items'
    },
    {
        name: 'Support Special',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/support_special.png',
        description: "A digest containing the year's best articles.",
        effect: 'Makes a Yo-kai Devoted.',
        locations: [
            'Excellent Tower',
            'Harrisville – Cicada Canyon',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Settle In Bookstore',
            'Dropped by Brokenbrella',
            'Dropped by Happierre',
            'Dropped by Negasus',
            'Dropped by Neighfarious',
            'Dropped by Papa Windbag',
            'Dropped by Bloominoko',
            'Dropped by Flushback',
            'Dropped by Spoilerina',
            'Quest – Your Local Mascot',
            'Quest – A Real Charmer',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'items'
    },
    {
        name: 'Str. Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/str._talisman.png',
        description:
            'A curious charm that boosts Strength. Sold at the shrine. ',
        effect: 'Temporary STR boost.',
        locations: [
            'Mt. Wildwood Trail',
            'Harrisville – Rice Paddy Path',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            'Everymart Uptown',
            'Mt. Wildwood Shrine',
            'Dropped by Helmsman',
            'Dropped by Reuknight',
            'Dropped by Mudmunch',
            'Dropped by Sheen',
            'Dropped by Benkei',
            'Dropped by Kapunki',
            'Dropped by Dragon Lord',
            'Dropped by Gilgaros',
            'Dropped by Madmunch',
            'Quest – Ghost Club at School',
            'Dropped by Gargaros.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '10' },
        type: 'items'
    },
    {
        name: 'Spirit Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spirit_talisman.png',
        description: 'A curious charm that boosts Spirit. Sold at the shrine.',
        effect: 'Temporary SPR boost.',
        locations: [
            'Blossom Heights',
            'San Fantastico',
            'Harrisville – Fullface Rock',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            'Everymart Uptown',
            'Mt. Wildwood Shrine',
            'Dropped by Snee',
            'Dropped by Alloo',
            'Dropped by Espy',
            'Dropped by Kyubi',
            'Dropped by Frostail',
            "Dropped by Ray O'Light",
            'Dropped by Kyryn',
            'Dropped by Compunzer',
            'Dropped by Mermother',
            'Quest – Ghost Club at School',
            'Dropped by Ogralus.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '10' },
        type: 'items'
    },
    {
        name: 'Def. Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/def._talisman.png',
        description: 'A curious charm that boosts Defense. Sold at the shrine.',
        effect: 'Temporary DEF boost.',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'San Fantastico – Hidden Workshop',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            'Everymart Uptown',
            'Mt. Wildwood Shrine',
            'Dropped by Impass',
            'Dropped by Walldin',
            'Dropped by Castelius Max',
            'Dropped by Toadal Dude',
            'Dropped by Uber Geeko',
            'Dropped by Unikirin',
            'Dropped by Robodraggie',
            'Dropped by Orcanos.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '10' },
        type: 'items'
    },
    {
        name: 'Speed Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_talisman.png',
        description: 'A curious charm that boosts Speed. Sold at the shrine.',
        effect: 'Temporary SPD boost.',
        locations: [
            'Downtown Springdale',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Everymart Uptown',
            'Mt. Wildwood Shrine',
            'Dropped by Gleam',
            'Dropped by Leggly',
            'Dropped by Lamedian',
            'Dropped by Arachnus',
            'Dropped by Arachnia',
            'Dropped by Venoct',
            'Dropped by Shad. Venoct',
            'Dropped by Dandoodle',
            'Dropped by Robomutt'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '10' },
        type: 'items'
    },
    {
        name: 'Nasty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nasty_medicine.png',
        description: "It's nasty, but it'll revive an unconscious Yo-kai.",
        effect: 'Revive Yo-kai with 1/4 HP.',
        locations: [
            'Uptown Springdale',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Fusion.',
            'Memory Store',
            'Chloro–Phil Good',
            "Dropped by D'wanna",
            "Dropped by Q'wit",
            'Dropped by Infour',
            'Dropped by Hungramps',
            'Dropped by Sandmeh',
            'Dropped by Awevil',
            'Dropped by Furgus',
            'Dropped by Feargus',
            'Quest – The Price of the World'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '3', buy: '30' },
        type: 'items'
    },
    {
        name: 'Bitter Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bitter_medicine.png',
        description: 'This bitter herbal mix will jolt a Yo-kai to its feet.',
        effect: 'Revive Yo-kai with 1/2 HP.',
        locations: [
            "Shopper's Row – Nocturne Hospital",
            "Breezy Hills – Gate Room – Compunzer's Zone",
            'Breezy Hills – Gourd Pond Museum',
            'Springdale Underground Waterway',
            'San Fantastico',
            'Harrisville',
            'Old Springdale',
            'Old Springdale – Springdale Ironworks',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Fusion.',
            'Memory Store',
            'Chloro–Phil Good',
            'Dropped by Verygoodsir',
            'Dropped by Bakulia',
            'Dropped by Pookivil',
            'Dropped by Mr. Sandmeh',
            'Dropped by Tengloom',
            'Dropped by Nird',
            'Dropped by Dismarelda',
            'Dropped by Cuttincheez',
            'Dropped by Grumples',
            'Quest – Long Lost Love',
            'Quest – The Price of the World',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '6', buy: '60' },
        type: 'items'
    },
    {
        name: 'Mighty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mighty_medicine.png',
        description: 'This secret herbal blend will instantly revive a Yo-kai.',
        effect: 'Revive Yo-kai with full HP.',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel East',
            'Yo–kai World – Liar Mountain',
            'Old Springdale – Flatpot Plains',
            'Gera Gera Land',
            'Sawayama-jo – Area 1',
            'Mystery Way',
            'Bony Spirits Way',
            'Fleshy Souls',
            'Gold–Gleaming Hwy.',
            'Infinite Inferno – 3rd Circle',
            'Infinite Inferno – 7th Circle',
            'Divine Paradise – 3F',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Jungle Hunter',
            'Dropped by Foiletta',
            'Dropped by Everfore',
            'Dropped by Eterna',
            'Dropped by Gin',
            'Dropped by Dame Demona',
            'Dropped by Dr. Maddiman',
            'Dropped by Dr. Nogut',
            'Quest – Back to Yo-kai World',
            'Quest – The Price of the World',
            'Quest – The Darknyan',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '24', buy: '120' },
        type: 'items'
    },
    {
        name: 'Getaway Plush',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/getaway_plush.png',
        description:
            "Nobody can look away from this odd doll. It's a fine distraction.",
        effect: 'Allows you to flee.',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale – Elementary School 1F',
            'Mt. Wildwood – Abandoned Tunnel West',
            "Shopper's Row – Nocturne Hospital",
            'San Fantastico – Seaside Cave',
            'Everymart Uptown',
            'Everymart Blossom Heights',
            'Everymart Downtown',
            "Everymart Shopper's Row",
            'Everymart Breezy Hills',
            'Excellent Tower – Everymart',
            'Dropped by Cutta-nah',
            'Dropped by Corptain',
            'Dropped by Brokenbrella',
            'Dropped by Wazzat',
            'Dropped by So-Sorree',
            'Dropped by Bowminos',
            'Dropped by Harry Barry',
            'Dropped by Hungramps',
            "Dropped by Ol' Saint Trick",
            'Dropped by Dimmy',
            'Dropped by Blandon',
            'Dropped by Nul',
            'Dropped by Pandanoko',
            'Quest – Treasure Hunters Pt. 2'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '5' },
        type: 'items'
    },
    {
        name: 'Iron Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/iron_doll.png',
        description: "It's cumbersome, but it's worth a little cash.",
        effect: '',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale – Elementary School 1F',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Mystery Way – Crank–a–kai – Mystery Coin',
            'Dropped by Mirapo',
            'Dropped by Pride Shrimp',
            'Dropped by Mistank',
            'Dropped by Armsman',
            'Dropped by Ledballoon',
            'Dropped by Dazzabel',
            'Dropped by Leadoni',
            'Dropped by Spenp'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '3', buy: '3' },
        type: 'items'
    },
    {
        name: 'Bronze Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bronze_doll.png',
        description: 'A bronze doll. It sells for a decent amount of cash.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            'Mt. Wildwood – Jumbo Slider',
            'Blossom Heights – Tucked Away Lot',
            'Breezy Hills',
            'Breezy Hills – Gourd Pond Museum',
            'Springdale Underground Waterway',
            'Harrisville',
            'Old Springdale',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            'Mystery Way – Crank–a–kai – Mystery Coin',
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            'Dropped by Brushido',
            'Dropped by Houzzat',
            'Dropped by Castelius III',
            'Dropped by Supoor Hero',
            'Dropped by Manjimutt',
            'Dropped by Snaggly',
            'Dropped by Mermaidyn',
            'Dropped by Almi',
            'Dropped by Scaremaiden',
            'Lottery',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Silver Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/silver_doll.png',
        description: 'A cool silver doll. This can be sold for quite a bit.',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel West',
            'Downtown Springdale – Springdale Business Tower',
            'Downtown Springdale – Construction Site',
            "Shopper's Row – Nocturne Hospital",
            'Hills – Stone House',
            "Breezy Hills – Gate Room – Compunzer's Zone",
            'San Fantastico',
            'San Fantastico – Seaside Cave',
            'Harrisville – Cicada Canyon',
            'Old Springdale – Springdale Ironworks',
            'Old Springdale – Flatpot Plains',
            'Old Springdale – Gourd Pond',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 3DS coin',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Mystery Way – Crank–a–kai – Mystery Coin',
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            'Dropped by Castelius II',
            'Dropped by Supoor Hero',
            'Dropped by Abodabat',
            'Dropped by Gimme',
            'Dropped by Cheeksqueek',
            'Dropped by Confuze',
            'Dropped by Spenp',
            'Dropped by Almi',
            'Dropped by Chirpster',
            'Quest – Find Predictabull!',
            'Quest – Go for Rank A!',
            'Quest – The Price of Iron',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Golden Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/golden_doll.png',
        description: 'A pure-gold doll that sells for a whole lot of cash.',
        effect: '',
        locations: [
            'Yo–kai World – Entry Hall',
            'Gera Gera Land',
            'Sawayama-jo – Area 1',
            'Mystery Way',
            'Gold–Gleaming Hwy.',
            'Infinite Inferno – 5th Circle',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Red Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Yellow Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Orange Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Pink Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Green Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Purple Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – Light Blue Coin (Past)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Present)',
            'Mt.Wildwood – Crank–a–kai – 5–star Coin (Past)',
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin North",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Northeast",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin East",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Central",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin West",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Mountain",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin South",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Midwest",
            "Mt.Wildwood – Crank–a–kai – Traveler's Coin Island",
            'Mt.Wildwood – Crank–a–kai – Cheerful Coin',
            'Mystery Way – Crank–a–kai – Mystery Coin',
            'Mystery Way – Crank–a–kai – Boar Mystery Coin',
            'Mystery Way – Crank–a–kai – Deer Mystery Coin',
            "Shopper's Row – Tranquility Apts. – B–102",
            'Dropped by Castelius I',
            'Dropped by Goldenyan',
            'Dropped by Eyephoon',
            "Quest – Nyada's Trials VI",
            "Quest – Mr. Byrd's Tragic Tale",
            'Quest – Whistory Lesson, Part 2',
            'Lottery',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '200', buy: '200' },
        type: 'items'
    },
    {
        name: 'Platinum Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_doll.png',
        description: 'This exquisite doll is bound to fetch a great price!',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise – 3F',
            'Mystery Way – Crank–a–kai – Mystery Coin',
            'Dropped by Castelius Max',
            'Quest – Getting Gera Gera Going'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '600', buy: '600' },
        type: 'items'
    },
    {
        name: 'Fish Bait',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fish_bait.png',
        description: 'Bait made by Mr. Fischer. This makes it easier to fish.',
        effect: '',
        locations: ['Uptown – Fish Place', "Rusty's Mart"],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,3', buy: '1' },
        type: 'items'
    },
    {
        name: 'Black Syrup',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_syrup.png',
        description: "Bugs love this stuff. It'll make bugs easier to catch.",
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Harrisville – Fullface Rock',
            'Jungle Hunter',
            'Mountain Market',
            'Dropped by Beetler',
            'Dropped by Beetall',
            'Dropped by Cruncha',
            'Dropped by Rhinoggin',
            'Dropped by Rhinormous',
            'Dropped by Hornaplenty',
            'Dropped by Cadin',
            'Dropped by Cadable',
            'Dropped by Enerfly',
            'Dropped by Enefly',
            'Dropped by Betterfly',
            'Dropped by Peppillon'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,3', buy: '1' },
        type: 'items'
    },
    {
        name: 'Dancing Star',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dancing_star.png',
        description:
            'A sparkling star. Rumor has it someone is gathering these.',
        effect: '',
        locations: [
            'Mt. Wildwood Summit',
            'Yo–kai World – Liar Mountain',
            'Breezy Hills',
            'Springdale Underground Waterway',
            'Harrisville',
            'Old Harrisville',
            'Gera Gera Land',
            'Infinite Inferno – 4th Circle',
            'Quest – Trying Tangle Tango'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Lottery Ticket',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lottery_ticket.png',
        description: 'Purchased from the Candy Stop. Will you win big?',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel West',
            'Blossom Heights',
            'Blossom Heights – Old Mansion Attic',
            'Blossom Heights – Old Mansion House',
            'Springdale Underground Waterway',
            'San Fantastico',
            'Gera Gera Land',
            'Mystery Way',
            'Bony Spirits Way',
            'Fleshy Souls',
            'Gold–Gleaming Hwy.',
            'Infinite Inferno – 3rd Circle',
            'Dropped by So-Sorree',
            'Dropped by Rollen',
            'Dropped by Dubbles',
            'Dropped by Yoink',
            'Dropped by Wondernyan',
            'Quest – The Secret Base'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Music Card',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/music_card.png',
        description:
            'Add some music to your day by trading this card for tunes.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School 1F',
            "Shopper's Row",
            'Breezy Hills – Gourd Pond Museum',
            'Excellent Tower',
            'Springdale Underground Waterway',
            'Gera Gera Land',
            'Infinite Inferno – 1st Circle',
            'Quest – Hangout Havoc',
            'Quest – Time and Toys'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Bronze Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bronze_tag.png',
        description: 'Lets you access bronze levels in Yo-kai Watch Blasters.',
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Silver Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/silver_tag.png',
        description: 'Lets you access silver levels in Yo-kai Watch Blasters.',
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '3', buy: '3' },
        type: 'items'
    },
    {
        name: 'Gold Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gold_tag.png',
        description: 'Lets you access gold levels in Yo-kai Watch Blasters.',
        effect: '',
        locations: [
            'Blasters.',
            'Wash your hands at your place. Can be repeated.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '5', buy: '5' },
        type: 'items'
    },
    {
        name: 'Essence of Evil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/essence_of_evil.png',
        description:
            'Produces terrifying results when combined with certain Yo-kai.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Quest – Unfairy: Origins',
            'Quest – Unkaind: Origins',
            'Quest – Untidy: Origins',
            'Quest – Unpleasant: Origins',
            'Quest – Unkeen: Origins'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Legendary Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legendary_blade.png',
        description: 'This sword was forged by a master to mete out justice. ',
        effect: '',
        locations: ['Fusion.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Cursed Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_blade.png',
        description:
            'A cursed sword that draws its owner toward a tragic future.',
        effect: '',
        locations: ['Fusion.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Holy Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_blade.png',
        description:
            'Said to house holy power, this sword is over 10,000 years old!',
        effect: '',
        locations: ['Fusion.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: "General's Soul",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/general_s_soul.png',
        description:
            'The spirit of a legendary general. Linked to a particular Yo-kai.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Love Buster',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_buster.png',
        description:
            'This wackily strong weapon can only be used by popular folks. ',
        effect: '',
        locations: ['Dropped by Cupistol'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'GHz Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ghz_orb.png',
        description: 'A ball encasing electric waves. A zap could fry you! ',
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Unbeatable Soul',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/unbeatable_soul.png',
        description:
            'The spirit of a great warrior. Related to a horned Yo-kai.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Platinum Bar',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_bar.png',
        description: "A bar of pure platinum. It's heavy!",
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Snowstorm Cloak',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/snowstorm_cloak.png',
        description: 'A silvery-white cape for the king of a snowy mountain.',
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Love Scepter',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_scepter.png',
        description: "It's a scepter for a nobleman of love. NOT just a stick.",
        effect: '',
        locations: ['Quest – Too Much Makeover'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '35' },
        type: 'items'
    },
    {
        name: 'Glacial Clip',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/glacial_clip.png',
        description:
            'A hair clip made of unmelting ice. It houses a lot of power.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Buff Weight',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/buff_weight.png',
        description: 'Training with this hefty dumbbell will buff you up!',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '22', buy: '22' },
        type: 'items'
    },
    {
        name: 'Shard of Evil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shard_of_evil.png',
        description:
            'A dangerous shard that awakens the evil in a timid devil.',
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Ageless Powder',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ageless_powder.png',
        description:
            "A facial powder made of human souls. It'll make you younger.",
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Dragon Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dragon_orb.png',
        description: 'An orb of unbelievable beauty. Full of dragon energy.',
        effect: '',
        locations: ['Memory Store'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Raging Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/raging_blade.png',
        description:
            'This will turn anyone into a rambunctious, one-person riot.',
        effect: '',
        locations: [
            'Uptown Springdale – Desolate Lane',
            "Shopper's Row – Tranquility Apts. – C–303",
            "Shopper's Row – Nocturne Hospital",
            'Whatta Find'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Sand Suit',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sand_suit.png',
        description: 'This unique suit gets especially heavy when it rains.',
        effect: '',
        locations: ['Whatta Find', 'Excellent Tower – Scratch-off'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '35' },
        type: 'items'
    },
    {
        name: 'Ethereal Water',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ethereal_water.png',
        description:
            'Drinking this bestows godlike powers, so handle it with care.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Cursed Journal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_journal.png',
        description:
            "A jinxed journal that you'll regret sneaking a peek into...",
        effect: '',
        locations: ['Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Horn',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/horn.png',
        description: 'A horn that emits a deafening blast, audible miles away.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest – C-1 Grand Prix Y'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '35' },
        type: 'items'
    },
    {
        name: 'Mem-o-Vac',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mem-o-vac.png',
        description:
            'A memory-inhaling device. It also has a setting for exhaling them.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Randomly given by a passerby in the train (Central Line).'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '50' },
        type: 'items'
    },
    {
        name: 'Mermaid Pearl',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mermaid_pearl.png',
        description: 'When a mermaid is reborn, this exquisite pearl appears.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '80' },
        type: 'items'
    },
    {
        name: 'Love-Packed Rice Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love-packed_rice_ball.png',
        description:
            'Made with love and affection, this will satisfy a rumbling tummy.',
        effect: '',
        locations: ['Meal mini-game at night at Grandma’s house.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '35' },
        type: 'items'
    },
    {
        name: 'Broken Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/broken_bell.png',
        description:
            'If restored to its former glory, it might make a cat happy.',
        effect: '',
        locations: [
            'Mt. Wildwood – Jumbo Slider',
            'Breezy Hills – Gourd Pond Museum',
            'Old Springdale',
            'Jungle Hunter',
            'Dropped by Jibanyan',
            'Dropped by Sapphinyan',
            'Dropped by Emenyan',
            'Dropped by Rubinyan',
            'Dropped by Topanyan',
            'Dropped by Dianyan',
            'Dropped by Melonyan',
            'Dropped by Oranyan',
            'Dropped by Kiwinyan',
            'Dropped by Grapenyan',
            'Dropped by Strawbnyan',
            'Dropped by Watermelnyan',
            'Dropped by Meganyan',
            'Lottery'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '5', buy: '5' },
        type: 'items'
    },
    {
        name: 'Battered Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/battered_blade.png',
        description:
            'This famed sword of old is now in a pretty sorry state...',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '8', buy: '8' },
        type: 'items'
    },
    {
        name: 'Rough Whetstone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rough_whetstone.png',
        description: 'A roughhewn volcanic rock worthy of a hallowed blade.',
        effect: '',
        locations: ["Quest – Nyada's Trials IV", 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Sinister Whetstone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sinister_whetstone.png',
        description:
            'An eerie rock that might be used to sharpen a magic blade.',
        effect: '',
        locations: ["Quest – Nyada's Trials IV", 'Lottery'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Sublime Whetstone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sublime_whetstone.png',
        description:
            'A glorious stone capable of sharpening a legendary blade.',
        effect: '',
        locations: ['Blasters.'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,2', buy: '0,2' },
        type: 'items'
    },
    {
        name: 'Carved Bear',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/carved_bear.png',
        description: 'This wooden bear has been hewn by a master craftsman.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Goldfish Lantern',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/goldfish_lantern.png',
        description: 'Kids are sure to love this delightful paper lantern.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: "Master's Lantern",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/master_s_lantern.png',
        description:
            'This lantern gives off a glow that will cheer up all who see it.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Gold Emblem',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gold_emblem.png',
        description: 'This striking item is crafted from only the purest gold.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Takoyaki Tray',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/takoyaki_tray.png',
        description: 'Use this tray to make delicious takoyaki octopus balls.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Dune Sand',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dune_sand.png',
        description: 'A little bottle of joy scooped from a sand dune.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Vintage Parasol',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/vintage_parasol.png',
        description:
            'A sunshade crafted from reeds. Often used in summer festivals.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Terracotta Figure',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/terracotta_figure.png',
        description: 'An ancient artifact recently uncovered on Mt. Wildwood.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Red Hibiscus',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_hibiscus.png',
        description: 'This bright-red flower makes the world a lot less drab.',
        effect: '',
        locations: ['Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '10', buy: '10' },
        type: 'items'
    },
    {
        name: 'Healing Herb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/healing_herb.png',
        description:
            'Combined with the right item, it has restorative properties.',
        effect: '',
        locations: [
            'Dropped by Panja Pupil',
            'Dropped by Panja Pro',
            'Dropped by Happycane',
            'Dropped by Starrycane'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,5', buy: '0,5' },
        type: 'items'
    },
    {
        name: 'Stinky Herb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/stinky_herb.png',
        description:
            'Anyone sensible will give this horrid herb a very wide berth.',
        effect: '',
        locations: [
            'Dropped by Lodo',
            'Dropped by Herbiboy',
            'Dropped by Chummer',
            'Dropped by Shrook'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0,5', buy: '0,5' },
        type: 'items'
    },
    {
        name: 'Bitter Herb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bitter_herb.png',
        description:
            'No good to eat, but it could be combined with something...',
        effect: '',
        locations: ['Dropped by Dromp'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Red Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png',
        description: 'A bold coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Old Springdale',
            'Infinite Inferno – 2nd Circle',
            'Dropped by Hoggles',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [0, 1]
    },
    {
        name: 'Yellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png',
        description: 'A mysterious coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Blossom Heights – Old Mansion House',
            "Shopper's Row",
            'Old Springdale',
            'Dropped by Eyedra',
            'Quest – Foodie Feuds',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [2, 3]
    },
    {
        name: 'Orange Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png',
        description: 'A hefty coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Downtown Springdale',
            'Infinite Inferno – 3rd Circle',
            'Dropped by Styx Mk.VI',
            'Quest – The Haunted Hospital',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [4, 5]
    },
    {
        name: 'Pink Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png',
        description: 'A lovely coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            "Shopper's Row – Nocturne Hospital",
            'Springdale Underground Waterway',
            'Old Harrisville',
            'Dropped by Clipso',
            'Quest – C-1 Grand Prix',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [6, 7]
    },
    {
        name: 'Green Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png',
        description: 'A warm coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Blossom Heights – Secret Byway',
            'Springdale Underground Waterway',
            'Old Springdale – Mt.Wildwood Shrine',
            'Old Harrisville',
            'Dropped by Spooklunk',
            "Quest – Who's That Girl",
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [8, 9]
    },
    {
        name: 'Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png',
        description:
            'An unpleasant coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Springdale Underground Waterway',
            'San Fantastico',
            'Infinite Inferno – 5th Circle',
            'Dropped by Dr. Nogut',
            'Quest – C-1 Grand Prix A',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [10, 11]
    },
    {
        name: 'Purple Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png',
        description: 'An eerie coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel East',
            'Springdale Underground Waterway',
            'Harrisville',
            'Dropped by Squisker',
            'Quest – King of the Cicadas',
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [12, 13]
    },
    {
        name: 'Light-Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light-blue_coin.png',
        description: 'A slippery coin. Be sure to use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Blossom Heights',
            'Infinite Inferno – 6th Circle',
            'Dropped by Wobblewok',
            "Quest – Nyada's Trials I",
            'QR Code',
            'Password',
            'Excellent Tower – Scratch-off'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [14, 15]
    },
    {
        name: 'Five-Star Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png',
        description: 'A special five-star coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code', 'Password', 'Excellent Tower – Scratch-off'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [16, 17]
    },
    {
        name: 'Special Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png',
        description: 'A special coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code', 'Excellent Tower – Scratch-off'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [18, 19]
    },
    {
        name: 'Yo Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yo_mystery_coin.png',
        description: 'A special Crank-a-kai coin with "Yo" engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [20]
    },
    {
        name: 'Kai Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/kai_mystery_coin.png',
        description: 'A special Crank-a-kai coin with "Kai" engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [21]
    },
    {
        name: 'Sum Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sum_mystery_coin.png',
        description: 'A special Crank-a-kai coin with "Sum" engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [22]
    },
    {
        name: 'Mon Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mon_mystery_coin.png',
        description: 'A special Crank-a-kai coin with "Mon" engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [23]
    },
    {
        name: 'Flower Excitement Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/flower_excitement_coin.png',
        description: 'A special Crank-a-kai coin with a flower engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [26]
    },
    {
        name: 'Bird Excitement Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bird_excitement_coin.png',
        description: 'A special Crank-a-kai coin with a bird engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [24]
    },
    {
        name: 'Wind Excitement Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/wind_excitement_coin.png',
        description: 'A special Crank-a-kai coin with a wind motif on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [25]
    },
    {
        name: 'Moon Excitement Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/moon_excitement_coin.png',
        description: 'A special Crank-a-kai coin with a moon engraved on it.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [26]
    },
    {
        name: 'Glitzy Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/glitzy_coin.png',
        description: 'A special Crank-a-kai coin that makes its owner glow.',
        effect: '',
        locations: [
            'Mt.Wildwood – Crank–a–kai – Flower Excitement Coin',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [28]
    },
    {
        name: "Traveler's Coin North",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_north.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [29]
    },
    {
        name: "Traveler's Coin Northeast",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_northeast.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [30]
    },
    {
        name: "Traveler's Coin East",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_east.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [31]
    },
    {
        name: "Traveler's Coin Central",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_central.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [32]
    },
    {
        name: "Traveler's Coin West",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_west.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [32]
    },
    {
        name: "Traveler's Coin Mountain",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_mountain.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [34]
    },
    {
        name: "Traveler's Coin South",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_south.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [35]
    },
    {
        name: "Traveler's Coin Midwest",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_midwest.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [36]
    },
    {
        name: "Traveler's Coin Island",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/traveler_s_coin_island.png',
        description: 'A special Crank-a-kai coin related to a certain region.',
        effect: '',
        locations: ['QR Code', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [36]
    },
    {
        name: 'Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mystery_coin.png',
        description: 'A special Crank-a-kai coin with an eerie vibe.',
        effect: '',
        locations: ['Dropped by Goldy Bones'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [40]
    },
    {
        name: 'Boar Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/boar_mystery_coin.png',
        description: 'A special Crank-a-kai coin with a boar motif.',
        effect: '',
        locations: ['Dropped by Retinado'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [42]
    },
    {
        name: 'Deer Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/deer_mystery_coin.png',
        description: 'A special Crank-a-kai coin with a deer motif.',
        effect: '',
        locations: ['Dropped by Hans Galore'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [41]
    },
    {
        name: 'Butterfly Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/butterfly_mystery_coin.png',
        description: 'A special Crank-a-kai coin with a butterfly motif.',
        effect: '',
        locations: ['Dropped by Glitzy Bones'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [43]
    },
    {
        name: 'Cheerful Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheerful_coin.png',
        description: 'A special Crank-a-kai coin that makes its owner happy.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items',
        crankakaiIndexes: [38]
    },
    {
        name: 'Red Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin_fragment.png',
        description: 'Collect these and exchange them for Red Coins.',
        effect: '',
        locations: ['Uptown Springdale', 'QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Yellow Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin_fragment.png',
        description: 'Collect these and exchange them for Yellow Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Orange Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin_fragment.png',
        description: 'Collect these and exchange them for Orange Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Pink Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin_fragment.png',
        description: 'Collect these and exchange them for Pink Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Green Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin_fragment.png',
        description: 'Collect these and exchange them for Green Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Blue Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin_fragment.png',
        description: 'Collect these and exchange them for Blue Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Purple Coin Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin_fragment.png',
        description: 'Collect these and exchange them for Purple Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Light-Blue Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light-blue_fragment.png',
        description: 'Collect these and exchange them for Light-Blue Coins.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Red Box',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_box.png',
        description:
            'A box given to strangers with a warning never to open it.',
        effect: "Who knows what's inside...",
        locations: ['Randomly given by a passerby'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Gate Globe',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gate_globe.png',
        description: 'A curiously glowing globe earned by conquering a gate.',
        effect: '',
        locations: ['Clear Gates of Whimsy challenges'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Noko Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/noko_orb.png',
        description:
            "A mysterious orb from Noko. It's said that only eight exist...",
        effect: '',
        locations: ['Mt. Wildwood'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Kyubi Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/kyubi_orb.png',
        description:
            'A strange orb that Kyubi has taken human form to collect.',
        effect: '',
        locations: ['Quest – A Real Charmer'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1', buy: '1' },
        type: 'items'
    },
    {
        name: 'Select-A-Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/select-a-coin.png',
        description: 'A special Crank-a-kai coin that lets you pick a Yo-kai.',
        effect: '',
        locations: [],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'items',
        crankakaiIndexes: [46]
    },
    {
        name: 'Select-A-Coin +',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/select-a-coin.png',
        description: 'A special Crank-a-kai coin that lets you pick a Yo-kai.',
        effect: '',
        locations: [],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'items',
        crankakaiIndexes: [45]
    }
];

export default items;
