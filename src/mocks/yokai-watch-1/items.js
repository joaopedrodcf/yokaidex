const items = [
    {
        name: 'Small Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/small_exporb.png',
        description: 'Three days of training in one touch of this orb.',
        effect: '',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale \u2013 Shady Back Alley',
            'Blossom Heights',
            'Blossom Heights \u2013 Old Mansion House',
            'Whatta Find',
            'Dropped by Frostail',
            'Dropped by Lava Lord',
            'Dropped by Auntie Heart',
            'Dropped by Mynimo',
            'Dropped by Hurchin',
            'Dropped by Eterna',
            'Quest - The Giant Huchen',
            'Quest - Super Style!',
            'Quest - A Little Mixed Up'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '9',
            buy: '30'
        }
    },
    {
        name: 'Medium Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/medium_exporb.png',
        description: 'Those who touch this orb get the demeanor of a master.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel West',
            'Downtown Springdale',
            'Downtown Springdale \u2013 Construction Site',
            "Downtown Springdale \u2013 Behind Frostia's place",
            "Shopper's Row",
            "Shopper's Row \u2013 Tranquility Apts. \u2013 B\u2013301",
            'Whatta Find',
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Springdale Underground Waterway',
            'Dropped by Cutta-nah-nah',
            'Dropped by Blips',
            'Dropped by Buhu',
            'Dropped by Insomni',
            'Dropped by Slitheref',
            'Quest - Noko Hunt!',
            'Quest - Hyper Hide-and-Seek',
            'Quest - That Meeting Mood',
            'Quest - A Little Mixed Up',
            'Quest - Get the Ball Back!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '150'
        }
    },
    {
        name: 'Large Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/large_exporb.png',
        description:
            "This orb bestows three lives' worth of EXP at a single touch.",
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Desolate Lane',
            'Uptown Springdale \u2013 Elementary School',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Downtown Springdale \u2013 Construction Site',
            "Shopper's Row \u2013 Trees",
            'Whatta Find',
            'Breezy Hills',
            'Dropped by Benkei',
            'Dropped by Beetler',
            'Dropped by Rhinoggin',
            'Dropped by Rhinormous',
            'Dropped by Rattelle',
            'Dropped by Manjimutt',
            'Dropped by Venoct',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '81',
            buy: '540'
        }
    },
    {
        name: 'Mega Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mega_exporb.png',
        description:
            'Some say you can get a science award just for touching this.',
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Hooligan Road',
            'Downtown Springdale \u2013 Springdale Business Tower',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 1st Circle',
            'Dropped by McKraken',
            'Dropped by Wobblewok',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '105',
            buy: '0'
        }
    },
    {
        name: 'Holy Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_exporb.png',
        description:
            'A tiny lizard touched this orb. That tiny lizard is a dinosaur now.',
        effect: '',
        locations: ['Dropped by McKraken', 'Password'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '140',
            buy: '0'
        }
    },
    {
        name: 'Staminum',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum.png',
        description: 'This drink lets humans run without getting tired at all!',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Lonely Waterway',
            'Fortune Hospital',
            'Dropped by Mochismo',
            'Dropped by Minochi',
            'Dropped by Casanuva',
            'Dropped by Touphant',
            'Dropped by Castelius Max',
            'Dropped by Robonyan',
            'Quest - Mixed-Up Drinks',
            'Quest - Hide-and-Seek'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3,6',
            buy: '12'
        }
    },
    {
        name: 'Staminum Alpha',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum_alpha.png',
        description: "Staminum Alpha lasts longer than regular ol' Staminum.",
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Entry Hall',
            'Downtown Springdale \u2013 Springdale Business Tower',
            'Downtown Springdale \u2013 Construction Site',
            'Fortune Hospital',
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Infinite Inferno \u2013 5th Circle',
            'Dropped by Cruncha',
            'Dropped by Touphant',
            'Dropped by Goldenyan',
            'Dropped by Dromp',
            'Dropped by Scritchy',
            'Quest - Hide-and-Seek',
            'Quest - Working Hard...ly'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '9',
            buy: '30'
        }
    },
    {
        name: 'Hidden Hits',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hidden_hits.png',
        description: "A book of combat secrets. You'll be an attack master!",
        effect: '',
        locations: [
            'Mt. Wildwood',
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Yo\u2013kai World \u2013 Liar Mountain',
            "Shopper's Row",
            'Settle In Bookstore',
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Infinite Inferno \u2013 1st Circle',
            'Dropped by Undy',
            'Dropped by Helmsman',
            'Dropped by Reuknight',
            'Dropped by Infour',
            'Dropped by Payn',
            'Dropped by Neighfarious',
            'Dropped by Draggie',
            'Dropped by Komashura',
            'Dropped by Spooklunk',
            'Dropped by Gargaros',
            'Quest - Crane-Game Mania'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '40',
            buy: '200'
        }
    },
    {
        name: 'Top Techniques',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/top_techniques.png',
        description:
            'Give your techniques a boost with this instructional book.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Blossom Heights',
            'Blossom Heights \u2013 Old Mansion House',
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 3rd Circle',
            'Dropped by Baddinyan',
            'Dropped by Enefly',
            'Dropped by Peppillon',
            'Dropped by Negasus',
            'Dropped by Timidevil',
            'Dropped by Shogunyan',
            'Dropped by Dr. Maddiman',
            'Dropped by Hoggles',
            'Dropped by Ogralus'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '40',
            buy: '200'
        }
    },
    {
        name: 'Soul Secrets',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/soul_secrets.png',
        description: 'A book on the secrets of Soultimate Moves.',
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Hooligan Road',
            'Downtown Springdale \u2013 Construction Site',
            "Shopper's Row \u2013 Trees",
            'Settle In Bookstore',
            'Breezy Hills',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 7-8th Circle',
            'Dropped by Corptain',
            'Dropped by Beetall',
            'Dropped by Moskevil',
            'Dropped by Beelzebold',
            'Dropped by Flumpy',
            'Dropped by Multimutt',
            'Dropped by Elder Bloom',
            'Dropped by Gilgaros',
            'Dropped by Sapphinyan',
            'Dropped by Squisker',
            'Dropped by Orcanos'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '40',
            buy: '200'
        }
    },
    {
        name: 'A Serious Life',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/a_serious_life.png',
        description:
            'A book about giving life your all. Good for a lazy Yo-kai.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Mt. Wildwood \u2013 Abandoned Tunnel West',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Downtown Springdale',
            'Downtown Springdale \u2013 Springdale Business Tower',
            'Downtown Springdale \u2013 Construction Site',
            "Shopper's Row \u2013 Trees",
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 6th Circle',
            'Dropped by Cutta-nah',
            'Dropped by Swelterrier',
            "Dropped by Ol' Saint Trick",
            'Dropped by Greesel',
            'Dropped by Peckpocket',
            'Dropped by Noko',
            'Dropped by Bloominoko',
            'Quest - Grades of Gloom',
            "Quest - The Peon's Poems",
            'Quest - The Test Fraud'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '50',
            buy: '250'
        }
    },
    {
        name: 'Think Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/think_karate.png',
        description:
            "A book on the karate mind-set. Change a Yo-kai's Attitude.",
        effect: '',
        locations: [
            'Uptown Springdale',
            'Jungle Hunter',
            'Downtown Springdale \u2013 Delivery Bay',
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Dropped by Mochismo',
            'Dropped by Mad Mountain',
            'Dropped by Lava Lord',
            'Quest - Officer Slacker',
            'Quest - Voice in the Darkness'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: 'Use Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/use_karate.png',
        description:
            'A book on advanced karate. It makes you focus on attacking.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Settle In Bookstore',
            'Dropped by Pandle',
            'Dropped by Minochi',
            'Dropped by Thornyan',
            'Quest - Voice in the Darkness'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: 'Skill Compendium',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_compendium.png',
        description: 'An illustrated collection of Yo-kai Skills. Fascinating!',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Blossom Heights \u2013 Tucked Away Lot',
            'Settle In Bookstore',
            'Dropped by Snotsolong',
            'Dropped by Mircle',
            'Dropped by Swosh',
            'Quest - Detective Quest \u2460'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: 'Skill Encyclopedia',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_encyclopedia.png',
        description:
            'A book containing EVERY single Yo-kai Skill ever!A must-have!',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Downtown Springdale \u2013 Construction Site',
            'Settle In Bookstore',
            "Dropped by N'more",
            'Dropped by Papa Bolt',
            'Dropped by Shogunyan',
            'Quest - Unlucky Family'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: 'Get Guarding',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/get_guarding.png',
        description: 'A book on the importance of defense, with handy images.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Downtown Springdale \u2013 Springdale Business Tower',
            'Settle In Bookstore',
            'Dropped by Goruma',
            'Dropped by Fidgephant',
            'Dropped by Mad Mountain',
            'Dropped by Hornaplenty',
            'Quest - Lock It Down',
            'Quest - Song Sung Long'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: 'Guard Gloriously',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/guard_gloriously.png',
        description:
            'This book proves the greatness of defense. Who needs offense?',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Dropped by Walldin',
            'Dropped by Ledballoon',
            'Dropped by Abodabat',
            'Quest - Song Sung Long'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: "Li'l Angel Heals",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/li_l_angel_heals.png',
        description:
            'A book about an angel healing people. Gives you a kind heart.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Dropped by Whapir',
            'Dropped by Steppa',
            'Dropped by Peppillon',
            'Dropped by Mama Aura',
            'Quest - The Too-Visible Girl',
            "Quest - Nat's Pop-Star Mania"
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: "Bye, Li'l Angel",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bye,_li_l_angel.png',
        description:
            "The last book in the \u201cLi'l Angel\u201d series. So heartwarming!",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Liar Mountain',
            "Shopper's Row \u2013 Trees",
            'Settle In Bookstore',
            'Dropped by Whapir',
            'Dropped by Pinkipoo',
            'Dropped by Happierre',
            'Dropped by Dandoodle'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: "The Pest's Quest",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_pest_s_quest.png',
        description: 'A novel about a boy becoming a total pest.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Settle In Bookstore',
            'Dropped by Agon',
            'Dropped by Nul',
            'Dropped by Rockabelly',
            'Dropped by Nagatha',
            'Dropped by Cynake',
            'Quest - Detective Quest \u2461'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: 'The Perfect Pest',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_perfect_pest.png',
        description:
            'The final novel about the boy who became a legendary pest.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Downtown Springdale \u2013 Construction Site',
            'Settle In Bookstore',
            'Dropped by Lafalotta',
            'Dropped by Negatibuzz',
            'Dropped by Compunzer',
            'Quest - Energyummy'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: 'Support Life #7',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/support_life_#7.png',
        description:
            "July's issue of the #1 magazine for those who live to serve.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Downtown Springdale \u2013 Springdale Business Tower',
            'Settle In Bookstore',
            'Springdale Underground Waterway',
            'Dropped by Cadable',
            'Dropped by Nird',
            'Dropped by Sandi',
            'Dropped by Noko',
            'Quest - School Pranks'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2,94',
            buy: '9,8'
        }
    },
    {
        name: 'Support Special',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/support_special.png',
        description: "A digest containing the year's best articles.",
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Liar Mountain',
            'Settle In Bookstore',
            'Dropped by Cadable',
            "Dropped by Ol' Fortune",
            'Dropped by Nird',
            'Quest - Super Style!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15',
            buy: '50'
        }
    },
    {
        name: 'Strength Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/strength_talisman.png',
        description: 'A curious charm sold at the shrine that boosts Strength.',
        effect: '',
        locations: [
            'Mt. Wildwood Shrine',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Blossom Heights',
            'Dropped by Helmsman',
            'Dropped by Reuknight',
            'Dropped by Sheen',
            'Dropped by Kapunki',
            'Dropped by Draggie',
            'Dropped by Elder Bloom',
            'Dropped by Gilgaros'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '10'
        }
    },
    {
        name: 'Spirit Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spirit_talisman.png',
        description: 'A curious charm sold at the shrine that boosts Spirit.',
        effect: '',
        locations: [
            'Mt. Wildwood Shrine',
            "Shopper's Row \u2013 Tranquility Apts. \u2013 C\u2013303",
            'Dropped by Snee',
            'Dropped by Casanono',
            'Dropped by Elloo',
            'Dropped by Alloo',
            'Dropped by Cuttincheez',
            'Quest - Comic-Book Caper'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '10'
        }
    },
    {
        name: 'Defense Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/defense_talisman.png',
        description: 'A curious charm sold at the shrine that boosts Defense.',
        effect: '',
        locations: [
            'Mt. Wildwood Shrine',
            'Dropped by Noway',
            'Dropped by Walldin',
            'Dropped by Castelius III',
            'Dropped by Castelius II',
            'Dropped by Castelius I',
            'Quest - The Too-Visible Girl'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '10'
        }
    },
    {
        name: 'Speed Talisman',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_talisman.png',
        description: 'A curious charm sold at the shrine that boosts Speed.',
        effect: '',
        locations: [
            'Mt. Wildwood Shrine',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Dropped by Gleam',
            'Dropped by Dummkap',
            'Dropped by Skelebella',
            'Dropped by Compunzer',
            'Dropped by Slitheref',
            'Dropped by Venoct',
            'Dropped by Komashura',
            'Quest - Hyper Hide-and-Seek'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '10'
        }
    },
    {
        name: 'Nasty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nasty_medicine.png',
        description: "Itk's nasty, but itk'll revive an unconscious Yo-kai.",
        effect: '',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale \u2013 Desolate Lane',
            'Jungle Hunter',
            'Blossom Heights',
            'Fortune Hospital',
            "Dropped by D'wanna",
            "Dropped by N'more",
            'Dropped by Tattlecast',
            'Dropped by Skranny',
            'Dropped by Espy',
            'Dropped by Grubsnitch',
            'Dropped by Greesel',
            'Quest - Sneeze School',
            "Quest - Nat's Pop-Star Mania",
            'Quest - Working Hard...ly',
            'Quest - Energyummy'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '9',
            buy: '30'
        }
    },
    {
        name: 'Bitter Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bitter_medicine.png',
        description: 'This bitter herbal mix will jolt a Yo-kai to its feet.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Jungle Hunter',
            'Downtown Springdale \u2013 Construction Site',
            'Fortune Hospital',
            "Shopper's Row \u2013 Tranquility Apts. \u2013 B\u2013203",
            'Dropped by Wazzat',
            "Dropped by Q'wit",
            'Dropped by Kyubi',
            'Dropped by Blizzaria',
            'Dropped by Cheeksqueek',
            "Quest - Ms. Frost's Favor"
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '18',
            buy: '60'
        }
    },
    {
        name: 'Mighty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mighty_medicine.png',
        description: 'This secret herbal blend will instantly revive Yo-kai.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Yo\u2013kai World \u2013 Hooligan Road',
            'Fortune Hospital',
            "Shopper's Row \u2013 Trees",
            'Infinite Inferno \u2013 3rd Circle',
            'Dropped by Frostina',
            'Dropped by Grumples',
            'Dropped by Everfore',
            'Dropped by Insomni',
            'Dropped by Dandoodle',
            'Dropped by McKraken'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '36',
            buy: '120'
        }
    },
    {
        name: 'Getaway Plush',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/getaway_plush.png',
        description:
            "Nobody can look away from this odd doll. Itk's a fine distraction.",
        effect: '',
        locations: [
            'Uptown Springdale',
            'Uptown Springdale \u2013 Lonely Waterway',
            'Everymart Uptown',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Blossom Heights \u2013 Old Mansion House',
            'Everymart Blossom Heights',
            'Downtown Springdale \u2013 Construction Site',
            'Everymart Downtown',
            "Everymart Shopper's Row",
            'Everymart Breezy Hills',
            'Dropped by Cutta-nah',
            'Dropped by Corptain',
            'Dropped by Wazzat',
            'Dropped by Cupistol',
            'Dropped by Grubsnitch',
            'Dropped by Reversette',
            'Dropped by Agon',
            'Dropped by Negatibuzz',
            'Dropped by Moskevil',
            'Dropped by Scritchy',
            'Dropped by Dimmy',
            'Dropped by Blandon',
            'Dropped by Lamedian',
            'Dropped by Bloominoko'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '1,5',
            buy: '5'
        }
    },
    {
        name: 'Bronze Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bronze_doll.png',
        description: 'A bronze doll. It sells for a decent amount of cash.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 The Catwalk',
            'Mt. Wildwood',
            'Blossom Heights \u2013 Old Mansion House',
            'Dropped by Dummkap',
            'Dropped by Blowkade',
            'Dropped by Hornaplenty',
            'Dropped by Grainpa',
            'Dropped by Skreek',
            'Dropped by Gush',
            'Dropped by Pandanoko',
            'Dropped by Shrook',
            'Quest - Battle Beetle',
            'Quest - Sneaking Suspicion',
            'Quest - Get the Ball Back!',
            'Quest - Shopping Spree'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '0'
        }
    },
    {
        name: 'Silver Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/silver_doll.png',
        description: 'A cool silver doll. This can be sold for quite a bit.',
        effect: '',
        locations: [
            'Yo\u2013kai World \u2013 Liar Mountain',
            "Shopper's Row \u2013 Trees",
            'Breezy Hills',
            'Hills \u2013 Stone House',
            'Dropped by Castelius III',
            'Dropped by Castelius Max',
            'Dropped by Baku',
            'Dropped by Dismarelda',
            'Dropped by Azure Dragon',
            'Dropped by Daiz',
            'Dropped by Spenp',
            'Dropped by Dianyan',
            'Quest - Get a Rare Model Kit',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '200',
            buy: '0'
        }
    },
    {
        name: 'Golden Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/golden_doll.png',
        description: 'A pure-gold doll that sells for a whole lot of cash.',
        effect: '',
        locations: [
            'Infinite Inferno \u2013 1st Circle',
            'Dropped by Castelius II',
            'Dropped by Robonyan',
            'Dropped by Shrook',
            'Dropped by Chirpster',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '600',
            buy: '0'
        }
    },
    {
        name: 'Fish Bait',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fish_bait.png',
        description: 'Bait made by Mr. Fischer. This makes it easier to fish.',
        effect: '',
        locations: [
            'Uptown \u2013 Fish Place',
            'Dropped by Damona',
            'Dropped by Wiglin',
            'Dropped by Coughkoff',
            'Dropped by Sir Berus',
            'Dropped by Drizzle',
            'Dropped by Urnaconda',
            'Dropped by Fishpicable',
            'Dropped by Rageon',
            'Dropped by Confuze',
            'Dropped by Chummer'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '1'
        }
    },
    {
        name: 'Black Syrup',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_syrup.png',
        description: "Bugs love this stuff. Itk'll make bugs easier to catch.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Beetler',
            'Dropped by Beetall',
            'Dropped by Cruncha',
            'Dropped by Bruff',
            'Dropped by Rhinoggin',
            'Dropped by Rhinormous',
            'Dropped by Skelebella',
            'Dropped by Cadin',
            'Dropped by Chippa',
            'Dropped by Enerfly',
            'Dropped by Enefly',
            'Dropped by Betterfly',
            'Dropped by Rollen'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '1'
        }
    },
    {
        name: 'Red Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png',
        description: 'A bold coin. Use it in the Crank-a-kai!',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Downtown Springdale \u2013 Construction Site',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 5th Circle',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Eyedra',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Yellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png',
        description: 'A mysterious coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Downtown Springdale \u2013 Construction Site',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 6th Circle',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Hoggles',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Orange Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png',
        description: 'A hefty coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Uptown Springdale \u2013 Elementary School',
            'Blossom Heights',
            'Downtown Springdale \u2013 Construction Site',
            'Springdale Underground Waterway',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Styx Mk.VI',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Pink Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png',
        description: 'A lovely coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Downtown Springdale \u2013 Construction Site',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 3rd Circle',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Clipso',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Green Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png',
        description: 'A warm coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Blossom Heights \u2013 Old Mansion House',
            "Shopper's Row \u2013 Trees",
            "Shopper's Row \u2013 Tranquility Apts. \u2013 C\u2013301",
            'Springdale Underground Waterway',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Spooklunk',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png',
        description: 'An unpleasant coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel West',
            'Nocturne Hospital \u2013 2F',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 1st Circle',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Dr. Nogut',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Purple Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png',
        description: 'An eerie coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Blossom Heights \u2013 Old Mansion Attic',
            "Shopper's Row \u2013 Trees",
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Springdale Underground Waterway',
            'Infinite Inferno \u2013 4th Circle',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Squisker',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Light Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_blue_coin.png',
        description: 'A slippery coin. Use it in the Crank-a-kai.',
        effect: '',
        locations: [
            'Mt. Wildwood \u2013 Abandoned Tunnel East',
            'Breezy Hills \u2013 Gourd Pond Museum',
            'Springdale Underground Waterway',
            'Row \u2013 Tranquility Apartments',
            'Dropped by Wobblewok',
            'Password'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Sapphire Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sapphire_coin.png',
        description: 'A special sapphire coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Emerald Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/emerald_coin.png',
        description: 'A special emerald coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Ruby Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ruby_coin.png',
        description: 'A special ruby coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Topaz Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/topaz_coin.png',
        description: 'A special topaz coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Diamond Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/diamond_coin.png',
        description: 'A special diamond coin for the Crank-a-kai.',
        effect: '',
        locations: ['QR Code'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Excitement Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excitement_coin.png',
        description: 'An exciting coin just for the Crank-a-kai.',
        effect: '',
        locations: ['Password'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Five-Star Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png',
        description: 'A special five-star coin for the Crank-a-kai.',
        effect: '',
        locations: ['Password'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Special Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png',
        description: 'A special coin for the Crank-a-kai.',
        effect: '',
        locations: ['Password'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Dancing Star',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dancing_star.png',
        description:
            'A sparkling star. Rumor has it someone is gathering these.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Yo\u2013kai World \u2013 Entry Hall',
            'Blossom Heights \u2013 Hidden Side Street',
            'Blossom Heights \u2013 Old Mansion Attic',
            'Downtown Springdale \u2013 Construction Site',
            "Shopper's Row \u2013 Trees",
            'Quest - The Invisible Girl',
            'Quest - Out of Step',
            'Quest - Toy Nabber',
            'Quest - Rank C Challenge!',
            'Quest - Rank B Challenge!',
            'Quest - Rank A Challenge!',
            'Quest - Rank S Challenge!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0,3',
            buy: '0'
        }
    },
    {
        name: 'Legendary Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legendary_blade.png',
        description: 'This sword was forged by a master to mete out justice.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Cursed Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_blade.png',
        description:
            'A cursed sword that draws its owner towards a tragic future.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Holy Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_blade.png',
        description:
            "Said to house holy power, this sword's over 10,000 years old!",
        effect: '',
        locations: ['Dropped by Orcanos'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: "General's Soul",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/general_s_soul.png',
        description:
            'The spirit of a legendary general. Linked to a particular Yo-kai.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Love Buster',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_buster.png',
        description:
            'This wackily strong weapon can only be used by popular folks.',
        effect: '',
        locations: ['Dropped by Casanuva'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'GHz Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ghz_orb.png',
        description: 'A ball encasing electric waves. A zap could fry you!',
        effect: '',
        locations: ['Dropped by Signibble'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Unbeatable Soul',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/unbeatable_soul.png',
        description:
            'The spirit of a great warrior. Related to a horned Yo-kai.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Platinum Bar',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_bar.png',
        description: "A bar of pure platinum. Itk's heavy!",
        effect: '',
        locations: ['Dropped by Castelius I'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Love Scepter',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_scepter.png',
        description:
            "Itk's a scepter for a nobleman of love. NOT just a stick.",
        effect: '',
        locations: ['Dropped by Shmoopie'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Glacial Clip',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/glacial_clip.png',
        description:
            'A hair clip made of unmelting ice. It houses a lot of power.',
        effect: '',
        locations: ['Terror Time'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0',
            buy: '0'
        }
    },
    {
        name: 'Buff Weight',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/buff_weight.png',
        description: 'Training with this hefty dumbbell will buff you up!',
        effect: '',
        locations: ['Dropped by Ake'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Shard of Evil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shard_of_evil.png',
        description:
            'A dangerous shard that awakens the evil in a timid devil.',
        effect: '',
        locations: ['Terror Time'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0',
            buy: '0'
        }
    },
    {
        name: 'Snowstorm Cloak',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/snowstorm_cloak.png',
        description: 'A silvery-white cape for the king of a snowy mountain.',
        effect: '',
        locations: ['Terror Time'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Ageless Powder',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ageless_powder.png',
        description:
            "A facial powder made of human souls. Itk'll make you younger.",
        effect: '',
        locations: ['Terror Time'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Drop of Joy',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/drop_of_joy.png',
        description:
            'A lovely, glowing drop used to grow the flower of happiness.',
        effect: '',
        locations: ['Dropped by Sandi'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '60',
            buy: '0'
        }
    },
    {
        name: 'Dragon Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dragon_orb.png',
        description: 'An orb of unbelievable beauty and full of dragon energy.',
        effect: '',
        locations: ['Terror Time'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '0',
            buy: '0'
        }
    },
    {
        name: 'Holy Water',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_water.png',
        description: 'Holy water that can make anything squeaky clean.',
        effect: '',
        locations: ['Dropped by Droplette', 'Quest - Talk Like the Wind'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Dingy Scale',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dingy_scale.png',
        description:
            "Itk's too dirty to tell what it really is. Maybe a dragon's scale?",
        effect: '',
        locations: ['Dropped by Dragon Lord', 'Quest - Flower for the Shrine'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Venoct Aura',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/venoct_aura.png',
        description: "A small bottle that holds Venoctk's aura. Shiny!",
        effect: '',
        locations: ['Quest - Bird Collection 2'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Tattered Gauntlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tattered_gauntlet.png',
        description:
            'A beat-up gauntlet. It once housed the power of a dragon.',
        effect: '',
        locations: ['Quest - Start the Yo-kai Party!'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Cracked Crystal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cracked_crystal.png',
        description: "A holy monk's crystal ball. Now shattered and powerless.",
        effect: '',
        locations: ['Dropped by Dragon Lord', 'Quest - Keep the Park Clean!'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Crystal Shard',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/crystal_shard.png',
        description:
            'Finding all the crystal ball pieces may restore its power.',
        effect: '',
        locations: ['Dropped by Signiton', 'Quest - The Floating Helmet'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Clenzall',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/clenzall.png',
        description: 'A rare detergent that can clean clothes with one drop.',
        effect: '',
        locations: ['Dropped by Impass', 'Quest - Detective Quest \u2462'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Yellowed Sash',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellowed_sash.png',
        description:
            'A sash that has yellowed with age. It has a strange power.',
        effect: '',
        locations: ['Dropped by Lamedian', 'Quest - Biggest. Crisis. EVER.'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3',
            buy: '0'
        }
    },
    {
        name: 'Plain Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/plain_ring.png',
        description:
            'Just an ordinary ring. If you were to put a jewel in it, though\u2026',
        effect: '',
        locations: [
            'Jungle Hunter',
            "Shopper's Row",
            "Shopper's Row \u2013 Trees",
            "Shopper's Row \u2013 Tranquility Apts. \u2013 B\u2013201",
            'Whatta Find',
            'Dropped by Mirapo',
            'Quest - Fusion Time!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '100'
        }
    },
    {
        name: 'Blank Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blank_charm.png',
        description:
            "A charm. Doesn't do much until you put something into it.",
        effect: '',
        locations: [
            'Jungle Hunter',
            'Blossom Heights \u2013 Old Mansion Attic',
            "Shopper's Row \u2013 Trees",
            'Whatta Find',
            "Dropped by Q'wit",
            'Dropped by Count Cavity',
            'Quest - Fusion Time!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20',
            buy: '100'
        }
    },
    {
        name: 'Ruby',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ruby.png',
        description:
            'A beautiful jewel that shines red with the power of Fire.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Breezy Hills',
            'Dropped by Blazion',
            'Dropped by Casanono',
            'Dropped by Flengu',
            'Dropped by Suspicioni',
            'Dropped by Bananose',
            'Dropped by Rubinyan',
            'Quest - Need Ingredients!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Aquamarine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aquamarine.png',
        description:
            'A beautiful jewel that shines blue with the power of Water.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Lodo',
            'Dropped by Chippa',
            'Dropped by Belfree',
            'Dropped by Confuze',
            'Dropped by Copperled',
            'Quest - Bird Collection 1'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Topaz',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/topaz.png',
        description: 'A beautiful yellow jewel with the power of Lightning.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Tantroni',
            'Dropped by Urnaconda',
            'Dropped by Cynake',
            'Quest - The Lost Earring'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Tourmaline',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tourmaline.png',
        description: 'A beautiful deep-brown jewel with the power of Earth.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Sheen',
            'Dropped by Tattletell',
            'Dropped by Damona',
            'Dropped by Croonger',
            'Quest - Inside Blues'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Opal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/opal.png',
        description:
            'A beautiful jewel that shines white with the power of Ice.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Slacka-slash',
            'Dropped by Snee',
            'Dropped by Tattlecast',
            'Dropped by Singcada',
            'Dropped by Hungorge',
            'Dropped by Topanyan',
            'Quest - Fishy Business'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    },
    {
        name: 'Emerald',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/emerald.png',
        description:
            'A beautiful jewel that shines green with the power of Wind.',
        effect: '',
        locations: [
            'Jungle Hunter',
            'Dropped by Gleam',
            'Dropped by Steppa',
            'Dropped by Enerfly',
            'Dropped by Reversa',
            'Dropped by Abodabat',
            'Dropped by Emenyan',
            'Quest - Sweet Old Man'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '30',
            buy: '0'
        }
    }
];

export default items;
