const equipments = [
    {
        name: 'Worn Bangle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/worn_bangle.png',
        description:
            "It's sort of cheap, but some Yo-kai say it's just right for them!",
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School 1F',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Lie-in',
            'Dropped by Chansin',
            'Dropped by Mircle'
        ],
        statsInfo: {
            str: '10',
            spr: '0',
            def: '0',
            spd: '-5'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
        name: 'Cheap Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheap_bracelet.png',
        description: "It's not the classiest accessory, but it does the job.",
        effect: '',
        locations: [
            'Downtown Springdale \u2013 Delivery Bay',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Tublappa',
            "Dropped by N'more",
            'Dropped by Grublappa'
        ],
        statsInfo: {
            str: '10',
            spr: '0',
            def: '-5',
            spd: '0'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
        name: 'Rocker Wrist',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rocker_wrist.png',
        description:
            "A rocker bracelet with spikes. It'd hurt to be on the receiving end.",
        effect: '',
        locations: [
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by B3-NK1',
            'Dropped by Suspicioni',
            'Dropped by Croonger',
            'Dropped by Samureel',
            'Dropped by Takoyakid',
            'Dropped by Gutsy Bones',
            'Quest \u2013 Officially Official!',
            'Lottery'
        ],
        statsInfo: {
            str: '18',
            spr: '0',
            def: '0',
            spd: '-8'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Power Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/power_bracelet.png',
        description:
            'Makes the wearer tough enough to crush apples bare-handed!',
        effect: '',
        locations: [
            'Downtown Springdale \u2013 Springdale Business Tower',
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
            'Quest \u2013 Officially Official!',
            "Quest \u2013 Which Beetle's Better",
            'Lottery'
        ],
        statsInfo: {
            str: '18',
            spr: '0',
            def: '-8',
            spd: '0'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Brute Bracer',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/brute_bracer.png',
        description: "Like solving problems with strength? This one's for you.",
        effect: '',
        locations: [
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Red Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Red Coin (Past)',
            "Shopper's Row \u2013 Tranquility Apts. \u2013 A\u2013201",
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
            'Quest \u2013 Eerie, Roving Armor',
            'Lottery'
        ],
        statsInfo: {
            str: '25',
            spr: '0',
            def: '0',
            spd: '-12'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Grand Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/grand_bracelet.png',
        description:
            'An elegant, strength-enhancing item that helps with heavy lifting.',
        effect: '',
        locations: [
            'Blossom Heights \u2013 Old Mansion Attic',
            'San Fantastico \u2013 Seaside Cave',
            'Old Springdale \u2013 Flatpot Plains',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Purple Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Purple Coin (Past)',
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
        statsInfo: {
            str: '25',
            spr: '0',
            def: '-12',
            spd: '0'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Sun Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sun_bracelet.png',
        description:
            'A heavy gold bracelet said to contain the power of the sun.',
        effect: '',
        locations: [
            'Infinite Inferno \u2013 4th Circle',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Red Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Red Coin (Past)',
            'Memory Store',
            'Dropped by Siro',
            'Dropped by Beetall',
            'Dropped by Swelterrier',
            'Dropped by Phantasmurai',
            'Dropped by Spooklunk',
            'Quest \u2013 Find Gnomey!',
            'Quest \u2013 C-1 Grand Prix S',
            'Lottery'
        ],
        statsInfo: {
            str: '35',
            spr: '0',
            def: '0',
            spd: '-15'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Comet Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/comet_bracelet.png',
        description:
            'Unleashes the destructive force of a comet flying through space.',
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Hooligan Road',
            "Breezy Hills \u2013 Gate Room \u2013 Compunzer's Zone",
            'Mystery Way',
            'Gold\u2013Gleaming Hwy.',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Purple Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Purple Coin (Past)',
            'Memory Store',
            'Dropped by Zerberker',
            'Dropped by Cruncha',
            'Dropped by Venoct',
            'Dropped by Untidy',
            'Dropped by Massiface',
            'Quest \u2013 Find Gnomey!',
            'Quest \u2013 The Phantom Giant',
            'Lottery'
        ],
        statsInfo: {
            str: '35',
            spr: '0',
            def: '-15',
            spd: '0'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Fiend Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_band.png',
        description:
            "A bracelet bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [
            'Dropped by Gargaros',
            "Quest \u2013 Nyada's Trials V",
            'Quest \u2013 The Bony General'
        ],
        statsInfo: {
            str: '50',
            spr: '0',
            def: '0',
            spd: '-25'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Legend Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_bracelet.png',
        description: 'A fabled fashion accessory that crackles with power.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise \u2013 5F',
            'Jungle Hunter',
            "Dropped by Cap'n Rex",
            'Quest \u2013 Fleshy Souls General'
        ],
        statsInfo: {
            str: '50',
            spr: '0',
            def: '-25',
            spd: '0'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Rusty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rusty_ring.png',
        description: "A ring that's gotten old and rusty. It still has power.",
        effect: '',
        locations: [
            "Shopper's Row \u2013 Tranquility Apts. \u2013 B\u2013201",
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Slacka-slash',
            'Dropped by Robonoko'
        ],
        statsInfo: {
            str: '0',
            spr: '10',
            def: '-5',
            spd: '0'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
        name: 'Ugly Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ugly_ring.png',
        description: "It's not pretty, but it's pretty effective.",
        effect: '',
        locations: [
            'Blossom Heights \u2013 Secret Byway',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Illoo',
            'Dropped by Yoink',
            'Dropped by Chatalie'
        ],
        statsInfo: {
            str: '0',
            spr: '10',
            def: '0',
            spd: '-5'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
        name: 'Pretty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pretty_ring.png',
        description: 'A cute ring of pink gold. Lady Yo-kai like it a lot.',
        effect: '',
        locations: [
            'Harrisville \u2013 Old House by The Station',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Flower Excitement Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Tattletell',
            'Dropped by Rattelle',
            'Dropped by Nagatha',
            'Dropped by Toiletta',
            'Dropped by Happycane',
            'Quest \u2013 Springdale Star Pt. 1',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '18',
            def: '-8',
            spd: '0'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Rainbow Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rainbow_ring.png',
        description:
            'A beautiful ring that sparkles with all the colors of the rainbow.',
        effect: '',
        locations: [
            'Downtown Springdale \u2013 Springdale Business Tower',
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
        statsInfo: {
            str: '0',
            spr: '18',
            def: '0',
            spd: '-8'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Illusion Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/illusion_ring.png',
        description:
            'Anyone who wears this ring can easily use Yo-kai Techniques.',
        effect: '',
        locations: [
            'Blossom Heights',
            'Old Springdale \u2013 Flatpot Plains',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Yellow Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Yellow Coin (Past)',
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
            "Quest \u2013 No Time For Fishin'!",
            'Quest \u2013 I Just Wanna Grow Up',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '25',
            def: '-12',
            spd: '0'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Fairy Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fairy_ring.png',
        description: 'The spirit of a fairy dwells within this ring.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel West',
            'San Fantastico',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Green Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Green Coin (Past)',
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
            "Quest \u2013 No Time For Fishin'!",
            'Quest \u2013 A Real Charmer',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '25',
            def: '0',
            spd: '-12'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Lunar Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lunar_ring.png',
        description:
            'A softly glowing ring said to contain the power of the moon.',
        effect: '',
        locations: [
            'Infinite Inferno \u2013 7th Circle',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Yellow Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Yellow Coin (Past)',
            'Memory Store',
            'Dropped by Kyubi',
            'Dropped by Peppillon',
            'Dropped by Darknyan',
            'Dropped by Unkeen',
            'Dropped by Clipso',
            'Quest \u2013 Find Mermaidyn!',
            'Quest \u2013 Springdale Star Pt. 2',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '35',
            def: '-15',
            spd: '0'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Ring of Fate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ring_of_fate.png',
        description: "Imbued with the power to alter one's destiny.",
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Entry Hall',
            'Mystery Way',
            'Gold\u2013Gleaming Hwy.',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Green Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Green Coin (Past)',
            'Memory Store',
            'Dropped by Frostail',
            'Dropped by Dragon Lord',
            'Dropped by Mermadonna',
            'Dropped by Unpleasant',
            'Quest \u2013 Find Mermaidyn!',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '35',
            def: '0',
            spd: '-15'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Fiend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_ring.png',
        description: "A ring bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [
            'Dropped by Ogralus',
            "Quest \u2013 Nyada's Trials V",
            'Quest \u2013 The Old Fox Shrine'
        ],
        statsInfo: {
            str: '0',
            spr: '50',
            def: '-25',
            spd: '0'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Legend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_ring.png',
        description: 'A mythical fashion accessory with untold power.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise \u2013 3F',
            'Jungle Hunter',
            'Dropped by Flippa',
            'Quest \u2013 Enma and the Serpent'
        ],
        statsInfo: {
            str: '0',
            spr: '50',
            def: '0',
            spd: '-25'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
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
        statsInfo: {
            str: '0',
            spr: '-5',
            def: '10',
            spd: '0'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
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
        statsInfo: {
            str: '-5',
            spr: '0',
            def: '10',
            spd: '0'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
        name: 'Runic Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/runic_charm.png',
        description: 'A charm with a mysterious pattern upon it.',
        effect: '',
        locations: [
            'Breezy Hills \u2013 Gourd Pond Museum',
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
        statsInfo: {
            str: '0',
            spr: '-8',
            def: '18',
            spd: '0'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Protective Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/protective_charm.png',
        description: 'Offers divine protection to the wearer.',
        effect: '',
        locations: [
            'Blossom Heights \u2013 Old Mansion House',
            'Harrisville \u2013 Fullface Rock',
            'Old Springdale \u2013 Fox Shrine Road',
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
        statsInfo: {
            str: '-8',
            spr: '0',
            def: '18',
            spd: '0'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Armor Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/armor_charm.png',
        description: 'A charm said to provide impregnable defense.',
        effect: '',
        locations: [
            'Blossom Heights \u2013 Hidden Side Street',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Orange Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Orange Coin (Past)',
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
            'Quest \u2013 Secrets of Soulcery',
            'Quest \u2013 The Heartthrobs',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '-12',
            def: '25',
            spd: '0'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Lucky Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lucky_charm.png',
        description: 'Brings good fortune and offers powerful protection.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Lonely Waterway',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Blue Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Blue Coin (Past)',
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
            'Quest \u2013 Secrets of Soulcery',
            'Quest \u2013 Gone Haunting',
            'Lottery'
        ],
        statsInfo: {
            str: '-12',
            spr: '0',
            def: '25',
            spd: '0'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Galaxy Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/galaxy_charm.png',
        description: 'A powerful charm that sparkles like a nebula.',
        effect: '',
        locations: [
            'Breezy Hills \u2013 Gate Room \u2013 Traffic\u2013Light Zone',
            'Mystery Way',
            'Gold\u2013Gleaming Hwy.',
            'Infinite Inferno \u2013 6th Circle',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Orange Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Orange Coin (Past)',
            'Memory Store',
            'Dropped by Swosh',
            'Dropped by Uncle Infinite',
            'Dropped by Wobblewok',
            'Dropped by Unfairy',
            "Quest \u2013 The Shrine's Part",
            'Quest \u2013 Ultimate Bear Boy',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '-15',
            def: '35',
            spd: '0'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Earth Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/earth_charm.png',
        description:
            'This charm draws its power from the spirit of the earth itself.',
        effect: '',
        locations: [
            'Infinite Inferno \u2013 1st Circle',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Blue Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Blue Coin (Past)',
            'Memory Store',
            'Dropped by Walldin',
            'Dropped by Enduriphant',
            'Dropped by Dromp',
            'Dropped by Sproink',
            'Dropped by Hoggles',
            "Quest \u2013 The Shrine's Part",
            'Quest \u2013 Treasure Hunters Pt. 3',
            'Lottery'
        ],
        statsInfo: {
            str: '-15',
            spr: '0',
            def: '35',
            spd: '0'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Fiend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_charm.png',
        description: "A charm bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: ['Quest \u2013 Watch the Skies'],
        statsInfo: {
            str: '0',
            spr: '-25',
            def: '50',
            spd: '0'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Legend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_charm.png',
        description:
            'A famed charm that offers the wearer unmatched protection.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise \u2013 1F',
            'Jungle Hunter',
            'Dropped by Dame Dredful',
            'Quest \u2013 The God of the Sea'
        ],
        statsInfo: {
            str: '-25',
            spr: '0',
            def: '50',
            spd: '0'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Simple Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/simple_badge.png',
        description:
            'Sometimes simple is best. This badge bumps up your Speed.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School 1F',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            "Quest \u2013 Matt, Don't Give Up!"
        ],
        statsInfo: {
            str: '-5',
            spr: '0',
            def: '0',
            spd: '8'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
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
            "Quest \u2013 Matt, Don't Give Up!"
        ],
        statsInfo: {
            str: '0',
            spr: '-5',
            def: '0',
            spd: '8'
        },
        priceInfo: {
            sell: '1,8',
            buy: '18'
        }
    },
    {
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
        statsInfo: {
            str: '-8',
            spr: '0',
            def: '0',
            spd: '15'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Cute Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cute_badge.png',
        description:
            "An adorable glittery badge. It's actually functional too!",
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School 1F',
            'Old Harrisville',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Flower Excitement Coin',
            'Memory Store',
            'Jungle Hunter',
            'Whatta Find',
            'Dropped by Signibble',
            'Dropped by Komasan',
            'Dropped by Whapir',
            'Dropped by Frostina',
            'Dropped by Chippa',
            'Quest \u2013 Makeover Takeover',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '-8',
            def: '0',
            spd: '15'
        },
        priceInfo: {
            sell: '6,5',
            buy: '65'
        }
    },
    {
        name: 'Hermes Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hermes_badge.png',
        description: 'A badge that lets you run like the wind.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            "Shopper's Row \u2013 Nocturne Hospital",
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Pink Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Pink Coin (Past)',
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
            'Quest \u2013 True Hide-and-Seek',
            'Quest \u2013 Ultra Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: {
            str: '-12',
            spr: '0',
            def: '0',
            spd: '20'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Aurora Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aurora_badge.png',
        description: 'A badge that pulsates with scintillating starlight.',
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Light Blue Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Light Blue Coin (Past)',
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
            'Quest \u2013 True Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '-12',
            def: '0',
            spd: '20'
        },
        priceInfo: {
            sell: '11',
            buy: '110'
        }
    },
    {
        name: 'Meteor Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/meteor_badge.png',
        description:
            'A badge shaped like a shooting star, with power to match.',
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Pink Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Pink Coin (Past)',
            'Memory Store',
            'Dropped by Master Nyada',
            'Dropped by Smashibull',
            'Dropped by Eyellure',
            'Dropped by Unkaind',
            'Dropped by Hans Full',
            "Quest \u2013 Retrace Dad's Steps",
            'Lottery'
        ],
        statsInfo: {
            str: '-15',
            spr: '0',
            def: '0',
            spd: '30'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Lightning Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lightning_badge.png',
        description: "A fast-moving accessory. Blink and you'll miss it!",
        effect: '',
        locations: [
            'Mystery Way',
            'Bony Spirits Way',
            'Fleshy Souls',
            'Gold\u2013Gleaming Hwy.',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Light Blue Coin (Present)',
            'Mt.Wildwood \u2013 Crank\u2013a\u2013kai \u2013 Light Blue Coin (Past)',
            'Memory Store',
            'Dropped by Signiton',
            'Dropped by Statiking',
            'Dropped by Master Oden',
            'Dropped by Frazzel',
            'Dropped by Tarantutor',
            "Quest \u2013 Retrace Dad's Steps",
            'Quest \u2013 Expert Hide-and-Seek',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '-15',
            def: '0',
            spd: '30'
        },
        priceInfo: {
            sell: '28',
            buy: '280'
        }
    },
    {
        name: 'Fiend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_badge.png',
        description: "A badge bearing a demon's crest. It houses unholy speed.",
        effect: '',
        locations: ['Quest \u2013 C-1 Grand Prix X'],
        statsInfo: {
            str: '-25',
            spr: '0',
            def: '0',
            spd: '40'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Legend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_badge.png',
        description:
            'A powerful accessory that gives an incredible boost to Speed.',
        effect: '',
        locations: [
            'Gera Gera Land',
            'Divine Paradise \u2013 4F',
            'Jungle Hunter',
            "Quest \u2013 Nyada's Trials III"
        ],
        statsInfo: {
            str: '0',
            spr: '-25',
            def: '0',
            spd: '40'
        },
        priceInfo: {
            sell: '80',
            buy: '800'
        }
    },
    {
        name: 'Cicada Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cicada_sword.png',
        description:
            'The sword of the cicada-style ninja. Only for cicada Yo-kai.',
        effect: '',
        locations: ['Dropped by Cadable', 'Dropped by Singcada', 'Lottery'],
        statsInfo: {
            str: '35',
            spr: '0',
            def: '0',
            spd: '35'
        },
        priceInfo: {
            sell: '15',
            buy: '15'
        }
    },
    {
        name: 'Beefy Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/beefy_bell.png',
        description:
            'Use this cat bell if you want to get beefy! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', 'Quest \u2013 Bam-Boom! Fusing!'],
        statsInfo: {
            str: '50',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '20'
        }
    },
    {
        name: 'Spell Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spell_bell.png',
        description:
            'Use this cat bell if you want elegance! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', 'Quest \u2013 Bam-Boom! Fusing!'],
        statsInfo: {
            str: '0',
            spr: '50',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '20'
        }
    },
    {
        name: 'Tough Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tough_bell.png',
        description:
            'Use this cat bell if you want to be tough! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', "Quest \u2013 The Ironworks' Part"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '50',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '20'
        }
    },
    {
        name: 'Speed Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_bell.png',
        description:
            'Use this cat bell if you want to be speedy! For cat Yo-kai only.',
        effect: '',
        locations: ['Fusion.', "Quest \u2013 The Ironworks' Part"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '30'
        },
        priceInfo: {
            sell: '20',
            buy: '20'
        }
    },
    {
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
            'Quest \u2013 The Realest Kappa'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '30'
        }
    },
    {
        name: 'Tengu Fan',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tengu_fan.png',
        description:
            'Tengu draw power from fans like these. For tengu Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '100',
            def: '0',
            spd: '100'
        },
        priceInfo: {
            sell: '50',
            buy: '50'
        }
    },
    {
        name: 'Cheery Coat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheery_coat.png',
        description:
            "This'll make you wanna dance! For Wiglin, Steppa, and Rhyth only.",
        effect: '',
        locations: ['Quest \u2013 Trying Tangle Tango', 'Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '50'
        },
        priceInfo: {
            sell: '18',
            buy: '18'
        }
    },
    {
        name: 'Nail Bat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nail_bat.png',
        description:
            'A bat with nails sticking out of it. Only for Badude and Bruff.',
        effect: '',
        locations: ['Jungle Hunter', 'Dropped by Badude'],
        statsInfo: {
            str: '50',
            spr: '0',
            def: '-25',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '30'
        }
    },
    {
        name: 'Drumsticks',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/drumsticks.png',
        description: 'Don Chan uses these to thump out big, bold rhythms.',
        effect: '',
        locations: ['Jungle Hunter', 'Quest \u2013 Inspirited Away'],
        statsInfo: {
            str: '0',
            spr: '40',
            def: '60',
            spd: '0'
        },
        priceInfo: {
            sell: '14',
            buy: '14'
        }
    },
    {
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
            'Quest \u2013 From the Future!',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '45',
            spd: '20'
        },
        priceInfo: {
            sell: '35',
            buy: '35'
        }
    },
    {
        name: "Burly's Wristband",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/burly_s_wristband.png',
        description: "Imbued with Sgt. Burly's thirst for bigger muscles.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Sgt. Burly',
            "Quest \u2013 Jibanyan's Secret"
        ],
        statsInfo: {
            str: '60',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '28',
            buy: '28'
        }
    },
    {
        name: 'Memory Chime',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/memory_chime.png',
        description: 'This treasured chime reminds Jibanyan of Amy.',
        effect: '',
        locations: ["Quest \u2013 Jibanyan's Secret"],
        statsInfo: {
            str: '40',
            spr: '0',
            def: '0',
            spd: '40'
        },
        priceInfo: {
            sell: '80',
            buy: '80'
        }
    },
    {
        name: 'Bony Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bony_band.png',
        description:
            'Inspires Bony Spirits Yo-kai to outdo their Fleshy Souls rivals.',
        effect: '+ Damage to Fleshy Yo-kai.',
        locations: [
            'Old Springdale \u2013 Flatpot Plains',
            'Dropped by Faysoff',
            'Dropped by Mad Mountain',
            'Dropped by Herbiboy',
            'Dropped by Carniboy',
            'Dropped by Irewig',
            'Dropped by Firewig',
            'Quest \u2013 Find Faux Kappa!',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '30'
        }
    },
    {
        name: 'Fleshy Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fleshy_band.png',
        description:
            'Inspires Fleshy Souls Yo-kai to outdo their Bony Spirits rivals.',
        effect: '+ Damage to Bony Yo-kai.',
        locations: [
            'Old Springdale \u2013 Flatpot Plains',
            'Dropped by Impass',
            'Dropped by Lava Lord',
            'Dropped by Boyclops',
            'Dropped by Wydeawake',
            'Dropped by Allnyta',
            'Dropped by Count Zapaway',
            'Quest \u2013 Find Faux Kappa!',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '30'
        }
    },
    {
        name: 'Reversword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reversword.png',
        description:
            'This sword strengthens the weak. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: [
            "Quest \u2013 Timers & More's Part",
            "Quest \u2013 Little Grandma's Helper",
            'Lottery'
        ],
        statsInfo: {
            str: '30',
            spr: '0',
            def: '0',
            spd: '30'
        },
        priceInfo: {
            sell: '25',
            buy: '25'
        }
    },
    {
        name: 'Turnabeads',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/turnabeads.png',
        description:
            'A jewel that gives the weak power. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '30',
            def: '0',
            spd: '30'
        },
        priceInfo: {
            sell: '25',
            buy: '25'
        }
    },
    {
        name: 'Reflector',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reflector.png',
        description:
            'One of a wimpy trinity of items. D- and E-Rank Yo-kai only.',
        effect: '',
        locations: ["Quest \u2013 Timers & More's Part", 'Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '30',
            spd: '30'
        },
        priceInfo: {
            sell: '25',
            buy: '25'
        }
    },
    {
        name: 'Paradise Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/paradise_ball.png',
        description: 'A gem that can only be used by B-Rank or lower Yo-kai.',
        effect: '',
        locations: ['Dropped by Kat Kraydel'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '50',
            spd: '50'
        },
        priceInfo: {
            sell: '100',
            buy: '100'
        }
    },
    {
        name: 'Sinister Screed',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sinister_screed.png',
        description: 'Cures cursed Yo-kai and curses healthy ones.',
        effect: '+ Damage to Wicked Yo-kai. Dmg. to non-Wicked.',
        locations: [
            'Mystery Way \u2013 Crank\u2013a\u2013kai \u2013 Butterfly Mystery Coin',
            'Quest \u2013 Gera Gera Good-Byes'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '150',
            buy: '150'
        }
    },
    {
        name: 'Cursed Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_sword.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way \u2013 Crank\u2013a\u2013kai \u2013 Boar Mystery Coin'
        ],
        statsInfo: {
            str: '80',
            spr: '0',
            def: '0',
            spd: '-40'
        },
        priceInfo: {
            sell: '150',
            buy: '150'
        }
    },
    {
        name: 'Cursed Staff',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_staff.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way \u2013 Crank\u2013a\u2013kai \u2013 Deer Mystery Coin',
            "Quest \u2013 A Legend's Loco Motive",
            'Quest \u2013 Tamer of Time'
        ],
        statsInfo: {
            str: '0',
            spr: '80',
            def: '0',
            spd: '-40'
        },
        priceInfo: {
            sell: '150',
            buy: '150'
        }
    },
    {
        name: 'Cursed Shield',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_shield.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way \u2013 Crank\u2013a\u2013kai \u2013 Butterfly Mystery Coin',
            'Quest \u2013 Getting to Gera Gera'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '80',
            spd: '-40'
        },
        priceInfo: {
            sell: '150',
            buy: '150'
        }
    },
    {
        name: 'Cursed Robe',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_robe.png',
        description: 'Unknown effects. Use at your own risk...',
        effect: '',
        locations: [
            'Mystery Way \u2013 Crank\u2013a\u2013kai \u2013 Butterfly Mystery Coin',
            'Quest \u2013 Whistory Lesson, Part 3'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '-40',
            spd: '80'
        },
        priceInfo: {
            sell: '150',
            buy: '150'
        }
    },
    {
        name: 'Restraint Belt',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/restraint_belt.png',
        description:
            'Wear this power-lowering belt when you want to hold back.',
        effect: 'Massively lowers all stats.',
        locations: ['Quest \u2013 The Gates of Whimsy', 'Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '25',
            buy: '25'
        }
    },
    {
        name: 'Monkey Circlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/monkey_circlet.png',
        description:
            'This circlet will tighten to put a stop to any evolution.',
        effect: 'Prevents Yo-kai evolving.',
        locations: [
            'Jungle Hunter',
            'Quest \u2013 The Gates of Whimsy',
            'Quest \u2013 Collection Correction',
            'Lottery'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '15'
        }
    },
    {
        name: "General's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/general_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '800',
            buy: '800'
        }
    },
    {
        name: "Lt. Gen's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lt._gen_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '700',
            buy: '700'
        }
    },
    {
        name: 'Maj. Gen. Medal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/maj._gen._medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '600',
            buy: '600'
        }
    },
    {
        name: "Colonel's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/colonel_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '500'
        }
    },
    {
        name: "Major's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/major_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '400',
            buy: '400'
        }
    },
    {
        name: "Captain's Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/captain_s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '300',
            buy: '300'
        }
    },
    {
        name: "CDR.'s Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cdr._s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '200',
            buy: '200'
        }
    },
    {
        name: "Lt.'s Medal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lt._s_medal.png',
        description: 'Unlocked by reaching the equivalent level in battle.',
        effect: '',
        locations: ['Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '100',
            buy: '100'
        }
    }
];

export default equipments;
