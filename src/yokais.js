const yokais = [
    {
        yw: 1,
        yw2: 1,
        name: 'Pandle',
        japanese: 'ぶようじん坊',
        japaneseName: 'Buyojinbo',
        tribe: 'Brave',
        rank: 'E',
        attribute: 'Fire',
        favoriteFood: 'Rice Balls',
        evolution: 'Lv. 18 → Undy',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pandle.png'
    },
    {
        yw: 2,
        yw2: 2,
        name: 'Undy',
        japanese: 'がらあきん坊',
        japaneseName: 'Garakinbo',
        tribe: 'Brave',
        rank: 'C',
        attribute: 'Fire',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/undy.png'
    },
    {
        yw: 3,
        yw2: 3,
        name: 'Tanbo',
        japanese: 'さきがけの助',
        japaneseName: 'Sakigakenosuke',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tanbo.png'
    },
    {
        yw: 4,
        yw2: 4,
        name: 'Cutta-nah',
        japanese: 'ダラケ刀',
        japaneseName: 'Daraketo',
        tribe: 'Brave',
        rank: 'E',
        attribute: 'Wind',
        favoriteFood: 'Juice',
        evolution: 'Lv. 20 → Cutta-nah-nah',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cutta-nah.png'
    },
    {
        yw: 5,
        yw2: 5,
        name: 'Cutta-nah-nah',
        japanese: 'ザンバラ刀',
        japaneseName: 'Zanbarato',
        tribe: 'Brave',
        rank: 'C',
        attribute: 'Wind',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cutta-nah-nah.png'
    },
    {
        yw: 6,
        yw2: 6,
        name: 'Slacka-slash',
        japanese: 'ダララだんびら',
        japaneseName: 'Dararadanbira',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/slacka-slash.png'
    },
    {
        yw: 7,
        yw2: 14,
        name: 'Mochismo',
        japanese: 'ちからモチ',
        japaneseName: 'Chikaramochi',
        tribe: 'Brave',
        rank: 'D',
        attribute: 'Earth',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mochismo.png'
    },
    {
        yw: 8,
        yw2: 15,
        name: 'Minochi',
        japanese: 'やきモチ',
        japaneseName: 'Yakimochi',
        tribe: 'Brave',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/minochi.png'
    },
    {
        yw: 9,
        yw2: 19,
        name: 'Helmsman',
        japanese: 'カブトさん',
        japaneseName: 'Kabutosan',
        tribe: 'Brave',
        rank: 'D',
        attribute: 'Lightning',
        favoriteFood: 'Vegetables',
        evolution: '+ Armsman ↓ Reuknight',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/helmsman.png'
    },
    {
        yw: 10,
        yw2: 20,
        name: 'Reuknight',
        japanese: 'ゲンマ将軍',
        japaneseName: 'Genma-shogun',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/reuknight.png'
    },
    {
        yw: 11,
        yw2: 21,
        name: 'Corptain',
        japanese: '黄泉ゲンスイ',
        japaneseName: 'Yomigensui',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Drain',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/corptain.png'
    },
    {
        yw: 12,
        yw2: 24,
        name: 'Blazion',
        japanese: 'メラメライオン',
        japaneseName: 'Merameraion',
        tribe: 'Brave',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/blazion.png'
    },
    {
        yw: 13,
        yw2: 25,
        name: 'Quaken',
        japanese: 'グラグライオン',
        japaneseName: 'Guraguraion',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/quaken.png'
    },
    {
        yw: 14,
        yw2: 26,
        name: 'Siro',
        japanese: 'とどろき獅子',
        japaneseName: 'Todorokijishi',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/siro.png'
    },
    {
        yw: 15,
        yw2: 27,
        name: 'Chansin',
        japanese: 'しょうブシ',
        japaneseName: 'Shoubushi',
        tribe: 'Brave',
        rank: 'C',
        attribute: 'Fire',
        favoriteFood: 'Seafood',
        evolution:
            '+ Legendary Blade ↓ Sheen + Cursed Blade ↓ Snee + Holy Blade ↓ Gleam',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/chansin.png'
    },
    {
        yw: 16,
        yw2: 28,
        name: 'Sheen',
        japanese: 'まさむね',
        japaneseName: 'Masamune',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/sheen.png'
    },
    {
        yw: 17,
        yw2: 29,
        name: 'Snee',
        japanese: 'むらまさ',
        japaneseName: 'Muramasa',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/snee.png'
    },
    {
        yw: 18,
        yw2: 30,
        name: 'Gleam',
        japanese: 'くさなぎ',
        japaneseName: 'Kusanagi',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/gleam.png'
    },
    {
        yw: 19,
        yw2: 31,
        name: 'Benkei',
        japanese: 'ベンケイ',
        japaneseName: 'Benkei',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/benkei.png'
    },
    {
        yw: 20,
        yw2: 32,
        name: 'B3-NK1',
        japanese: 'からくりベンケイ',
        japaneseName: 'Karakuribenkei',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/b3-nk1.png'
    },
    {
        yw: 21,
        yw2: 33,
        name: 'Sushiyama',
        japanese: 'やまと',
        japaneseName: 'Yamato',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Soba (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/sushiyama.png'
    },
    {
        yw: 22,
        yw2: 34,
        name: 'Kapunki',
        japanese: 'カブキ猿',
        japaneseName: 'Kabukizaru',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Soba (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/kapunki.png'
    },
    {
        yw: 23,
        yw2: 35,
        name: 'Beetler',
        japanese: 'クワノ武士',
        japaneseName: 'Kuwanobushi',
        tribe: 'Brave',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: '+ General`s Soul ↓ Beetall',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/beetler.png'
    },
    {
        yw: 24,
        yw2: 36,
        name: 'Beetall',
        japanese: 'クワガ大将',
        japaneseName: 'Kuwagataishou',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/beetall.png'
    },
    {
        yw: 25,
        yw2: 37,
        name: 'Cruncha',
        japanese: 'オオクワノ神',
        japaneseName: 'Ookuwanokami',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cruncha.png'
    },
    {
        yw: 26,
        yw2: 12,
        name: 'Zerberker',
        japanese: 'くしゃ武者',
        japaneseName: 'Kushamusha',
        tribe: 'Brave',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/zerberker.png'
    },
    {
        yw: 27,
        yw2: 13,
        name: 'Snartle',
        japanese: 'なまはげ',
        japaneseName: 'Namahage',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/snartle.png'
    },
    {
        yw: 28,
        yw2: 42,
        name: 'Snotsolong',
        japanese: 'ズルズルづる',
        japaneseName: 'Zuruzuruzuru',
        tribe: 'Mysterious',
        rank: 'E',
        attribute: 'Water',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/snotsolong.png'
    },
    {
        yw: 29,
        yw2: 43,
        name: 'Duchoo',
        japanese: 'かぜカモ',
        japaneseName: 'Kazekamo',
        tribe: 'Mysterious',
        rank: 'D',
        attribute: 'Ice',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/duchoo.png'
    },
    {
        yw: 30,
        yw2: 47,
        name: 'Wazzat',
        japanese: 'わすれん帽',
        japaneseName: 'Wasurenbou',
        tribe: 'Mysterious',
        rank: 'E',
        attribute: 'Wind',
        favoriteFood: 'Cheap Sweets',
        evolution: 'Lv. 21 → Mezon Dowasure (YW2)',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/wazzat.png'
    },
    {
        yw: 31,
        yw2: 49,
        name: 'Dummkap',
        japanese: 'ばか頭巾',
        japaneseName: 'Bakazukin',
        tribe: 'Mysterious',
        rank: 'E',
        attribute: 'Lightning',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dummkap.png'
    },
    {
        yw: 32,
        yw2: 44,
        name: 'D`wanna',
        japanese: 'つづかな僧',
        japaneseName: 'Tsuzukanasou',
        tribe: 'Mysterious',
        rank: 'E',
        attribute: 'Restoration',
        favoriteFood: 'Hamburgers',
        evolution: 'Lv. 15 → N`more',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dwanna.png'
    },
    {
        yw: 33,
        yw2: 45,
        name: 'N`more',
        japanese: 'やめたい師',
        japaneseName: 'Yametaishi',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Restoration',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/nmore.png'
    },
    {
        yw: 34,
        yw2: 46,
        name: 'Q`wit',
        japanese: 'もうせん和尚',
        japaneseName: 'Mosen Oshou',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Earth',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/qwit.png'
    },
    {
        yw: 35,
        yw2: 51,
        name: 'Lafalotta',
        japanese: 'わらえ姉',
        japaneseName: 'Waraenee',
        tribe: 'Mysterious',
        rank: 'D',
        attribute: 'Drain',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/lafalotta.png'
    },
    {
        yw: 36,
        yw2: 52,
        name: 'Blips',
        japanese: '青くちびる',
        japaneseName: 'Aokuchibiru',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/blips.png'
    },
    {
        yw: 37,
        yw2: 53,
        name: 'Tattletell',
        japanese: 'バクロ婆',
        japaneseName: 'Bakurobaa',
        tribe: 'Mysterious',
        rank: 'D',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: '+ Lafalotta ↓ Tattlecast',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tattletell.png'
    },
    {
        yw: 38,
        yw2: 54,
        name: 'Tattlecast',
        japanese: 'ババァーン',
        japaneseName: 'Babaan',
        tribe: 'Mysterious',
        rank: 'B',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tattlecast.png'
    },
    {
        yw: 39,
        yw2: 55,
        name: 'Skranny',
        japanese: 'ドクロ婆',
        japaneseName: 'Dokurobaa',
        tribe: 'Mysterious',
        rank: 'B',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/skranny.png'
    },
    {
        yw: 40,
        yw2: 56,
        name: 'Cupistol',
        japanese: 'モテモ天',
        japaneseName: 'Motemoten',
        tribe: 'Mysterious',
        rank: 'D',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: '+ Lovebuster ↓ Casanuva',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cupistol.png'
    },
    {
        yw: 41,
        yw2: 57,
        name: 'Casanuva',
        japanese: 'モテマクール',
        japaneseName: 'Motemakuuru',
        tribe: 'Mysterious',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/casanuva.png'
    },
    {
        yw: 42,
        yw2: 58,
        name: 'Casanono',
        japanese: 'モテヌス',
        japaneseName: 'Motenusu',
        tribe: 'Mysterious',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/casanono.png'
    },
    {
        yw: 43,
        yw2: 63,
        name: 'Signibble',
        japanese: 'でんぱく小僧',
        japaneseName: 'Denbakukozo',
        tribe: 'Mysterious',
        rank: 'D',
        attribute: 'Lightning',
        favoriteFood: 'Snacks (YW1: Rice Balls)',
        evolution: ' + GHz Orb ↓ Signiton',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/signibble.png'
    },
    {
        yw: 44,
        yw2: 64,
        name: 'Signiton',
        japanese: 'でんじん',
        japaneseName: 'Denjin',
        tribe: 'Mysterious',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Oden (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/signiton.png'
    },
    {
        yw: 45,
        yw2: 65,
        name: 'Statiking',
        japanese: 'はつでんしん',
        japaneseName: 'Hatsudenshin',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Oden (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/statiking.png'
    },
    {
        yw: 46,
        yw2: 69,
        name: 'Mirapo',
        japanese: 'うんがい鏡',
        japaneseName: 'Ungaikyou',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mirapo.png'
    },
    {
        yw: 47,
        yw2: 71,
        name: 'Mircle',
        japanese: 'ヤミ鏡',
        japaneseName: 'Yamikagami',
        tribe: 'Mysterious',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mircle.png'
    },
    {
        yw: 48,
        yw2: 72,
        name: 'Illoo',
        japanese: 'まぼ老師',
        japaneseName: 'Maboroshi',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Water',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/illoo.png'
    },
    {
        yw: 49,
        yw2: 73,
        name: 'Elloo',
        japanese: 'かげ老師',
        japaneseName: 'Kageroshi',
        tribe: 'Mysterious',
        rank: 'C',
        attribute: 'Ice',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/elloo.png'
    },
    {
        yw: 50,
        yw2: 74,
        name: 'Alloo',
        japanese: 'ほう老師',
        japaneseName: 'Horoshi',
        tribe: 'Mysterious',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/alloo.png'
    },
    {
        yw: 51,
        yw2: 75,
        name: 'Espy',
        japanese: 'さとりちゃん',
        japaneseName: 'Satorichan',
        tribe: 'Mysterious',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/espy.png'
    },
    {
        yw: 52,
        yw2: 76,
        name: 'Infour',
        japanese: 'よつめ',
        japaneseName: 'Yotsume',
        tribe: 'Mysterious',
        rank: 'B',
        attribute: 'Drain',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/infour.png'
    },
    {
        yw: 53,
        yw2: 78,
        name: 'Tengu',
        japanese: '天狗',
        japaneseName: 'Tengu',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Wind',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tengu.png'
    },
    {
        yw: 54,
        yw2: 79,
        name: 'Flengu',
        japanese: 'ほむら天狗',
        japaneseName: 'Homuratengu',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/flengu.png'
    },
    {
        yw: 55,
        yw2: 80,
        name: 'Kyubi',
        japanese: 'キュウビ',
        japaneseName: 'Kyuubi',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Oden (Honke and Shin`uchi only)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/kyubi.png'
    },
    {
        yw: 56,
        yw2: 81,
        name: 'Frostail',
        japanese: '犬神',
        japaneseName: 'Inugami',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Oden',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/frostail.png'
    },
    {
        yw: 57,
        yw2: 85,
        name: 'Dulluma',
        japanese: 'だるだるま',
        japaneseName: 'Darudaruma',
        tribe: 'Tough',
        rank: 'E',
        attribute: 'Earth',
        favoriteFood: 'Curry (YW1: Bread)',
        evolution: '+ Mochismo ↓ Darumacho',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dulluma.png'
    },
    {
        yw: 58,
        yw2: 86,
        name: 'Darumacho',
        japanese: 'だるまっちょ',
        japaneseName: 'Darumacho',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Curry (YW1: Bread)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/darumacho.png'
    },
    {
        yw: 59,
        yw2: 87,
        name: 'Goruma',
        japanese: 'ゴリだるま',
        japaneseName: 'Goridaruma',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Wind',
        favoriteFood: 'Curry (YW1: Bread)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/goruma.png'
    },
    {
        yw: 60,
        yw2: 92,
        name: 'Noway',
        japanese: 'ムリカベ',
        japaneseName: 'Murikabe',
        tribe: 'Tough',
        rank: 'E',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: 'Lv. 29 → Impass',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/noway.png'
    },
    {
        yw: 61,
        yw2: 93,
        name: 'Impass',
        japanese: 'むりだ城',
        japaneseName: 'Muridajou',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/impass.png'
    },
    {
        yw: 62,
        yw2: 94,
        name: 'Walldin',
        japanese: 'シロカベ',
        japaneseName: 'Shirokabe',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/walldin.png'
    },
    {
        yw: 63,
        yw2: 98,
        name: 'Armsman',
        japanese: 'ヨロイさん',
        japaneseName: 'Yoroisan',
        tribe: 'Tough',
        rank: 'D',
        attribute: 'Ice',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/armsman.png'
    },
    {
        yw: 64,
        yw2: 102,
        name: 'Fidgephant',
        japanese: 'モレゾウ',
        japaneseName: 'Morezou',
        tribe: 'Tough',
        rank: 'D',
        attribute: 'Water',
        favoriteFood: 'Rice Balls',
        evolution: '+ Touphant ↓ Gamanmosu (YW2)',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/fidgephant.png'
    },
    {
        yw: 65,
        yw2: 103,
        name: 'Touphant',
        japanese: 'プルファント',
        japaneseName: 'Burufanto',
        tribe: 'Tough',
        rank: 'D',
        attribute: 'Water',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/touphant.png'
    },
    {
        yw: 66,
        yw2: 100,
        name: 'Blowkade',
        japanese: 'トオセンボン',
        japaneseName: 'Toosenbon',
        tribe: 'Tough',
        rank: 'D',
        attribute: 'Water',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/blowkade.png'
    },
    {
        yw: 67,
        yw2: 101,
        name: 'Ledballoon',
        japanese: 'くろがねセンボン',
        japaneseName: 'Kurogane senbon',
        tribe: 'tough',
        rank: 'C',
        attribute: 'Water',
        favoriteFood: 'Milk',
        evolution: '+ Mayoiguruma (YW2) Dassensha',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/ledballoon.png'
    },
    {
        yw: 68,
        yw2: 108,
        name: 'Mad Mountain',
        japanese: 'ふじのやま',
        japaneseName: 'Fujinoyama',
        tribe: 'Tough',
        rank: 'C',
        attribute: 'Ice',
        favoriteFood: 'Sushi (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mad_mountain.png'
    },
    {
        yw: 69,
        yw2: 109,
        name: 'Lava Lord',
        japanese: null,
        japaneseName: 'Sakuranojim',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Sushi (YW1: Rice Balls)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/lava_lord.png'
    },
    {
        yw: 70,
        yw2: 95,
        name: 'Roughraff',
        japanese: 'グレるりん',
        japaneseName: 'Gurerurin',
        tribe: 'Tough',
        rank: 'E',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: 'Lv. 26 → Badude',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/roughraff.png'
    },
    {
        yw: 71,
        yw2: 96,
        name: 'Badude',
        japanese: 'ゴクドー',
        japaneseName: 'Gokudo',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/badude.png'
    },
    {
        yw: 72,
        yw2: 97,
        name: 'Bruff',
        japanese: 'アニ鬼',
        japaneseName: 'Aniki',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/bruff.png'
    },
    {
        yw: 73,
        yw2: 114,
        name: 'Rhinoggin',
        japanese: '武者かぶと',
        japaneseName: 'Mushakabuto',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: '+ Unbeatable Soul ↓ Rhinormous',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rhinoggin.png'
    },
    {
        yw: 74,
        yw2: 115,
        name: 'Rhinormous',
        japanese: 'かぶと無双',
        japaneseName: 'Kabutomusou',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rhinormous.png'
    },
    {
        yw: 75,
        yw2: 116,
        name: 'Hornaplenty',
        japanese: 'オオツノノ神',
        japaneseName: 'Ootsunonokami',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/hornaplenty.png'
    },
    {
        yw: 76,
        yw2: 110,
        name: 'Castelius III',
        japanese: 'ドウカク',
        japaneseName: 'Doukaku',
        tribe: 'Tough',
        rank: 'C',
        attribute: 'Earth',
        favoriteFood: 'Milk',
        evolution: '+ Castelius III ↓ Castelius II',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/castelius_iii.png'
    },
    {
        yw: 77,
        yw2: 111,
        name: 'Castelius II',
        japanese: 'ギンカク',
        japaneseName: 'Ginkaku',
        tribe: 'Tough',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Milk',
        evolution: '+ Castelius II ↓ Castelius I',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/castelius_ii.png'
    },
    {
        yw: 78,
        yw2: 112,
        name: 'Castelius I',
        japanese: 'キンカク',
        japaneseName: 'Kinkaku',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Milk',
        evolution: '+ Platinum Bar ↓ Castelius Max',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/castelius_i.png'
    },
    {
        yw: 79,
        yw2: 113,
        name: 'Castelius Max',
        japanese: 'プラチナカク',
        japaneseName: 'Purachinakaku',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Wind',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/castelius_max.png'
    },
    {
        yw: 80,
        yw2: 117,
        name: 'Robonyan',
        japanese: 'ロボニャン',
        japaneseName: 'Robonyan',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/robonyan.png'
    },
    {
        yw: 81,
        yw2: 118,
        name: 'Goldenyan',
        japanese: 'ゴルニャン',
        japaneseName: 'Gorunyan',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/goldenyan.png'
    },
    {
        yw: 82,
        yw2: 119,
        name: 'Dromp',
        japanese: 'だいだらぼっち',
        japaneseName: 'Daidachibocchi',
        tribe: 'Tough',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dromp.png'
    },
    {
        yw: 83,
        yw2: 120,
        name: 'Swosh',
        japanese: 'うみぼうず',
        japaneseName: 'Umibouzu',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Water',
        favoriteFood: 'Vegetables (Seafood?)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/swosh.png'
    },
    {
        yw: 84,
        yw2: 124,
        name: 'Dazzabel',
        japanese: 'しゃれこ婦人',
        japaneseName: 'Sharekofujin',
        tribe: 'Charming',
        rank: 'E',
        attribute: 'Fire',
        favoriteFood: 'Hamburgers',
        evolution: '+ Cupistol ↓ Rattelle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dazzabel.png'
    },
    {
        yw: 85,
        yw2: 125,
        name: 'Rattelle',
        japanese: 'カラカラさん',
        japaneseName: 'Karakarasan',
        tribe: 'Charming',
        rank: 'C',
        attribute: 'Fire',
        favoriteFood: 'Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rattelle.png'
    },
    {
        yw: 86,
        yw2: 126,
        name: 'Skelebella',
        japanese: 'ほね美人',
        japaneseName: 'Honebijin',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/skelebella.png'
    },
    {
        yw: 87,
        yw2: 127,
        name: 'Cadin',
        japanese: 'セミまる',
        japaneseName: 'Semimaru',
        tribe: 'Charming',
        rank: 'E',
        attribute: 'Wind',
        favoriteFood: 'Juice',
        evolution: 'Lv. 21 → Cadable',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cadin.png'
    },
    {
        yw: 88,
        yw2: 128,
        name: 'Cadable',
        japanese: 'カゲまる',
        japaneseName: 'Kagemaru',
        tribe: 'Charming',
        rank: 'C',
        attribute: 'Wind',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cadable.png'
    },
    {
        yw: 89,
        yw2: 129,
        name: 'Singcada',
        japanese: 'ヒグラシまる',
        japaneseName: 'Higurashimaru',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Fire',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/singcada.png'
    },
    {
        yw: 90,
        yw2: 130,
        name: 'Pupsicle',
        japanese: 'さむガリ',
        japaneseName: 'Samugari',
        tribe: 'Charming',
        rank: 'E',
        attribute: 'Ice',
        favoriteFood: 'Noodles',
        evolution: '+ Snowstorm Cloak ↓ Chilhuahua',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pupsicle.png'
    },
    {
        yw: 91,
        yw2: 131,
        name: 'Chilhuahua',
        japanese: 'ガリ王子',
        japaneseName: 'Gariouji',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/chilhuahua.png'
    },
    {
        yw: 92,
        yw2: 132,
        name: 'Swelterrier',
        japanese: 'あつガルル',
        japaneseName: 'Atsugaruru',
        tribe: 'Charming',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/swelterrier.png'
    },
    {
        yw: 93,
        yw2: 135,
        name: 'Jibanyan',
        japanese: 'ジバニャン',
        japaneseName: 'Jibanyan',
        tribe: 'Charming',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: '+ Coughkoff ↓ Thornyan + Roughraff ↓ Baddinyan',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/jibanyan.png'
    },
    {
        yw: 94,
        yw2: 136,
        name: 'Thornyan',
        japanese: 'トゲニャン',
        japaneseName: 'Togenyan',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Wind',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/thornyan.png'
    },
    {
        yw: 95,
        yw2: 137,
        name: 'Baddinyan',
        japanese: 'ワルニャン',
        japaneseName: 'Warunyan',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Fire',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/baddinyan.png'
    },
    {
        yw: 96,
        yw2: 139,
        name: 'Walkappa',
        japanese: 'ノガッパ',
        japaneseName: 'Nogappa',
        tribe: 'Charming',
        rank: 'D',
        attribute: 'Water',
        favoriteFood: 'Sushi (YW1: Vegetables)',
        evolution: 'Lv. 32 → Appak',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/walkappa.png'
    },
    {
        yw: 97,
        yw2: 140,
        name: 'Appak',
        japanese: 'たびガッパ',
        japaneseName: 'Tabigappa',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Water',
        favoriteFood: 'Sushi (YW1: Vegetables)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/appak.png'
    },
    {
        yw: 98,
        yw2: 141,
        name: 'Supyo',
        japanese: 'なみガッパ',
        japaneseName: 'Namigappa',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Water',
        favoriteFood: 'Sushi (YW1: Vegetables)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/supyo.png'
    },
    {
        yw: 99,
        yw2: 142,
        name: 'Komasan',
        japanese: 'コマさん',
        japaneseName: 'Komasan',
        tribe: 'Charming',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Milk',
        evolution: 'Lv. 35 → Komane',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/komasan.png'
    },
    {
        yw: 100,
        yw2: 143,
        name: 'Komane',
        japanese: 'ししコマ',
        japaneseName: 'Shishikoma',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/komane.png'
    },
    {
        yw: 101,
        yw2: 144,
        name: 'Komajiro',
        japanese: 'コマじろう',
        japaneseName: 'Komajirou',
        tribe: 'Charming',
        rank: 'D',
        attribute: 'Lightning',
        favoriteFood: 'Milk',
        evolution: 'Lv. 33 → Komiger',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/komajiro.png'
    },
    {
        yw: 102,
        yw2: 145,
        name: 'Komiger',
        japanese: 'とらじろう',
        japaneseName: 'Torajirou',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/komiger.png'
    },
    {
        yw: 103,
        yw2: 146,
        name: 'Baku',
        japanese: 'バク',
        japaneseName: 'Baku',
        tribe: 'Charming',
        rank: 'D',
        attribute: 'Drain',
        favoriteFood: 'Juice',
        evolution: 'Lv. 29 → Obakusama (YW2)',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/baku.png'
    },
    {
        yw: 104,
        yw2: 148,
        name: 'Whapir',
        japanese: 'ハク',
        japaneseName: 'Haku',
        tribe: 'Charming',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/whapir.png'
    },
    {
        yw: 105,
        yw2: 151,
        name: 'Shmoopie',
        japanese: 'キュン太郎',
        japaneseName: 'Kyuntarou',
        tribe: 'Charming',
        rank: 'C',
        attribute: 'Restoration',
        favoriteFood: 'Hamburgers',
        evolution: '+ Love Scepter ↓ Pinkipoo',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/shmoopie.png'
    },
    {
        yw: 106,
        yw2: 152,
        name: 'Pinkipoo',
        japanese: 'ズキュキュン太',
        japaneseName: 'Zukyukyunta',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Restoration',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pinkipoo.png'
    },
    {
        yw: 107,
        yw2: 153,
        name: 'Pookivil',
        japanese: '裏キュン太',
        japaneseName: 'Urakyunta',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pookivil.png'
    },
    {
        yw: 108,
        yw2: 155,
        name: 'Frostina',
        japanese: 'ゆきおんな',
        japaneseName: 'Yuki Onna',
        tribe: 'Charming',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Cheap Sweets',
        evolution: '+ Glacial Clip ↓ Blizzaria',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/frostina.png'
    },
    {
        yw: 109,
        yw2: 156,
        name: 'Blizzaria',
        japanese: 'ふぶき姫',
        japaneseName: 'Fubukihime',
        tribe: 'Charming',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/blizzaria.png'
    },
    {
        yw: 110,
        yw2: 157,
        name: 'Damona',
        japanese: '百鬼姫',
        japaneseName: 'Hyakkihime',
        tribe: 'Charming',
        rank: 'S',
        attribute: 'Ice',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/damona.png'
    },
    {
        yw: 111,
        yw2: 163,
        name: 'Wiglin',
        japanese: 'ワカメくん',
        japaneseName: 'Wakamekun',
        tribe: 'Heartful',
        rank: 'E',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/wiglin.png'
    },
    {
        yw: 112,
        yw2: 165,
        name: 'Steppa',
        japanese: 'コンブさん',
        japaneseName: 'Konbusan',
        tribe: 'Heartful',
        rank: 'E',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/steppa.png'
    },
    {
        yw: 113,
        yw2: 166,
        name: 'Rhyth',
        japanese: 'メカブちゃん',
        japaneseName: 'Mekabuchan',
        tribe: 'Heartful',
        rank: 'D',
        attribute: 'Restoration',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rhyth.png'
    },
    {
        yw: 114,
        yw2: 161,
        name: 'Wantson',
        japanese: 'うらやましろう',
        japaneseName: 'Urayamashirou',
        tribe: 'Heartful',
        rank: 'E',
        attribute: 'Lightning',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/wantson.png'
    },
    {
        yw: 115,
        yw2: 162,
        name: 'Grubsnitch',
        japanese: 'つまみぐいのすけ',
        japaneseName: 'Tsumamiguinosuke',
        tribe: 'Heartful',
        rank: 'D',
        attribute: 'Earth',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/grubsnitch.png'
    },
    {
        yw: 116,
        yw2: 167,
        name: 'Hungramps',
        japanese: 'ひも爺',
        japaneseName: 'Himojii',
        tribe: 'Heartful',
        rank: 'E',
        attribute: 'Restoration',
        favoriteFood: 'Rice Balls',
        evolution: 'Lv. 22 → Hungogre',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/hungramps.png'
    },
    {
        yw: 117,
        yw2: 168,
        name: 'Hungogre',
        japanese: 'くいい爺',
        japaneseName: 'Kuiijii',
        tribe: 'Heartful',
        rank: 'B',
        attribute: 'Drain',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/hungogre.png'
    },
    {
        yw: 118,
        yw2: 169,
        name: 'Grainpa',
        japanese: 'こめ爺',
        japaneseName: 'Komejii',
        tribe: 'Heartful',
        rank: 'B',
        attribute: 'Restoration',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/grainpa.png'
    },
    {
        yw: 119,
        yw2: 176,
        name: 'Lodo',
        japanese: 'びんボーイ',
        japaneseName: 'Binbooi',
        tribe: 'Heartful',
        rank: 'D',
        attribute: 'Wind',
        favoriteFood: 'Milk',
        evolution: 'Lv. 28 → Okanenaidaa (YW2)',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/lodo.png'
    },
    {
        yw: 120,
        yw2: 178,
        name: 'Chippa',
        japanese: 'らくてん童',
        japaneseName: 'Rakutendou',
        tribe: 'Heartful',
        rank: 'C',
        attribute: 'Water',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/chippa.png'
    },
    {
        yw: 121,
        yw2: 181,
        name: 'Enerfly',
        japanese: 'ぜっこう蝶',
        japaneseName: 'Zekkouchou',
        tribe: 'Heartful',
        rank: 'D',
        attribute: 'Restoration',
        favoriteFood: 'Juice',
        evolution: '+ Enefly ↓ Betterfly',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/enerfly.png'
    },
    {
        yw: 122,
        yw2: 182,
        name: 'Enefly',
        japanese: 'ゼッコウ蝶',
        japaneseName: 'ZEKKOUchou',
        tribe: 'Heartful',
        rank: 'D',
        attribute: 'Drain',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/enefly.png'
    },
    {
        yw: 123,
        yw2: 183,
        name: 'Betterfly',
        japanese: 'サイコウ蝶',
        japaneseName: 'Saikouchou',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Restoration',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/betterfly.png'
    },
    {
        yw: 124,
        yw2: 184,
        name: 'Peppillon',
        japanese: 'アゲアゲハ',
        japaneseName: 'Ageageha',
        tribe: 'Heartful',
        rank: 'S',
        attribute: 'Restoration',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/peppillon.png'
    },
    {
        yw: 125,
        yw2: 189,
        name: 'Happierre',
        japanese: 'ホノボーノ',
        japaneseName: 'Honoboono',
        tribe: 'Heartful',
        rank: 'C',
        attribute: 'Restoration',
        favoriteFood: 'Bread',
        evolution: 'Dismarelda + ↓ Reversa',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/happierre.png'
    },
    {
        yw: 126,
        yw2: 190,
        name: 'Reversa',
        japanese: 'ヒョウヘンヌ',
        japaneseName: 'Hyouhennu',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Restoration',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/reversa.png'
    },
    {
        yw: 127,
        yw2: 191,
        name: 'Reversette',
        japanese: 'ヒョウヘンナ',
        japaneseName: 'Hyouhenna',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/reversette.png'
    },
    {
        yw: 128,
        yw2: 192,
        name: 'Ol` Saint Trick',
        japanese: 'サンタク老師',
        japaneseName: 'Santakuroushi',
        tribe: 'Heartful',
        rank: 'B',
        attribute: 'Restoration',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/ol_saint trick.png'
    },
    {
        yw: 129,
        yw2: 193,
        name: 'Ol` Fortune',
        japanese: 'ふくろじじい',
        japaneseName: 'Fukurojijii',
        tribe: 'Heartful',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Curry',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/ol_fortune.png'
    },
    {
        yw: 130,
        yw2: 194,
        name: 'Rollen',
        japanese: 'さいの目入道',
        japaneseName: 'Sai no Menyudo',
        tribe: 'Heartful',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rollen.png'
    },
    {
        yw: 131,
        yw2: 195,
        name: 'Dubbles',
        japanese: 'ゾロ目大明神',
        japaneseName: 'Zorome Daimyojin',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Water',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dubbles.png'
    },
    {
        yw: 132,
        yw2: 196,
        name: 'Papa Bolt',
        japanese: '雷オトン',
        japaneseName: 'Raioton',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Sushi (YW1: Meat)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/papa_bolt.png'
    },
    {
        yw: 133,
        yw2: 197,
        name: 'Uncle Infinite',
        japanese: '絶オジイ',
        japaneseName: 'Zetsuojii',
        tribe: 'Heartful',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Sushi (YW1: Meat)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/uncle_infinite.png'
    },
    {
        yw: 134,
        yw2: 198,
        name: 'Mama Aura',
        japanese: '聖オカン',
        japaneseName: 'Seikan',
        tribe: 'Heartful',
        rank: 'A',
        attribute: 'Restoration',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mama_aura.png'
    },
    {
        yw: 135,
        yw2: 199,
        name: 'Auntie Heart',
        japanese: '心オバア',
        japaneseName: 'Shinobaa',
        tribe: 'Heartful',
        rank: 'S',
        attribute: 'Restoration',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/auntie_heart.png'
    },
    {
        yw: 136,
        yw2: 202,
        name: 'Leadoni',
        japanese: 'みちび鬼',
        japaneseName: 'Michibiki',
        tribe: 'Shady',
        rank: 'E',
        attribute: 'Ice',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/leadoni.png'
    },
    {
        yw: 137,
        yw2: 203,
        name: 'Mynimo',
        japanese: 'えこひい鬼',
        japaneseName: 'Ekohiiki',
        tribe: 'Shady',
        rank: 'D',
        attribute: 'Drain',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/mynimo.png'
    },
    {
        yw: 138,
        yw2: 204,
        name: 'Ake',
        japanese: 'かたのり小僧',
        japaneseName: 'Katanorikozo',
        tribe: 'Shady',
        rank: 'E',
        attribute: 'Earth',
        favoriteFood: 'Cheap Sweets',
        evolution: '+ Buff Weight ↓ Payn',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/ake.png'
    },
    {
        yw: 139,
        yw2: 205,
        name: 'Payn',
        japanese: 'かたのり親方',
        japaneseName: 'Katanori Oyakata',
        tribe: 'Shady',
        rank: 'C',
        attribute: 'Earth',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/payn.png'
    },
    {
        yw: 140,
        yw2: 206,
        name: 'Agon',
        japanese: 'ぎっくり男',
        japaneseName: 'Gikkuri Otoko',
        tribe: 'Shady',
        rank: 'B',
        attribute: 'Earth',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/agon.png'
    },
    {
        yw: 141,
        yw2: 211,
        name: 'Negatibuzz',
        japanese: 'ネガティブーン',
        japaneseName: 'Negativoon',
        tribe: 'Shady',
        rank: 'E',
        attribute: 'Drain',
        favoriteFood: 'Juice',
        evolution: 'Lv. 17 → Moskevil',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/negatibuzz.png'
    },
    {
        yw: 142,
        yw2: 212,
        name: 'Moskevil',
        japanese: 'ジャネガブーン',
        japaneseName: 'Janegavoon',
        tribe: 'Shady',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/moskevil.png'
    },
    {
        yw: 143,
        yw2: 213,
        name: 'Scritchy',
        japanese: 'かゆかゆ',
        japaneseName: 'Kayukayu',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/scritchy.png'
    },
    {
        yw: 144,
        yw2: 214,
        name: 'Dimmy',
        japanese: 'ジミー',
        japaneseName: 'Jimi',
        tribe: 'Shady',
        rank: 'E',
        attribute: 'Wind',
        favoriteFood: 'Rice Balls',
        evolution: 'Lv. 24 → Blandon',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dimmy.png'
    },
    {
        yw: 145,
        yw2: 215,
        name: 'Blandon',
        japanese: 'カゲロー',
        japaneseName: 'Kagero',
        tribe: 'Shady',
        rank: 'B',
        attribute: 'Wind',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/blandon.png'
    },
    {
        yw: 146,
        yw2: 216,
        name: 'Nul',
        japanese: 'カイム',
        japaneseName: 'Kaimu',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/nul.png'
    },
    {
        yw: 147,
        yw2: 220,
        name: 'Hidabat',
        japanese: 'ヒキコウモリ',
        japaneseName: 'Hikikomori',
        tribe: 'Shady',
        rank: 'D',
        attribute: 'Wind',
        favoriteFood: 'Meat',
        evolution: '+ Tengloom ↓ Abodabat',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/hidabat.png'
    },
    {
        yw: 148,
        yw2: 221,
        name: 'Abodabat',
        japanese: 'トジコウモリ',
        japaneseName: 'Tojikomori',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/abodabat.png'
    },
    {
        yw: 149,
        yw2: 222,
        name: 'Belfree',
        japanese: 'ヤドコウモリ',
        japaneseName: 'Yadokoumori',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/belfree.png'
    },
    {
        yw: 150,
        yw2: 217,
        name: 'Suspicioni',
        japanese: 'ぎしんあん鬼',
        japaneseName: 'Gishin`anki',
        tribe: 'Shady',
        rank: 'D',
        attribute: 'Water',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/suspicioni.png'
    },
    {
        yw: 151,
        yw2: 218,
        name: 'Tantroni',
        japanese: 'ガ鬼',
        japaneseName: 'Gaki',
        tribe: 'Shady',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tantroni.png'
    },
    {
        yw: 152,
        yw2: 219,
        name: 'Contrarioni',
        japanese: 'あまのじゃく',
        japaneseName: 'Amanojaku',
        tribe: 'Shady',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/contrarioni.png'
    },
    {
        yw: 153,
        yw2: 229,
        name: 'Tengloom',
        japanese: 'ネクラマテング',
        japaneseName: 'Nekuramatengu',
        tribe: 'Shady',
        rank: 'C',
        attribute: 'Wind',
        favoriteFood: 'Bread (YW1: Vegetables)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tengloom.png'
    },
    {
        yw: 154,
        yw2: 230,
        name: 'Nird',
        japanese: 'ヨミテング',
        japaneseName: 'Yomitengu',
        tribe: 'Shady',
        rank: 'B',
        attribute: 'Wind',
        favoriteFood: 'Bread (YW1: Vegetables)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/nird.png'
    },
    {
        yw: 155,
        yw2: 234,
        name: 'Negasus',
        japanese: '魔ガサス',
        japaneseName: 'Magasasu',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/negasus.png'
    },
    {
        yw: 156,
        yw2: 235,
        name: 'Neighfarious',
        japanese: 'ウ魔',
        japaneseName: 'Uma',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/neighfarious.png'
    },
    {
        yw: 157,
        yw2: 236,
        name: 'Timidevil',
        japanese: 'デビビル',
        japaneseName: 'Debibiru',
        tribe: 'Shady',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Noodles',
        evolution: '+ Shard of Evil ↓ Beelzebold',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/timidevil.png'
    },
    {
        yw: 158,
        yw2: 237,
        name: 'Beelzebold',
        japanese: 'デビビラン',
        japaneseName: 'Debibiran',
        tribe: 'Shady',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/beelzebold.png'
    },
    {
        yw: 159,
        yw2: 238,
        name: 'Count Cavity',
        japanese: '虫歯伯爵',
        japaneseName: 'Mushibahakushaku',
        tribe: 'Shady',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Noodles',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/count_cavity.png'
    },
    {
        yw: 160,
        yw2: 241,
        name: 'Greesel',
        japanese: 'ドケチング',
        japaneseName: 'Dokechingu',
        tribe: 'Shady',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/greesel.png'
    },
    {
        yw: 161,
        yw2: 242,
        name: 'Awevil',
        japanese: 'ヤミまろ',
        japaneseName: 'Yamimaru',
        tribe: 'Shady',
        rank: 'S',
        attribute: 'Water',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/awevil.png'
    },
    {
        yw: 162,
        yw2: 244,
        name: 'Coughkoff',
        japanese: 'イガイガグリ',
        japaneseName: 'Igaigaguri',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Water',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/coughkoff.png'
    },
    {
        yw: 163,
        yw2: 245,
        name: 'Hurchin',
        japanese: 'チクチクウニ',
        japaneseName: 'Chikuchikuuni',
        tribe: 'Eerie',
        rank: 'D',
        attribute: 'Ice',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/hurchin.png'
    },
    {
        yw: 164,
        yw2: 251,
        name: 'Peckpocket',
        japanese: 'ヨコドリ',
        japaneseName: 'Yokodori',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Drain',
        favoriteFood: 'Hamburgers',
        evolution: 'Lv. 23 → Bunbundori (YW2)',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/peckpocket.png'
    },
    {
        yw: 165,
        yw2: 253,
        name: 'Rockabelly',
        japanese: 'はらおドリ',
        japaneseName: 'Haraodori',
        tribe: 'Eerie',
        rank: 'D',
        attribute: 'Drain',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rockabelly.png'
    },
    {
        yw: 166,
        yw2: 256,
        name: 'Buhu',
        japanese: 'トホホギス',
        japaneseName: 'Tohohogisu',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/buhu.png'
    },
    {
        yw: 167,
        yw2: 257,
        name: 'Flumpy',
        japanese: 'ブカッコウ',
        japaneseName: 'Bukakkou',
        tribe: 'Eerie',
        rank: 'C',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/flumpy.png'
    },
    {
        yw: 168,
        yw2: 258,
        name: 'Skreek',
        japanese: '死神鳥',
        japaneseName: 'Shinigamidori',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/skreek.png'
    },
    {
        yw: 169,
        yw2: 259,
        name: 'Manjimutt',
        japanese: 'じんめん犬',
        japaneseName: 'Jinmenken',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Fire',
        favoriteFood: 'Curry (YW1: Chinese Food)',
        evolution: '+ Manjimutt ↓ Multimutt',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/manjimutt.png'
    },
    {
        yw: 170,
        yw2: 260,
        name: 'Multimutt',
        japanese: 'かおベロス',
        japaneseName: 'Kaoberosu',
        tribe: 'Eerie',
        rank: 'B',
        attribute: 'Fire',
        favoriteFood: 'Curry (YW1: Chinese Food)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/multimutt.png'
    },
    {
        yw: 171,
        yw2: 261,
        name: 'Sir Berus',
        japanese: '三途の犬',
        japaneseName: 'Sanzunoinu',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Curry (YW1: Chinese Food)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/sir_berus.png'
    },
    {
        yw: 172,
        yw2: 246,
        name: 'Droplette',
        japanese: 'じめりんぼう',
        japaneseName: 'Jimerinbou',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Water',
        favoriteFood: 'Juice',
        evolution: 'Lv. 25 → Drizzle',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/droplette.png'
    },
    {
        yw: 173,
        yw2: 247,
        name: 'Drizzle',
        japanese: '雨ふらし',
        japaneseName: 'Amefurashi',
        tribe: 'Eerie',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/drizzle.png'
    },
    {
        yw: 174,
        yw2: 248,
        name: 'Slush',
        japanese: 'こおりんぼう',
        japaneseName: 'Koorinbou',
        tribe: 'Eerie',
        rank: 'E',
        attribute: 'Ice',
        favoriteFood: 'Juice',
        evolution: 'Lv. 25 → Alhail',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/slush.png'
    },
    {
        yw: 175,
        yw2: 249,
        name: 'Alhail',
        japanese: '化けあられ',
        japaneseName: 'Bakearare',
        tribe: 'Eerie',
        rank: 'B',
        attribute: 'Ice',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/alhail.png'
    },
    {
        yw: 176,
        yw2: 250,
        name: 'Gush',
        japanese: 'たらりん',
        japaneseName: 'Tararin',
        tribe: 'Eerie',
        rank: 'D',
        attribute: 'Fire',
        favoriteFood: 'Juice',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/gush.png'
    },
    {
        yw: 177,
        yw2: 266,
        name: 'Chatalie',
        japanese: '口だけおんな',
        japaneseName: 'Kuchidakeonna',
        tribe: 'Eerie',
        rank: 'D',
        attribute: 'Lightning',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/chatalie.png'
    },
    {
        yw: 178,
        yw2: 267,
        name: 'Nagatha',
        japanese: 'おつぼね様',
        japaneseName: 'Otsubonesama',
        tribe: 'Eerie',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/nagatha.png'
    },
    {
        yw: 179,
        yw2: 265,
        name: 'Dismarelda',
        japanese: 'ドンヨリーヌ',
        japaneseName: 'Donyoriinu',
        tribe: 'Eerie',
        rank: 'D',
        attribute: 'Earth',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dismarelda.png'
    },
    {
        yw: 180,
        yw2: 270,
        name: 'Cheeksqueek',
        japanese: 'おならず者',
        japaneseName: 'Onarazumono',
        tribe: 'Eerie',
        rank: 'C',
        attribute: 'Ice',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cheeksqueek.png'
    },
    {
        yw: 181,
        yw2: 271,
        name: 'Cuttincheez',
        japanese: 'へこ鬼神',
        japaneseName: 'Hekokishin',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cuttincheez.png'
    },
    {
        yw: 182,
        yw2: 275,
        name: 'Compunzer',
        japanese: 'おすべり様',
        japaneseName: 'Osuberisama',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Snacks',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/compunzer.png'
    },
    {
        yw: 183,
        yw2: 276,
        name: 'Lamedian',
        japanese: 'おしっしょう',
        japaneseName: 'Oshisshou',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Drain',
        favoriteFood: 'Snacks',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/lamedian.png'
    },
    {
        yw: 184,
        yw2: 277,
        name: 'Grumples',
        japanese: 'しわくちゃん',
        japaneseName: 'Shiwakuchan',
        tribe: 'Eerie',
        rank: 'B',
        attribute: 'Drain',
        favoriteFood: 'Milk',
        evolution: '+ Ageless Powder ↓ Everfore',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/grumples.png'
    },
    {
        yw: 185,
        yw2: 278,
        name: 'Everfore',
        japanese: '老いらん',
        japaneseName: 'Oiran',
        tribe: 'Eerie',
        rank: 'S',
        attribute: 'Drain',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/everfore.png'
    },
    {
        yw: 186,
        yw2: 279,
        name: 'Eterna',
        japanese: 'ふじみ御前',
        japaneseName: 'Fujimigozen',
        tribe: 'Eerie',
        rank: 'S',
        attribute: 'Drain',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/eterna.png'
    },
    {
        yw: 187,
        yw2: 280,
        name: 'Insomni',
        japanese: 'フゥミン',
        japaneseName: 'Fuumin',
        tribe: 'Eerie',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/insomni.png'
    },
    {
        yw: 188,
        yw2: 281,
        name: 'Sandi',
        japanese: 'おねむの精',
        japaneseName: 'Onemunosei',
        tribe: 'Eerie',
        rank: 'S',
        attribute: 'Drain',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/sandi.png'
    },
    {
        yw: 189,
        yw2: 285,
        name: 'Noko',
        japanese: 'ツチノコ',
        japaneseName: 'Tsuchinoko',
        tribe: 'Slippery',
        rank: 'E',
        attribute: 'Earth',
        favoriteFood: 'Hamburgers',
        evolution: '+ Drop of Joy ↓ Bloominoko',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/noko.png'
    },
    {
        yw: 190,
        yw2: 286,
        name: 'Bloominoko',
        japanese: 'フクリュウ',
        japaneseName: 'Fukuryuu',
        tribe: 'Slippery',
        rank: 'A',
        attribute: 'Earth',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/bloominoko.png'
    },
    {
        yw: 191,
        yw2: 287,
        name: 'Pandanoko',
        japanese: 'ツチノコパンダ',
        japaneseName: 'Tsuchinokopanda',
        tribe: 'Slippery',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Hamburgers',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pandanoko.png'
    },
    {
        yw: 192,
        yw2: 290,
        name: 'Heheheel',
        japanese: '笑ウツボ',
        japaneseName: 'Warautsubo',
        tribe: 'Slippery',
        rank: 'D',
        attribute: 'Restoration',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/heheheel.png'
    },
    {
        yw: 193,
        yw2: 291,
        name: 'Croonger',
        japanese: '歌ウナギ',
        japaneseName: 'Utaunagi',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/croonger.png'
    },
    {
        yw: 194,
        yw2: 292,
        name: 'Urnaconda',
        japanese: '大蛇のツボ',
        japaneseName: 'Daijanotsubo',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Restoration',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/urnaconda.png'
    },
    {
        yw: 195,
        yw2: 293,
        name: 'Fishpicable',
        japanese: 'キライギョ',
        japaneseName: 'Kiraigyo',
        tribe: 'Slippery',
        rank: 'D',
        attribute: 'Lightning',
        favoriteFood: 'Meat',
        evolution: 'Lv. 27 → Rageon',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/fishpicable.png'
    },
    {
        yw: 196,
        yw2: 294,
        name: 'Rageon',
        japanese: 'ゾウオ',
        japaneseName: 'Zouo',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Lightning',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rageon.png'
    },
    {
        yw: 197,
        yw2: 295,
        name: 'Tunatic',
        japanese: 'ギャクジョウオ',
        japaneseName: 'Gyakujouo',
        tribe: 'Slippery',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/tunatic.png'
    },
    {
        yw: 198,
        yw2: 300,
        name: 'Draggie',
        japanese: 'りゅーくん',
        japaneseName: 'Ryuukun',
        tribe: 'Slippery',
        rank: 'D',
        attribute: 'Earth',
        favoriteFood: 'Chinese Food',
        evolution: '+ Dragon Orb ↓ Dragon Lord',
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/draggie.png'
    },
    {
        yw: 199,
        yw2: 301,
        name: 'Dragon Lord',
        japanese: '龍神',
        japaneseName: 'Ryuujin',
        tribe: 'Slippery',
        rank: 'S',
        attribute: 'Earth',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dragon_lord.png'
    },
    {
        yw: 200,
        yw2: 302,
        name: 'Azure Dragon',
        japanese: '青龍',
        japaneseName: 'Seiryuu',
        tribe: 'Slippery',
        rank: 'S',
        attribute: 'Water',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/azure_dragon.png'
    },
    {
        yw: 201,
        yw2: 307,
        name: 'Daiz',
        japanese: 'ボー坊',
        japaneseName: 'Boobou',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Drain',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/daiz.png'
    },
    {
        yw: 202,
        yw2: 308,
        name: 'Confuze',
        japanese: 'しどろもどろ',
        japaneseName: 'Shidoromodoro',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Drain',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/confuze.png'
    },
    {
        yw: 203,
        yw2: 309,
        name: 'Chummer',
        japanese: 'ミチクサメ',
        japaneseName: 'Michikusame',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Water',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/chummer.png'
    },
    {
        yw: 204,
        yw2: 310,
        name: 'Shrook',
        japanese: 'トーシロザメ',
        japaneseName: 'Tooshirozame',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Vegetables',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/shrook.png'
    },
    {
        yw: 205,
        yw2: 311,
        name: 'Spenp',
        japanese: 'ムダヅカイ',
        japaneseName: 'Mudazukai',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Wind',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/spenp.png'
    },
    {
        yw: 206,
        yw2: 312,
        name: 'Almi',
        japanese: 'はらわシェル',
        japaneseName: 'Harawasheru',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Bread',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/almi.png'
    },
    {
        yw: 207,
        yw2: 313,
        name: 'Babblong',
        japanese: 'ナガバナ',
        japaneseName: 'Nagabana',
        tribe: 'Slippery',
        rank: 'C',
        attribute: 'Restoration',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/babblong.png'
    },
    {
        yw: 208,
        yw2: 314,
        name: 'Bananose',
        japanese: 'ナガバナナ',
        japaneseName: 'Nagabanana',
        tribe: 'Slippery',
        rank: 'A',
        attribute: 'Water',
        favoriteFood: 'Cheap Sweets',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/bananose.png'
    },
    {
        yw: 209,
        yw2: 317,
        name: 'Copperled',
        japanese: 'しきるん蛇',
        japaneseName: 'Shikirunja',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Fire',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/copperled.png'
    },
    {
        yw: 210,
        yw2: 318,
        name: 'Cynake',
        japanese: 'すねスネーク',
        japaneseName: 'Sunesuneeku',
        tribe: 'Slippery',
        rank: 'B',
        attribute: 'Water',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/cynake.png'
    },
    {
        yw: 211,
        yw2: 319,
        name: 'Slitheref',
        japanese: 'まむし行司',
        japaneseName: 'Mamushigyouji',
        tribe: 'Slippery',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/slitheref.png'
    },
    {
        yw: 212,
        yw2: 320,
        name: 'Venoct',
        japanese: 'オロチ',
        japaneseName: 'Orochi',
        tribe: 'Slippery',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/venoct.png'
    },
    {
        yw: 213,
        yw2: 321,
        name: 'Shadow Venoct',
        japanese: '影オロチ',
        japaneseName: 'Kageorochi',
        tribe: 'Slippery',
        rank: 'S',
        attribute: 'Restoration',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/shadow_venoct.png'
    },
    {
        yw: 214,
        yw2: 322,
        name: 'Shogunyan',
        japanese: 'ブシニャン',
        japaneseName: 'Bushinyan',
        tribe: 'Brave',
        rank: 'S',
        attribute: 'Wind',
        favoriteFood: 'Seafood',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/shogunyan.png'
    },
    {
        yw: 215,
        yw2: 323,
        name: 'Komashura',
        japanese: 'しゅらコマ',
        japaneseName: 'Shurakoma',
        tribe: 'Mysterious',
        rank: 'S',
        attribute: 'Fire',
        favoriteFood: 'Milk',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/komashura.png'
    },
    {
        yw: 216,
        yw2: 328,
        name: 'Dandoodle',
        japanese: 'イケメン犬',
        japaneseName: 'Ikemenken',
        tribe: 'Eerie',
        rank: 'S',
        attribute: 'Restoration',
        favoriteFood: 'Chinese Food',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dandoodle.png'
    },
    {
        yw: 217,
        yw2: 326,
        name: 'Elder Bloom',
        japanese: '花さか爺',
        japaneseName: 'Hanasakajii',
        tribe: 'Heartful',
        rank: 'S',
        attribute: 'Restoration',
        favoriteFood: 'Rice Balls',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/elder_bloom.png'
    },
    {
        yw: 218,
        yw2: 324,
        name: 'Gilgaros',
        japanese: '山吹鬼',
        japaneseName: 'Yamabuki',
        tribe: 'Tough',
        rank: 'S',
        attribute: 'Lightning',
        favoriteFood: 'Meat',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/gilgaros.png'
    },
    {
        yw: 219,
        yw2: 330,
        name: 'Sapphinyan',
        japanese: 'サファイニャン',
        japaneseName: 'Safainyan',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Water',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/sapphinyan.png'
    },
    {
        yw: 220,
        yw2: 331,
        name: 'Emenyan',
        japanese: 'エメラルニャン',
        japaneseName: 'Emerarunyan',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Restoration',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/emenyan.png'
    },
    {
        yw: 221,
        yw2: 332,
        name: 'Rubinyan',
        japanese: 'ルビーニャン',
        japaneseName: 'Rubiinyan',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Fire',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/rubinyan.png'
    },
    {
        yw: 222,
        yw2: 333,
        name: 'Topanyan',
        japanese: 'トパニャン',
        japaneseName: 'Topanyan',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Lightning',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/topanyan.png'
    },
    {
        yw: 223,
        yw2: 334,
        name: 'Dianyan',
        japanese: 'ダイヤニャン',
        japaneseName: 'Daianyan',
        tribe: 'Charming',
        rank: 'A',
        attribute: 'Ice',
        favoriteFood: 'Chocobo (YW1: Seafood)',
        evolution: null,
        image:
            'https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/dianyan.png'
    }
];

export default yokais;
