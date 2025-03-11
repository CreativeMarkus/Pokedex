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
  let output = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";

  if (pokemonList[i].height > 6.5) {
    output += " - Wow, that’s big!";
  }

  document.write(output + "<br>");
}