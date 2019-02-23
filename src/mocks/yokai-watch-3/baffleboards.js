//YW3 Baffleboards
const baffleboards = [
	{
		location: "Northbeech Pizzeria (Story Mode)",
		clue1: "In the Shady tribe",
		clue2: "Always angry",
		clue3: "Looks like bacon",
		solution: "Salty Bacon",
		effect: "Allows you to buy Crispy Bacon Pizza."
	},
	{
		location: "Hazeltine Mansion Bathroom - Hailey's Side (Story Mode)",
		clue1: "Charming Tribe",
		clue2: "Always cold",
		clue3: "Try asking Zest-a-Minute",
		solution: "Pupsicle",
		effect: "Turns the bath cold."
	},
	{
		location: "Hazeltine Mansion Bathroom - Nate's Side (Story Mode)",
		clue1: "Serious fighter",
		clue2: "Loves REAL fights",
		clue3: "Try asking Shipshape Sailor",
		solution: "El Gutso",
		effect: "Turns the bath hot."
	},
	{
		location: "Coconut Residential Area",
		clue1: "Lean and mean",
		clue2: "Great functionality",
		clue3: "Robot from the future",
		solution: "Robonyan F",
		effect: "Once a day he will give you a Chocobar."
	},
	{
		location: "Miracle Circus",
		clue1: "Wears a loincloth",
		clue2: "Has a pan for a hat",
		clue3: "Battles with a toothpick",
		solution: "Pandle",
		effect: "Will give access to a quest that will give you Glumdango."
	},
	{
		location: "Banter Bakery",
		clue1: "Looks like a tree",
		clue2: "Shady Tribe",
		clue3: "Has four arms",
		solution: "Retreeter",
		effect: "Will increase the amount of limited stock items and decrease the price of all items."
	},
	{
		location: "Shopper's Row - Riverbank",
		clue1: "Visits during the holidays",
		clue2: "Carries three sacks",
		clue3: "Enjoys quizzes",
		solution: "Ol' Saint Trick",
		effect: "Enables you to trade various coin fragments for Crank-a-Kai coins."
	},
	{
		location: "East Pines District",
		clue1: "Has a chocolate nose",
		clue2: "Sells Choco-Bananas",
		clue3: "Likes playing RPS",
		solution: "Cocobanana",
		effect: "Sells Chocobannanas. If beaten in Rock-paper-scissors he will give you a bonus Chocobannana."
	},
	{
		location: "Northbeech - Pier Area",
		clue1: "Uses a red umbrella",
		clue2: "Seems a bit down",
		clue3: "...And wet",
		solution: "Drizzelda",
		effect: "Makes it rain."
	},
	{
		location: "Northbeech - Pier Area",
		clue1: "Brightens up the day",
		clue2: "Has a dazzling smile",
		clue3: "My darling sweet pea!",
		solution: "Ray O'Light",
		effect: "Makes it sunny."
	},
	{
		location: "Southmond Scrap Yard",
		clue1: "Heartful Tribe",
		clue2: "Carries the...earth?",
		clue3: "Loves the environment",
		solution: "Greengramps",
		effect: "Able to trade trash gotten from the Yo-kai Cleaner in exchange for items."
	},
	{
		location: "Springdale Sports Club - 3F",
		clue1: "Feel the burn!",
		clue2: "Pump some iron!",
		clue3: "Victoryyyyyy!",
		solution: "Sgt. Burly",
		effect: "Increases GP received by 1.2."
	},
	{
		location: "Breezy Hills - Everymart",
		clue1: "Incredibly stuck-up",
		clue2: "Bosses others around",
		clue3: "Hurry up already!",
		solution: "Snobetty",
		effect: "Breezy Hills Everymart will sell Choice tuna, Marbled beef, and golden dolls for more."
	},
	{
		location: "Blossom Heights - Hot Springs",
		clue1: "Heartful Tribe",
		clue2: "Runs an inn",
		clue3: "Incredibly dexterous hair",
		solution: "Ghostess",
		effect: "Adds one extra crank to the daily Crank-a-Kai turns. She also heals your Yo-kai and gives you milk."
	},
	{
		location: "Sunset Mall B1",
		clue1: "Heartful Tribe",
		clue2: "Star of the seaweed world",
		clue3: "Has hordes of fans",
		solution: "Kelpacabana",
		effect: "Will exchange Dancing stars for Victory poses."
	},
	{
		location: "Downtown Springdale Business Tower",
		clue1: "Wears a dashing Sand Suit",
		clue2: "Has side-parted hair",
		clue3: "Incredibly humble",
		solution: "Mr. Sandmeh",
		effect: "Will open a door needed in a quest."
	},
	{
		location: "Sparkopolis",
		clue1: "Magnificent eyebrows",
		clue2: "Holds a small staff",
		clue3: "Great teacher",
		solution: "Illoo",
		effect: "Talk to him to travel to the Illusion version Sparkopolis."
	},
	{
		location: "Bada-Bing Tower - Lobby",
		clue1: "Governs recollections",
		clue2: "Has an odd suction device",
		clue3: "Recovers lost memories",
		solution: "Vacuumory",
		effect: "Talk to him to rematch Don Spiracy."
	},
	{
		location: "Greenfields Station",
		clue1: "Mysterious Tribe",
		clue2: "Looks like a hat",
		clue3: "Eats memories",
		solution: "Wazzat",
		effect: "Allows you to change the names of your Yo-kai."
	},
	{
		location: "Yopple Headquarters - Yo-kai Watch Factory",
		clue1: "Inspirits those hard at work",
		clue2: "Looks like a tie",
		clue3: "I just wanna go home...",
		solution: "Tie-red",
		effect: "Enables you to work a part-time job in quality check."
	},
	{
		location: "Uptown Springdale -The Catwalk",
		clue1: "Heartful Tribe",
		clue2: "Rides a mouse car",
		clue3: "Likes pressing buttons",
		solution: "Push Pup",
		effect: "Be able to open the manhole nearby him."
	},
	{
		location: "Downtown Springdale - Rolling Waves Park",
		clue1: "Lolls around over here",
		clue2: "Lolls around over there",
		clue3: "Found a new continent",
		solution: "Kittylumbus",
		effect: "Talk to him to rematch Yo-kaiju."
	},
	{
		location: "Fortune Hospital - 2F",
		clue1: "Works at a hospital",
		clue2: "Wears nurse clothes",
		clue3: "Licks wounds better",
		solution: "Nurse Tongus",
		effect: "Once a day she will give you medicine."
	},
	{
		location: "Tranquility Apts. - B-301",
		clue1: "Mysterious Tribe",
		clue2: "Travels through time",
		clue3: "Has three mirrors",
		solution: "Miradox",
		effect: "Takes you back to the past in a very limited area."
	}
]
