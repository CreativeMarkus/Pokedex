(function () {
let pokemonList = [
  { 
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 8,
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
pokemonList.forEach(pokemon => {
  let output = `${pokemon.name} (height: ${pokemon.height})`; 
  if (pokemon.height > 6.5) {
    output += " - Wow, that's big!";
  }

  document.write(output + "<br>"); 
});
})();