const items = [
    {
        name: 'Nasty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nasty_medicine.png',
        description: "It's nasty, but it'll revive an unconscious Yo-kai.",
        effect: 'Revive Yo-kai with low HP.',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '300',
            buy: '3000'
        }
    },
    {
        name: 'Bitter Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bitter_medicine.png',
        description: 'This bitter herbal mix will jolt a Yo-kai to its feet.',
        effect: 'Revive Yo-kai with half HP.',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '600',
            buy: '6000'
        }
    },
    {
        name: 'Mighty Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mighty_medicine.png',
        description: 'This secret herbal blend will instantly revive a Yo-kai.',
        effect: 'Revive Yo-kai with full HP.',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2400',
            buy: '0'
        }
    },
    {
        name: 'Miracle Medicine',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/miracle_medicine.png',
        description:
            'The light from these glittery balls will completely revive a whole party.',
        effect: 'Revive all Yo-kai with full HP.',
        locations: [null],
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
        name: 'Mini Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mini_exporb.png',
        description:
            'A touch of this teeny orb is worth three hours of training.',
        effect: 'Gain 10 EXP.',
        locations: [null],
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
        name: 'Small Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/small_exporb.png',
        description: 'Three days of training in one touch of this orb.',
        effect: 'Gain 50 EXP.',
        locations: ['Wild Hunters'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '100',
            buy: '1000'
        }
    },
    {
        name: 'Medium Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/medium_exporb.png',
        description: 'Those who touch this orb get the demeanor of a master.',
        effect: 'Gain 500 EXP.',
        locations: ['Wild Hunters'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '800',
            buy: '8000'
        }
    },
    {
        name: 'Large Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/large_exporb.png',
        description:
            'This orb bestows three lives worth of EXP at a single touch.',
        effect: 'Gain 2000 EXP.',
        locations: ['Wild Hunters'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2600',
            buy: '26000'
        }
    },
    {
        name: 'Mega Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mega_exporb.png',
        description:
            "It contains the wisdom of some of the world's sharpest minds.",
        effect: 'Gain 8000 EXP.',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '9200',
            buy: '0'
        }
    },
    {
        name: 'Holy Exporb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_exporb.png',
        description:
            'A tiny lizard touched this orb. That tiny lizard is a dinosaur now.',
        effect: 'Gain 20000 EXP.',
        locations: ['Inspector '],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '15000',
            buy: '0'
        }
    },
    {
        name: 'Staminum',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum.png',
        description: 'This drink lets humans run without getting tired at all!',
        effect: 'Infinite stamina.',
        locations: ['Phantomart'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '240',
            buy: '1200'
        }
    },
    {
        name: 'Staminum Alpha',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/staminum_alpha.png',
        description: "Staminum Alpha lasts longer than regular ol' Staminum.",
        effect: 'Infinite stamina.',
        locations: ['Jungle Hunter'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '480',
            buy: '0'
        }
    },
    {
        name: 'Hidden Hits',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hidden_hits.png',
        description: "A book of combat secrets. You'll be an attack master!",
        effect: 'Increases Attack Rank.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3000',
            buy: '0'
        }
    },
    {
        name: 'Arcane Attacks',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/arcane_attacks.png',
        description:
            'Fighting secrets of the masters. Read it to refine your Attack.',
        effect: 'Increases Attack Rank by 3.',
        locations: ['Inspector '],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '10000',
            buy: '0'
        }
    },
    {
        name: 'Top Techniques',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/top_techniques.png',
        description:
            'Give your Techniques a boost with this instructional book.',
        effect: 'Increases Technique Rank.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3000',
            buy: '0'
        }
    },
    {
        name: 'Ancient Arts',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ancient_arts.png',
        description:
            'Top tips to tailor your Techniques and master the ancient arts.',
        effect: 'Increase Technique Rank by 3.',
        locations: ['Inspector '],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '10000',
            buy: '0'
        }
    },
    {
        name: 'Soul Secrets',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/soul_secrets.png',
        description: 'A book on the secrets of Soultimate Moves.',
        effect: 'Increases Soultimate Rank.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3000',
            buy: '0'
        }
    },
    {
        name: 'Mystic Mysteries',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mystic_mysteries.png',
        description:
            'Master the Mystic Mysteries and make your Soultimates the ultimates.',
        effect: 'Increases Soultimate Rank by 3.',
        locations: ['Inspector '],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '10000',
            buy: '0'
        }
    },
    {
        name: 'A Serious Life',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/a_serious_life.png',
        description:
            'A book about giving your life your all. Good for a lazy Yo-kai.',
        effect: 'Makes a Yo-kai Loaf less.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2500',
            buy: '0'
        }
    },
    {
        name: 'Think Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/think_karate.png',
        description:
            "A book on the karate mind-set. Change a Yo-kai's Attitude.",
        effect: 'Makes a Yo-kai Grouchy.',
        locations: ["Margarita's"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '98',
            buy: '0'
        }
    },
    {
        name: 'Use Karate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/use_karate.png',
        description:
            'A book on advanced karate. It makes you focus on attacking.',
        effect: 'Makes a Yo-kai Rough.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: 'Skill Compendium',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_compendium.png',
        description: 'An illustrated collection of Yo-kai Skills. Fascinating!',
        effect: 'Makes a Yo-kai Logical.',
        locations: ["Margarita's"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '98',
            buy: '0'
        }
    },
    {
        name: 'Skill Encyclopedia',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/skill_encyclopedia.png',
        description: 'A book containing EVERY Yo-kai Skill ever! A must-have!',
        effect: 'Makes a Yo-kai Brainy.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: 'Get Guarding',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/get_guarding.png',
        description: 'A book on the importance of defense, with handy images.',
        effect: 'Makes a Yo-kai Careful.',
        locations: ["Margarita's"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '98',
            buy: '0'
        }
    },
    {
        name: 'Guard Gloriously',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/guard_gloriously.png',
        description:
            'This book proves the greatness of defense. Who needs offense?',
        effect: 'Makes a Yo-kai Calm.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: "Li'l Angel Heals",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/li_l_angel_heals.png',
        description:
            'A book about an angel healing people. Gives you a kind heart.',
        effect: 'Makes a Yo-kai Gentle.',
        locations: ["Margarita's"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '98',
            buy: '0'
        }
    },
    {
        name: "Bye, Li'l Angel",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bye,_li_l_angel.png',
        description:
            'The last book in the "Li\'l Angel" series. So heartwarming!',
        effect: 'Makes a Yo-kai Tender.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: "The Pest's Quest",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_pest_s_quest.png',
        description:
            'A novel about two country boys intent on becoming real pains.',
        effect: 'Makes a Yo-kai Twisted.',
        locations: ["Margarita's"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '98',
            buy: '0'
        }
    },
    {
        name: 'The Perfect Pest',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/the_perfect_pest.png',
        description:
            'The epic sequel, in which our heroes earn ultimate pesthood.',
        effect: 'Makes a Yo-kai Cruel.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: 'Support Special',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/support_special.png',
        description: "A digest containing the year's best articles.",
        effect: 'Makes a Yo-kai Devoted.',
        locations: ['Settle In Bookstore'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '500',
            buy: '0'
        }
    },
    {
        name: 'Getaway Plush',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/getaway_plush.png',
        description:
            "Nobody can look away from this odd doll. It's a fine distraction.",
        effect: 'Allows you to flee.',
        locations: ['Phantomart'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '100',
            buy: '500'
        }
    },
    {
        name: 'Iron Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/iron_doll.png',
        description: 'A metal doll. This can be sold for a little bit of cash.',
        effect: '',
        locations: ['Springdale Underground Area'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '300',
            buy: '0'
        }
    },
    {
        name: 'Bronze Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bronze_doll.png',
        description:
            'A bronze doll. This can be sold for a decent amount of cash.',
        effect: '',
        locations: ['Greengramps'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '1000',
            buy: '0'
        }
    },
    {
        name: 'Silver Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/silver_doll.png',
        description:
            'A cool silver doll. This can be sold for quite a bit of cash.',
        effect: '',
        locations: ['Greengramps'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Golden Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/golden_doll.png',
        description:
            'A pure-gold doll. This can be sold for a whole lot of cash.',
        effect: '',
        locations: ['Greengramps'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '20000',
            buy: '20000'
        }
    },
    {
        name: 'Platinum Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_doll.png',
        description:
            'A platinum doll. This can be sold for for a huge amount of cash.',
        effect: '',
        locations: ['Oh My Swirls! A Busted Watch!'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '60000',
            buy: '0'
        }
    },
    {
        name: 'Black Doll',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_doll.png',
        description: 'The mother of all dolls. Sell it for a fortune.',
        effect: '',
        locations: [null],
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
        name: 'Fish Bait',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fish_bait.png',
        description: 'Bait made by Mr. Fischer. This makes it easier to fish.',
        effect: '',
        locations: ["Margarita's"],
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
        name: 'Black Syrup',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_syrup.png',
        description: "Bugs love this stuff. It'll make bugs easier to catch.",
        effect: '',
        locations: ['Breezy Hills'],
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
        name: 'Originyan Essence',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/originyan_essence.png',
        description:
            'A miraculous brew that brings Train-a-Nyan sessions to a swift end.',
        effect: '',
        locations: ['Springdale Elementary - 2F'],
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
        name: 'Legendary Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legendary_blade.png',
        description: 'This sword was forged by a master to mete out justice.',
        effect: '',
        locations: ['Triangle Lottery', 'Blasters T (Enma Palace 5)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Cursed Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_blade.png',
        description:
            'A cursed sword that draws its owner toward a tragic future.',
        effect: '',
        locations: ['Triangle Lottery', 'Blasters T (Enma Palace 5)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Holy Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/holy_blade.png',
        description:
            'Said to house holy power, this sword is over 10,000 years old!',
        effect: '',
        locations: [
            'Triangle Lottery',
            'Blasters T (Blazing aura)',
            'Super/Ultra Red Coin'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
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
        locations: ['Jungle Hunter', 'Blasters T (Cluphinx Spade Mouth 2)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
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
        locations: [
            'Scrapyard Crane mini game item',
            'Quest - Feminine Fracas!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'GHz Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ghz_orb.png',
        description: 'A ball encasing electric waves. A zap could fry you!',
        effect: '',
        locations: ['Triangle Lottery', 'Blasters T (Cluvian Keyhole 1)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
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
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Platinum Bar',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_bar.png',
        description: "A bar of pure platinum. It's heavy!",
        effect: '',
        locations: [
            'Blasters T (Tornado aura/Labyrinth of Treasures)',
            'Super/Ultra Orange Coin',
            'Quest - Oh My Swirls! A Busted Watch!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Snowstorm Cloak',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/snowstorm_cloak.png',
        description:
            'A white-chased blue cape for the king of a snowy mountain.',
        effect: '',
        locations: ['Clown Time reward', 'Blasters T (Blizzaria EX aura)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Love Scepter',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_scepter.png',
        description: "It's a scepter for a nobleman of love. NOT just a stick.",
        effect: '',
        locations: [
            'Triangle Lottery',
            'San Fantastico - Sea Ring: Tattleterror (15%)'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
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
        locations: ['Blasters T (Blizzaria Aura)', 'Super/Ultra/Pink Coin'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Buff Weight',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/buff_weight.png',
        description: 'Training with this hefty dumbbell will buff you up!',
        effect: '',
        locations: ['Jungle Hunter', 'BBQ Southmond (Wanted Points)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '2200',
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
        locations: [
            'BBQ Southmond (Wanted Points)',
            'Blasters T (Abyss aura)',
            'Super/Ultra Blue Coin'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Ageless Powder',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ageless_powder.png',
        description:
            "A facial powder made of human souls. It'll make you younger.",
        effect: '',
        locations: [
            'San Fantastico - Sea Ring: Tattleterror (0.7%)',
            'Blasters T (Heavenly Aura)',
            'Super/Ultra/Purple Coin'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Dragon Orb',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dragon_orb.png',
        description: 'An orb of unbelievable beauty. Full of dragon energy.',
        effect: '',
        locations: [
            'Blasters T (Storm aura)',
            'Super/Ultra/Light-Blue Coin',
            'Quest - A Ghost Club Odyssey'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Raging Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/raging_blade.png',
        description:
            'This will turn anyone into a rambunctious, one-person riot.',
        effect: '',
        locations: ['BBQ Southmond (Wanted Points)', 'Zombie/Endless Night'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Sand Suit',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sand_suit.png',
        description: 'This unique suit gets especially heavy when it rains.',
        effect: '',
        locations: ['Triangle Lottery'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Ethereal Water',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ethereal_water.png',
        description:
            'Drinking this bestows godlike powers, so handle it with care.',
        effect: '',
        locations: [
            'Wild Hunters (Dukesville)',
            'Blasters T (Whirlpool aura)',
            'Super/Ultra/Green Coin'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Cursed Journal',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cursed_journal.png',
        description:
            "A jinxed journal that you'll regret sneaking a peek into...",
        effect: '',
        locations: ['Triangle Lottery', 'Blasters T (Darkness aura)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Horn',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/horn.png',
        description: 'A horn that emits a deafening blast, audible miles away.',
        effect: '',
        locations: ['Wild Hunters (Dukesville)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Mem-o-Vac',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mem-o-vac.png',
        description:
            'A memory-inhaling device. It also has a setting for exhaling them.',
        effect: '',
        locations: [
            'Blasters T (Whirlwind aura)',
            'Quest - The Sorrows of Old Zomboy'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Mermaid Pearl',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mermaid_pearl.png',
        description: 'When a mermaid is reborn, this exquisite pearl appears.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Love Rice Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/love_rice_ball.png',
        description:
            'Made with love and affection, this will satisfy a rumbling tummy.',
        effect: '',
        locations: ['San Fantastico - Sea Ring: Tattleterror (6.5%)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Carved Bear',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/carved_bear.png',
        description: 'This wooden bear has been hewn by a master craftsman.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Goldfish Lantern',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/goldfish_lantern.png',
        description: 'Kids are sure to love this delightful paper lantern.',
        effect: '',
        locations: ['BBQ Southmond (Wanted Points)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: "Master's Lantern",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/master_s_lantern.png',
        description:
            'This lantern gives off a glow that will cheer up all who see it.',
        effect: '',
        locations: ['Springdale Scratch-Off'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Gold Emblem',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gold_emblem.png',
        description: 'This striking item is crafted from only the purest gold.',
        effect: '',
        locations: ['Rub the Golden Egg'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Takoyaki Tray',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/takoyaki_tray.png',
        description: 'Use this tray to make delicious takoyaki octopus balls.',
        effect: '',
        locations: ["Yellow chest near apartments in shopper's row"],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Dune Sand',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dune_sand.png',
        description: 'A little bottle of joy scooped from a sand dune.',
        effect: '',
        locations: ['Ultra BBQ Cross Walk Quiz', 'Springdale Scratch-Off'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Vintage Parasol',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/vintage_parasol.png',
        description:
            'A sunshade crafted from reeds. Often used in summer festivals.',
        effect: '',
        locations: [
            'Springdale Scratch-Off',
            'Blasters T (Tomb of King Clupharaon 2)'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Terracotta Figure',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/terracotta_figure.png',
        description: 'An ancient artifact recently uncovered on Mt. Wildwood.',
        effect: '',
        locations: [
            'Blasters T (Tomb of King Clupharaon 3)',
            "Quest - We're Super Comedy Heroes!"
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Red Hibiscus',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_hibiscus.png',
        description: 'This bright-red flower makes the world a lot less drab.',
        effect: '',
        locations: ['Blasters T (Tomb of King Clupharaon 1)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Swirly Soul',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/swirly_soul.png',
        description:
            'The disembodied soul of somebody who was very pure-of-heart. Shiny.',
        effect: '',
        locations: ['Jungle Hunter', 'Blasters T (Temple of Clusis 3)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Keystone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/keystone.png',
        description:
            "A once integral part of a castle's wall. Shines in its new role.",
        effect: '',
        locations: ['BBQ Southmond (Wanted Points)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Comfy Closet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/comfy_closet.png',
        description:
            'Finely crafted by a master of the furniture art. For indoor types.\u3000',
        effect: '',
        locations: [null],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Perilous Pearl',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/perilous_pearl.png',
        description:
            'Perilously pretty, this pearl releases the beast in its beholder.',
        effect: '',
        locations: ['Ambrosia Pavillion - rare drop after beating Brutle'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Old Earthenware',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/old_earthenware.png',
        description:
            'Over 5000 years old, it instills all the savagery of ancient times.',
        effect: '',
        locations: ['Triangle Lottery', 'Blasters T (Cluvian Keyhole 2)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '3500',
            buy: '0'
        }
    },
    {
        name: 'Ball of Badness',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ball_of_badness.png',
        description:
            'Makes the bad worse, but heroes who overcome this are the best.',
        effect: '',
        locations: [
            'Ambrosia Pavillion (Tempura Suk. Invite)',
            'Quest - The Rookie Hero! Unbearaboy!'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Scented Bath Oil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/scented_bath_oil.png',
        description:
            'Its fresh floral fragrance makes for the best bath time experience.',
        effect: '',
        locations: ['Wild Hunters (Dukesville)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Bad News',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bad_news.png',
        description: 'Anger-inducing news about a delayed game release. Grrr!',
        effect: '',
        locations: [
            'Zombie/Endless Night',
            'Blasters T (Tomb of King Clupharaon 4)'
        ],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'Dino DNA',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dino_dna.png',
        description:
            'A dinosaur blood-sucking mosquito preserved in alluring amber.',
        effect: '',
        locations: ['Ambrosia Pavillion (Sushi Sukiyaki Invite)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '8000',
            buy: '0'
        }
    },
    {
        name: 'MVP Award',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mvp_award.png',
        description: 'Trophy awarded to the most valuable Yo-kai of the year.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '5000',
            buy: '0'
        }
    },
    {
        name: 'Essence of Evil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/essence_of_evil.png',
        description:
            'Produces terrifying results when combined with certain Yo-kai.',
        effect: '',
        locations: ['Zombie/Endless Night'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '4000',
            buy: '0'
        }
    },
    {
        name: 'Starry Spangles',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/starry_spangles.png',
        description: 'A flour packed with substances unique to BBQ.',
        effect: '',
        locations: ['Scrapyard Trash Trade', 'BBQ Southmond (Wanted Points)'],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '4000',
            buy: '0'
        }
    },
    {
        name: 'Red Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_coin.png',
        description: 'A bold coin. Be sure to use it in the Crank-a-Kai!',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Yellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yellow_coin.png',
        description: 'A mysterious coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Orange Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/orange_coin.png',
        description: 'A hefty coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Pink Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pink_coin.png',
        description: 'A lovely coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Green Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_coin.png',
        description: 'A warm coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/blue_coin.png',
        description:
            'An unpleasant coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Purple Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/purple_coin.png',
        description: 'An eerie coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Light-Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light-blue_coin.png',
        description: 'A slippery coin. Be sure to use it in the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'One-Star Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/one-star_coin.png',
        description: 'A special-ish one-star coin for the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Five-Star Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_coin.png',
        description: 'A special five-star coin for the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Special Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin.png',
        description: 'A special coin for the Crank-a-Kai.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Yo Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/yo_mystery_coin.png',
        description:
            'A special Crank-a-Kai coin with "Yo" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Kai Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/kai_mystery_coin.png',
        description: 'A special Crank-a-Kai coin with "Kai" engraved on it.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Soul Mystery Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/soul_mystery_coin.png',
        description:
            'A special Crank-a-Kai coin with "Soul" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Sushi Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sushi_coin.png',
        description:
            'A special Crank-a-Kai coin with "Sushi" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Tempura Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tempura_coin.png',
        description:
            'A special Crank-a-Kai coin with "Tempura" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Whirlwind Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/whirlwind_coin.png',
        description:
            'A special Crank-a-Kai coin with a whirlwind motif engraved on it.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Wanderer Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/wanderer_coin.png',
        description:
            "A special Crank-a-Kai coin that's roamed around, around, around.",
        effect: '',
        locations: ['QR Code'],
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
        name: 'Rusted Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rusted_coin.png',
        description:
            "A special Crank-a-Kai coin that's old and worn, but still special.",
        effect: '',
        locations: ['QR Code'],
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
        name: 'Flower Excite. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/flower_excite._coin.png',
        description:
            'A special Crank-a-Kai coin with "Flower" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Bird Excite. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bird_excite._coin.png',
        description:
            'A special Crank-a-Kai coin with "Bird" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Wind Excite. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/wind_excite._coin.png',
        description:
            'A special Crank-a-Kai coin with "Wind" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Moon Excite. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/moon_excite._coin.png',
        description:
            'A special Crank-a-Kai coin with "Moon" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Heaven Excit. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/heaven_excit._coin.png',
        description:
            'A special Crank-a-Kai coin with "Heaven" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Mellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mellow_coin.png',
        description:
            'A special Crank-a-Kai coin that is surprisingly soothing in the hand.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Brave Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/brave_dream_coin.png',
        description:
            'A special Crank-a-Kai coin of inspiring courage and valor.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Light Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/light_dream_coin.png',
        description:
            'A special Crank-a-Kai coin that twinkle twinkles like a little star.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Platin. Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platin._dream_coin.png',
        description: 'A special Crank-a-Kai coin that is made of platinum.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Fortun. Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fortun._dream_coin.png',
        description: 'A special Crank-a-Kai coin that is oh-so-bourgeois.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Princess Dre. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/princess_dre._coin.png',
        description: 'A special Crank-a-Kai coin with a hint of loud princess.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Wisdom Dre. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/wisdom_dre._coin.png',
        description: 'A special Crank-a-Kai coin with an aura of great wisdom.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Pride Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pride_dream_coin.png',
        description:
            'A special Crank-a-Kai coin with a touch of overweening pride.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Chivalry Dre. Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/chivalry_dre._coin.png',
        description:
            'A special Crank-a-Kai coin with an aura of chivalric valor.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'G1 Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/g1_dream_coin.png',
        description:
            'A special Crank-a-Kai coin that combines courage and platinum.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'G2 Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/g2_dream_coin.png',
        description:
            'A special Crank-a-Kai coin combining star and bourgeois properties.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'G3 Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/g3_dream_coin.png',
        description:
            'A special Crank-a-Kai coin with a hint of princessly wisdom.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'G4 Dream Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/g4_dream_coin.png',
        description:
            'A special Crank-a-Kai coin with a hint of pride and chivalry.',
        effect: '',
        locations: ['QR Code'],
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
        name: '2nd Helping Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/2nd_helping_coin.png',
        description:
            "A special Crank-a-Kai coin for when you haven't had enough.",
        effect: '',
        locations: ['QR Code'],
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
        name: 'Belly Buster Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/belly_buster_coin.png',
        description:
            'A special Crank-a-Kai coin that makes you feel really, really full.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'L Souvenir Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/l_souvenir_coin.png',
        description:
            'A special souvenir Crank-a-Kai coin with "L" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'F Souvenir Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/f_souvenir_coin.png',
        description:
            'A special souvenir Crank-a-Kai coin with "F" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'S Souvenir Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/s_souvenir_coin.png',
        description:
            'A special souvenir Crank-a-Kai coin with "S" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'K Souvenir Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/k_souvenir_coin.png',
        description:
            'A special souvenir Crank-a-Kai coin with "K" engraved on the back.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Joyful Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/joyful_coin.png',
        description: 'A special Crank-a-Kai coin that is joyfully swirly.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Excellent Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/excellent_coin.png',
        description:
            'A special Crank-a-Kai coin that makes excellent things happen.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Beaming Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/beaming_coin.png',
        description: 'A special Crank-a-Kai coin that shines like a sunny day.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Iron Pot Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/iron_pot_coin.png',
        description:
            'A special Crank-a-Kai coin that echoes with the sound of cooking.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Fancy That! Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fancy_that!_coin.png',
        description:
            'A special Crank-a-Kai coin that makes the pulse race for some reason.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Black Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_coin.png',
        description:
            "A special Crank-a-Kai coin that is black as a raven's wing.",
        effect: '',
        locations: ['QR Code'],
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
        name: 'Jet Black Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/jet_black_coin.png',
        description:
            'A special Crank-a-Kai coin with an otherworldly blackness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Demonic Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/demonic_coin.png',
        description:
            'A special Crank-a-Kai coin with a forbiddingly powerful aura.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Underworld Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/underworld_coin.png',
        description:
            'A special Crank-a-Kai coin engraved with swirls of infernal flame.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Sealed Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sealed_coin.png',
        description:
            'A special Crank-a-Kai coin emanating a vague, indeterminate power.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Emblem Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/emblem_coin.png',
        description: 'A special Crank-a-Kai coin which sparkles mysteriously.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Treasure Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/treasure_coin.png',
        description:
            'A special Crank-a-Kai coin with an aura of bottomless depth.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Legend Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_coin.png',
        description:
            'A special Crank-a-Kai coin that gives a sense of an imminent legend.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Feast Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/feast_coin.png',
        description: 'A special Crank-a-Kai Coin that offers a real treat.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Red Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_red_coin.png',
        description: 'A Crank-a-Kai Red Coin with added boldness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Yellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_yellow_coin.png',
        description: 'A Crank-a-Kai Yellow Coin with added mystery.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Orange Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_orange_coin.png',
        description: 'A Crank-a-Kai Orange Coin with added heft.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Pink Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_pink_coin.png',
        description: 'A Crank-a-Kai Pink Coin with added loveliness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Green Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_green_coin.png',
        description: 'A Crank-a-Kai Green Coin with added warmth.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_blue_coin.png',
        description: 'A Crank-a-Kai Blue Coin with added unpleasantness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Super Purple Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/super_purple_coin.png',
        description: 'A Crank-a-Kai Purple Coin with added eeriness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'S. Light-Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/s._light-blue_coin.png',
        description: 'A Crank-a-Kai Light Blue Coin with added slipperiness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Red Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_red_coin.png',
        description: 'A Crank-a-Kai Red Coin of the ultimate boldness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Yellow Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_yellow_coin.png',
        description: 'A Crank-a-Kai Yellow Coin of the ultimate mystery.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Orange Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_orange_coin.png',
        description: 'A Crank-a-Kai Orange Coin of the ultimate heft.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Pink Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_pink_coin.png',
        description: 'A Crank-a-Kai Pink Coin of the ultimate loveliness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Green Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_green_coin.png',
        description: 'A Crank-a-Kai Green Coin of the ultimate warmth.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_blue_coin.png',
        description: 'A Crank-a-Kai Blue Coin of the ultimate unpleasantness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Ultra Purple Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ultra_purple_coin.png',
        description: 'A Crank-a-Kai Purple Coin of the ultimate eeriness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'U. Light-Blue Coin',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/u._light-blue_coin.png',
        description:
            'A Crank-a-Kai Light Blue Coin of the ultimate slipperiness.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'One-Star C. Frag.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/one-star_c._frag..png',
        description: 'Collect these and exchange them for One-Star Coins.',
        effect: '',
        locations: [null],
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
        name: 'Five-Star C. Frag.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/five-star_c._frag..png',
        description: 'Collect these and exchange them for Five-Star Coins.',
        effect: '',
        locations: [null],
        statsInfo: {
            str: '0',
            spr: '0',
            def: '0',
            spd: '0'
        },
        priceInfo: {
            sell: '50',
            buy: '0'
        }
    },
    {
        name: 'Special Coin Frag.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/special_coin_frag..png',
        description: 'Collect these and exchange them for Special Coins.',
        effect: '',
        locations: [null],
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
        name: 'Dancing Star',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dancing_star.png',
        description:
            'A sparkling star. Rumor has it someone is gathering these.',
        effect: '',
        locations: ["The Yo-kai Circus's One Last Hurrah"],
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
        name: 'Lottery Ticket',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lottery_ticket.png',
        description: 'Purchased from the Candy Stop. Will you win big?',
        effect: '',
        locations: [null],
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
        name: 'Music Card',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/music_card.png',
        description: 'Change your mood. Trade this for tunes and listen along.',
        effect: '',
        locations: ['Perform! Dream Floor - Gold'],
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
        name: 'Ghastly Fragment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ghastly_fragment.png',
        description:
            'Wisps of soul that have coalesced. Can potentially form any Aura.',
        effect: '',
        locations: ['QR Code'],
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
        name: 'Gate Globe',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gate_globe.png',
        description: 'A curiously glowing globe earned by conquering a gate.',
        effect: '',
        locations: [null],
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
        name: 'Oddball Toadstool',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/oddball_toadstool.png',
        description: 'A fancy fungi that is a firm favorite with fans.',
        effect: '',
        locations: [null],
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
        name: 'Pop Star Snapshot',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pop_star_snapshot.png',
        description:
            'Dropped by a young man somewhere in Sparkopolis. Find and return all 48!',
        effect: '',
        locations: [null],
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
        name: 'Trash',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/trash.png',
        description:
            "Apparently, there's a Yo-kai who actually wants this trash.",
        effect: '',
        locations: [null],
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
        name: 'Fungi Fest Ticket',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fungi_fest_ticket.png',
        description: 'Received from Madam Mushroom. Fans will be so jealous!',
        effect: '',
        locations: [null],
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
        name: 'Showdown Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/showdown_pass.png',
        description:
            'A pass to fight The Last Nyanmurai on a Dukesville rooftop.',
        effect: '',
        locations: [null],
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
        name: 'Platinum Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/platinum_pass.png',
        description: 'A pass to fight Platinos on a rooftop in Southmond.',
        effect: '',
        locations: [null],
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
        name: 'Radiant Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/radiant_pass.png',
        description:
            "A pass to fight Koma Star near the Hopper's Gorge waterfall.",
        effect: '',
        locations: [null],
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
        name: 'Gilded Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gilded_pass.png',
        description: 'A pass to fight Flash T. Cash on a Northbeech rooftop.',
        effect: '',
        locations: [null],
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
        name: 'Gabby Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gabby_pass.png',
        description:
            'A pass to fight Gabby on the rooftop of the Southmond Hospital.',
        effect: '',
        locations: [null],
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
        name: 'Teducation Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/teducation_pass.png',
        description:
            'A pass to fight Teducator beyond the Meadowbrooke Farm fence.',
        effect: '',
        locations: [null],
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
        name: 'Big City Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/big_city_pass.png',
        description:
            'A pass to fight City Licker on a New Yo-Kai City rooftop.',
        effect: '',
        locations: [null],
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
        name: 'Sophisticated Pass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sophisticated_pass.png',
        description: 'A pass to fight Gentlemutt at the East Pine pool.',
        effect: '',
        locations: [null],
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
        name: 'Sushi Tempu. Invite',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sushi_tempu._invite.png',
        description:
            'An invitation to a course of sushi and tempura at the Ambrosia Pavilion.',
        effect: '',
        locations: [null],
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
        name: 'Sushi Sukiya. Invite',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sushi_sukiya._invite.png',
        description:
            'An invitation to a course of sushi and sukiyaki at the Ambrosia Pavilion.',
        effect: '',
        locations: [null],
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
        name: 'Tempura Suk. Invite',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tempura_suk._invite.png',
        description:
            'An invitation to a course of tempura and sukiyaki at the Ambrosia Pavilion.',
        effect: '',
        locations: [null],
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
        name: 'Red Box',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/red_box.png',
        description:
            'A box given to strangers with a warning never to open it.',
        effect: "Who knows what's inside...?-",
        locations: [null],
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
        name: 'Circus Ticket',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/circus_ticket.png',
        description: 'Received from a very grateful circus master.',
        effect: '',
        locations: [null],
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
        name: 'Green Mango',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/green_mango.png',
        description:
            'Picked before fully ripe, its tang is perfect for pepping up a salad.',
        effect: '',
        locations: ['A Cry for Help and a Family in Need!'],
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
        name: 'Sturdy Log',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sturdy_log.png',
        description:
            'Stout, unyielding and yet buoyant. The perfect base for a raft!',
        effect: '',
        locations: [null],
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
        name: 'Firm Branch',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/firm_branch.png',
        description: 'Long and slender. A marvelous mast for a raft!',
        effect: '',
        locations: [null],
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
        name: 'Rough Splinter',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rough_splinter.png',
        description:
            'Flattening towards the end, it is ideally-shaped for an oar!',
        effect: '',
        locations: [null],
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
        name: 'Det. Ag. Poster',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/det._ag._poster.png',
        description: 'A poster mainly taken up by a huge picture of Usapyon.',
        effect: '',
        locations: [null],
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
        name: 'Hoary Tomb Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hoary_tomb_stone.png',
        description: 'Emanates dark power. Use to access the Masked Labyrinth.',
        effect: '',
        locations: [null],
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
        name: 'Sovereign Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sovereign_stone.png',
        description:
            "A mysterious orange stone. Lets you access King Deadward's Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Pandora Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pandora_stone.png',
        description:
            "Emanates a sense of the forbidden. Lets you access Pandora's Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Funny Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/funny_stone.png',
        description:
            "Emanates pressure. Lets you access the Comic Genieus' Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Shelter Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shelter_stone.png',
        description:
            "Makes you love cats. Lets you access Bastnetnyan's Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Komanubis Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/komanubis_stone.png',
        description:
            "Is that a dog barking? Lets you access Komanubis' Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Prophecy Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/prophecy_stone.png',
        description:
            "See into the future with this. Lets you access The Boracle's Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'Rampage Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rampage_stone.png',
        description:
            "Emanates destructive power. Lets you access Rampajah's Labyrinth.",
        effect: '',
        locations: [null],
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
        name: 'S Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/s_stone.png',
        description:
            'Beautifully formed of fragments. Lets you access the S Rank Labyrinth.',
        effect: '',
        locations: [null],
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
        name: 'Iron Ogre Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/iron_ogre_stone.png',
        description:
            'Cold and hard as steel. Lets you access the Demonic Labyrinth.',
        effect: '',
        locations: ["A Girl's Gotta Have Dreams"],
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
        name: 'Hinixstone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hinixstone.png',
        description:
            'Shines eternally. Use to access the Sky Garden -The Hinix.',
        effect: '',
        locations: ['Oh My Swirls! A Busted Watch!'],
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
        name: 'Meopetra',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/meopetra.png',
        description:
            'Exudes a sweet fragrance. Use to access the Sky Garden -Meopatra.',
        effect: '',
        locations: [null],
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
        name: 'Silly Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/silly_stone.png',
        description:
            'Has an air of antiquity. Use to access the Sky Garden -Fitwit.',
        effect: '',
        locations: ["We're Super Comedy Heroes!"],
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
        name: 'Gilded Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/gilded_stone.png',
        description:
            'Glows with a golden light. Use to access the Sky Garden -El Dorago.',
        effect: '',
        locations: ['The Three Yo-kai Watches'],
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
        name: 'Sanguine Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sanguine_stone.png',
        description:
            'An evil stone soaked in blood. Use to access the Labyrinth of Valor.',
        effect: '',
        locations: ["A Girl's Gotta Have Dreams"],
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
        name: 'Underworld Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/underworld_stone.png',
        description:
            'Brimming with infernal flame. Lets you access the Labyrinth of Perdition.',
        effect: '',
        locations: [null],
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
        name: 'Legendary Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legendary_stone.png',
        description:
            'Bathed in a rainbow of light. Lets you access the Labyrinth of Legend.',
        effect: '',
        locations: [null],
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
        name: 'Hidden Gem Stone',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hidden_gem_stone.png',
        description:
            'Pulses with mysterious power. Lets you access the Labyrinth of Treasures.',
        effect: '',
        locations: [null],
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
        name: '\u221e S Stone Frag. 1',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_s_stone_frag._1.png',
        description:
            'Intensely beautiful fragment. Find its partner to complete the Stone.',
        effect: '',
        locations: ["The Yo-kai Council's Secret Order"],
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
        name: '\u221e S Stone Frag. 2',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_s_stone_frag._2.png',
        description:
            'Intensely beautiful fragment. It could be completed with the other fragment.',
        effect: '',
        locations: [null],
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
        name: '\u221e Hinixstone Fra. 1',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_hinixstone_fra._1.png',
        description:
            'A flaming fragment. Find its partner to complete the Stone.',
        effect: '',
        locations: [null],
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
        name: '\u221e Hinixstone Fra. 2',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_hinixstone_fra._2.png',
        description: 'A flaming fragment. Complete it with the other fragment.',
        effect: '',
        locations: [null],
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
        name: '\u221e Meopetra Fra. 1',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_meopetra_fra._1.png',
        description:
            'A kaleidoscopic fragment. Find its partner to complete the Stone.',
        effect: '',
        locations: [null],
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
        name: '\u221e Meopetra Fra. 2',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_meopetra_fra._2.png',
        description:
            'A kaleidoscopic fragment. It could be completed with the other fragment.',
        effect: '',
        locations: [null],
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
        name: '\u221e Silly Stone Fra. 1',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_silly_stone_fra._1.png',
        description:
            'A fragment full of meaning. Find its partner to complete the Stone.',
        effect: '',
        locations: [null],
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
        name: '\u221e Silly Stone Fra. 2',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_silly_stone_fra._2.png',
        description:
            'A fragment full of meaning. It could be completed with the other fragment.',
        effect: '',
        locations: [null],
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
        name: '\u221e Gild. Stone Fr. 1',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_gild._stone_fr._1.png',
        description:
            'A fragment full of majesty. Find its partner to complete the Stone.',
        effect: '',
        locations: [null],
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
        name: '\u221e Gild. Stone Fr. 2',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/\u221e_gild._stone_fr._2.png',
        description:
            'A fragment full of majesty. It could be completed with the other fragment.',
        effect: '',
        locations: [null],
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
        name: 'Righteous Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/righteous_tag.png',
        description:
            'Lets you undertake the pilgrimage to Righteous Zazel on Mt Cluvimpus.',
        effect: '',
        locations: [null],
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
        name: 'Innovative Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/innovative_tag.png',
        description:
            'Lets you undertake the pilgrimage to Hinozall Awoken on Mt Cluvimpus.',
        effect: '',
        locations: [null],
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
        name: 'Ancient Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ancient_tag.png',
        description:
            'Lets you undertake the pilgrimage to Enma the Ancient on Mt Cluvimpus.',
        effect: '',
        locations: [null],
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
        name: 'Awoken Tag',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/awoken_tag.png',
        description:
            'Lets you make the pilgrimage to Lord Enma Awoken on Mt Cluvimpus.',
        effect: '',
        locations: [null],
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
    }
];

export default items;
