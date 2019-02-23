//YW2 Bugs
const bugs = [
	{
    name: 'African Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Blossom Heights.',
    description: 'It\'s hard to spot this bug when It\'s perched on a branch.',
    sell: '18',
    rareSell: ''
  },
  {
    name: 'Apple Snail (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'A large-shelled omnivore that lays striking pink eggs.',
    sell: '32',
    rareSell: ''
  },
  {
    name: 'Asian Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A large black cicada that loves to make noise in the morning light.',
    sell: '41',
    rareSell: ''
  },
  {
    name: 'Asian Mantis (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A stately mantis with a distinctive, broad belly.',
    sell: '15',
    rareSell: ''
  },
  {
    name: 'Bell Cricket (YW2)',
    location: 'It\'s most likely somewhere under a porch in Harrisville.',
    description: 'These not-so-shy bugs love to sing, especially the males.',
    sell: '15',
    rareSell: ''
  },
  {
    name: 'Big Dragonfly (YW2)',
    location: 'It\'s most likely somewhere by the grave sites in Harrisville.',
    description: 'The famous big daddy of the dragonfly family.',
    sell: '38',
    rareSell: ''
  },
  {
    name: 'Blue Emperor (YW2)',
    location: 'It\'s most likely somewhere in a bamboo grove in Mount Wildwood.',
    description: 'This dragonfly can move pretty fast, despite its size.',
    sell: '31',
    rareSell: ''
  },
  {
    name: 'Brown Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'A brown cicada with a strong voice.',
    sell: '12',
    rareSell: ''
  },
  {
    name: 'Bush Cricket (YW2)',
    location: 'It\'s most likely somewhere in the gardens in Shopper\'s Row.',
		description:'An insect famed for recognizable, yet endless, chirping.',
		sell:'9',
		rareSell:''
  },
  {
    name: 'Cricket (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Blossom Heights.',
    description: 'A noisy little bug that\'s happy to eat almost anything.',
		sell:'7',
		rareSell:''
  },
  {
    name: 'Diving Beetle (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'Not only can this dynamic bug swim, it can also fly.',
    sell: '58',
    rareSell: ''
  },
  {
    name: 'Dorcus Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A big stag beetle with huge jaws. It\'s rare but popular.',
    sell: '64',
    rareSell: ''
  },
  {
    name: 'Drone Beetle (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'Look for this bug\'s metallic gleam among the trees.',
		sell:'2',
		rareSell:''
  },
  {
    name: 'Evening Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A popular cicada that sings a sad song in the evening.',
    sell: '23',
    rareSell: ''
  },
  {
    name: 'Fire-Belly Newt (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'A newt with a little red belly. It\'s cute, but It\'s also quite poisonous!',
    sell: '27',
    rareSell: ''
  },
  {
    name: 'Firefly (YW2)',
    location: 'It\'s most likely somewhere in a river in Harrisville.',
    description: 'A firefly that shines beautifully in the night near clean rivers.',
    sell: '26',
    rareSell: ''
  },
  {
    name: 'Flower Scarab (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'This tiny beetle digs into flowers to drink their nectar.',
    sell: '10',
    rareSell: ''
  },
  {
    name: 'Giant Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'A large creature with a short temper. It\'s always ready to fight.',
    sell: '22',
    rareSell: ''
  },
  {
    name: 'Grass Lizard (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Shopper\'s Row.',
		description:'If an enemy grabs its tail, it can shed it and grow a new one.',
		sell:'14',
		rareSell:''
  },
  {
    name: 'Grasshopper (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A big grasshopper with a pointed body.',
    sell: '6',
    rareSell: ''
  },
  {
    name: 'Green Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'A green cicada that sings a song that feels like summer!',
    sell: '3',
    rareSell: ''
  },
  {
    name: 'Jewel Beetle (YW2)',
    location: 'It\'s most likely somewhere in a bamboo grove in Mount Wildwood.',
    description: 'This beautiful creature has a green shell with red stripes.',
    sell: '12',
    rareSell: ''
  },
  {
    name: 'Ladybug (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A cute ladybug. Gardeners love them because they eat aphids.',
    sell: '1',
    rareSell: ''
  },
  {
    name: 'Large Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'A bug with a distinctive call. It\'s also very agile and hard to catch.',
    sell: '8',
    rareSell: ''
  },
  {
    name: 'Lizard (YW2)',
    location: 'It\'s most likely somewhere by the grave sites in Blossom Heights.',
    description: 'A rough-skinned reptile with a forked, snakelike tongue.',
    sell: '25',
    rareSell: ''
  },
  {
    name: 'Locust (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A locust with strong legs and a mighty jump.',
    sell: '24',
    rareSell: ''
  },
  {
    name: 'Longhorn (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A white-patterned beetle that eats tree bark.',
    sell: '16',
    rareSell: ''
  },
  {
    name: 'Miyama Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'A surprisingly delicate beetle that can\'t stand the heat.', 
	  sell:'34 ', 
	  rareSell:''
  },
  {
    name: 'Mole Cricket (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'Burrows into the ground like a mole, hence its name.',
    sell: '21',
    rareSell: ''
  },
  {
    name: 'Peacock Butterfly (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'A butterfly with wings as black as a crow\'s feathers.', 
	  sell:'40', 
	  rareSell:''
  },
  {
    name: 'Pond Snail (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'An edible shallow-water snail. Don\'t eat it raw...seriously.', 
	  sell:'10', 
	  rareSell:''
  },
  {
    name: 'Praying Mantis (YW2)',
    location: 'It\'s most likely somewhere in a garden in Blossom Heights.',
    description: 'A mantis! Hold the back of its neck to avoid its claws!',
    sell: '30',
    rareSell: ''
  },
  {
    name: 'Rhino Beetle (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'The rhino beetle, king of bugs! Look at that horn!',
    sell: '42',
    rareSell: ''
  },
  {
    name: 'Rice Grasshopper (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'Considered a pest due to its insatiable taste for rice plants.',
    sell: '11',
    rareSell: ''
  },
  {
    name: 'Sawtooth Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'An aggressive beetle with a curved jaw. It\'s so cool!',
    sell: '28',
    rareSell: ''
  },
  {
    name: 'Scarab Beetle (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A beetle with an unmistakable jade-colored shell.',
    sell: '17',
    rareSell: ''
  },
  {
    name: 'Snail (YW2)',
    location: 'It\'s most likely somewhere under a porch in Uptown Springdale.',
    description: 'It\'s not so friendly in dry weather, but rain brings it out of its shell.',
    sell: '9',
    rareSell: ''
  },
  {
    name: 'Stick Insect (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A bug that blends seamlessly into any woodland landscape.',
    sell: '19',
    rareSell: ''
  },
  {
    name: 'Stinkbug (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Breezy Hills.',
    description: 'Uses its distinctive stink to keep potential predators at bay.',
    sell: '8',
    rareSell: ''
  },
  {
    name: 'Swallowtail (YW2)',
    location: 'It\'s most likely somewhere in a garden in Uptown Springdale.',
    description: 'A butterfly with beautiful wings. Its larvae love leaves.',
    sell: '13',
    rareSell: ''
  },
  {
    name: 'Tadpole Shrimp (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'Described as a living fossil, this shrimp hasn\'t changed for eons.', 
	  sell:'5', 
	  rareSell:''
  },
  {
    name: 'Toad (YW2)',
    location: 'It\'s most likely somewhere in a river in Harrisville.',
    description: 'This toad\'s got poisonous skin, so always handle with care.',
		sell:'11',
		rareSell:''
  },
  {
    name: 'Tree Frog (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A cute little creature with a croak all its own.',
    sell: '5',
    rareSell: ''
  },
  {
    name: 'Violet Butterfly (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'A large butterfly with striking purple wings.',
    sell: '67',
    rareSell: ''
  },
  {
    name: 'Water Bug (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'This large bug\'s sharp pincers make short work of its prey.',
		sell:'51',
		rareSell:''
  },
  {
    name: 'White Moth (YW2)',
    location: 'It\'s most likely somewhere in a garden in Uptown Springdale.',
    description: 'Their larvae are known for leaving holes in tasty cabbage leaves.',
    sell: '2',
    rareSell: ''
  },
  {
    name: 'Whitetail (YW2)',
    location: 'It\'s most likely somewhere in the trees in Breezy Hills.',
    description: 'A common dragonfly you\'re sure to have seen somewhere.',
		sell:'16',
		rareSell:''
  },
  {
    name: 'Wood Louse (YW2)',
    location: 'It\'s most likely somewhere under a porch in Uptown Springdale.',
    description: 'It protects itself by rolling into a little ball of armor.',
    sell: '3',
    rareSell: ''
  },
  {
    name: '★African Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Blossom Heights.',
    description: 'This chameleonic cicada blends in perfectly with a tree.',
    sell: '90',
    rareSell: ''
  },
  {
    name: '★Apple Snail (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'This supremely resilient snail fears no predator.',
    sell: '160',
    rareSell: ''
  },
  {
    name: '★Asian Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'This cicada\'s so big,you\'ll need to grab it with both hands.',
    sell: '205',
    rareSell: ''
  },
  {
    name: '★Asian Mantis (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'This mantis is known for taking out its prey with ninja-like stealth.',
    sell: '75',
    rareSell: ''
  },
  {
    name: '★Bell Cricket (YW2)',
    location: 'It\'s most likely somewhere under a porch in Harrisville.',
    description: 'The enchanting beauty of its song soothes all who hear it.',
    sell: '75',
    rareSell: ''
  },
  {
    name: '★Big Dragonfly (YW2)',
    location: 'It\'s most likely somewhere by the grave sites in Harrisville.',
    description: 'The power of its big green eyes is impossible to deny.',
    sell: '190',
    rareSell: ''
  },
  {
    name: '★Blue Emperor (YW2)',
    location: 'It\'s most likely somewhere in a bamboo grove in Mount Wildwood.',
    description: 'This dragonfly can zip through the air at sensational speeds.',
    sell: '155',
    rareSell: ''
  },
  {
    name: '★Brown Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'A brown cicada that sings and flutters around with power.',
    sell: '60',
    rareSell: ''
  },
  {
    name: '★Bush Cricket (YW2)',
    location: 'It\'s most likely somewhere in the gardens in Shopper\'s Row.',
		description:'Its melodious chirping sounds make the sweetest music.',
		sell:'45',
		rareSell:''
  },
  {
    name: '★Cricket (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Blossom Heights.',
    description: 'This battle-hardened bug can take on any foe.',
    sell: '35',
    rareSell: ''
  },
  {
    name: '★Diving Beetle (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'Whether in the water or the air, this beetle always shines.',
    sell: '290',
    rareSell: ''
  },
  {
    name: '★Dorcus Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A Dorcus stag with a body so perfect, it looks like a jewel.',
    sell: '320',
    rareSell: ''
  },
  {
    name: '★Drone Beetle (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'This bug\'s body gleams like a precious gem.',
		sell:'10',
		rareSell:''
  },
  {
    name: '★Evening Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'An evening cicada that sings heart-touching songs.',
    sell: '115',
    rareSell: ''
  },
  {
    name: '★Fire-Belly Newt (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'If this newt loses its tail, it can grow one back in no time flat.',
    sell: '135',
    rareSell: ''
  },
  {
    name: '★Firefly (YW2)',
    location: 'It\'s most likely somewhere in a river in Harrisville.',
    description: 'A firefly so bright, you could use it to read a book.',
    sell: '130',
    rareSell: ''
  },
  {
    name: '★Flower Scarab (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A flower scarab that shines even when covered in pollen.',
    sell: '50',
    rareSell: ''
  },
  {
    name: '★Giant Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'Those mighty mandibles can seize any foe and won\'t let go.', 
	sell: '110', 
	  rareSell: ''
  },
  {
    name: '★Grass Lizard (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Shopper\'s Row.',
		description:'Always poised to make a speedy getaway, it can evade any foe.',
		sell:'70',
		rareSell:''
  },
  {
    name: '★Grasshopper (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A lively grasshopper that can jump thrice as high as usual.',
    sell: '30',
    rareSell: ''
  },
  {
    name: '★Green Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Uptown Springdale.',
    description: 'A green cicada that sings in a soothing rhythm.',
    sell: '15',
    rareSell: ''
  },
  {
    name: '★Jewel Beetle (YW2)',
    location: 'It\'s most likely somewhere in a bamboo grove in Mount Wildwood.',
    description: 'That dazzling body reflects every color of the rainbow.',
    sell: '60',
    rareSell: ''
  },
  {
    name: '★Ladybug (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A ladybug with the Big Dipper perfectly aligned on its back.',
    sell: '5',
    rareSell: ''
  },
  {
    name: '★Large Cicada (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'A bug that flies so fast it can\'t be seen by the naked eye.',
		sell:'40',
		rareSell:''
  },
  {
    name: '★Lizard (YW2)',
    location: 'It\'s most likely somewhere by the grave sites in Blossom Heights.',
    description: 'Its tail is so long that It\'s always getting caught on something!',
    sell: '125',
    rareSell: ''
  },
  {
    name: '★Locust (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'A locust that feels like it might kick through its cage.',
    sell: '120',
    rareSell: ''
  },
  {
    name: '★Longhorn (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A long-horn that could cut down a tree branch in one bite.',
    sell: '80',
    rareSell: ''
  },
  {
    name: '★Miyama Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'This powerful beetle can lift foes five times its size.',
    sell: '170',
    rareSell: ''
  },
  {
    name: '★Mole Cricket (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'A specimen that can dig tunnels at a rate of several meters a day.',
    sell: '105',
    rareSell: ''
  },
  {
    name: '★Peacock Butterfly (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'The inky blackness of its body is curiously captivating, right?',
    sell: '200',
    rareSell: ''
  },
  {
    name: '★Pond Snail (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'This impressive creature has grown to the size of a human fist.',
    sell: '50',
    rareSell: ''
  },
  {
    name: '★Praying Mantis (YW2)',
    location: 'It\'s most likely somewhere in a garden in Blossom Heights.',
    description: 'A mantis so clever that you can\'t sneak up on it.',
		sell:'150',
		rareSell:''
  },
  {
    name: '★Rhino Beetle (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A good-looking rhinoceros beetle with an admirable horn.',
    sell: '210',
    rareSell: ''
  },
  {
    name: '★Rice Grasshopper (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Harrisville.',
    description: 'A protein-packed creature that makes for a great snack.',
    sell: '55',
    rareSell: ''
  },
  {
    name: '★Sawtooth Stag (YW2)',
    location: 'It\'s most likely somewhere in the trees in Mount Wildwood.',
    description: 'A burly sawtooth with a big jaw and a bold stance.',
    sell: '140',
    rareSell: ''
  },
  {
    name: '★Scarab Beetle (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'This dazzling beetle could be mistaken for an emerald.',
    sell: '85',
    rareSell: ''
  },
  {
    name: '★Snail (YW2)',
    location: 'It\'s most likely somewhere under a porch in Uptown Springdale.',
    description: 'Its sturdy shell protects it from even the nastiest of foes.',
    sell: '45',
    rareSell: ''
  },
  {
    name: '★Stick Insect (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Mount Wildwood.',
    description: 'It\'s grown so big that it now struggles to hide in the trees.',
    sell: '95',
    rareSell: ''
  },
  {
    name: '★Stinkbug (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Breezy Hills.',
    description: 'Its sweet scent could be bottled and sold as perfume.',
    sell: '40',
    rareSell: ''
  },
  {
    name: '★Swallowtail (YW2)',
    location: 'It\'s most likely somewhere in a garden in Uptown Springdale.',
    description: 'A beautiful swallowtail butterfly.',
    sell: '65',
    rareSell: ''
  },
  {
    name: '★Tadpole Shrimp (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'A big eater who can free a whole rice field from invasive weeds.',
    sell: '25',
    rareSell: ''
  },
  {
    name: '★Toad (YW2)',
    location: 'It\'s most likely somewhere in a river in Harrisville.',
    description: 'Can catch prey with a mere flick of its lengthy tongue.',
    sell: '55',
    rareSell: ''
  },
  {
    name: '★Tree Frog (YW2)',
    location: 'It\'s most likely somewhere in the bushes in Uptown Springdale.',
    description: 'A frog with a magnificent operatic singing voice.',
    sell: '25',
    rareSell: ''
  },
  {
    name: '★Violet Butterfly (YW2)',
    location: 'It\'s most likely somewhere in the trees in Harrisville.',
    description: 'Has a bewitching beauty that can stop anyone in their tracks.',
    sell: '335',
    rareSell: ''
  },
  {
    name: '★Water Bug (YW2)',
    location: 'It\'s most likely somewhere in the paddy fields in Harrisville.',
    description: 'It\'s so aggressive that some call this bug the Pond Punisher.',
    sell: '255',
    rareSell: ''
  },
  {
    name: '★White Moth (YW2)',
    location: 'It\'s most likely somewhere in a garden in Uptown Springdale.',
    description: 'When they fly in formation, It\'s a truly unforgettable sight.',
    sell: '10',
    rareSell: ''
  },
  {
    name: '★Whitetail (YW2)',
    location: 'It\'s most likely somewhere in the trees in Breezy Hills.',
    description: 'Its stunning wings can entrance its observers for hours on end.',
    sell: '80',
    rareSell: ''
  },
  {
    name: '★Wood Louse (YW2)',
    location: 'It\'s most likely somewhere under a porch in Uptown Springdale.',
    description: 'Its adamantine armor offers peerless protection.',
    sell: '15',
    rareSell: ''
  }
];

export default bugs;
