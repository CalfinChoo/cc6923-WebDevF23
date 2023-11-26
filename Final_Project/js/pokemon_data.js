const monData = [
  {
    name: "bulbasaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ivysaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "venusaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charmander",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charmeleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charizard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "squirtle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "wartortle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "blastoise",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "caterpie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "metapod",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "butterfree",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "weedle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kakuna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "beedrill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pidgey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pidgeotto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pidgeot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rattata",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "raticate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "spearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "fearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ekans",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "arbok",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "raichu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "sandshrew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "sandslash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidoran-f",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidorina",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidoqueen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidoran-m",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidorino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "nidoking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "clefairy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "clefable",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "vulpix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ninetales",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "jigglypuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "wigglytuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "zubat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "golbat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "oddish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gloom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "vileplume",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "paras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "parasect",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "venonat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "venomoth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "diglett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dugtrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "meowth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "persian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "psyduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "golduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mankey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "primeape",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "growlithe",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "arcanine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "poliwag",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "poliwhirl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "poliwrath",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "abra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kadabra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "alakazam",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "machop",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "machoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "machamp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "bellsprout",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "weepinbell",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "victreebel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tentacool",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tentacruel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "geodude",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "graveler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "golem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ponyta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rapidash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "slowpoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "slowbro",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "magnemite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "magneton",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "farfetchd",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "doduo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dodrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "seel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dewgong",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "grimer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "muk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "shellder",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "cloyster",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gastly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "haunter",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gengar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "onix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "drowzee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "hypno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "krabby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kingler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "voltorb",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "electrode",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "exeggcute",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "exeggutor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "cubone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "marowak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "hitmonlee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "hitmonchan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "lickitung",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "koffing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "weezing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rhyhorn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rhydon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "chansey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tangela",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kangaskhan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "horsea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "seadra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "goldeen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "seaking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "staryu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "starmie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mr-mime",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "scyther",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "jynx",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "electabuzz",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "magmar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pinsir",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tauros",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "magikarp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gyarados",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "lapras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ditto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "eevee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "vaporeon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "jolteon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "flareon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "porygon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "omanyte",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "omastar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kabuto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kabutops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "aerodactyl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "snorlax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "articuno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "zapdos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "moltres",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dratini",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dragonair",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dragonite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mewtwo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "chikorita",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "bayleef",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "meganium",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "cyndaquil",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "quilava",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "typhlosion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "totodile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "croconaw",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "feraligatr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sentret",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "furret",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "hoothoot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "noctowl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ledyba",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ledian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "spinarak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ariados",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "crobat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "chinchou",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "lanturn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "pichu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "cleffa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "igglybuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "togepi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "togetic",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "natu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "xatu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "mareep",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "flaaffy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ampharos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "bellossom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "marill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "azumarill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sudowoodo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "politoed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "hoppip",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "skiploom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "jumpluff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "aipom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sunkern",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sunflora",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "yanma",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "wooper",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "quagsire",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "espeon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "umbreon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "murkrow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "slowking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "misdreavus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "unown",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "wobbuffet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "girafarig",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "pineco",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "forretress",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "dunsparce",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "gligar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "steelix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "snubbull",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "granbull",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "qwilfish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "scizor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "shuckle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "heracross",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sneasel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "teddiursa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ursaring",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "slugma",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "magcargo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "swinub",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "piloswine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "corsola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "remoraid",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "octillery",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "delibird",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "mantine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "skarmory",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "houndour",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "houndoom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "kingdra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "phanpy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "donphan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "porygon2",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "stantler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "smeargle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "tyrogue",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "hitmontop",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "smoochum",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "elekid",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "magby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "miltank",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "blissey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "raikou",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "entei",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "suicune",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "larvitar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "pupitar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "tyranitar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "lugia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "ho-oh",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "celebi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "treecko",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "grovyle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sceptile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "torchic",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "combusken",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "blaziken",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "mudkip",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "marshtomp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "swampert",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "poochyena",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "mightyena",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "zigzagoon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "linoone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wurmple",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "silcoon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "beautifly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "cascoon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "dustox",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lotad",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lombre",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "ludicolo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "seedot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "nuzleaf",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "shiftry",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "taillow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "swellow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wingull",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "pelipper",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "ralts",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "kirlia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "gardevoir",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "surskit",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "masquerain",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "shroomish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "breloom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "slakoth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "vigoroth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "slaking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "nincada",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "ninjask",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "shedinja",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "whismur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "loudred",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "exploud",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "makuhita",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "hariyama",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "azurill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "nosepass",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "skitty",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "delcatty",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sableye",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "mawile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "aron",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lairon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "aggron",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "meditite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "medicham",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "electrike",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "manectric",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "plusle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "minun",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "volbeat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "illumise",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "roselia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "gulpin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "swalot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "carvanha",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sharpedo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wailmer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wailord",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "numel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "camerupt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "torkoal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "spoink",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "grumpig",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "spinda",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "trapinch",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "vibrava",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "flygon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "cacnea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "cacturne",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "swablu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "altaria",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "zangoose",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "seviper",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lunatone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "solrock",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "barboach",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "whiscash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "corphish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "crawdaunt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "baltoy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "claydol",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lileep",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "cradily",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "anorith",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "armaldo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "feebas",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "milotic",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "castform",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "kecleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "shuppet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "banette",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "duskull",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "dusclops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "tropius",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "chimecho",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "absol",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wynaut",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "snorunt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "glalie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "spheal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sealeo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "walrein",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "clamperl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "huntail",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "gorebyss",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "relicanth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "luvdisc",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "bagon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "shelgon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "salamence",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "beldum",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "metang",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "metagross",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "regirock",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "regice",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "registeel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "latias",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "latios",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "kyogre",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "groudon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "rayquaza",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "jirachi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "deoxys-normal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "turtwig",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "grotle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "torterra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "chimchar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "monferno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "infernape",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "piplup",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "prinplup",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "empoleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "starly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "staravia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "staraptor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bidoof",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bibarel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "kricketot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "kricketune",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "shinx",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "luxio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "luxray",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "budew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "roserade",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "cranidos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rampardos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "shieldon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bastiodon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "burmy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "wormadam-plant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mothim",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "combee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "vespiquen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "pachirisu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "buizel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "floatzel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "cherubi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "cherrim",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "shellos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "gastrodon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "ambipom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "drifloon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "drifblim",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "buneary",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "lopunny",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mismagius",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "honchkrow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "glameow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "purugly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "chingling",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "stunky",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "skuntank",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bronzor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bronzong",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "bonsly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mime-jr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "happiny",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "chatot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "spiritomb",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "gible",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "gabite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "garchomp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "munchlax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "riolu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "lucario",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "hippopotas",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "hippowdon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "skorupi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "drapion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "croagunk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "toxicroak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "carnivine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "finneon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "lumineon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mantyke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "snover",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "abomasnow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "weavile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "magnezone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "lickilicky",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rhyperior",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "tangrowth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "electivire",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "magmortar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "togekiss",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "yanmega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "leafeon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "glaceon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "gliscor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mamoswine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "porygon-z",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "gallade",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "probopass",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "dusknoir",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "froslass",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "uxie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "mesprit",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "azelf",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "dialga",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "palkia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "heatran",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "regigigas",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "giratina-altered",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "cresselia",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "phione",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "manaphy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "darkrai",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "shaymin-land",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "arceus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "victini",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "snivy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "servine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "serperior",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tepig",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "pignite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "emboar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "oshawott",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "dewott",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "samurott",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "patrat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "watchog",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "lillipup",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "herdier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "stoutland",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "purrloin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "liepard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "pansage",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "simisage",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "pansear",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "simisear",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "panpour",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "simipour",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "munna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "musharna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "pidove",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tranquill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "unfezant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "blitzle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zebstrika",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "roggenrola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "boldore",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "gigalith",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "woobat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "swoobat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "drilbur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "excadrill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "audino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "timburr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "gurdurr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "conkeldurr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tympole",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "palpitoad",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "seismitoad",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "throh",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sawk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sewaddle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "swadloon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "leavanny",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "venipede",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "whirlipede",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "scolipede",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cottonee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "whimsicott",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "petilil",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "lilligant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "basculin-red-striped",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sandile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "krokorok",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "krookodile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "darumaka",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "darmanitan-standard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "maractus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "dwebble",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "crustle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "scraggy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "scrafty",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sigilyph",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "yamask",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cofagrigus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tirtouga",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "carracosta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "archen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "archeops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "trubbish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "garbodor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zorua",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zoroark",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "minccino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cinccino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "gothita",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "gothorita",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "gothitelle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "solosis",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "duosion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "reuniclus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "ducklett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "swanna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "vanillite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "vanillish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "vanilluxe",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "deerling",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sawsbuck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "emolga",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "karrablast",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "escavalier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "foongus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "amoonguss",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "frillish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "jellicent",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "alomomola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "joltik",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "galvantula",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "ferroseed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "ferrothorn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "klink",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "klang",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "klinklang",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tynamo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "eelektrik",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "eelektross",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "elgyem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "beheeyem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "litwick",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "lampent",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "chandelure",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "axew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "fraxure",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "haxorus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cubchoo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "beartic",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cryogonal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "shelmet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "accelgor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "stunfisk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "mienfoo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "mienshao",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "druddigon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "golett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "golurk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "pawniard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "bisharp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "bouffalant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "rufflet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "braviary",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "vullaby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "mandibuzz",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "heatmor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "durant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "deino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zweilous",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "hydreigon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "larvesta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "volcarona",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "cobalion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "terrakion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "virizion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tornadus-incarnate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "thundurus-incarnate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "reshiram",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zekrom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "landorus-incarnate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "kyurem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "keldeo-ordinary",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "meloetta-aria",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "genesect",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "chespin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "quilladin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "chesnaught",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "fennekin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "braixen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "delphox",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "froakie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "frogadier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "greninja",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "bunnelby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "diggersby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "fletchling",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "fletchinder",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "talonflame",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "scatterbug",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "spewpa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "vivillon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "litleo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pyroar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "flabebe",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "floette",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "florges",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "skiddo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gogoat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pancham",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pangoro",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "furfrou",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "espurr",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "meowstic-male",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "honedge",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "doublade",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "aegislash-shield",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "spritzee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "aromatisse",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "swirlix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "slurpuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "inkay",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "malamar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "binacle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "barbaracle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "skrelp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "dragalge",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "clauncher",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "clawitzer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "helioptile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "heliolisk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "tyrunt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "tyrantrum",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "amaura",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "aurorus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "sylveon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "hawlucha",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "dedenne",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "carbink",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "goomy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "sliggoo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "goodra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "klefki",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "phantump",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "trevenant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pumpkaboo-average",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gourgeist-average",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "bergmite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "avalugg",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "noibat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "noivern",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "xerneas",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "yveltal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "zygarde-50",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "diancie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "hoopa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "volcanion",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "rowlet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "dartrix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "decidueye",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "litten",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "torracat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "incineroar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "popplio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "brionne",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "primarina",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "pikipek",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "trumbeak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "toucannon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "yungoos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "gumshoos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "grubbin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "charjabug",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "vikavolt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "crabrawler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "crabominable",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "oricorio-baile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "cutiefly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "ribombee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "rockruff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lycanroc-midday",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "wishiwashi-solo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mareanie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "toxapex",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mudbray",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mudsdale",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "dewpider",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "araquanid",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "fomantis",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lurantis",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "morelull",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "shiinotic",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "salandit",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "salazzle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "stufful",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "bewear",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "bounsweet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "steenee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "tsareena",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "comfey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "oranguru",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "passimian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "wimpod",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "golisopod",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "sandygast",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "palossand",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "pyukumuku",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "type-null",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "silvally",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-red-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "komala",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "turtonator",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "togedemaru",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mimikyu-disguised",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "bruxish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "drampa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "dhelmise",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "jangmo-o",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "hakamo-o",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "kommo-o",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "tapu-koko",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "tapu-lele",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "tapu-bulu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "tapu-fini",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "cosmog",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "cosmoem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "solgaleo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lunala",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "nihilego",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "buzzwole",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "pheromosa",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "xurkitree",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "celesteela",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "kartana",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "guzzlord",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "necrozma",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "magearna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "marshadow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "poipole",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "naganadel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "stakataka",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "blacephalon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "zeraora",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "meltan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "melmetal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "grookey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "thwackey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "rillaboom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "scorbunny",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "raboot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cinderace",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sobble",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "drizzile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "inteleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "skwovet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "greedent",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "rookidee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "corvisquire",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "corviknight",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "blipbug",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dottler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "orbeetle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "nickit",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "thievul",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "gossifleur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "eldegoss",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "wooloo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dubwool",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "chewtle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "drednaw",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "yamper",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "boltund",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "rolycoly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "carkol",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "coalossal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "applin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "flapple",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "appletun",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "silicobra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sandaconda",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cramorant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "arrokuda",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "barraskewda",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "toxel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "toxtricity-amped",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sizzlipede",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "centiskorch",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "clobbopus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "grapploct",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sinistea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "polteageist",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "hatenna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "hattrem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "hatterene",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "impidimp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "morgrem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "grimmsnarl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "obstagoon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "perrserker",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cursola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sirfetchd",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "mr-rime",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "runerigus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "milcery",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "alcremie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "falinks",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "pincurchin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "snom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "frosmoth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "stonjourner",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "eiscue-ice",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "indeedee-male",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "morpeko-full-belly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cufant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "copperajah",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dracozolt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "arctozolt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dracovish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "arctovish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "duraludon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dreepy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "drakloak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "dragapult",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zacian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zamazenta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "eternatus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "kubfu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "urshifu-single-strike",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zarude",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "regieleki",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "regidrago",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "glastrier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "spectrier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "calyrex",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "wyrdeer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "kleavor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "ursaluna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "basculegion-male",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sneasler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "overqwil",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "enamorus-incarnate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sprigatito",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "floragato",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "meowscarada",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "fuecoco",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "crocalor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "skeledirge",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "quaxly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "quaxwell",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "quaquaval",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "lechonk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "oinkologne",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tarountula",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "spidops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "nymble",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "lokix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "pawmi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "pawmo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "pawmot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tandemaus",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "maushold",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "fidough",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dachsbun",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "smoliv",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dolliv",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "arboliva",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "squawkabilly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "nacli",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "naclstack",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "garganacl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "charcadet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "armarouge",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ceruledge",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tadbulb",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "bellibolt",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "wattrel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "kilowattrel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "maschiff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "mabosstiff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "shroodle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "grafaiai",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "bramblin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "brambleghast",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "toedscool",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "toedscruel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "klawf",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "capsakid",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "scovillain",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "rellor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "rabsca",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "flittle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "espathra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tinkatink",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tinkatuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tinkaton",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "wiglett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "wugtrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "bombirdier",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "finizen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "palafin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "varoom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "revavroom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "cyclizar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "orthworm",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "glimmet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "glimmora",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "greavard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "houndstone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "flamigo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "cetoddle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "cetitan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "veluza",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dondozo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tatsugiri",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "annihilape",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "clodsire",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "farigiraf",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dudunsparce",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "kingambit",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "great-tusk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "scream-tail",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "brute-bonnet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "flutter-mane",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "slither-wing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "sandy-shocks",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-treads",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-bundle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-hands",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-jugulis",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-moth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-thorns",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "frigibax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "arctibax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "baxcalibur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "gimmighoul",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "gholdengo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "wo-chien",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "chien-pao",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ting-lu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "chi-yu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "roaring-moon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-valiant",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "koraidon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "miraidon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "walking-wake",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "iron-leaves",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dipplin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "poltchageist",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "sinistcha",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "okidogi",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "munkidori",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "fezandipiti",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ogerpon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "deoxys-attack",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "deoxys-defense",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "deoxys-speed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "wormadam-sandy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "wormadam-trash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "shaymin-sky",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "giratina-origin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom-heat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom-wash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom-frost",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom-fan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "rotom-mow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "castform-sunny",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "castform-rainy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "castform-snowy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "basculin-blue-striped",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "darmanitan-zen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "meloetta-pirouette",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "tornadus-therian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "thundurus-therian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "landorus-therian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "kyurem-black",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "kyurem-white",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "keldeo-resolute",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "meowstic-female",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "aegislash-blade",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pumpkaboo-small",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pumpkaboo-large",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "pumpkaboo-super",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gourgeist-small",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gourgeist-large",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gourgeist-super",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "venusaur-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charizard-mega-x",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charizard-mega-y",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "blastoise-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "alakazam-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gengar-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kangaskhan-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pinsir-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gyarados-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "aerodactyl-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mewtwo-mega-x",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mewtwo-mega-y",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ampharos-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "scizor-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "heracross-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "houndoom-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "tyranitar-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "blaziken-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "gardevoir-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "mawile-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "aggron-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "medicham-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "manectric-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "banette-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "absol-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "garchomp-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "lucario-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "abomasnow-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "floette-eternal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "latias-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "latios-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "swampert-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sceptile-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "sableye-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "altaria-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "gallade-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "audino-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sharpedo-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "slowbro-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "steelix-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "pidgeot-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "glalie-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "diancie-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "metagross-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "kyogre-primal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "groudon-primal",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "rayquaza-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "pikachu-rock-star",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-belle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-pop-star",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-phd",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-libre",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-cosplay",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "hoopa-unbound",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "camerupt-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "lopunny-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "salamence-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "beedrill-mega",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rattata-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "raticate-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "raticate-totem-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-original-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-hoenn-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-sinnoh-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-unova-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-kalos-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-alola-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "raichu-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "sandshrew-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "sandslash-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "vulpix-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ninetales-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "diglett-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "dugtrio-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "meowth-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "persian-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "geodude-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "graveler-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "golem-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "grimer-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "muk-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "exeggutor-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "marowak-alola",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "greninja-battle-bond",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "greninja-ash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "zygarde-10-power-construct",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "zygarde-50-power-construct",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "zygarde-complete",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "gumshoos-totem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "vikavolt-totem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "oricorio-pom-pom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "oricorio-pau",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "oricorio-sensu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lycanroc-midnight",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "wishiwashi-school",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lurantis-totem",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "salazzle-totem",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-orange-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-yellow-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-green-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-blue-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-indigo-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-violet-meteor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-red",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-orange",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-yellow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-green",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-blue",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-indigo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "minior-violet",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mimikyu-busted",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mimikyu-totem-disguised",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "mimikyu-totem-busted",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "kommo-o-totem",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "magearna-original",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "pikachu-partner-cap",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "marowak-totem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ribombee-totem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "rockruff-own-tempo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "lycanroc-dusk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "araquanid-totem",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "togedemaru-totem",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "necrozma-dusk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "necrozma-dawn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "necrozma-ultra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "pikachu-starter",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "eevee-starter",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-world-cap",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "meowth-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "ponyta-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "rapidash-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "slowpoke-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "slowbro-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "farfetchd-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "weezing-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "mr-mime-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "articuno-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "zapdos-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "moltres-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "slowking-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "corsola-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "zigzagoon-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "linoone-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-iii",
  },
  {
    name: "darumaka-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "darmanitan-galar-standard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "darmanitan-galar-zen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "yamask-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "stunfisk-galar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zygarde-10",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "cramorant-gulping",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cramorant-gorging",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "toxtricity-low-key",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "eiscue-noice",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "indeedee-female",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "morpeko-hangry",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zacian-crowned",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zamazenta-crowned",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "eternatus-eternamax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "urshifu-rapid-strike",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "zarude-dada",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "calyrex-ice",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "calyrex-shadow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "venusaur-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "charizard-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "blastoise-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "butterfree-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "pikachu-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "meowth-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "machamp-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "gengar-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "kingler-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "lapras-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "eevee-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "snorlax-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "garbodor-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "melmetal-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "rillaboom-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "cinderace-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "inteleon-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "corviknight-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
    types: [
      {
        slot: 1,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
      {
        slot: 2,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "orbeetle-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "drednaw-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "coalossal-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",
    types: [
      {
        slot: 1,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "flapple-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "appletun-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "sandaconda-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "toxtricity-amped-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "centiskorch-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "hatterene-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "grimmsnarl-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "alcremie-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "copperajah-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "duraludon-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "urshifu-single-strike-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "urshifu-rapid-strike-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "toxtricity-low-key-gmax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "growlithe-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "arcanine-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "voltorb-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "electrode-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "typhlosion-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "qwilfish-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "sneasel-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "samurott-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dark",
          url: "https://pokeapi.co/api/v2/type/17/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "lilligant-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zorua-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "zoroark-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "braviary-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "sliggoo-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "goodra-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "avalugg-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ice",
          url: "https://pokeapi.co/api/v2/type/15/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-vi",
  },
  {
    name: "decidueye-hisui",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-vii",
  },
  {
    name: "dialga-origin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png",
    types: [
      {
        slot: 1,
        type: {
          name: "steel",
          url: "https://pokeapi.co/api/v2/type/9/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "palkia-origin",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-iv",
  },
  {
    name: "basculin-white-striped",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-v",
  },
  {
    name: "basculegion-female",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "enamorus-therian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "tauros-paldea-combat-breed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tauros-paldea-blaze-breed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "tauros-paldea-aqua-breed",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png",
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-i",
  },
  {
    name: "wooper-paldea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png",
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
      {
        slot: 2,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
    ],
    generation: "generation-ii",
  },
  {
    name: "oinkologne-female",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "dudunsparce-three-segment",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "palafin-hero",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "maushold-family-of-three",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tatsugiri-droopy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "tatsugiri-stretchy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png",
    types: [
      {
        slot: 1,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "squawkabilly-blue-plumage",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "squawkabilly-yellow-plumage",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "squawkabilly-white-plumage",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png",
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "gimmighoul-roaming",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "koraidon-limited-build",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "koraidon-sprinting-build",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "koraidon-swimming-build",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "koraidon-gliding-build",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "miraidon-low-power-mode",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "miraidon-drive-mode",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "miraidon-aquatic-mode",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "miraidon-glide-mode",
    frontImage: null,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "dragon",
          url: "https://pokeapi.co/api/v2/type/16/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ursaluna-bloodmoon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png",
    types: [
      {
        slot: 1,
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        slot: 2,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    generation: "generation-viii",
  },
  {
    name: "ogerpon-wellspring-mask",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ogerpon-hearthflame-mask",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    generation: "generation-ix",
  },
  {
    name: "ogerpon-cornerstone-mask",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    generation: "generation-ix",
  },
];
