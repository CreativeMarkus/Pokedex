let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 6,
    types: ["fire"]
  },
  {
    name: "Squirtle",
    height: 5,
    types: ["water"]
  },
  {
    name: "Jigglypuff",
    height: 0.5,
    types: ["Fairy"]
  },
  {
    name: "Mewtwo",
    height: 2.0,
    types: ["Psychic"]
  },
];

for (let i = 0; i < pokemonList.length; i++) { 
  if (pokemonList[i].types.length > 7 && pokemonList[i].types.length < 10) { 
    console.log(pokemonList[i].name + " Wow, that’s big! " + pokemonList[i].types.length);
  } else if (pokemonList[i].types.length <= 7) {  
    console.log(pokemonList[i].name + " is average " + pokemonList[i].types.length);
  }
}
