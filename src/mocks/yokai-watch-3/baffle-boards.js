const baffleBoard = [
    {
        location: 'Northbeech Pizzeria (Story Mode)',
        clues: ['In the Shady tribe', 'Always angry', 'Looks like bacon'],
        solution: 'Salty Bacon',
        effect: ' Allows you to buy Crispy Bacon Pizza.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/salty_bacon.png'
    },
    {
        location: "Hazeltine Mansion Bathroom - Hailey's Side (Story Mode)",
        clues: ['Charming Tribe', 'Always cold', 'Try asking Zest-a-Minute'],
        solution: 'Pupsicle',
        effect: ' Turns the bath cold.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pupsicle.png'
    },
    {
        location: "Hazeltine Mansion Bathroom - Nate's Side (Story Mode)",
        clues: [
            'Serious fighter',
            'Loves REAL fights',
            'Try asking Shipshape Sailor'
        ],
        solution: 'El Gutso',
        effect: ' Turns the bath hot.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/el_gutso.png'
    },
    {
        location: 'Coconut Residential Area',
        clues: [
            'Lean and mean',
            'Great functionality',
            'Robot from the future'
        ],
        solution: 'Robonyan F',
        effect: ' Once a day he will give you a Chocobar.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonyan_f.png'
    },
    {
        location: 'Miracle Circus',
        clues: [
            'Wears a loincloth',
            'Has a pan for a hat',
            'Battles with a toothpick'
        ],
        solution: 'Pandle',
        effect: ' Will give access to a quest that will give you Glumdango.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/pandle.png'
    },
    {
        location: 'Banter Bakery',
        clues: ['Looks like a tree', 'Shady Tribe', 'Has four arms'],
        solution: 'Retreeter',
        effect:
            'Will increase the amount of limited stock items and decrease the price of all items.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/retreeter.png'
    },
    {
        location: "Shopper's Row - Riverbank",
        clues: [
            'Visits during the holidays',
            'Carries three sacks',
            'Enjoys quizzes'
        ],
        solution: "Ol' Saint Trick",
        effect:
            'Enables you to trade various coin fragments for Crank-a-Kai coins.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__saint_trick.png'
    },
    {
        location: 'East Pines District',
        clues: [
            'Has a chocolate nose',
            'Sells Choco-Bananas',
            'Likes playing RPS'
        ],
        solution: 'Cocobanana',
        effect:
            'Sells Chocobannanas. If beaten in Rock-paper-scissors he will give you a bonus Chocobannana.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/cocobanana.png'
    },
    {
        location: 'Northbeech - Pier Area',
        clues: ['Uses a red umbrella', 'Seems a bit down', '...And wet'],
        solution: 'Drizzelda',
        effect: ' Makes it rain.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/drizzelda.png'
    },
    {
        location: 'Northbeech - Pier Area',
        clues: [
            'Brightens up the day',
            'Has a dazzling smile',
            'My darling sweet pea!'
        ],
        solution: "Ray O'Light",
        effect: ' Makes it sunny.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ray_o_light.png'
    },
    {
        location: 'Southmond Scrap Yard',
        clues: [
            'Heartful Tribe',
            'Carries the...earth?',
            'Loves the environment'
        ],
        solution: 'Greengramps',
        effect:
            'Able to trade trash gotten from the Yo-kai Cleaner in exchange for items.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/greengramps.png'
    },
    {
        location: 'Springdale Sports Club - 3F',
        clues: ['Feel the burn!', 'Pump some iron!', 'Victoryyyyyy!'],
        solution: 'Sgt. Burly',
        effect: ' Increases GP received by 1.2.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sgt._burly.png'
    },
    {
        location: 'Breezy Hills - Everymart',
        clues: [
            'Incredibly stuck-up',
            'Bosses others around',
            'Hurry up already!'
        ],
        solution: 'Snobetty',
        effect:
            'Breezy Hills Everymart will sell Choice tuna, Marbled beef, and golden dolls for more.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/snobetty.png'
    },
    {
        location: 'Blossom Heights - Hot Springs',
        clues: ['Heartful Tribe', 'Runs an inn', 'Incredibly dexterous hair'],
        solution: 'Ghostess',
        effect:
            'Adds one extra crank to the daily Crank-a-Kai turns. She also heals your Yo-kai and gives you milk.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ghostess.png'
    },
    {
        location: 'Sunset Mall B1',
        clues: [
            'Heartful Tribe',
            'Star of the seaweed world',
            'Has hordes of fans'
        ],
        solution: 'Kelpacabana',
        effect: ' Will exchange Dancing stars for Victory poses.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kelpacabana.png'
    },
    {
        location: 'Downtown Springdale Business Tower',
        clues: [
            'Wears a dashing Sand Suit',
            'Has side-parted hair',
            'Incredibly humble'
        ],
        solution: 'Mister Sandmeh',
        effect: ' Will open a door needed in a quest.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mr._sandmeh.png'
    },
    {
        location: 'Sparkopolis',
        clues: ['Magnificent eyebrows', 'Holds a small staff', 'Great teacher'],
        solution: 'Illoo',
        effect: ' Talk to him to travel to the Illusion version Sparkopolis.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/illoo.png'
    },
    {
        location: 'Bada-Bing Tower - Lobby',
        clues: [
            'Governs recollections',
            'Has an odd suction device',
            'Recovers lost memories'
        ],
        solution: 'Vacuumory',
        effect: ' Talk to him to rematch Don Spiracy.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/vacuumory.png'
    },
    {
        location: 'Greenfields Station',
        clues: ['Mysterious Tribe', 'Looks like a hat', 'Eats memories'],
        solution: 'Wazzat',
        effect: ' Allows you to change the names of your Yo-kai.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wazzat.png'
    },
    {
        location: 'Yopple Headquarters - Yo-kai Watch Factory',
        clues: [
            'Inspirits those hard at work',
            'Looks like a tie',
            'I just wanna go home...'
        ],
        solution: 'Tie-red',
        effect: ' Enables you to work a part-time job in quality check.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/tie-red.png'
    },
    {
        location: 'Uptown Springdale -The Catwalk',
        clues: [
            'Heartful Tribe',
            'Rides a mouse car',
            'Likes pressing buttons'
        ],
        solution: 'Push Pup',
        effect: ' Be able to open the manhole nearby him.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/push_pup.png'
    },
    {
        location: 'Downtown Springdale - Rolling Waves Park',
        clues: [
            'Lolls around over here',
            'Lolls around over there',
            'Found a new continent'
        ],
        solution: 'Kittylumbus',
        effect: 'Talk to him to rematch Yo-kaiju.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/kittylumbus.png'
    },
    {
        location: 'Fortune Hospital - 2F',
        clues: [
            'Works at a hospital',
            'Wears nurse clothes',
            'Licks wounds better'
        ],
        solution: 'Nurse Tongus',
        effect: 'Once a day she will give you medicine.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/nurse_tongus.png'
    },
    {
        location: 'Tranquility Apts. - B-301',
        clues: [
            'Mysterious Tribe',
            'Travels through time',
            'Has three mirrors'
        ],
        solution: 'Miradox',
        effect: 'Takes you back to the past in a very limited area.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/miradox.png'
    }
];

export default baffleBoard;
