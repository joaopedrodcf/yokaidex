//YW2 Baffleboards
const baffleboards = [
	{
		location: "Uptown Springdale: Outside Everymart (Story Mode)",
		clue1: "Wears traditional clothing",
		clue2: "Heartful Tribe",
		clue3: "Makes Inspirited people hungry",
		solution: "Hungramps",
		effect: "30% discount at Everymart Uptown."
	},
	{
		location: "Uptown Springdale: Outside Jungle Hunter",
		clue1: "Has a flaming mane",
		clue2: "Likes meat",
		clue3: "A fiery tough guy",
		solution: "Blazion",
		effect: "Allows certain bugs/fish to be traded in for 3x the amount of points."
	},
	{
		location: "Uptown Springdale: Outside Community Center (Story Mode)",
		clue1: "Three-paneled mirror",
		clue2: "Transports people through time",
		clue3: "Reveal!",
		solution: "Miradox",
		effect: "Warp to Old Springdale."
	},
	{
		location: "Mount Wildwood: Abandoned Tunnel East",
		clue1: "Emissary from the future",
		clue2: "Resembles Jibanyan",
		clue3: "Says he'll 'be back'",
		solution: "Robonyan",
		effect: "Allows access to the waterfall area."
	},
	{
		location: "Mount Wildwood: Abandoned Tunnel West",
		clue1: "Dragon Yo-kai",
		clue2: "Indecisive",
		clue3: "His favorite phrase is 'Hmmm...'",
		solution: "Draaagin",
		effect: "Allows access to abandoned tunnel east after a few in-game days."
	},
	{
		location: "Mount Wildwood: Summit",
		clue1: "White tuxedo",
		clue2: "Heartful Tribe",
		clue3: "My darling sweet pea",
		solution: "Ray O'Light",
		effect: "Changes the weather to sunny."
	},
	{
		location: "Mount Wildwood: Summit",
		clue1: "Drizzly drizzle...",
		clue2: "Dampy damp...",
		clue3: "Drizzly, drizzly drizzle...",
		solution: "Drizzelda",
		effect: "Changes the weather to rainy."
	},
	{
		location: "Breezy Hills: East of Eddie's house",
		clue1: "Holds bells in his right hand",
		clue2: "A classic Yo-kai",
		clue3: "Happy happy!",
		solution: "High Gnomey",
		effect: "Increases your daily Crank-a-kai attempts by one."
	},
	{
		location: "Blossom Heights: Outside the bath house",
		clue1: "Neat-freak shogun",
		clue2: "Loves his antibacterial spray",
		clue3: "Clean, clean!",
		solution: "Washogun",
		effect: "Sproink's Quest Activator."
	},
	{
		location: "Shopper's Row: East of Everymart (In Night Time)",
		clue1: "First-rate food stall",
		clue2: "Dashi stock",
		clue3: "Well den",
		solution: "Master Oden",
		effect: "Oden can now be purchased from Shopper's Row Everymart."
	},
	{
		location: "Downtown Springdale: East of the Springdale Business Tower",
		clue1: "Holds a small staff in one hand.",
		clue2: "Loves bread",
		clue3: "Conjures apparitions",
		solution: "Illoo",
		effect: "Allows access to 4F and 13F of the Springdale Business Tower"
	},
	{
		location: "Downtown Springdale: Around the Construction Site",
		clue1: "Proud of soft skin",
		clue2: "Puffs up when angry",
		clue3: "Face pops out of his body",
		solution: "Mochismo",
		effect: "After a few days in real time, the Sports Club will be built and accessible."
	},
	{
		location: "Downtown Springdale: Sports Club 2F",
		clue1: "Yo-kai workout leader",
		clue2: "Peak physical condition",
		clue3: "Feel the burn!",
		solution: "Sgt. Burly",
		effect: "Increases GP gain rate."
	},
	{
		location: "Excellent Tower: Bottom left of the entrance",
		clue1: "Eats memories",
		clue2: "Mysterious Tribe",
		clue3: "Shaped like a hat",
		solution: "Wazzat",
		effect: "Allows Yo-kai's nicknames to be changed."
	},
	{
		location: "San Fantastico: Seaside Cave (Story Mode)",
		clue1: "Healthy, thanks to seaweed",
		clue2: "One of a trio",
		clue3: "Views Steppa as a rival",
		solution: "Wiglin",
		effect: "Allows the water level to be changed."
	},
	{
		location: "San Fantastico: Seaside Cave (Story Mode)",
		clue1: "Healthy, groovy seaweed",
		clue2: "One of a trio",
		clue3: "Views Wiglin as a rival",
		solution: "Steppa",
		effect: "Allows the water level to be changed."
	},
	{
		location: "San Fantastico: Seaside Cave (Story Mode)",
		clue1: "Loved by Wiglin",
		clue2: "Loved by Steppa",
		clue3: "Not interested in either",
		solution: "Rhyth",
		effect: "Allows the water level to be changed"
	},
	{
		location: "San Fantastico: Parking lot outside station",
		clue1: "Likes taking detours",
		clue2: "Worries about scaly sharkskin",
		clue3: "Vegetarian",
		solution: "Chummer",
		effect: "Little Haven Station can now be accessed *."
	},
	{
		location: "San Fantastico: Briny Grotto (Entrance from beach underneath abandoned house)",
		clue1: "Green clothes",
		clue2: "Heartful Tribe",
		clue3: "Hoards things in bags",
		solution: "Ol' Fortune",
		effect: "Crank-a-kai Coin Fragments can now be exchanged."
	},
	{
		location: "Old Springdale: Outside the station",
		clue1: "Travels atop a cloud",
		clue2: "Wields a vacuum cleaner",
		clue3: "Sucks up memories",
		solution: "Vacuumory",
		effect: "Allows Dame Dedtime (Dame Demona) to be re-battled."
	},
	{
		location: "Yo-kai World: Lord's Gate",
		clue1: "Reflective",
		clue2: "Power of darkness",
		clue3: "Summons spirits from his mirror",
		solution: "Mircle",
		effect: "Allows McKraken to be battled."
	},
	{
		location: "Old Springdale: The Burbs (Next to the school)",
		clue1: "Won",
		clue2: "...der...",
		clue3: "...nyan!",
		solution: "Wondernyan",
		effect: "Once a day he will give you a random Crank-a-kai coin."
	},
	{
		location: "Cherry Hill station",
		clue1: "Traditional Japanese clothes",
		clue2: "Likes big flowers",
		clue3: "Cherry blossoms",
		solution: "Elder Bloom",
		effect: "Makes cherry trees bloom."
	}
]
