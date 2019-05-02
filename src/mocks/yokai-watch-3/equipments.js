const equipments = [
    {
        name: 'Worn Bangle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/worn_bangle.png',
        description:
            "It's sort of cheap, but some Yo-kai say it's just right for them!",
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '+8', spr: '0', def: '0', spd: '-5' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Cheap Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheap_bracelet.png',
        description: "It's not the classiest accessory, but it does the job.",
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '+8', spr: '0', def: '-5', spd: '0' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Rocker Wrist',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rocker_wrist.png',
        description:
            "A rocker bracelet with spikes. It'd hurt to be on the receiving end.",
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '+15', spr: '0', def: '0', spd: '-8' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Power Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/power_bracelet.png',
        description:
            'Makes the wearer tough enough to crush apples bare-handed!',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '+15', spr: '0', def: '-8', spd: '0' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Brute Bracer',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/brute_bracer.png',
        description: "Like solving problems with strength? This one's for you.",
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '+22', spr: '0', def: '0', spd: '-12' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Grand Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/grand_bracelet.png',
        description:
            'An elegant, strength-enhancing item that helps with heavy lifting.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '+22', spr: '0', def: '-12', spd: '0' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Sun Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/sun_bracelet.png',
        description:
            'A heavy gold bracelet said to contain the power of the sun.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '-15' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Comet Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/comet_bracelet.png',
        description:
            'Unleashes the destructive force of a comet flying through space.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '+30', spr: '0', def: '-15', spd: '0' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Fiend Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_band.png',
        description:
            "A bracelet bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [null],
        statsInfo: { str: '+40', spr: '0', def: '0', spd: '-25' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Legend Bracelet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_bracelet.png',
        description: 'A fabled fashion accessory that crackles with power.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+40', spr: '0', def: '-25', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Mythical Bangle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mythical_bangle.png',
        description:
            'A bracelet straight out of myth that houses the ultimate in Strength.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+65', spr: '0', def: '0', spd: '-40' },
        priceInfo: { sell: '5000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Rusty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rusty_ring.png',
        description: "A ring that's gotten old and rusty. It still has power.",
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '0', spr: '+8', def: '-5', spd: '0' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Ugly Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ugly_ring.png',
        description: "It's not pretty, but pretty effective.",
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '0', spr: '+8', def: '0', spd: '-5' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Pretty Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/pretty_ring.png',
        description: 'A cute ring of pink gold. Lady Yo-kai like it a lot.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '+15', def: '-8', spd: '0' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Rainbow Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/rainbow_ring.png',
        description:
            'A beautiful ring that sparkles with all the colors of the rainbow.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '+15', def: '0', spd: '-8' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Illusion Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/illusion_ring.png',
        description:
            'Anyone who wears this ring can easily use Yo-kai Techniques.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '+22', def: '-12', spd: '0' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Fairy Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fairy_ring.png',
        description: 'The spirit of a fairy dwells within this ring.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '+22', def: '0', spd: '-12' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Lunar Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lunar_ring.png',
        description:
            'A softly glowing ring said to contain the power of the moon.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '+30', def: '-15', spd: '0' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Ring of Fate',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ring_of_fate.png',
        description: "Imbued with the power to alter one's destiny.",
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '+30', def: '0', spd: '-15' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Fiend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_ring.png',
        description: "A ring bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+40', def: '-25', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Legend Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_ring.png',
        description: 'A mythical fashion accessory with untold power.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+40', def: '0', spd: '-25' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Mythical Ring',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mythical_ring.png',
        description:
            'A ring straight out of myth that houses the ultimate in Spirit.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+65', def: '-40', spd: '0' },
        priceInfo: { sell: '5000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Aged Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aged_charm.png',
        description: 'An old charm whose power has atrophied over the years.',
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '0', spr: '-5', def: '+8', spd: '0' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Old Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/old_charm.png',
        description:
            "It's seen better days, but can still offer a little power.",
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '-5', spr: '0', def: '+8', spd: '0' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Runic Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/runic_charm.png',
        description: 'A charm with a mysterious pattern upon it.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '-8', def: '+15', spd: '0' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Protective Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/protective_charm.png',
        description: 'Offers divine protection to the wearer.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '-8', spr: '0', def: '+15', spd: '0' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Armor Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/armor_charm.png',
        description: 'A charm said to provide impregnable defense.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '-12', def: '+22', spd: '0' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Lucky Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lucky_charm.png',
        description: 'Brings good fortune and offers powerful protection.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '-12', spr: '0', def: '+22', spd: '0' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Galaxy Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/galaxy_charm.png',
        description: 'A powerful charm that sparkles like a nebula.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '-15', def: '+30', spd: '0' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Earth Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/earth_charm.png',
        description:
            'This charm draws its power from the spirit of the earth itself.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '-15', spr: '0', def: '+30', spd: '0' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Fiend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_charm.png',
        description: "A charm bearing a demon's crest. It houses a dark power.",
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '-25', def: '+40', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Legend Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_charm.png',
        description:
            'A famed charm that offers the wearer unmatched protection.',
        effect: '',
        locations: [null],
        statsInfo: { str: '-25', spr: '0', def: '+40', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Mythical Charm',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mythical_charm.png',
        description:
            'A charm straight out of myth that houses the ultimate in Defense.',
        effect: '',
        locations: [null],
        statsInfo: { str: '-40', spr: '0', def: '+65', spd: '0' },
        priceInfo: { sell: '5000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Simple Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/simple_badge.png',
        description:
            'Sometimes simple is best. This badge bumps up your Speed.',
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '-5', spr: '0', def: '0', spd: '+8' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Black Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/black_badge.png',
        description: 'A mysterious dark badge that boosts your Speed.',
        effect: '',
        locations: ["Margarita's"],
        statsInfo: { str: '0', spr: '-5', def: '0', spd: '+8' },
        priceInfo: { sell: '180', buy: '1800' },
        type: 'equipments'
    },
    {
        name: 'Shiny Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/shiny_badge.png',
        description: 'A cool badge that shines bright. Kids love this one!',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '-8', spr: '0', def: '0', spd: '+15' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Cute Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cute_badge.png',
        description:
            "An adorable glittery badge. It's actually functional too!",
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '0', spr: '-8', def: '0', spd: '+15' },
        priceInfo: { sell: '650', buy: '6500' },
        type: 'equipments'
    },
    {
        name: 'Hermes Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/hermes_badge.png',
        description: 'A badge that lets you run like the wind.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '-12', spr: '0', def: '0', spd: '+22' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Aurora Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/aurora_badge.png',
        description: 'A badge that pulsates with scintillating starlight.',
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '-12', def: '0', spd: '+22' },
        priceInfo: { sell: '1400', buy: '14000' },
        type: 'equipments'
    },
    {
        name: 'Meteor Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/meteor_badge.png',
        description:
            'A badge shaped like a shooting star, with power to match.',
        effect: '',
        locations: ['Whatta Find'],
        statsInfo: { str: '-15', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Lightning Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/lightning_badge.png',
        description: "A fast-moving accessory. Blink and you'll miss it!",
        effect: '',
        locations: ['Wild Hunters'],
        statsInfo: { str: '0', spr: '-15', def: '0', spd: '+30' },
        priceInfo: { sell: '3300', buy: '33000' },
        type: 'equipments'
    },
    {
        name: 'Fiend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fiend_badge.png',
        description: "A badge bearing a demon's crest. It houses unholy speed.",
        effect: '',
        locations: [null],
        statsInfo: { str: '-25', spr: '0', def: '0', spd: '+40' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Legend Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/legend_badge.png',
        description:
            'A powerful accessory that gives an incredible boost to Speed.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '-25', def: '0', spd: '+40' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Mythical Badge',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/mythical_badge.png',
        description:
            'A badge straight out of myth that houses the ultimate in Speed.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '-40', def: '0', spd: '+65' },
        priceInfo: { sell: '5000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Fungi Fest Band',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/fungi_fest_band.png',
        description:
            'Only Fungi Fest-goers get given these, so worth a fortune secondhand.',
        effect: 'Causes attacked enemy to release a Mushroom.',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Monkey Circlet',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/monkey_circlet.png',
        description:
            "Halfway through the wearer's evolution, it tightens and reverses the process.",
        effect: 'Prevents Yo-kai evolving.',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '1800', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Cicada Sword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cicada_sword.png',
        description:
            'The sword of the cicada-style ninja. Only for cicada Yo-kai.',
        effect: '',
        locations: ['Run Through The Old Mansion'],
        statsInfo: { str: '+35', spr: '0', def: '0', spd: '+35' },
        priceInfo: { sell: '1800', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Beefy Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/beefy_bell.png',
        description:
            'Use this cat bell if you want to be beefy! For cat Yo-kai only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2200', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Spell Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/spell_bell.png',
        description:
            'Use this cat bell if you want elegance! For cat Yo-kai only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+30', def: '0', spd: '0' },
        priceInfo: { sell: '2200', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Tough Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tough_bell.png',
        description:
            'Use this cat bell if you want to be tough! For cat Yo-kai only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '0' },
        priceInfo: { sell: '2200', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Speed Bell',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/speed_bell.png',
        description:
            'Use this cat bell if you want to be speedy! For cat Yo-kai only.',
        effect: '',
        locations: ['Help Out Some Guy from School!'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '2200', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Bottomless Bottle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bottomless_bottle.png',
        description:
            'A water bottle that never runs dry. For kappa Yo-kai only.',
        effect: 'Increases the power of Water.Reduces Water damage.',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '2200', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Tengu Fan',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/tengu_fan.png',
        description:
            'Tengu draw power from fans like these. For Tengu Yo-kai only.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '+100', def: '0', spd: '+100' },
        priceInfo: { sell: '5000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Cheery Coat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/cheery_coat.png',
        description:
            "This'll make you wanna dance! For Wiglin, Steppa, and Rhyth only.",
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+50' },
        priceInfo: { sell: '1800', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Nail Bat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/nail_bat.png',
        description:
            'A bat with nails sticking out of it. Only for Badude and Bruff.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '+60', spr: '0', def: '-30', spd: '0' },
        priceInfo: { sell: '3000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Drumsticks',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/drumsticks.png',
        description: 'Donchan uses these to thump out big, bold rhythms.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+20', def: '+40', spd: '0' },
        priceInfo: { sell: '2500', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Robovitamin E',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/robovitamin_e.png',
        description: 'A drink that makes robotic Yo-kai run more smoothly.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '0', def: '+20', spd: '+20' },
        priceInfo: { sell: '3500', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Burly's Wristband",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/burly_s_wristband.png',
        description:
            'For Sgt. Burly only. Imbued with his thirst for bigger muscles.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+60', spr: '0', def: '0', spd: '-30' },
        priceInfo: { sell: '3300', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Memory Chime',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/memory_chime.png',
        description: 'This treasured chime reminds Jibanyan of Amy.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+20', spr: '0', def: '0', spd: '+20' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Reversword',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reversword.png',
        description:
            'This sword strengthens the weak. D and E-Rank Yo-kai only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '2700', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Turnabeads',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/turnabeads.png',
        description:
            'A jewel that gives the weak power. D and E-Rank Yo-kai only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+30', def: '0', spd: '+30' },
        priceInfo: { sell: '2700', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Reflector',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/reflector.png',
        description:
            'One of a wimpy trinity of items. D and E-Rank Yo-kai only.',
        effect: '',
        locations: ['Team Up Time! Wonder Edition!'],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '+30' },
        priceInfo: { sell: '2700', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Paradise Ball',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/paradise_ball.png',
        description: 'A gem that can only be used by B-Rank or lower Yo-kai.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '+30' },
        priceInfo: { sell: '10000', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Daedalus' Wings",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/daedalus__wings.png',
        description:
            'Cool, protective iron wings, but only for use by Sighborg Y.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '+50' },
        priceInfo: { sell: '2500', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Patriot's T-Shirt",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/patriot_s_t-shirt.png',
        description:
            "Popular with all patriots, but only for use by 'Merican Yo-kai.",
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '+25', spr: '+25', def: '0', spd: '0' },
        priceInfo: { sell: '2800', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Ancestral Sash',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/ancestral_sash.png',
        description:
            'Woven according to venerable traditions. Only for Classic Yo-kai.',
        effect: '',
        locations: ['Pursuit! Dream Floor - Woods'],
        statsInfo: { str: '0', spr: '0', def: '+20', spd: '+20' },
        priceInfo: { sell: '2800', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Emperor's Seal",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/emperor_s_seal.png',
        description:
            'From an empire far, far away, only Commander Yo-kai can use this.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+25', spr: '+25', def: '0', spd: '0' },
        priceInfo: { sell: '4000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Badge of Honor',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/badge_of_honor.png',
        description:
            'Awarded for a pioneering exploit, only Pioneer Yo-kai can use this.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '+20', spd: '+20' },
        priceInfo: { sell: '4000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Bunny Blaster',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/bunny_blaster.png',
        description:
            "A powerful blaster, effective in space battles, solely for Usapyon's use.",
        effect: '',
        locations: [null],
        statsInfo: { str: '+20', spr: '0', def: '0', spd: '+20' },
        priceInfo: { sell: '2500', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Glamorous Straw',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/glamorous_straw.png',
        description:
            'Too glam by far for beginners, only Zest-a-Minute can use this.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '+40', def: '0', spd: '+20' },
        priceInfo: { sell: '2000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Swirly Pack',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/swirly_pack.png',
        description:
            'Oh my swirls, a wrap crammed with treasure. Komasan Brothers only.',
        effect: '',
        locations: ['Jungle Hunter'],
        statsInfo: { str: '0', spr: '+20', def: '0', spd: '+20' },
        priceInfo: { sell: '3500', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Warlord's Banner",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/warlord_s_banner.png',
        description:
            'Rallied many a routing army in the past, now only Whisper can use it.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+20', def: '0', spd: '+40' },
        priceInfo: { sell: '3000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Dull Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/dull_blade.png',
        description:
            'As dull and boring as blades get. Just as well, only Fuu 2 can use it.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+30', spr: '0', def: '0', spd: '+30' },
        priceInfo: { sell: '2500', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Imperial Chip',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/imperial_chip.png',
        description:
            'This special chip activates Emperor Mode, but only for Usapyon.',
        effect: 'Enables Emperor Mode.',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '3000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Star-spangle Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/star-spangle_blade.png',
        description:
            "A sword full of vim and vigor in the BBQ style. For 'Merican Legend only.",
        effect: '',
        locations: ["Diana Gately & the Keeper's Old Man"],
        statsInfo: { str: '+35', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Stars n Stripes Rod',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/stars_n_stripes_rod.png',
        description:
            "A high-spirited rod in the BBQ style. For 'Merican Legend only.",
        effect: '',
        locations: ['The Calamity that Lurks Below...'],
        statsInfo: { str: '0', spr: '+35', def: '0', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Star-spangl. Shield',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/star-spangl._shield.png',
        description:
            "A peace-preserving shield in the BBQ style. For 'Merican Legend only.",
        effect: '',
        locations: ['He Who Descended into Darkness'],
        statsInfo: { str: '0', spr: '0', def: '+35', spd: '0' },
        priceInfo: { sell: '8000', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Enma Blade',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/enma_blade.png',
        description:
            'Burning with infernal intensity, this blade is an Enma exclusive!',
        effect: "Changes Enma's fighting style.",
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Illustrious Bead',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/illustrious_bead.png',
        description:
            'Lord Enma alone can use this charm, which is infused with infernal power.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '+35', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: "Chairman's Staff",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/chairman_s_staff.png',
        description: 'This powerful staff can only be wielded by Zazel.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '+35', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Enchanted Flute',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/enchanted_flute.png',
        description:
            'Even creation dances to the tune of this flute. Lord Enma Awoken only.',
        effect: '',
        locations: [null],
        statsInfo: { str: '0', spr: '0', def: '+20', spd: '+20' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Maul Attachment',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/maul_attachment.png',
        description:
            'The savagely powerful punch of this arm is only usable by Sighborg Y.',
        effect: '',
        locations: [null],
        statsInfo: { str: '+50', spr: '0', def: '0', spd: '0' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    },
    {
        name: 'Golden Ankh',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/golden_ankh.png',
        description:
            'Symbol of life, this Ankh can only be used by Legendary Mystery Yo-kai.',
        effect: '',
        locations: ['The Three Yo-kai Watches'],
        statsInfo: { str: '0', spr: '0', def: '+30', spd: '+30' },
        priceInfo: { sell: '0', buy: '0' },
        type: 'equipments'
    }
];

export default equipments;
