// YW2 Baffleboards
const baffleboards = [
    {
        index: 0,
        location: 'Uptown Springdale: Outside Everymart (Story Mode)',
        clues: [
            'Wears traditional clothing',
            'Heartful Tribe',
            'Makes Inspirited people hungry',
        ],
        solution: 'Hungramps',
        effect: '30% discount at Everymart Uptown.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/hungramps.png',
    },
    {
        index: 1,
        location: 'Uptown Springdale: Outside Jungle Hunter',
        clues: ['Has a flaming mane', 'Likes meat', 'A fiery tough guy'],
        solution: 'Blazion',
        effect:
            'Allows certain bugs/fish to be traded in for 3x the amount of points.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/blazion.png',
    },
    {
        index: 2,
        location: 'Uptown Springdale: Outside Community Center (Story Mode)',
        clues: [
            'Three-paneled mirror',
            'Transports people through time',
            'Reveal!',
        ],
        solution: 'Miradox',
        effect: 'Warp to Old Springdale.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/miradox.png',
    },
    {
        index: 3,
        location: 'Mount Wildwood: Abandoned Tunnel East',
        clues: [
            'Emissary from the future',
            'Resembles Jibanyan',
            "Says he'll 'be back'",
        ],
        solution: 'Robonyan',
        effect: 'Allows access to the waterfall area.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/robonyan.png',
    },
    {
        index: 4,
        location: 'Mount Wildwood: Abandoned Tunnel West',
        clues: [
            'Dragon Yo-kai',
            'Indecisive',
            "His favorite phrase is 'Hmmm...'",
        ],
        solution: 'Draaagin',
        effect:
            'Allows access to abandoned tunnel east after a few in-game days.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/draaagin.png',
    },
    {
        index: 5,
        location: 'Mount Wildwood: Summit',
        clues: ['White tuxedo', 'Heartful Tribe', 'My darling sweet pea'],
        solution: "Ray O'Light",
        effect: 'Changes the weather to sunny.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ray_o_light.png',
    },
    {
        index: 6,
        location: 'Mount Wildwood: Summit',
        clues: [
            'Drizzly drizzle...',
            'Dampy damp...',
            'Drizzly, drizzly drizzle...',
        ],
        solution: 'Drizzelda',
        effect: 'Changes the weather to rainy.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/drizzelda.png',
    },
    {
        index: 7,
        location: "Breezy Hills: East of Eddie's house",
        clues: [
            'Holds bells in his right hand',
            'A classic Yo-kai',
            'Happy happy!',
        ],
        solution: 'High Gnomey',
        effect: 'Increases your daily Crank-a-kai attempts by one.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/high_gnomey.png',
    },
    {
        index: 8,
        location: 'Blossom Heights: Outside the bath house',
        clues: [
            'Neat-freak shogun',
            'Loves his antibacterial spray',
            'Clean, clean!',
        ],
        solution: 'Washogun',
        effect: "Sproink's Quest Activator.",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/washogun.png',
    },
    {
        index: 9,
        location: "Shopper's Row: East of Everymart (In Night Time)",
        clues: ['First-rate food stall', 'Dashi stock', 'Well den'],
        solution: 'Master Oden',
        effect: "Oden can now be purchased from Shopper's Row Everymart.",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/master_oden.png',
    },
    {
        index: 10,
        location: 'Downtown Springdale: East of the Springdale Business Tower',
        clues: [
            'Holds a small staff in one hand.',
            'Loves bread',
            'Conjures apparitions',
        ],
        solution: 'Illoo',
        effect: 'Allows access to 4F and 13F of the Springdale Business Tower',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/illoo.png',
    },
    {
        index: 11,
        location: 'Downtown Springdale: Around the Construction Site',
        clues: [
            'Proud of soft skin',
            'Puffs up when angry',
            'Face pops out of his body',
        ],
        solution: 'Mochismo',
        effect:
            'After a few days in real time, the Sports Club will be built and accessible.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mochismo.png',
    },
    {
        index: 12,
        location: 'Downtown Springdale: Sports Club 2F',
        clues: [
            'Yo-kai workout leader',
            'Peak physical condition',
            'Feel the burn!',
        ],
        solution: 'Sgt. Burly',
        effect: 'Increases GP gain rate.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/sgt._burly.png',
    },
    {
        index: 13,
        location: 'Excellent Tower: Bottom left of the entrance',
        clues: ['Eats memories', 'Mysterious Tribe', 'Shaped like a hat'],
        solution: 'Wazzat',
        effect: "Allows Yo-kai's nicknames to be changed.",
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wazzat.png',
    },
    {
        index: 14,
        location: 'San Fantastico: Seaside Cave (Story Mode)',
        clues: [
            'Healthy, thanks to seaweed',
            'One of a trio',
            'Views Steppa as a rival',
        ],
        solution: 'Wiglin',
        effect: 'Allows the water level to be changed.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wiglin.png',
    },
    {
        index: 15,
        location: 'San Fantastico: Seaside Cave (Story Mode)',
        clues: [
            'Healthy, groovy seaweed',
            'One of a trio',
            'Views Wiglin as a rival',
        ],
        solution: 'Steppa',
        effect: 'Allows the water level to be changed.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/steppa.png',
    },
    {
        index: 16,
        location: 'San Fantastico: Seaside Cave (Story Mode)',
        clues: [
            'Loved by Wiglin',
            'Loved by Steppa',
            'Not interested in either',
        ],
        solution: 'Rhyth',
        effect: 'Allows the water level to be changed',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/rhyth.png',
    },
    {
        index: 17,
        location: 'San Fantastico: Parking lot outside station',
        clues: [
            'Likes taking detours',
            'Worries about scaly sharkskin',
            'Vegetarian',
        ],
        solution: 'Chummer',
        effect: 'Little Haven Station can now be accessed *.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/chummer.png',
    },
    {
        index: 18,
        location:
            'San Fantastico: Briny Grotto (Entrance from beach underneath abandoned house)',
        clues: ['Green clothes', 'Heartful Tribe', 'Hoards things in bags'],
        solution: "Ol' Fortune",
        effect: 'Crank-a-kai Coin Fragments can now be exchanged.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/ol__fortune.png',
    },
    {
        index: 19,
        location: 'Old Springdale: Outside the station',
        clues: [
            'Travels atop a cloud',
            'Wields a vacuum cleaner',
            'Sucks up memories',
        ],
        solution: 'Vacuumory',
        effect: 'Allows Dame Dedtime (Dame Demona) to be re-battled.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/vacuumory.png',
    },
    {
        index: 20,
        location: "Yo-kai World: Lord's Gate",
        clues: [
            'Reflective',
            'Power of darkness',
            'Summons spirits from his mirror',
        ],
        solution: 'Mircle',
        effect: 'Allows McKraken to be battled.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/mircle.png',
    },
    {
        index: 21,
        location: 'Old Springdale: The Burbs (Next to the school)',
        clues: ['Won', '...der...', '...nyan!'],
        solution: 'Wondernyan',
        effect: 'Once a day he will give you a random Crank-a-kai coin.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/wondernyan.png',
    },
    {
        index: 22,
        location: 'Cherry Hill station',
        clues: [
            'Traditional Japanese clothes',
            'Likes big flowers',
            'Cherry blossoms',
        ],
        solution: 'Elder Bloom',
        effect: 'Makes cherry trees bloom.',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1549117449/Yokai/yokais/elder_bloom.png',
    },
];

export default baffleboards;
