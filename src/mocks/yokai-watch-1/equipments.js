const equipments = [
    {
        name: 'Worn Bangle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/worn_bangle.png',
        description:
            "It's sort of cheap, but some Yo-kai say it's just right for them !",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Blossom Heights – Old Mansion House',
            'Whatta Find',
            'Dropped by Benkei',
            'Dropped by Dulluma',
            'Dropped by Darumacho',
            'Quest - Too Hot to Work'
        ],
        statsInfo: { str: '+10', spr: '0', def: '0', spd: '-5' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'equipments'
    },
    {
        name: 'Rocker Wrist',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rocker_wrist.png',
        description:
            "A rocker bracelet with spikes. it'd hurt to be on the receiving end.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Downtown Springdale – Construction Site',
            'Whatta Find',
            'Dropped by Slacka-slash',
            'Dropped by Thornyan',
            'Dropped by Leadoni',
            'Dropped by Heheheel',
            'Quest - Re-Mom-Bear Me'
        ],
        statsInfo: { str: '+18', spr: '0', def: '0', spd: '-10' },
        priceInfo: { sell: '0', buy: '160' },
        type: 'equipments'
    },
    {
        name: 'Brute Bracer',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/brute_bracer.png',
        description: "Like solving problems with strength? This one's for you.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo–kai World – Hooligan Road',
            'Whatta Find',
            'Dropped by Tanbo',
            'Dropped by Massiface',
            'Quest - Troublesome Yo-kai!',
            'Password'
        ],
        statsInfo: { str: '+25', spr: '0', def: '0', spd: '-15' },
        priceInfo: { sell: '76', buy: '380' },
        type: 'equipments'
    },
    {
        name: 'Sun Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sun_bracelet.png',
        description:
            'A heavy gold bracelet said to contain the power of the sun.',
        effect: '',
        locations: [
            'Springdale Underground Waterway',
            'Dropped by Siro',
            'Dropped by Eyedra',
            'Password'
        ],
        statsInfo: { str: '+35', spr: '0', def: '0', spd: '-20' },
        priceInfo: { sell: '114', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fiend Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_band.png',
        description:
            "A bracelet bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: ['Dropped by Zerberker', 'Password'],
        statsInfo: { str: '+50', spr: '0', def: '0', spd: '-50' },
        priceInfo: { sell: '160', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Rusty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rusty_ring.png',
        description: "A ring that's gotten old and rusty. It still has power.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Blossom Heights – Secret Byway',
            'Whatta Find',
            'Springdale Underground Waterway',
            'Dropped by Tattletell',
            'Dropped by Statiking',
            'Dropped by Chatalie'
        ],
        statsInfo: { str: '0', spr: '+10', def: '-5', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'equipments'
    },
    {
        name: 'Pretty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pretty_ring.png',
        description: 'A cute ring of pink gold. Lady Yo-kai like it a lot.',
        effect: '',
        locations: [
            'Jungle Hunter',
            "Shopper's Row",
            'Whatta Find',
            'Dropped by Dazzabel',
            'Dropped by Chatalie',
            'Quest - Superfandom'
        ],
        statsInfo: { str: '0', spr: '+18', def: '-10', spd: '0' },
        priceInfo: { sell: '32', buy: '160' },
        type: 'equipments'
    },
    {
        name: 'Illusion Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/illusion_ring.png',
        description:
            'Anyone who wears this ring can easily use Yo-kai Techniques.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Downtown Springdale – Construction Site',
            'Whatta Find',
            'Dropped by Illoo',
            'Dropped by Espy',
            'Quest - Home, Sweetie, Home'
        ],
        statsInfo: { str: '0', spr: '+25', def: '-15', spd: '0' },
        priceInfo: { sell: '76', buy: '380' },
        type: 'equipments'
    },
    {
        name: 'Lunar Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lunar_ring.png',
        description:
            'A softly glowing ring said to contain the power of the moon.',
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Infinite Inferno – 7-8th Circle',
            'Dropped by Betterfly',
            'Dropped by Clipso',
            'Quest - The Hot Salesman!',
            'Password'
        ],
        statsInfo: { str: '0', spr: '+35', def: '-20', spd: '0' },
        priceInfo: { sell: '114', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fiend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_ring.png',
        description: "A ring bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: ['Dropped by Ogralus', 'Password'],
        statsInfo: { str: '0', spr: '+50', def: '-50', spd: '0' },
        priceInfo: { sell: '160', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fire Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fire_ring.png',
        description: 'Makes Fire more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Downtown Springdale – Construction Site',
            'Dropped by Chilhuahua',
            'Dropped by Komasan',
            'Dropped by Duwheel',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Water Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/water_ring.png',
        description:
            'Makes Water more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Infinite Inferno – 3rd Circle',
            'Dropped by Mircle',
            'Dropped by Appak',
            'Dropped by Rollen',
            'Dropped by SV Snaggerjag',
            'Quest - Marry Me Someday?',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Lightning Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lightning_ring.png',
        description:
            'Makes Lightning more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Infinite Inferno – 4th Circle',
            'Dropped by Signiton',
            'Dropped by Elloo',
            'Dropped by Komajiro',
            'Dropped by Tarantutor',
            'Quest - Phony Phoning',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Earth Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/earth_ring.png',
        description:
            'Makes Earth more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Breezy Hills – Gourd Pond Museum',
            'Dropped by Quaken',
            'Dropped by Alloo',
            'Quest - A Whole New Draggie',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Ice Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ice_ring.png',
        description: 'Makes Ice more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Infinite Inferno – 3rd Circle',
            'Dropped by Pupsicle',
            'Dropped by Pookivil',
            'Dropped by Slush',
            'Quest - Snowy Accessory',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Wind Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/wind_ring.png',
        description: 'Makes Wind more powerful both for AND against its wearer',
        effect: '',
        locations: [
            'Infinite Inferno – 2nd Circle',
            'Dropped by Nul',
            'Dropped by Tengloom',
            'Quest - Powder of Youth',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Aged Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aged_charm.png',
        description: 'An old charm whose power has atrophied over the years.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Blossom Heights – Old Mansion Attic',
            'Whatta Find',
            'Dropped by Chansin',
            'Dropped by Armsman',
            "Dropped by Ol' Saint Trick",
            'Quest - The Lost Family'
        ],
        statsInfo: { str: '0', spr: '-5', def: '+10', spd: '0' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'equipments'
    },
    {
        name: 'Runic Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/runic_charm.png',
        description: 'A charm with a mysterious pattern upon it.',
        effect: '',
        locations: [
            'Jungle Hunter',
            "Shopper's Row – Shopping Street Narrows",
            'Whatta Find',
            'Dropped by Komiger',
            'Dropped by Almi',
            'Quest - Just Say NO'
        ],
        statsInfo: { str: '0', spr: '-10', def: '+18', spd: '0' },
        priceInfo: { sell: '32', buy: '160' },
        type: 'equipments'
    },
    {
        name: 'Armor Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/armor_charm.png',
        description: 'A charm said to provide impregnable defense.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Whatta Find',
            'Springdale Underground Waterway',
            'Dropped by Bruff',
            'Dropped by Hidabat',
            'Dropped by Phantasmurai',
            'Quest - Super Hide-and-Seek'
        ],
        statsInfo: { str: '0', spr: '-15', def: '+25', spd: '0' },
        priceInfo: { sell: '76', buy: '380' },
        type: 'equipments'
    },
    {
        name: 'Galaxy Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/galaxy_charm.png',
        description: 'A powerful charm that sparkles like a nebula.',
        effect: '',
        locations: [
            'Downtown Springdale – Construction Site',
            'Dropped by Dubbles',
            'Dropped by Styx Mk.VI',
            'Quest - Yo-kai Banquet',
            'Password'
        ],
        statsInfo: { str: '0', spr: '-20', def: '+35', spd: '0' },
        priceInfo: { sell: '114', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fiend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_charm.png',
        description: "A charm bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: ['Password', 'Terror Time'],
        statsInfo: { str: '0', spr: '-50', def: '+50', spd: '0' },
        priceInfo: { sell: '160', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Blaze Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blaze_charm.png',
        description: 'A charm that drops DEF but protects you from Fire.',
        effect: '',
        locations: [
            'Infinite Inferno – 3rd Circle',
            'Dropped by Supyo',
            'Dropped by Alhail',
            'Quest - The Bold Beelzebold!',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Flood Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/flood_charm.png',
        description: 'A charm that drops DEF but protects you from Water.',
        effect: '',
        locations: [
            'Infinite Inferno – 4th Circle',
            'Dropped by Armsman',
            'Dropped by Sir Berus',
            'Dropped by Chummer',
            'Quest - Yo-kai Abduction?',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Bolt Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bolt_charm.png',
        description: 'A charm that drops DEF but protects you from Lightning.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School',
            'Dropped by Komane',
            'Dropped by Fishpicable',
            'Quest - Beach Cleanup ',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Quake Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/quake_charm.png',
        description: 'A charm that drops DEF but protects you from Earth.',
        effect: '',
        locations: [
            'Downtown Springdale – Construction Site',
            'Dropped by Dulluma',
            'Dropped by Noway',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Frost Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/frost_charm.png',
        description: 'A charm that drops DEF but protects you from Ice.',
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Dropped by Duchoo',
            'Dropped by Drizzle',
            'Quest - Insulting the Egg',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Storm Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/storm_charm.png',
        description: 'A charm that drops DEF but protects you from Wind.',
        effect: '',
        locations: [
            'Breezy Hills – Gourd Pond Museum',
            'Dropped by Dimmy',
            'Dropped by Contrarioni',
            'Fusion.'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '50', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Simple Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/simple_badge.png',
        description:
            'Sometimes simple is best. This badge bumps up your Speed.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Blips',
            'Dropped by Peckpocket',
            'Dropped by Slimamander',
            'Quest - Groovalicious Dance'
        ],
        statsInfo: { str: '-5', spr: '0', def: '0', spd: '+10' },
        priceInfo: { sell: '10', buy: '50' },
        type: 'equipments'
    },
    {
        name: 'Shiny Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shiny_badge.png',
        description: 'A cool badge that shines bright. Kids love this one!',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Downtown Springdale – Construction Site',
            'Whatta Find',
            'Dropped by Cupistol',
            'Dropped by Statiking',
            'Dropped by Sproink',
            "Quest - Walkappa's Bottle"
        ],
        statsInfo: { str: '-10', spr: '0', def: '0', spd: '+18' },
        priceInfo: { sell: '32', buy: '160' },
        type: 'equipments'
    },
    {
        name: 'Hermes Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hermes_badge.png',
        description: 'A badge that lets you run like the wind.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School',
            'Jungle Hunter',
            'Whatta Find',
            'Springdale Underground Waterway',
            'Dropped by Jibanyan',
            'Dropped by Babblong',
            'Quest - Suddenly Selective'
        ],
        statsInfo: { str: '-15', spr: '0', def: '0', spd: '+25' },
        priceInfo: { sell: '76', buy: '380' },
        type: 'equipments'
    },
    {
        name: 'Meteor Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/meteor_badge.png',
        description: 'A badge shaped like a shooting star with power to match.',
        effect: '',
        locations: [
            'Springdale Underground Waterway',
            "Dropped by Ol' Fortune",
            'Dropped by Cuttincheez',
            'Dropped by Dr. Nogut',
            'Quest - Ultra Hide-and-Seek',
            'Password'
        ],
        statsInfo: { str: '-20', spr: '0', def: '0', spd: '+35' },
        priceInfo: { sell: '114', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fiend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_badge.png',
        description: "A badge bearing a demon's crest. It houses unholy speed.",
        effect: '',
        locations: ['Dropped by Eterna', 'Dropped by Gargaros', 'Password'],
        statsInfo: { str: '-50', spr: '0', def: '0', spd: '+50' },
        priceInfo: { sell: '160', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Cicada Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cicada_sword.png',
        description:
            'The sword of the cicada-style ninja. Only for cicada Yo-kai.',
        effect: '',
        locations: [
            'Dropped by Cadin',
            'Quest - Precious Illusion',
            'Password'
        ],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '+20' },
        priceInfo: { sell: '30', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Beefy Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/beefy_bell.png',
        description:
            'Use this cat bell if you want to get beefy! For cat Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest - The Legendary Kyubi', 'Password'],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Spell Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spell_bell.png',
        description:
            'Use this cat bell if you want elegance! For cat Yo-kai only.',
        effect: '',
        locations: ['Quest - Talisman Man, Man', 'Password'],
        statsInfo: { str: '0', spr: '+50', def: '0', spd: '0' },
        priceInfo: { sell: '35', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Tough Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tough_bell.png',
        description:
            'Use this cat bell if you want to be tough! For cat Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest - Big Boss Cat', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '+50', spd: '0' },
        priceInfo: { sell: '35', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Speed Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_bell.png',
        description:
            'Use this cat bell if you want to be speedy! For cat Yo-kai only.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Shad. Venoct',
            'Quest - More Like Bombedy...',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '35', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Big Bottle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/big_bottle.png',
        description:
            'A water bottle that never runs dry. For kappa Yo-kai only.',
        effect: '',
        locations: [
            'Dropped by Walkappa',
            'Quest - Save Walkappa Again!',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Tengu Fan',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tengu_fan.png',
        description:
            'Tengu draw power from fans like these. For tengu Yo-kai only.',
        effect: '',
        locations: ['Dropped by Tengu', 'Quest - Take Out Tengu!'],
        statsInfo: { str: '0', spr: '+100', def: '0', spd: '+100' },
        priceInfo: { sell: '65', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Cheery Coat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheery_coat.png',
        description:
            "This'll make you wanna dance! For Wiglin, Steppa, and Rhyth only.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Wiglin',
            'Quest - Now with Mushrooms',
            'Quest - No More Mr. Nice Kid',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+50' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Nail Bat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nail_bat.png',
        description:
            'A bat with nails sticking out of it. Only for Badude and Bruff.',
        effect: '',
        locations: ['Dropped by Roughraff', 'Password'],
        statsInfo: { str: '+50', spr: '0', def: '0', spd: '-50' },
        priceInfo: { sell: '30', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Reversword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reversword.png',
        description:
            'This sword strengthens the weak. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest - Head Juggling', 'Password'],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Turnabeads',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/turnabeads.png',
        description:
            'A jewel that gives the week power. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Breezy Hills – Gourd Pond Museum',
            'Quest - The Leg Puller',
            'Password'
        ],
        statsInfo: { str: '0', spr: '+30', def: '0', spd: '+30' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Reflector',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reflector.png',
        description:
            'One item of the wimpy trinity. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: [
            'Uptown Springdale – Elementary School',
            'Jungle Hunter',
            'Quest - The Terrifying Kashima',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '+30' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Ritzy Studs',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ritzy_studs.png',
        description:
            'These pearl earrings seem to improve your luck with money.',
        effect: '',
        locations: [
            'Dropped by Spenp',
            "Quest - Yo-kai Aren't Real!",
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '180', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Sleep 'n' Study",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sleep__n__study.png',
        description:
            "With this, you can study while sleeping! Any student's dream!",
        effect: '',
        locations: [
            'Whatta Find',
            'Dropped by Tunatic',
            'Quest - Detective Quest ⑤',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Die of Fate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/die_of_fate.png',
        description:
            'This die will make your luck more extreme, either good or bad.',
        effect: '',
        locations: [
            'Dropped by Chansin',
            'Quest - The Indecisive Man',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Iron Plates',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/iron_plates.png',
        description:
            "These plates will defend your vital points, but they're HEAVY.",
        effect: '',
        locations: [
            'Dropped by Darumacho',
            'Quest - The Wimpy Worker',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '80', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Thick Specs',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/thick_specs.png',
        description: "Superthick glasses for great vision. Just don't break'em",
        effect: '',
        locations: [
            'Dropped by Kapunki',
            'Quest - The Sleepy Student',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '96', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Ancient Scale',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ancient_scale.png',
        description:
            'A beautiful, old dragon scale that drives away evil power.',
        effect: '',
        locations: ['Springdale Underground Waterway', 'Fusion.', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Venoct Gauntlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/venoct_gauntlet.png',
        description: "A soul-powering gauntlet containing Venoct's strength.",
        effect: '',
        locations: ['Fusion.', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Heavenly Sash',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/heavenly_sash.png',
        description: 'A fairy gave this sash to a human for saving her life.',
        effect: '',
        locations: [
            'Mt. Wildwood – Abandoned Tunnel West',
            'Fusion.',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '130', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Ski Mask',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ski_mask.png',
        description:
            'You can wear this mask to hide your identity. Pretty shady.',
        effect: '',
        locations: [
            'Dropped by Blandon',
            'Quest - Mega Hide-and-Seek',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '70', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Sticker of Hate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sticker_of_hate.png',
        description:
            'Everyone will hate you if you wear this. Why would you do that.',
        effect: '',
        locations: [
            'Whatta Find',
            'Dropped by Rhyth',
            'Quest - Haunted Homes',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Vampiric Fangs',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/vampiric_fangs.png',
        description:
            "Dentures usually aren't scary, but these let you suck blood!",
        effect: '',
        locations: [
            'Dropped by Hidabat',
            'Quest - An Offered Sword',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '105', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Crystal Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/crystal_ball.png',
        description: 'A crystal ball with holy power. It brings good luck.',
        effect: '',
        locations: ['Fusion.', 'Password'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '118', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Sleepillow',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sleepillow.png',
        description: "It's a relaxing pillow, but it'll make you lazier…",
        effect: '',
        locations: [
            'Whatta Find',
            'Dropped by Reversette',
            'Quest - Sleepless Salaryman',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Restraint Belt',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/restraint_belt.png',
        description:
            'Wear this power-lowering belt when you want to hold back.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by B3-NK1',
            'Quest - The Time Capsule',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '25', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Guard Gem',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/guard_gem.png',
        description: 'This compels you to protect yourself. Could be handy!',
        effect: '',
        locations: [
            'Downtown Springdale – Construction Site',
            'Dropped by Impass',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '88', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Monkey Circlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/monkey_circlet.png',
        description:
            'This circlet will tighten to put a stop to any evolution.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Sushiyama',
            'Quest - No Escape',
            'Password'
        ],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '37', buy: '0' },
        type: 'equipments'
    }
];

export default equipments;
